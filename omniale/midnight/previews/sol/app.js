'use strict';

const q = (selector, root = document) => root.querySelector(selector);
const qa = (selector, root = document) => [...root.querySelectorAll(selector)];

// All navigation and feedback are local. No form values leave this page.
const programToggle = q('#program-toggle');
const programMenu = q('#program-menu');
function closeProgram(restoreFocus = false) {
  programMenu.hidden = true;
  programToggle.setAttribute('aria-expanded', 'false');
  if (restoreFocus) programToggle.focus();
}
programToggle.addEventListener('click', () => {
  const opening = programMenu.hidden;
  programMenu.hidden = !opening;
  programToggle.setAttribute('aria-expanded', String(opening));
});
document.addEventListener('click', event => {
  if (!event.target.closest('.program-wrap')) closeProgram();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !programMenu.hidden) closeProgram(true);
});
qa('a', programMenu).forEach(link => link.addEventListener('click', () => closeProgram()));

const pillars = {
  listen: {
    title: 'Listening Room Protocol', image: '9.jpg', alt: 'Vintage clothing and records signs glowing through a window',
    text: 'Our stage is mixed for clarity, not volume. Sets are framed by short intermissions—enough time to refresh a drink, not enough to break the spell.',
    bullets: ['House system tuned for upright bass definition and cymbal air.', 'Vinyl prelude from the club library before each first set.', 'Quiet service choreography; menus land between tunes.']
  },
  taste: {
    title: 'Chef’s Set Menu: “Midnight Service”', image: '8.jpg', alt: 'A wine bottle and glass at a supper club table',
    text: 'Five courses built around late-night brightness—citrus, smoke, and slow heat—paired to the pacing of the evening’s program.',
    bullets: ['First course arrives with the opening theme—clean, bracing, precise.', 'Main course lands before the final solo—comforting and deep.', 'Dessert is plated during applause—quiet sweetness, no rush.']
  },
  feel: {
    title: 'Room Atmosphere', image: '3.jpg', alt: 'The red Edgewood Records neon sign on a brick wall',
    text: 'Low tables, deep banquettes, and a ceiling designed to scatter reflections like brushwork—soft edges, clean detail. The room is calibrated for closeness: you’ll feel the cymbal swell before you notice it.',
    bullets: ['Candlelight speculars across glass and brass.', 'Sapphire-blue gradients in the lounge, velvet violet at the bar.', 'Seat spacing optimized for conversation between sets.']
  }
};
// The review hides the large Feel tile. Its content remains accessible through
// a small contextual link so all three original sensory panels still work.
const atmosphereLink = document.createElement('button');
atmosphereLink.className = 'room-link';
atmosphereLink.dataset.pillar = 'feel';
atmosphereLink.textContent = 'Room Atmosphere';
atmosphereLink.setAttribute('aria-controls', 'sensory-panel');
atmosphereLink.setAttribute('aria-expanded', 'false');
q('#sensory .section-intro').append(atmosphereLink);
let activePillar = 'listen';
function showPillar(key, toggle = true) {
  activePillar = toggle && activePillar === key ? null : key;
  qa('[data-pillar]').forEach(button => button.setAttribute('aria-expanded', String(button.dataset.pillar === activePillar)));
  const panel = q('#sensory-panel');
  panel.hidden = !activePillar;
  if (!activePillar) return;
  const data = pillars[activePillar];
  panel.className = `sensory-panel glass is-${activePillar}`;
  panel.innerHTML = `<div class="sensory-copy"><h3>${data.title}</h3><p>${data.text}</p><ul>${data.bullets.map(text => `<li>${text}</li>`).join('')}</ul></div><img src="assets/${data.image}" alt="${data.alt}">`;
}
qa('[data-pillar]').forEach(button => button.addEventListener('click', () => showPillar(button.dataset.pillar)));
showPillar('listen', false);

