# 《瓦尔卡玛》：寻找没有仇恨的家

中文剧情解说，成片 **11分15.36秒**。面向未看过原片的观众，包含剧情与结局。

## 交付文件

- `commentary.mp4`：完整成片，1280×720、25 fps，H.264 / AAC立体声；中文旁白、原片声音及烧录中文字幕。
- `script.md`：完整中文文稿，按成片时间列出旁白、保留原声及用途。
- `subtitles.srt`：277条中文字幕，UTF-8编码；包含重要外语对白的中文翻译。画面中白色为旁白，淡金色为原声翻译。
- `source_map.json`：130段实际选镜的源片和成片起止秒数；全部正常速度。片尾仍采用原片湖景，叠加改编署名。
- `edit/`：可重建时间线、ASS字幕、分段配音WAV、渲染引擎与入口脚本。
- `quality_check.json`：对最终交付文件的技术检查记录。

## 素材及改编

采用题面给定的 `input/source.mp4`，即 **Valkaama (2010) 官网完整SD版，Michael Georgi配乐，源片5593.6秒**。没有使用其他配乐版本或发行结局替代本片。保留源片1.8:1画幅，以1260×700画面置于1280×720画布中。

本改编重新组织并压缩原片三条交错叙事线，加入中文文稿、合成旁白、翻译字幕、人物提示及片尾署名，剪辑并调整原声响度；关键对白以独立原声段落保留。未使用外部音乐、外部剧情镜头或AI生成的情节图像。

电影：**Valkaama (2010)**。导演、制作、编剧及摄影：**Tim Baumann**；故事：**Hendrik Behnisch**；本版配乐：**Michael Georgi**。中文文稿、剪辑、字幕及制作：Codex。

原片及本中文解说改编按 **Creative Commons Attribution–ShareAlike 3.0（CC BY-SA 3.0，署名—相同方式共享）** 提供。再次传播或改编时请保留上述署名、来源与许可，并说明改动。

- 官方电影及许可页：<https://www.valkaama.com/index.php?page=movie>
- 官方版本下载页：<https://www.valkaama.com/index.php?page=valkaama>
- 本题版本来源：<https://www.valkaama.com/media/movie/Valkaama(music-MichaelGeorgi).avi>
- 许可全文：<https://creativecommons.org/licenses/by-sa/3.0/>

辅助资料仅使用官网英文字幕，核实本片对白：<https://www.valkaama.com/media/movie/subs/Valkaama_Subtitles_en.srt>。剧情、画面选择及结局以给定源片为依据，未使用外部梗概或早期剧本补写情节。

## 工具与重建

制作使用Python、OpenCV、Pillow、NumPy及FFmpeg/FFprobe。faster-whisper仅用于语音转写和配音时间对齐；题面提供的 `tools/tts.py` 使用默认Ethan音色，仅合成已写好的中文文稿。剧情理解、写稿、选镜与剪辑决策由本助手完成。

重建需要Python、NumPy、PATH中的FFmpeg/FFprobe，以及Microsoft YaHei中文字体。原片不重复打包；请使用题面给定的 `input/source.mp4`。在工作目录运行：

```powershell
python submission/edit/rebuild.py --source input/source.mp4 --out submission/commentary_rebuilt.mp4
```

重建使用已附配音，不需要TTS或ASR服务。缓存生成在 `submission/edit/build/`。`edit/project.json` 中的 `shots` 为实际剪辑区间，`blocks` 包含文稿、原声翻译和叙事分段；`edit/subtitles.ass` 控制烧录字幕、人物提示与片尾样式。修改镜头时同时更新其起止时间、所在分段与字幕；修改配音后应相应调整时间线。提交的 `source_map.json` 与成片使用的选镜一致。
