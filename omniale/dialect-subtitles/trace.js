'use strict';
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
async function show(){
 const params=new URLSearchParams(location.search),catalog=await(await fetch('files/case.json?v=20261116-3')).json();
 const runs=catalog.runs,run=runs.find(r=>r.key===params.get('run'))||runs.find(r=>r.key==='sol'),key=run.key,prefix=run.asset_prefix;
 const data=await(await fetch(prefix+'files/trace.json?v=20261116-3')).json(),view=params.get('view')||'summary',content=document.getElementById('trace-content');
 const label=run.label+' · '+run.effort;document.getElementById('trace-title').textContent=label+' · 运行轨迹';document.title=label+' · 多方言字幕轨迹';
 document.getElementById('trace-model').replaceChildren(...runs.map(r=>{const o=el('option',r.label+' · '+r.effort);o.value=r.key;return o;}));
 const choice=document.getElementById('trace-model');choice.value=key;choice.addEventListener('change',e=>{location.href=`?run=${e.target.value}&view=${encodeURIComponent(view)}`;});
 document.querySelectorAll('[data-view]').forEach(a=>{a.setAttribute('aria-current',a.dataset.view===view);a.href=`?run=${key}&view=${a.dataset.view}`;});
 document.getElementById('scope').textContent=`${data.command_count}条可见${data.operation_label||'终端操作'}。保留命令与相关反馈；省略私人路径、凭据、长二进制、外部资料长文及隐藏推理。`;
 if(view==='summary'){
  content.append(el('p',data.overview));
  for(const t of data.tools||[]){const p=el('p');p.append(el('strong',typeof t==='string'?t:t.name),document.createTextNode(typeof t==='string'?'':`：${t.outcome}`));content.append(p);}
  for(const s of data.steps||[]){const box=el('article',undefined,'card');box.append(el('h3',s.title),el('p',s.text));const links=el('div',undefined,'toolbar');for(const i of s.events||[]){const a=el('a',`原事件 ${i}`);a.href=`?run=${key}&view=all&event=${i}#event-${i}`;links.append(a);}box.append(links);content.append(box);}
 }else{
  const ids=new Set((data.steps||[]).flatMap(s=>s.events||[])),events=view==='key'?data.events.filter(e=>ids.has(e.id)):data.events;
  if(!events.length)content.append(el('p','尚无关键步骤标记。','empty'));
  for(const e of events){const box=el('article',undefined,'card trace-row');box.id=`event-${e.id}`;const status=e.tool?(e.tool==='api_error'?'接口报错':e.tool==='visible_note'?'可见阶段说明':e.status==='completed'?'已返回工具反馈':e.status==='error'?'工具报错':'结果未记录'):`退出码 ${e.exit_code===null?'未记录':e.exit_code}`;box.append(el('h3',`${e.id} · ${e.title}`),el('p',status,'note'));const command=el('details');command.open=params.get('event')===String(e.id);command.append(el('summary','命令'),el('pre',e.command));box.append(command);const out=el('details');out.open=params.get('event')===String(e.id);out.append(el('summary','工具反馈'),el('pre',e.output||'[无终端输出]'));box.append(out);content.append(box);}
 }
 if(params.get('event'))requestAnimationFrame(()=>document.getElementById(`event-${params.get('event')}`)?.scrollIntoView());
}
show().catch(e=>document.getElementById('trace-content').textContent=`轨迹加载失败：${e.message}`);
