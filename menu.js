/**
 * Tezgah — Menü Render Motoru
 * Veriyi window.BRANCH_MENU_DATA'dan okur (şubeye özel menu-data.js tarafından tanımlanır)
 * Desktop sidebar + tablet/mobile topbar destekli
 */
 
document.addEventListener('DOMContentLoaded', () => {
  const cat = getCategoryFromURL();
  buildSidebar(cat);
  buildDesktopTabs(cat);
  loadCategory(cat);
  initClock();
  initOpenStatus();
});
 
// URL'den ?cat= oku
function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  const data = window.BRANCH_MENU_DATA;
  if (!data) { showError('Menü verisi bulunamadı.'); return null; }
  return data[cat] ? cat : Object.keys(data)[0];
}
 
// ── Desktop Sidebar ─────────────────────────────────
function buildSidebar(activeCat) {
  const nav = document.getElementById('sidebar-nav');
  const data = window.BRANCH_MENU_DATA;
  if (!nav || !data) return;
 
  Object.entries(data).forEach(([key, cat]) => {
    const item = document.createElement('a');
    item.className = 'sidebar-nav-item' + (key === activeCat ? ' active' : '');
    item.href = `?cat=${key}`;
    item.innerHTML = `
      <span class="sidebar-nav-emoji">${cat.emoji}</span>
      <span class="sidebar-nav-label">${cat.name}</span>
    `;
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.sidebar-nav-item').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.cat-tab-btn').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      // tab'ı da güncelle
      const tab = document.querySelector(`.cat-tab-btn[data-cat="${key}"]`);
      if (tab) tab.classList.add('active');
      history.replaceState(null, '', `?cat=${key}`);
      loadCategory(key);
    });
    nav.appendChild(item);
  });
}
 
// ── Desktop Kategori Sekmeleri ──────────────────────
function buildDesktopTabs(activeCat) {
  const tabsEl = document.getElementById('desktop-cat-tabs');
  const data = window.BRANCH_MENU_DATA;
  if (!tabsEl || !data) return;
 
  Object.entries(data).forEach(([key, cat]) => {
    const btn = document.createElement('button');
    btn.className = 'cat-tab-btn' + (key === activeCat ? ' active' : '');
    btn.setAttribute('data-cat', key);
    btn.innerHTML = `<span>${cat.emoji}</span> ${cat.name}`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab-btn').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.sidebar-nav-item').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');
      // sidebar'ı da güncelle
      const sideItem = document.querySelector(`.sidebar-nav-item[href="?cat=${key}"]`);
      if (sideItem) sideItem.classList.add('active');
      history.replaceState(null, '', `?cat=${key}`);
      loadCategory(key);
    });
    tabsEl.appendChild(btn);
  });
}
 
