'use strict';
const DATA=JSON.parse(document.getElementById('case-data').textContent);
const $=id=>document.getElementById(id);
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
const staticHTML=(id,html)=>{$(id).innerHTML=html;};
const fmt=t=>`${String(Math.floor(t/60)).padStart(2,'0')}:${String(Math.floor(t%60)).padStart(2,'0')}`;
const labels={decisions:'最终决定',actions:'待办工作',open_questions:'未决问题',previous_item_updates:'旧纪要更新'};
const weights=[['最终决定',35],['待办工作 / 归属 / 期限',30],['未决问题',15],['旧纪要关系',10],['可回查证据',5],['两份交付可用性',5]];
const mode='natural';
let traceView='summary',outputView='decisions';


function link(label,url){const a=el('a',label);a.href=url;if(/^https?:/.test(url)){a.target='_blank';a.rel='noopener noreferrer';}return a;}

function seek(t){const v=$('meeting-video');const go=()=>{v.currentTime=Math.max(0,Math.min(t,DATA[mode].duration-.05));v.play().catch(()=>{});};if(v.readyState>=1)go();else v.addEventListener('loadedmetadata',go,{once:true});v.scrollIntoView({block:'center',behavior:'smooth'});}

function jumpButton(t,label){const b=el('button',label||fmt(t),'time-button');b.type='button';b.addEventListener('click',()=>seek(t));return b;}

function card(title,text){const a=el('article',undefined,'plain-card');a.append(el('h3',title),el('p',text));return a;}

function bulletCard(title,items){const a=el('article',undefined,'plain-card');a.append(el('h3',title));const ul=el('ul');items.forEach(s=>ul.append(el('li',s)));a.append(ul);return a;}

function table(headers,rows){const wrap=el('div',undefined,'table-scroll'),t=el('table'),head=el('thead'),tr=el('tr');headers.forEach(s=>tr.append(el('th',s)));head.append(tr);t.append(head);const body=el('tbody');rows.forEach(row=>{const line=el('tr');row.forEach(value=>{const cell=el('td');if(value instanceof Node)cell.append(value);else cell.textContent=value;line.append(cell);});body.append(line);});t.append(body);wrap.append(t);return wrap;}

function renderOutput(){
  $('output-tabs').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.output===outputView)));
  const pred=DATA[mode].prediction,evidence=Object.fromEntries(pred.evidence.map(e=>[e.id,e]));$('output-rows').replaceChildren();
  pred[outputView].forEach(row=>{const n=el('article',undefined,'output-row');n.append(el('h4',`${row.id} · ${Array.isArray(row.row_id)?row.row_id.join(' / '):row.row_id||''}`),el('p',row.content));if(row.owner)n.append(el('p',`实际执行人：${row.owner.join('、')||'未明确'}　｜　期限：${row.due||'未承诺'}`,'owner'));if(row.condition)n.append(el('p','条件：'+row.condition,'note'));const buttons=el('div',undefined,'evidence-links');(row.evidence||[]).map(id=>evidence[id]).filter(e=>e&&e.end>e.start&&/\.(mp4|wav)$/i.test(e.media)).slice(0,5).forEach(e=>{const b=jumpButton(e.start,`${fmt(e.start)} · ${e.speaker||'声画'}`);b.title=e.quote;buttons.append(b);});n.append(buttons);$('output-rows').append(n);});
}

function drawTrace(){
  document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===traceView)));
  $('trace-summary').hidden=traceView!=='summary';$('trace-controls').hidden=traceView==='summary';$('trace-events').replaceChildren();if(traceView==='summary')return;
  const term=$('trace-search').value.toLowerCase(),kind=$('trace-kind').value;const events=(DATA[mode].events||[]).filter(e=>(traceView!=='key'||e.key_title)&&(kind==='all'||e.kind===kind)&&(!term||JSON.stringify(e).toLowerCase().includes(term)));
  $('trace-count').textContent=`${events.length} 条 / 全部 ${(DATA[mode].events||[]).length} 条`;
  events.forEach(e=>{const d=el('details',undefined,'trace-event');d.id='event-'+e.id;d.append(el('summary',`${e.id} · ${e.kind==='command'?'命令':'回复'}${e.exit_code!==undefined?' · exit '+e.exit_code:''} · ${e.key_title||e.title.replace(/\s+/g,' ').slice(0,88)}`));if(e.key_reason)d.append(el('p',e.key_reason));d.append(el('pre',(e.kind==='command'?'[命令]\n'+e.title+'\n\n[输出]\n':'')+e.body));$('trace-events').append(d);});
}

function finding(label,title,body,event){const n=el('article',undefined,'finding');n.append(el('div',label,'finding-label'),el('h3',title));body.forEach(t=>n.append(el('p',t)));if(event){const b=el('button','回查实际步骤 '+event+' →','trace-link');b.dataset.event=event;n.append(b);}return n;}

