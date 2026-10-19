# 字幕交付质检 · 实测结果

运行条件：Claude 系列用 Claude Code 2.1.302（`claude -p`，effort high），其余用 Codex CLI 0.136.0（`codex exec`，reasoning effort high）。
均不限时、不开 web search、空 Python venv，依赖由模型自行安装。网关报错时 Claude Code 用 `--resume` 续跑，Codex 的失败运行作废重跑（日志见 `infra_failures/`）。

## v5（最终版，23 项真值）

| 模型 | harness | 总分 | 通过 | 精确率 | 召回率 | 严重问题检出 | 两段结论 |
|---|---|---|---|---|---|---|---|
| gpt-6.1-sol | Codex | 0.879 | ❌ | 1.00 | 0.83 | 0.90 | 对 |
| glm-5.3 | Codex | 0.791 | ❌ | 0.89 | 0.74 | 0.70 | 对 |
| claude-opus-5 | Claude Code | 0.768 | ❌ | 1.00 | 0.70 | 0.50 | 对 |
| gpt-6-sol | Codex | 0.735 | ❌ | 0.78 | 0.78 | 0.70 | 对 |
| qwen3.8-max | Codex | 0.680 | ❌ | 0.88 | 0.65 | 0.50 | 错 |
| kimi-k3 | Codex | 0.654 | ❌ | 1.00 | 0.57 | 0.40 | 对 |
| deepseek-v4-pro | Codex | 0.369 | ❌ | 1.00 | 0.30 | 0.10 | 对 |

总分极差 0.511（0.369–0.879）；召回率极差 0.52；严重问题检出极差 0.80。
通过门槛：总分 ≥ 0.75、精确率 ≥ 0.75、召回率 ≥ 0.75、两段结论都正确，且严重问题全部检出。7 个模型全部未通过（最接近的 gpt-6.1-sol 只差严重问题没有全部检出）。

## 逐项通过率

判断一道题有没有区分度，看它的通过率是否落在 20–80% 之间：100% 和 0% 的题对模型排序不提供任何信息。

| 片段 | 序号 | 条款 | 级别 | 通过率 | 没找到的模型 |
|---|---|---|---|---|---|
| reel1 | 1 | D2 | 一般 | 86% | deepseek-v4-pro |
| reel1 | 4 | T4 | 一般 | 86% | glm-5.3 |
| reel1 | 7 | T3 | 一般 | 71% | qwen3.8-max、kimi-k3 |
| reel1 | 10 | T5 | 一般 | 100% | — |
| reel1 | 12 | S5 | 一般 | 57% | gpt-6.1-sol、kimi-k3、deepseek-v4-pro |
| reel1 | 5 | S4 | 一般 | 100% | — |
| reel2 | 2 | D2 | 一般 | 0% | gpt-6.1-sol、claude-opus-5、glm-5.3、gpt-6-sol、qwen3.8-max、kimi-k3、deepseek-v4-pro |
| reel2 | 3 | T4 | 一般 | 100% | — |
| reel2 | 4 | S2 | 严重 | 43% | claude-opus-5、qwen3.8-max、kimi-k3、deepseek-v4-pro |
| reel2 | 5 | D2 | 一般 | 86% | deepseek-v4-pro |
| reel2 | 10 | S1 | 严重 | 86% | deepseek-v4-pro |
| reel2 | 10 | S5 | 一般 | 86% | deepseek-v4-pro |
| reel2 | 14 | S1 | 一般 | 86% | deepseek-v4-pro |
| reel2 | 4 | T6 | 严重 | 100% | — |
| reel2 | 14 | D4 | 严重 | 86% | deepseek-v4-pro |
| reel2 | 6 | D4 | 严重 | 57% | gpt-6-sol、kimi-k3、deepseek-v4-pro |
| reel2 | 2 | D4 | 严重 | 14% | claude-opus-5、glm-5.3、gpt-6-sol、qwen3.8-max、kimi-k3、deepseek-v4-pro |
| reel2 | 8 | T6 | 严重 | 29% | claude-opus-5、glm-5.3、qwen3.8-max、kimi-k3、deepseek-v4-pro |
| reel2 | 9 | D4 | 严重 | 0% | gpt-6.1-sol、claude-opus-5、glm-5.3、gpt-6-sol、qwen3.8-max、kimi-k3、deepseek-v4-pro |
| reel2 | 10 | T7 | 一般 | 100% | — |
| reel2 | 16 | D4 | 严重 | 57% | qwen3.8-max、kimi-k3、deepseek-v4-pro |
| reel2 | 12 | D4 | 一般 | 0% | gpt-6.1-sol、claude-opus-5、glm-5.3、gpt-6-sol、qwen3.8-max、kimi-k3、deepseek-v4-pro |
| reel2 | 缺失 | D4 | 严重 | 71% | claude-opus-5、deepseek-v4-pro |

分布：满分（无信息） 5 项；区分带 20–80% 15 项；全挂（无信息） 3 项。

## v4 到 v5 的区分度改善

| | v4（19 项真值 / 4 个模型） | v5（23 项真值 / 7 个模型） |
|---|---|---|
| 满分项（无信息） | 15 | **5** |
| **区分带 20–80%** | **3** | **15** |
| 全挂项（无信息） | 1 | 3 |
| 总分极差 | 0.123 | **0.511** |
| 召回率极差 | 0.11 | **0.52** |
| 严重问题检出极差 | 0.25 | **0.80** |

v4 的问题不是没人通过，而是**分数没有刻度**：19 项里 15 项人人满分、1 项人人全挂，
只有 3 项在做区分，于是分数挤在一起，排序还失真了（最弱的 fable-5 反而拿到最高分）。
v5 把区分带扩到 15 项后，排序变得合理：deepseek-v4-pro 垫底（召回 0.30、严重问题 1/10），强模型在上。

注：两版的区分带分辨率不同（v4 只有 4 个模型，通过率只能取 0/25/50/75/100%），因此 v4 的「满分项」数量会被少量模型高估；但 15 项同时被 4 个模型全部找到，本身已说明题目过易。

## 历史版本

各版本的运行产物在 `v1_*` 到 `v5_*` 目录下，各版真值在 `v*_materials/`。版本演进见 case_card.md 第 7 节。
