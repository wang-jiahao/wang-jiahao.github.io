const STORAGE_KEY='omniale_music2mv_audit_verdicts_v1';
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));
const stamp=s=>{
  const t=Math.round(Math.max(0,Number(s)||0)*100);
  const m=Math.floor(t/6000);
  const sec=((t%6000)/100).toFixed(2).padStart(5,'0');
  return `${m}:${sec}`;
};

let verdicts={};
let activeGroup='all';
let modalSource=null;
let modalFps=24;

function loadVerdicts(){
  try{verdicts=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')||{};}
  catch(_){verdicts={};}
}
function saveVerdicts(){
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(verdicts));}catch(_){}
}

function syncCardVerdict(card){
  const id=card.dataset.id;
  const entry=verdicts[id]||{};
  const v=entry.verdict||'';
  card.dataset.verdict=v;
  card.classList.toggle('is-accept',v==='accept');
  card.classList.toggle('is-reject',v==='reject');
  card.classList.toggle('is-unsure',v==='unsure');
  card.querySelectorAll('.ar-vbtn').forEach(btn=>{
    const on=btn.dataset.verdict===v;
    btn.classList.toggle('active',on);
    btn.setAttribute('aria-pressed',on?'true':'false');
  });
  const input=card.querySelector('.ar-note-input');
  if(input&&document.activeElement!==input)input.value=entry.note||'';
}

function updateStats(){
  const cards=$$('.mv-review-card');
  let ok=0,no=0,maybe=0;
  cards.forEach(c=>{
    const v=c.dataset.verdict;
    if(v==='accept')ok++;
    else if(v==='reject')no++;
    else if(v==='unsure')maybe++;
  });
  const done=ok+no+maybe;
  $('#ar-done-count').textContent=`${done} / ${cards.length}`;
  $('#ar-ok-count').textContent=String(ok);
  $('#ar-no-count').textContent=String(no);
  $('#ar-maybe-count').textContent=String(maybe);
}

function applyFilters(){
  const movie=$('#ar-movie-filter').value;
  const status=$('#ar-status-filter').value;
  let visibleCards=0;
  $$('.ar-group-block').forEach(group=>{
    const gKey=group.dataset.group;
    let groupVisible=0;
    group.querySelectorAll('.mv-review-card').forEach(card=>{
      const matchGroup=activeGroup==='all'||gKey===activeGroup;
      const matchMovie=movie==='all'||card.dataset.source===movie;
      const v=card.dataset.verdict||'';
      const matchStatus=status==='all'||(status==='pending'?v==='':v===status);
      const show=matchGroup&&matchMovie&&matchStatus;
      card.hidden=!show;
      if(show){groupVisible++;visibleCards++;}
      else{const vid=card.querySelector('video');if(vid)vid.pause();}
    });
    group.hidden=groupVisible===0;
  });
  $('#ar-empty').hidden=visibleCards>0;
}

