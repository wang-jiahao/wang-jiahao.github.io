# 回头的人｜归乡疑云

一辆车撞坏了水箱，一个男人才在故乡过夜。可在两个老朋友眼里，谁也不会为了这么小的事情回来。

## 播放

- **commentary.mp4**：中文剧情解说成片。H.264，24 fps，AAC 单声道。原画以完整 4:3 放映，下方另留字幕区；白字为叙述，暖黄色为同期对白的中译。字幕已烧录，直接播放即可，无需再加载 SRT。
- **script.md**：按成片顺序编排的完整文稿。标出同期对白、两声枪响以及首尾原声，不把角色的台词混作旁白。
- **subtitles.srt**：UTF-8 中文字幕，供检索、翻译或重新排版。
- **source_map.json**：每个连续取片区间一条。`output_start_s`、`output_end_s` 为成片秒数，`source_start_s`、`source_end_s` 为本题片源秒数；左闭右开。画面顺放、等速，按 24 fps 就近取源帧。题字是叠在原画上的，不是另一段片源。
- **edit_project.zip**：可复剪工程，含逐句选镜表、生成程序及此次实际使用的逐段旁白 WAV 和对齐数据，不含重复的电影拷贝。

## 影片与声音

原片 **The Strange Love of Martha Ivers**（1946），导演 **Lewis Milestone**，Hal Wallis Productions／Paramount。山姆、玛莎、沃尔特、托尼分别由 Van Heflin、Barbara Stanwyck、Kirk Douglas、Lizabeth Scott 饰演。素材为题给 `input/source.mp4`，时长 6949.15 秒；发行画面和声音以此版本为准。

片源：Internet Archive 条目 `Martha_Ivers_movie`，文件 `Strange_Love_Martha_Ivers_512kb.mp4`。采用题给 `SOURCES.md` 中原美国电影未续期的公共领域来源说明，不另作全球授权或现代修复版的权利声明。

本片新增中文文稿、原声中译、选镜、片名与人物字卡、字幕和混音。英文对白用本机 faster-whisper 转写以定位，镜头、反应与叙事顺序依据本片画面及声轨独立判断，未使用外部梗概、现成解说、外加配乐或他人译文。中文声轨用题给 `tools/tts.py` 的 Ethan 音色逐段合成；对白与枪声段撤掉旁白，其他段落低混现场原声。

## 复剪

在一个项目目录内解压工程，使 `edit.txt`、`finish.py` 与 `input/` 同级。把题给影片放在 `input/source.mp4`。系统需有 FFmpeg（带 libx264、libass）、Python、OpenCV、NumPy、SciPy、SoundFile、pyloudnorm；题字字体为 Windows 自带的微软雅黑、宋体和 Segoe UI。解压后**保持原文重建不需要重新合成，也不需要加载模型**：

```powershell
ffmpeg -v error -y -i input/source.mp4 -vn -ac 1 -ar 48000 -c:a pcm_s16le work/film.wav
python finish.py all
```

输出到该工程的 `submission/`。`edit.txt` 中每一段为一条旁白，行首是该句的画面入点（原片秒），`+` 表示继续用上一镜。`!` 指定无旁白的原声入、出点，其后各行是相对该段开头的字幕起点。仅改入点，直接重建即可；`python finish.py compile` 只生成音轨、ASS、SRT、文稿与映射，`python finish.py render` 只从已编译的时间线压制视频。

若重写旁白，在配有题给服务的环境中保留 `tools/tts.py`，依次执行 `python make_voice.py`、`python align_voice.py` 和 `python finish.py all`。对齐步骤使用标准 HF 缓存中的 `Systran/faster-whisper-small`。如仅对同一段原文重新断行，请先移走该段 `work/voices/` 中相应的对齐 JSON，再运行对齐；同文可继续用原 WAV。
