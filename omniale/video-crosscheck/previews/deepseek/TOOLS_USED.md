# Tools Used

## Environment and constraints
- Windows / PowerShell; Python 3; Node.js.
- Local FFmpeg and ffprobe for probing, frame extraction and contact sheets.
- Local `faster-whisper` for transcription: complete `small` pass, plus `large-v3-turbo` verification on 380–575 s, 740–950 s and 945–986.069 s.
- PyMuPDF for the S4 paper; Pillow for contact sheets, resizing and inspected crops.
- Playwright with local Google Chrome (`C:\Program Files\Google\Chrome\Application\chrome.exe`) for browser checks.
- No cloud audio/video understanding or transcription service was used.

## Source work
- S1: supplied local `media/source.mp4`; probed at 986.069 s, 720x360, 30 fps, H.264/AAC, 34,630,401 bytes. Full local transcription and frame checks.
- S2: Android Authority review, `https://www.androidauthority.com/zte-axon-40-ultra-review-3171686/`; saved HTML/text and verified quoted passages in the local text.
- S3: ZTE official spec page, `https://www.ztedevices.com/cn/product/zte-axon-40-ultra/`; saved HTML/text and product screenshot.
- S4: arXiv/CVPR 2021 paper, `https://arxiv.org/abs/2003.04857`; downloaded the 13-page PDF from `https://arxiv.org/pdf/2003.04857`, extracted text with PyMuPDF, and read the abstract, introduction and optical-system section plus Table 1.
- Search APIs consulted for S4 discovery: Crossref, OpenAlex and the arXiv API. Search-engine HTML results were not used as evidence.

## Perception and frame checks
- Full transcript: `work/transcript-small.json` / `_assets/docs/S1-transcript.txt`.
- Larger-model verification ranges: `_work/S1/transcripts/large-v3-turbo-*.json`.
- Final frame extractions: 12, 55, 180, 260, 300, 330, 335, 355, 445, 465, 545, 555, 640, 760, 765, 880, 905, 910, 935, 960 s.
- Inspected published keyframes/crops: 20 content images (10 segment keyframes, 7 caption images, 3 external source thumbnails) plus 6 anchor crops. Contact sheets kept under `_work/S1/`.
- Tightened claims after review: the 80W charger statement and the independent review's 65W wired-charging specification are treated as different measurement scopes, not as a contradiction. S4's 2.9% transmission figure is explicitly limited to the paper's P-OLED sample.

## Validation
- Command: `node toolkit/validate_data.mjs output/js/data.js`
- Result (exit 0): `✓ output/js/data.js valid — 10 segments, 4 sources, 4 citations resolved, 6 anchors (4 back-refs), 31 local asset(s) found, 1/1 correcting insight(s) evidenced (2 quote(s) verified)`.

## Browser checks
- Opened the absolute `file:///.../output/index.html` URI in Playwright + Chrome.
- Console errors: 0; page errors: 0.
- Video duration observed: 986.087 s (ffprobe source: 986.069 s); `readyState=4`, seekable through duration.
- Forward seek to 465.0 s succeeded; backward seek to 30.0 s succeeded.
- Playback from 30 s advanced to 31.0335 s after 1.4 s and paused cleanly.
- TOC click for the film-hole segment landed at 322.4244 s after playback began, matching the 322.0 s segment start.
- `[S2]` citation click resolved to `#src-S2` and applied the `src flash` highlight.
- 20/20 content images loaded with `naturalWidth > 0`. The DOM also contains one empty lightbox placeholder `<img>` with no `src`; it is not a content asset.
- At a 420×900 viewport, `innerWidth`, document `scrollWidth` and body `scrollWidth` were all 420 px; TOC and player remained visible.
- Screenshots inspected: `_work/browser/top.png`, `_work/browser/seg7.png`, `_work/browser/seg9.png`, `_work/browser/insights.png`, `_work/browser/sources.png`, `_work/browser/full.png`, `_work/browser/mobile.png`.
