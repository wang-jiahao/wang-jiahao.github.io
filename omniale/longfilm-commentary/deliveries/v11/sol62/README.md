# 《去往瓦尔卡马》

《Valkaama》中文剧情解说，含全片剧透。成片时长 **11 分 54.4 秒**。

## 文件

- `commentary.mp4`：H.264 / AAC，25 fps，960 × 540。白色硬字幕对应中文旁白；浅金色字幕对应保留的英文对白，入场时有“原片对白”角标。
- `script.md`：按成片时间编排的完整旁白与原声翻译；原声同时列出成片和原片的精确时间范围。
- `subtitles.srt`：UTF-8 中文字幕，时间与硬字幕一致。播放器已经显示硬字幕时，不必另开外挂轨。
- `source_map.json`：镜头段按成片顺序排列，时间单位为秒，区间左闭右开。连续的原片镜头组可写为一个无跳转的源片区间；自制片尾署名卡源时间为 `null`。映射记录画面来源，不把连续配乐误标成画面来源。

## 制作与自检

仅使用给定的 5593.600 秒 SD 片源。以本地 faster-whisper 的英语转录辅助定位，再用 OpenCV 与 Pillow 的时间索引和关键段逐帧抽查核实人物、道具及动作顺序。先写人物知情时间线，再逐段手工选择镜头。未使用网络梗概、其他版本字幕或通用模型分析影片。

通过题面 `tools/tts.py` 使用 Ethan 声线；按自然语意切分，依据返回音频的实际长度与停顿对齐字幕。用 FFmpeg 编码、libass 烧录硬字幕。旁白区间不叠用含对白的现场音；从本片配乐提取连续底床，保留对白时压低底床并对进出点淡化。片尾保留原片水边声轨的留白。未引入外部音乐、音效或影像。

用 FFprobe 检查轨道与时长，用 FFmpeg 从头到尾解码检查，按映射边界核对帧数和剪辑连续性；抽查成片关键画面、字幕样式与原声窗口，包括邮件、署名信封、营火、父亲相认和小瓶结尾。

## 原作署名与许可

原作：**Valkaama（2010）**。导演、制作、编剧及摄影：**Tim Baumann**；故事：**Hendrik Behnisch**；采用 **Michael Georgi** 配乐版本。

- 官方电影与许可：https://www.valkaama.com/index.php?page=movie
- 官方版本下载页：https://www.valkaama.com/index.php?page=valkaama
- 精确原始版本：https://www.valkaama.com/media/movie/Valkaama(music-MichaelGeorgi).avi

本改编对原片进行了片段重编排、声轨剪辑及混音，添加中文旁白、翻译字幕和署名卡。原作及本改编均按 **Creative Commons Attribution–ShareAlike 3.0（CC BY-SA 3.0）** 许可共享：https://creativecommons.org/licenses/by-sa/3.0/ 。
