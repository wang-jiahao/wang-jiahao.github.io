'use strict';

// All data and interactions stay in this document. No analytics, storage, or network submissions.
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const senses = {
  listen: {
    label: 'Listen', title: 'Listening Room Protocol', image: '9.jpg',
    alt: 'Vintage clothing and records signs glowing in a dark listening room', color: '#efb940',
    text: 'Our stage is mixed for clarity, not volume. Sets are framed by short intermissions—enough time to refresh a drink, not enough to break the spell.',
    points: ['House system tuned for upright bass definition and cymbal air.', 'Vinyl prelude from the club library before each first set.', 'Quiet service choreography: menus land between tunes.']
  },
  taste: {
    label: 'Taste', title: 'Chef’s Set Menu: “Midnight Service”', image: '8.jpg',
    alt: 'A wine bottle and glass on the chef’s supper table', color: '#dc4163',
    text: 'Five courses built around late-night brightness—citrus, smoke, and slow heat—paired to the pacing of the evening’s program.',
    points: ['First course arrives with the opening theme—clean, bracing, precise.', 'Main course lands before the final solo—comforting and deep.', 'Dessert is plated during applause—quiet sweetness, no rush.']
  },
  feel: {
    label: 'Feel', title: 'Room Atmosphere', image: '3.jpg',
    alt: 'A red Eastcheap Records neon sign reflected in the window', color: '#9461e9',
    text: 'Low tables, deep banquettes, and a ceiling designed to scatter reflections like brushwork—soft edges, clean detail. The room is calibrated for closeness: you’ll feel the cymbal swell before you notice it.',
    points: ['Candlelight speculars across glass and brass.', 'Sapphire-blue gradients in the lounge, velvet violet at the bar.', 'Seat spacing optimized for conversation between sets.']
  }
};
let currentSense = 'listen';
let lastSense = 'listen';
const senseOrder = ['listen', 'taste', 'feel'];
function setSense(key, allowCollapse = true) {
  const panel = $('#sense-panel');
  const collapse = allowCollapse && currentSense === key;
  currentSense = collapse ? null : key;
  lastSense = key;
  $$('[data-sense]').forEach(button => button.setAttribute('aria-expanded', String(button.dataset.sense === currentSense)));
  panel.hidden = collapse;
  if (!collapse) {
    const sense = senses[key];
    panel.dataset.active = key;
    panel.style.setProperty('--sense-color', sense.color);
    panel.innerHTML = `<div class="sense-copy"><h3 id="sense-panel-title">${sense.title}</h3><p>${sense.text}</p><ul>${sense.points.map(p => `<li>${p}</li>`).join('')}</ul></div><figure class="sense-photo"><img src="assets/${sense.image}" alt="${sense.alt}" loading="lazy"></figure>`;
    panel.setAttribute('aria-labelledby', 'sense-panel-title');
  }
  const nextKey = senseOrder[(senseOrder.indexOf(key) + 1) % senseOrder.length];
  $('#sense-next').innerHTML = `Explore ${senses[nextKey].label} <span aria-hidden="true">→</span>`;
  $('#sense-next').dataset.nextSense = nextKey;
  $('#sense-next').setAttribute('aria-controls', 'sense-panel');
}
$$('[data-sense]').forEach(button => button.addEventListener('click', () => setSense(button.dataset.sense)));
$('#sense-next').addEventListener('click', event => setSense(event.currentTarget.dataset.nextSense, false));
$('.sensory-controls').addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const delta = event.key === 'ArrowLeft' ? -1 : 1;
  const index = event.key === 'Home' ? 0 : event.key === 'End' ? 2 : (senseOrder.indexOf(currentSense || lastSense) + delta + 3) % 3;
  const key = senseOrder[index];
  setSense(key, false);
  (key === 'feel' ? $('#sense-next') : $(`#sense-${key}`)).focus();
});
setSense('listen', false);

