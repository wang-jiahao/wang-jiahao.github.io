# Independent transcription working notes

- Source: only the supplied `task_brief.json` and `reference_song.mp3` in the authorized input directory.
- Title: Dorico Prelude. Composer: Akinola. Stated tempo: quarter note = 140.
- Duration reported by ffprobe: 139.492 seconds; stereo MP3, 48 kHz.
- No existing score, MIDI, project, task-specific model, or external solver has been consulted.
- Initial tools: FFmpeg/ffprobe, Python, NumPy, SciPy, librosa, music21, mido, MuseScore 3.
- Reference audio was decoded locally with FFmpeg to a stereo 22,050 Hz WAV for signal analysis.
- The system-provided MuseScore General Lite soundfont is available at `/usr/share/sounds/sf3/MuseScore_General_Lite.sf3`. It is a general-purpose timbre reference, not task content.
- FluidSynth is being installed through the system's configured Debian package repositories to synthesize general-purpose instrumental pitch templates. Any package assets are used only as generic synthesizer resources.

Analysis and editorial decisions will be recorded below as they are made.

- Synthesized generic pitch templates from the installed MuseScore General Lite font and the FluidR3 GM font installed from Ubuntu's `fluid-soundfont-gm` package (official Ubuntu archive). No musical examples supplied with packages were inspected.
- Numerical onset periodicity independently confirms approximately 140 BPM. Strong later attacks align with a 0.428571-second quarter-note grid, including 33.43, 56.60, 74.58, 95.14, and 120.88 seconds.
- Broad web searches for general-purpose MT3 transcription software returned some unrelated benchmark-result snippets. Those pages were not opened, investigated, or used. Subsequent research was limited to the general-purpose model's official repository and toolkit repository.
- General model documentation consulted: `https://github.com/magenta/mt3` and `https://github.com/openmirlab/mt3-infer`. Installing the latter from its public source repository, plus CPU PyTorch from `https://download.pytorch.org/whl/cpu`. These are general-purpose transcription tools; no task-specific score or sequence is being obtained.
- The reference contains several very long sustained pitches. Analysis therefore uses pitch envelopes at multiple time scales to avoid interpreting sampled vibrato as independent notes.

- General transcription toolkit installed from `https://github.com/openmirlab/mt3-infer`, commit `d8cbd287470291dee335f84315c5a9b9ff6e6c8a`. Only implementation code and model configuration were inspected. Repository musical fixtures/examples were not inspected or used.
- The YourMT3 host was unreachable; no YourMT3 weights or inference were used.
- The generic MT3 checkpoint was downloaded alone from the original port's public checkpoint at `https://media.githubusercontent.com/media/kunato/mt3-pytorch/master/pretrained/mt3.pth`, via GitHub's LFS download service. SHA256 verified: `b8a3807ed265059abd25ad7f68142c06c35e8f6144dcaa45bd55946a3745398f` (183,672,643 bytes). The accompanying generic model architecture configuration came from that repository's `pretrained/config.json` through the GitHub API.
- CPU inference used PyTorch 2.15.0, Torchaudio 2.11.1, Transformers 4.43.4, and the verified checkpoint. Numerical libraries and PyTorch were restricted to four CPU threads. Network range downloads used eight lightweight I/O threads.
- The toolkit's initial power-spectrogram preprocessing produced an approximately one-semitone pitch discrepancy and was rejected. Inference was rerun using magnitude log-mel features with the original model's 20–7600 Hz range and end padding. This was checked against the original generic source code in `kunato/mt3-pytorch` and `magenta/ddsp`; no musical example data were consulted.
- An API compatibility inference loop was written locally using the model's unchanged T5 weights and cached decoder states. The installed toolkit's newer T5 calling convention was incompatible with Transformers 4.43.4.
- Final estimation combines MT3 note proposals with locally computed harmonic prominence, onset strength, long-note recovery, generic synthesized timbre templates, and instrumental range/voice-continuity constraints.
- Working meter: 6/4, with an unaltered concert key signature. The first approximately 5.14 seconds are retained as two measures of rest. The score spans 50 measures at quarter note = 140, ending at approximately 128.57 seconds; the recording's remaining tail is reverberation.
- All 27 requested players are retained. Harp and keys use two staves each. The named B-flat and F instruments, contrabassoon, contrabass, and glockenspiel have their written transpositions encoded. Supplied zero-based GM assignments take precedence over acoustic instrument labels.
- Full score layout: A3 portrait, 5.2 mm staves, empty-staff omission after the opening system. Polyphonic passages are encoded as chords with individual ties so no voice exceeds MuseScore's limits.
- All estimated note pitches and start times were checked against a MuseScore-exported MIDI file. Separate MIDI ports preserve independent instrument channels. Secondary harp and keyboard tracks receive explicit copies of their parent's program change and port selection.
- Accuracy limitation: this is an independent automated/spectral transcription, not a verified exact recovery of an original score. Dense instrument separation, the classification of some sustained timbres, ornaments, and certain note boundaries remain uncertain. Tacet parts reflect lack of sufficiently supported independent detections, not proof that those instruments are absent from the recording.
- The six parts without accepted note detections are Clarinet (B Flat) 2, Bassoon 1, Bassoon 2, Contrabassoon, Trumpet (B Flat), and Timpani [Track]. These parts are retained in the editable score and MIDI; their complete musical contents could not be confidently recovered.
- Final export validation: 27 parts, 29 staves, 50 measures, 378 note attacks, and five A3 PDF pages. Every estimated pitch and onset matches the exported MIDI, and every staff track has an explicit program change matching its parent instrument. This validates export consistency, not accuracy against the source recording. Full results are in `verification.json`.
- The PDF, MIDI, native MuseScore project, and MusicXML were exported from the same finalized native score. The dense passages on final PDF pages 3 and 5 were visually reviewed after the final divisi edits.
