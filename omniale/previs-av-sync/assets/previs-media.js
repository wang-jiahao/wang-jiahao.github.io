const comparison = document.querySelector('.comparison');
const outputs = [...comparison.querySelectorAll('video')];
const pending = new Map();

for (const video of outputs) {
  video.addEventListener('loadedmetadata', () => {
    if (!pending.has(video)) return;
    video.currentTime = pending.get(video);
    pending.delete(video);
  });
}

function jumpTo(media, seconds) {
  media.pause();
  if (media.readyState >= HTMLMediaElement.HAVE_METADATA) {
    media.currentTime = seconds;
    return;
  }
  const loading = pending.has(media);
  pending.set(media, seconds);
  if (!loading) {
    media.preload = 'metadata';
    media.load();
  }
}

for (const button of document.querySelectorAll('[data-compare-time]')) {
  button.addEventListener('click', () => {
    for (const video of outputs) jumpTo(video, Number(button.dataset.compareTime));
    for (const item of document.querySelectorAll('[data-compare-time]')) {
      item.setAttribute('aria-pressed', String(item === button));
    }
  });
}

const players = [...document.querySelectorAll('main video, main audio')];
for (const player of players) {
  player.addEventListener('play', () => {
    for (const other of players) if (other !== player) other.pause();
  });
}
