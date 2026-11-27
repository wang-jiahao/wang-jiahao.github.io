'use strict';
const byId=id=>document.getElementById(id);
const input=byId('input-video'), output=byId('output-video'), overlay=byId('subtitle-overlay');
let clips=[], current;
function caption(){
  const active=current?.cues.filter(c=>output.currentTime>=c.start && output.currentTime<c.end)||[];
  overlay.textContent=active.map(c=>c.text).join('\n');
  overlay.hidden=!byId('caption-switch').checked || !active.length;
}
function source(id){
  const clip=clips.find(c=>c.id===id);
  input.pause(); input.src=clip.url; byId('input-link').href=clip.url;
}
function atomBox(label,reason,quote){
  const box=document.createElement('div'); box.className='atom';
  const heading=document.createElement('b'); heading.textContent=label; box.append(heading);
  const p=document.createElement('p'); p.textContent=reason; box.append(p);
  if(quote){const text=document.createElement('p');text.textContent='模型原文：'+quote;box.append(text);}
  return box;
}
function show(id,scroll=false){
  current=clips.find(c=>c.id===id)||clips[0]; const i=clips.indexOf(current);
  byId('output-clip').value=current.id; output.pause(); output.src=current.url; caption();
  byId('clip-title').textContent=current.id+' · '+current.dialect;
  byId('clip-score').textContent='F1 '+(current.semantic_f1*100).toFixed(2)+'%';
  byId('clip-time').textContent=`拼接视频 ${current.start.toFixed(3)}–${current.end.toFixed(3)} 秒`;
  byId('candidate-text').textContent=current.candidate||'未提交字幕'; byId('reference-text').textContent=current.reference;
  byId('uncertainty').textContent=current.uncertainty?'模型不确定性说明：'+current.uncertainty:'';
  byId('previous').disabled=i===0; byId('next').disabled=i===clips.length-1;
  const votes=byId('atom-votes'); votes.replaceChildren();
  for(const atom of current.atoms){const judgment=current.judgment.atoms.find(a=>a.atom_id===atom.id);if(judgment)votes.append(atomBox(atom.meaning+' · '+judgment.credit+'/1',judgment.reason,judgment.candidate_quote));}
  for(const f of current.judgment.false_assertions)votes.append(atomBox('错误或无据新增',f.reason,f.quote));
  if(scroll)byId('subtitle-preview').scrollIntoView({behavior:'smooth',block:'start'});
}
async function init(){
  clips=await fetch('files/clips.json').then(r=>{if(!r.ok)throw Error('无法加载片段');return r.json()});
  for(const id of ['input-clip','output-clip'])for(const clip of clips){const option=document.createElement('option');option.value=clip.id;option.textContent=clip.id+' · '+clip.dialect;byId(id).append(option);}
  source(clips[0].id);show(clips[0].id);byId('input-clip').addEventListener('change',e=>source(e.target.value));byId('output-clip').addEventListener('change',e=>show(e.target.value));
  byId('caption-switch').addEventListener('change',caption);output.addEventListener('timeupdate',caption);output.addEventListener('seeked',caption);output.addEventListener('loadedmetadata',caption);
  byId('previous').addEventListener('click',()=>show(clips[clips.indexOf(current)-1].id));byId('next').addEventListener('click',()=>show(clips[clips.indexOf(current)+1].id));
  document.querySelectorAll('[data-segment]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.segment,true)));
}
init().catch(error=>{byId('candidate-text').textContent=error.message;});
