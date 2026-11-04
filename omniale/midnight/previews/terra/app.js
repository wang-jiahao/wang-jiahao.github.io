const sensory = {
  listen: {title:'Listening Room Protocol', text:'Our stage is mixed for clarity, not volume. Sets are framed by short intermissions—enough time to refresh a drink, not enough to break the spell.', points:['House system tuned for upright bass definition and cymbal air.','Vinyl prelude from the club library before each first set.','Quiet service choreography; menus land between tunes.'], image:'9.jpg', alt:'Vintage record shop sign'},
  taste: {title:'Chef’s Set Menu: “Midnight Service”', text:'The menu is built around the rhythm of the room: seasonal ingredients, measured courses, and dishes that arrive in time with the music.', points:['Four courses that move from light to warm and deep.','Wine and non-alcoholic pairings for every set.','Dessert is served during the final notes.'], image:'8.jpg', alt:'Wine and place setting'},
  feel: {title:'Room Atmosphere', text:'Low lights, deep textures, and a ceiling designed to carry reflections. The room feels intimate without losing the energy of a live performance.', points:['Candlelight at every table and booth.','Acoustic design puts the music at the center.','Service moves quietly around the room.'], image:'3.jpg', alt:'Red neon record shop sign'}
};
const panel = document.querySelector('#sensory-panel');
let currentPanel = 'listen';
function renderPanel(){
  panel.hidden = !currentPanel;
  document.querySelectorAll('.pillar').forEach(button => {const active = button.dataset.panel === currentPanel; button.classList.toggle('active',active); button.setAttribute('aria-expanded',String(active));});
  if (!currentPanel) return;
  const item = sensory[currentPanel];
  panel.innerHTML = `<div class="sensory-copy"><h3>${item.title}</h3><p>${item.text}</p><ul ${currentPanel === 'listen' ? 'hidden' : ''}>${item.points.map(point=>`<li>${point}</li>`).join('')}</ul></div><img src="assets/${item.image}" alt="${item.alt}">`;
}
document.querySelectorAll('.pillar').forEach(button=>button.addEventListener('click',()=>{currentPanel = currentPanel === button.dataset.panel ? null : button.dataset.panel; renderPanel();}));
renderPanel();

const genres = [
  {name:'Modern Jazz',sub:'Edge & texture',tag:'New',accent:'#d63b6a',shade:'#401629',artists:[['Chromatic Lines','Angular melodies, elastic time','date instrumental'],['Neon Interval','Polyrhythms and hush-to-roar dynamics','late instrumental'],['Harbor Sextet','Warm voicings with modern harmony','date'],['Sunday Sketches','Light modern set for brunch sessions','brunch']]},
  {name:'Bebop',sub:'Fast & precise',tag:'Tonight',accent:'#dca72b',shade:'#47300d',artists:[['The Blue Hour Trio','Tenor-led bebop with clipped swing','late instrumental'],['Riverside Quartet','Standards with bright cymbal work','date instrumental'],['Matinée Horns','Brass-forward swing for daytime','brunch'],['Afterhours Heads','Open chorus rotation, tight rhythm','late']]},
  {name:'Soul',sub:'Velvet & groove',tag:'Popular',accent:'#397acb',shade:'#142d50',artists:[['Velvet Vows','Neo-soul vocals with jazz voicings','date'],['Golden Hour Organ','Hammond-led grooves, soft swing','brunch instrumental'],['Midnight Pocket','Deep bass lines and tight backbeats','late'],['Blue Satin Duo','Guitar + keys, airy and intimate','date instrumental']]},
  {name:'Instrumental',sub:'Pure tone',tag:'Sessions',accent:'#8660c6',shade:'#29214f',artists:[['Brush & Brass','Drums-led set with horn features','late instrumental'],['Four on the Floor','Piano trio, classic ride patterns','date instrumental'],['Sunday Standards','Instrumental favorites for brunch','brunch instrumental'],['Vinyl Study','Improvised variations on classic sides','late instrumental']]}
];
const lineup = document.querySelector('#lineup-grid');
function renderLineup(filter='all'){
  lineup.innerHTML = genres.map(genre=>`<article class="genre" style="--accent:${genre.accent};--shade:${genre.shade}"><h3>${genre.name}</h3><div class="genre-meta"><span>${genre.sub}</span><span>${genre.tag}</span></div><div class="genre-bar"></div><div class="artist-list">${genre.artists.filter(artist=>filter==='all'||artist[2].split(' ').includes(filter)).map(artist=>`<div class="artist"><span class="artist-dot"></span><div><b>${artist[0]}</b><small>${artist[1]}</small></div></div>`).join('')}</div></article>`).join('');
}
document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('selected'));button.classList.add('selected');renderLineup(button.dataset.filter);}));
renderLineup();

