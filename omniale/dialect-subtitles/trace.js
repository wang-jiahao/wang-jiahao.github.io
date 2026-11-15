'use strict';
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
async function show(){
 const params=new URLSearchParams(location.search),key=params.get('run')==='deepseek'?'deepseek':'sol',prefix=key==='sol'?'':'runs/deepseek/';
 const data=await(await fetch(prefix+'files/trace.json?v=20261116-1')).json(),view=params.get('view')||'summary',content=document.getElementById('trace-content');
 const label=key==='sol'?'Sol · xhigh':'DeepSeek V4.1 Flash · max';document.getElementById('trace-title').textContent=label+' · 运行轨迹';document.title=label+' · 多方言字幕轨迹';
 const choice=document.getElementById('trace-model');choice.value=key;choice.addEventListener('change',e=>{location.href=`?run=${e.target.value}&view=${encodeURIComponent(view)}`;});
 document.querySelectorAll('[data-view]').forEach(a=>{a.setAttribute('aria-current',a.dataset.view===view);a.href=`?run=${key}&view=${a.dataset.view}`;});
 document.getElementById('scope').textContent=`${data.command_count}条可见终端操作。保留命令与相关反馈；省略私人路径、凭据、长二进制、外部资料长文及隐藏推理。`;
 if(view==='summary'){
  content.append(el('p',data.overview));
  for(const t of data.tools||[]){const p=el('p');p.append(el('strong',typeof t==='string'?t:t.name),document.createTextNode(typeof t==='string'?'':`：${t.outcome}`));content.append(p);}
  for(const s of data.steps||[]){const box=el('article',undefined,'card');box.append(el('h3',s.title),el('p',s.text));const links=el('div',undefined,'toolbar');for(const i of s.events||[]){const a=el('a',`原事件 ${i}`);a.href=`?run=${key}&view=all&event=${i}#event-${i}`;links.append(a);}box.append(links);content.append(box);}
 }else{
  const ids=new Set((data.steps||[]).flatMap(s=>s.events||[])),events=view==='key'?data.events.filter(e=>ids.has(e.id)):data.events;
  if(!events.length)content.append(el('p','尚无关键步骤标记。','empty'));
  for(const e of events){const box=el('article',undefined,'card trace-row');box.id=`event-${e.id}`;box.append(el('h3',`${e.id} · ${e.title}`),el('p',`退出码 ${e.exit_code===null?'未记录':e.exit_code}`,'note'));const command=el('details');command.open=params.get('event')===String(e.id);command.append(el('summary','命令'),el('pre',e.command));box.append(command);const out=el('details');out.open=params.get('event')===String(e.id);out.append(el('summary','工具反馈'),el('pre',e.output||'[无终端输出]'));box.append(out);content.append(box);}
 }
 if(params.get('event'))requestAnimationFrame(()=>document.getElementById(`event-${params.get('event')}`)?.scrollIntoView());
}
show().catch(e=>document.getElementById('trace-content').textContent=`轨迹加载失败：${e.message}`);
