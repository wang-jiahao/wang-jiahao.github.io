"""Verifier for omniale-c1-subtitle-delivery-qc.

Usage: python verify.py <output_dir> [--gt ground_truth.json] [--json result.json]

Scoring:
  0.60 * issue-detection F1   (match on reel + cue number + rule; a missing subtitle matches on rule D4 + time)
  0.10 * severity accuracy    (matched issues whose major/minor label is right)
  0.15 * timing-fix validity  (all submitted in/out fixes of a reel are applied together, as in the corrected file;
                               a matched S1–S5 issue counts as fixed if that cue then has no timing violation)
  0.15 * verdicts             (per reel: pass / pass_with_notes / reject)
PASS = total >= 0.75 and precision >= 0.75 and recall >= 0.75 and both verdicts right
       and every major issue found (in delivery QC, a missed major issue ships to the client: the QC has failed).
Neutral items (low-confidence alignment, disputed lines, on-screen prompts in reel2) are neither hits nor false positives.
A GT item whose content is entirely untranslated also matches a cue=None report in that line's speech window.
A verdict also counts as right if it follows from the ground truth plus the agent's own claims on neutral items
(neutral means we cannot tell who is right there, so a verdict built on those claims cannot be judged wrong either).
"""
import argparse, copy, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from subqc_rules import check_reel, FPS

TIMING = {"S1", "S2", "S3", "S4", "S5"}


def to_frames(v):
    if v is None:
        return None
    if isinstance(v, (int, float)):
        return int(round(float(v) * FPS))
    m = re.match(r"\s*(\d+):(\d+):(\d+)[,.](\d+)\s*$", str(v))
    if m:
        h, mi, s, ms = m.groups()
        sec = int(h) * 3600 + int(mi) * 60 + int(s) + int(ms.ljust(3, "0")[:3]) / 1000
        return int(round(sec * FPS))
    try:
        return int(round(float(v) * FPS))
    except Exception:
        return None


