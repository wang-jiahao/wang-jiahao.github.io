const player=document.getElementById('source-player');
const clips={kitchen:{src:'media/kitchen.mp4',poster:'assets/kitchen.jpg',start:3548,end:3608,name:'沉水、哼唱与厨房对话'},phone:{src:'media/phone.mp4',poster:'assets/phone.jpg',start:4588,end:4655,name:'电话叙述与户外蒙太奇'}};
let selectedClip='kitchen';
function timeText(t){return `${Math.floor(t/60).toString().padStart(2,'0')}:${(t%60).toFixed(1).padStart(4,'0')}`;}
function updateClock(){document.getElementById('source-clock').textContent='原片 '+timeText(clips[selectedClip].start+player.currentTime);}
async function chooseClip(id,sourceTime,play=false){
 const clip=clips[id];if(!clip)return;
 const local=Math.max(0,Math.min((sourceTime??clip.start)-clip.start,clip.end-clip.start-.1));
 if(id!==selectedClip){
  selectedClip=id;player.src=clip.src;player.poster=clip.poster;
  document.getElementById('clip-name').textContent=clip.name;
  document.querySelectorAll('.clip-button').forEach(b=>b.classList.toggle('active',b.dataset.clip===id));
  await new Promise((resolve,reject)=>{player.addEventListener('loadedmetadata',resolve,{once:true});player.addEventListener('error',reject,{once:true});player.load();});
 }
 player.currentTime=local;updateClock();
 document.getElementById('player-status').textContent=`${clip.name} · 节选对应原片 ${timeText(clip.start)}–${timeText(clip.end)}。`;
 if(play){try{await player.play();}catch{document.getElementById('player-status').textContent+=' 点击播放器继续播放。';}}
}
document.querySelectorAll('.clip-button').forEach(b=>b.addEventListener('click',()=>{chooseClip(b.dataset.clip).catch(()=>{document.getElementById('player-status').textContent='视频暂未载入，可用原片来源或下载链接查看。';});}));
document.querySelectorAll('.evidence-seek').forEach(a=>a.addEventListener('click',e=>{
 e.preventDefault();const id=a.dataset.clip,sourceTime=Number(a.dataset.source);
 chooseClip(id,sourceTime,true).then(()=>{player.scrollIntoView({behavior:'smooth',block:'center'});history.replaceState(null,'',`?clip=${id}&t=${sourceTime}#source-player`);}).catch(()=>{location.href=a.href;});
}));
player.addEventListener('timeupdate',updateClock);player.addEventListener('loadedmetadata',updateClock);
const params=new URLSearchParams(location.search);if(clips[params.get('clip')])chooseClip(params.get('clip'),Number(params.get('t'))||undefined).catch(()=>{});
