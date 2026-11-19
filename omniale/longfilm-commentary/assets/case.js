
const issues=JSON.parse(document.getElementById('issue-data').textContent);
const source=document.getElementById('compare-source'), recap=document.getElementById('compare-recap');
function seek(video,time){const clean=video.getAttribute('src').split('#')[0];if(video.getAttribute('src')!==clean)video.setAttribute('src',clean);video.preload='metadata';if(video.readyState>=1){video.currentTime=time}else{video.addEventListener('loadedmetadata',()=>{video.currentTime=time},{once:true});video.load()}}
function selectIssue(index){const issue=issues[index];source.pause();recap.pause();source.setAttribute('src',issue.source_clip);source.poster=issue.source_poster;recap.poster=issue.output_poster;seek(source,0);seek(recap,issue.output_start);document.getElementById('source-time').textContent=issue.source_label;document.getElementById('output-time').textContent=issue.output_label;document.getElementById('issue-title').textContent=issue.title;document.getElementById('issue-detail').textContent=issue.detail;document.querySelectorAll('[data-issue]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.issue===index)));document.getElementById('trace-evidence').href='traces/astra/#event-'+issue.event_id}
document.querySelectorAll('[data-issue]').forEach(b=>b.addEventListener('click',()=>selectIssue(+b.dataset.issue)));
document.querySelectorAll('[data-show-issue]').forEach(b=>b.addEventListener('click',()=>{selectIssue(+b.dataset.showIssue);document.getElementById('comparison').scrollIntoView({behavior:'smooth'})}));
document.querySelectorAll('[data-seek]').forEach(b=>b.addEventListener('click',()=>{const video=document.getElementById(b.dataset.player);seek(video,+b.dataset.seek);video.scrollIntoView({behavior:'smooth'})}));
source.addEventListener('play',()=>recap.pause());recap.addEventListener('play',()=>source.pause());
if(location.hash.startsWith('#issue-')){const i=+location.hash.slice(7);if(Number.isInteger(i)&&issues[i])selectIssue(i)}
