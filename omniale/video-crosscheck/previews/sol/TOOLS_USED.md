# TOOLS_USED

## 实际使用

- `toolkit/media.py inspect` + `qwen3.8-omni-flash`：对 `media/source.mp4` 的 0–180、180–360、360–540、540–720、720–900 秒视频区间做可见/可听观察；结果保存在 `_work/observations/obs-*.json`。
- `toolkit/media.py inspect --mode audio`：对 0–180、720–900 秒做口述核对，结果保存在 `_work/observations/audio-*.json`；300–540 秒音频请求返回 502，未把该次失败当作证据。
- `toolkit/media.py frame`（ffmpeg）：提取 15、260、390、455、645、752、805、855 秒帧；实际发布帧复制到 `img/`，并逐张用本地图像观察工具检查。
- `ffprobe`：核对源视频为 H.264/AAC、720×360、986.069 秒，并保留原声视频副本到 `media/source.mp4`。
- Python `requests` + BeautifulSoup：实际打开并保存 ZTE 官方发布稿、Tom’s Guide 独立评测、arXiv 论文的可回查摘录至 `_assets/docs/`。来源 URL 与读到的结论记录在 `js/data.js`。
- `node toolkit/validate_data.mjs output/js/data.js`：结构、路径、引用和比较证据检查通过；3 条来源证据摘录均在本地文件中匹配。
- Playwright/Chromium：对最终 `index.html` 做离线页面、分段跳转、引用展开、图片和视频 seek 检查；实测结果见 `_work/research-review.json`。

## 研究边界

片中关于屏幕观感、显微镜和自拍的内容按“视频观察”记录；外部来源只用于解释机制与交叉核对，不把厂商宣传语当成独立测量。Tom’s Guide 的屏下自拍判断与论文的光学机制共同支撑“显示收益和成像代价并存”的结论。
