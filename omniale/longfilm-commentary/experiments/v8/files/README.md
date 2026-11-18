# 两种归来

《The Cosmonaut / El cosmonauta》（2013）中文剧情解说，含剧透。成片约 **9分41秒**，1280×720、24 fps、H.264/AAC，画面烧录中文字幕，另附可选择的内嵌中文字幕轨。

## 文件

- `commentary.mp4`：完整成片，中文旁白与原片声音已混合。
- `script.md`：成片全部中文旁白，以及实际保留原声的译文和用途。
- `subtitles.srt`：与成片对应的 UTF-8 中文字幕。
- `source_map.json`：每个画面切点的成片／源片起止秒；原声对白另列。标题、片尾为自行排版的画面。
- `project/`：可恢复时间线、烧录字幕样式、标题图、章节和最终无损混音；`rebuild.py` 可重新输出同一剪辑。
- `quality_report.json`：实际文件规格、全片解码及其他技术检查结果，不是内容评分。

## 改编与叙述

依据本题给定的 `input/source.mp4`，6136.239819 秒、640×272。源片 SHA-256：`0beef7de272128f0991c7a1ec4d7e0c723326ca5a56aa5be91b5eadac0de4ebd`。

将源片的交错结构重排为“人物关系与愿望—受伤与人选—任务—两种归来—等待、回望与最后危机”。删去项目片头说明、访谈引子和长片尾；新写中文旁白、翻译所选对白、重新剪辑混音，并加人物提示、字幕、标题及署名。原画面保持宽银幕比例，上下留边；没有生成替代电影事件的图像。

人选部分区分安德烈的行动、自我辩护与对私心的解读。失联后分别标明地面、斯塔斯的个人经历与安德烈在电话中转述的梦。结尾呈现车子冲出道路及救人动作，保留后续结果与最后影像的开放性。

保留原声的两个叙事场合：出发前安德烈对尤莉娅宣布人选、解释选择；失联后安德烈在电话中说起梦、追问月球脚印的代价。两处均使用原声对白与紧邻的黄色中文翻译，没有中文旁白覆盖。其他段落保留低电平的源片同期音／原配乐，片头片尾也取自本片声音。

## 重建与编辑

在当前任务根目录运行：

```powershell
python submission/project/rebuild.py --source input/source.mp4 --out submission/rebuilt.mp4
```

需要 Python 3、PATH 中的 ffmpeg/ffprobe，以及 Windows 的微软雅黑字体。重建直接使用保存的 `audio.flac`，无须重新合成配音、访问模型或配置服务。时间线 `project/edit.json` 中 `clips` 记录画面、`voices` 记录逐句文稿及落点、`originals` 记录原声，`subtitles` 记录字幕；修改画面后可重建。若改写旁白，需重新配音并调整混音、字幕与时间线；原始中间配音路径只作为制作记录，重建脚本不依赖它们。

源片选材以秒计，正常速度播放；极短素材如有尾帧延长，映射中以 `freeze_tail_s` 记录。全片转换至24 fps；字幕以实际合成语音的转写辅助对齐，并逐段核对中文文稿。

## 工具与资料

本次制作使用 Python、ffmpeg/ffprobe、OpenCV、NumPy、Pillow。使用用户允许的本机 Hugging Face 缓存中的 faster-whisper small.en / large-v3-turbo / large-v3，仅作源片语音转写、关键对白复核与合成旁白检查。中文配音按题面调用 `tools/tts.py`，默认 Ethan，逐自然句合成，保留原音色并略放慢、不改变音高。剧情理解、中文写作、翻译、选镜和剪辑决定均由本次制作独立完成；没有外部通用模型代写或代剪，没有另查电影梗概或本题答案。

辅助文字资料仅为当前题面的 `TASK.md`、`SCORING.md`、`ENVIRONMENT.md`、`SOURCES.md`；没有新增外部音乐、图片或音效。

## 素材署名与许可

电影 **The Cosmonaut / El cosmonauta (2013)**，导演 **Nicolás Alcalá**，制作 **Riot Cinema Collective**；制作署名包括 **Carola Rodríguez、Bruno Teixidor**。主演 **Katrine De Candole（Yulia）、Leon Ockenden（Stas）、Max Wrottesley（Andrei）**。原电影、表演、摄影、音乐及其他制作署名归原作者，详见源片片尾。

题面给定具体版本来源：[Internet Archive 镜像](https://archive.org/download/the-cosmonaut-2013/The%20Cosmonaut%202013.mp4)。作品按 **Creative Commons Attribution–NonCommercial–ShareAlike 3.0** 的发行口径使用；不是公共领域作品。本中文解说及剪辑改编同样按署名、非商业、相同方式共享条件提供。

- [CC BY-NC-SA 3.0 许可](https://creativecommons.org/licenses/by-nc-sa/3.0/)
- [项目 Creative Commons 声明](https://thecosmonaut.org/creative-commons/)
- [2013年导演／制片方采访](https://unitednationsofphotography.com/2013/01/01/riot-cinema-collective-interview/)
- [发行合作方首发说明](https://www.frostclick.com/wp/index.php/2013/05/18/the-cosmonaut/)

以上来源与许可依据来自题面 `SOURCES.md`，没有以镜像上传者不一致的许可字段重新授予权利。
