/* =============================================
   ANDRELOOK — js/main.js
   ============================================= */

/* ── Config ─────────────────────────────────── */
const CONFIG = {
  telegram : 'andrelookstore',
  tgText   : (name, lang) => {
    const msgs = {
      en: `Hello! I'm interested in: «${name}». Please share availability and size details.`,
      ru: `Здравствуйте! Интересует позиция: «${name}». Подскажите наличие и размеры.`,
      et: `Tere! Olen huvitatud tootest: «${name}». Palun öelge saadavus ja suurused.`,
    };
    return msgs[lang] || msgs.en;
  },
};

/* ── Translations ────────────────────────────── */
const I18N = {
  en: {
    nav_home     : 'Home',
    nav_catalog  : 'Catalog',
    nav_how      : 'How to buy',
    nav_contact  : 'Contact',
    hero_label   : 'World brands · Tallinn · Europe',
    hero_title   : ['Style,', 'quality &', 'attention to detail'],
    hero_title_em: 'quality &',
    hero_sub     : 'Carefully selected pieces that look great and effortlessly transform your wardrobe.',
    hero_cta     : 'View Collection',
    stat_1_num   : '120+',
    stat_1_lbl   : 'Items in catalog',
    stat_2_num   : '30+',
    stat_2_lbl   : 'World brands',
    stat_3_num   : '15',
    stat_3_lbl   : 'Delivery countries',
    col_title    : 'Collection',
    col_all      : 'Full catalog →',
    cat_suits    : 'Suits',
    cat_outer    : 'Outerwear',
    cat_knit     : 'Knitwear',
    cat_shirts   : 'Shirts & Blouses',
    cat_pos1     : '12 items',
    cat_pos2     : '18 items',
    cat_pos3     : '24 items',
    cat_pos4     : '16 items',
    how_title    : 'How to buy',
    how_1_title  : 'You're in Tallinn',
    how_1_text   : 'We'll arrange a personal meeting at a convenient time. You can try on the item and see it in person. If it fits — pay on the spot, cash or transfer.',
    how_2_title  : 'Delivery across Europe',
    how_2_text   : 'We ship after full payment. Shipping cost is calculated individually. Payment by bank transfer.',
    how_3_title  : 'Not in stock?',
    how_3_text   : 'We can order it for you with a 35% deposit. The rest is paid before shipping or at the in-person meeting.',
    how_4_title  : 'We help with sizing',
    how_4_text   : 'Write to us — we'll help you pick the right size and answer all questions. We stay in touch at every step.',
    stmt_label   : 'Our approach',
    stmt_quote   : '«We carefully select pieces that look great and effortlessly transform your wardrobe.»',
    stmt_text    : 'Andrelook is a world brands store with a personal touch. Large selection, size assistance and fast replies. We work for those who appreciate quality — in person in Tallinn or delivered across Europe.',
    contact_title: 'Get in touch',
    contact_sub  : 'Fastest replies are on Telegram.\nWe'll help you choose, size and place your order.',
    contact_btn  : 'Telegram',
    filter_all   : 'All',
    filter_suits : 'Suits',
    filter_outer : 'Outerwear',
    filter_knit  : 'Knitwear',
    filter_shirts: 'Shirts',
    filter_trous : 'Trousers',
    cat_season   : 'Collection 2025',
    inquiry_btn  : 'Inquire',
    on_request   : 'On request',
    modal_label  : 'Request info',
    modal_text   : 'Write to us on Telegram — we'll share availability, sizing and all details.',
    modal_tg     : 'Write on Telegram',
    back_catalog : '← Back to catalog',
    prod_avail   : 'Availability: on request',
    prod_delivery: 'Delivery across Europe',
    prod_meeting : 'Personal meeting in Tallinn',
    footer_copy  : '© 2025 Andrelook · Tallinn',
  },
  ru: {
    nav_home     : 'Главная',
    nav_catalog  : 'Каталог',
    nav_how      : 'Как купить',
    nav_contact  : 'Контакты',
    hero_label   : 'Мировые бренды · Таллин · Европа',
    hero_title   : ['Стиль,', 'качество и', 'внимание к деталям'],
    hero_title_em: 'качество и',
    hero_sub     : 'Тщательно подобранные вещи, которые красиво сидят и легко преображают ваш гардероб.',
    hero_cta     : 'Смотреть коллекцию',
    stat_1_num   : '120+',
    stat_1_lbl   : 'Позиций в каталоге',
    stat_2_num   : '30+',
    stat_2_lbl   : 'Мировых брендов',
    stat_3_num   : '15',
    stat_3_lbl   : 'Стран доставки',
    col_title    : 'Коллекция',
    col_all      : 'Весь каталог →',
    cat_suits    : 'Костюмы',
    cat_outer    : 'Верхняя одежда',
    cat_knit     : 'Трикотаж',
    cat_shirts   : 'Рубашки и блузы',
    cat_pos1     : '12 позиций',
    cat_pos2     : '18 позиций',
    cat_pos3     : '24 позиции',
    cat_pos4     : '16 позиций',
    how_title    : 'Как купить',
    how_1_title  : 'Вы в Таллине',
    how_1_text   : 'Договоримся о личной встрече в удобное время. Примерите вещь и увидите её вживую. Если всё подходит — оплата на месте наличными или переводом.',
    how_2_title  : 'Доставка по Европе',
    how_2_text   : 'Отправляем заказы после полной оплаты. Стоимость доставки рассчитывается индивидуально. Оплата банковским переводом.',
    how_3_title  : 'Нет в наличии?',
    how_3_text   : 'Привезём под заказ по предоплате 35%. Остаток — перед отправкой или при личной встрече, если вы в Таллине.',
    how_4_title  : 'Помогаем с выбором',
    how_4_text   : 'Напишите нам — поможем подобрать размер и ответим на все вопросы. Остаёмся на связи на каждом этапе.',
    stmt_label   : 'Наш подход',
    stmt_quote   : '«Мы тщательно подбираем вещи, которые красиво сидят и легко преображают ваш гардероб.»',
    stmt_text    : 'Andrelook — магазин мировых брендов с личным подходом. Большой ассортимент, помощь с размером и быстрые ответы. Работаем для тех, кто ценит качество — вживую в Таллине или с доставкой по Европе.',
    contact_title: 'Написать нам',
    contact_sub  : 'Самые быстрые ответы — в Telegram.\nПоможем с выбором, размером и оформлением заказа.',
    contact_btn  : 'Telegram',
    filter_all   : 'Все',
    filter_suits : 'Костюмы',
    filter_outer : 'Верхняя одежда',
    filter_knit  : 'Трикотаж',
    filter_shirts: 'Рубашки',
    filter_trous : 'Брюки',
    cat_season   : 'Коллекция 2025',
    inquiry_btn  : 'Запросить',
    on_request   : 'По запросу',
    modal_label  : 'Запросить информацию',
    modal_text   : 'Напишите нам в Telegram — расскажем о наличии, размерах и всех деталях.',
    modal_tg     : 'Написать в Telegram',
    back_catalog : '← Назад в каталог',
    prod_avail   : 'Наличие: по запросу',
    prod_delivery: 'Доставка по Европе',
    prod_meeting : 'Личная встреча в Таллине',
    footer_copy  : '© 2025 Andrelook · Таллин',
  },
  et: {
    nav_home     : 'Avaleht',
    nav_catalog  : 'Kataloog',
    nav_how      : 'Kuidas osta',
    nav_contact  : 'Kontakt',
    hero_label   : 'Maailma brändid · Tallinn · Euroopa',
    hero_title   : ['Stiil,', 'kvaliteet ja', 'tähelepanu detailidele'],
    hero_title_em: 'kvaliteet ja',
    hero_sub     : 'Hoolikalt valitud riided, mis istuvad hästi ja muudavad teie garderoobi effortlessly.',
    hero_cta     : 'Vaata kollektsiooni',
    stat_1_num   : '120+',
    stat_1_lbl   : 'Toodet kataloogis',
    stat_2_num   : '30+',
    stat_2_lbl   : 'Maailma brändi',
    stat_3_num   : '15',
    stat_3_lbl   : 'Tarne riiki',
    col_title    : 'Kollektsioon',
    col_all      : 'Kogu kataloog →',
    cat_suits    : 'Ülikonnad',
    cat_outer    : 'Pealisrõivad',
    cat_knit     : 'Kudumid',
    cat_shirts   : 'Särgid & Pluusid',
    cat_pos1     : '12 toodet',
    cat_pos2     : '18 toodet',
    cat_pos3     : '24 toodet',
    cat_pos4     : '16 toodet',
    how_title    : 'Kuidas osta',
    how_1_title  : 'Oled Tallinnas',
    how_1_text   : 'Lepime kokku isikliku kohtumise sobival ajal. Saad toodet proovida ja näha elavalt. Kui sobib — maksa kohapeal sularahas või ülekandega.',
    how_2_title  : 'Tarne üle Euroopa',
    how_2_text   : 'Saadame tellimused pärast täielikku tasumist. Tarnekulud arvutatakse individuaalselt. Makse pangaülekandega.',
    how_3_title  : 'Pole laos?',
    how_3_text   : 'Toome tellimuse alusel 35% ettemaksuga. Ülejäänud summa tasutakse enne saatmist või kohtumisel.',
    how_4_title  : 'Aitame suuruse valikul',
    how_4_text   : 'Kirjuta meile — aitame leida õige suuruse ja vastame kõigile küsimustele. Oleme kättesaadavad igal sammul.',
    stmt_label   : 'Meie lähenemine',
    stmt_quote   : '«Valime hoolikalt riideid, mis istuvad hästi ja muudavad su garderoobi.»',
    stmt_text    : 'Andrelook on maailma brändide pood isikliku lähenemisega. Suur valik, suuruse abi ja kiired vastused. Töötame nende jaoks, kes hindavad kvaliteeti — isiklikult Tallinnas või tarniga üle Euroopa.',
    contact_title: 'Võta ühendust',
    contact_sub  : 'Kiiremad vastused on Telegramis.\nAitame valida, suurust ja tellimust vormistada.',
    contact_btn  : 'Telegram',
    filter_all   : 'Kõik',
    filter_suits : 'Ülikonnad',
    filter_outer : 'Pealisrõivad',
    filter_knit  : 'Kudumid',
    filter_shirts: 'Särgid',
    filter_trous : 'Püksid',
    cat_season   : 'Kollektsioon 2025',
    inquiry_btn  : 'Küsi',
    on_request   : 'Päringul',
    modal_label  : 'Küsi infot',
    modal_text   : 'Kirjuta meile Telegramis — jagame saadavust, suurusi ja kõiki üksikasju.',
    modal_tg     : 'Kirjuta Telegramis',
    back_catalog : '← Tagasi kataloogi',
    prod_avail   : 'Saadavus: päringul',
    prod_delivery: 'Tarne üle Euroopa',
    prod_meeting : 'Isiklik kohtumine Tallinnas',
    footer_copy  : '© 2025 Andrelook · Tallinn',
  },
};

