
let data;const $=id=>document.getElementById(id),params=new URLSearchParams(location.search);
const selected=params.get('run'),view=params.get('view');if(['sol','astra','terra'].includes(selected))$('run').value=selected;
if(['summary','key','all'].includes(view))$('view').value=view;
let focusEvent=Number(params.get('event')||location.hash.replace('#event-',''))||null;
if(focusEvent)$('view').value='all';
function element(tag,text,className){const node=document.createElement(tag);if(text!=null)node.textContent=text;if(className)node.className=className;return node;}
function showEvent(index){focusEvent=index;$('view').value='all';$('kind').value='all';$('search').value='';draw();history.replaceState(null,'',`?run=${$('run').value}&view=all&event=${index}#event-${index}`);}
function draw(){
 if(!data)return;
 const mode=$('view').value;$('filters').hidden=mode==='summary';$('events').replaceChildren();$('overview').replaceChildren();
 if(mode==='summary'){
  const c=data.summary,box=element('div',null,'find');box.append(element('h2',c.headline),element('p',c.outcome));$('overview').append(box);
  const stages=element('ol',null,'stages');for(const stage of c.stages){const li=element('li');li.append(element('h3',stage.title),element('p',stage.text));const links=element('div',null,'stage-links');for(const index of stage.events){const a=element('a',`查看 #${index} `);a.href=`?run=${$('run').value}&view=all&event=${index}#event-${index}`;a.addEventListener('click',e=>{e.preventDefault();showEvent(index);});links.append(a);}li.append(links);stages.append(li);}
  $('overview').append(stages,element('p',c.editorial_note,'note'));return;
 }
 const q=$('search').value.toLowerCase(),kind=$('kind').value;
 const events=data.events.filter(e=>(mode!=='key'||e.key)&&(kind==='all'||e.kind===kind||(kind==='error'&&e.exit_code!=null&&e.exit_code!==0))&&JSON.stringify(e).toLowerCase().includes(q));
 $('count').textContent=`${events.length} / ${data.events.length} 条${mode==='key'?' · 人工选取关键节点':''}`;
 for(const e of events){const d=element('details',null,'event');d.id='event-'+e.index;const s=element('summary');const title=e.title.replace(/\s+/g,' ');
  s.textContent=`#${e.index} · ${e.kind}${e.exit_code!=null?' · exit='+e.exit_code:''}  ${e.key_title||title.slice(0,160)}${!e.key_title&&title.length>160?'…':''}`;d.append(s);
  if(e.key_reason)d.append(element('p',e.key_reason,'key-note'));
  d.append(element('pre',(e.kind==='command'?'[命令]\n'+e.title+'\n\n[输出]\n':'')+e.body+(e.truncated?'\n[长输出截断]':'')));
  $('events').append(d);
 }
 if(focusEvent){const target=$('event-'+focusEvent);if(target){target.open=true;target.scrollIntoView({block:'center'});}focusEvent=null;}
}
async function load(){
 $('overview').replaceChildren();$('events').replaceChildren();
 const response=await fetch('traces/'+$('run').value+'.json');if(!response.ok)throw new Error('HTTP '+response.status);data=await response.json();
 $('meta').textContent=`${data.model} · ${data.effort} · 耗时 ${(data.elapsed_sec/60).toFixed(1)} 分钟 · ${data.note}`;draw();
}
$('run').addEventListener('change',()=>{focusEvent=null;$('search').value='';$('kind').value='all';history.replaceState(null,'',`?run=${$('run').value}&view=${$('view').value}`);load().catch(error=>$('meta').textContent=error.message);});
$('view').addEventListener('change',()=>{focusEvent=null;draw();});$('kind').addEventListener('change',draw);$('search').addEventListener('input',draw);load().catch(error=>$('meta').textContent=error.message);