function renderNaturalInputs(){
  const d=DATA.natural,box=el('div',undefined,'two-cols');
  box.append(bulletCard('实际给agent的输入',['17分53秒连续原声录像与同轨单声道WAV，原有重叠不改写。','4人同场近景头像与干净原声参考，不按职务推断责任。','477段实际机器ASR，有时间、无人工身份标签、无人为修正。','同组上次真实会议的状态摘录、议程、任务说明和输出schema。']),bulletCard('这轮真正检查什么',['日期修正要连同“目标／截止／待确认”的性质一起记。','全局与局部搜索、当前已打开的会议、启动GUI副本各有不同范围。','发请求的人、接任务的人和文件接收者不能混为一人。','未知文件类型、低清屏幕细节和没有接受的XML转换都不设为硬要求。']));
  $('inputs-panel').replaceChildren(box);
  const people=el('div',undefined,'people');d.participants.forEach(p=>{const n=el('div',undefined,'person'),img=el('img');img.src=p.portrait;img.alt='参会者'+p.id+'的同场近景';const info=el('div');info.append(el('b','参会者 '+p.id),el('small',p.role));const audio=el('audio');audio.controls=true;audio.preload='none';audio.src=p.voice_reference;audio.setAttribute('aria-label','参会者'+p.id+'原声参考');info.append(audio);n.append(img,info);people.append(n);});$('inputs-panel').append(people);
  $('rubric').replaceChildren();weights.forEach(([name,w])=>{const row=el('div',undefined,'rubric-row'),bar=el('div',undefined,'bar'),fill=el('i');fill.style.width=w+'%';bar.append(fill);row.append(el('span',name),bar,el('b',String(w)));$('rubric').append(row);});
  $('gold-table').replaceChildren(table(['事项','验收依据','实际owner'],d.gold.items.map(i=>[i.key+' · '+labels[i.category],i.criteria.join('；'),(i.owner||[]).join('、')||'—'])));
}

function renderNaturalResults(){
  const d=DATA.natural;$('result-panel').replaceChildren();$('output-panel').replaceChildren();
  if(!d.score){const p=el('div',undefined,'pending-result');p.append(el('h3','实际求解与判分进行中'),el('p',d.status_note));$('result-panel').append(p);return;}
  const area=el('div',undefined,'scores natural-scores'),total=el('div',undefined,'score-card');total.append(el('div','gpt-6.1-sol · xhigh','model'));const score=el('div',Number(d.primary_score.toFixed(3)).toString(),'score-big');score.append(el('span','/ 100'));total.append(score,el('p','原始三次判分：'+d.repeats.scores.map(x=>Number(x.toFixed(3))).join(' / ')),el('p',d.score.audit_status||'开发成绩 · 判分极差'+Number(d.repeats.range.toFixed(3)),'note'));
  const detail=el('div',undefined,'plain-card'),grid=el('div',undefined,'metric-grid');Object.entries(d.score.components).forEach(([key,c])=>{const m=el('div',undefined,'metric');m.append(el('small',labels[key]||({evidence:'可回查证据',delivery:'交付可用性'}[key])),el('b',`${Number(c.points.toFixed(3))} / ${c.weight}`));grid.append(m);});detail.append(grid,el('p',`实际求解${fmt(Math.round(d.manifest.elapsed_seconds))}，exit ${d.manifest.exit_code}。一次求解与三次裁判重复分别记录；独立人类最终金标确认尚未完成。`,'note'));area.append(total,detail);$('result-panel').append(area);
  const settings=el('details',undefined,'panel');settings.append(el('summary','实验设置与评分记录'),table(['配置项','本轮实际设置'],[['模型 / effort',d.manifest.actual_model+' / '+d.manifest.actual_effort],['运行方式','真实Codex CLI；允许Python、ffmpeg、ASR、声音分析和图片查看'],['网络','允许联网；API直连，依赖下载保留正常代理'],['输入 / 评分版本','natural_pilot / '+d.repeats.rubric_version],['语义裁判','gpt-6.1-terra / high，重复3次后逐项审查'],['真值来源','原录音、AMI人工转写与官方身份映射；开发任务真值'],['公开ASR','faster-whisper small.en；无身份标签、无人工修正'],['范围','只总结给定连续片段，接受合理额外事项与合并/拆分']]));settings.append(link('三次原始判分','files/natural-judge-repeats.json'));$('result-panel').append(settings);
  staticHTML('output-panel','<h3 style="margin-top:24px">实际交付：按事项查看</h3><p class="note">内容直接取自Sol提交；证据按钮跳回本题原声。</p><div class="view-tabs" id="output-tabs" role="group" aria-label="交付类别"></div><div class="panel" id="output-rows"></div><p class="note"><a href="files/natural-sol-minutes.json">完整 minutes.json</a> · <a href="files/natural-sol-minutes.txt">完整团队纪要</a></p>');
  Object.entries(labels).forEach(([key,label])=>{const b=el('button',label);b.dataset.output=key;b.setAttribute('aria-pressed',String(key===outputView));b.addEventListener('click',()=>{outputView=key;renderOutput();});$('output-tabs').append(b);});renderOutput();
}

