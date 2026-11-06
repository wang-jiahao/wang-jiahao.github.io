window.DATA = {
  "meta": {
    "theme": "t05",
    "category": "手机显示与计算成像 · 深度研究",
    "lang": "zh"
  },
  "video": {
    "title": "Axon 40 Ultra：一块完整屏幕背后的成像代价",
    "src": "../../media/source.mp4",
    "duration": 986.069,
    "poster": "img/frame-00344.000.png"
  },
  "summary": "2022 年《大家测》开箱以中兴 Axon 40 Ultra 为例，展示无可见挖孔、局部显示微调、像素放大及一张自拍 [S1]。结论需分开看：屏幕完整性在演示和独立评测中均获好评，但自拍色彩和细节仍有取舍 [S2]；UDC 的面板会衰减并衍射入射光，成像处理只能在有限信息上补偿 [S3][S4]。本报告不把其他面板的实验数据当成本机数据。",
  "segments": [
    {
      "id": "seg1",
      "start": 0,
      "end": 295,
      "title": "开箱与设计：为什么要消掉前摄开孔",
      "caption": [
        {
          "type": "image",
          "src": "img/frame-00020.000.png",
          "cap": "00:20 — 主持人引出对完整屏幕的期待。原视频 [S1]。"
        },
        {
          "type": "text",
          "text": "00:00–04:55 主持人介绍 Axon 40 Ultra、配件、曲面机身与后置三摄。约 04:59 起以 iPhone 12 Pro Max 同框展示外观；本片的重点是正面没有可见的摄像头开孔，而不是证明手机内部没有前摄 [S1]。"
        },
        {
          "type": "text",
          "text": "独立评测将这块屏列为 6.8 英寸、2480×1116、120 Hz AMOLED，整屏规格标称约 400 PPI，前摄为 1600 万像素 [S2]。这些数字不等于摄像头区实测透过率，也不能保证每种颜色或角度的均匀性。"
        }
      ],
      "sources": [
        "S1",
        "S2"
      ]
    },
    {
      "id": "seg2",
      "start": 295,
      "end": 378,
      "title": "亮屏、息屏与贴膜：隐藏效果受条件影响",
      "caption": [
        {
          "type": "image",
          "src": "img/frame-00330.000.png",
          "cap": "05:30 — 主持人指出息屏时表面贴膜的孔位。原视频 [S1]。"
        },
        {
          "type": "text",
          "text": "05:25–06:18 主持人先指出表面带孔膜在息屏时留下明显圆形痕迹；亮屏后近距离看浅色界面，再切换橘色和蓝色背景，认为镜头区域很难看出。画面中的表面膜孔不能等同于 OLED 显示面板上有一个穿透挖孔 [S1]。"
        },
        {
          "type": "image",
          "src": "img/frame-00365.000.png",
          "cap": "06:05 — 切换到蓝绿色画面后观察顶部区域。原视频 [S1]。"
        },
        {
          "type": "text",
          "text": "这是受拍摄镜头、压缩、光照、角度、亮度及贴膜影响的主观演示，不是标准亮度、色差或低灰均匀性测试。Android Central 也称其肉眼几乎不可见，但同样是观察结论，不是全条件下不可见的保证 [S2]。"
        }
      ],
      "sources": [
        "S1",
        "S2"
      ]
    },
    {
      "id": "seg3",
      "start": 378,
      "end": 440,
      "title": "显微镜和显示设置：观察的是发光图案",
      "caption": [
        {
          "type": "image",
          "src": "img/frame-00390.000.png",
          "cap": "06:30 — 手机与显微放大画面并置。原视频 [S1]。"
        },
        {
          "type": "text",
          "text": "06:18–07:20 主持人以便携显微镜观察屏幕，描述类似钻石的子像素排列，并评价屏幕亮度；随后浏览阅读模式和 60/120 Hz 设置 [S1]。发光子像素照片可以比较排列和发光形状，却看不到完整的金属走线、驱动电路和各层透光路径。视频未给出亮度计测得的局部数值。"
        }
      ],
      "sources": [
        "S1"
      ]
    },
    {
      "id": "seg4",
      "start": 440,
      "end": 508,
      "title": "前摄区域微调：显示控制不等于光学测量",
      "caption": [
        {
          "type": "image",
          "src": "img/frame-00469.000.png",
          "cap": "07:49 — 在“前摄屏幕显示效果微调”页面操作滑条。原视频 [S1]。"
        },
        {
          "type": "text",
          "text": "07:20–08:28 主持人演示“前摄屏幕显示效果微调”，调节亮度与颜色，让区域呈现模拟孔或彩色效果，并口述单像素控制 [S1]。可直接观察的是设置改变了显示外观；无法仅凭 UI 推断电路拓扑、每个子像素的物理驱动方式，或拍照瞬间透光率变化。"
        },
        {
          "type": "flow",
          "title": "同一片区域的两条光路",
          "steps": [
            "向外：子像素发光，决定显示连续性 [S1]",
            "向内：环境光穿过屏幕结构进入前摄 [S3][S4]",
            "图像处理抑制噪声、模糊与光晕，但不能直接测出显示均匀性 [S3]"
          ]
        }
      ],
      "sources": [
        "S1",
        "S3",
        "S4"
      ]
    },
    {
      "id": "seg5",
      "start": 508,
      "end": 575,
      "title": "普通区与镜头区：显微图显示局部排列差异",
      "caption": [
        {
          "type": "image",
          "src": "img/frame-00558.000.png",
          "cap": "09:18 — 视频将镜头区边缘、普通屏幕与所谓“挖孔部分”的放大图并列。原视频 [S1]。"
        },
        {
          "type": "text",
          "text": "08:28–09:35 主持人回应观众，用显微镜观察前摄区域，将边缘、普通区及镜头区图像并置，指出蓝色子像素形状存在细微差别，并认为肉眼差别很小 [S1]。图上“挖孔部分”指摄像头所在区域，不应据此推断面板被打穿。"
        },
        {
          "type": "text",
          "text": "这种同机同屏图像是本片最直接的结构证据，但未提供标尺、全场统计、透射光谱或镜头区 PSF，不能据此量化开口率或还原电路。此前 Axon 20 的研究实测显示镜头上方降低像素密度以提高透明性；它是前代例子，不是 Axon 40 Ultra 的显微测量 [S3]。"
        }
      ],
      "sources": [
        "S1",
        "S3"
      ]
    },
    {
      "id": "seg6",
      "start": 575,
      "end": 750,
      "title": "面部解锁与后摄功能：与前摄画质分开评价",
      "caption": [
        {
          "type": "image",
          "src": "img/frame-00610.000.png",
          "cap": "10:10 — 主持人在遮挡面部时演示解锁。原视频 [S1]。"
        },
        {
          "type": "text",
          "text": "09:35–12:30 视频转向声音、侧边功能、遮挡面部和戴口罩解锁演示，再展示后摄视频设置与多摄功能 [S1]。一次成功解锁说明该次操作完成，不能推算误识率、安全等级或低光可靠性；后置镜头的规格也不能代表屏下前摄表现。"
        }
      ],
      "sources": [
        "S1"
      ]
    },
    {
      "id": "seg7",
      "start": 750,
      "end": 855,
      "title": "自拍样张：能看到头发，不等于完成画质测试",
      "caption": [
        {
          "type": "image",
          "src": "img/frame-00765.000.png",
          "cap": "12:45 — 视频展示前摄自拍及头发局部放大。原视频 [S1]。"
        },
        {
          "type": "text",
          "text": "12:30–14:15 主持人称兼顾屏下显示和拍照并不容易，展示自拍与毛发放大图，让观众判断细节；接着转向后置多摄同拍、同录 [S1]。一张经过视频压缩的样张没有普通前摄同场对照，也没有曝光、关闭美颜或原图信息，不能证明解析力、色准或逆光表现。"
        },
        {
          "type": "image",
          "src": "evidence-assets/images/S5.jpg",
          "cap": "独立评测的 Axon 40 Ultra 前摄户外样张；摄影：Namerah Saud Fatmi / Android Central [S5]。"
        },
        {
          "type": "text",
          "text": "Android Central 对其样张的判断是可用，但色彩不准且过饱和 [S2]。这张户外样张展示了另一场景，而非与视频同场同参数的对照；无法从一张 JPEG 单独定位缺陷来自面板、传感器还是处理。"
        }
      ],
      "sources": [
        "S1",
        "S2",
        "S5"
      ]
    },
    {
      "id": "seg8",
      "start": 855,
      "end": 986.069,
      "title": "总结与撕膜复查：对完整屏的偏好",
      "caption": [
        {
          "type": "image",
          "src": "img/frame-00920.000.png",
          "cap": "15:20 — 主持人撕去表面保护膜后继续观察。原视频 [S1]。"
        },
        {
          "type": "text",
          "text": "14:15–16:26 主持人总结称屏下显示接近自己想要的效果，浅色界面下难以看到过去明显的阴影；随后撕去保护膜，在系统页面再观察，认为区域仍难以辨认。片尾尝试把膜贴回，并提醒观众不要模仿 [S1]。这是对该机、该场景的偏好和观察，不是对所有亮度、色彩及使用环境的无条件结论。"
        }
      ],
      "sources": [
        "S1"
      ]
    }
  ],
  "anchors": [
    {
      "id": "A1",
      "label": "本机镜头区是否可见",
      "category": "更多支撑",
      "why": "对比演示条件与独立观察。",
      "segmentIds": [
        "seg2",
        "seg5",
        "seg8"
      ]
    },
    {
      "id": "A2",
      "label": "光学与图像复原",
      "category": "背景知识",
      "why": "解释屏幕像素和摄像头争用同一光路。",
      "segmentIds": [
        "seg4",
        "seg5",
        "seg7"
      ]
    },
    {
      "id": "A3",
      "label": "实际自拍样张",
      "category": "类似产品·事件对比",
      "why": "补充视频单张样本并限制推断。",
      "segmentIds": [
        "seg7"
      ]
    }
  ],
  "research": [
    {
      "id": "S1",
      "type": "video",
      "title": "【大家测】正面没开孔！最新屏下摄像头中兴 Axon 40 Ultra 开箱体验",
      "url": "https://www.bilibili.com/video/BV1ua411J7VA",
      "publisher": "大家测 / 哔哩哔哩",
      "summary": "2022 年开箱原片；分段观察显示条件、局部微调、显微图与自拍；主观评价不等同于仪器实测。",
      "anchorId": "A1",
      "media": "../../media/source.mp4",
      "perception": "evidence-work/S1-reading.json"
    },
    {
      "id": "S2",
      "type": "web",
      "title": "ZTE Axon 40 Ultra review",
      "url": "https://www.androidcentral.com/phones/zte-axon-40-ultra-review",
      "publisher": "Android Central · Namerah Saud Fatmi",
      "summary": "独立体验记录屏幕几乎不可见的前摄，列出整屏 400 PPI 和 16 MP 前摄，并评价自拍可用但色彩过饱和。",
      "anchorId": "A1",
      "media": "evidence-assets/docs/S2.html",
      "primary": true
    },
    {
      "id": "S3",
      "type": "report",
      "title": "Removing Diffraction Image Artifacts in Under-Display Camera via Dynamic Skip Connection Network",
      "url": "https://arxiv.org/abs/2104.09556",
      "publisher": "Feng 等，CVPR 2021",
      "summary": "以 Axon 20 UDC 测得 PSF，建立衍射、饱和和噪声模型；研究网络并非本机所用算法的证据。",
      "anchorId": "A2",
      "media": "evidence-assets/docs/S3.pdf",
      "primary": true
    },
    {
      "id": "S4",
      "type": "report",
      "title": "Image Restoration for Under-Display Camera",
      "url": "https://arxiv.org/abs/2003.04857",
      "publisher": "Zhou 等，CVPR 2021",
      "summary": "比较实验透明 OLED 与手机 Pentile OLED 的透射和成像，讨论反卷积和学习式恢复；样本并非 Axon 40 Ultra。",
      "anchorId": "A2",
      "media": "evidence-assets/docs/S4.pdf",
      "primary": true
    },
    {
      "id": "S5",
      "type": "image",
      "title": "Axon 40 Ultra front camera sample",
      "url": "https://cdn.mos.cms.futurecdn.net/fpqzkDC9vDvKJM7p8Kc5MC.jpg",
      "publisher": "Namerah Saud Fatmi / Android Central",
      "summary": "独立评测随文发布的户外前摄样张；拍摄参数和同场对照未见于该图。",
      "anchorId": "A3",
      "media": "evidence-assets/images/S5.jpg"
    }
  ],
  "insights": [
    {
      "kind": "compare",
      "title": "前代的光学让步与本机的观看体验",
      "body": "两条证据回答不同问题：Axon 20 的显微图说明一种提高透光性的布局取舍；Axon 40 Ultra 的评测描述观看体验。二者不是同条件量化比较，也不能据此推算本机透射率或证明像素密度在局部完全相同 [S3][S2]。",
      "table": {
        "cols": [
          "维度",
          "Axon 20，研究样机",
          "Axon 40 Ultra，独立评测"
        ],
        "rows": [
          [
            "显示与透光",
            "镜头区降低像素密度以增加透明性 [S3]",
            "评测者称镜头区肉眼几乎不可见 [S2]"
          ],
          [
            "可比范围",
            "研究测量了旧机 PSF [S3]",
            "本机页面给出显示和自拍观察，未提供同条件 PSF [S2]"
          ]
        ]
      },
      "sources": [
        "S3",
        "S2"
      ],
      "evidence": [
        {
          "srcId": "S3",
          "quote": "The UDC OLED panel has reduced pixel density in the area above the camera, allowing for more transparency.",
          "local": "evidence-work/S3.txt"
        },
        {
          "srcId": "S2",
          "quote": "The 6.8-inch AMOLED panel cleverly hides an under-display camera on the top instead of a cutout, and it's as good as invisible to the naked eye.",
          "local": "evidence-work/S2.txt"
        }
      ]
    },
    {
      "kind": "cause",
      "title": "透明面积、衍射与噪声不是同一个指标",
      "body": "发光面积、走线和驱动影响显示，同时遮挡或改变穿过面板的光。透过光子减少会压低信噪比；周期性微结构还会产生衍射，使点光源能量散开，出现雾、模糊或眩光 [S3][S4]。开口面积比例不等于实际透射率：Zhou 等两块实验屏的开口率分别为 21% 和 23%，测得透射率却约 20% 和 2.9%；材料和散射也重要。这些数值只适用于论文所测面板，不能套用到本机 [S4]。",
      "sources": [
        "S3",
        "S4"
      ]
    },
    {
      "kind": "cause",
      "title": "算法能补偿，但不等于找回所有信息",
      "body": "屏幕与镜头共同决定点扩散函数（PSF），可以通过反卷积或学习式方法抑制退化；Feng 等使用 Axon 20 测量 PSF 并处理真实及合成数据 [S3]，Zhou 等研究了实验屏与相机组合 [S4]。噪声、饱和与未知场景让反问题不唯一；恢复出的纹理可能受模型先验影响。没有厂商算法说明或原始数据，不能声称 Axon 40 Ultra 使用上述任一网络，也不能从放大自拍判断细节都是真实重建。",
      "sources": [
        "S3",
        "S4"
      ]
    },
    {
      "kind": "context",
      "title": "如何验证这台手机的折衷",
      "body": "显示侧应固定亮度与环境光，在白、RGB、低灰和不同视角下拍摄普通区及镜头区，量亮度、色差和边界，并标明贴膜状态；成像侧应关闭美颜，在同场景、同输出尺寸下与普通前摄对照，覆盖日光、低照、逆光点光源、肤色卡和细纹理，同时保留原图及曝光参数。再分别检查噪声、色偏、光晕与细节，避免用单一自拍或人脸解锁成功代替系统测量。视频提供观察线索而非上述完整测试 [S1]；研究论文的 PSF 方法可作为光学测试参照 [S3]。",
      "sources": [
        "S1",
        "S3"
      ]
    }
  ]
};