const archive = [
  {title:'The Quartet Residency',sub:'Four players, one room, all-night chemistry',image:'5.jpg',text:'Four players, one room, and a band that made every tune feel inevitable. The residency settled into a groove over the season, with a rhythm that became instantly familiar.'},
  {title:'Vocal Series',sub:'Voices up close with candlelight',image:'8.jpg',text:'A line of voices under low amber light—close to the microphone, close to the room. The band left space and the room listened.'},
  {title:'Vinyl Listening Salons',sub:'Deep cuts, slow pours',image:'6.jpg',text:'Careful selections that made a room feel like a ritual: the needle, the notes, and a quiet conversation between sides.'},
  {title:'Neon Sign Sessions',sub:'Late sets under glowing reds and greens',image:'3.jpg',text:'Late sets where the room leans into color—greens, reds, and the hum of neon. The band plays brighter, the bar glows brighter, and the night stretches out.'}
];
const archiveList = document.querySelector('#archive-list');
function showArchive(index){const item=archive[index];document.querySelector('#archive-preview').innerHTML=`<img src="assets/${item.image}" alt=""><div class="archive-caption"><h3>${item.title}</h3><p>${item.text}</p></div>`;archiveList.querySelectorAll('button').forEach((button,i)=>button.classList.toggle('active',i===index));}
archiveList.innerHTML=archive.map((item,index)=>`<button data-index="${index}"><b>${item.title} &nbsp; →</b><small>${item.sub}</small></button>`).join('');
archiveList.querySelectorAll('button').forEach(button=>{button.addEventListener('click',()=>showArchive(+button.dataset.index));button.addEventListener('mouseenter',()=>showArchive(+button.dataset.index));button.addEventListener('focus',()=>showArchive(+button.dataset.index));});showArchive(0);

const toggle=document.querySelector('#program-toggle');const menu=document.querySelector('#program-menu');
function closeMenu(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');}
toggle.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));});
document.addEventListener('click',event=>{if(!event.target.closest('.nav-wrap')) closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape') closeMenu();});
menu.addEventListener('click',event=>{if(event.target.closest('a')) closeMenu();});
document.querySelectorAll('.experience').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open) document.querySelectorAll('.experience').forEach(other=>{if(other!==detail) other.open=false;});}));
document.querySelector('#reserve-form').addEventListener('submit',event=>{event.preventDefault();document.querySelector('#reservation-feedback').hidden=false;});
document.querySelectorAll('.article-button').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#journal-feedback').hidden=false;}));
const reservationSelects = document.querySelectorAll('#reserve-form select');
reservationSelects[0].innerHTML = '<option>7:30 — First set</option><option>9:45 — Second set</option><option>11:45 — Late set</option>';
reservationSelects[1].innerHTML = '<option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>';
reservationSelects[2].innerHTML = '<option>Dining table</option><option>Bar rail</option><option>Lounge booth</option>';
document.querySelector('#reserve > .container > .section-intro').innerHTML = 'Choose your seating, your set, and whether you\'d like the chef\'s sequence.<br>This local preview does not send a reservation.';