function renderNaturalTrajectory(){
  const d=DATA.natural,ready=Boolean(d.events);$('trace-panel').hidden=!ready;$('trajectory-empty').hidden=ready;
  if(!ready){$('trajectory-empty').replaceChildren(card('等待完成后整理轨迹','真实求解已启动，完成后将按过程总结、关键步骤和全部记录整理；不将作者构造过程冒充agent轨迹。'));return;}
  const cards=el('div',undefined,'three-cards');(d.trajectory_summary||[]).forEach((s,i)=>{const a=card(s.title,s.body);a.prepend(el('span','阶段 '+(i+1),'step-no'));if(s.event){const b=el('button','回查 '+s.event+' →','trace-link');b.dataset.event=s.event;a.append(b);}cards.append(a);});
  $('trace-summary').replaceChildren(cards,el('p',d.trajectory_note||'以下保留全部可见工具命令、输出和模型回复；不含隐藏推理，本机绝对路径已脱敏。','note'));drawTrace();
  const figure=el('details',undefined,'panel');figure.append(el('summary','查看agent实际制作的原会画面索引'));const img=el('img');img.src='media/natural-agent-contact.jpg';img.alt='Sol运行中抽帧制作的自然会议画面索引';img.style.maxWidth='100%';figure.append(img);$('trace-summary').append(figure);
}

function focusEvent(id){traceView='all';$('trace-search').value='';$('trace-kind').value='all';drawTrace();const n=$('event-'+id);if(n){n.open=true;n.classList.add('focused');n.scrollIntoView({block:'center',behavior:'smooth'});history.replaceState(null,'',location.pathname+'#event-'+id);}}
function renderTranscript(){
 const term=$('transcript-search').value.toLowerCase();$('transcript').replaceChildren();
 DATA.natural.turns.filter(t=>!term||JSON.stringify(t).toLowerCase().includes(term)).forEach(t=>{const row=el('div',undefined,'turn'),text=el('div');text.append(el('p',t.speaker+' · '+t.text),el('small',`原会 ${fmt(t.source_start)}–${fmt(t.source_end)}`));row.append(jumpButton(t.start),text);$('transcript').append(row);});
}
function renderPage(){
 const d=DATA.natural;$('meeting-video').src=d.video;$('meeting-video').poster=d.poster;
 $('version-note').replaceChildren(el('strong',d.badge+'。'),document.createTextNode(d.status_note));
 $('meta-chips').replaceChildren(...[d.kind,d.language,d.people,fmt(d.duration)+' 连续素材'].map(s=>el('span',s,'chip')));
 $('media-source').textContent=d.source;$('media-note').textContent=d.source_note;
 $('time-readout').textContent=`00:00 / ${fmt(d.duration)} · 原会 ${fmt(d.source_offset)}`;
 $('bookmarks').replaceChildren();d.marks.forEach(m=>{const b=el('button',undefined,'bookmark');b.type='button';b.append(el('span',fmt(m.start),'time'),el('strong',m.title),el('small',m.note));b.addEventListener('click',()=>seek(m.start));$('bookmarks').append(b);});
 const links=el('div',undefined,'link-stack');links.append(link('冻结公开题包 ZIP','files/natural-task.zip'),link('给agent的完整任务说明','files/natural-task.txt'),link('同轨WAV原声','media/natural.wav'),link('带时间无身份的机器ASR','files/natural-rough-asr.json'),link('真实前轮状态摘录','files/natural-previous-minutes.txt'),link('AMI官方自然会议说明',d.source_url),link('本题连续MP4','media/natural.mp4'),link('来源与许可','files/natural-sources.txt'));$('source-links').replaceChildren(links);
 $('gold-details').querySelector('summary').textContent=`查看${d.gold.items.length}项开发真值与验收依据`;
 $('transcript-title').textContent='查看来源人工转写（作者审片用）';
 $('transcript-note').textContent='下列英文是AMI官方人工转写，只供作者审阅和回查，没有给被测agent。被测输入为无身份的机器ASR。播放器0秒对应原会'+fmt(d.source_offset)+'。';
 $('rubric-note').textContent='本版冻结权重。Terra逐项匹配，代码汇总；接受合理合并/拆分和跨栏目辅助事实，不要求重复相同措辞。owner不重复扣工作本体分。';
 $('analysis-heading').textContent='失败分析与发现';renderNaturalInputs();renderNaturalResults();renderNaturalTrajectory();renderTranscript();
 $('analysis-panel').replaceChildren();d.findings.forEach(f=>$('analysis-panel').append(finding(f.label,f.title,f.body,f.event)));
 if(location.search)history.replaceState(null,'',location.pathname+location.hash);
}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{traceView=b.dataset.view;drawTrace();}));
$('transcript-search').addEventListener('input',renderTranscript);$('trace-search').addEventListener('input',drawTrace);$('trace-kind').addEventListener('change',drawTrace);
document.addEventListener('click',e=>{const b=e.target.closest('[data-event]');if(b)focusEvent(b.dataset.event);});
$('meeting-video').addEventListener('timeupdate',()=>{const t=$('meeting-video').currentTime,d=DATA.natural;$('time-readout').textContent=`${fmt(t)} / ${fmt(d.duration)} · 原会 ${fmt(t+d.source_offset)}`;});
renderPage();if(location.hash.startsWith('#event-'))focusEvent(location.hash.slice(7));
