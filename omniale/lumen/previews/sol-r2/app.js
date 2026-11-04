/* The page is self-contained and works over file:// as well as HTTP. */
'use strict';
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const testimonials = [
  {name:'Nadia R. Calder',role:'Founder, Calder Hospitality Group',image:6,quote:'The design documents were unusually readable—clean details, clear coordination, and a material palette that felt elevated without being precious. Our contractor praised the set, and the punch list stayed short.',tag:'Boutique hotel renovation',metric:'Delivery: 22 weeks'},
  {name:'Evan T. Liu',role:'Development Director, Meridian Properties',image:7,quote:'Their feasibility package gave us a decision we could defend—daylight metrics, cost levers, and a phased scope. It reduced uncertainty with investors and accelerated permitting.',tag:'Mixed-use feasibility',metric:'3 options, 1 week'},
  {name:'Priya S. Menon',role:'Operations Lead, CoWork Atlas',image:10,quote:'The space feels ‘quiet’ even at capacity—acoustic zoning, circulation, and lighting were all tuned. The team communicated trade-offs with exceptional clarity, so decisions felt easy.',tag:'Workplace fit-out',metric:'1,800 m²'},
  {name:'Samir K. D’Souza',role:'Civic Program Manager, Riverline Trust',image:8,quote:'They hosted workshops that brought planners, neighbors, and engineers into the same frame. The final plan preserved the budget while elevating public comfort and accessibility.',tag:'Community center',metric:'Public consultation'}
];
$('#testimonials-rail').innerHTML = testimonials.map(t => `<article class="panel testimonial"><div class="testimonial-person"><img src="assets/${t.image}.jpg" alt="${t.name}" draggable="false"><div><h3>${t.name}</h3><small>${t.role}</small></div></div><blockquote>“${t.quote}”</blockquote><div class="testimonial-meta"><span class="pill">${t.tag}</span><span>${t.metric}</span></div></article>`).join('');

const projects = [
  {name:'Ridgehouse Courtyard Residence',image:12,alt:'Tower and surrounding city, used for the Ridgehouse material study',text:'A warm stone-and-timber home centered on a planted courtyard. The façade uses deep reveals to soften glare while maintaining views. Interior joins align with structural bays for clarity and economy.',tags:['Residential','Stone + bronze detailing','Courtyard daylighting','Natural ventilation'],cta:'Request Full Deck',href:'#contact'},
  {name:'Atlas Exchange Workplace',image:14,alt:'Detailed façade study for Atlas Exchange Workplace',text:'A workplace designed for focus and collaboration: soft circulation loops, acoustic zoning, and balanced lighting. The planning strategy supports future reconfiguration without affecting base building systems.',tags:['Commercial','Acoustic zoning','Modular joinery','Lighting comfort'],cta:'Read the planning notes',href:'#journal'},
  {name:'Riverline Civic Hall',image:13,alt:'Sunlit façade detail for Riverline Civic Hall',text:'A civic room with a porous threshold—public seating, indoor planting, and a façade that catches morning light. Accessibility is designed into circulation and furniture layout from the first sketch.',tags:['Civic','Universal access','Community workshops','Daylight-first'],cta:'Explore case studies',href:'#case-studies'}
];
$('#portfolio-projects').innerHTML = projects.map((p,i) => {
  const copy=`<article class="panel project-copy"><h3>${p.name}</h3><p>${p.text}</p><div class="project-tags">${p.tags.map(t=>`<span class="pill">${t}</span>`).join('')}</div><a class="button" href="${p.href}" ${i===0?'data-inquiry="Ridgehouse Courtyard Residence — full project deck"':''}>${p.cta} <span aria-hidden="true">→</span></a></article>`;
  const photo=`<div class="project-image"><img loading="lazy" src="assets/${p.image}.jpg" alt="${p.alt}"></div>`;
  return `<div class="project-row">${i===1?photo+copy:copy+photo}</div>`;
}).join('');

