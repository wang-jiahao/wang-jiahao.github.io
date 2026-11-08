本报告独立完成，交付入口为 index.html。只使用本地音视频感知；未调用云端音视频理解或转写服务，未启动子代理。

实际使用的工具：

- PowerShell、rg：读取任务、报告规范与模板；检索本次工作区和已下载资料。
- Python 3.12.7；FFmpeg / ffprobe 4.3.1：探测、抽帧及音频提取。源片为 H.264 / AAC，720×360，名义 30 fps，时长 986.069 秒；音频为 48 kHz 双声道。
- faster-whisper 1.2.1：CPU、int8、4 线程；large-v3-turbo 完整转写 0–986.069 秒，small 复核 240–580 秒。模型使用已缓存本地文件；转写有误词，关键段落已对照视频字幕和画面整理。
- PyAV 19.0.2、NumPy、Pillow 10.2.0：检查抽帧实际 PTS、制作联系表、观察图片及裁剪。15 张发布帧及封面与源片解码像素精确相等，实际时间均为请求整秒 + 0.021 秒；详见 _work/frame-timestamps.json。
- requests 2.32.3、BeautifulSoup 4.12.3：打开并保存公开网页、图片和 PDF；搜狗用于定位来源。Google 连接超时，Bing 多次无相关结果；这些搜索结果没有充当事实证据。
- curl：尝试 CVF PDF 的分段下载，45 秒超时；该不完整分段未用于报告。后来 requests 成功取得完整 CVF PDF，另保存 arXiv 版本作为备用阅读件。
- PyMuPDF 1.27.2.3：读取 CVPR 论文 10 页、提取文字与 Fig. 3。
- Node v18.19.0：运行随附的 toolkit/validate_data.mjs。
- Playwright 1.64.1 + 本机 Google Chrome：直接打开 file:// 报告进行真实播放、跳转、引用、图片和窄屏检查。最终运行没有自定义 Chromium 启动参数。

实际采用的来源与本地证据：

| ID | 打开的材料 | 阅读范围与副本 |
|---|---|---|
| S1 | 委托提供的源视频 BV1ua411J7VA | 完整本地转写、重点画面；media/source.mp4、_work/S1/reading.json。Bilibili 元数据 API 返回 412，因此作者与年份以片中口述为依据，题名为报告描述名。 |
| S2 | 中兴 2022-05-09 原始发布稿 | 发布正文、UDC 与前摄段落；_assets/docs/S2.html/.txt。 |
| S3 | 中兴官方产品与规格页及其产品图 | 规格文字、8 张原图；已用图片与裁剪均实看；_assets/docs/S3.html 与 _work/external-originals/。S2、S3 属同一生产者。 |
| S6 | Trusted Reviews，Peter Phelps，2022-06-23 | 屏幕、前摄、解锁正文及公开自拍样张；_assets/docs/S6.html、_assets/images/S6-selfie.jpg。 |
| S8 | Feng 等，CVPR 2021 | 摘要与完整 10 页 PDF；_assets/docs/S8.pdf、S8-paper.txt，_work/S8/reading.json。实验设备 Axon 20 与本机区分。 |
| S11 | Song 等，ICCV 2023 | 官方完整摘要；_assets/docs/S11.html/.txt。只引摘要支持的散射机制。 |
| S12 | Yang 等，ICCV 2023 | 官方完整摘要；_assets/docs/S12.html/.txt。吞吐量翻倍属于论文的光学模拟设计。 |

原始网页和 PDF 的来源 URL、访问时间、响应码与 SHA-256 记录在相邻 *.meta.json。备用、未采用的阅读件放在 _work/alternate-sources/，不计为报告中的独立证据。未读取隐藏评分、公开评分 rubric、参考答案或其他会话。

实际交付检查：

| 检查 | 实测结果 |
|---|---|
| 本地数据验证 | 12 段、7 个来源、6 个研究锚点；3 个比较洞察均带两家独立生产者及逐字证据；6 段引文精确匹配；27 个引用到的本地素材存在；0 警告。日志：_work/validation.txt。 |
| 时间轴与图像 | 0–986.069 秒连续覆盖；15 张源片图均落在所属段内；19 张正文图片 + 1 张封面；交付图像文件夹没有未放置图片。 |
| 模板和原视频完整性 | index.html、styles.css、js/app.js、js/link.js 与初始 SHA-256 一致；交付视频与输入 SHA-256 一致。_work/integrity.json。 |
| 实际播放 | currentTime 从 0.000000 到 1.530773 秒；解码视频 50 帧、音频 15679 字节；media error=null。 |
| 正向跳转 | 点击时间轴，请求 748.93 秒，暂停读数 749.221787 秒，选中 s10。 |
| 反向跳转 | 请求 323.60 秒，暂停读数 323.880550 秒，选中 s05。 |
| 片尾跳转 | 请求 904.93 秒，暂停读数 905.227931 秒，选中 s12。请求后继续播放约 0.3 秒再读取，故读数略大于目标。 |
| 引用 | 实际点击 s10 的可见 S6 引用，滚动到 src-S6 并高亮；视频时间保持 765 秒。 |
| 图片 | 19 张正文图全部加载，naturalWidth>0；独立自拍图灯箱打开成功，Escape 关闭成功。 |
| 窄屏与语言 | 390×844，scrollWidth=390，无横向溢出；视频宽 354；中文、t05 主题。桌面检查为 1440×1000。 |

浏览器实测明细和截图位于 _work/browser/。浏览器因媒体轨道时间戳报告时长 986.087 秒，与 ffprobe 容器时长相差 18 毫秒；报告沿用任务给定的 986.069 秒。跳转时 Chrome 会取消旧媒体读取，出现 net::ERR_ABORTED；最终非预期资源失败为 0，媒体解码、正反向跳转均成功。

初次浏览器脚本用固定 1.6 秒等待，解码启动后只前进 0.943591 秒，低于脚本的 1 秒阈值；该初次记录保留在 checks-initial.json。随后改为等待真实媒体时钟前进超过 1.5 秒再读取，最终检查通过。没有把单纯进程退出码当作播放成功。

本环境未安装官方 review/validate_omnidr_report MCP，未声称调用它们。最终结构和浏览器检查通过不代表实物实验；本机透过率、PSF、MTF、原始自拍和同场景配对对照仍属未测项目，正文已明确。
