window.DATA = {
  "meta": {
    "theme": "t05",
    "category": "消费电子",
    "lang": "zh"
  },
  "summary": "这段开箱把中兴 Axon 40 Ultra 的屏下摄像头（UDC）作为主线：先展示无挖孔屏幕的观感，再进入系统内的“前摄屏幕显示效果微调”，最后回到前摄样张。结合官方 400PPI、独立像素一驱一与 16MP 前置屏下摄像头说明，外部评测与 Microsoft/CVPR 的光学研究可以看出：UDC 的核心不是“是否看得见”，而是屏幕像素与透光量、衍射噪声之间的耦合。本报告把视频中的直观观察、官方参数、独立评测与技术论文放在一起，解释为什么屏幕趋近无孔而自拍仍难以达到常规前摄水平 [S0][S1][S2][S3][S4]。",
  "video": {
    "src": "../../media/source.mp4",
    "title": "【大家测】中兴 Axon 40 Ultra开箱体验",
    "duration": 986.069,
    "poster": "img/poster.png"
  },
  "segments": [
    {
      "id": "seg1",
      "start": 0,
      "end": 92,
      "title": "从期待到开箱：为什么这块屏幕被单独拎出来",
      "keyframe": "img/frame-00010.000.png",
      "caption": [
        {"type": "text", "text": "开场即把问题定位为“完美无缺的屏幕”与前置摄像头的冲突，并直接询问 2022 年 Axon 40 系列是否让屏下摄像头更完美 [S0]。"}
      ],
      "sources": ["S0"],
      "insights": []
    },
    {
      "id": "seg2",
      "start": 92,
      "end": 241,
      "title": "外观与三主摄：屏下之外的影像基础",
      "keyframe": "img/frame-00130.000.png",
      "caption": [
        {"type": "text", "text": "主播先看背面与三摄模组，提到双 IMX787 和潜望镜，这为后面“多摄同拍”埋下伏笔 [S0]。"}
      ],
      "sources": ["S0"],
      "insights": []
    },
    {
      "id": "seg3",
      "start": 241,
      "end": 398,
      "title": "正面观感：无挖孔带来的第一收益",
      "keyframe": "img/frame-00260.000.png",
      "caption": [
        {"type": "text", "text": "主播在这段里反复强调“看不到挖孔”，并用熄屏、亮屏、浅色、橘黄、蓝色等状态检查屏下区域的融合程度 [S0]。"},
        {"type": "image", "src": "anchors/A1-screen-338.jpg", "cap": "00:05:38 — 屏幕点亮后，主播认为屏下区域“几乎是看不出来的” [S0]。"},
        {"type": "flow", "title": "观感链路", "steps": ["熄屏时贴膜反而显孔 [S0]", "亮屏后几乎看不出 [S0]", "不同底色下仍保持融合 [S0]", "外部评测也只在灰底等场景偶见轻微痕迹 [S2]"]}
      ],
      "sources": ["S0", "S1", "S2"],
      "insights": []
    },
    {
      "id": "seg4",
      "start": 398,
      "end": 510,
      "title": "系统内的“前摄屏幕显示效果微调”",
      "keyframe": "img/frame-00430.000.png",
      "caption": [
        {"type": "text", "text": "系统设置里出现“前摄屏幕显示效果微调”，可按亮度分别调整红、绿、蓝小屏亮度；主播还演示了用像素级控制“挖孔”或改变挖孔颜色 [S0]。"},
        {"type": "image", "src": "anchors/A4-udc-adjust-468.jpg", "cap": "00:07:48 — “前摄屏幕显示效果微调”界面 [S0]。"},
        {"type": "flow", "title": "显示补偿路径", "steps": ["进入显示设置", "找到前摄屏幕显示效果微调", "按亮度分别调整红绿蓝小屏亮度", "可在屏下区域模拟挖孔或颜色"]}
      ],
      "sources": ["S0", "S1"],
      "insights": []
    },
    {
      "id": "seg5",
      "start": 510,
      "end": 748,
      "title": "影像系统与软件：从模式到多摄",
      "keyframe": "img/frame-00640.000.png",
      "caption": [
        {"type": "text", "text": "这段继续展开相机家族、8K 视频与多摄同拍等功能，说明 Axon 40 Ultra 并非只做屏幕，而是在整机影像与显示之间寻找平衡 [S0]。"}
      ],
      "sources": ["S0"],
      "insights": []
    },
    {
      "id": "seg6",
      "start": 748,
      "end": 885,
      "title": "前摄样张：屏下成像的真实代价",
      "keyframe": "img/frame-00756.000.png",
      "caption": [
        {"type": "text", "text": "主播回到前摄，直言“屏下摄像头要想解决拍照又想解决显示，其实都不是太容易”，随后给出一张随手自拍样张 [S0]。"},
        {"type": "image", "src": "anchors/A5-selfie-756.jpg", "cap": "00:12:36 — 前摄样张与屏幕同框展示 [S0]。"},
        {"type": "mindmap", "root": "前摄画质", "branches": [
          {"label": "视频观察", "items": ["随手样张仍难同时满足拍照与显示 [S0]"]},
          {"label": "外部评测", "items": ["独立评测称涂抹、噪声、逆光更明显 [S2]"]},
          {"label": "技术成因", "items": ["屏幕像素结构带来衍射与噪声 [S3][S4]"]}
        ]}
      ],
      "sources": ["S0", "S1", "S2", "S3", "S4"],
      "insights": []
    },
    {
      "id": "seg7",
      "start": 885,
      "end": 986,
      "title": "收束：屏幕很好，但“没有挖孔”仍不等于无代价",
      "keyframe": "img/frame-00930.000.png",
      "caption": [
        {"type": "text", "text": "结尾处主播再次强调屏下摄像头在高亮场景下很难看出阴影，并把贴膜反向贴制造挖孔，直观说明“无挖孔”对观感的价值 [S0]。"},
        {"type": "image", "src": "anchors/A6-close-928.jpg", "cap": "00:15:28 — 撕掉贴膜后的正面细节 [S0]。"}
      ],
      "sources": ["S0", "S2"],
      "insights": []
    }
  ],
  "anchors": [
    {"id": "A1", "label": "屏幕融合效果", "category": "comparison", "why": "视频称亮屏后几乎看不出，外部评测也观察到仅在灰底等场景偶有轻微痕迹。需要官方参数与独立评测互相印证。", "segmentIds": ["seg3", "seg7"], "frame": "anchors/A1-color-360.jpg"},
    {"id": "A2", "label": "前摄显示微调", "category": "more support", "why": "系统内提供了针对屏下区域的亮度和颜色微调，这是观察厂商补偿策略的直接证据。", "segmentIds": ["seg4"], "frame": "anchors/A3-top-region-430.jpg"},
    {"id": "A3", "label": "前摄画质", "category": "comparison", "why": "视频只给了一张随手样张，外部评测给出了更系统的画质评价，需要并列对照。", "segmentIds": ["seg6"], "frame": "anchors/A3-quality-875.jpg"},
    {"id": "A4", "label": "光学成因", "category": "background", "why": "Microsoft 和 CVPR 论文都指出屏幕像素结构会引入衍射与噪声，解释为什么 UDC 难以同时兼顾显示与成像。", "segmentIds": ["seg3", "seg6"], "frame": "anchors/A4-close-956.jpg"},
    {"id": "A5", "label": "官方参数语境", "category": "background", "why": "官方页面给出 400PPI、独立像素一驱一等参数，也给出 16MP 前置摄像头，可对照视频中的设置与样张。", "segmentIds": ["seg3", "seg4", "seg6"]}
  ],
  "research": [
    {"id": "S0", "type": "video", "title": "【大家测】中兴 Axon 40 Ultra开箱体验", "url": "https://www.bilibili.com/video/BV1ua411J7VA", "summary": "本地完整转写和抽帧显示，主播在 241–398s 强调无挖孔观感，在 398–510s 展示“前摄屏幕显示效果微调”，在 748–885s 给出前摄样张并评价其难度。", "anchorId": "A1", "publisher": "科技美学", "primary": true, "media": "../../media/source.mp4", "perception": "evidence-work/S0/reading.json"},
    {"id": "S1", "type": "web", "title": "为大场面而生 终极直板旗舰中兴Axon 40 Ultra正式发布", "url": "https://www.ztedevices.com/cn/news/zte-axon-40-ultra-product-lunch/", "summary": "官方说明屏下摄像区 400PPI、全屏蓝钻排列、独立像素一驱一、分布式透明走线、UDC Pro 屏显芯片，并标称 16MP 前置屏下摄像头与 2.24μm 融合大像素。", "anchorId": "A5", "publisher": "中兴手机官网", "primary": true, "media": "evidence-assets/docs/S1.html", "thumb": "evidence-assets/images/S1.png"},
    {"id": "S2", "type": "web", "title": "ZTE Axon 40 Ultra review: Hiding in plain sight", "url": "https://www.androidauthority.com/zte-axon-40-ultra-review-3171686/", "summary": "独立评测认为屏幕上的 UDC 大多数时候不可见，只在灰色背景等场景偶有轻微痕迹；但前摄画质明显落后，出现涂抹、噪声和“vaseline effect”。", "anchorId": "A3", "publisher": "Android Authority", "primary": false, "media": "evidence-assets/docs/S2.html", "thumb": "evidence-assets/images/S2.png"},
    {"id": "S3", "type": "web", "title": "Camera in Display | Applied Sciences | Microsoft", "url": "https://www.microsoft.com/applied-sciences/projects/camera-in-display", "summary": "Microsoft 解释把相机放在屏幕后可解决视角问题，但屏幕像素结构会带来衍射、噪声、对比度和可用光量损失；其 U-Net 方案用于去噪与去模糊。", "anchorId": "A4", "publisher": "Microsoft Applied Sciences", "primary": true, "media": "evidence-assets/docs/S3.html", "thumb": "evidence-assets/images/S3.png"},
    {"id": "S4", "type": "report", "title": "Image Restoration for Under-Display Camera", "url": "https://openaccess.thecvf.com/content/CVPR2021/papers/Zhou_Image_Restoration_for_Under-Display_Camera_CVPR_2021_paper.pdf", "summary": "论文把 UDC 还原拆成低光增强、去模糊与去噪，并强调真实/近真实数据与傅里叶光学衍射建模的重要性。", "anchorId": "A4", "publisher": "CVPR 2021 / Zhou et al.", "primary": true, "media": "evidence-assets/docs/S4.pdf"}
  ],
  "insights": [
    {
      "kind": "compare",
      "title": "显示与成像的实测落差",
      "table": {"cols": ["维度", "视频观察", "外部证据"], "rows": [["屏幕融合", "亮屏后几乎看不出，浅色仍可控 [S0]", "官方称 400PPI + 独立像素一驱一 [S1]"], ["显示细节", "系统内可按红绿蓝和亮度微调 [S0]", "官方称 UDC Pro 与 MRC/智能像素增强 [S1]"], ["前摄画质", "随手样张仍难同时满足拍照与显示 [S0]", "独立评测称涂抹、噪声、逆光更明显 [S2]"]]},
      "body": "视频呈现的是“看起来几乎无孔”，外部评测和官方参数把这一点拆成显示端与成像端两条线：显示端通过高像素密度和像素级驱动把痕迹压低；成像端则受屏幕遮挡影响，独立评测仍观察到涂抹和噪声 [S0][S1][S2]。",
      "sources": ["S0", "S1", "S2"],
      "evidence": [
        {"srcId": "S0", "quote": "如果没有这个贴膜 我觉得这个位置真的是相当的完美了", "local": "evidence-work/S0/transcript.txt"},
        {"srcId": "S1", "quote": "新机屏下摄像区屏幕采用400PPI高像素密度，全屏蓝钻排列，视觉融合效果更加完美；业界首发独立像素一驱一技术，每个像素单元都由单独的像素电路驱动，屏幕显示更清晰精细。", "local": "evidence-assets/docs/S1.html"},
        {"srcId": "S2", "quote": "I found that the camera wasn’t visible most of the time, though you’ll notice a very slight smudge every now and again whenever the screen shows gray shades and blurred backgrounds.", "local": "evidence-assets/docs/S2.html"}
      ]
    },
    {
      "kind": "cause",
      "title": "为什么屏幕越“完整”，成像越难",
      "body": "Microsoft 与 CVPR 研究共同指出，屏幕像素结构会引入衍射、噪声、对比度下降与可用光量减少；因此 UDC 不是简单把摄像头藏起来，而是显示像素与透光量之间的耦合。CVPR 进一步把还原拆成低光增强、去模糊和去噪 [S3][S4]。",
      "sources": ["S3", "S4"],
      "evidence": [
        {"srcId": "S3", "quote": "Placing cameras behind the screen could solve these problems, but doing so tends to degrade the image. Diffraction from the screen’s pixel structure can blur the image, reduce contrast, reduce usable light levels, and even obstruct some image content entirely, in ways that are dependent on the device’s display-pixel design.", "local": "evidence-assets/docs/S3.html"},
        {"srcId": "S4", "quote": "We regard UDC restoration as a combination of tasks such as low-light enhancement, de-blurring, and de-noising.", "local": "evidence-assets/docs/S4.pdf"}
      ]
    },
    {
      "kind": "context",
      "title": "官方技术参数的含义",
      "body": "中兴官方把屏下摄像区定为 400PPI、全屏蓝钻排列、独立像素一驱一，并配备 16MP 前置屏下摄像头；这解释了视频里“几乎看不出”的显示端表现，也说明厂商用硬件与算法同时补偿成像端 [S1]。",
      "sources": ["S1"],
      "evidence": [
        {"srcId": "S1", "quote": "前摄影像升级与全面屏进阶同步。中兴Axon 40 Ultra配备1600万像素前置屏下摄像头，可达2.24μm融合大像素效果，为屏下摄像区带来更大感光量。", "local": "evidence-assets/docs/S1.html"}
      ]
    }
  ]
};
