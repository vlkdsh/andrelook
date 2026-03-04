/* =============================================
   ANDRELOOK — js/main.js
   ============================================= */

/* ── Config ─────────────────────────────────── */
const CONFIG = {
  telegram : 'andrelookstore',
  tgText   : (name) => `Здравствуйте! Интересует позиция: «${name}». Подскажите, пожалуйста, наличие и размеры.`,
};

/* ── Product Data ────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: 'Структурированный жакет',
    category: 'suits',
    categoryLabel: 'Костюмы',
    description: 'Жакет прямого силуэта из итальянской шерсти. Фигурный лацкан, приталенная подкладка, два нагрудных кармана.',
    image: '',
    color: '#2B2B28',
  },
  {
    id: 2,
    name: 'Двубортное пальто',
    category: 'outerwear',
    categoryLabel: 'Верхняя одежда',
    description: 'Классическое пальто из плотной шерсти. Двубортная застёжка, широкие лацканы, подкладка из вискозы.',
    image: '',
    color: '#3D3833',
  },
  {
    id: 3,
    name: 'Кашемировый свитер',
    category: 'knitwear',
    categoryLabel: 'Трикотаж',
    description: 'Монгольский кашемир высшего сорта. Мелкая вязка, круглый вырез, объёмный крой.',
    image: '',
    color: '#B5A898',
  },
  {
    id: 4,
    name: 'Льняная рубашка оверсайз',
    category: 'shirts',
    categoryLabel: 'Рубашки',
    description: 'Стираный лён 100%. Удлинённый крой, воротник-стойка, свободный силуэт.',
    image: '',
    color: '#D9D2C6',
  },
  {
    id: 5,
    name: 'Брюки со стрелкой',
    category: 'trousers',
    categoryLabel: 'Брюки',
    description: 'Прямой крой, высокая посадка. Шерсть-стрейч итальянского производства, чёткая стрелка.',
    image: '',
    color: '#5C574F',
  },
  {
    id: 6,
    name: 'Шёлковая блуза',
    category: 'shirts',
    categoryLabel: 'Рубашки',
    description: 'Натуральный шёлк 22 momme. Свободный крой, V-образный вырез, потайные пуговицы.',
    image: '',
    color: '#E8E0D5',
  },
  {
    id: 7,
    name: 'Пуховик-кокон',
    category: 'outerwear',
    categoryLabel: 'Верхняя одежда',
    description: 'Форма кокон, укороченный силуэт. Белый гусиный пух 800 fill power, матовая оболочка.',
    image: '',
    color: '#C5BDB4',
  },
  {
    id: 8,
    name: 'Вязаный кардиган',
    category: 'knitwear',
    categoryLabel: 'Трикотаж',
    description: 'Мериносовая шерсть, крупная вязка. Длинный крой, накладные карманы.',
    image: '',
    color: '#8C8278',
  },
  {
    id: 9,
    name: 'Льняные брюки',
    category: 'trousers',
    categoryLabel: 'Брюки',
    description: 'Лён 100%. Широкий крой, эластичный пояс с завязками. Летняя коллекция.',
    image: '',
    color: '#DDD7CE',
  },
];

/* ── Утилиты ────────────────────────────────── */
function buildTgLink(name) {
  return `https://t.me/${CONFIG.telegram}?text=${encodeURIComponent(CONFIG.tgText(name))}`;
}

/* ── Header ─────────────────────────────────── */
function initHeader() {
  const header    = document.querySelector('.site-header');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!header) return;

  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (!hamburger || !mobileNav) return;
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ── Scroll Reveal ──────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => observer.observe(el));
}

/* ── Modal ──────────────────────────────────── */
function openModal(product) {
  const overlay = document.getElementById('modal-overlay');
  const nameEl  = document.getElementById('modal-product-name');
  const tgBtn   = document.getElementById('modal-tg');
  if (!overlay) return;
  nameEl.textContent = product.name;
  tgBtn.href = buildTgLink(product.name);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  const overlay  = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  if (!overlay) return;
  closeBtn?.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

/* ── Render Products ────────────────────────── */
function createProductCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.dataset.category = product.category;

  const imageHtml = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
    : `<div class="product-card__placeholder" style="background:${product.color}"></div>`;

  card.innerHTML = `
    <div class="product-card__image">${imageHtml}</div>
    <div class="product-card__body">
      <span class="product-card__category">${product.categoryLabel}</span>
      <h2 class="product-card__name">${product.name}</h2>
      <p class="product-card__desc">${product.description}</p>
      <div class="product-card__footer">
        <span class="product-card__price">По запросу</span>
        <button class="btn-inquiry" aria-label="Запросить информацию о ${product.name}">
          <span>Запросить</span>
        </button>
      </div>
    </div>
  `;

  card.querySelector('.btn-inquiry').addEventListener('click', () => openModal(product));
  return card;
}

function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === filter);

  grid.innerHTML = '';

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state"><p>В этой категории пока нет позиций</p></div>`;
    return;
  }

  filtered.forEach((product) => grid.appendChild(createProductCard(product)));
}

/* ── Filters ────────────────────────────────── */
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  if (!buttons.length) return;
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.filter);
    });
  });
}

/* ── Number Counter ─────────────────────────── */
function animateNumbers() {
  const items = document.querySelectorAll('.number[data-target]');
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      let   start  = 0;
      const inc    = target / (1200 / 16);
      const tick   = () => {
        start = Math.min(start + inc, target);
        el.textContent = Math.round(start) + suffix;
        if (start < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  items.forEach((el) => observer.observe(el));
}

/* ── Init ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initReveal();
  initModal();
  initFilters();
  renderProducts();
  animateNumbers();
});
