'use strict';
const $=id=>document.getElementById(id);
const node=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
const fmt=n=>Number(n).toFixed(2);
const elapsed=s=>{const t=Math.round(s);return t>=3600?`${Math.floor(t/3600)}小时${Math.floor(t%3600/60)}分${t%60}秒`:`${Math.floor(t/60)}分${String(t%60).padStart(2,'0')}秒`;};
const timestamp=s=>`${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toFixed(1).padStart(4,'0')}`;
let data,runs,currentRun,currentSegment;
const segment=(run,sid)=>run.segments.find(s=>s.id===sid);
const asset=(run,path)=>run.asset_prefix+path;
const traceURL=(run,view='summary',event)=>`traces.html?run=${run.key}&view=${view}${event===undefined?'':`&event=${event}#event-${event}`}`;
function drawCaption(){const t=$('output-video').currentTime;const texts=(currentSegment?.cues||[]).filter(c=>t>=c.start&&t<c.end).map(c=>c.text);$('subtitle-overlay').textContent=texts.join('\n');$('subtitle-overlay').hidden=!$('caption-switch').checked||!texts.length;}
function options(select){for(const s of data.segments){const o=node('option',`${s.id} · ${s.dialect}`);o.value=s.id;select.append(o);}}
function input(sid){const s=segment(data,sid);$('input-video').src=s.source_url;$('input-link').href=s.source_url;}
function preview(sid,scroll=false){
 const s=segment(currentRun,sid);$('output-clip').value=sid;
 const v=$('output-video');v.pause();v.src=s.source_url;currentSegment=s;drawCaption();$('cue-links').replaceChildren();
 for(const c of s.cues){const b=node('button',`定位字幕 ${c.id}`);b.type='button';b.addEventListener('click',()=>{v.pause();v.currentTime=c.start+.05;drawCaption();});$('cue-links').append(b);}
 $('clip-title').textContent=`${s.id} · ${s.dialect}`;$('candidate-model').textContent=currentRun.label;$('candidate-text').textContent=s.subtitle||'[未提交字幕]';
 $('clip-score').textContent=`语义F1 ${fmt(s.semantic_f1*100)}%`;$('clip-score').classList.toggle('low',s.semantic_f1<.5);
 $('reference-text').textContent=s.reference;$('source-transcript').textContent=`方言原文：${s.source_transcript}`;$('uncertainty').textContent=s.uncertainty?`模型不确定性说明：${s.uncertainty}`:'';
 const index=currentRun.segments.indexOf(s);$('previous-clip').disabled=index===0;$('next-clip').disabled=index===currentRun.segments.length-1;
 $('clip-position').textContent=`${index+1} / ${currentRun.segments.length} · 拼接 ${timestamp(s.start)}—${timestamp(s.end)}`;
 for(const row of $('all-segments').children)row.classList.toggle('selected',row.dataset.segment===sid);
 $('source-page').href=s.source_page;$('atom-votes').replaceChildren();
 for(const a of s.atoms){const vote=s.judgment.atoms.find(x=>x.atom_id===a.id);const box=node('div',undefined,'atom');box.append(node('strong',`${a.meaning} · ${vote.credit}/1`),node('p',vote.reason));if(vote.candidate_quote)box.append(node('p',`模型原文：“${vote.candidate_quote}”`,'note'));$('atom-votes').append(box);}
 for(const f of s.judgment.false_assertions){const box=node('div',undefined,'atom');box.append(node('strong','错误或无据新增'),node('p',`“${f.quote}”：${f.reason}`));$('atom-votes').append(box);}
 const url=new URL(location.href);url.searchParams.set('run',currentRun.key);url.searchParams.set('segment',sid);history.replaceState(null,'',url);
 if(scroll)$('subtitle-preview').scrollIntoView({behavior:'smooth',block:'start'});
}
function selectRun(key,sid=currentSegment?.id||data.segments[0].id,scroll=false){
 currentRun=runs.find(r=>r.key===key)||runs[0];$('output-model').value=currentRun.key;
 $('selected-delivery').textContent=`${currentRun.cue_count}条字幕 · ${elapsed(currentRun.elapsed_seconds)} · ${currentRun.provider}`;
 $('srt-download').href=asset(currentRun,'zh-CN.srt');$('delivery-receipt').href=asset(currentRun,'files/delivery-receipt.json');
 $('trace-step-title').textContent=`${currentRun.label} · 关键过程`;$('trace-overview').textContent=currentRun.trace_summary.overview;$('trace-steps').replaceChildren();
 for(const [index,step]of currentRun.trace_summary.steps.entries()){
  const box=node('article',undefined,'card trace-step');box.append(node('div',`步骤 ${String(index+1).padStart(2,'0')}`,'step-index'),node('h3',step.title),node('p',step.text));
  const bar=node('div',undefined,'toolbar compact');for(const event of step.events.slice(0,3)){const a=node('a',`事件 #${event}`);a.href=traceURL(currentRun,'all',event);bar.append(a);}box.append(bar);$('trace-steps').append(box);
 }
 preview(sid,scroll);
}
function linkClip(sid,key=currentRun.key,text=sid,cls='clip-jump'){
 const a=node('a',text,cls);a.href=`?run=${key}&segment=${encodeURIComponent(sid)}#subtitle-preview`;
 a.addEventListener('click',e=>{e.preventDefault();selectRun(key,sid,true);const url=new URL(a.href);history.replaceState(null,'',url);});return a;
}
function renderComparison(){
 const dialect=$('dialect-filter').value,lossOnly=$('loss-only').checked;
 const visible=data.segments.filter(s=>(dialect==='all'||s.dialect===dialect)&&(!lossOnly||runs.some(r=>segment(r,s.id).semantic_f1<1-1e-8)));
 $('all-segments').replaceChildren();
 for(const s of visible){
  const row=node('tr'),first=node('td');row.dataset.segment=s.id;row.classList.toggle('selected',s.id===currentSegment?.id);
  first.append(linkClip(s.id),node('div',s.dialect,'note'),node('div',`${timestamp(s.start)}—${timestamp(s.end)}`,'note'));row.append(first);
  for(const r of runs){const item=segment(r,s.id),cell=node('td');cell.append(node('div',item.subtitle||'[未提交字幕]'),linkClip(s.id,r.key,`F1 ${fmt(item.semantic_f1*100)}%`,`row-f1${item.semantic_f1<.5?' low':''}`));row.append(cell);}
  row.append(node('td',s.reference));$('all-segments').append(row);
 }
 if(!visible.length){const row=node('tr'),cell=node('td','没有符合筛选条件的片段。','empty');cell.colSpan=runs.length+2;row.append(cell);$('all-segments').append(row);}
 $('comparison-count').textContent=`显示 ${visible.length} / ${data.segments.length} 段`;
}
function textEvidence(sid,only){
 const s=segment(data,sid),pair=node('div',undefined,'evidence-pair');
 for(const r of only?(Array.isArray(only)?only:[only]):runs){const box=node('div',undefined,'text-pair model-pair'),label=node('div',r.label,'pair-label');label.append(linkClip(sid,r.key));box.append(label,node('div',segment(r,sid).subtitle||'[未提交字幕]','subtitle-text'));pair.append(box);}
 const box=node('div',undefined,'text-pair reference-pair');box.append(node('div','参考译文 · 语保','pair-label'),node('div',s.reference,'subtitle-text'));pair.append(box);return pair;
}
function showResults(){
 for(const r of runs){
  const tr=node('tr');for(const [i,x]of [r.model+(r.condition_label?' · '+r.condition_label:''),r.effort,fmt(r.score),fmt(r.semantic_score),fmt(r.organization_score),fmt(r.delivery_score),elapsed(r.elapsed_seconds)].entries())tr.append(node('td',x,i===0?'num model-name':'num'));tr.children[2].classList.add('score');$('scores').append(tr);
  const bar=node('div',undefined,'toolbar compact audit-links');bar.append(node('strong',r.label));for(const [path,label]of [['files/original-score.json',`原始判票 ${fmt(r.original_score)}`],['files/equivalence-audit.json',r.audit_adjustment_count?`${r.audit_adjustment_count}处从宽修正`:'等价表述复核'],['files/score.json','完整评分']]){const a=node('a',label);a.href=asset(r,path);bar.append(a);}$('audit-links').append(bar);
 }
 $('run-note').textContent='每种模型／感知条件各一次独立求解，统一采用Terra / high单轮评分，并按相同规则复核等价表达。原票和复核明细如下。';
 const conditions=node('details',undefined,'run-conditions');conditions.append(node('summary','运行条件与中断记录'));
 conditions.append(node('p','均正常联网、未设执行截止。耗时包含工具、下载与API等待；各接口的思考设置按实际记录展示。','note'));
 if(runs.some(r=>r.recovered_in_same_session))conditions.append(node('p','Qwen混合工具轮启用thinking，使用原生音视频输入及本地ASR。接口拒绝ASR调试标记后，在同一会话中恢复，计时包括恢复间隔。thinking不对应xhigh/max；本轮有其他后台任务驻留，较大ASR未取得有效转写，不作严格等资源对照。','note'));
 $('run-note').after(conditions);
 for(const dialect of Object.keys(data.semantic_by_dialect)){const row=node('tr');row.append(node('td',dialect),node('td',data.segments.filter(s=>s.dialect===dialect).length));for(const r of runs)row.append(node('td',`${fmt(r.semantic_by_dialect[dialect]*100)}%`));$('dialect-scores').append(row);}
}
function showTraces(){
 for(const r of runs){
  const card=node('article',undefined,'card trace-card');card.append(node('h3',`${r.label} · ${r.effort}`),node('p',r.trace_summary.overview),node('p',`${r.trace_summary.command_count}条${r.trace_summary.operation_label||'终端操作'} · ${elapsed(r.elapsed_seconds)} · ${r.cue_count}条字幕`,'note'));
  const bar=node('div',undefined,'toolbar compact');for(const [view,title]of [['summary','过程总结 →'],['key','关键步骤'],['all','全部记录']]){const a=node('a',title);a.href=traceURL(r,view);bar.append(a);}card.append(bar);$('trace-cards').append(card);
 }
}
function showAnalysis(){
 for(const f of data.common_analysis){const article=node('article',undefined,'finding');article.append(node('h3',f.title),node('p',f.text),textEvidence(f.segments[0],f.run_keys?runs.filter(r=>f.run_keys.includes(r.key)):undefined));const bar=node('div',undefined,'toolbar compact');for(const sid of f.segments)bar.append(linkClip(sid));for(const item of f.evidence_events||[]){const a=node('a',`过程记录 #${item.event}`);a.href=traceURL(runs.find(r=>r.key===item.run),'all',item.event);bar.append(a);}article.append(bar);$('analysis-items').append(article);}
 for(const r of runs){const details=node('details',undefined,'card model-detail');details.append(node('summary',`${r.label} · 具体失败与交付`));for(const f of r.analysis){const article=node('article');article.append(node('h3',f.title),node('p',f.text));const bar=node('div',undefined,'toolbar compact');for(const sid of f.segments||[])bar.append(linkClip(sid,r.key));article.append(bar);details.append(article);}$('model-analyses').append(details);}
}
function showFiles(){
 for(const r of runs){const group=node('div',undefined,'run-file-group');group.append(node('strong',`${r.label} · ${r.effort}`));const links=node('div',undefined,'file-links');for(const [path,title]of [['files/subtitle-delivery.zip','字幕、映射与校验包'],['zh-CN.srt','SRT字幕'],['files/score.json','完整评分'],['files/technical.json','技术验收'],['files/trace.json','轨迹数据']]){const a=node('a',title);a.href=asset(r,path);links.append(a);}if(r.key==='qwen-native'){const a=node('a','原生轮补充规则');a.href=asset(r,'files/RUN_CONDITION.txt');links.append(a);}group.append(links);$('run-files').append(group);}
}
async function start(){
 data=await(await fetch('files/case.json?v=20261116-3')).json();runs=data.runs;document.body.classList.toggle('three-models',runs.length>=3);document.body.classList.toggle('four-conditions',runs.length===4);const params=new URLSearchParams(location.search);currentRun=runs.find(r=>r.key===params.get('run'))||runs[0];
 for(const r of runs){$('comparison-head').append(node('th',`${r.label} · ${r.effort}`));$('dialect-head').append(node('th',`${r.label}语义F1`));}
 $('comparison-head').append(node('th','参考译文（语保）'));
 $('result-summary').textContent=runs.map(r=>`${r.label}交付${r.cue_count}条字幕`).join('，')+'；各模型的技术验收见下方记录。';
 if(runs.some(r=>r.key==='qwen')){
  $('runtime-settings').textContent='Windows原生环境；Sol / xhigh / NJU Link、DeepSeek / max / DashScope使用Codex CLI；Qwen3.8-Omni / thinking启用 / DashScope使用Qwen Code。独立目录与会话，正常联网、CPU本地工具环境，不设执行预算。';
  $('trace-intro').textContent='Sol与DeepSeek调用本地ASR完成字幕；Qwen Code可直接将原片或音轨传入Qwen3.8-Omni，也可自行使用本地工具。各展示一次完整求解，轨迹保留实际工具选择。';
  $('perception-note').textContent='这是各Agent及其工具链的端到端结果。Qwen具有原生音视频输入，Sol与DeepSeek通过本地感知工具读取声音；不能将三者写成同一种感知条件。轨迹不包含隐藏推理。';
 }
 if(runs.some(r=>r.key==='qwen-native')){
  $('runtime-settings').textContent+=' Qwen另测原生音视频轮：只允许普通媒体处理，不调用其他ASR或感知模型。';
  $('trace-intro').textContent='Qwen分为原生音视频、原生＋本地ASR两种独立运行。Sol与DeepSeek使用本地ASR；各模型与条件都只展示一次求解，轨迹保留实际工具选择。';
  $('perception-note').textContent='Qwen原生轮只用本模型读取音视频，普通媒体处理允许，未调用其他ASR；混合工具轮可使用本地ASR。两轮为独立会话，相同素材与评分，仍有单次求解和单轮裁判的波动。';
 }
 $('material-tag').textContent=`${Object.keys(data.semantic_by_dialect).length}种方言 · ${data.segments.length}段 · ${elapsed(data.duration)}`;
 $('input-description').textContent=`${data.segments.length}段真人短片按清单顺序拼接，共${elapsed(data.duration)}。`;
 showResults();showTraces();showAnalysis();showFiles();
 for(const r of runs){const o=node('option',`${r.label} · ${r.effort}`);o.value=r.key;$('output-model').append(o);}
 options($('input-clip'));options($('output-clip'));input(data.segments[0].id);
 for(const dialect of Object.keys(data.semantic_by_dialect)){const o=node('option',dialect);o.value=dialect;$('dialect-filter').append(o);}
 const initial=params.get('segment');selectRun(currentRun.key,data.segments.some(s=>s.id===initial)?initial:data.segments[0].id);renderComparison();
 $('output-model').addEventListener('change',e=>selectRun(e.target.value));$('dialect-filter').addEventListener('change',renderComparison);$('loss-only').addEventListener('change',renderComparison);
 for(const [id,delta]of [['previous-clip',-1],['next-clip',1]])$(id).addEventListener('click',()=>{const i=currentRun.segments.indexOf(currentSegment);if(currentRun.segments[i+delta])preview(currentRun.segments[i+delta].id);});
 $('input-clip').addEventListener('change',e=>input(e.target.value));$('output-clip').addEventListener('change',e=>preview(e.target.value));$('caption-switch').addEventListener('change',drawCaption);
 for(const ev of ['timeupdate','seeked','loadedmetadata','emptied'])$('output-video').addEventListener(ev,drawCaption);
 let expanded=false,previousOverflow='';
 function expand(value){expanded=value;$('video-frame').classList.toggle('preview-expanded',value);$('close-expanded').hidden=!value;if(value){previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';$('close-expanded').focus();}else{document.body.style.overflow=previousOverflow;$('preview-enlarge').focus();}}
 $('preview-enlarge').addEventListener('click',()=>expand(true));$('close-expanded').addEventListener('click',()=>expand(false));document.addEventListener('keydown',e=>{if(expanded&&e.key==='Escape')expand(false);});
}
start().catch(e=>{$('run-note').textContent=`数据加载失败：${e.message}`;console.error(e);});
