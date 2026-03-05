/* =============================================
   ANDRELOOK — js/main.js
   ============================================= */

/* ── Config ─────────────────────────────────── */
const CONFIG = {
  telegram : 'andrelookstore',
  tgText   : (name, lang) => {
    const msgs = {
      en: `Hello! I'm interested in: «${name}». Please share availability and sizes.`,
      ru: `Здравствуйте! Интересует позиция: «${name}». Подскажите наличие и размеры.`,
      et: `Tere! Olen huvitatud tootest: «${name}». Palun öelge saadavus ja suurused.`,
    };
    return msgs[lang] || msgs.en;
  },
};

/* ── Ticker phrases per language ─────────────── */
const TICKER_PHRASES = {
  ru: [
    'Смотрите каталог',
    'Ничего не покупайте',
    'Просто смотрите',
    'Ладно, можно купить',
    'Мы не против',
    'Хороший выбор',
    'Мы так и знали',
  ],
  en: [
    'Browse the catalog',
    'Don\'t buy anything',
    'Just look',
    'Okay, you can buy',
    'We don\'t mind',
    'Good choice',
    'We knew it',
  ],
  et: [
    'Vaadake kataloogi',
    'Ärge ostke midagi',
    'Lihtsalt vaadake',
    'Okei, võite osta',
    'Me ei pane pahaks',
    'Hea valik',
    'Me teadsime seda',
  ],
};