function setupCards(){
  $$('.mv-review-card').forEach(card=>{
    const p=card.querySelector('video');
    const clips=card.querySelector('.mv-review-clip');
    const speed=card.querySelector('.mv-review-speed');
    const clock=card.querySelector('.mv-review-clock');
    const update=()=>{
      const off=Number(p.dataset.offset)||0;
      clock.textContent=`原片时间 ${stamp(off+p.currentTime)} · 片段时间 ${stamp(p.currentTime)}`;
    };
    p.addEventListener('timeupdate',update);
    p.addEventListener('loadedmetadata',update);
    const seek=t=>{
      p.pause();
      const apply=()=>{
        const dur=Number.isFinite(p.duration)?p.duration:t;
        p.currentTime=Math.max(0,Math.min(dur,t));
        update();
      };
      if(p.readyState>=1)apply();
      else{p.addEventListener('loadedmetadata',apply,{once:true});p.load();}
    };
    clips.onchange=()=>{
      p.pause();
      const o=clips.selectedOptions[0];
      p.dataset.offset=o.dataset.offset;
      p.dataset.focus=o.dataset.focus;
      p.dataset.fps=o.dataset.fps;
      p.src=o.value;
      p.load();
      p.playbackRate=Number(speed.value);
      clock.textContent=`片段从原片 ${stamp(Number(o.dataset.offset))} 开始，含前后文。`;
    };
    speed.onchange=()=>{p.playbackRate=Number(speed.value);};
    card.querySelectorAll('[data-review-action]').forEach(btn=>{
      btn.onclick=()=>{
        const action=btn.dataset.reviewAction;
        const fps=Number(p.dataset.fps)||24;
        if(action==='focus')seek(Number(p.dataset.focus)||0);
        else seek(p.currentTime+(action==='next'?1:-1)/fps);
      };
    });
    // Verdict controls
    const id=card.dataset.id;
    card.querySelectorAll('.ar-vbtn').forEach(btn=>{
      btn.onclick=()=>{
        const cur=verdicts[id]||{};
        const next=cur.verdict===btn.dataset.verdict?'':btn.dataset.verdict;
        verdicts[id]={...cur,verdict:next,updated_at:new Date().toISOString()};
        if(!verdicts[id].verdict&&!verdicts[id].note)delete verdicts[id];
        saveVerdicts();
        syncCardVerdict(card);
        updateStats();
        applyFilters();
      };
    });
    const noteInput=card.querySelector('.ar-note-input');
    noteInput.addEventListener('input',()=>{
      const cur=verdicts[id]||{};
      const note=noteInput.value.trim();
      verdicts[id]={...cur,note,updated_at:new Date().toISOString()};
      if(!verdicts[id].verdict&&!verdicts[id].note)delete verdicts[id];
      saveVerdicts();
    });
    syncCardVerdict(card);
  });
}

function setupModal(){
  const backdrop=$('#ar-full-modal');
  const video=$('#ar-full-video');
  const title=$('#ar-full-title');
  const clock=$('#ar-full-clock');
  const speed=$('#ar-full-speed');
  const updateClock=()=>{clock.textContent=`当前原片位置 ${stamp(video.currentTime)}`;};
  video.addEventListener('timeupdate',updateClock);
  video.addEventListener('loadedmetadata',updateClock);

  window.openFullMovie=(sid,time,label)=>{
    $$('video,audio').forEach(el=>el.pause());
    const src=sid==='mv_uptown'?'../media/v8/mv_uptown.mp4':'../media/v8/mv_lazy.mp4';
    modalFps=sid==='mv_uptown'?24:30;
    title.textContent=`${sid==='mv_uptown'?'Uptown Funk':'Lazy Song'} 完整原片 · ${label||stamp(time)}`;
    backdrop.hidden=false;
    const target=Math.max(0,Number(time)||0);
    const apply=()=>{video.currentTime=target;video.playbackRate=Number(speed.value);updateClock();};
    if(modalSource!==src){
      modalSource=src;
      video.src=src;
      video.addEventListener('loadedmetadata',apply,{once:true});
      video.load();
    }else if(video.readyState>=1){
      apply();
    }else{
      video.addEventListener('loadedmetadata',apply,{once:true});
      video.load();
    }
  };
  const close=()=>{video.pause();backdrop.hidden=true;};
  $('#ar-full-close').onclick=close;
  backdrop.addEventListener('click',e=>{if(e.target===backdrop)close();});
  speed.onchange=()=>{video.playbackRate=Number(speed.value);};
  $('#ar-full-back').onclick=()=>{video.pause();video.currentTime=Math.max(0,video.currentTime-1/modalFps);updateClock();};
  $('#ar-full-next').onclick=()=>{video.pause();video.currentTime=video.currentTime+1/modalFps;updateClock();};
  $('#ar-full-back1').onclick=()=>{video.currentTime=Math.max(0,video.currentTime-1);updateClock();};
  $('#ar-full-fwd1').onclick=()=>{video.currentTime=video.currentTime+1;updateClock();};
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();$('#ar-export-modal').hidden=true;}});
}

