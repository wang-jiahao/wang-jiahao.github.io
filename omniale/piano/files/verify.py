"""Verifier for omniale-c1-brahms-lesson-feedback.

Usage: python verify.py <output_dir> [--gt ground_truth.json] [--ref recording_reference.wav] [--json result.json]

Scoring (see case_card.md); weights come from ground_truth.json "weights" (v3: f1 .65, pattern .15, followup .10,
clips .05, plan .05; older versions default to .55/.10/.15/.10/.10):
  issue-detection F1   (strict matching on score position, type, hand, pitches, recording time)
  follow-up status accuracy (6 items)
  systematic-pattern grouping (mean over patterns P1, P2, ...): all core members must share one pattern_id, and that
  group must not also contain another pattern's core members; extra related issues in the group are allowed
  evidence clips (located in the recording by cross-correlation, must contain the error)
  practice plan (structure + covers the top-priority problems)
Issue types with "cover"/"within" (unsteady_tempo, dynamics) are matched on measure ranges; "q_range" (hesitation)
on the score position between the two notes where the hesitation happens.
PASS  = total >= 0.75 and precision >= 0.75 and recall >= 0.75
"""
import argparse, json, os, re, sys
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
NOTE_TYPES = {"wrong_pitch", "missed_note", "extra_note", "rhythm"}
BEAT_TOL = 0.5
TIME_TOL = 1.5


def fnum(x):
    try:
        if isinstance(x, (list, tuple)):
            x = x[0]
        return float(x)
    except Exception:
        return None


def inum(x):
    try:
        return int(round(float(x)))
    except Exception:
        return None


MEASURE_START = {}


def measure_start(m):
    """第 m 小节第 1 拍在录音中的时间（由真值的 beat_times 提供）。"""
    return MEASURE_START.get(m)


def matches(gt, p):
    """Return (ok, reason) whether prediction p satisfies ground-truth issue gt."""
    if str(p.get("type", "")).strip() != gt["type"]:
        return False, "type"
    m = inum(p.get("measure"))
    t = fnum(p.get("time_sec"))
    if t is None:
        return False, "time_missing"
    if "q_range" in gt:  # point-in-time issues located between two score positions (hesitation)
        b = fnum(p.get("beat"))
        if m is None or b is None:
            return False, "measure"
        q = (b - 3.0) if m == 0 else 1.0 + 3.0 * (m - 1) + (b - 1.0)
        if not (gt["q_range"][0] - 1e-9 <= q <= gt["q_range"][1] + 1e-9):
            return False, "position"
        a, b2 = gt["time_range_sec"]
        if not (a - TIME_TOL <= t <= b2 + TIME_TOL):
            return False, "time"
        return True, ""
    if "cover" in gt:  # passage-level issues: unsteady_tempo, dynamics, pedal
        me = inum(p.get("measure_end", m))
        if m is None or me is None:
            return False, "measure"
        lo, hi = min(m, me), max(m, me)
        c0, c1 = gt["cover"]
        w0, w1 = gt["within"]
        if not (lo <= c1 and hi >= c0 and lo >= w0 and hi <= w1):
            return False, "measure_range"
        if "direction" in gt and str(p.get("direction", "")).lower() != gt["direction"]:
            return False, "direction"
        a, b = gt["time_range_sec"]
        # 段落级问题允许把时间锚在该段首小节的起点（按整段来描述这个现象是合理的说法）
        ms = measure_start(gt["cover"][0])
        if ms is not None:
            a = min(a, ms)
        if not (a - TIME_TOL <= t <= b + TIME_TOL):
            return False, "time"
        return True, ""
    if gt["type"] == "restart":
        if m != gt["measure"]:
            return False, "measure"
        a, b = gt["time_range_sec"]
        if not (a - 2.0 <= t <= b + 2.0):
            return False, "time"
        return True, ""
    if m != gt["measure"]:
        return False, "measure"
    b = fnum(p.get("beat"))
    lo_b, hi_b = gt.get("beat_range", [gt["beat"], gt["beat"]])
    if b is None or not (lo_b - BEAT_TOL - 1e-9 <= b <= hi_b + BEAT_TOL + 1e-9):
        return False, "beat"
    if str(p.get("hand", "")).upper() != gt["hand"]:
        return False, "hand"
    if gt["type"] in ("wrong_pitch", "missed_note") and inum(p.get("expected_midi")) != gt["expected_midi"]:
        return False, "expected_midi"
    if gt["type"] in ("wrong_pitch", "extra_note") and inum(p.get("played_midi")) != gt["played_midi"]:
        return False, "played_midi"
    if abs(t - gt["time_sec"]) > TIME_TOL:
        return False, "time"
    return True, ""