/* ── Translations ────────────────────────────── */
const I18N = {
  en: {
    nav_home:'Home', nav_catalog:'Catalog', nav_how:'How to buy', nav_contact:'Contact',
    hero_location:'Tallinn, Estonia',
    hero_delivery:'Delivery across Europe',
    hero_tagline:'World brands · Personal approach',
    hero_cta:'View Collection',
    hero_note:'Tallinn · Europe',
    stat_1_lbl:'Items in catalog', stat_2_lbl:'Happy clients', stat_3_lbl:'Years on market',
    col_title:'Collection', col_all:'Full catalog →',
    cat_suits:'Suits', cat_outer:'Outerwear', cat_knit:'Knitwear', cat_shirts:'Shirts & Blouses',
    cat_pos1:'12 items', cat_pos2:'18 items', cat_pos3:'24 items', cat_pos4:'16 items',
    how_title:'How to buy',
    reviews_kicker:'Reviews', reviews_title:'What customers say',
    how_1_title:'You\'re in Tallinn',
    how_1_text:'We\'ll arrange a personal meeting at a convenient time. Try on the item in person. If it fits — pay on the spot, cash or transfer.',
    how_2_title:'Delivery across Europe',
    how_2_text:'We ship after full payment. Shipping cost calculated individually. Payment by bank transfer.',
    how_3_title:'Not in stock?',
    how_3_text:'We can order it for you with a 35% deposit. The rest is paid before shipping or at the in-person meeting.',
    how_4_title:'We help with sizing',
    how_4_text:'Write to us — we\'ll help you pick the right size and answer all questions. We stay in touch at every step.',
    stmt_label:'Our approach',
    stmt_quote:'«We carefully select pieces that look great and effortlessly transform your wardrobe.»',
    stmt_text:'Andrelook is a world brands store with a personal touch. Large selection, size assistance and fast replies. For those who appreciate quality — in Tallinn or delivered across Europe.',
    contact_title:'Get in touch', contact_sub:'Fastest replies are on Telegram.\nWe\'ll help you choose, size and order.',
    contact_btn:'Telegram',
    filter_all:'All', filter_warm:'Warm Jackets', filter_vests:'Vests',
    filter_light:'Light Jackets', filter_hoodies:'Hoodies', filter_tshirts:'T-Shirts',
    cat_season:'Collection 2025',
    inquiry_btn:'Inquire', on_request:'On request',
    modal_label:'Request info',
    modal_text:'Write to us on Telegram — we\'ll share availability, sizing and all details.',
    modal_tg:'Write on Telegram',
    back_catalog:'← Back to catalog',
    prod_avail:'Availability: on request', prod_delivery:'Delivery across Europe', prod_meeting:'Personal meeting in Tallinn',
    footer_copy:'© 2025 Andrelook',
  },
  ru: {
    nav_home:'Главная', nav_catalog:'Каталог', nav_how:'Как купить', nav_contact:'Контакты',
    hero_location:'Таллин, Эстония',
    hero_delivery:'Доставка по Европе',
    hero_tagline:'Мировые бренды · Личный подход',
    hero_cta:'Смотреть коллекцию',
    hero_note:'Таллин · Европа',
    stat_1_lbl:'Позиций в каталоге', stat_2_lbl:'Довольных клиентов', stat_3_lbl:'Года на рынке',
    col_title:'Коллекция', col_all:'Весь каталог →',
    cat_suits:'Костюмы', cat_outer:'Верхняя одежда', cat_knit:'Трикотаж', cat_shirts:'Рубашки и блузы',
    cat_pos1:'12 позиций', cat_pos2:'18 позиций', cat_pos3:'24 позиции', cat_pos4:'16 позиций',
    how_title:'Как купить', reviews_kicker:'Отзывы', reviews_title:'Что говорят покупатели',
    how_1_title:'Вы в Таллине',
    how_1_text:'Договоримся о личной встрече в удобное время. Примерите вещь и увидите её вживую. Если всё подходит — оплата на месте наличными или переводом.',
    how_2_title:'Доставка по Европе',
    how_2_text:'Отправляем заказы после полной оплаты. Стоимость доставки рассчитывается индивидуально. Оплата банковским переводом.',
    how_3_title:'Нет в наличии?',
    how_3_text:'Привезём под заказ по предоплате 35%. Остаток — перед отправкой или при личной встрече, если вы в Таллине.',
    how_4_title:'Помогаем с выбором',
    how_4_text:'Напишите нам — поможем подобрать размер и ответим на все вопросы. Остаёмся на связи на каждом этапе.',
    stmt_label:'Наш подход',
    stmt_quote:'«Мы тщательно подбираем вещи, которые красиво сидят и легко преображают ваш гардероб.»',
    stmt_text:'Andrelook — магазин мировых брендов с личным подходом. Большой ассортимент, помощь с размером и быстрые ответы. Работаем для тех, кто ценит качество — вживую в Таллине или с доставкой по Европе.',
    contact_title:'Написать нам', contact_sub:'Самые быстрые ответы — в Telegram.\nПоможем с выбором, размером и оформлением заказа.',
    contact_btn:'Telegram',
    filter_all:'Все', filter_warm:'Тёплые куртки', filter_vests:'Жилетки',
    filter_light:'Лёгкие куртки', filter_hoodies:'Кофты', filter_tshirts:'Футболки',
    cat_season:'Коллекция 2025',
    inquiry_btn:'Запросить', on_request:'По запросу',
    modal_label:'Запросить информацию',
    modal_text:'Напишите нам в Telegram — расскажем о наличии, размерах и всех деталях.',
    modal_tg:'Написать в Telegram',
    back_catalog:'← Назад в каталог',
    prod_avail:'Наличие: по запросу', prod_delivery:'Доставка по Европе', prod_meeting:'Личная встреча в Таллине',
    footer_copy:'© 2025 Andrelook',
  },
  et: {
    nav_home:'Avaleht', nav_catalog:'Kataloog', nav_how:'Kuidas osta', nav_contact:'Kontakt',
    hero_location:'Tallinn, Eesti',
    hero_delivery:'Tarne üle Euroopa',
    hero_tagline:'Maailma brändid · Isiklik lähenemine',
    hero_cta:'Vaata kollektsiooni',
    hero_note:'Tallinn · Euroopa',
    stat_1_lbl:'Toodet kataloogis', stat_2_lbl:'Rahulolev klient', stat_3_lbl:'Aastat turul',
    col_title:'Kollektsioon', col_all:'Kogu kataloog →',
    cat_suits:'Ülikonnad', cat_outer:'Pealisrõivad', cat_knit:'Kudumid', cat_shirts:'Särgid & Pluusid',
    cat_pos1:'12 toodet', cat_pos2:'18 toodet', cat_pos3:'24 toodet', cat_pos4:'16 toodet',
    how_title:'Kuidas osta', reviews_kicker:'Arvustused', reviews_title:'Mida kliendid ütlevad',
    how_1_title:'Oled Tallinnas',
    how_1_text:'Lepime kokku isikliku kohtumise sobival ajal. Saad toodet proovida elavalt. Kui sobib — maksa kohapeal.',
    how_2_title:'Tarne üle Euroopa',
    how_2_text:'Saadame tellimused pärast täielikku tasumist. Tarnekulud arvutatakse individuaalselt. Makse pangaülekandega.',
    how_3_title:'Pole laos?',
    how_3_text:'Toome tellimuse alusel 35% ettemaksuga. Ülejäänud tasutakse enne saatmist või kohtumisel.',
    how_4_title:'Aitame suuruse valikul',
    how_4_text:'Kirjuta meile — aitame leida õige suuruse ja vastame kõigile küsimustele. Oleme kättesaadavad igal sammul.',
    stmt_label:'Meie lähenemine',
    stmt_quote:'«Valime hoolikalt riideid, mis istuvad hästi ja muudavad su garderoobi.»',
    stmt_text:'Andrelook on maailma brändide pood isikliku lähenemisega. Suur valik, suuruse abi ja kiired vastused. Tallinnas isiklikult või tarniga üle Euroopa.',
    contact_title:'Võta ühendust', contact_sub:'Kiiremad vastused on Telegramis.\nAitame valida ja tellimust vormistada.',
    contact_btn:'Telegram',
    filter_all:'Kõik', filter_warm:'Soojad jakid', filter_vests:'Vestid',
    filter_light:'Kerged jakid', filter_hoodies:'Kampsunid', filter_tshirts:'T-särgid',
    cat_season:'Kollektsioon 2025',
    inquiry_btn:'Küsi', on_request:'Päringul',
    modal_label:'Küsi infot',
    modal_text:'Kirjuta meile Telegramis — jagame saadavust, suurusi ja kõiki üksikasju.',
    modal_tg:'Kirjuta Telegramis',
    back_catalog:'← Tagasi kataloogi',
    prod_avail:'Saadavus: päringul', prod_delivery:'Tarne üle Euroopa', prod_meeting:'Isiklik kohtumine Tallinnas',
    footer_copy:'© 2025 Andrelook',
  },
};