// The two exchanges in the review cancel only their own ordering changes.
// Modern Jazz / Bebop stays exchanged; Velvet Vows moves to the end of Soul.
const genres = [
  { id: 'modern', title: 'Modern Jazz', subtitle: 'EDGE & TEXTURE', badge: 'NEW', artists: [
    { name: 'Chromatic Lines', description: 'Angular melodies, elastic time', vibes: ['late', 'date'] },
    { name: 'Neon Interval', description: 'Polyrhythms and hush-to-roar dynamics', vibes: ['late', 'instrumental'] },
    { name: 'Harbor Sextet', description: 'Warm voicings with modern harmony', vibes: ['date', 'instrumental'] },
    { name: 'Sunday Sketches', description: 'Light modern set for brunch service', vibes: ['brunch'] }
  ]},
  { id: 'bebop', title: 'Bebop', subtitle: 'FAST & PRECISE', badge: 'TONIGHT', artists: [
    { name: 'The Blue Hour Trio', description: 'Tenor-led bebop with clipped harmonies', vibes: ['late', 'instrumental'] },
    { name: 'Riverside Quartet', description: 'Standards with bright cymbal shimmer', vibes: ['date', 'instrumental'] },
    { name: 'Matinée Horns', description: 'Brass-forward swing for daytime sets', vibes: ['brunch'], featured: true },
    { name: 'Afterhours Heads', description: 'Open chorus rotation, tight rhythm section', vibes: ['late'] }
  ]},
  { id: 'soul', title: 'Soul', subtitle: 'VELVET & GROOVE', badge: 'POPULAR', artists: [
    { name: 'Golden Hour Organ', description: 'Hammond-led grooves, soft swing', vibes: ['brunch', 'instrumental'] },
    { name: 'Midnight Pocket', description: 'Deep bass lines and tight backbeats', vibes: ['late'] },
    { name: 'Blue Satin Duo', description: 'Guitar + keys, airy and intimate', vibes: ['date', 'instrumental'] },
    { name: 'Velvet Vows', description: 'Neo-soul vocals with jazz voicings', vibes: ['date', 'late'] }
  ]},
  { id: 'instrumental', title: 'Instrumental', subtitle: 'PURE TONE', badge: 'SESSIONS', artists: [
    { name: 'Brush & Brass', description: 'Drums-led set with horn features', vibes: ['late', 'instrumental'] },
    { name: 'Four on the Floor', description: 'Piano trio, classic ride patterns', vibes: ['date', 'instrumental'] },
    { name: 'Sunday Standards', description: 'Instrumental favorites for brunch', vibes: ['brunch', 'instrumental'] },
    { name: 'Vinyl Study', description: 'Improvised variations on classic sides', vibes: ['late', 'instrumental'] }
  ]}
];
function renderLineup(filter = 'all') {
  let count = 0;
  $('#artist-grid').innerHTML = genres.map(genre => {
    const selected = genre.artists.filter(artist => filter === 'all' || artist.vibes.includes(filter));
    count += selected.length;
    return `<article class="genre-card" data-genre="${genre.id}"><h3>${genre.title}</h3><div class="genre-subline"><span>${genre.subtitle}</span><span>${genre.badge}</span></div><div class="genre-bar" aria-hidden="true"></div><ul class="artist-list">${selected.length ? selected.map(artist => `<li class="artist${artist.featured ? ' featured-gold' : ''}"><i class="avatar" aria-hidden="true"></i><div class="artist-copy"><strong>${artist.name}</strong><small>${artist.description}</small></div></li>`).join('') : '<li class="empty-category">No sets for this vibe.</li>'}</ul></article>`;
  }).join('');
  $('#filter-status').textContent = `${count} performances shown.`;
  $$('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
}
$$('[data-filter]').forEach(button => button.addEventListener('click', () => renderLineup(button.dataset.filter)));
renderLineup();

const memories = [
  { title: 'The Quartet Residency', subtitle: 'Brush drums, upright bass, close mics', icon: '♪', image: '5.jpg', alt: 'Tower Records sign illuminated against the night', tag: 'Stage intimacy • close-mic detail', text: 'Four players, one room, and a hush that made every note feel inevitable. The residency defined our sound: a bass you can trace with your eyes, a ride cymbal that blooms instead of bites.' },
  { title: 'Vocal Series', subtitle: 'Vintage mic nights with smoked light', icon: '♩', image: '8.jpg', alt: 'A tall wine glass and bottle at an intimate supper table', tag: 'Vintage mic • smoke & glow', text: 'A line of voices under low amber light—close to the microphone, close to the room. We keep the mix warm and dry, with just enough space to let the phrasing hang in the air.' },
  { title: 'Vinyl Listening Salons', subtitle: 'Curator-led sides, silent room, deep cuts', icon: '◎', image: '6.jpg', alt: 'Colorful vinyl records displayed on a wire grid', tag: 'Side A / Side B • silent room', text: 'Curator-led sessions that treat a record like a ritual. No talking during playback—just needle, groove, and the subtle vibration of the room reacting together.' },
  { title: 'Neon Sign Sessions', subtitle: 'Late sets under glowing reds and greens', icon: '‡', image: '3.jpg', alt: 'Eastcheap Records neon sign glowing red in a window', tag: 'Electric accents • midnight energy', text: 'Late sets where the room leans into color—greens, reds, and the hum of neon. The band plays tighter, the bar runs brighter, and the night stretches out.' }
];
$('#archive-options').innerHTML = memories.map((memory, index) => `<button data-memory="${index}" aria-pressed="${index === 0}" aria-controls="archive-preview"><span class="archive-icon" aria-hidden="true">${memory.icon}</span><span><strong>${memory.title}</strong><small>${memory.subtitle}</small></span><span class="archive-arrow" aria-hidden="true">→</span></button>`).join('');
let currentMemory = -1;
function showMemory(index) {
  if (currentMemory === index) return;
  currentMemory = index;
  const memory = memories[index];
  $('#archive-preview').innerHTML = `<img src="assets/${memory.image}" alt="${memory.alt}" loading="lazy"><figcaption><div class="archive-caption-head"><h3>${memory.title}</h3><span class="pill"><i class="dot gold"></i>${memory.tag}</span></div><p>${memory.text}</p></figcaption>`;
  $$('[data-memory]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.memory) === index)));
}
$$('[data-memory]').forEach(button => {
  for (const event of ['mouseenter', 'focus', 'click']) button.addEventListener(event, () => showMemory(Number(button.dataset.memory)));
  button.addEventListener('keydown', event => {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const delta = ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? 3 : (currentMemory + delta + 4) % 4;
    $(`[data-memory="${next}"]`).focus();
  });
});
showMemory(0);

const programToggle = $('#program-toggle');
const programMenu = $('#program-menu');
function setProgram(open, returnFocus = false) {
  programMenu.hidden = !open;
  programToggle.setAttribute('aria-expanded', String(open));
  if (returnFocus) programToggle.focus();
}
programToggle.addEventListener('click', () => setProgram(programMenu.hidden));
programToggle.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown') { event.preventDefault(); setProgram(true); $('a', programMenu).focus(); }
});
programMenu.addEventListener('keydown', event => {
  if (['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
    event.preventDefault();
    const links = $$('a', programMenu);
    const index = links.indexOf(document.activeElement);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? 2 : (index + (event.key === 'ArrowUp' ? -1 : 1) + 3) % 3;
    links[next].focus();
  }
});
programMenu.addEventListener('click', event => { if (event.target.closest('a')) setProgram(false); });
document.addEventListener('click', event => { if (!event.target.closest('.program-wrap')) setProgram(false); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !programMenu.hidden) setProgram(false, true); });
document.addEventListener('focusin', event => { if (!event.target.closest('.program-wrap')) setProgram(false); });

