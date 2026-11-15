document.querySelectorAll('[data-seek-video]').forEach(button=>button.addEventListener('click',event=>{
 event.preventDefault();const video=document.getElementById('media-'+button.dataset.seekVideo);if(!video)return;
 document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause()});video.currentTime=Number(button.dataset.time);video.play().catch(()=>{});video.scrollIntoView({behavior:'smooth',block:'center'});
 document.getElementById('seek-note').textContent=`已定位${button.dataset.seekVideo==='A'?'甲':'乙'}片 ${Number(button.dataset.time).toFixed(2)} 秒。`;
}));
document.querySelectorAll('[data-seek-audio]').forEach(button=>button.addEventListener('click',event=>{
 event.preventDefault();const audio=document.getElementById('task-audio');audio.currentTime=Number(button.dataset.seekAudio);audio.play().catch(()=>{});audio.scrollIntoView({behavior:'smooth',block:'center'});
 document.getElementById('seek-note').textContent=`已定位申诉录音 ${Number(button.dataset.seekAudio).toFixed(2)} 秒。`;
}));
document.querySelectorAll('[data-delivery-tab]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-delivery-tab]').forEach(b=>b.setAttribute('aria-selected',String(b===button)));
 document.querySelectorAll('[data-delivery-panel]').forEach(panel=>panel.hidden=panel.dataset.deliveryPanel!==button.dataset.deliveryTab);
}));
const search=document.getElementById('ledger-search'),filter=document.getElementById('ledger-filter');
function filterRows(){document.querySelectorAll('#ledger-rows tr').forEach(row=>{const text=(search.value||'').toLowerCase();row.hidden=!(row.textContent.toLowerCase().includes(text)&&(filter.value==='all'||row.dataset.match===filter.value))})}
if(search){search.addEventListener('input',filterRows);filter.addEventListener('change',filterRows)}
document.querySelectorAll('[data-fullscreen]').forEach(b=>b.addEventListener('click',()=>{document.getElementById(b.dataset.fullscreen)?.requestFullscreen?.()}));