/* ── Products ────────────────────────────────── */
const PRODUCTS = [
  // ─ ТЁПЛЫЕ КУРТКИ ─────────────────────────────
  {
    id: 1,
    names: {
      en: 'Moncler Maya Down Jacket',
      ru: 'Пуховик Moncler Maya',
      et: 'Moncler Maya unejope',
    },
    category: 'warm-jackets',
    cats: { en: 'Warm Jackets', ru: 'Тёплые куртки', et: 'Soojad jakid' },
    descs: {
      ru: 'Пуховик Moncler Maya 2024. Обновлённый ярлык с актуальной датой. Стальная гравировка на молнии. Улучшенный пух — куртка объёмнее и теплее. Специальная ткань: цвет и блеск максимально близки к оригиналу — не слишком глянцево и не матово. Три идеально выверенные линии строчки: плечо, треугольник, горизонталь. Логотип из 100% кашемира — точные оттенки синего и красного, как в оригинале.',
      en: 'Moncler Maya Down Jacket 2024. Updated washing label with latest date. Steel-engraved zipper. More puffy with better down fill. Custom fabric — colors and brightness perfectly match retail, not too shiny, not too matte. Three perfectly integrated lines: shoulder, triangle, horizontal. 100% cashmere cock logo with accurate navy and red tones.',
      et: 'Moncler Maya unejope 2024. Uuendatud pesusildi kuupäev. Terasest graveeritud tõmblukk. Paksem ja soojem täidisega. Kohandatud kangas — värvid ja läige vastavad täpselt originaalile. Kolm täiuslikult integreeritud joont. 100% kaašmiir logo.',
    },
    images: [
      'images/moncler-maya-1.jpg',
      'images/moncler-maya-2.jpg',
      'images/moncler-maya-3.jpg',
      'images/moncler-maya-4.jpg',
      'images/moncler-maya-5.jpg',
      'images/moncler-maya-6.jpg',
    ],
    color: '#1C1C1A',
    brand: 'Moncler',
  },
  {
    id: 2,
    names: {
      en: 'Parajumpers Tyrik Hooded Puffer Jacket',
      ru: 'Parajumpers Tyrik пуховик с капюшоном',
      et: 'Parajumpers Tyrik kapuutsiga unejope',
    },
    category: 'warm-jackets',
    cats: { en: 'Warm Jackets', ru: 'Тёплые куртки', et: 'Soojad jakid' },
    descs: { ru: '', en: '', et: '' },
    images: [
      'images/parajumpers-tyrik-1.jpg',
      'images/parajumpers-tyrik-2.jpg',
    ],
    color: '#1C2333',
    brand: 'Parajumpers',
  },
  {
    id: 3,
    names: {
      en: 'Moncler Vezere Down Jacket',
      ru: 'Пуховик Moncler Vezere',
      et: 'Moncler Vezere unejope',
    },
    category: 'warm-jackets',
    cats: { en: 'Warm Jackets', ru: 'Тёплые куртки', et: 'Soojad jakid' },
    descs: {
      en: 'The fabric is its biggest feature. It has both the softness of cotton and the smoothness of silk — very soft and comfortable, just like a baby\'s skin. Light and weightless when worn, completely different from ordinary nylon. In the entire Chinese fabric production base, only 2 factories can produce it. The cost of fabric is 2.5× that of other ordinary fabrics.',
      ru: 'Главная особенность — ткань. Она сочетает мягкость хлопка и гладкость шёлка — невероятно нежная на ощупь, как кожа ребёнка. Лёгкая и невесомая в носке, совершенно не похожа на обычный нейлон. Во всей производственной базе Китая только 2 фабрики умеют её делать — наш поставщик одна из них. Стоимость ткани в 2.5 раза выше обычной.',
      et: 'Peamine eripära on kangas. Sellel on nii puuvilla pehmus kui siidi siledus — väga pehme ja mugav, nagu lapse nahk. Kerge ja kaaluta, täiesti erinev tavalisest nailonist. Kogu Hiina tootmisbaasis suudab seda toota vaid 2 tehast. Kanga maksumus on 2.5× kõrgem tavalisest.',
    },
    images: [
      'images/moncler-vezere-1.jpg',
      'images/moncler-vezere-2.jpg',
    ],
    color: '#1A1A1A',
    brand: 'Moncler',
  },
  {
    id: 4,
    names: {
      en: 'Moncler Bormes Down Vest',
      ru: 'Пуховый жилет Moncler Bormes',
      et: 'Moncler Bormes sulepuhk vest',
    },
    category: 'vests',
    cats: { en: 'Vests', ru: 'Жилетки', et: 'Vestid' },
    descs: { ru: '', en: '', et: '' },
    images: [
      'images/moncler-bormes-1.jpg',
      'images/moncler-bormes-2.jpg',
      'images/moncler-bormes-3.jpg',
    ],
    color: '#1A1A1A',
    brand: 'Moncler',
  },
  {
    id: 5,
    names: {
      en: 'Parajumpers Jeordie Down Vest',
      ru: 'Пуховый жилет Parajumpers Jeordie',
      et: 'Parajumpers Jeordie sulepuhk vest',
    },
    category: 'vests',
    cats: { en: 'Vests', ru: 'Жилетки', et: 'Vestid' },
    descs: { ru: '', en: '', et: '' },
    images: [
      'images/parajumpers-jeordie-1.jpg',
      'images/parajumpers-jeordie-2.jpg',
    ],
    color: '#1C2333',
    brand: 'Parajumpers',
  },
  {
    id: 6,
    names: {
      en: 'Moncler Tibb Logo-Patch Padded Gilet',
      ru: 'Стёганый жилет Moncler Tibb',
      et: 'Moncler Tibb logoga täidisega vest',
    },
    category: 'vests',
    cats: { en: 'Vests', ru: 'Жилетки', et: 'Vestid' },
    descs: { ru: '', en: '', et: '' },
    images: [
      'images/moncler-tibb-1.jpg',
      'images/moncler-tibb-2.jpg',
    ],
    color: '#1A1A1A',
    brand: 'Moncler',
  },
  {
    id: 7,
    names: {
      en: 'Moncler Galion Hooded Jacket',
      ru: 'Куртка с капюшоном Moncler Galion',
      et: 'Moncler Galion kapuutsiga jope',
    },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: { ru: '', en: '', et: '' },
    images: [
      'images/moncler-galion-1.jpg',
      'images/moncler-galion-2.jpg',
    ],
    color: '#1A1A1A',
    brand: 'Moncler',
  },
  {
    id: 8,
    names: {
      en: 'Moncler Etiache Rain Jacket',
      ru: 'Ветровка Moncler Etiache',
      et: 'Moncler Etiache vihmajope',
    },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: { ru: '', en: '', et: '' },
    images: [
      'images/moncler-etiache-1.jpg',
      'images/moncler-etiache-2.jpg',
    ],
    color: '#1A1A1A',
    brand: 'Moncler',
  },
  {
    id: 9,
    names: {
      en: 'Moncler Cardigan Wool',
      ru: 'Кардиган Moncler Wool',
      et: 'Moncler Cardigan Wool',
    },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: {
      en: 'This Cardigan is bit small, need to go 1–2 size up.',
      ru: 'Кардиган маломерит — рекомендуется брать на 1–2 размера больше.',
      et: 'See kardigan on väikesevõitu — soovitame võtta 1–2 numbrit suurema.',
    },
    images: [
      'images/moncler-cardigan-1.jpg',
      'images/moncler-cardigan-2.jpg',
    ],
    color: '#1A1A1A',
    brand: 'Moncler',
  },
  {
    id: 10,
    names: {
      en: 'Moncler Gui Gilet',
      ru: 'Жилет Moncler Gui',
      et: 'Moncler Gui vest',
    },
    category: 'vests',
    cats: { en: 'Vests', ru: 'Жилетки', et: 'Vestid' },
    descs: { ru: '', en: '', et: '' },
    images: [
      'images/moncler-gui-1.jpg',
      'images/moncler-gui-2.jpg',
    ],
    color: '#1A1A1A',
    brand: 'Moncler',
  },
  {
    id: 11,
    names: {
      en: 'Moncler Detachable Hood Cardigan',
      ru: 'Кардиган Moncler со съёмным капюшоном',
      et: 'Moncler eemaldatava kapuutsiga kardigan',
    },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: {
      en: 'This Cardigan is bit small, need to go 1–2 size up.',
      ru: 'Кардиган маломерит — рекомендуется брать на 1–2 размера больше.',
      et: 'See kardigan on väikesevõitu — soovitame võtta 1–2 numbrit suurema.',
    },
    images: [
      'images/moncler-hood-cardigan-1.jpg',
      'images/moncler-hood-cardigan-2.jpg',
    ],
    color: '#1A1A1A',
    brand: 'Moncler',
  },
  {
    id: 12,
    names: {
      en: 'Parajumpers Pharrell Hooded Bomber',
      ru: 'Бомбер с капюшоном Parajumpers Pharrell',
      et: 'Parajumpers Pharrell kapuutsiga bomber',
    },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: { ru: '', en: '', et: '' },
    images: [
      'images/parajumpers-pharrell-1.jpg',
      'images/parajumpers-pharrell-2.jpg',
    ],
    color: '#1A1A1A',
    brand: 'Parajumpers',
  },
  {
    id: 13,
    names: {
      en: 'Moncler Après Ski Knit Sleeves Puffer Jacket',
      ru: 'Пуховик Moncler Après Ski с трикотажными рукавами',
      et: 'Moncler Après Ski trikoovarrukatega unejope',
    },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: { ru: '', en: '', et: '' },
    images: [
      'images/moncler-apres-ski-1.jpg',
      'images/moncler-apres-ski-2.jpg',
    ],
    color: '#1A1A1A',
    brand: 'Moncler',
  },
  {
    id: 14,
    names: {
      en: 'Moncler Retro Knit Wool Cardigan',
      ru: 'Кардиган Moncler Retro Knit из шерсти',
      et: 'Moncler Retro Knit villane kardigan',
    },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: { ru: '', en: '', et: '' },
    images: [
      'images/moncler-retro-knit-1.jpg',
      'images/moncler-retro-knit-2.jpg',
      'images/moncler-retro-knit-3.jpg',
      'images/moncler-retro-knit-4.jpg',
    ],
    color: '#1A1A1A',
    brand: 'Moncler',
  },
  {
    id: 15,
    names: {
      en: 'Parajumpers Jayden Hybrid Cardigan',
      ru: 'Гибридный кардиган Parajumpers Jayden',
      et: 'Parajumpers Jayden hübriid kardigan',
    },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: {
      en: 'Air cotton + fleece fabric + nylon material.',
      ru: 'Материал: воздушный хлопок + флис + нейлон.',
      et: 'Materjal: õhupuuvill + fliis + nailon.',
    },
    images: [
      'images/parajumpers-jayden-1.jpg',
      'images/parajumpers-jayden-2.jpg',
    ],
    color: '#2C3E50',
    brand: 'Parajumpers',
  },
  {
    id: 16,
    names: {
      en: 'Moncler Hooded Wool Cardigan',
      ru: 'Шерстяной кардиган Moncler с капюшоном',
      et: 'Moncler kapuutsiga villane kardigan',
    },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: { ru: '', en: '', et: '' },
    images: [
      'images/moncler-hooded-wool-1.jpg',
      'images/moncler-hooded-wool-2.jpg',
    ],
    color: '#1A1A1A',
    brand: 'Moncler',
  },
];