// Keep the same mutually exclusive behavior in browsers without details[name].
$$('details[name]').forEach(detail => detail.addEventListener('toggle', () => {
  if (detail.open) $$(`details[name="${detail.name}"]`).forEach(other => { if (other !== detail) other.open = false; });
}));

const dialog = $('#local-dialog');
let dialogOpener;
function openDialog(title, paragraphs) {
  dialogOpener = document.activeElement;
  $('#dialog-title').textContent = title;
  $('#dialog-body').replaceChildren();
  paragraphs.forEach((text, index) => {
    const p = document.createElement('p');
    p.textContent = text;
    if (index === paragraphs.length - 1) p.className = 'dialog-note';
    $('#dialog-body').append(p);
  });
  dialog.showModal();
}
function closeDialog() { dialog.close(); }
$('.dialog-close').addEventListener('click', closeDialog);
$('.dialog-done').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog();
});
dialog.addEventListener('close', () => { if (dialogOpener?.isConnected) dialogOpener.focus(); });
$$('[data-article]').forEach(button => button.addEventListener('click', () => {
  const card = button.closest('article');
  openDialog($('h3', card).textContent, [$('p', card).textContent, 'This is a preview from the Midnight Note journal. The full article is not included in this local edition.']);
}));
$$('[data-info]').forEach(button => button.addEventListener('click', () => openDialog(button.dataset.info, ['A press reference from our guest reviews.', 'This local edition does not include an external publication or review page.'])));
$('#membership-apply').addEventListener('click', () => openDialog('Membership at The Midnight Note', ['Priority reservations, members-only late sets, and cellar access for special nights. Applications are reviewed weekly; member access includes a dedicated concierge line.', 'Membership applications are not collected in this local preview. No personal information is sent.']));

$('#reservation-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const confirmation = $('#reservation-confirmation');
  confirmation.replaceChildren();
  const headline = document.createElement('strong');
  headline.textContent = 'Request received.';
  const detail = document.createElement('span');
  detail.textContent = `${values.get('date')} • ${values.get('time')} set • ${values.get('party')} guests • ${values.get('seating')}${values.get('tasting') ? ' • Chef’s Tasting' : ''}. Local confirmation only; no reservation or email has been sent.`;
  confirmation.append(headline, detail);
  confirmation.hidden = false;
  confirmation.focus({ preventScroll: true });
  confirmation.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
});
