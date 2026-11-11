const movie=document.getElementById('full-film');
const fmt=t=>`${Math.floor(t/3600)?String(Math.floor(t/3600)).padStart(2,'0')+':':''}${String(Math.floor(t/60)%60).padStart(2,'0')}:${(t%60).toFixed(1).padStart(4,'0')}`;
if(movie)movie.addEventListener('timeupdate',()=>document.getElementById('full-clock').textContent=fmt(movie.currentTime));
function seekFilm(seconds){if(!movie)return;const go=()=>{movie.currentTime=Math.max(0,Math.min(seconds,movie.duration||seconds));movie.scrollIntoView({behavior:'smooth',block:'center'});movie.focus()};if(movie.readyState>=1)go();else movie.addEventListener('loadedmetadata',go,{once:true})}
document.querySelectorAll('[data-film-seek]').forEach(x=>x.addEventListener('click',e=>{e.preventDefault();seekFilm(Number(x.dataset.filmSeek))}));
function selectModel(id){document.querySelectorAll('[data-model-button]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.modelButton===id)));document.querySelectorAll('[data-model-panel]').forEach(x=>x.hidden=x.dataset.modelPanel!==id)}
document.querySelectorAll('[data-model-button]').forEach(x=>x.addEventListener('click',()=>selectModel(x.dataset.modelButton)));
document.querySelectorAll('[data-open-report]').forEach(x=>x.addEventListener('click',()=>{selectModel(x.dataset.model);const d=document.getElementById(x.dataset.openReport);if(d){d.open=true;d.scrollIntoView({block:'start',behavior:'smooth'})}}));
document.querySelectorAll('video[data-offset]').forEach(v=>{const clock=v.closest('.player')?.querySelector('.clock');if(clock)v.addEventListener('timeupdate',()=>clock.textContent='原片 '+fmt(Number(v.dataset.offset)+v.currentTime))});
document.querySelectorAll('a[data-seek]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const v=document.getElementById(a.dataset.player);if(v){v.currentTime=Number(a.dataset.seek)-Number(v.dataset.offset);v.scrollIntoView({block:'center',behavior:'smooth'});v.focus()}}));