const awards = [
  ['Detail Journal — Façade Craft Award','2025 • Winner','Brushed metalwork and stone reveals engineered for long-term patina with minimal maintenance.'],
  ['Urban Forum — Public Realm Prize','2024 • Shortlist','A civic threshold that blends seating, planting, and accessible circulation without visual clutter.'],
  ['Material Index — Circular Spec Challenge','2024 • Winner','Material passports and repairable assemblies reducing embodied carbon while elevating tactility.'],
  ['Architecture Review — Emerging Studio','2023 • Nominee','Editorial minimalism paired with decisive construction detailing—designed for calm and built for longevity.']
];
$('#awards-rail').innerHTML=awards.map(a=>`<article class="award-card"><div class="award-top"><h3>${a[0]}</h3><small>${a[1]}</small></div><div class="award-art" role="img" aria-label="Sculptural bronze award with concentric rings"><span class="trophy" aria-hidden="true"><i></i><i></i></span></div><p>${a[2]}</p></article>`).join('');

const phases=[
 {name:'Discovery & Brief',consultation:'Feasibility pack',full:'Stakeholder workshops',get:'Site reading, program alignment, adjacency diagrams, and a short decision memo outlining budget levers, schedule risks, and permitting implications.',document:'A concise feasibility PDF with annotated plans, precedent references, and a “decision ladder” that maps options to cost and performance.'},
 {name:'Design & Modeling',consultation:'Massing + daylight',full:'3D coordination model',get:'Concept options, spatial layouts, façade studies, and physical or digital models to test daylight, views, and material relationships.',document:'Coordinated plans and a shared model, with daylight studies, material boards, and a review log recording the reasons behind each decision.'},
 {name:'Planning & Approvals',consultation:'Advisory reviews',full:'Planning submission',advisory:true,get:'Planning strategy, consultant coordination, and design reviews that address access, environmental performance, and local approval requirements.',document:'A coordinated submission set with an approvals tracker, supporting design statements, and clear responses to authority feedback.'},
 {name:'Construction & Supervision',consultation:'Detail advisory',full:'Site administration',advisory:true,get:'Detail development, tender clarifications, shop-drawing reviews, and site observations to protect the quality of the design as it is built.',document:'Site reports, a drawing revision register, responses to RFIs, and a closeout checklist that makes responsibilities and next steps clear.'}
];
$('#service-phases').innerHTML=phases.map((p,i)=>`<details class="service-phase" ${i===0?'open':''}><summary aria-label="${p.name}: consultation and full service details"><span class="service-name"><span class="phase-number">0${i+1}</span>${p.name}</span><span class="service-option ${p.advisory?'advisory':''}"><b>Consultation</b><span>${p.consultation}</span></span><span class="service-option"><b>Full Service</b><span>${p.full}</span></span><span class="circle" aria-hidden="true">⌄</span></summary><div class="service-detail"><div><h4>What you get</h4><p>${p.get}</p></div><div><h4>How we document</h4><p>${p.document}</p></div></div></details>`).join('');

