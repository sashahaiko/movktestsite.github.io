/* =========================================================
   MOVK — вывод меню из js/menu-data.js
   - menu.html: все категории, фильтр, переход по #категории
   - index.html: карточки «Попробуйте в MOVK»
   ========================================================= */
(function () {
  'use strict';

  var data = window.MOVK_MENU;
  if (!data) return;

  var PHOTO_DIR = 'assets/menu/';
  var byId = {};
  var catById = {};
  data.items.forEach(function (it) { byId[it.id] = it; });
  data.categories.forEach(function (c) { catById[c.id] = c; });

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function price(it) { return it.price + ' ' + data.currency; }

  function media(it) {
    var box = el('div', 'dish-media');
    var img = document.createElement('img');
    img.loading = 'lazy';
    img.decoding = 'async';
    if (it.photo) {
      img.src = PHOTO_DIR + it.photo;
      img.alt = it.name;
    } else {
      box.className += ' dish-media--empty';
      img.src = 'assets/logo-gold.png';
      img.alt = '';
      img.width = 140;
      img.height = 48;
    }
    box.appendChild(img);
    return box;
  }

  /* ---------- Карточка блюда ---------- */
  function dishCard(it) {
    var card = el('article', 'dish reveal');
    card.id = 'dish-' + it.id;

    card.appendChild(media(it));

    var body = el('div', 'dish-body');
    body.appendChild(el('h3', 'dish-name', it.name));

    var w = el('p', 'dish-weight');
    w.appendChild(el('span', 'dish-weight-label', 'Выход: '));
    w.appendChild(document.createTextNode(it.weight));
    body.appendChild(w);

    if (it.desc) body.appendChild(el('p', 'dish-desc', it.desc));
    body.appendChild(el('p', 'dish-price', price(it)));

    card.appendChild(body);
    return card;
  }

  /* ---------- Страница меню ---------- */
  function renderMenu(root, filter) {
    var sections = [];

    data.categories.forEach(function (cat) {
      var items = data.items.filter(function (it) { return it.cat === cat.id; });
      if (!items.length) return;

      var section = el('section', 'menu-cat');
      section.id = cat.id;
      section.setAttribute('aria-labelledby', 'cat-title-' + cat.id);

      var head = el('h2', 'menu-title reveal', cat.title);
      head.id = 'cat-title-' + cat.id;
      section.appendChild(head);

      var grid = el('div', 'dishes');
      items.forEach(function (it) {
        if (it.check) grid.appendChild(document.createComment(' ПРОВЕРИТЬ: ' + it.check + ' '));
        grid.appendChild(dishCard(it));
      });
      section.appendChild(grid);
      root.appendChild(section);
      sections.push(section);
    });

    /* фильтр */
    var buttons = [];
    function chip(id, title) {
      var b = el('button', 'chip', title);
      b.type = 'button';
      b.setAttribute('data-cat', id);
      b.setAttribute('aria-pressed', 'false');
      b.setAttribute('aria-controls', 'menu-root');
      filter.appendChild(b);
      buttons.push(b);
    }
    chip('all', 'Все');
    data.categories.forEach(function (c) { chip(c.id, c.title); });

    function apply(id, scroll) {
      if (id !== 'all' && !catById[id]) id = 'all';
      buttons.forEach(function (b) {
        var on = b.getAttribute('data-cat') === id;
        b.setAttribute('aria-pressed', String(on));
        if (on && b.scrollIntoView) {
          var bar = filter;
          var left = b.offsetLeft - (bar.clientWidth - b.offsetWidth) / 2;
          bar.scrollTo ? bar.scrollTo({ left: left, behavior: 'smooth' }) : (bar.scrollLeft = left);
        }
      });
      sections.forEach(function (s) { s.hidden = id !== 'all' && s.id !== id; });
      if (scroll) {
        var top = root.getBoundingClientRect().top + window.pageYOffset - filter.offsetHeight - 120;
        if (window.pageYOffset > top) window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
      }
    }

    filter.addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (!b) return;
      var id = b.getAttribute('data-cat');
      apply(id, true);
      try {
        history.replaceState(null, '', id === 'all' ? location.pathname : '#' + id);
      } catch (err) { /* file:// в некоторых браузерах */ }
    });

    function fromHash() { apply((location.hash || '').slice(1) || 'all', false); }
    window.addEventListener('hashchange', fromHash);
    fromHash();
  }

  /* ---------- Главная: «Попробуйте в MOVK» ---------- */
  function renderFeatured(root) {
    (data.featured || []).forEach(function (id) {
      var it = byId[id];
      if (!it) return;
      var a = el('a', 'pick reveal');
      a.href = 'menu.html#' + it.cat;
      a.appendChild(media(it));
      var body = el('div', 'pick-body');
      body.appendChild(el('span', 'pick-cat', catById[it.cat].title));
      body.appendChild(el('h3', 'pick-name', it.name));
      body.appendChild(el('span', 'pick-price', price(it)));
      a.appendChild(body);
      root.appendChild(a);
    });
  }

  var menuRoot = document.getElementById('menu-root');
  var menuFilter = document.getElementById('menu-filter');
  if (menuRoot && menuFilter) renderMenu(menuRoot, menuFilter);

  var picks = document.getElementById('picks');
  if (picks) renderFeatured(picks);
})();
