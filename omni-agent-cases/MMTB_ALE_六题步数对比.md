# MMTB 与 ALE：Agent 配置、工具操作与得分

| Benchmark / 案例 | Agent 配置 | 工具操作 | 得分 |
|---|---|---:|---:|
| MMTB / 三路机位 → 跟随当前发言人剪辑 | GPT-5.6 Sol + Codex 0.146.0 | 44 | 0.8333 |
| MMTB / 对照乐谱 → 找出钢琴演奏错误 | GPT-5.6 Sol + Codex 0.146.0 | 32 | 0.8000 |
| MMTB / 听到的字段 ≠ 焦点字段？无障碍审查 | GPT-5.6 Sol + Codex 0.146.0 | 28 | 1.0000 |
| MMTB 三题均值 | GPT-5.6 Sol + Codex 0.146.0 | 34.67 | 0.8778 |
| ALE / 镜头日志 | Claude Opus 4.8 + Claude Code | 53 | 1.0000 |
| ALE / 音乐转谱 | Claude Opus 4.7 + OpenClaw | 222 | 0.2221 |
| ALE / 白鹤抠像 | Claude Opus 4.8 + Claude Code | 197 | 0.5674 |
| ALE 三题均值 | 混合配置（见上） | 157.33 | 0.5965 |

工具操作按展开后的工具层计数，包含等待/轮询；MMTB 第一题含网络中断与恢复，导入历史未重复计数。

得分均值为所选三题得分的算术平均。各题评分规则、Agent 配置及预算不同，仅作这组案例的描述性统计，不代表整个 benchmark 的成绩或难度排名。

[网页对比表](https://wang-jiahao.github.io/omni-agent-cases/step_comparison.html) · [MMTB 案例](https://wang-jiahao.github.io/omni-agent-cases/#mmtb-multicam)