/* ── Language ────────────────────────────────── */
let currentLang = localStorage.getItem('al_lang') || 'ru';

function t(key) {
  return (I18N[currentLang] || I18N.ru)[key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('al_lang', lang);
  applyTranslations();
  renderTicker();
  renderProducts(currentFilter);
  if (document.getElementById('product-detail')) {
    renderProductPage();
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = t(el.dataset.i18n);
    if (!val) return;
    if (el.dataset.i18n === 'contact_sub') {
      el.innerHTML = val.replace('\n', '<br>');
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  document.documentElement.lang = currentLang;
}

function buildTgLink(name) {
  return `https://t.me/${CONFIG.telegram}?text=${encodeURIComponent(CONFIG.tgText(name, currentLang))}`;
}

/* ── Ticker ──────────────────────────────────── */
function renderTicker() {
  const el = document.getElementById('ticker-inner');
  if (!el) return;

  const phrases = TICKER_PHRASES[currentLang] || TICKER_PHRASES.ru;
  // дублируем для бесшовной прокрутки
  const all = [...phrases, ...phrases];
  el.innerHTML = all.map((p, i) =>
    `<span>${p}</span><span class="dot" aria-hidden="true">·</span>`
  ).join('');
}

/* ── Header ─────────────────────────────────── */
function initHeader() {
  const header    = document.querySelector('.site-header');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!header) return;

  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

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
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }),
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );
  els.forEach((el) => obs.observe(el));
}