/* ── Products ────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    names   : { en: 'Structured Blazer', ru: 'Структурированный жакет', et: 'Struktureeritud jakk' },
    category: 'suits',
    cats    : { en: 'Suits', ru: 'Костюмы', et: 'Ülikonnad' },
    descs   : {
      en: 'Straight-cut blazer in Italian wool. Shaped lapel, fitted lining, two chest pockets. A wardrobe staple that works for both office and evening.',
      ru: 'Жакет прямого силуэта из итальянской шерсти. Фигурный лацкан, приталенная подкладка, два нагрудных кармана. Универсальная вещь для офиса и вечера.',
      et: 'Sirge lõikega jakk Itaalia villast. Kujundatud reväärid, tailored vooder, kaks rinnataskut. Universaalne riideese kontoris ja õhtul kandmiseks.',
    },
    images  : [],
    color   : '#2B2B28',
    brand   : 'Zara / Massimo Dutti',
  },
  {
    id: 2,
    names   : { en: 'Double-Breasted Coat', ru: 'Двубортное пальто', et: 'Kahereana mantel' },
    category: 'outerwear',
    cats    : { en: 'Outerwear', ru: 'Верхняя одежда', et: 'Pealisrõivad' },
    descs   : {
      en: 'Classic coat in heavy wool blend. Double-breasted closure, wide lapels, viscose lining. Timeless silhouette for every season.',
      ru: 'Классическое пальто из плотной смеси шерсти. Двубортная застёжка, широкие лацканы, подкладка из вискозы. Вневременной силуэт на любой сезон.',
      et: 'Klassikaline mantel tihedast villasegust. Kahereane kinnistus, laiad reväärid, viskoos vooder. Ajatu siluett igaks hooajaks.',
    },
    images  : [],
    color   : '#3D3833',
    brand   : 'Max Mara',
  },
  {
    id: 3,
    names   : { en: 'Cashmere Sweater', ru: 'Кашемировый свитер', et: 'Kašmiirpunn' },
    category: 'knitwear',
    cats    : { en: 'Knitwear', ru: 'Трикотаж', et: 'Kudumid' },
    descs   : {
      en: 'Premium Mongolian cashmere. Fine knit, round neck, oversized cut. Shoulder seam shifted for a relaxed, elevated look.',
      ru: 'Монгольский кашемир высшего сорта. Мелкая вязка, круглый вырез, объёмный крой. Плечевой шов смещён для расслабленного образа.',
      et: 'Premium Mongoolia kaašmiir. Peen kude, ümar kaelaava, oversized lõige. Nihutatud õlaõmblus lõdvunud stiili jaoks.',
    },
    images  : [],
    color   : '#B5A898',
    brand   : 'Loro Piana',
  },
  {
    id: 4,
    names   : { en: 'Oversized Linen Shirt', ru: 'Льняная рубашка оверсайз', et: 'Lina särgid oversized' },
    category: 'shirts',
    cats    : { en: 'Shirts', ru: 'Рубашки', et: 'Särgid' },
    descs   : {
      en: '100% washed linen. Elongated cut, stand collar, no-button cuffs. Effortlessly cool for all seasons.',
      ru: '100% стираный лён. Удлинённый крой, воротник-стойка, манжеты без пуговиц. Беззаботный стиль для любого сезона.',
      et: '100% pestud lina. Pikendatud lõige, püstkraed, nuputa mansettid. Vaevata lahe igal aastaajal.',
    },
    images  : [],
    color   : '#D9D2C6',
    brand   : 'Loro Piana / Brunello',
  },
  {
    id: 5,
    names   : { en: 'Tailored Trousers', ru: 'Брюки со стрелкой', et: 'Püksid voltidega' },
    category: 'trousers',
    cats    : { en: 'Trousers', ru: 'Брюки', et: 'Püksid' },
    descs   : {
      en: 'Straight cut, high waist. Italian stretch wool, sharp crease, side pockets. Elegant and comfortable all day.',
      ru: 'Прямой крой, высокая посадка. Итальянская шерсть-стрейч, чёткая стрелка, боковые карманы. Элегантность и комфорт на весь день.',
      et: 'Sirge lõige, kõrge vöökohad. Itaalia stretch vill, terav voltide joon, külgtaskud. Elegantne ja mugav terve päeva.',
    },
    images  : [],
    color   : '#5C574F',
    brand   : 'Theory / Acne Studios',
  },
  {
    id: 6,
    names   : { en: 'Silk Blouse', ru: 'Шёлковая блуза', et: 'Siidpluus' },
    category: 'shirts',
    cats    : { en: 'Shirts', ru: 'Рубашки', et: 'Särgid' },
    descs   : {
      en: 'Natural silk 22 momme. Relaxed cut, V-neck, concealed buttons. Luxurious drape for effortless dressing.',
      ru: 'Натуральный шёлк 22 momme. Свободный крой, V-образный вырез, потайные пуговицы. Роскошное падение ткани для безупречного образа.',
      et: 'Naturaalne siid 22 momme. Vaba lõige, V-kaelus, varjatud nupud. Luksuslik kukkumine vaevata riietumiseks.',
    },
    images  : [],
    color   : '#E8E0D5',
    brand   : 'Valentino / Celine',
  },
  {
    id: 7,
    names   : { en: 'Cocoon Puffer', ru: 'Пуховик-кокон', et: 'Kookon-sulepuhk' },
    category: 'outerwear',
    cats    : { en: 'Outerwear', ru: 'Верхняя одежда', et: 'Pealisrõivad' },
    descs   : {
      en: 'Cocoon silhouette, cropped cut. White goose down 800 fill power, matte nylon shell. Maximum warmth, minimal volume.',
      ru: 'Силуэт кокон, укороченный крой. Белый гусиный пух 800 fill power, матовая нейлоновая оболочка. Максимум тепла, минимум объёма.',
      et: 'Kookonsiluett, lühendatud lõige. Valge haneuled 800 fill power, matt nailon kate. Maksimaalne soojus, minimaalne maht.',
    },
    images  : [],
    color   : '#C5BDB4',
    brand   : 'Moncler',
  },
  {
    id: 8,
    names   : { en: 'Chunky Cardigan', ru: 'Вязаный кардиган', et: 'Jäme kardigan' },
    category: 'knitwear',
    cats    : { en: 'Knitwear', ru: 'Трикотаж', et: 'Kudumid' },
    descs   : {
      en: 'Merino wool, chunky knit. Long cut, patch pockets, buffalo horn buttons. The perfect oversized layer.',
      ru: 'Мериносовая шерсть, крупная вязка. Длинный крой, накладные карманы, пуговицы из буйволиного рога. Идеальный оверсайз.',
      et: 'Meriinosvill, jäme kude. Pikk lõige, pealeõmmeldud taskud, pühvelsarve nupud. Täiuslik oversized kiht.',
    },
    images  : [],
    color   : '#8C8278',
    brand   : 'Toteme / Aritzia',
  },
  {
    id: 9,
    names   : { en: 'Wide Linen Trousers', ru: 'Льняные брюки', et: 'Laiad linapüksid' },
    category: 'trousers',
    cats    : { en: 'Trousers', ru: 'Брюки', et: 'Püksid' },
    descs   : {
      en: '100% linen. Wide cut, elastic drawstring waist. Relaxed and breathable — summer collection.',
      ru: '100% лён. Широкий крой, эластичный пояс с завязками. Свободно и дышаще — летняя коллекция.',
      et: '100% lina. Lai lõige, elastne nöörpants. Lõdv ja hingav — suvekollektsioon.',
    },
    images  : [],
    color   : '#DDD7CE',
    brand   : 'Zara Premium / Arket',
  },
];

/* ── Language ────────────────────────────────── */
let currentLang = localStorage.getItem('al_lang') || 'ru';

