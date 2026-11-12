(()=>{
 const choice=document.getElementById('preview-choice'),frame=document.getElementById('delivery-preview');
 if(choice&&frame)choice.addEventListener('change',()=>{const key=choice.value;frame.src=`previews/${key}/output/report.html`;document.getElementById('preview-open').href=frame.src;document.getElementById('reader-open').href=`submission-${key}.html`;frame.title=choice.selectedOptions[0].text+' · 原交付预览';});
 document.querySelectorAll('[data-audio]').forEach(button=>button.addEventListener('click',()=>{const audio=document.querySelector('#task-audio');if(!audio)return;const time=Number(button.dataset.audio);if(audio.readyState>=1)audio.currentTime=time;else audio.addEventListener('loadedmetadata',()=>audio.currentTime=time,{once:true});audio.scrollIntoView({block:'center',behavior:'smooth'});document.getElementById('seek-note').textContent=`已定位交接录音 ${time.toFixed(1)}秒；按播放键回听。`;}));
})();