const articles=[
 {category:'Materials',time:6,image:2,title:'Brushed bronze without the fuss: patina, sealing, and touchpoints',text:'How we specify bronze so it ages gracefully across façades, handrails, and interior thresholds—without constant maintenance.',cta:'Request our bronze spec sheet',href:'#contact',detail:'Begin with real samples and agree on the finish at the points people touch. We document the intended patina, cleaning method, and maintenance interval alongside the detail. Protected edges, replaceable components, and a small sample held on site keep the built result aligned with the specification.'},
 {category:'Daylight',time:8,image:3,title:'Daylight autonomy, explained in plain language',text:'A studio-friendly framework for using daylight metrics to improve comfort—without turning design reviews into spreadsheets.',cta:'See how we model early',href:'#philosophy',detail:'Daylight autonomy describes how often a space can meet its lighting needs using daylight. We review it together with glare, orientation, and the way a room will be occupied. Early massing studies compare a few clear options, making the trade-offs visible before the layout is fixed.'},
 {category:'Process',time:5,image:1,title:'From moodboard to buildable detail: our decision ladder',text:'How we keep stakeholders aligned with short, consistent deliverables that translate into clean documentation and fewer RFIs.',cta:'See the portfolio breakdown',href:'#portfolio',detail:'Each review connects an intention to a buildable decision. Material samples, plans, and model views carry the same references. A short decision record captures the chosen option, the reason for choosing it, and the next action for the team.'},
 {category:'Sustainability',time:7,image:4,title:'Low-toxicity interiors: adhesives, sealants, and what to ask suppliers',text:'A practical checklist for healthier interiors—especially important for childcare, hospitality, and high-occupancy projects.',cta:'Get the checklist',href:'#contact',detail:'Ask suppliers for product-specific emissions information, compatible substrates, installation requirements, and curing conditions. Review the full assembly, including adhesives and sealants. Record the approved product and any substitution so that the specification remains clear through procurement.'},
 {category:'Daylight',time:4,image:5,title:'Light studies you can hold: why we still build physical models',text:'Digital tools are essential, but tactile light tests often reveal glare, shadow, and depth cues that screens miss.',cta:'Back to philosophy',href:'#philosophy',detail:'A physical model makes light and shadow tangible. We move the source, test openings and reveals, and compare what the model shows with the digital study. These small experiments help the whole team discuss scale and comfort using a shared reference.'},
 {category:'Process',time:9,image:11,title:'Reducing change orders: coordination habits that actually work',text:'A field-tested set of review checkpoints—model hygiene, interface details, and how we track decisions to keep teams aligned.',cta:'See construction support',href:'#services',detail:'Resolve interfaces early: structure and façade, services and ceiling, joinery and circulation. Name the owner of each action, keep a current drawing register, and close review items with a visible decision. Consistent coordination makes the documents easier to build from.'}
];
$('#journal-grid').innerHTML=articles.map((a,i)=>`<article class="journal-card" data-category="${a.category}"><img src="assets/${a.image}.jpg" loading="lazy" alt="${['Bronze and material samples on a studio worktable','Architectural daylight and layout model','White building massing model','Physical daylight model for healthier interiors','Circular timber light study','Crane and tower during construction'][i]}"><div class="card-body"><div class="article-meta"><span class="pill">${a.category}</span><span>${a.time} min read</span></div><h3>${a.title}</h3><p>${a.text}</p><a class="text-link" href="${a.href}" ${a.href==='#contact'?`data-inquiry="${escapeHTML(a.cta)}"`:''}>${a.cta} <span aria-hidden="true">→</span></a></div></article>`).join('');

// Garden Stair was explicitly removed in the final review, including from filters.
const cases=[
 {title:'Meridian Annex • Workplace Fit-out',category:'Commercial',image:14,text:'A dense floorplate redesigned with acoustic zoning and indirect lighting—improving focus while keeping flexibility for future teams.',initials:'MP',client:'Meridian Properties'},
 {title:'Ridgehouse • Courtyard Residence',category:'Residential',image:12,text:'A home organized around a planted courtyard. Deep reveals soften glare; material transitions align with structural bays for clarity.',initials:'RH',client:'Private Client'},
 {title:'Riverline Civic Hall • Community Center',category:'Civic',image:13,text:'Public threshold design combining seating, planting, and accessible circulation. Workshop-led planning reduced late-stage revisions.',initials:'RT',client:'Riverline Trust'},
 {title:'Urban Oasis • Tower Amenity Layers',category:'Commercial',image:15,text:'A vertical neighborhood: shared terraces, community lounge, and co-working cores—designed to remain legible at scale.',initials:'UO',client:'UrbanWorks Development'},
 {title:'Transit Learning Pavilion',category:'Civic',image:11,text:'A compact civic pavilion that brings education and public comfort into a transit-adjacent site with tight constraints.',initials:'TL',client:'Metro Civic Lab'}
];
$('#cases-grid').innerHTML=cases.map(c=>`<article class="case-card" data-category="${c.category}"><img src="assets/${c.image}.jpg" loading="lazy" alt="${c.title}"><div class="card-body"><h3>${c.title}</h3><p>${c.text}</p><div class="case-meta"><span class="client"><i aria-hidden="true">${c.initials}</i>${c.client}</span><span>${c.category}</span></div></div></article>`).join('');

