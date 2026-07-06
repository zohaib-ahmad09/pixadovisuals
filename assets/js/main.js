/* ========= PIXADO — behavior ========= */
(function () {
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  document.documentElement.classList.add('reveal-on');

  /* ---- SVG icons ---- */
  const ICONS = {
    instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.6 4.75 6V21H18.6v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H11z"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.2-.9-2.7-1.2-4.4-4-4.5-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.4 2.6 1.6.3.1.5.1.7-.1l.7-.9c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.4.1.2.1.9-.1 1.5z"/></svg>',
    play:'<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
    thumb:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 15 5-4 4 3 4-5 5 6"/></svg>',
    reel:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 8h18M8 3l3 5M14 3l3 5M10 12v5l4-2.5z"/></svg>',
    brand:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg>',
    bolt:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
  };

  /* ---- Fill text content from SITE ---- */
  $('#heroTag').textContent = SITE.tagline;
  $('#heroSub').textContent = SITE.subhead;
  $('#year').textContent = new Date().getFullYear();
  $('#emailBtn').href = 'mailto:' + SITE.email;
  const fe = $('#footerEmail'); if (fe) { fe.href = 'mailto:' + SITE.email; fe.textContent = SITE.email; }

  /* ---- Social buttons ---- */
  function socialHTML() {
    let html =
      `<a class="social" href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>` +
      `<a class="social" href="${SITE.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>` +
      `<a class="social" href="mailto:${SITE.email}" aria-label="Email">${ICONS.mail}</a>`;
    if (SITE.whatsapp) html += `<a class="social" href="${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.whatsapp}</a>`;
    return html;
  }
  $('#heroSocials').innerHTML = socialHTML();
  $('#contactSocials').innerHTML = socialHTML();

  /* ---- Stats ---- */
  $('#stats').innerHTML = SITE.stats.map(s =>
    `<div class="stat"><div class="stat__v">${s.value}</div><div class="stat__l">${s.label}</div></div>`).join('');

  /* ---- Services ---- */
  $('#services-grid').innerHTML = SERVICES.map(s =>
    `<div class="svc reveal"><div class="svc__icon">${ICONS[s.icon]||ICONS.thumb}</div>
     <h3>${s.title}</h3><p>${s.desc}</p></div>`).join('');

  /* ---- Work grid ---- */
  const grid = $('#workGrid');
  function cardHTML(item, i) {
    return `<article class="card card--thumbnail reveal" data-i="${i}">
      <div class="card__media"><img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="card__overlay"><span class="card__tag">${item.tag||''}</span>
        <span class="card__title">${item.title||''}</span></div>
      </div></article>`;
  }
  function fadeInImages(scope) {
    $$('.card__media img', scope).forEach(img => {
      if (img.complete) img.classList.add('loaded');
      else img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
    });
  }
  function renderGrid() {
    grid.innerHTML = WORK.map((it, i) => cardHTML(it, i)).join('');
    fadeInImages(grid);
    observeReveals();
  }
  renderGrid();

  /* ---- Lightbox ---- */
  const lb = $('#lightbox'), stage = $('#lbStage');
  function openLightbox(item) {
    stage.innerHTML = `<img src="${item.img}" alt="${item.title||''}">`;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lb.classList.remove('open');
    stage.innerHTML = '';
    document.body.style.overflow = '';
  }
  grid.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (!card) return;
    const item = WORK[+card.dataset.i];
    // If a real link is set (e.g. the YouTube video), open it; otherwise show a big preview.
    if (item.link && item.link !== '#') { window.open(item.link, '_blank', 'noopener'); return; }
    openLightbox(item);
  });
  $('#lbClose').addEventListener('click', closeLightbox);
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  /* ---- Scroll controller: nav shadow + back-to-top + active section ---- */
  const nav = $('#nav');
  const toTop = $('#toTop');
  const navAnchors = $$('#navLinks a[href^="#"]').filter(a => a.getAttribute('href').length > 1);
  const sections = navAnchors
    .map(a => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);
  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 10);
    if (toTop) toTop.classList.toggle('show', y > 600);
    // active section highlight
    let current = '';
    const line = y + 120;
    sections.forEach(sec => { if (sec.offsetTop <= line) current = sec.id; });
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  if (toTop) toTop.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---- Mobile menu ---- */
  const links = $('#navLinks'), toggle = $('#navToggle');
  toggle.addEventListener('click', () => { const open = links.classList.toggle('open'); toggle.classList.toggle('is-open', open); });
  $$('#navLinks a').forEach(a => a.addEventListener('click', () => { links.classList.remove('open'); toggle.classList.remove('is-open'); }));

  /* ---- Reveal on scroll ---- */
  var io;  /* hoisted: referenced by observeReveals() before this line */
  function revealAll() { $$('.reveal:not(.in)').forEach(el => el.classList.add('in')); }
  function observeReveals() {
    if (!('IntersectionObserver' in window)) { revealAll(); return; }
    if (!io) io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: .12 });
    $$('.reveal:not(.in)').forEach(el => io.observe(el));
  }
  observeReveals();
  // safety net: if anything prevents the observer from firing, show content anyway
  setTimeout(revealAll, 1500);
})();