def load_audio(path, sr=8000):
    import soundfile as sf
    from scipy.signal import resample_poly
    from math import gcd
    x, r = sf.read(path, always_2d=True)
    x = x.mean(axis=1)
    if r != sr:
        g = gcd(int(r), sr)
        x = resample_poly(x, sr // g, int(r) // g)
    return x.astype(np.float64)


def locate_clip(ref, clip, sr=8000):
    """Return (offset_sec, peak_normalized_corr)."""
    from scipy.signal import fftconvolve
    if len(clip) < sr or len(clip) > len(ref):
        return None, 0.0
    c = clip - clip.mean()
    num = fftconvolve(ref, c[::-1], mode="valid")
    cs = np.concatenate([[0.0], np.cumsum(ref ** 2)])
    e_ref = np.sqrt(np.maximum(cs[len(c):] - cs[:-len(c)], 1e-12))
    corr = num / (e_ref * np.linalg.norm(c) + 1e-12)
    k = int(np.argmax(corr))
    return k / sr, float(corr[k])


def mentions_measure(text, m):
    pats = [rf"第\s*{m}\s*小节", rf"第\s*{m}\s*[、,，\-–—~～至到和与]", rf"[、,，\-–—~～至到和与]\s*{m}\s*小节",
            rf"\bm{{1,2}}\.?\s*{m}\b", rf"\bbars?\s*{m}\b", rf"\bmeasures?\s*{m}\b", rf"(?<!\d){m}\s*小节"]
    return any(re.search(p, text, flags=re.I) for p in pats)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("output_dir")
    ap.add_argument("--gt", default=os.path.join(HERE, "ground_truth.json"))
    ap.add_argument("--ref", default=os.path.join(HERE, "recording_reference.wav"))
    ap.add_argument("--json", default=None)
    a = ap.parse_args()
    gt = json.load(open(a.gt, encoding="utf-8"))
    for _b in gt.get("beat_times", []):
        if abs(_b["beat"] - 1.0) < 1e-6:
            MEASURE_START.setdefault(_b["measure"], _b["time_sec"])
    out = a.output_dir
    res = {"errors": []}

    # ------------------------------------------------ issues
    try:
        fb = json.load(open(os.path.join(out, "feedback.json"), encoding="utf-8-sig"))
        preds = fb.get("issues", [])
        assert isinstance(preds, list)
    except Exception as e:
        res["errors"].append(f"feedback.json unreadable: {e}")
        fb, preds = {}, []
    used = set()
    pairs = {}
    near = {}
    for g in gt["issues"]:
        best, best_dt = None, 1e9
        for i, p in enumerate(preds):
            if i in used:
                continue
            ok, why = matches(g, p)
            if ok:
                dt = abs((fnum(p.get("time_sec")) or 0) - g["time_sec"])
                if dt < best_dt:
                    best, best_dt = i, dt
            elif why not in ("type",) and inum(p.get("measure")) == g["measure"]:
                near.setdefault(g["gt_id"], []).append({"pred": p.get("id", i), "failed_on": why})
        if best is not None:
            used.add(best)
            pairs[g["gt_id"]] = best
    tp = len(pairs)
    n_pred, n_gt = len(preds), len(gt["issues"])
    prec = tp / n_pred if n_pred else 0.0
    rec = tp / n_gt
    f1 = 2 * prec * rec / (prec + rec) if prec + rec else 0.0

    # neutral positions: real notes even a strong transcriber cannot confirm; reporting them as missed is ignored
    neutral_hits = []
    for i, p in enumerate(preds):
        if i in used or str(p.get("type")) != "missed_note":
            continue
        for nz in gt.get("neutral", []):
            if inum(p.get("measure")) == nz["measure"] and fnum(p.get("beat")) is not None and                     abs(fnum(p.get("beat")) - nz["beat"]) <= BEAT_TOL and inum(p.get("expected_midi")) == nz["expected_midi"]:
                neutral_hits.append(i)
                break
    n_pred -= len(neutral_hits)
    prec = tp / n_pred if n_pred else 0.0
    f1 = 2 * prec * rec / (prec + rec) if prec + rec else 0.0

    # false positives: classify against trap list (diagnostic only)
    fps = []
    for i, p in enumerate(preds):
        if i in used or i in neutral_hits:
            continue
        m, b = inum(p.get("measure")), fnum(p.get("beat"))
        hit = [t["kind"] for t in gt["traps"] if t["measure"] == m and (b is None or abs(t["beat"] - b) <= 0.75)]
        if p.get("type") in ("rhythm", "unsteady_tempo") and not hit:
            hit = ["rubato_or_phrasing (timing deviation judged as error)"]
        fps.append({"pred_id": p.get("id", i), "type": p.get("type"), "measure": m, "beat": b, "trap": hit})
    res["detection"] = {"tp": tp, "n_pred": n_pred, "n_gt": n_gt, "precision": round(prec, 4), "recall": round(rec, 4),
                        "f1": round(f1, 4), "neutral_ignored": [preds[i].get("id", i) for i in neutral_hits],
                        "matched": {k: preds[v].get("id", v) for k, v in pairs.items()},
                        "missed_gt": [g["gt_id"] + f" {g['type']} m{g['measure']} b{g['beat']}" for g in gt["issues"] if g["gt_id"] not in pairs],
                        "near_misses": near, "false_positives": fps}

    # ------------------------------------------------ systematic patterns
    pat_detail = {}
    for P in gt["patterns"]:
        ok = 0.0
        if all(m in pairs for m in P["members"]):
            pids = {str(preds[pairs[m]].get("pattern_id") or "") for m in P["members"]}
            if len(pids) == 1 and "" not in pids:
                pid = pids.pop()
                group = [i for i, p in enumerate(preds) if str(p.get("pattern_id") or "") == pid]
                described = any(str(x.get("pattern_id")) == pid for x in fb.get("patterns", []) if isinstance(x, dict))
                core = {pairs[m] for m in P["members"]}
                other_core = {pairs[m] for Q in gt["patterns"] if Q is not P for m in Q["members"] if m in pairs}
                # all core members grouped together, without conflating another pattern's core members;
                # extra related issues in the same group are allowed
                if core <= set(group) and not (set(group) & other_core) and described:
                    ok = 1.0
        pat_detail[P["pattern_id"]] = ok
    pat_score = sum(pat_detail.values()) / len(pat_detail)
    res["pattern"] = round(pat_score, 4)
    res["pattern_detail"] = pat_detail

    # ------------------------------------------------ follow-up
    fu_score, fu_detail = 0.0, {}
    try:
        fu = json.load(open(os.path.join(out, "followup.json"), encoding="utf-8-sig"))
        got = {inum(x.get("item")): str(x.get("status", "")).strip() for x in fu.get("items", [])}
        for g in gt["followup"]:
            fu_detail[g["item"]] = {"expected": g["status"], "got": got.get(g["item"])}
        fu_score = sum(v["expected"] == v["got"] for v in fu_detail.values()) / len(gt["followup"])
    except Exception as e:
        res["errors"].append(f"followup.json unreadable: {e}")
    res["followup"] = {"score": round(fu_score, 4), "items": fu_detail}

    # ------------------------------------------------ clips
    clip_ok, clip_detail = 0, {}
    try:
        ref = load_audio(a.ref)
    except Exception as e:
        ref = None
        res["errors"].append(f"reference audio: {e}")
    for g in gt["issues"]:
        if g["gt_id"] not in pairs or ref is None:
            continue
        p = preds[pairs[g["gt_id"]]]
        path = os.path.join(out, str(p.get("clip", "")))
        st = "missing"
        if p.get("clip") and os.path.isfile(path):
            try:
                c = load_audio(path)
                dur = len(c) / 8000
                if not (1.5 <= dur <= 16.0):
                    st = f"bad_duration {dur:.1f}s"
                else:
                    off, corr = locate_clip(ref, c)
                    lo, hi = g.get("time_range_sec", [g["time_sec"], g["time_sec"]])
                    if corr < 0.5:
                        st = f"not_from_recording corr={corr:.2f}"
                    elif off - 0.15 <= hi and off + dur + 0.15 >= lo:
                        st = "ok"
                        clip_ok += 1
                    else:
                        st = f"does_not_contain_error clip=[{off:.1f},{off+dur:.1f}]"
            except Exception as e:
                st = f"unreadable {e}"
        clip_detail[g["gt_id"]] = st
    clip_score = clip_ok / n_gt
    res["clips"] = {"score": round(clip_score, 4), "detail": clip_detail}

    # ------------------------------------------------ practice plan
    plan_score = 0.0
    pp = os.path.join(out, "practice_plan.md")
    if os.path.isfile(pp):
        txt = open(pp, encoding="utf-8-sig", errors="ignore").read()
        items = re.findall(r"^\s*(?:\d+[\.\)、]|[-*]|#+)\s+\S", txt, flags=re.M)
        top = {"G#_pattern_m4_8_12": sum(mentions_measure(txt, m) for m in (4, 8, 12)) >= 2,
               "rushing_m11_12": mentions_measure(txt, 11) or mentions_measure(txt, 12),
               "restart_m7": mentions_measure(txt, 7)}
        covered = sum(top.values())
        plan_score = 1.0 if (len(items) >= 3 and covered >= 2) else (0.5 if len(items) >= 3 else 0.25)
        res["practice_plan_detail"] = {"list_items": len(items), "top_problem_coverage": top}
    res["practice_plan"] = plan_score

    W = gt.get("weights", {"f1": 0.55, "followup": 0.15, "pattern": 0.10, "clips": 0.10, "plan": 0.10})
    total = W["f1"] * f1 + W["followup"] * fu_score + W["pattern"] * pat_score + W["clips"] * clip_score + W["plan"] * plan_score
    res["total"] = round(total, 4)
    res["passed"] = bool(total >= 0.75 and prec >= 0.75 and rec >= 0.75)
    s = json.dumps(res, ensure_ascii=False, indent=2)
    print(s)
    if a.json:
        open(a.json, "w", encoding="utf-8").write(s)


if __name__ == "__main__":
    main()
