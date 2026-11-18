# 没有回音的归来

《The Cosmonaut / El cosmonauta》中文剧情解说，含剧透。成片约 **9 分 03 秒**。从星城的三个朋友讲起，将原片交错的时间线重组为「出发前的选择—地面发现的归来—斯塔斯经历的归来—电话与林道」。不把剪在一起的两个人解释成已经见面。

## 交付文件

| 文件 | 内容 |
| --- | --- |
| `commentary.mp4` | 完整成片，H.264、24 fps、960×500；原画面等比放大，不裁切。AAC 双声道，中文旁白与原片同期声、环境和配乐混音。 |
| `script.md` | 按成片时间排列的完整口播稿；单列无旁白的原声窗口、用途及中文意思。 |
| `subtitles.srt` | 与成片对应的 UTF-8 中文字幕。视频已烧录；白字是旁白，浅金色为原声译文。另附默认关闭的内嵌文字轨，不必叠开。 |
| `source_map.json` | 119 个顺放的剪辑区间（一个区间可包含原片自身的切镜）。成片与源片的秒数都以各自文件起点为零，结束时刻不含；`frame_in` 与 `frames` 以成片 24 fps 计。 |

## 声音与观看提示

- 约 02:50，安德烈亲口宣布人选；约 03:03，他在尤利娅面前解释自己的决定。先听他说什么，再看她的反应。
- 约 05:15，搜救者朝舱内查看。此后先跟地面搜救，再切换到橙色航天服的旅人；地面有返回舱，不等于找到了他。
- 约 07:32，电话里的安德烈转述自己的梦；约 07:43，是他在梦里问的第二个问题。此处保留的男声不是斯塔斯从飞船实时回答。
- 约 08:20，车驶出路面。保留失控、撞击与停下来的声响，随后旁白再进。

## 重建或编辑

本交付使用题目给定 `input/source.mp4`，不是另行下载的版本。以下命令从本工作目录的根目录执行。已有 `work/voice/` 分段录音及 `work/marks.json` 对齐结果时，**直接运行 `python render.py`** 即可按当前镜表重新输出成片及文稿、字幕和映射；不需再次调用 TTS。

若修改口播，编辑 `story.txt`（斜线只划分字幕，不读出），再运行 `python synth.py`、`python align_zh.py`、`python render.py`。合成使用给定的 `tools/tts.py`、Ethan 声线；重新合成得出的时长可能不同。`selections.py` 保存逐段选取的源片窗口，以及不压旁白的固定原声起止点；`render.py` 按实测语音时长切取、以帧计时，生成字幕后混音封装。要在其他剪辑软件复剪，可按 JSON 的源片入出点顺序铺轨，叠入 SRT；`audio` 中 `bed` 为旁白下的底声，`sync` 为对白原声，`fx` 为动作原声。

## 工具与来源

使用 FFmpeg / ffprobe、OpenCV、Pillow、NumPy、SciPy、SoundFile 和本地 faster-whisper。ASR 用于源片对白转写及中文录音对时；关键处复查连续抽帧和前后对白。剧情判断、文稿、译文和选镜依据该版本独立完成。没有使用外部剧情梗概、外部影片素材、另配音乐或其他模型生成的解说稿。

原片：**The Cosmonaut / El cosmonauta**（2013）。导演 **Nicolás Alcalá**；制作 **Riot Cinema Collective**（Carola Rodríguez、Bruno Teixidor 等）；配乐 Joan Valent。完整演职员及音乐署名见给定版片尾。所用文件时长 6136.239819 秒，SHA-256：`0beef7de272128f0991c7a1ec4d7e0c723326ca5a56aa5be91b5eadac0de4ebd`。

- 原片镜像：https://archive.org/download/the-cosmonaut-2013/The%20Cosmonaut%202013.mp4
- 项目许可说明：https://thecosmonaut.org/creative-commons/
- 许可：**Creative Commons Attribution–NonCommercial–ShareAlike 3.0**，https://creativecommons.org/licenses/by-nc-sa/3.0/ 。依据题面 `SOURCES.md` 的影片发行说明使用。本片是对给定版本进行摘选、重排、等比缩放、中文解说、字幕与声音混编的改编，按相同署名／非商业／相同方式共享条件提供；不是原片官方中文版本。
