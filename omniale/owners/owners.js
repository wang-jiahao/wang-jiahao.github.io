'use strict';
// Refresh from the weekly summary so later publications automatically appear here.
async function refreshOwners() {
  const sourceURL = new URL('../index.html', location.href);
  const response = await fetch(sourceURL, {cache: 'no-cache'});
  if (!response.ok) throw new Error('Weekly summary unavailable');
  const source = new DOMParser().parseFromString(await response.text(), 'text/html');
  const owners = new Map(window.OMNIALE_OWNERS.map(([host, name]) => [host, {name, original: [], variants: []}]));
  let total = 0;
  for (const section of source.querySelectorAll('section.week')) {
    const week = section.querySelector('h2')?.textContent.trim() || '';
    let variant = false;
    for (const child of section.children) {
      if (child.matches('.variant-heading')) variant = true;
      const cards = child.matches('a.case') ? [child] : child.querySelectorAll('a.case');
      for (const card of cards) {
        const rawHref = card.getAttribute('href');
        const href = new URL(rawHref, sourceURL);
        const host = href.origin === sourceURL.origin ? 'wang-jiahao.github.io' : href.hostname;
        const owner = owners.get(host);
        if (!owner) throw new Error('Unmapped case owner: ' + href.hostname);
        const copy = document.importNode(card, true);
        copy.href = href.href;
        for (const img of copy.querySelectorAll('img[src]')) img.src = new URL(img.getAttribute('src'), sourceURL).href;
        const label = document.createElement('div');
        label.className = 'owner-week';
        label.textContent = week;
        copy.querySelector('.body').prepend(label);
        (variant ? owner.variants : owner.original).push(copy);
        total++;
      }
    }
  }
  if (!total) throw new Error('No summary cases found');
  const navFragment = document.createDocumentFragment();
  const sectionsFragment = document.createDocumentFragment();
  for (const [host, owner] of owners) {
    const id = host.split('.')[0];
    const count = owner.original.length + owner.variants.length;
    const link = document.createElement('a'); link.href = '#' + id;
    const value = document.createElement('strong'); value.textContent = count;
    const name = document.createElement('span'); name.textContent = owner.name;
    link.append(value, name); navFragment.append(link);
    const section = document.createElement('section'); section.className = 'owner-section'; section.id = id;
    const head = document.createElement('div'); head.className = 'owner-head';
    const title = document.createElement('h2'); title.textContent = owner.name;
    const summary = document.createElement('p'); summary.textContent = `${count} 题 · ${owner.variants.length} 个变体`;
    head.append(title, summary); section.append(head);
    for (const [label, cards] of [['新题及原有案例', owner.original], ['变体题', owner.variants]]) {
      if (!cards.length) continue;
      const heading = document.createElement('h3'); heading.className = 'owner-subhead'; heading.textContent = `${label} · ${cards.length} 题`;
      const grid = document.createElement('div'); grid.className = 'week5-grid'; grid.append(...cards);
      section.append(heading, grid);
    }
    sectionsFragment.append(section);
  }
  document.getElementById('owner-total').textContent = `${total} 道题 · ${owners.size} 位负责人`;
  document.getElementById('owner-nav').replaceChildren(navFragment);
  document.getElementById('owner-sections').replaceChildren(sectionsFragment);
}
refreshOwners().catch(error => console.warn('Using published snapshot:', error.message));
