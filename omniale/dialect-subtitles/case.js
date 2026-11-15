'use strict';
const $ = id => document.getElementById(id);
const node = (tag, text, className) => { const n=document.createElement(tag); if(text!==undefined)n.textContent=text; if(className)n.className=className; return n; };
const fmt = n => Number(n).toFixed(2);
const elapsed = s => `${Math.floor(s/60)}分${Math.round(s%60).toString().padStart(2,'0')}秒`;
const timestamp = s => `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toFixed(1).padStart(4,'0')}`;
let data, currentSegment;
function drawCaption() {const t=$('output-video').currentTime;const texts=(currentSegment?.cues||[]).filter(c=>t>=c.start&&t<c.end).map(c=>c.text);$('subtitle-overlay').textContent=texts.join('\n');$('subtitle-overlay').hidden=!$('caption-switch').checked||!texts.length;}
function options(select) { for(const s of data.segments) { const o=node('option',`${s.id} · ${s.dialect}`);o.value=s.id;select.append(o); } }
function input(sid) { const s=data.segments.find(x=>x.id===sid);$('input-video').src=s.source_url;$('input-link').href=s.source_url; }
function preview(sid, scroll=false) {
  const wasInitialized=!!currentSegment;
  const s=data.segments.find(x=>x.id===sid);$('output-clip').value=sid;
  const v=$('output-video');v.pause();v.src=s.source_url;
  currentSegment=s;drawCaption();$('cue-links').replaceChildren();
  for(const c of s.cues){const b=node('button',`定位字幕 ${c.id}`);b.type='button';b.addEventListener('click',()=>{v.pause();v.currentTime=c.start+.05;drawCaption();});$('cue-links').append(b);}
  $('clip-title').textContent=`${s.id} · ${s.dialect}`;$('candidate-text').textContent=s.subtitle||'[未提交字幕]';
  $('clip-score').textContent=`语义F1 ${fmt(s.semantic_f1*100)}%`;$('clip-score').classList.toggle('low',s.semantic_f1<.5);
  $('reference-text').textContent=s.reference;$('source-transcript').textContent=`方言原文：${s.source_transcript}`;$('uncertainty').textContent=s.uncertainty?`模型不确定性说明：${s.uncertainty}`:'';
  const index=data.segments.indexOf(s);$('previous-clip').disabled=index===0;$('next-clip').disabled=index===data.segments.length-1;
  $('clip-position').textContent=`${index+1} / ${data.segments.length} · 拼接 ${timestamp(s.start)}—${timestamp(s.end)}`;
  for(const row of $('all-segments').children)row.classList.toggle('selected',row.dataset.segment===sid);
  $('source-page').href=s.source_page;$('atom-votes').replaceChildren();
  for(const a of s.atoms) { const vote=s.judgment.atoms.find(x=>x.atom_id===a.id);const box=node('div',undefined,'atom');box.append(node('strong',`${a.meaning} · ${vote.credit}/1`),node('p',vote.reason));if(vote.candidate_quote)box.append(node('p',`模型原文：“${vote.candidate_quote}”`,'note'));$('atom-votes').append(box); }
  for(const f of s.judgment.false_assertions) { const box=node('div',undefined,'atom');box.append(node('strong','错误或无据新增'),node('p',`“${f.quote}”：${f.reason}`));$('atom-votes').append(box); }
  if(wasInitialized){const url=new URL(location.href);url.searchParams.set('segment',sid);history.replaceState(null,'',url);}
  if(scroll)$('subtitle-preview').scrollIntoView({behavior:'smooth',block:'start'});
}
function linkClip(sid) { const a=node('a',sid,'clip-jump');a.href=`?segment=${encodeURIComponent(sid)}#subtitle-preview`;a.addEventListener('click',e=>{e.preventDefault();preview(sid,true);history.replaceState(null,'',a.href);});return a; }
function renderComparison() {
  const dialect=$('dialect-filter').value,lossOnly=$('loss-only').checked;
  const visible=data.segments.filter(s=>(dialect==='all'||s.dialect===dialect)&&(!lossOnly||s.semantic_f1<1-1e-8));
  $('all-segments').replaceChildren();
  for(const s of visible){
    const r=node('tr'),first=node('td');r.dataset.segment=s.id;r.classList.toggle('selected',s.id===currentSegment?.id);
    first.append(linkClip(s.id),node('div',s.dialect,'note'),node('div',`${timestamp(s.start)}—${timestamp(s.end)}`,'note'));
    r.append(first,node('td',s.subtitle||'[未提交字幕]'),node('td',s.reference),node('td',`${fmt(s.semantic_f1*100)}%`,`row-f1${s.semantic_f1<.5?' low':''}`));$('all-segments').append(r);
  }
  if(!visible.length){const row=node('tr'),cell=node('td','没有符合筛选条件的片段。','empty');cell.colSpan=4;row.append(cell);$('all-segments').append(row);}
  $('comparison-count').textContent=`显示 ${visible.length} / ${data.segments.length} 段`;
}
function textEvidence(s){
  const pair=node('div',undefined,'evidence-pair');
  for(const [kind,title,text]of [['model','模型提交',s.subtitle||'[未提交字幕]'],['reference','参考译文',s.reference]]){
    const box=node('div',undefined,`text-pair ${kind}-pair`),label=node('div',title,'pair-label');label.append(linkClip(s.id));box.append(label,node('div',text,'subtitle-text'));pair.append(box);
  }
  return pair;
}
async function start() {
  data=await(await fetch('files/case.json')).json();
  const count=data.segments.length, groups=Object.keys(data.semantic_by_dialect);
  $('material-tag').textContent=`${groups.length}种方言 · ${count}段 · ${elapsed(data.duration)}`;
  $('input-description').textContent=`${count}段真人短片按清单顺序拼接，共${elapsed(data.duration)}。`;
  const tr=node('tr');for(const x of [data.model,data.effort,fmt(data.score),fmt(data.semantic_score),fmt(data.organization_score),fmt(data.delivery_score),elapsed(data.elapsed_seconds)])tr.append(node('td',x,'num'));tr.children[2].classList.add('score');$('scores').append(tr);
  $('run-note').textContent=`单次完整求解，正常退出；${data.judge} / ${data.judge_effort}单轮语义评审。求解耗时包含工具、下载与API等待。`;
  if(data.audit_adjustment_count){$('run-note').append(document.createTextNode(` 主分含${data.audit_adjustment_count}处等价表述或来源歧义的向上修正，权重与公式不变。`));const bar=node('div',undefined,'toolbar');for(const [href,text]of [['files/original-score.json',`原始判票 ${fmt(data.original_score)}`],['files/equivalence-audit.json','从宽修正明细']]){const a=node('a',text);a.href=href;bar.append(a);}$('run-note').after(bar);}
  for(const [d,f1]of Object.entries(data.semantic_by_dialect)) { const r=node('tr');for(const x of [d,data.segments.filter(x=>x.dialect===d).length,`${fmt(f1*100)}%`])r.append(node('td',x));$('dialect-scores').append(r); }
  options($('input-clip'));options($('output-clip'));input(data.segments[0].id);preview(data.segments[0].id);
  for(const dialect of groups){const o=node('option',dialect);o.value=dialect;$('dialect-filter').append(o);}
  renderComparison();$('dialect-filter').addEventListener('change',renderComparison);$('loss-only').addEventListener('change',renderComparison);
  for(const [id,delta]of [['previous-clip',-1],['next-clip',1]])$(id).addEventListener('click',()=>{const index=data.segments.indexOf(currentSegment);const next=data.segments[index+delta];if(next)preview(next.id);});
  $('input-clip').addEventListener('change',e=>input(e.target.value));$('output-clip').addEventListener('change',e=>preview(e.target.value));$('caption-switch').addEventListener('change',drawCaption);
  for(const ev of ['timeupdate','seeked','loadedmetadata','emptied'])$('output-video').addEventListener(ev,drawCaption);
  let expanded=false,previousOverflow='';
  function expand(value){expanded=value;$('video-frame').classList.toggle('preview-expanded',value);$('close-expanded').hidden=!value;if(value){previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';$('close-expanded').focus();}else{document.body.style.overflow=previousOverflow;$('preview-enlarge').focus();}}
  $('preview-enlarge').addEventListener('click',()=>expand(true));$('close-expanded').addEventListener('click',()=>expand(false));document.addEventListener('keydown',e=>{if(expanded&&e.key==='Escape')expand(false);});
  $('trace-overview').textContent=data.trace_summary.overview;$('trace-tools').textContent=`${data.trace_summary.command_count}条可见终端操作。工具：${(data.trace_summary.tools||[]).map(x=>typeof x==='string'?x:x.name).join('、')}。运行结果和失败恢复见过程总结。`;
  for(const [index,step]of (data.trace_summary.steps||[]).entries()){
    const box=node('article',undefined,'card trace-step');box.append(node('div',`步骤 ${String(index+1).padStart(2,'0')}`,'step-index'),node('h3',step.title),node('p',step.text));
    const bar=node('div',undefined,'toolbar compact');for(const event of (step.events||[]).slice(0,3)){const a=node('a',`事件 #${event}`);a.href=`traces.html?view=all&event=${event}#event-${event}`;bar.append(a);}box.append(bar);$('trace-steps').append(box);
  }
  const examples=data.analysis.length?data.analysis:[{title:'逐句查看未完整保留的意思',text:'以下按语义F1从低到高列出片段；来源译文、模型原文和每项判定均可展开核对。',segments:[...data.segments].sort((a,b)=>a.semantic_f1-b.semantic_f1).slice(0,3).map(s=>s.id)}];
  for(const f of examples) { const article=node('article',undefined,'finding');article.append(node('h3',f.title),node('p',f.text));const sample=data.segments.find(s=>s.id===(f.segments||[])[0]);if(sample)article.append(textEvidence(sample));const bar=node('div',undefined,'toolbar');for(const sid of f.segments||[])bar.append(linkClip(sid));article.append(bar);$('analysis-items').append(article); }
  const initial=new URLSearchParams(location.search).get('segment');if(data.segments.some(s=>s.id===initial))preview(initial);
}
start().catch(e=>{$('run-note').textContent=`数据加载失败：${e.message}`;console.error(e);});
