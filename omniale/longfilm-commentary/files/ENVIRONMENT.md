# 运行环境

Windows原生Codex CLI，正常联网。默认Python在PATH，预装faster-whisper、OpenCV、NumPy、Pillow、requests；ffmpeg/ffprobe在PATH。模型API直连，依赖和Hugging Face下载继承当前用户代理。

可复用标准Hugging Face缓存，包含多种faster-whisper尺寸；可自行安装其他ASR、OCR、媒体处理与TTS工具。请先检查已有缓存，不重复下载大权重。允许使用GPU支持的工具，但本机未提供已确认的NVIDIA CUDA设备。

默认TTS使用 `tools/tts.py`，通过 `COMMENTARY_TTS_URL` 调用只合成指定文稿的本机语音服务。每次1–600字符；长文稿按自然句/段拆分。默认Ethan，工具的真实时长由生成WAV决定，不保证指定秒数。不支持自然语言情绪指令，勿将不存在的控制参数当作已生效。可以改用其他TTS。

没有人为的执行时长、工具次数或帧数预算。允许查询通用文档、安装依赖；不允许获取本题现成解答、查看组织者真值/评分器/其他运行，或读取用户服务凭据。不得给自己断网、注入死代理或强制依赖离线。不可将通用语言/多模态模型作为外部剧情分析、写稿、选镜或自评代办者。

源片、TTS或网络工具出现真实基础设施故障时，保留错误与已有产物，说明原因；不要伪造成片、伪造听看结果或把无内容音轨当作旁白。
