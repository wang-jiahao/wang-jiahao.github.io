# Scoring Rubric (`One Second Inside You / v1`)

This task is graded on a **100.00-point scale** combining **V2V objective visual-motion fidelity (`60 pts`)**, **Instruction Following (`20 pts`)**, and **deterministic `Code2AV` DSP / cross-modal audio-visual synchronization (`20 pts`)**, gated by hard delivery and pure-code anti-cheat verification.

---

## L1. Delivery & Anti-Cheat Hard Gate (Pass Required; Otherwise 0.00)
1. All required files exist and are non-empty: `submission/video.mp4`, `submission/timeline.json`, `submission/project/`, `submission/README.md`.
2. Video stream: valid H.264 MP4, `1280×720` (`16:9`), `24–30 fps`, duration `45.0–70.0 s`, genuinely dynamic (passes inter-frame motion check; static slides rejected).
3. Audio stream: valid `48000 Hz` stereo AAC, non-silent (`RMS >= -38 dBFS`), valid start time.
4. **Zero Reference Copying**:
   - Project source files must not read or embed `input/keyclip.mp4`, external raster media, large base64 images, or downloaded audio/TTS files.
   - Video frames in the matched window must not pixel-copy `input/keyclip.mp4`.
   - Audio waveform must not correlate closely with `input/keyclip.mp4` audio.

---

## 100-Point Scoring Breakdown

### 1. Sequence Alignment — `SA` (15.00 pts)
- Computed at `4.0 FPS` across the full `input/keyclip.mp4` and `submission/video.mp4` using DINOv3 visual features and open-end monotone subsequence DTW (`minimum span >= 25%` of reference clip).
- Measures whether the submission actually reaches and sustains the multi-second ATP synthase molecular scene in the proper continuous sequence rather than a brief flash.

### 2. Appearance Fidelity — `AF` (20.00 pts)
- Computed inside the DINOv3-localized matching window using the official DreamSim perceptual ensemble (DINO + CLIP + OpenCLIP ViT-B/16) with closed-endpoint Sakoe-Chiba DTW alignment.
- Rewards matching the warm luminous mitochondrial atmosphere, rotor geometry, proton glow, bilingual subtitle framing, and dark scientific HUD composition of `input/keyclip.mp4`.

### 3. Motion Fidelity — `MF` (25.00 pts)
- Computed inside the DINOv3-localized window using dense `20×20` point-grid CoTracker3 tracklets comparing step-by-step displacement directions and normalized velocity magnitudes (Chamfer tracklet similarity).
- Rewards genuinely animated 3D turbine rotation, flowing proton particle streams, continuous camera parallax, and dynamic HUD telemetry updates matching `input/keyclip.mp4` motion rather than stiff static sprites.

### 4. Instruction Following — `IF` (20.00 pts)
- Binary verification over the full 9-act anatomical arc against multimodal evaluation of the complete rendered `submission/video.mp4`:
  - Title card & real-time `0.000 → 1.000 s` stopwatch prior to 120× slow-motion dive.
  - Standing translucent human silhouette, cosmic HUD frame, bottom-left scale progression, top-right ECG monitor, right-hand live metric tally card.
  - Ventricular heart zoom, capillary RBC oxygen flow, faithful mitochondrial ATP synthase turbine scene transitions, cell membrane ion-channel closed→open transition coupled to ECG spike, swift reverse zoom-out back to full silhouette, and closing `1.000 s` dashboard.

### 5. `Code2AV` Procedural Audio-Visual Synchronization (20.00 pts)
Deterministic signal processing + frame-flux verification on `submission/video.mp4`:
- **`AV1` (`5.00 pts`) — Opening Stopwatch Ticks & 120× Time-Dilation Drop**:
  - Audible crisp tick transients in the opening real-time stopwatch window + significant downward spectral-centroid shift when entering `120×` slowed motion.
- **`AV2` (`6.00 pts`) — Cardiac Sub-Bass & Post-ATP Ion-Channel/ECG Spike Lock**:
  - Structured low-frequency (`35–140 Hz`) pulsatile heartbeat peaks during the pre-ATP heart/capillary section.
  - Post-ATP cross-modal lock between the visual ion-channel / ECG brightness flash peak and a crisp high-frequency (`1.2–8 kHz`) acoustic discharge transient within `<= 250 ms`.
- **`AV3` (`5.00 pts`) — Dynamic ATP Soundscape & Multi-Phase Spectral Evolution**:
  - Active, amplitude/spectrum-modulated rotational soundscape during the ATP window + distinct acoustic character across the major anatomical acts (penalizing flat single-tone drones).
- **`AV4` (`4.00 pts`) — Scene Cut Alignment & Broadcast Audio Craft**:
  - Acoustic onset/energy cues near major visual transitions + clean stereo balance, peak headroom `<= -0.3 dBFS`, healthy loudness (`-24` to `-9 LUFS`), and no unintended silence gaps.
