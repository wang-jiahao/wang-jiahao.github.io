# Humanoid Whole-Body-Control Policy Evaluation

Evaluate the 8 Unitree G1 motion-tracking policy cases listed in
`policy_cases.json`. The required motion files and policy checkpoints are
provided locally in `input/runtime_env/motions-1.zip` and
`input/runtime_env/policies.zip`; do not log in to W&B and do not fetch private
W&B artifacts.

For each case, unpack the mjlab runtime archive and the two asset zips into your
working directory, run the listed `video_command` for the complete motion,
watch the policy behavior against the reference motion, save the recorded
playback video, and classify it using the following rules in order:

- `failed`: the robot has an unrecovered fall, slides away, or otherwise cannot
  complete the intended motion in a meaningful way. This includes a fall after
  initially good tracking. For a get-up motion, failure to recover is decisive;
  the scripted initial fall is not itself a failure.
- `successful`: the robot executes the motion with stable balance and close
  reference tracking, allowing a slight delay or offset in the final few steps
  that does not disrupt the gait or completion of the motion.
- `nearly_successful`: the robot mostly executes the motion without the
  unrecovered failure above, but shows visible instability or a persistent
  tracking deficit beyond the permitted final-step exception.

A slight delay or offset confined to the last few steps does not by itself
make a rollout nearly_successful: if balance, gait, and meaningful reference
tracking are otherwise maintained, use successful. Use nearly_successful for
visible instability or a persistent tracking deficit beyond this final-step exception,
provided the motion is mostly executed without an unrecovered failure.
An unrecovered fall that prevents completion is failed, even if tracking was
initially good. For a get-up motion, judge the recovery, not the scripted fall.
Describe visible robot/reference tracking; do not infer stair contacts or stair
completion from a render that does not show the stair geometry. An abrupt
endpoint reset is not a successful recovery.

Run `uv sync --python 3.11 --extra cpu --no-dev --locked` from the extracted
mjlab project before using the listed commands. The included lockfile pins the
validated Linux CPU runtime. The command paths in
`policy_cases.json` are relative paths after extracting
`motions-1.zip` and `policies.zip` into the mjlab working directory. If you
extract them elsewhere, replace only the file paths with your local extracted
paths while preserving the other command flags.

The longest case uses 640x360 video to keep the runtime's in-memory frame
buffer within the VM memory budget. It still records the complete motion;
shorter cases use 1280x720.

Write one JSON file named `policy_evaluation_report.json` in the runtime output
directory, plus a `visual_demos/` directory containing one `.mp4` or `.webm`
playback video per case. The file must validate against `output_schema.json`.