const artists = [
  {id:'blue-hour', name:'The Blue Hour Trio', text:'Tenor-led bebop with clipped harmonies', time:'9:45 PM', category:'bebop', vibes:['late']},
  {id:'riverside', name:'Riverside Quartet', text:'Standards with bright cymbal shimmer', time:'7:30 PM', category:'bebop', vibes:['date','instrumental']},
  {id:'matinee', name:'Matinée Horns', text:'Brass-forward swing for daytime sets', time:'12:30 PM', category:'soul', originalCategory:'bebop', vibes:['brunch']},
  {id:'afterhours', name:'Afterhours Heads', text:'Open chorus rotation, tight rhythm section', time:'11:45 PM', category:'bebop', vibes:['late']},
  {id:'chromatic', name:'Chromatic Lines', text:'Angular melodies, elastic time', time:'7:30 PM', category:'modern', vibes:['date','instrumental']},
  {id:'neon', name:'Neon Interval', text:'Polyrhythms and hush-to-roar dynamics', time:'9:45 PM', category:'modern', vibes:['late']},
  {id:'harbor', name:'Harbor Sextet', text:'Warm voicings with modern harmony', time:'9:45 PM', category:'modern', vibes:['date']},
  {id:'sketches', name:'Sunday Sketches', text:'Light modern set for brunch service', time:'1:00 PM', category:'modern', vibes:['brunch']},
  {id:'velvet', name:'Velvet Vows', text:'Neo-soul vocals with jazz voicings', time:'7:30 PM', category:'soul', vibes:['date']},
  {id:'golden', name:'Golden Hour Organ', text:'Hammond-led grooves, soft swing', time:'12:30 PM', category:'soul', vibes:['brunch','instrumental']},
  {id:'pocket', name:'Midnight Pocket', text:'Deep bass lines and tight backbeat', time:'11:45 PM', category:'soul', vibes:['late']},
  {id:'satin', name:'Blue Satin Duo', text:'Guitar + keys, airy and intimate', time:'9:45 PM', category:'soul', vibes:['date','instrumental']},
  {id:'brush', name:'Brush & Brass', text:'Drums-led set with horn features', time:'9:45 PM', category:'instrumental', vibes:['late','instrumental']},
  {id:'floor', name:'Four on the Floor', text:'Piano trio, classic ride patterns', time:'7:30 PM', category:'instrumental', vibes:['date','instrumental']},
  {id:'standards', name:'Sunday Standards', text:'Instrumental favorites for brunch', time:'1:00 PM', category:'instrumental', vibes:['brunch','instrumental']},
  {id:'vinyl', name:'Vinyl Study', text:'Improvised variations on classic sides', time:'11:45 PM', category:'instrumental', vibes:['late','instrumental']}
];
// Category positions are swapped; the two-column request stays with Modern Jazz.
// Matinée Horns moves to the end of Soul, keeping its gold treatment and filters.
const categories = [
  {id:'modern',name:'Modern Jazz',tag:'EDGE & TEXTURE',badge:'NEW'},
  {id:'bebop',name:'Bebop',tag:'FAST & PRECISE',badge:'TONIGHT'},
  {id:'soul',name:'Soul',tag:'VELVET & GROOVE',badge:'POPULAR'},
  {id:'instrumental',name:'Instrumental',tag:'PURE TONE',badge:'SESSIONS'}
];
function renderArtists(filter = 'all') {
  let count = 0;
  q('#artist-grid').innerHTML = categories.map(category => {
    let rows = artists.filter(artist => artist.category === category.id && (filter === 'all' || artist.vibes.includes(filter)));
    if (category.id === 'soul') rows.sort((a,b) => Number(a.id === 'matinee') - Number(b.id === 'matinee'));
    count += rows.length;
    return `<article class="artist-group ${category.id}" data-category="${category.id}"><h3>${category.name}</h3><div class="genre-meta"><span>${category.tag}</span><span>${category.badge}</span></div><div class="genre-line"></div><div class="artist-list">${rows.length ? rows.map(artist => `<div class="artist-row ${artist.id === 'matinee' ? 'moved-gold' : ''}" data-artist="${artist.id}"><span class="artist-orb" aria-hidden="true"></span><div><strong>${artist.name}</strong><p>${artist.text}</p><time>${artist.time}</time></div></div>`).join('') : '<p class="empty-state">No sets for this vibe.</p>'}</div></article>`;
  }).join('');
  q('#filter-status').textContent = `${count} artists shown.`;
}
qa('[data-filter]').forEach(button => button.addEventListener('click', () => {
  qa('[data-filter]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  renderArtists(button.dataset.filter);
}));
renderArtists();

// Dining and lounge form one accordion. Each FAQ remains independently usable.
qa('.experience').forEach(details => details.addEventListener('toggle', () => {
  if (details.open) qa('.experience').filter(other => other !== details).forEach(other => other.open = false);
}));

const archive = [
  {title:'The Quartet Residency',image:'5.jpg',alt:'An amber Tower Records sign at night',hint:'Stage intimacy • close-mic detail',text:'Four players, one room, and a hush that made every note feel inevitable. The residency defined our sound: a bass you can trace with your eyes, a ride cymbal that blooms instead of bites.'},
  {title:'Vocal Series',image:'8.jpg',alt:'A wine glass and bottle in warm amber light',hint:'Vintage mic • smoke & glow',text:'A line of voices under low amber light—close to the microphone, close to the room. We keep the mix warm and dry, with just enough space to let the phrasing hang in the air.'},
  {title:'Vinyl Listening Salons',image:'6.jpg',alt:'Colorful records hanging on a display grid',hint:'Side A / Side B • silent room',text:'Curator-led sessions that treat a record like a ritual. No talking during playback—just needle, groove, and the subtle vibration of the room reacting together.'},
  {title:'Neon Sign Sessions',image:'3.jpg',alt:'A red Edgewood Records neon sign',hint:'Electric accents • midnight energy',text:'Late sets where the room leans into color—greens, reds, and the hum of neon. The band plays tighter, the bar runs brighter, and the night stretches out.'}
];
let activeArchive = -1;
function showArchive(index) {
  if (activeArchive === index) return;
  activeArchive = index;
  const data = archive[index];
  q('#archive-image').src = `assets/${data.image}`;
  q('#archive-image').alt = data.alt;
  q('#archive-title').textContent = data.title;
  q('#archive-hint').textContent = data.hint;
  q('#archive-description').textContent = data.text;
  qa('[data-archive]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.archive) === index)));
}
qa('[data-archive]').forEach(button => {
  ['mouseenter','focus','click'].forEach(event => button.addEventListener(event, () => showArchive(Number(button.dataset.archive))));
});
showArchive(0);

const dialog = q('#local-dialog');
let dialogTrigger;
function showLocal(title, text, trigger) {
  dialogTrigger = trigger;
  q('#dialog-title').textContent = title;
  q('#dialog-content').textContent = text;
  dialog.showModal();
}
qa('[data-article]').forEach(button => button.addEventListener('click', () => {
  const card = button.closest('article');
  showLocal(q('h3',card).textContent, q('p',card).textContent + '\n\nThe full story is available from the club journal. This preview keeps you in the room.', button);
}));
q('#membership-apply').addEventListener('click', event => {
  showLocal('Membership at The Midnight Note', 'Priority reservations, members-only late sets, and access to the cellar. Applications are reviewed weekly.\n\nTo register your interest in this local preview, use the reservation notes field and mention membership. Nothing is sent to the club.', event.currentTarget);
});
qa('.dialog-close,.dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if(event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => dialogTrigger?.focus());

q('#reservation-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  q('#reservation-feedback').hidden = false;
});
q('#reservation-form').addEventListener('input', () => { q('#reservation-feedback').hidden = true; });
