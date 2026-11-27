'use strict';
const parts = JSON.parse(document.getElementById('source-parts').textContent);
const source = document.getElementById('source-video');
const output = document.getElementById('output-video');
const position = document.getElementById('source-position');
const partButtons = [...document.querySelectorAll('[data-part]')];
let partIndex = 0;

function clock(seconds) {
  const whole = Math.max(0, Math.floor(seconds));
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
}
function updatePosition() {
  position.textContent = `原片时间 ${clock(parts[partIndex].start + source.currentTime)} / 101:26`;
}
function seek(video, time) {
  video.currentTime = time;
  if (video.readyState === 0) video.preload = 'metadata';
}
function selectSource(index, offset) {
  output.pause();
  source.pause();
  if (partIndex !== index) {
    partIndex = index;
    source.src = parts[index].src;
  }
  partButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  seek(source, offset);
  updatePosition();
}
source.addEventListener('loadedmetadata', updatePosition);
source.addEventListener('timeupdate', updatePosition);
for (const button of partButtons) {
  button.addEventListener('click', () => selectSource(Number(button.dataset.part), 0));
}
document.addEventListener('click', event => {
  const button = event.target.closest('[data-seek]');
  if (!button) return;
  const time = Number(button.dataset.at);
  if (button.dataset.seek === 'source') {
    const index = Math.max(0, parts.findLastIndex(part => part.start <= time));
    selectSource(index, time - parts[index].start);
    source.scrollIntoView({block: 'center'});
  } else {
    source.pause();
    seek(output, time);
    output.scrollIntoView({block: 'center'});
  }
});
updatePosition();
