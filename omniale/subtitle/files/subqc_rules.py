"""字幕交付规范检查器（delivery_spec.md 中可程序判定的规则）。构建脚本与 verify.py 共用。

cue 字段：
  lines, in_f, out_f（帧）
  speech = [s_lo, s_hi, e_lo, e_hi]（片段内秒）：语音开始/结束的不确定区间（取 Whisper 与强制对齐两个估计的最早、最晚值）
  fn（画面文字字幕）, italic（应否斜体：True/False/None）, delivered_italic
  timing_neutral：该条时间不计分；out_neutral：该条出点不计分
"""
import re
FPS = 24


def fr(t):
    return int(round(t * FPS))


HALF_PUNCT = re.compile(r"[,\.\?!:;\"']")
CN_NUM_QTY = re.compile(r"[零一二两三四五六七八九十百千]+(?=分钟|秒|年|天|小时|次|个|%)")
EN_NAME = re.compile(r"\b(Thom|Celia|Barley)\b", re.I)


def nchar(line):
    return len(line.replace(" ", ""))


def check_reel(cues, cuts):
    """返回违规列表 [(cue序号(1起), 条款, 严重程度, 说明)]。cuts 为片段内秒。"""
    cf = [fr(c) for c in cuts]
    issues = []
    order = sorted(range(len(cues)), key=lambda k: (cues[k]["in_f"], cues[k].get("fn") is not None))
    dia_idx = [k for k in order if "fn" not in cues[k]]
    for k, c in enumerate(cues):
        idx = k + 1
        lines = c["lines"]
        n = sum(nchar(l) for l in lines)
        dur = c["out_f"] - c["in_f"]
        if any(nchar(l) > 16 for l in lines): issues.append((idx, "T1", "minor", ""))
        if len(lines) > 2: issues.append((idx, "T2", "minor", ""))
        if dur > 0 and n / (dur / FPS) > 9.0 + 1e-9: issues.append((idx, "T3", "minor", f"{n / (dur / FPS):.1f}字/秒"))
        joined = "\n".join(lines)
        single_ellipsis = re.search("(?<!…)…(?!…)", joined)
        if (HALF_PUNCT.search(joined.replace("...", "")) or "..." in joined or single_ellipsis
                or any(l.rstrip().endswith(("，", "。")) for l in lines)):
            issues.append((idx, "T4", "minor", ""))
        if CN_NUM_QTY.search(joined): issues.append((idx, "T5", "minor", ""))
        if EN_NAME.search(joined): issues.append((idx, "T6", "major", ""))
        if "fn" in c:
            continue
        if c.get("italic") is not None and bool(c.get("delivered_italic")) != c["italic"]:
            issues.append((idx, "D2", "minor", ""))
        if not (20 <= dur <= 7 * FPS): issues.append((idx, "S3", "minor", f"{dur}帧"))
        if not c.get("speech"):
            continue
        s_lo, s_hi, e_lo, e_hi = (fr(x) for x in c["speech"])
        tn, on = c.get("timing_neutral"), c.get("out_neutral")
        if not tn:
            i = c["in_f"]
            snapped = i in cf and s_lo - 12 <= i < s_lo
            if not snapped and not (s_lo - 6 <= i <= s_hi + 6):
                dist = (i - s_hi) if i > s_hi else (s_lo - i)
                issues.append((idx, "S1", "major" if dist > 12 else "minor", f"偏差约{dist}帧"))
        if not tn and not on:
            if c["out_f"] < e_lo - 6:
                issues.append((idx, "S2", "major", f"提前{e_lo - c['out_f']}帧截断"))
            elif c["out_f"] > e_hi + 36 and dur > 20 and (c["out_f"] + 2) not in cf:
                issues.append((idx, "S2", "minor", "停留过久"))
        if not tn:
            for kf in cf:
                if 1 <= c["in_f"] - kf <= 11 and s_lo - kf <= 12:
                    issues.append((idx, "S5", "minor", "入点未吸附")); break
        if not tn and not on:
            for kf in cf:
                o = c["out_f"]
                if 3 <= kf - o <= 11 or 1 <= o - kf <= 11:
                    spans = s_lo < kf < e_hi
                    new = kf - 2
                    if spans or new < e_lo - 6 or new - c["in_f"] < 20:
                        continue
                    issues.append((idx, "S5", "minor", "出点未吸附")); break
    for a, b in zip(dia_idx, dia_idx[1:]):
        g = cues[b]["in_f"] - cues[a]["out_f"]
        if g < 2 or 3 <= g <= 11:
            if cues[a].get("timing_neutral") and cues[b].get("timing_neutral"):
                continue
            issues.append((a + 1, "S4", "minor", f"间隔{g}帧"))
    return issues
