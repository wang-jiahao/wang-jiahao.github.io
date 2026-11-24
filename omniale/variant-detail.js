function selectPanel(group, key) {
  for (const button of group.querySelectorAll(':scope > .switcher button')) {
    button.setAttribute('aria-pressed', String(button.dataset.select === key));
  }
  for (const panel of group.querySelectorAll(':scope > [data-panel]')) {
    if (panel.dataset.panel !== key) panel.querySelectorAll('video').forEach((video) => video.pause());
    panel.hidden = panel.dataset.panel !== key;
  }
}

function openTarget(target) {
  for (let element = target; element; element = element.parentElement) {
    if (element.matches('details')) element.open = true;
    if (element.matches('[data-panel]')) selectPanel(element.parentElement, element.dataset.panel);
  }
}

function seekTo(button) {
  const video = document.getElementById(button.dataset.video);
  if (!video) return;
  openTarget(video);
  const update = () => { video.currentTime = Number(button.dataset.time); };
  if (video.readyState >= 1) update();
  else {
    video.addEventListener('loadedmetadata', update, {once: true});
    video.preload = 'metadata';
    video.load();
  }
  video.scrollIntoView({block: 'center'});
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.select) selectPanel(button.closest('[data-switcher]'), button.dataset.select);
  if (button.dataset.video) seekTo(button);
});

function revealHash() {
  if (!location.hash) return;
  const target = document.getElementById(location.hash.slice(1));
  if (target) {
    openTarget(target);
    target.scrollIntoView();
  }
}
window.addEventListener('hashchange', revealHash);
if (location.hash) revealHash();