function buildSummaryMarkdown(){
  const labels={accept:'属实（纳入）',reject:'不算问题（排除）',unsure:'待定'};
  const lines=['# Music2MV 人工核对结果',`生成时间：${new Date().toLocaleString('zh-CN')}`,''];
  let count=0;
  ['accept','reject','unsure'].forEach(key=>{
    const items=$$('.mv-review-card').filter(c=>c.dataset.verdict===key);
    if(!items.length)return;
    lines.push(`## ${labels[key]}（${items.length} 项）`);
    items.forEach(c=>{
      count++;
      const id=c.dataset.id;
      const mv=c.dataset.source==='mv_uptown'?'Uptown Funk':'Lazy Song';
      const title=c.querySelector('h4').textContent.trim();
      const note=(verdicts[id]?.note||'').trim();
      lines.push(`- **${id}**（${mv}）${title}${note?' — 备注：'+note:''}`);
    });
    lines.push('');
  });
  if(count===0)lines.push('（当前尚未标记任何条目，请先点击各卡片下方的「属实 / 不算问题 / 待定」按钮。）');
  return lines.join('\n');
}

function buildExportJson(){
  const items=$$('.mv-review-card').map(c=>{
    const id=c.dataset.id;
    const e=verdicts[id]||{};
    return {
      id,
      source_id:c.dataset.source,
      group:c.closest('.ar-group-block').dataset.group,
      title:c.querySelector('h4').textContent.trim(),
      verdict:e.verdict||'pending',
      note:e.note||''
    };
  });
  return JSON.stringify({exported_at:new Date().toISOString(),total:items.length,items},null,2);
}

function setupToolbar(){
  $$('.ar-pill').forEach(pill=>{
    pill.onclick=()=>{
      activeGroup=pill.dataset.group;
      $$('.ar-pill').forEach(p=>p.classList.toggle('active',p===pill));
      applyFilters();
    };
  });
  $('#ar-movie-filter').onchange=applyFilters;
  $('#ar-status-filter').onchange=applyFilters;

  const feedback=$('#ar-copy-feedback');
  const flash=msg=>{feedback.textContent=msg;clearTimeout(flash._t);flash._t=setTimeout(()=>{feedback.textContent='';},3000);};

  $('#ar-copy-summary').onclick=async()=>{
    const md=buildSummaryMarkdown();
    $('#ar-export-text').value=md;
    try{
      await navigator.clipboard.writeText(md);
      flash('已复制核对汇总，可直接粘贴发给 AI');
    }catch(_){
      $('#ar-export-modal').hidden=false;
      $('#ar-export-text').select();
    }
  };
  $('#ar-open-export').onclick=()=>{
    $('#ar-export-text').value=buildSummaryMarkdown();
    $('#ar-export-modal').hidden=false;
  };
  $('#ar-download-json').onclick=()=>{
    const blob=new Blob([buildExportJson()],{type:'application/json;charset=utf-8'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download='music2mv-manual-audit-verdicts.json';a.click();
    URL.revokeObjectURL(url);
  };
  $('#ar-clear-all').onclick=()=>{
    if(!Object.keys(verdicts).length)return;
    if(!confirm('确定清空当前浏览器里已保存的所有核对标记和备注吗？'))return;
    verdicts={};saveVerdicts();
    $$('.mv-review-card').forEach(syncCardVerdict);
    updateStats();applyFilters();
    flash('已清空本地核对记录');
  };
  $('#ar-export-close').onclick=()=>{$('#ar-export-modal').hidden=true;};
  $('#ar-export-modal').addEventListener('click',e=>{if(e.target===$('#ar-export-modal'))$('#ar-export-modal').hidden=true;});
  $('#ar-export-copy').onclick=async()=>{
    const txt=$('#ar-export-text');
    try{await navigator.clipboard.writeText(txt.value);flash('已复制');}
    catch(_){txt.select();document.execCommand('copy');flash('已复制');}
  };
}

document.addEventListener('play',e=>{
  if(e.target.matches('video,audio'))$$('video,audio').forEach(p=>{if(p!==e.target)p.pause();});
},true);

document.addEventListener('click',e=>{
  const b=e.target.closest('button[data-full-source]');
  if(b)openFullMovie(b.dataset.fullSource,b.dataset.fullTime,b.dataset.fullLabel);
});

loadVerdicts();
setupCards();
setupModal();
setupToolbar();
updateStats();
applyFilters();