def fnum(x):
    try:
        return float(x)
    except Exception:
        return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("output_dir")
    ap.add_argument("--gt", default=os.path.join(HERE, "ground_truth.json"))
    ap.add_argument("--json", default=None)
    a = ap.parse_args()
    G = json.load(open(a.gt, encoding="utf-8"))
    res = {"errors": [], "reels": {}}
    try:
        rep = json.load(open(os.path.join(a.output_dir, "qc_report.json"), encoding="utf-8-sig"))
        sub = {str(r.get("reel")): r for r in rep.get("reels", [])}
    except Exception as e:
        res["errors"].append(f"qc_report.json unreadable: {e}")
        sub = {}
    NZ = G["neutral"]
    tp = n_pred = n_gt = 0
    maj_gt = maj_hit = min_gt = min_hit = maj_fp = min_fp = 0
    sev_all = fix_all = 0
    sev_ok = sev_n = 0
    fix_ok = fix_n = 0
    verdict_ok = 0
    for reel, R in G["reels"].items():
        cues = R["delivered"]
        key_of = {c["cue"]: c["key"] for c in cues}
        by_key = {c["key"]: c for c in cues}
        preds = sub.get(reel, {}).get("issues", []) or []
        gts = R["issues"]
        used, matched = set(), {}
        for gi, g in enumerate(gts):
            for pi, p in enumerate(preds):
                if pi in used or str(p.get("rule", "")).strip().upper() not in [g["rule"]] + g.get("alt_rules", []):
                    continue
                pc = p.get("cue")
                if g["cue"] is None:
                    t = fnum(p.get("time_sec"))
                    s, e = g["missing_speech"]
                    if (pc in (None, "", "null")) and t is not None and s - 1.5 <= t <= e + 1.5:
                        used.add(pi); matched[gi] = pi; break
                else:
                    try:
                        if int(pc) == g["cue"]:
                            used.add(pi); matched[gi] = pi; break
                    except Exception:
                        # 该句内容完全没有译出时，报成"整句无字幕"（cue=None）也接受
                        t2 = fnum(p.get("time_sec"))
                        a2 = g.get("alt_null_speech")
                        if a2 and pc in (None, "", "null") and t2 is not None and a2[0] - 1.5 <= t2 <= a2[1] + 1.5:
                            used.add(pi); matched[gi] = pi; break
        # neutral predictions
        neutral = set()
        for pi, p in enumerate(preds):
            if pi in used:
                continue
            rule = str(p.get("rule", "")).strip().upper()
            t = fnum(p.get("time_sec"))
            try:
                key = key_of.get(int(p.get("cue")))
            except Exception:
                key = None
            c = by_key.get(key) or {}
            if [key, rule] in NZ.get("acceptable", {}).get(reel, []):
                neutral.add(pi)
            elif t is not None and any(lo <= t <= hi for lo, hi in NZ["zones"].get(reel, [])):
                neutral.add(pi)
            elif rule == "D2" and key in NZ["d2_cues"].get(reel, []):
                neutral.add(pi)
            elif rule == "D4" and key in NZ["d4_cues"].get(reel, []):
                neutral.add(pi)
            elif rule in ("F1", "F2", "F3") and NZ["f1_any"].get(reel):
                neutral.add(pi)
            elif rule in TIMING and (c.get("timing_neutral") or c.get("claim_neutral_timing")):
                neutral.add(pi)
            elif rule in ("S2", "S5") and c.get("out_neutral"):
                neutral.add(pi)
        fps_list = [dict(cue=p.get("cue"), rule=p.get("rule"), time_sec=p.get("time_sec"))
                    for pi, p in enumerate(preds) if pi not in used and pi not in neutral]
        maj_gt += sum(g["severity"] == "major" for g in gts)
        maj_hit += sum(gts[gi]["severity"] == "major" for gi in matched)
        min_gt += sum(g["severity"] != "major" for g in gts)
        min_hit += sum(gts[gi]["severity"] != "major" for gi in matched)
        for pi, p in enumerate(preds):
            if pi in used or pi in neutral:
                continue
            if str(p.get("severity", "")).strip().lower() == "major":
                maj_fp += 1
            else:
                min_fp += 1
        n_pred += len(preds) - len(neutral)
        n_gt += len(gts)
        tp += len(matched)
        # 把本片段提交的全部时间修正同时套用（相当于按全部修改意见改完的文件），再逐条检查
        mod = copy.deepcopy(cues)
        for p in preds:
            fx = p.get("fix") or {}
            fi, fo = to_frames(fx.get("in")), to_frames(fx.get("out"))
            try:
                pc = int(p.get("cue"))
            except Exception:
                continue
            if fi is not None and fo is not None and fo > fi:
                for c in mod:
                    if c["cue"] == pc:
                        c["in_f"], c["out_f"] = fi, fo
        after = check_reel(mod, R["cuts"])
        # severity + fix validity
        fix_detail = {}
        sev_all += len(gts)                                  # 分母＝全部真值项（漏掉＝没标对）
        fix_all += sum(1 for g in gts if g["rule"] in TIMING)  # 分母＝全部时间轴真值项
        for gi, pi in matched.items():
            g, p = gts[gi], preds[pi]
            sev_n += 1
            sev_ok += str(p.get("severity", "")).strip().lower() == g["severity"]
            if g["rule"] in TIMING:
                fix_n += 1
                fx = p.get("fix") or {}
                fi, fo = to_frames(fx.get("in")), to_frames(fx.get("out"))
                ok = False
                if fi is not None and fo is not None and fo > fi:
                    remaining = [x for x in after
                                 if x[1] in TIMING and (x[0] == g["cue"] or (x[1] == "S4" and x[0] == g["cue"] - 1))]
                    ok = not remaining
                fix_ok += ok
                fix_detail[f"cue{g['cue']}-{g['rule']}"] = ok
        got_v = str(sub.get(reel, {}).get("verdict", "")).strip()
        # 结论的可辩护性：中性项意味着无法判定谁对。把模型在中性项上报告的问题（按它自己标的严重程度）
        # 并入真值后推出的结论，也视为正确。
        def verdict_of(nmaj, nmin):
            return "reject" if nmaj or nmin > 6 else ("pass_with_notes" if nmin else "pass")
        g_maj = sum(g["severity"] == "major" for g in gts); g_min = len(gts) - g_maj
        n_maj = sum(str(preds[pi].get("severity", "")).strip().lower() == "major" for pi in neutral)
        n_min = len(neutral) - n_maj
        accepted = {R["verdict"], verdict_of(g_maj + n_maj, g_min + n_min)}
        verdict_ok += got_v in accepted
        res["reels"][reel] = dict(
            gt=len(gts), pred=len(preds), neutral_ignored=len(neutral), matched=len(matched),
            missed=[f"cue{g['cue']}-{g['rule']}({g['severity']})" for gi, g in enumerate(gts) if gi not in matched],
            false_positives=fps_list, fix_validity=fix_detail,
            verdict=dict(expected=R["verdict"], accepted=sorted(accepted), got=got_v))
    prec = tp / n_pred if n_pred else 0.0
    rec = tp / n_gt if n_gt else 0.0
    f1 = 2 * prec * rec / (prec + rec) if prec + rec else 0.0

    def f1_of(hit, gtn, fp):
        if not gtn:
            return None
        r_ = hit / gtn
        p_ = hit / (hit + fp) if hit + fp else 0.0
        return 2 * p_ * r_ / (p_ + r_) if p_ + r_ else 0.0

    f1_major = f1_of(maj_hit, maj_gt, maj_fp)
    f1_minor = f1_of(min_hit, min_gt, min_fp)
    # 严重问题权重 0.7：漏掉一个严重问题，交付就会把它带给客户
    parts = [(0.7, f1_major), (0.3, f1_minor)]
    wsum = sum(w for w, v in parts if v is not None)
    detection = sum(w * v for w, v in parts if v is not None) / wsum if wsum else 0.0
    # 严重程度与修正有效性以"全部应评项"为分母：漏掉的项等于既没标对级别、也没给出修正
    sev = sev_ok / sev_all if sev_all else 0.0
    fix = fix_ok / fix_all if fix_all else 0.0
    ver = verdict_ok / len(G["reels"])
    total = 0.70 * detection + 0.10 * sev + 0.10 * fix + 0.10 * ver
    res.update(precision=round(prec, 4), recall=round(rec, 4), f1=round(f1, 4),
               detection=round(detection, 4),
               f1_major=None if f1_major is None else round(f1_major, 4),
               f1_minor=None if f1_minor is None else round(f1_minor, 4),
               major_found=f"{maj_hit}/{maj_gt}", minor_found=f"{min_hit}/{min_gt}",
               severity=round(sev, 4),
               fix_validity=round(fix, 4), verdicts=round(ver, 4), total=round(total, 4),
               major_recall=round(maj_hit / maj_gt, 4) if maj_gt else 1.0,
               passed=bool(total >= 0.75 and prec >= 0.75 and rec >= 0.75 and ver == 1.0
                           and (maj_hit == maj_gt)))
    s = json.dumps(res, ensure_ascii=False, indent=2)
    print(s)
    if a.json:
        open(a.json, "w", encoding="utf-8").write(s)


if __name__ == "__main__":
    main()