const team=[
 ['Clara Iwata','Creative Director',6,['LinkedIn','Instagram']],['Jonah Patel','Technical Lead',7,['LinkedIn','Publications']],['Amara Collins','Design Research',8,['Journal','LinkedIn']],['Leah Moreno','Project Architect',10,['LinkedIn','Case work']]
];
$('#team-grid').innerHTML=team.map(t=>`<article class="team-card"><img loading="lazy" src="assets/${t[2]}.jpg" alt="${t[0]}, ${t[1]}"><div><h3>${t[0]}</h3><p>${t[1]}</p><div class="team-links">${t[3].map(link=>link==='Journal'||link==='Publications'?`<a href="#journal" aria-label="${t[0]} ${link}">${link}</a>`:link==='Case work'?`<a href="#case-studies" aria-label="${t[0]} case work">${link}</a>`:`<button data-team="${t[0]}" aria-label="${t[0]} ${link}">${link}</button>`).join('')}</div></div></article>`).join('');
const roles=[
 {name:'Materials & Sustainability Specialist',summary:'EPDs • Circular procurement • Low-toxicity specifications',text:'Help shape durable, healthy material palettes. You’ll review environmental product declarations, work with suppliers on circular procurement, and translate research into clear, low-toxicity specifications.'},
 {name:'BIM Coordinator',summary:'Model hygiene • Clash workflow • Consultant coordination',text:'Keep shared models clear and coordinated. You’ll maintain model standards, guide clash reviews, and work with architects and consultants to resolve interfaces before they reach site.'},
 {name:'Architectural Designer (2–5 years)',summary:'Concept through DD • Strong layout and detail sensibility',text:'Develop thoughtful spaces from concept through design development. Bring strong layout and detail sensibility, an interest in physical models, and the ability to communicate design decisions clearly.'}
];
$('#roles').innerHTML=roles.map(r=>`<details class="role"><summary><span><h3>${r.name}</h3><small>${r.summary}</small></span><span class="circle" aria-hidden="true">›</span></summary><div class="role-content"><p>${r.text} Hybrid options are available depending on the role. Introduce yourself and share a short portfolio with our studio.</p><a class="button" href="#contact" data-inquiry="Career enquiry: ${r.name}">Apply for this role <span aria-hidden="true">→</span></a></div></details>`).join('');

function filterCards(kind,category){
  const grid=$(`#${kind==='journal'?'journal':'cases'}-grid`);
  const cards=$$('article',grid);
  cards.forEach(card=>{card.hidden=category!=='All'&&card.dataset.category!==category});
  $$(`[data-${kind==='journal'?'journal':'case'}-filter]`).filter(b=>b.tagName==='BUTTON').forEach(b=>{
    const active=(kind==='journal'?b.dataset.journalFilter:b.dataset.caseFilter)===category;
    b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));
  });
  $(`#${kind==='journal'?'journal':'cases'}-result`).textContent=`${cards.filter(c=>!c.hidden).length} ${kind==='journal'?'articles':'case studies'} shown${category==='All'?'':` in ${category}`}.`;
}
$$('[data-journal-filter]').forEach(b=>b.addEventListener('click',()=>filterCards('journal',b.dataset.journalFilter)));
$$('[data-case-filter]').forEach(b=>b.addEventListener('click',()=>filterCards('cases',b.dataset.caseFilter)));

// Pointer, touch, keyboard, and explicit buttons can all move the two carousels.
$$('[data-rail]').forEach(b=>b.addEventListener('click',()=>{
  const rail=$(`#${b.dataset.rail}`),first=rail.firstElementChild;
  rail.scrollBy({left:Number(b.dataset.direction)*(first.getBoundingClientRect().width+16),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}));
$$('.rail').forEach(rail=>{
  let startX=0,startScroll=0,dragging=false;
  rail.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0)return;dragging=true;startX=e.clientX;startScroll=rail.scrollLeft;rail.classList.add('dragging');rail.setPointerCapture(e.pointerId)});
  rail.addEventListener('pointermove',e=>{if(dragging)rail.scrollLeft=startScroll-(e.clientX-startX)});
  const end=()=>{dragging=false;rail.classList.remove('dragging')};rail.addEventListener('pointerup',end);rail.addEventListener('pointercancel',end);
  rail.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();rail.scrollBy({left:(e.key==='ArrowRight'?1:-1)*(rail.firstElementChild.offsetWidth+16),behavior:'smooth'})}});
});

