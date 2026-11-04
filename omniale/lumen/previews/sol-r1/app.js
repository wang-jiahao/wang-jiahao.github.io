const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const nav = $('.main-nav');
const mobileToggle = $('.menu-toggle');
function closeNavigation() {
  nav.classList.remove('mobile-open');
  mobileToggle.setAttribute('aria-expanded', 'false');
  mobileToggle.setAttribute('aria-label', 'Open navigation menu');
  $$('.nav-drop').forEach(drop => {
    drop.classList.remove('open');
    drop.dataset.pinned = 'false';
    $('button', drop).setAttribute('aria-expanded', 'false');
  });
}
mobileToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile-open');
  mobileToggle.setAttribute('aria-expanded', String(open));
  mobileToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
});
$$('.nav-toggle').forEach(button => {
  const drop = button.closest('.nav-drop');
  button.addEventListener('click', () => {
    const open = drop.dataset.pinned !== 'true';
    drop.dataset.pinned = String(open);
    drop.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
  });
  drop.addEventListener('mouseenter', () => {
    if (matchMedia('(min-width:761px)').matches) { drop.classList.add('open'); button.setAttribute('aria-expanded', 'true'); }
  });
  drop.addEventListener('mouseleave', () => {
    if (drop.dataset.pinned !== 'true' && !drop.contains(document.activeElement)) { drop.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); }
  });
});
$$('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  if (link.dataset.profile) return;
  closeNavigation();
  const target = document.getElementById(link.hash.slice(1));
  if (target) {
    event.preventDefault();
    target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth' });
    history.replaceState(null, '', link.hash);
  }
}));
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeNavigation();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeNavigation();
});

$$('[data-filter-group]').forEach(button => button.addEventListener('click', () => {
  const group = button.dataset.filterGroup;
  const category = button.dataset.filter;
  $$(`[data-filter-group="${group}"]`).forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  const grid = $(group === 'journal' ? '#journal-grid' : '#cases-grid');
  $$('[data-category]', grid).forEach(card => card.hidden = category !== 'All' && card.dataset.category !== category);
}));

$$('.rail').forEach(rail => {
  const name = rail.id.replace('-rail', '');
  const previous = $(`[data-rail="${name}"][data-direction="-1"]`);
  const next = $(`[data-rail="${name}"][data-direction="1"]`);
  const step = () => rail.firstElementChild.getBoundingClientRect().width + 16;
  const update = () => {
    previous.disabled = rail.scrollLeft < 3;
    next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 3;
  };
  [previous, next].forEach(button => button.addEventListener('click', () => {
    rail.scrollBy({ left: step() * Number(button.dataset.direction), behavior: 'smooth' });
  }));
  rail.addEventListener('scroll', update, { passive: true });
  rail.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      rail.scrollBy({ left: step() * (event.key === 'ArrowRight' ? 1 : -1), behavior: 'smooth' });
    }
    if (event.key === 'Home') { event.preventDefault(); rail.scrollTo({ left: 0 }); }
    if (event.key === 'End') { event.preventDefault(); rail.scrollTo({ left: rail.scrollWidth }); }
  });
  rail.addEventListener('wheel', event => {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    const max = rail.scrollWidth - rail.clientWidth;
    const canMove = event.deltaY > 0 ? rail.scrollLeft < max - 2 : rail.scrollLeft > 2;
    if (canMove) { event.preventDefault(); rail.scrollLeft += event.deltaY; }
  }, { passive: false });
  let originX = 0, originScroll = 0, active = false, moved = false;
  rail.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse' || event.button !== 0 || event.target.closest('a, button')) return;
    active = true; moved = false; originX = event.clientX; originScroll = rail.scrollLeft;
    rail.setPointerCapture(event.pointerId);
  });
  rail.addEventListener('pointermove', event => {
    if (!active) return;
    if (Math.abs(event.clientX - originX) > 5) { moved = true; rail.classList.add('dragging'); }
    if (moved) rail.scrollLeft = originScroll - (event.clientX - originX);
  });
  const release = () => { active = false; rail.classList.remove('dragging'); };
  rail.addEventListener('pointerup', release);
  rail.addEventListener('pointercancel', release);
  rail.addEventListener('dragstart', event => event.preventDefault());
  new ResizeObserver(update).observe(rail);
  update();
});

