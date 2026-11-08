# Tools, Sources and Delivery Checks

## Local media perception

- `ffprobe`：源视频为986.069秒、720×360、30fps，H.264视频与AAC双声道音频。
- `FFmpeg`（经`toolkit/media.py`）：保留原片复制到`media/source.mp4`；按30秒抽全片接触表，另抽25个精确时间点核验UDC、贴膜、自拍与片尾。
- `faster-whisper large-v3-turbo`：本机CPU完成0–986.069秒中文转写；`small`模型复核230–610秒核心UDC段。未调用云端转写或云端音视频理解服务。
- `Pillow`：生成接触表、转换已检查的报告帧、裁剪论文图。`PyMuPDF`：提取三篇CVPR论文全文文本并渲染论文页面。
- 完整转写、接触表、帧清单与阅读记录保存在`_work/`。自动转写的专名错误没有直接当作事实，正文按原帧与上下文复核。

## Opened sources used in the report

- `S1` 中兴官方产品规格：https://www.ztedevices.com/cn/product/zte-axon-40-ultra/ — 保存为`_assets/docs/S1.html`与`S1.txt`。
- `S2` 中兴2022-05-09发布稿：https://www.ztedevices.com/cn/news/zte-axon-40-ultra-product-lunch/ — 保存为`_assets/docs/S2.html`与`S2.txt`。
- `S4` 锋潮评测2022-06-11上手：https://baijiahao.baidu.com/s?id=1735287574967418016&wfr=spider&for=pc — 保存网页、文本和原文图片；采用优化前后自拍。
- `S5` TechWeb 2022-05-09评测：https://baijiahao.baidu.com/s?id=1732334091692377225&wfr=spider&for=pc — 保存网页、文本和原文图片；采用人像与猫样张。
- `S6` Feng等，CVPR 2021，UDC衍射复原：https://openaccess.thecvf.com/content/CVPR2021/html/Feng_Removing_Diffraction_Image_Artifacts_in_Under-Display_Camera_via_Dynamic_Skip_CVPR_2021_paper.html — 保存摘要、10页PDF、全文文本与Figure 2(a)。
- `S7` Kwon等，CVPR 2021，可控UDC复原：https://openaccess.thecvf.com/content/CVPR2021/html/Kwon_Controllable_Image_Restoration_for_Under-Display_Camera_in_Smartphones_CVPR_2021_paper.html — 保存摘要、10页PDF与全文文本。
- `S8` Zhou等，CVPR 2021，UDC成像与光学分析：https://openaccess.thecvf.com/content/CVPR2021/html/Zhou_Image_Restoration_for_Under-Display_Camera_CVPR_2021_paper.html — 保存摘要、10页PDF、全文文本与Figure 2。

网页通过`requests`实际打开并用BeautifulSoup提取正文；搜索仅用于发现资料，报告引文均来自已保存并阅读的页面或PDF。论文实验屏、Axon 20与Axon 40 Ultra严格分开，未套用研究对象的透光率或成像结果。

## Data and integrity checks

- `node toolkit/validate_data.mjs output/js/data.js`：通过；10个时间段、7个来源、7个研究锚点、25个被引用本地资产；2/2比较类结论具有来源证据，4条逐字引文全部匹配；零警告。
- `index.html`、`styles.css`、`js/app.js`、`js/link.js`的SHA-256与初始模板一致，未修改渲染器。
- `output/media/source.mp4`与任务源片SHA-256一致。文件清单和哈希见`_work/delivery-manifest.json`。
- `js/data.js`由严格JSON序列化为`window.DATA = <JSON>;`，不含函数、注释或可执行表达式。

## Browser checks

使用本机Google Chrome与Playwright，直接打开`output/index.html`的`file://`地址；结果保存在`_work/browser-checks.json`，16/16项通过。

- 视频元数据：Chrome报告986.087秒、720×360；可寻址终点986.087秒。静音播放1.2秒后实测到1.168825秒且仍在播放。
- 定位：前跳750.000秒、回跳325.000秒均准确；点击前摄自拍段时间轴可跳转并激活正确条目。
- 引用：`S1`、`S2`、`S4`、`S5`、`S6`、`S7`、`S8`七个目标均逐一测试，来源卡进入视口并出现高亮。
- 图像：16张报告图片全部解码，自然尺寸均大于零；灯箱打开和`Escape`关闭通过。
- 布局：桌面双栏、中文`t05`主题与暗色变量正常；390px移动视口无横向溢出，视频宽354px。
- 控制台：无JavaScript异常、无console error。仅记录到本地MP4在播放/定位过程中取消的`net::ERR_ABORTED`请求；实际播放、双向定位和后续操作均通过。
- 首次从页首点击长距离引用时，懒加载图片会改变页面高度，来源高亮成功但落点会移动；全部图片解码后重新逐一测试，7个引用均准确落地。保留官方模板，并在此披露该冷启动行为。
- 已目检`_work/browser-top.png`、`browser-seg8.png`、`browser-insights.png`和`browser-mobile.png`，确认图像、表格、引用和中文排版实际可见。

## Evidence limits

原片没有同场挖孔前摄对照、前摄原始文件、系统前摄视频、透光率、本机PSF或亮度/色度计测量。外部媒体评测条件不统一，报告保留分歧而不制造统一分数。所有剩余限制与逐项结论审查见`_work/research-review.json`。