// ── Kategori Yükle ──────────────────────────────────
function loadCategory(catKey) {
  if (!catKey) return;
  const data = window.BRANCH_MENU_DATA;
  const cat = data[catKey];
  if (!cat) return;
 
  // Başlık & meta
  document.title = `${cat.name} — ${window.BRANCH_NAME || 'Sarıyer Börekçisi'}`;
 
  // Topbar (mobil)
  const topbarName = document.getElementById('topbar-cat-name');
  if (topbarName) topbarName.textContent = cat.name;
 
  // Hero
  const heroEmoji = document.getElementById('hero-emoji');
  const heroTitle = document.getElementById('hero-title');
  const heroDesc  = document.getElementById('hero-desc');
  const heroEl    = document.getElementById('menu-hero');
 
  if (heroEmoji) heroEmoji.textContent = cat.emoji;
  if (heroTitle) heroTitle.textContent = cat.name;
  if (heroDesc)  heroDesc.textContent  = cat.desc;
  if (heroEl && cat.heroBg) heroEl.style.background = cat.heroBg;
 
  // Sidebar & Tab aktif durumunu güncelle
  document.querySelectorAll('.sidebar-nav-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('href') === `?cat=${catKey}`);
  });
  document.querySelectorAll('.cat-tab-btn').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-cat') === catKey);
  });
 
  // Gövde
  const body = document.getElementById('menu-body');
  if (!body) return;
  body.innerHTML = '';
 
  // Allerji notu (börekler için)
  if (catKey === 'borekler') {
    const notice = document.createElement('div');
    notice.className = 'allergy-notice';
    notice.innerHTML = `
      <span class="notice-icon">ℹ️</span>
      <p>Ürünlerimiz gluten içermektedir. Alerji durumunda personelimize danışınız.</p>
    `;
    body.appendChild(notice);
  }
 
  // Gruplar
  cat.groups.forEach(group => {
    const groupEl = document.createElement('div');
    groupEl.className = 'sub-group';
 
    const labelEl = document.createElement('div');
    labelEl.className = 'sub-group-label';
    labelEl.textContent = group.label;
    groupEl.appendChild(labelEl);
 
    const listEl = document.createElement('div');
    listEl.className = 'items-list';
    group.items.forEach(item => listEl.appendChild(createItemCard(item)));
 
    groupEl.appendChild(listEl);
    body.appendChild(groupEl);
  });
 
  // Sayfa başına scroll
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
 
// ── Ürün Kartı ──────────────────────────────────────
function createItemCard(item) {
  const el = document.createElement('article');
  el.className = 'menu-item' + (item.badge === 'popular' ? ' featured' : '');
 
  let badgeHTML = '';
  if (item.badge === 'popular') badgeHTML = `<span class="item-badge badge-popular">Popüler</span>`;
  else if (item.badge === 'new') badgeHTML = `<span class="item-badge badge-new">Yeni</span>`;
  else if (item.badge === 'spicy') badgeHTML = `<span class="item-badge badge-spicy">Acılı</span>`;
 
  const unitLabel = item.unit === '₺' ? '' : `/ ${item.unit}`;
 
  el.innerHTML = `
    <div class="item-icon" aria-hidden="true">${item.icon}</div>
    <div class="item-info">
      <div class="item-name">${item.name}</div>
      <div class="item-desc">${item.desc}</div>
      ${badgeHTML}
    </div>
    <div class="item-price-box">
      <div class="item-price">${item.price} ₺</div>
      <div class="item-price-unit">${unitLabel}</div>
    </div>
  `;
  return el;
}
 
// ── Saat ────────────────────────────────────────────
function initClock() {
  const els = [
    document.getElementById('current-time'),
    document.getElementById('sidebar-time')
  ];
  const update = () => {
    const now = new Date();
    const t = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    els.forEach(el => { if (el) el.textContent = t; });
  };
  update();
  setInterval(update, 15000);
}
 
// ── Açık/Kapalı ─────────────────────────────────────
function initOpenStatus() {
  const badge   = document.getElementById('topbar-status');
  const dot     = document.getElementById('status-dot');
  const sdot    = document.getElementById('sidebar-status-dot');
  const sbadge  = document.getElementById('sidebar-open-badge');
 
  const now   = new Date();
  const t     = now.getHours() * 60 + now.getMinutes();
  const isOpen = t >= 7 * 60 && t < 22 * 60;
 
  const text  = isOpen ? '🟢 Açık' : '🔴 Kapalı';
  const color = isOpen ? '#3a9e68' : '#c0392b';
 
  if (badge)  { badge.textContent = text; badge.style.color = color; }
  if (sbadge) { sbadge.textContent = text; sbadge.style.color = color; }
 
  [dot, sdot].forEach(d => {
    if (!d) return;
    d.style.background = color;
    if (!isOpen) d.style.animationName = 'none';
  });
}
 
// ── Hata ────────────────────────────────────────────
function showError(msg) {
  const body = document.getElementById('menu-body');
  if (body) body.innerHTML = `<div style="padding:40px;text-align:center;color:#5a5248;font-size:.85rem;">${msg}</div>`;
}
 