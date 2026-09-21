(function () {
  'use strict';
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var themeColor = document.querySelector('meta[name="theme-color"]');
  var preference = window.matchMedia('(prefers-color-scheme: dark)');
  var explicitTheme = null;
  try { explicitTheme = localStorage.getItem('homepage-theme'); } catch (error) {}
  if (explicitTheme !== 'light' && explicitTheme !== 'dark') explicitTheme = null;
  function applyTheme(theme) {
    root.dataset.theme = theme;
    var label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('title', label);
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    themeColor.content = theme === 'dark' ? '#19191e' : '#faf9f6';
  }
  applyTheme(explicitTheme || (preference.matches ? 'dark' : 'light'));
  toggle.hidden = false;
  toggle.addEventListener('click', function () {
    explicitTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(explicitTheme);
    try { localStorage.setItem('homepage-theme', explicitTheme); } catch (error) {}
  });
  function followSystemTheme(event) { if (!explicitTheme) applyTheme(event.matches ? 'dark' : 'light'); }
  if (preference.addEventListener) preference.addEventListener('change', followSystemTheme);
  else if (preference.addListener) preference.addListener(followSystemTheme);
  var links = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
  var sections = links.map(function (link) { return document.getElementById(link.dataset.section); });
  var framePending = false;
  function updateNavigation() {
    var offset = document.querySelector('.site-header').offsetHeight + 90;
    var current = sections[0].id;
    sections.forEach(function (section) { if (section.getBoundingClientRect().top <= offset) current = section.id; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3) {
      // The last sections may share the final viewport. Respect an explicit
      // anchor when it is visible instead of always selecting the last one.
      var target = sections.filter(function (section) {
        return location.hash === '#' + section.id || location.hash === '#-' + section.id;
      })[0];
      var targetRect = target && target.getBoundingClientRect();
      current = targetRect && targetRect.top < window.innerHeight && targetRect.bottom > offset
        ? target.id : sections[sections.length - 1].id;
    }
    links.forEach(function (link) {
      if (link.dataset.section === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    framePending = false;
  }
  function scheduleNavigationUpdate() {
    if (!framePending) { framePending = true; requestAnimationFrame(updateNavigation); }
  }
  window.addEventListener('scroll', scheduleNavigationUpdate, { passive: true });
  window.addEventListener('resize', scheduleNavigationUpdate);
  window.addEventListener('hashchange', scheduleNavigationUpdate);
  window.addEventListener('load', scheduleNavigationUpdate);
  updateNavigation();
})();
