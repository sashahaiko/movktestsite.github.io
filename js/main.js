/* =========================================================
   MOVK — общий скрипт всех страниц
   ========================================================= */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var inner = document.querySelector('.header-inner');
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('site-nav');

  /* ---------- Мобильное меню ---------- */
  function setMenu(open) {
    if (!burger || !nav) return;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    nav.classList.toggle('is-open', open);
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenu(false);
        burger.focus();
      }
    });
  }

  /* ---------- Бургер, когда пункты не помещаются в строку ----------
     Класс nav-compact на <html> заранее ставит скрипт в <head> (ширина < 1200),
     здесь он уточняется: бургер включается и тогда, когда строка меню не помещается. */
  var root = document.documentElement;
  var COMPACT_BELOW = 1200;
  function fits() {
    root.classList.remove('nav-compact');
    return inner.scrollWidth <= inner.clientWidth + 1 &&
           nav.querySelector('.nav-list').offsetHeight < 60;
  }
  function updateCompact() {
    if (!header || !inner || !nav) return;
    var compact = window.innerWidth < COMPACT_BELOW || !fits();
    root.classList.toggle('nav-compact', compact);
    if (!compact) setMenu(false);
  }
  updateCompact();
  window.addEventListener('resize', updateCompact);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(updateCompact);

  /* ---------- Тень шапки при прокрутке ---------- */
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Уведомление о cookie ---------- */
  var cookie = document.getElementById('cookie');
  if (cookie) {
    var KEY = 'movk-cookie-ok';
    var accepted = false;
    try { accepted = localStorage.getItem(KEY) === '1'; } catch (e) { /* хранилище недоступно */ }
    if (!accepted) cookie.hidden = false;
    var ok = cookie.querySelector('[data-cookie-ok]');
    if (ok) ok.addEventListener('click', function () {
      cookie.hidden = true;
      try { localStorage.setItem(KEY, '1'); } catch (e) { /* хранилище недоступно */ }
    });
  }

  /* ---------- Появление блоков ---------- */
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) { observer.observe(el); });
})();