function t(key) {
  return (I18N[currentLang] || I18N.en)[key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('al_lang', lang);
  applyTranslations();
  renderProducts(currentFilter);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });

  /* Hero title with em */
  const heroLines = document.querySelectorAll('.hero-line');
  const titleLines = t('hero_title');
  const emLine     = t('hero_title_em');
  heroLines.forEach((el, i) => {
    if (titleLines[i] === emLine) {
      el.innerHTML = `<em>${titleLines[i]}</em>`;
    } else {
      el.textContent = titleLines[i];
    }
  });

  /* Contact sub with line break */
  const contactSub = document.querySelector('[data-i18n="contact_sub"]');
  if (contactSub) {
    contactSub.innerHTML = t('contact_sub').replace('\n', '<br>');
  }

  /* Active lang button */
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  /* html lang attr */
  document.documentElement.lang = currentLang;
}

/* ── Build Telegram link ─────────────────────── */
function buildTgLink(name) {
  return `https://t.me/${CONFIG.telegram}?text=${encodeURIComponent(CONFIG.tgText(name, currentLang))}`;
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

  /* Language buttons */
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  /* Hamburger */
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
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );
  els.forEach((el) => observer.observe(el));
}

/* ── Modal ──────────────────────────────────── */
function openModal(product) {
  const overlay = document.getElementById('modal-overlay');
  const nameEl  = document.getElementById('modal-product-name');
  const tgBtn   = document.getElementById('modal-tg');
  const labelEl = document.getElementById('modal-label-text');
  const textEl  = document.getElementById('modal-body-text');
  if (!overlay) return;

  const name = product.names[currentLang] || product.names.en;
  nameEl.textContent  = name;
  tgBtn.href          = buildTgLink(name);
  tgBtn.textContent   = t('modal_tg');
  if (labelEl) labelEl.textContent = t('modal_label');
  if (textEl)  textEl.textContent  = t('modal_text');

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

/* ── Product Cards ──────────────────────────── */
function createProductCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.dataset.category = product.category;

  const name = product.names[currentLang] || product.names.en;
  const cat  = product.cats[currentLang]  || product.cats.en;

  const imageHtml = (product.images && product.images.length)
    ? `<img src="${product.images[0]}" alt="${name}" loading="lazy">`
    : `<div class="product-card__placeholder" style="background:${product.color}">
         <span>${product.brand}</span>
       </div>`;

  card.innerHTML = `
    <a href="product.html?id=${product.id}" class="product-card__image-link">
      <div class="product-card__image">${imageHtml}</div>
    </a>
    <div class="product-card__body">
      <span class="product-card__category">${cat}</span>
      <a href="product.html?id=${product.id}" class="product-card__name-link">
        <h2 class="product-card__name">${name}</h2>
      </a>
      <div class="product-card__footer">
        <span class="product-card__price">${t('on_request')}</span>
        <button class="btn-inquiry">
          <span>${t('inquiry_btn')}</span>
        </button>
      </div>
    </div>
  `;

  card.querySelector('.btn-inquiry').addEventListener('click', () => openModal(product));
  return card;
}

