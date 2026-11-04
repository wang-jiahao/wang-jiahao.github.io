(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const programButton = $('#program-toggle'), programMenu = $('#program-menu');
  function closeProgram() { programMenu.hidden = true; programButton.setAttribute('aria-expanded', 'false'); }
  programButton.addEventListener('click', () => { const open = programMenu.hidden; programMenu.hidden = !open; programButton.setAttribute('aria-expanded', String(open)); });
  document.addEventListener('click', e => { if (!e.target.closest('.program-wrap')) closeProgram(); });
  $$('a', programMenu).forEach(a => a.addEventListener('click', closeProgram));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !programMenu.hidden) { closeProgram(); programButton.focus(); } });

  const sensory = {
    listen: { title:'Listening Room Protocol', body:'Our stage is mixed for clarity, not volume. Sets are framed by short intermissions—enough time to refresh a drink, not enough to break the spell.', points:['House system tuned for upright bass definition and cymbal air.','Vinyl prelude from the club library before each first set.','Quiet service choreography: menus land between tunes.'], image:'9', alt:'Vintage neon record-shop signs in a dark window', color:'#eab745' },
    taste: { title:'Chef’s Set Menu: “Midnight Service”', body:'Five courses built around late-night brightness—citrus, smoke, and slow heat—paired to the pacing of the evening’s program.', points:['First course arrives with the opening theme—clean, bracing, precise.','Main course lands before the final solo—comforting and deep.','Dessert is plated during applause—quiet sweetness, no rush.'], image:'8', alt:'A wine bottle and glasses set for the chef’s tasting menu', color:'#d64365' },
    feel: { title:'Room Atmosphere', body:'Low tables, deep banquettes, and a ceiling designed to scatter reflections like brushwork—soft edges, clean detail. The room is calibrated for closeness: you’ll feel the cymbal swell before you notice it.', points:['Candlelight speculars across glass and brass.','Sapphire-blue gradients in the lounge, velvet violet at the bar.','Seat spacing optimized for conversation between sets.'], image:'3', alt:'A glowing red circular record-shop sign', color:'#8a5ee0' }
  };
  let selectedPillar = null;
  function showPillar(key, toggle = true) {
    const panel = $('#sensory-panel');
    if (selectedPillar === key && toggle) { panel.hidden = true; selectedPillar = null; }
    else {
      const data = sensory[key]; selectedPillar = key; panel.hidden = false; panel.dataset.current = key;
      panel.style.setProperty('--panel-color', data.color);
      panel.innerHTML = `<div class="sensory-copy"><h3>${data.title}</h3><p>${data.body}</p><ul>${data.points.map(p => `<li>${p}</li>`).join('')}</ul></div><figure class="sensory-image"><img src="assets/${data.image}.jpg" alt="${data.alt}"></figure>`;
    }
    $$('[data-pillar]').forEach(b => { b.setAttribute('aria-expanded', String(b.dataset.pillar === selectedPillar)); });
  }
  $$('[data-pillar]').forEach(b => b.addEventListener('click', () => showPillar(b.dataset.pillar)));
  showPillar('listen', false);

  const artists = {
    bluehour:{name:'The Blue Hour Trio',description:'Tenor-led bebop with clipped harmonies',time:'9:45',vibes:['late','instrumental']},
    riverside:{name:'Riverside Quartet',description:'Standards with bright cymbal shimmer',time:'7:30',vibes:['date','instrumental']},
    matinee:{name:'Matinée Horns',description:'Brass-forward swing for daytime sets',time:'12:30',vibes:['brunch','instrumental'],gold:true},
    afterhours:{name:'Afterhours Heads',description:'Open chorus rotation, tight rhythm section',time:'11:45',vibes:['late','instrumental']},
    chromatic:{name:'Chromatic Lines',description:'Angular melodies, elastic time',time:'7:30',vibes:['date','instrumental']},
    neon:{name:'Neon Interval',description:'Polyrhythms and hush-to-roar dynamics',time:'9:45',vibes:['late','instrumental']},
    harbor:{name:'Harbor Sextet',description:'Warm voicings with modern harmony',time:'9:45',vibes:['date','instrumental']},
    sketches:{name:'Sunday Sketches',description:'Light modern set for brunch service',time:'12:30',vibes:['brunch','instrumental']},
    velvet:{name:'Velvet Vows',description:'Neo-soul vocals with jazz voicings',time:'7:30',vibes:['date']},
    golden:{name:'Golden Hour Organ',description:'Hammond-led grooves, soft swing',time:'9:45',vibes:['late','instrumental']},
    pocket:{name:'Midnight Pocket',description:'Deep bass lines and tight backbeats',time:'11:45',vibes:['late']},
    satin:{name:'Blue Satin Duo',description:'Guitar + keys, airy and intimate',time:'7:30',vibes:['date','instrumental']},
    brush:{name:'Brush & Brass',description:'Drums-led set with horn features',time:'9:45',vibes:['late','instrumental']},
    floor:{name:'Four on the Floor',description:'Piano trio, classic ride patterns',time:'7:30',vibes:['date','instrumental']},
    standards:{name:'Sunday Standards',description:'Instrumental favorites for brunch',time:'12:30',vibes:['brunch','instrumental']},
    vinyl:{name:'Vinyl Study',description:'Improvised variations on classic sides',time:'11:45',vibes:['late','instrumental']}
  };
  // Final category order reflects the Bebop / Modern Jazz swap. The moved
  // Matinée Horns retains its own content, filter tags and gold title.
  const categories = [
    {id:'modern',name:'Modern Jazz',sub:'Edge & texture',badge:'New',accent:'#d64365',tint:'#48162780',items:['chromatic','neon','harbor','sketches']},
    {id:'bebop',name:'Bebop',sub:'Fast & precise',badge:'Tonight',accent:'#dfb040',tint:'#60441855',items:['bluehour','riverside','afterhours']},
    {id:'soul',name:'Soul',sub:'Velvet & groove',badge:'Popular',accent:'#4576d6',tint:'#1a315b70',items:['matinee','velvet','golden','pocket','satin']},
    {id:'instrumental',name:'Instrumental',sub:'Pure tone',badge:'Sessions',accent:'#8a5ee0',tint:'#37265570',items:['brush','floor','standards','vinyl']}
  ];
  function renderArtists(filter = 'all') {
    let count = 0;
    $('#artist-grid').innerHTML = categories.map(c => {
      const items = c.items.filter(id => filter === 'all' || artists[id].vibes.includes(filter)); count += items.length;
      return `<article class="artist-category" data-category="${c.id}" style="--accent:${c.accent};--tint:${c.tint}"><h3>${c.name}</h3><div class="category-meta"><span>${c.sub}</span><b>${c.badge}</b></div><div class="category-rule"></div><div class="artist-list">${items.map(id => { const a = artists[id]; return `<div class="artist-row" data-artist="${id}"><span class="artist-orb" aria-hidden="true"></span><div class="artist-details"><strong>${a.name}</strong><small>${a.description}</small></div><time>${a.time}</time></div>`; }).join('') || '<p class="empty-category">Explore another vibe for more sets.</p>'}</div></article>`;
    }).join('');
    $('#filter-status').textContent = `${count} performances shown.`;
  }
  $$('[data-filter]').forEach(b => b.addEventListener('click', () => { $$('[data-filter]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); renderArtists(b.dataset.filter); }));
  renderArtists();

  // Also enforce single-open accordions on browsers without details[name].
  $$('details[name]').forEach(d => d.addEventListener('toggle', () => { if (d.open) $$(`details[name="${d.name || d.getAttribute('name')}"]`).forEach(other => { if (other !== d) other.open = false; }); }));

  const archive = [
    {title:'The Quartet Residency',image:'5',tag:'Stage intimacy • close-mic detail',body:'Four players, one room, and a hush that made every note feel inevitable. The residency defined our sound: a bass you can trace with your eyes, a ride cymbal that blooms instead of bites.'},
    {title:'Vocal Series',image:'8',tag:'Vintage mic • smoke & glow',body:'A line of voices under low amber light—close to the microphone, close to the room. We keep the mix warm and dry, with just enough space to let the phrasing hang in the air.'},
    {title:'Vinyl Listening Salons',image:'6',tag:'Side A / Side B • silent room',body:'Curator-led sessions that treat a record like a ritual. No talking during playback—just needle, groove, and the subtle vibration of the room reacting together.'},
    {title:'Neon Sign Sessions',image:'3',tag:'Electric accents • midnight energy',body:'Late sets where the room leans into color—greens, reds, and the hum of neon. The band plays tighter, the bar runs brighter, and the night stretches out.'}
  ];
  let currentArchive = -1;
  function showArchive(index) {
    const n = Number(index); if (currentArchive === n) return; currentArchive = n;
    const d = archive[n];
    $('#archive-preview').innerHTML = `<img src="assets/${d.image}.jpg" alt="${d.title}"><div class="archive-caption"><div><h3>${d.title}</h3><span class="caption-pill"><i class="dot"></i>${d.tag}</span></div><p>${d.body}</p></div>`;
    $$('[data-archive]').forEach(b => b.setAttribute('aria-selected', String(Number(b.dataset.archive) === n)));
  }
  $$('[data-archive]').forEach((b,i) => { ['mouseenter','focus','click'].forEach(event => b.addEventListener(event, () => showArchive(i))); b.addEventListener('keydown', e => { let next; if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i+1)%4; if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i+3)%4; if (e.key === 'Home') next = 0; if (e.key === 'End') next = 3; if (next !== undefined) { e.preventDefault(); $$('[data-archive]')[next].focus(); } }); });
  showArchive(0);

  const dialog = $('#local-dialog'); let dialogTrigger = null;
  function openDialog(title, html, trigger) { dialogTrigger = trigger; $('#dialog-title').textContent = title; $('#dialog-body').innerHTML = html; dialog.showModal(); }
  function closeDialog() { dialog.close(); dialogTrigger?.focus(); }
  $('.dialog-close').addEventListener('click', closeDialog); $('.dialog-done').addEventListener('click', closeDialog);
  dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeDialog(); } });
  $$('[data-info]').forEach(b => b.addEventListener('click', () => openDialog(b.dataset.info, '<p>A press mention from the Midnight Note guest review collection. This local preview keeps you in the room; no external publication page is connected.</p>', b)));
  const articleTitles = ['Interview with the Musical Director','Why our tasting menu lands between tunes','Acoustic design: the art of soft reflections'];
  $$('[data-article]').forEach(b => b.addEventListener('click', () => { const card = b.closest('article'); openDialog(articleTitles[Number(b.dataset.article)], `<p>${$('p',card).textContent}</p><p>This is a backstage article preview. The full article was not included in the prototype.</p>`, b); }));
  $('#membership-apply').addEventListener('click', e => openDialog('Membership at The Midnight Note','<p>Priority reservations, members-only late sets, and cellar access for special nights.</p><p>Applications reviewed weekly • Member access includes a dedicated concierge line.</p><p>Membership applications are not connected in this local preview. You can explore the room and try the reservation form below.</p>',e.currentTarget));
  $('#reservation-form').addEventListener('submit', e => { e.preventDefault(); if (!e.currentTarget.reportValidity()) return; $('#reservation-feedback').hidden = false; });
  $('#reservation-form').addEventListener('input', () => { $('#reservation-feedback').hidden = true; });
})();
