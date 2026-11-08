# Tools and provenance

## Local perception

- FFmpeg / ffprobe：读取视频元数据、抽帧与生成报告用关键帧。
- faster-whisper `large-v3-turbo`：本地 CPU 全片转写，输出 `output/_work/S0/reading.json` 与 `transcript.txt`。
- RapidOCR / ONNX Runtime：识别关键帧与界面文字，定位“前摄屏幕显示效果微调”等证据。
- Pillow：裁剪报告锚点图。
- Playwright + 系统 Chrome：实际打开 `output/index.html` 并执行交互检查。

## Opened sources

- Bilibili：《【大家测】中兴 Axon 40 Ultra开箱体验》，`https://www.bilibili.com/video/BV1ua411J7VA`。
- 中兴手机官网：《为大场面而生 终极直板旗舰中兴Axon 40 Ultra正式发布》，`https://www.ztedevices.com/cn/news/zte-axon-40-ultra-product-lunch/`。
- Android Authority：《ZTE Axon 40 Ultra review: Hiding in plain sight》，`https://www.androidauthority.com/zte-axon-40-ultra-review-3171686/`。
- Microsoft Applied Sciences：《Camera in Display》，`https://www.microsoft.com/applied-sciences/projects/camera-in-display`。
- CVPR 2021 / Zhou et al.：《Image Restoration for Under-Display Camera》，`https://openaccess.thecvf.com/content/CVPR2021/papers/Zhou_Image_Restoration_for_Under-Display_Camera_CVPR_2021_paper.pdf`。

## Actual checks

- `node toolkit/validate_data.mjs output/js/data.js`：结构、引用、证据与本地素材校验通过。
- Playwright 浏览器检查：已打开 `output/index.html`；确认 `zh` / `t05`、7 个分段、5 个来源、视频时长 986.087s、播放正常、前后跳转分别为 300.912s 与 100.923s、引用点击可定位并高亮来源、展开 11 个 details、实际加载 14 张图片，截图保存在 `output/_work/browser-check.png`。
