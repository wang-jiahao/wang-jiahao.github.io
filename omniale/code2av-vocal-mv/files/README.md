# Watching the Rain Fall

The arrangement follows a vocal that moves from close and restrained to open and sustained. The film follows a traveler in a red coat. A sheet salvaged from a burned house becomes a letter, then a paper boat that outlasts the storm.

## Reproduce

Run these commands in PowerShell from the workspace root. The project uses Python 3.12 with NumPy 1.26.4, SciPy 1.13.1, and SoundFile 0.14.0, Node.js 18.19, FFmpeg/FFprobe on `PATH`, and the supplied Windows FluidSynth runtime. The npm command installs the Canvas renderer locally. No network is used in analysis, synthesis, or rendering.

```powershell
npm install --prefix .rainfall-tools --cache .rainfall-tools/npm-cache --no-audit --no-fund --save-exact @napi-rs/canvas@0.1.80
python -B submission/project/analyze.py
python -B submission/project/music.py
node submission/project/render.cjs
python -B submission/project/verify.py
```

`music.py` emits the two WAVs, arrangement notes, and the animation clock. `render.cjs` streams Canvas frames to FFmpeg in six segments and removes the segment files after muxing. `node submission/project/render.cjs stills` regenerates review frames. Intermediate MIDI, stems, features, and stills go in `.rainfall-work/`, which can be removed after a build. `verify.py` also works on finished outputs without intermediate stems.

## Score and mix

- The dry stem was measured on a 10 ms grid using a normalized lag-difference pitch tracker, short-term energy, spectral flux, and breath gaps. Pitch-class profiles and melodic cadences favor A-flat major. D-flat and B-flat minor prolong the verses before the E-flat suspension and chorus release. Beat positions are inferred from phrase and accent landmarks, with a median 70.80 BPM, local quarter-note estimates of 64.94 to 74.53 BPM, and one five-quarter extension into the chorus. The score and the notes JSON expose the bar and beat positions.
- The narration in the vocal stays on its original sample timeline. Initial piano and celesta leave space around the attacks. Nylon guitar, cross-stick, finger bass, and cello enter in stages. Sustained strings, drum fills, and wider piano voicings give the chorus a larger register and more momentum. The final tag drops the backbeat and returns to A-flat. Each MIDI stem is rendered from one of the two supplied SoundFonts. Seeded early reflections and a decaying room tail are synthesized in code.
- The lead uses a 72 Hz high-pass, modest low-mid cleanup, a small presence lift, soft envelope compression, and a quiet stereo room return. A 2.1 dB bell cut near 2.2 kHz in the main backing stems leaves the lead room. The final stereo limiter uses fourfold oversampled peak detection with linked gain and preserves sample timing. Both WAVs are 24-bit PCM, 48 kHz stereo, exactly 4,320,000 samples per channel.

## Film

| Film time | Composition and action |
| --- | --- |
| 0.00 to 13.72 | A coastal floodgate in rain, with a slow push toward the lit tower and the traveler under an umbrella. |
| 13.72 to 34.23 | Amber light and drifting cinders frame the ruins of a house. The traveler retrieves a sheet. |
| 34.23 to 48.84 | An overhead desk shot follows a writing hand, an ink signature, and folds that resolve into a paper boat. |
| 48.84 to 64.29 | At the chorus entry, the paper boat matches into the center of a rain-dark canal with receding lamps. |
| 64.29 to 82.53 | The canal opens to wide water and a break in the clouds. The boat travels from the shore toward the light. |
| 82.53 to 90.00 | A low, side-on view of the quay follows the boat offshore as the traveler walks out of frame. |

All shapes, grain, rain, and reflections are drawn procedurally. Beats drive ripples and buoy motion. The dry vocal envelope affects the lighting, rain, and character movement. The lyrics come from the supplied text. Word boundaries are hand-guided estimates based on syllable onsets, pitch, and phrase gaps, with a progressive underline on the active word.

## Checks

- Both WAVs passed sample-count, stereo, clipping, and true-peak checks. The mix measures -14.03 LUFS integrated, -1.68 dBTP, and 9.50 LU of loudness range. The isolated backing measures -18.34 LUFS integrated and -1.68 dBTP. Median 50 ms backing RMS rises from -27.2 dBFS in the intro to -18.7 dBFS across the chorus. The band-limited lead-to-mix correlation check measured a median offset of 0 ms.
- The MP4 contains 2,700 continuous 1920x1080 frames at 30 fps in H.264, BT.709 `yuv420p`, with 48 kHz stereo AAC. Both tracks and the container report 90.000 seconds. The AAC packet hash matches an independent encode of `mix.wav` using the same settings. Twelve frames decoded from the finished movie were visually inspected for framing, caption readability, and transitions. Audio checks here are signal measurements.

## Credits

The supplied vocal excerpt and lyrics are from *Rainfall*, performed by Liz Nelson and Jennifer Davies, composed by Liz Nelson, and sourced from MedleyDB (Rachel Bittner et al., NYU MARL, DOI `10.5281/zenodo.1438309`). The supplied vocal and lyrics are CC BY-SA 4.0. The remixed song and film derivative are shared under CC BY-SA 4.0. This production adds original accompaniment, mixing, and animation. FluidR3 GM is by Frank Wen (MIT). Upright Piano KW was recorded by Gonzalo and Roberto of FreePats (CC0). FluidSynth is LGPL v2.1+.
