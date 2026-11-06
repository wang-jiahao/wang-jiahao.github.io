'use strict';
const $=id=>document.getElementById(id);
const cameras={A:{label:'白衣吉他 · 手部与上半身',offset:3},B:{label:'酒红衣拨弦 · 持琴与手部',offset:1.25},C:{label:'灰衣手鼓 · 双手与鼓面',offset:4},D:{label:'三人合奏 · 全景',offset:2.5}};
let selectedCamera='A';
function seek(video,t){
  if(video.readyState>=1){video.currentTime=Math.max(0,Math.min(t,video.duration||t));}
  else{video.addEventListener('loadedmetadata',()=>video.currentTime=t,{once:true});video.load();}
}
function selectCamera(c){
  selectedCamera=c;const v=$('camera-video');v.pause();v.poster=`assets/camera-${c}.jpg`;v.src=`media/camera-${c}.mp4`;v.load();
  $('camera-caption').textContent=`${c} · ${cameras[c].label}。无音轨；当前按原始文件时间浏览。`;
  $('camera-download').href=v.getAttribute('src');
  document.querySelectorAll('[data-camera]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.camera===c)));
  mapping();
}
function mapping(){const t=Number($('source-seek').value),c=cameras[selectedCamera];$('source-time').textContent=`${t.toFixed(2)}s`;$('mapping-note').textContent=`${selectedCamera} 源时间 = 节目时间 + ${c.offset.toFixed(2)}s；此刻应取源 ${(t+c.offset).toFixed(2)}s。`;}
document.querySelectorAll('[data-camera]').forEach(b=>b.addEventListener('click',()=>selectCamera(b.dataset.camera)));
$('source-seek').addEventListener('input',mapping);
$('align-input').addEventListener('click',()=>{const t=Number($('source-seek').value);seek($('camera-video'),t+cameras[selectedCamera].offset);seek($('reference-video'),t);seek($('master-audio'),t);$('camera-caption').textContent=`${selectedCamera} · 已定位到节目 ${t.toFixed(2)}s（源文件 ${(t+cameras[selectedCamera].offset).toFixed(2)}s），请比较当前动作。`;});
const program=$('program-video'),shots=[...document.querySelectorAll('#edit-timeline button')];
const stamp=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}`;
function update(){const t=program.currentTime||0;let current=null;for(const b of shots){const active=t>=Number(b.dataset.start)&&t<Number(b.dataset.end);b.setAttribute('aria-current',String(active));if(active)current=b;}if(current)$('active-camera').textContent=`${current.dataset.cameraName} · 镜头 ${shots.indexOf(current)+1}/14`;$('program-time').textContent=`${stamp(t)} / 1:30`;}
function jump(t){seek(program,t);update();}
shots.forEach(b=>b.addEventListener('click',()=>jump(Number(b.dataset.start))));
document.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>{jump(Number(b.dataset.jump));program.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});}));
program.addEventListener('timeupdate',update);program.addEventListener('seeked',update);
document.querySelectorAll('video,audio').forEach(v=>v.addEventListener('play',()=>document.querySelectorAll('video,audio').forEach(other=>{if(other!==v)other.pause();})));
mapping();update();