const menuGroups=$$('.nav-dropdown');
function closeMenus(){menuGroups.forEach(g=>{g.classList.remove('open');$('button',g).setAttribute('aria-expanded','false')})}
menuGroups.forEach(g=>{
  const button=$('button',g);
  button.addEventListener('click',()=>{const open=!g.classList.contains('open');closeMenus();g.classList.toggle('open',open);button.setAttribute('aria-expanded',String(open))});
  g.addEventListener('mouseenter',()=>{if(matchMedia('(hover: hover)').matches){closeMenus();g.classList.add('open');button.setAttribute('aria-expanded','true')}});
  g.addEventListener('mouseleave',()=>{if(matchMedia('(hover: hover)').matches){g.classList.remove('open');button.setAttribute('aria-expanded','false')}});
});
document.addEventListener('click',e=>{if(!e.target.closest('.nav-dropdown'))closeMenus()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenus();$('#main-nav').classList.remove('mobile-open');$('.mobile-toggle').setAttribute('aria-expanded','false');$('.mobile-toggle').setAttribute('aria-label','Open navigation')}});
$('.mobile-toggle').addEventListener('click',()=>{const open=$('#main-nav').classList.toggle('mobile-open');$('.mobile-toggle').setAttribute('aria-expanded',String(open));$('.mobile-toggle').setAttribute('aria-label',open?'Close navigation':'Open navigation')});
$$('#main-nav a').forEach(a=>a.addEventListener('click',()=>{closeMenus();$('#main-nav').classList.remove('mobile-open');$('.mobile-toggle').setAttribute('aria-expanded','false');$('.mobile-toggle').setAttribute('aria-label','Open navigation')}));

const dialog=$('#detail-dialog');
function showDialog(title,text){$('#dialog-content').innerHTML=`<span class="kicker">Atelier Lumen Studio</span><h2 id="dialog-title">${escapeHTML(title)}</h2><p>${escapeHTML(text)}</p><a class="button gold" href="#contact" id="dialog-contact">Contact the studio <span aria-hidden="true">→</span></a>`;dialog.showModal();$('#dialog-contact').addEventListener('click',()=>dialog.close())}
$('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
$$('[data-team]').forEach(b=>b.addEventListener('click',()=>{const member=team.find(t=>t[0]===b.dataset.team);showDialog(`${member[0]} · ${member[1]}`,'Connect through the studio to discuss our work, research, or a potential collaboration.')}));
$$('[data-profile]').forEach(b=>b.addEventListener('click',()=>showDialog(`Atelier Lumen on ${b.dataset.profile}`,'For studio news, project updates, or a conversation with our team, contact Atelier Lumen. Our journal and case studies are also available on this page.')));
$$('[data-inquiry]').forEach(a=>a.addEventListener('click',()=>{$('#message').value=a.dataset.inquiry;$('#form-message').textContent='';setTimeout(()=>$('#message').focus({preventScroll:true}),450)}));

$('#inquiry-form').addEventListener('submit',e=>{
  e.preventDefault();const form=e.currentTarget;
  if(!form.reportValidity())return;
  const inquiry=Object.fromEntries(new FormData(form));
  const blob=new Blob([`Atelier Lumen — Project Inquiry\n\nName: ${inquiry.name}\nCompany: ${inquiry.company}\nEmail: ${inquiry.email}\nProject type: ${inquiry.projectType}\nBudget: ${inquiry.budget}\n\n${inquiry.message}\n`],{type:'text/plain;charset=utf-8'});
  const url=URL.createObjectURL(blob),message=$('#form-message');
  message.replaceChildren(document.createTextNode('Your inquiry is ready. This local preview does not send email. '));
  const download=document.createElement('a');download.href=url;download.download='atelier-lumen-inquiry.txt';download.textContent='Save your inquiry';message.append(download);
  message.setAttribute('tabindex','-1');message.focus({preventScroll:true});
  form.addEventListener('input',()=>{URL.revokeObjectURL(url);message.textContent=''},{once:true});
});
