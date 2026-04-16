/**
 * Tezgah — Menü Render Motoru
 * Veriyi window.BRANCH_MENU_DATA'dan okur (şubeye özel menu-data.js tarafından tanımlanır)
 */

document.addEventListener('DOMContentLoaded', () => {
  const cat = getCategoryFromURL();
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
  return data[cat] ? cat : Object.keys(data)[0]; // varsayılan: ilk kategori
}

// Kategori yükle
function loadCategory(catKey) {
  if (!catKey) return;
  const data = window.BRANCH_MENU_DATA;
  const cat = data[catKey];
  if (!cat) return;

  // Başlık & meta
  document.title = `${cat.name} — ${window.BRANCH_NAME || 'Sarıyer Börekçisi'}`;

  // Topbar
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
}

// Ürün kartı
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

// Saat
function initClock() {
  const el = document.getElementById('current-time');
  if (!el) return;
  const update = () => {
    const now = new Date();
    el.textContent = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  };
  update();
  setInterval(update, 15000);
}

// Açık/Kapalı
function initOpenStatus() {
  const badge = document.getElementById('topbar-status');
  const dot   = document.getElementById('status-dot');
  if (!badge) return;
  const now   = new Date();
  const t     = now.getHours() * 60 + now.getMinutes();
  const isOpen = t >= 7 * 60 && t < 22 * 60;
  badge.textContent = isOpen ? '🟢 Açık' : '🔴 Kapalı';
  badge.style.color = isOpen ? '#3a9e68' : '#c0392b';
  if (dot) dot.style.background = isOpen ? '#3a9e68' : '#c0392b';
  if (!isOpen && dot) dot.style.animationName = 'none';
}

// Hata
function showError(msg) {
  const body = document.getElementById('menu-body');
  if (body) body.innerHTML = `<div style="padding:40px;text-align:center;color:#5a5248;font-size:.85rem;">${msg}</div>`;
}
