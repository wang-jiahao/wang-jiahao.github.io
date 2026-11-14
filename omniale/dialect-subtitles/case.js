'use strict';
const $ = id => document.getElementById(id);
const node = (tag, text, className) => { const n=document.createElement(tag); if(text!==undefined)n.textContent=text; if(className)n.className=className; return n; };
const fmt = n => Number(n).toFixed(2);
const elapsed = s => `${Math.floor(s/60)}分${Math.round(s%60).toString().padStart(2,'0')}秒`;
let data, currentSegment;
function drawCaption() {const t=$('output-video').currentTime;const texts=(currentSegment?.cues||[]).filter(c=>t>=c.start&&t<c.end).map(c=>c.text);$('subtitle-overlay').textContent=texts.join('\n');$('subtitle-overlay').hidden=!$('caption-switch').checked||!texts.length;}
function options(select) { for(const s of data.segments) { const o=node('option',`${s.id} · ${s.dialect}`);o.value=s.id;select.append(o); } }
function input(sid) { const s=data.segments.find(x=>x.id===sid);$('input-video').src=s.source_url;$('input-link').href=s.source_url; }
function preview(sid, scroll=false) {
  const s=data.segments.find(x=>x.id===sid);$('output-clip').value=sid;
  const v=$('output-video');v.pause();v.src=s.source_url;
  currentSegment=s;drawCaption();$('cue-links').replaceChildren();
  for(const c of s.cues){const b=node('button',`定位字幕 ${c.id}`);b.type='button';b.addEventListener('click',()=>{v.pause();v.currentTime=c.start+.05;drawCaption();});$('cue-links').append(b);}
  $('clip-title').textContent=`${s.id} · ${s.dialect}`;$('candidate-text').textContent=s.subtitle||'[未提交字幕]';
  $('clip-score').textContent=`语义F1 ${fmt(s.semantic_f1*100)}%；此片段有${s.cues.length}条字幕。`;
  $('reference-text').textContent=`来源译文：${s.reference}`;$('uncertainty').textContent=s.uncertainty?`模型不确定性说明：${s.uncertainty}`:'';
  $('source-page').href=s.source_page;$('atom-votes').replaceChildren();
  for(const a of s.atoms) { const vote=s.judgment.atoms.find(x=>x.atom_id===a.id);const box=node('div',undefined,'atom');box.append(node('strong',`${a.meaning} · ${vote.credit}/1`),node('p',vote.reason));if(vote.candidate_quote)box.append(node('p',`模型原文：“${vote.candidate_quote}”`,'note'));$('atom-votes').append(box); }
  for(const f of s.judgment.false_assertions) { const box=node('div',undefined,'atom');box.append(node('strong','错误或无据新增'),node('p',`“${f.quote}”：${f.reason}`));$('atom-votes').append(box); }
  if(scroll)$('output-clip').scrollIntoView({behavior:'smooth',block:'center'});
}
function linkClip(sid) { const a=node('a',sid,'clip-jump');a.href='#results';a.addEventListener('click',()=>preview(sid,true));return a; }
async function start() {
  data=await(await fetch('files/case.json')).json();
  const count=data.segments.length, groups=Object.keys(data.semantic_by_dialect);
  $('material-tag').textContent=`${groups.length}种方言 · ${count}段 · ${elapsed(data.duration)}`;
  $('input-description').textContent=`${count}段真人短片汇成${elapsed(data.duration)}视频；覆盖${groups.join('、')}。附片段编号、起止时间与方言标签。`;
  const tr=node('tr');for(const x of [data.model,data.effort,fmt(data.score),fmt(data.semantic_score),fmt(data.organization_score),fmt(data.delivery_score),elapsed(data.elapsed_seconds)])tr.append(node('td',x,'num'));tr.children[2].classList.add('score');$('scores').append(tr);
  $('run-note').textContent=`Codex CLI，NJU Link，正常联网，独立会话且不设执行预算。单次求解，${data.judge} ${data.judge_effort}单轮语义评审；耗时包含工具、下载与API等待。`;
  if(data.audit_adjustment_count){$('run-note').append(document.createTextNode(` 主分含${data.audit_adjustment_count}处等价表述或来源歧义的向上修正，权重与公式不变。`));const bar=node('div',undefined,'toolbar');for(const [href,text]of [['files/original-score.json',`原始判票 ${fmt(data.original_score)}`],['files/equivalence-audit.json','从宽修正明细']]){const a=node('a',text);a.href=href;bar.append(a);}$('run-note').after(bar);}
  for(const [d,f1]of Object.entries(data.semantic_by_dialect)) { const r=node('tr');for(const x of [d,data.segments.filter(x=>x.dialect===d).length,`${fmt(f1*100)}%`])r.append(node('td',x));$('dialect-scores').append(r); }
  options($('input-clip'));options($('output-clip'));input(data.segments[0].id);preview(data.segments[0].id);
  $('input-clip').addEventListener('change',e=>input(e.target.value));$('output-clip').addEventListener('change',e=>preview(e.target.value));$('caption-switch').addEventListener('change',drawCaption);
  for(const ev of ['timeupdate','seeked','loadedmetadata','emptied'])$('output-video').addEventListener(ev,drawCaption);
  let expanded=false,previousOverflow='';
  function expand(value){expanded=value;$('video-frame').classList.toggle('preview-expanded',value);$('close-expanded').hidden=!value;if(value){previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';$('close-expanded').focus();}else{document.body.style.overflow=previousOverflow;$('preview-enlarge').focus();}}
  $('preview-enlarge').addEventListener('click',()=>expand(true));$('close-expanded').addEventListener('click',()=>expand(false));document.addEventListener('keydown',e=>{if(expanded&&e.key==='Escape')expand(false);});
  $('trace-overview').textContent=data.trace_summary.overview;$('trace-tools').textContent=`${data.trace_summary.command_count}条可见终端操作。工具：${(data.trace_summary.tools||[]).map(x=>typeof x==='string'?x:x.name).join('、')}。运行结果和失败恢复见过程总结。`;
  const examples=data.analysis.length?data.analysis:[{title:'逐句查看未完整保留的意思',text:'以下按语义F1从低到高列出片段；来源译文、模型原文和每项判定均可展开核对。',segments:[...data.segments].sort((a,b)=>a.semantic_f1-b.semantic_f1).slice(0,3).map(s=>s.id)}];
  for(const f of examples) { const article=node('article',undefined,'finding');article.append(node('h3',f.title),node('p',f.text));const bar=node('div',undefined,'toolbar');for(const sid of f.segments||[])bar.append(linkClip(sid));article.append(bar);$('analysis-items').append(article); }
  for(const s of data.segments) { const r=node('tr'),first=node('td');first.append(linkClip(s.id),node('div',s.dialect,'note'));r.append(first,node('td',s.subtitle||'[未提交字幕]'),node('td',s.reference),node('td',`${fmt(s.semantic_f1*100)}%`));$('all-segments').append(r); }
  const initial=new URLSearchParams(location.search).get('segment');if(data.segments.some(s=>s.id===initial))preview(initial);
}
start().catch(e=>{$('run-note').textContent=`数据加载失败：${e.message}`;console.error(e);});