/* ── Number Counter ─────────────────────────── */
function animateNumbers() {
  const items = document.querySelectorAll('.stat-num[data-target]');
  if (!items.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      let n = 0;
      const inc = target / (1400 / 16);
      const tick = () => {
        n = Math.min(n + inc, target);
        el.textContent = Math.round(n) + suffix;
        if (n < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  items.forEach((el) => obs.observe(el));
}

/* ── Modal ──────────────────────────────────── */
function openModal(product) {
  const overlay  = document.getElementById('modal-overlay');
  const nameEl   = document.getElementById('modal-product-name');
  const tgBtn    = document.getElementById('modal-tg');
  const labelEl  = document.getElementById('modal-label-text');
  const textEl   = document.getElementById('modal-body-text');
  if (!overlay) return;
  const name = product.names[currentLang] || product.names.ru;
  nameEl.textContent = name;
  tgBtn.href         = buildTgLink(name);
  tgBtn.textContent  = t('modal_tg');
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

/* ── Product Card ───────────────────────────── */
function createProductCard(product) {
  const lang = currentLang;
  const name = product.names[lang] || product.names.ru;
  const cat  = product.cats[lang]  || product.cats.ru;
  const imgs = product.images || [];
  const href = `product.html?id=${product.id}`;

  const card = document.createElement('article');
  card.className = 'product-card';
  card.dataset.category = product.category;

  /* Фото */
  const thumb = document.createElement('div');
  thumb.className = 'pc-thumb';

  if (imgs.length) {
    const img = new Image();
    img.src = imgs[0];
    img.alt = name;
    img.width = 600;
    img.height = 750;
    thumb.appendChild(img);
  } else {
    const ph = document.createElement('div');
    ph.className = 'pc-placeholder';
    ph.style.background = product.color;
    ph.innerHTML = `<span>${product.brand}</span>`;
    thumb.appendChild(ph);
  }

  const cover = document.createElement('a');
  cover.href = href;
  cover.className = 'pc-cover';
  thumb.appendChild(cover);

  /* Тело */
  const body = document.createElement('div');
  body.className = 'pc-body';
  body.innerHTML = `
    <span class="pc-cat">${cat}</span>
    <a href="${href}" class="pc-name">${name}</a>
    <p class="pc-brand">${product.brand}</p>
    <div class="pc-footer">
      <span class="pc-price">${t('on_request')}</span>
      <button class="btn-inquiry"><span>${t('inquiry_btn')}</span></button>
    </div>`;

  card.appendChild(thumb);
  card.appendChild(body);
  body.querySelector('.btn-inquiry').addEventListener('click', () => openModal(product));
  return card;
}

let currentFilter = 'all';
function renderProducts(filter = 'all') {
  currentFilter = filter;
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = '';
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state"><p>—</p></div>`;
    return;
  }
  list.forEach(p => grid.appendChild(createProductCard(p)));
}

/* ── Filters ────────────────────────────────── */
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  }));
}

