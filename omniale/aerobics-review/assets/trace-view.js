(async()=>{
 const root=document.getElementById('trace-records'),counter=document.getElementById('trace-count');
 const model=document.body.dataset.traceModel||'sol';
 const data=await fetch('traces/'+model+'/trace-visible.json').then(r=>{if(!r.ok)throw Error('轨迹读取失败');return r.json()});
 const summary=await fetch(model==='sol'?'traces/summary.json':'traces/'+model+'/summary.json').then(r=>r.json());
 const time=s=>s==null?'':`${String(Math.floor(s/60)).padStart(2,'0')}:${String(Math.floor(s%60)).padStart(2,'0')}`;
 const text=(tag,value,cls)=>{const e=document.createElement(tag);e.textContent=value;if(cls)e.className=cls;return e};
 const views={summary:document.getElementById('trace-summary'),steps:document.getElementById('trace-steps'),all:document.getElementById('trace-all')};
 const intro=views.summary;intro.replaceChildren();
 summary.paragraphs.forEach(p=>intro.append(text('p',p)));
 const stats=document.createElement('div');stats.className='trace-summary';
 [['工具调用组',data.counts.tool_call_groups],['查看图像',data.counts.view_image_calls],['可见回复',data.counts.visible_replies]].forEach(([label,value])=>{const box=document.createElement('article');box.className='card';box.append(text('div',String(value),'trace-stat'),text('div',label,'note'));stats.append(box)});intro.append(stats);
 summary.steps.forEach(step=>{const box=document.createElement('article');box.className='trace-step';box.append(text('div',time(step.elapsed_s),'time'),text('h3',step.title),text('p',step.description));const a=document.createElement('a');a.href='?event='+step.event_id;a.textContent='定位原始工具记录 →';box.append(a);views.steps.append(box)});
 root.replaceChildren();
 data.records.forEach(record=>{
  const box=document.createElement(record.type==='message'?'article':'details');box.className='trace-record '+(record.type==='message'?'message':'');box.id=record.id;box.dataset.kind=record.type;box.dataset.search=(record.title+' '+(record.text||'')+' '+(record.input||'')+' '+(record.output||'')).toLowerCase();
  if(record.type==='message'){box.append(text('div',time(record.elapsed_s)+' · 模型可见回复','note'),text('div',record.text,'trace-reply'))}
  else{const heading=document.createElement('summary');heading.append(text('span',time(record.elapsed_s),'time'),text('span',record.title),text('span',record.id,'pill'));if(record.nonzero_exit)heading.append(text('span','含非零退出','badge warn'));box.append(heading);let filled=false;box.addEventListener('toggle',()=>{if(!box.open||filled)return;filled=true;box.append(text('h3','调用代码'),text('pre',record.input),text('h3','返回文本'),text('pre',record.output||'本条工具未返回文本。'));if(record.images?.length){const grid=document.createElement('div');grid.className='trace-images';record.images.forEach(p=>{const f=document.createElement('figure'),a=document.createElement('a'),im=document.createElement('img');a.href='traces/'+model+'/'+p.url;a.target='_blank';a.rel='noopener';im.src=a.href;im.alt=p.name;im.loading='lazy';a.append(im);f.append(a,text('figcaption',p.name));grid.append(f)});box.append(grid)}})}root.append(box)
 });
 const search=document.getElementById('trace-search'),kind=document.getElementById('trace-kind');
 function filter(){let count=0;root.querySelectorAll('.trace-record').forEach(box=>{box.hidden=!box.dataset.search.includes(search.value.toLowerCase())||(kind.value!=='all'&&box.dataset.kind!==kind.value);if(!box.hidden)count++});counter.textContent=`显示 ${count} / ${data.records.length} 条可见记录`}
 search.addEventListener('input',filter);kind.addEventListener('change',filter);filter();
 function show(name){document.querySelectorAll('[data-trace-tab]').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.traceTab===name)));Object.entries(views).forEach(([key,v])=>v.hidden=key!==name)}
 document.querySelectorAll('[data-trace-tab]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.traceTab)));
 document.getElementById('expand-records').addEventListener('click',()=>root.querySelectorAll('details:not([hidden])').forEach(d=>d.open=true));document.getElementById('collapse-records').addEventListener('click',()=>root.querySelectorAll('details').forEach(d=>d.open=false));
 const params=new URLSearchParams(location.search),event=params.get('event');if(event){show('all');const target=document.getElementById(event);if(target){target.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start'}))}}else show(params.get('view') in views?params.get('view'):'summary');
})().catch(error=>{document.getElementById('trace-records').textContent=error.message;document.getElementById('trace-all').hidden=false});
