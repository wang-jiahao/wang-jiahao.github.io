# Independent transcription working notes

Input sources: only the supplied task_brief.json and reference_song.mp3.
Title: Dorico Prelude. Composer: Akinola. Stated tempo: quarter = 140.

No existing composition-specific scores, MIDI, projects, or transcriptions used.

Tools initially available: FFmpeg/FFprobe, MuseScore 3, Python 3.12,
NumPy, SciPy, librosa, soundfile, music21, mido, matplotlib, PyMuPDF.
The installed MuseScore General Lite SF3 is a general-purpose synthesis resource.

Analysis method: inspect timing, harmonic spectra and amplitude envelopes;
compare recording to synthesized single-note general MIDI templates;
recover note events and distribute the instrumental voices specified by the brief.
All task-specific musical data is derived from the input audio.

Audio metadata: stereo 48 kHz MP3, 139.492 seconds. Decoded locally with
FFmpeg to stereo 22.05 kHz WAV for analysis. Playback through ffplay was attempted,
but the container's default ALSA output has no audio device.

Downloads/installations will be recorded here as they occur.

General-purpose Ubuntu packages downloaded from archive.ubuntu.com/ubuntu:
- libfluidsynth3 2.2.5-1 (pool/universe/f/fluidsynth/)
- libinstpatch-1.0-2 1.1.6-1 (pool/universe/libi/libinstpatch/)
- fluid-soundfont-gm 3.1-5.3 (pool/universe/f/fluid-soundfont/)
These provide a synthesis library and the generic FluidR3 GM soundfont.
No package example scores or MIDI files are inspected or used.

Also downloaded generic timgm6mb-soundfont 1.3-5 from
archive.ubuntu.com/ubuntu/pool/universe/t/timgm6mb-soundfont/ for timbre comparison.

Downloaded only the general-purpose soundfont GeneralUser-GS.sf2 from
https://raw.githubusercontent.com/mrbumpy409/GeneralUser-GS/main/GeneralUser-GS.sf2
for additional synthesis-template comparison. No repository score/MIDI material
was downloaded or inspected. No pretrained transcription model is used so far.

Local pretrained second opinion: YourMT3 (YPTF.MoE+Multi noPS), checkpoint
mc13_256_g4_all_v7_mt3f_sqr_rms_moe_wf4_n8k2_silu_rope_rp_b36_nops/checkpoints/last.ckpt,
from the general-purpose public mimbres/YourMT3 Hugging Face Space. Only Python
model/configuration/utility source and the pretrained checkpoint were fetched;
example audio, MIDI directories, or task-specific score sources were not fetched.
Source base: https://huggingface.co/spaces/mimbres/YourMT3/resolve/main/
Python model dependencies are general packages from PyPI and CPU PyTorch from
https://download.pytorch.org/whl/cpu. The model runs locally, not through a solver
service or hosted transcription endpoint.

Additional local general models: YourMT3 single-decoder YPTF checkpoint
ptf_all_cross_rebal5_mirst_xk2_edr005_attend_c_full_plus_b100/checkpoints/model.ckpt
from the same Hugging Face repository, and Spotify Basic Pitch 0.4.0 bundled
ICASSP 2022 ONNX model (package from PyPI). These are general pretrained models;
no task-specific audio/score assets were obtained. CPU execution only, limited
numerical thread counts.

General technical documentation read: MuseScore v3.2.3 note.h, note.cpp,
property.cpp, and xml.cpp from the official musescore/MuseScore GitHub source,
only to check native note velocity serialization. The correct absolute velocity
value is <veloType>user</veloType>. No composition material was retrieved.

Final analysis and score decisions:
- Quarter-note tempo 140; opening 6/4 and 4/4 from beat 174.
- The first entrance is at beat 12. Final written release is at beat 298.
- D-minor key signature, with local accidentals retained.
- All 27 brief instruments are present, in 29 staves (harp and keys have grand
  staves). Inactive or unconfirmed instruments have rests. Pitch-register and
  spectral continuity guide string assignment; this remains an approximation
  where simultaneous instrumental colors cannot be separated confidently.
- Input-derived continuous pitches, model events, glissandi, quantized rhythms,
  dynamics and velocity envelopes are reconciled in score_events.json.
- YourMT3's normal postprocessing discards notes over ten seconds. Saved local
  predictions were decoded again with that limit disabled, preserving opening
  string lines confirmed in the spectrum.
- The native MuseScore project is the authoritative editable score. PDF and
  native MIDI were exported from it. MIDI track names and redundant Program
  Change messages on grand-staff lower tracks were added without altering notes.
- Readable clef changes, score groups, rehearsal marks, written-out harp runs,
  tied sustained notes, dynamics and hairpins are included.

Verification: 27 parts, 29 staves, 60 measures, 1,133 note events; PDF is 8 A3
pages. Every exported note onset/pitch is checked against the score event set;
MIDI release differs by at most one 480-PPQ tick. No hanging notes. Every pitched
track carries the requested zero-based GM program, including silent players.
Cymbal MIDI note is 49 on channel 10. Title/composer checked in native score.
PDF text blocks checked against page boundaries and pages visually reviewed.
Final desktop screenshot saved directly from MuseScore to output/overview.png.

Limitations: This is an independent computational transcription of a dense
stereo recording. Exact voice allocation and some inner notes, expression,
articulation and ornament details remain uncertain. No claim of note-perfect
recovery is made. Audio playback was unavailable through the container's ALSA
device, so analysis used decoded waveform, spectra and locally run models.