/* ── Product Detail ─────────────────────────── */
let currentProduct = null;

function renderProductPage() {
  if (!currentProduct) return;
  const p    = currentProduct;
  const name = p.names[currentLang] || p.names.ru;
  const cat  = p.cats[currentLang]  || p.cats.ru;
  const desc = p.descs[currentLang] || p.descs.ru;
  const imgs = p.images && p.images.length ? p.images : [];

  document.title = `${name} — Andrelook`;

  document.querySelectorAll('[data-i18n="back_catalog"]').forEach(el => el.textContent = t('back_catalog'));

  const mainEl = document.getElementById('product-main-img');
  if (mainEl) {
    mainEl.innerHTML = imgs.length
      ? `<img src="${imgs[0]}" alt="${name}" id="active-img">`
      : `<div class="product-placeholder-lg" style="background:${p.color}"><span>${p.brand}</span></div>`;
  }

  const thumbsEl = document.getElementById('product-thumbs');
  if (thumbsEl) {
    if (imgs.length > 1) {
      thumbsEl.innerHTML = imgs.map((src, i) =>
        `<button class="thumb${i===0?' active':''}" data-src="${src}">
           <img src="${src}" alt="${name} ${i+1}" loading="lazy">
         </button>`
      ).join('');
      thumbsEl.querySelectorAll('.thumb').forEach(btn => {
        btn.addEventListener('click', () => {
          const activeImg = document.getElementById('active-img');
          if (activeImg) activeImg.src = btn.dataset.src;
          thumbsEl.querySelectorAll('.thumb').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    } else {
      thumbsEl.innerHTML = '';
    }
  }

  const infoEl = document.getElementById('product-info');
  if (infoEl) {
    infoEl.innerHTML = `
      <p class="product-detail__cat">${cat}</p>
      <h1 class="product-detail__name">${name}</h1>
      <p class="product-detail__brand">${p.brand}</p>
      <p class="product-detail__desc">${desc}</p>
      <ul class="product-detail__meta">
        <li>${t('prod_avail')}</li>
        <li>${t('prod_delivery')}</li>
        <li>${t('prod_meeting')}</li>
      </ul>
      <button class="btn-primary product-detail__cta" id="detail-inquiry-btn">
        <span>${t('inquiry_btn')}</span>
      </button>`;
    document.getElementById('detail-inquiry-btn').addEventListener('click', () => openModal(p));
  }
}

function initProductPage() {
  const params = new URLSearchParams(location.search);
  const id     = parseInt(params.get('id'), 10);
  currentProduct = PRODUCTS.find(p => p.id === id) || null;
  const container = document.getElementById('product-detail');
  if (!container) return;
  if (!currentProduct) {
    container.innerHTML = '<p style="padding:4rem;text-align:center;font-family:serif;font-size:1.5rem;color:#999">Product not found</p>';
    return;
  }
  renderProductPage();
}

/* ── URL filter ─────────────────────────────── */
function initCatalogURLFilter() {
  const filter = new URLSearchParams(location.search).get('filter');
  if (!filter) return;
  const btn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(filter);
}

/* ── Init ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  applyTranslations();
  renderTicker();
  initReveal();
  initModal();
  initFilters();
  animateNumbers();
  initReviews();

  if (document.getElementById('product-detail')) initProductPage();

  if (document.getElementById('products-grid')) {
    const urlFilter = new URLSearchParams(location.search).get('filter');
    const activeFilter = urlFilter || 'all';
    if (urlFilter) {
      const btn = document.querySelector(`.filter-btn[data-filter="${urlFilter}"]`);
      if (btn) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    }
    renderProducts(activeFilter);
    // Показываем сетку только после рендера — убираем мигание
    const grid = document.getElementById('products-grid');
    if (grid) grid.classList.add('ready');
  }
});

/* ── Reviews Slider ─────────────────────────── */
function initReviews() {
  const track = document.getElementById('reviews-track');
  const dotsEl = document.getElementById('rev-dots');
  if (!track) return;

  const cards = Array.from(track.children);
  const total = cards.length;

  // Сколько карточек видно за раз
  function perView() {
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  let idx = 0;

  // Создаём точки
  function buildDots() {
    dotsEl.innerHTML = '';
    const pages = Math.ceil(total / perView());
    for (let i = 0; i < pages; i++) {
      const d = document.createElement('span');
      d.className = 'rev-dot' + (i === 0 ? ' on' : '');
      d.onclick = () => goTo(i);
      dotsEl.appendChild(d);
    }
  }

  function goTo(page) {
    const pv = perView();
    const pages = Math.ceil(total / pv);
    idx = (page + pages) % pages;
    const cardW = cards[0].offsetWidth + 24; // width + gap
    track.style.transform = `translateX(-${idx * pv * cardW}px)`;
    dotsEl.querySelectorAll('.rev-dot').forEach((d, i) => d.classList.toggle('on', i === idx));
  }

  document.getElementById('rev-prev').onclick = () => goTo(idx - 1);
  document.getElementById('rev-next').onclick = () => goTo(idx + 1);

  buildDots();
  window.addEventListener('resize', () => { idx = 0; buildDots(); goTo(0); });
}