const form = $('#inquiry-form');
const formStatus = $('#form-status');
const fields = ['name', 'company', 'email', 'project-type', 'budget', 'message'];
try {
  const saved = JSON.parse(localStorage.getItem('lumen-inquiry-draft') || '{}');
  fields.forEach(id => { if (typeof saved[id] === 'string') document.getElementById(id).value = saved[id]; });
} catch (_) { /* The form remains usable when browser storage is unavailable. */ }
form.addEventListener('input', () => {
  formStatus.textContent = '';
  const draft = Object.fromEntries(fields.map(id => [id, document.getElementById(id).value]));
  try { localStorage.setItem('lumen-inquiry-draft', JSON.stringify(draft)); } catch (_) {}
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (!$('#name').value.trim()) {
    $('#name').setCustomValidity('Please enter your name.');
    $('#name').reportValidity();
    return;
  }
  const first = $('#name').value.trim().split(/\s+/)[0];
  formStatus.textContent = `Thank you, ${first}. Your inquiry is ready. This preview saves your details on this device; no email has been sent.`;
  formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
$('#name').addEventListener('input', () => $('#name').setCustomValidity(''));

const dialog = $('#detail-dialog');
const openDialog = (title, body) => {
  $('#dialog-title').textContent = title;
  $('#dialog-body').innerHTML = body;
  dialog.showModal();
};
$('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
const roles = [
  ['Materials & Sustainability Specialist', 'EPDs • Circular procurement • Low-toxicity specifications', 'Help translate environmental goals into durable, healthy material choices. Work with our architects on material passports, supplier research, and clear specification sets.'],
  ['BIM Coordinator', 'Model hygiene • Clash workflow • Consultant coordination', 'Keep interdisciplinary models legible and coordinated. Lead model reviews, track interfaces and clashes, and support the issue of precise drawing packages.'],
  ['Architectural Designer (2–5 years)', 'Concept through DD • Strong layout and detail sensibility', 'Develop thoughtful spaces from early studies through design development. Bring a clear design process, careful drawings, and an interest in physical models and material craft.']
];
$$('[data-role]').forEach(button => button.addEventListener('click', () => {
  const [title, subtitle, description] = roles[Number(button.dataset.role)];
  openDialog(title, `<p><strong>${subtitle}</strong></p><p>${description}</p><p>Hybrid options are available depending on the role. Introduce yourself and share a link to your portfolio using the inquiry form.</p><div class="actions"><button class="btn gold" id="role-apply">Express interest <span aria-hidden="true">→</span></button></div>`);
  $('#role-apply').addEventListener('click', () => {
    dialog.close();
    $('#project-type').value = 'Other';
    $('#message').value = `Career inquiry: ${title}\n\nPortfolio link: \nA little about me: `;
    $('#contact').scrollIntoView({ behavior: 'smooth' });
    $('#message').dispatchEvent(new Event('input', { bubbles: true }));
    setTimeout(() => $('#name').focus({ preventScroll: true }), 500);
  });
}));
$$('[data-profile]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  openDialog(`${link.dataset.profile} · ${link.dataset.network}`, '<p>Connect with the studio to learn more about our work and team.</p><p>Our social profile address is not included in this preview. You can reach us through the Project Inquiry form.</p><div class="actions"><button class="btn gold" id="profile-contact">Contact the studio <span aria-hidden="true">→</span></button></div>');
  $('#profile-contact').addEventListener('click', () => { dialog.close(); $('#contact').scrollIntoView({ behavior: 'smooth' }); });
}));
