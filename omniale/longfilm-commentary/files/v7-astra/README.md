# 间谍｜谁在看谁

**Fritz Lang，《Spione / Spies》（1928）｜中文剧情解说，含完整剧透。**

从保险柜里的密件到剧场里举起的手，本片用三个反复出现的物件串起故事：号段暴露了一次电报调包；一串珍珠照出两位间谍不同的选择；一个原本只为祈求平安的护身符，让索尼娅在残破的车厢里找到了人。

## 播放与查阅

- `commentary.mp4`：约 10 分 47 秒，H.264 / AAC 立体声，24 fps。原画面以完整 4:3 占据上方 960×720 像素；下方 84 像素为另设的字幕区。字幕已烧录，正常播放无需再挂载 SRT。
- `script.md`：按章列出的完整口播。探员号、车号按朗读方式写作汉字；屏幕字幕用阿拉伯数字，便于与原片道具对照。
- `subtitles.srt`：212 条 UTF-8 中文字幕；时间均相对于成片起点。
- `source_map.json`：按放映顺序列出各镜段。时码单位为秒，区间左闭右开；`source_start_s`、`source_end_s` 对应题面 `input/source.mp4`。`cue` 是工程中的段号.句号；原创片卡两项源时码为 `null`。`speed` 仅在异于原速时出现。
- `project.zip`：本次使用的剪辑脚本、定剪点、29 段普通话干声和逐字时码。未附上长片、模型、工具凭据或未采用的素材。

播放器支持 MP4 章节时可直接跳转。五章依次为 **00:00 谁在看谁**、**01:55 不是每件东西都能买**、**04:26 三封信，两个号码**、**07:08 最后一节车厢**、**09:08 幕落之前**。

## 来源与改编

原片导演 Fritz Lang，剧本 Thea von Harbou，摄影 Fritz Arno Wagner，制作 Fritz Lang Film / Ufa。采用题面给定的 Internet Archive `spies.-1928engsub` 条目的 640×480 衍生版。此版片头注明由 Friedrich-Wilhelm-Murnau-Stiftung 于 2003–2004 年修复，Transit 发行。原片版本、档案材料及来源记录见题面 `SOURCES.md`。本作不代表修复方或发行方。

中文剧情理解、写稿、选镜与剪辑依据该版正片；字卡参考题面 `input/public-English.srt` 和 `input/TRANSLATION_NOTES.md`，未引入小说或其他发行版结局。银行交易与日本密约两线分别处理；对俄国信使的怀疑保留为人物所得的情报，不是叙述者为其作证。

输入影片未带声轨。剪入的形象、道具、文字卡与剧情动作均来自原片；片名、章卡、尾卡、中文字幕与解说为此次改编新增。所有音乐及音效均为本作按场景编写、用振荡器和滤波噪声合成，没有外部录音或采样。护身符的旋律在交付、归还、认出三处呼应；隧道节奏在相撞时中断，落幕时不补掌声，让观众看见无声的掌声。未使用 Neil Brand 2005 年为此片所作的后配乐，也没有将默片字卡当作录音对白。

原片使用范围按题面就 1928 年原始电影在美国的公有领域状态处理；不主张本版修复、后配乐或本片在全球都无条件公有。

## 重建与编辑

在保留 `input/source.mp4` 的题目目录解压 `project.zip`，包内路径以 `work/` 开头。使用 Windows、Python 3.11、OpenCV、Pillow、NumPy、SciPy 及 PATH 中的 FFmpeg/ffprobe；字体为 Windows 自带的微软雅黑、宋体与 Georgia。已附选用的 WAV 与时码，**重建现稿不需要重新调用任何模型**。

```powershell
python work/finish.py
python work/verify.py
```

第一条命令按现有配音生成时间线、SRT、文稿、源片映射、混音及分章视频，再合并为 `submission/commentary.mp4`。同一版章节可复用本地编码缓存。第二条命令核对所有原片摘录中帧、字幕全文和时间界限，并抽取两张成片检查图到 `work/`。

`work/edit.txt` 是五章文稿与候选片段；`work/cues.txt` 才是精确入点：每行从一个源秒数开始，遇见 `词句=秒数` 就在说到该词的时刻切换画面。各镜头拍长来自当前配音。`work/timeline.py` 组织停顿、字幕、片卡和映射；`work/picture.py` 负责构图、渲染；`work/sound.py` 负责原创配乐、音效与对白混合。

如需改写文稿，同时更新受影响的词句切点；运行 `python work/voice.py`（调用题面 `tools/tts.py` 默认 Ethan 普通话音色）及 `python work/align.py`（faster-whisper small 只用于已知文稿的语音对齐），再重建。没有让合成、识别模型做影片理解、选镜或写稿。