let currentFilter = 'all';

function renderProducts(filter = 'all') {
  currentFilter = filter;
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === filter);

  grid.innerHTML = '';

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state"><p>—</p></div>`;
    return;
  }

  filtered.forEach((p) => grid.appendChild(createProductCard(p)));
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

/* ── Product Detail Page ────────────────────── */
function initProductPage() {
  const params    = new URLSearchParams(location.search);
  const id        = parseInt(params.get('id'), 10);
  const product   = PRODUCTS.find((p) => p.id === id);
  const container = document.getElementById('product-detail');
  if (!container || !product) {
    if (container) container.innerHTML = '<p style="padding:4rem;text-align:center">Product not found</p>';
    return;
  }

  function render() {
    const name  = product.names[currentLang] || product.names.en;
    const cat   = product.cats[currentLang]  || product.cats.en;
    const desc  = product.descs[currentLang] || product.descs.en;
    const imgs  = product.images && product.images.length ? product.images : [];
    const hasImgs = imgs.length > 0;

    /* Update page title */
    document.title = `${name} — Andrelook`;

    /* Back link */
    document.querySelectorAll('[data-i18n="back_catalog"]').forEach(el => el.textContent = t('back_catalog'));

    /* Main image */
    const mainImgEl = document.getElementById('product-main-img');
    if (mainImgEl) {
      if (hasImgs) {
        mainImgEl.innerHTML = `<img src="${imgs[0]}" alt="${name}" id="active-img">`;
      } else {
        mainImgEl.innerHTML = `
          <div class="product-placeholder-lg" style="background:${product.color}">
            <span>${product.brand}</span>
          </div>`;
      }
    }

    /* Thumbnails */
    const thumbsEl = document.getElementById('product-thumbs');
    if (thumbsEl) {
      if (imgs.length > 1) {
        thumbsEl.innerHTML = imgs.map((src, i) => `
          <button class="thumb${i===0?' active':''}" data-src="${src}">
            <img src="${src}" alt="${name} ${i+1}">
          </button>`).join('');
        thumbsEl.querySelectorAll('.thumb').forEach(btn => {
          btn.addEventListener('click', () => {
            document.getElementById('active-img').src = btn.dataset.src;
            thumbsEl.querySelectorAll('.thumb').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
          });
        });
      } else {
        thumbsEl.innerHTML = '';
      }
    }

    /* Info */
    const infoEl = document.getElementById('product-info');
    if (infoEl) {
      infoEl.innerHTML = `
        <p class="product-detail__cat">${cat}</p>
        <h1 class="product-detail__name">${name}</h1>
        <p class="product-detail__brand">${product.brand}</p>
        <p class="product-detail__desc">${desc}</p>
        <ul class="product-detail__meta">
          <li>${t('prod_avail')}</li>
          <li>${t('prod_delivery')}</li>
          <li>${t('prod_meeting')}</li>
        </ul>
        <button class="btn-primary product-detail__cta" id="detail-inquiry-btn">
          <span>${t('inquiry_btn')}</span>
        </button>
      `;
      document.getElementById('detail-inquiry-btn').addEventListener('click', () => openModal(product));
    }
  }

  render();

  /* Re-render on lang change */
  const origSetLang = setLang;
  window.setLang = function(lang) {
    origSetLang(lang);
    render();
  };
}

/* ── URL filter on catalog page ─────────────── */
function initCatalogURLFilter() {
  const params = new URLSearchParams(location.search);
  const filter = params.get('filter');
  if (filter) {
    const btn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
    if (btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(filter);
    }
  }
}

/* ── Init ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  applyTranslations();
  initReveal();
  initModal();
  initFilters();
  renderProducts();
  animateNumbers();

  if (document.getElementById('product-detail')) {
    initProductPage();
  }

  if (document.getElementById('products-grid')) {
    initCatalogURLFilter();
  }
});
