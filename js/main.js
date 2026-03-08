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
    nav_home:'Home', nav_catalog:'Catalog', nav_how:'How to buy', nav_contact:'Contact', nav_reviews:'Reviews',
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
    contact_title:'Get in touch', contact_kicker:'Contact', contact_sub:'Fastest replies are on Telegram.\nWe\'ll help you choose, size and order.',
    contact_btn:'Telegram',
    filter_all:'All', filter_warm:'Warm Jackets', filter_vests:'Vests',
    filter_light:'Light Jackets', filter_hoodies:'Hoodies', filter_tshirts:'T-Shirts', filter_bottoms:'Bottoms',
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
    nav_home:'Главная', nav_catalog:'Каталог', nav_how:'Как купить', nav_contact:'Контакты', nav_reviews:'Отзывы',
    hero_location:'Таллинн, Эстония',
    hero_delivery:'Доставка по Европе',
    hero_tagline:'Мировые бренды · Личный подход',
    hero_cta:'Смотреть коллекцию',
    hero_note:'Таллинн · Европа',
    stat_1_lbl:'Позиций в каталоге', stat_2_lbl:'Довольных клиентов', stat_3_lbl:'Года на рынке',
    col_title:'Коллекция', col_all:'Весь каталог →',
    cat_suits:'Костюмы', cat_outer:'Верхняя одежда', cat_knit:'Трикотаж', cat_shirts:'Рубашки и блузы',
    cat_pos1:'12 позиций', cat_pos2:'18 позиций', cat_pos3:'24 позиции', cat_pos4:'16 позиций',
    how_title:'Как купить', reviews_kicker:'Отзывы', reviews_title:'Что говорят покупатели',
    how_1_title:'Вы в Таллинне',
    how_1_text:'Договоримся о личной встрече в удобное время. Примерите вещь и увидите её вживую. Если всё подходит — оплата на месте наличными или переводом.',
    how_2_title:'Доставка по Европе',
    how_2_text:'Отправляем заказы после полной оплаты. Стоимость доставки рассчитывается индивидуально. Оплата банковским переводом.',
    how_3_title:'Нет в наличии?',
    how_3_text:'Привезём под заказ по предоплате 35%. Остаток — перед отправкой или при личной встрече, если вы в Таллинне.',
    how_4_title:'Помогаем с выбором',
    how_4_text:'Напишите нам — поможем подобрать размер и ответим на все вопросы. Остаёмся на связи на каждом этапе.',
    stmt_label:'Наш подход',
    stmt_quote:'«Мы тщательно подбираем вещи, которые красиво сидят и легко преображают ваш гардероб.»',
    stmt_text:'Andrelook — магазин мировых брендов с личным подходом. Большой ассортимент, помощь с размером и быстрые ответы. Работаем для тех, кто ценит качество — вживую в Таллинне или с доставкой по Европе.',
    contact_title:'Написать нам', contact_kicker:'Связаться', contact_sub:'Самые быстрые ответы — в Telegram.\nПоможем с выбором, размером и оформлением заказа.',
    contact_btn:'Telegram',
    filter_all:'Все', filter_warm:'Тёплые куртки', filter_vests:'Жилетки',
    filter_light:'Лёгкие куртки', filter_hoodies:'Кофты', filter_tshirts:'Футболки', filter_bottoms:'Низ',
    cat_season:'Коллекция 2025',
    inquiry_btn:'Запросить', on_request:'По запросу',
    modal_label:'Запросить информацию',
    modal_text:'Напишите нам в Telegram — расскажем о наличии, размерах и всех деталях.',
    modal_tg:'Написать в Telegram',
    back_catalog:'← Назад в каталог',
    prod_avail:'Наличие: по запросу', prod_delivery:'Доставка по Европе', prod_meeting:'Личная встреча в Таллинне',
    footer_copy:'© 2025 Andrelook',
  },
  et: {
    nav_home:'Avaleht', nav_catalog:'Kataloog', nav_how:'Kuidas osta', nav_contact:'Kontakt', nav_reviews:'Arvustused',
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
    contact_title:'Võta ühendust', contact_kicker:'Kontakt', contact_sub:'Kiiremad vastused on Telegramis.\nAitame valida ja tellimust vormistada.',
    contact_btn:'Telegram',
    filter_all:'Kõik', filter_warm:'Soojad jakid', filter_vests:'Vestid',
    filter_light:'Kerged jakid', filter_hoodies:'Kampsunid', filter_tshirts:'T-särgid', filter_bottoms:'Alaosal',
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
  {
    id: 1,
    names: { en: 'Moncler Maya Down Jacket', ru: 'Moncler Maya Down Jacket', et: 'Moncler Maya Down Jacket' },
    category: 'warm-jackets',
    cats: { en: 'Warm Jackets', ru: 'Тёплые куртки', et: 'Soojad jakid' },
    descs: {
      ru: 'Культовая пуховая куртка Moncler Maya, сочетающая премиальное качество, тепло и современный городской стиль. Модель создана для холодной погоды и повседневного комфорта.\n• натуральный гусиный пух — отлично сохраняет тепло\n• прочный и лёгкий глянцевый материал\n• аккуратные фирменные швы и высокая износостойкость\n• удобные карманы и надёжная молния\n• культовый логотип Moncler\nКуртка отлично подходит для повседневного стиля и городских образов.\nУнисекс модель',
      en: 'Iconic Moncler Maya down jacket combining premium quality, warmth and modern urban style. Designed for cold weather and everyday comfort.\n• natural goose down — excellent heat retention\n• durable and lightweight glossy shell\n• precise branded stitching and high durability\n• practical pockets and reliable zip\n• iconic Moncler logo\nPerfect for everyday style and city looks.\nUnisex model',
      et: 'Ikoonilne Moncler Maya sulejope, mis ühendab premium kvaliteeti, soojust ja kaasaegset linnalikku stiili.\n• looduslik hanesuled — suurepärane soojuse säilitamine\n• vastupidav ja kerge läikiv materjal\n• täpsed firmamärgised õmblused\n• praktilised taskud ja usaldusväärne tõmblukk\n• ikooniline Moncler logo\nSobib igapäevaseks stiiliks ja linnavaatamiseks.\nUnisex mudel',
    },
    images: ['images/moncler-maya-1.jpg','images/moncler-maya-2.jpg','images/moncler-maya-3.jpg','images/moncler-maya-4.jpg','images/moncler-maya-5.jpg','images/moncler-maya-6.jpg'],
    color: '#1C1C1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
      { hex: '#F5F5F5', name: { ru: 'Белый', en: 'White', et: 'Valge' } },
      { hex: '#7ABFDB', name: { ru: 'Голубой', en: 'Sky Blue', et: 'Taevassinine' } },
      { hex: '#9A9A9A', name: { ru: 'Серый', en: 'Grey', et: 'Hall' } },
      { hex: '#5C6B3A', name: { ru: 'Хаки', en: 'Khaki', et: 'Khaki' } },
      { hex: '#E85B1A', name: { ru: 'Ярко-оранжевый', en: 'Bright Orange', et: 'Erkoranž' } },
    ],
  },
  {
    id: 2,
    names: { en: 'Parajumpers Tyrik Hooded Puffer Jacket', ru: 'Parajumpers Tyrik Hooded Puffer Jacket', et: 'Parajumpers Tyrik Hooded Puffer Jacket' },
    category: 'warm-jackets',
    cats: { en: 'Warm Jackets', ru: 'Тёплые куртки', et: 'Soojad jakid' },
    descs: {
      ru: 'Тёплая зимняя куртка Parajumpers, созданная для холодной погоды и повседневного комфорта. Модель сочетает функциональность, премиальные материалы и современный городской стиль.\n• тёплый и качественный пуховый наполнитель\n• прочный и износостойкий внешний материал\n• удобный капюшон для дополнительной защиты от ветра\n• практичные карманы на молнии\n• фирменные элементы и логотип Parajumpers\nИдеально подходит для холодной зимней погоды и ежедневного ношения.\nУнисекс модель',
      en: 'Warm winter jacket by Parajumpers, designed for cold weather and everyday comfort.\n• warm and high-quality down fill\n• durable and wear-resistant outer material\n• comfortable hood for extra wind protection\n• practical zip pockets\n• signature Parajumpers elements and logo\nPerfect for cold winter weather and daily wear.\nUnisex model',
      et: 'Soe talvejope Parajumpers, loodud külma ilma ja igapäevase mugavuse jaoks.\n• soe ja kvaliteetne suletäidis\n• vastupidav välismaterjal\n• mugav kapuuts lisatuulekaitseks\n• praktilised tõmblukuga taskud\n• Parajumpers logo ja detailid\nSobib ideaalselt külmaks talveilmaks ja igapäevaseks kandmiseks.\nUnisex mudel',
    },
    images: ['images/parajumpers-tyrik-1.jpg','images/parajumpers-tyrik-2.jpg'],
    color: '#1C2333',
    brand: 'Parajumpers',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
    ],
  },
  {
    id: 3,
    names: { en: 'Moncler Vezere Down Jacket', ru: 'Moncler Vezere Down Jacket', et: 'Moncler Vezere Down Jacket' },
    category: 'warm-jackets',
    cats: { en: 'Warm Jackets', ru: 'Тёплые куртки', et: 'Soojad jakid' },
    descs: {
      ru: 'Премиальная пуховая куртка Moncler Vezere, сочетающая тепло, комфорт и современный минималистичный стиль.\n• натуральный гусиный пух — лёгкий и очень тёплый\n• прочный и качественный внешний материал\n• аккуратные фирменные швы\n• удобные карманы и надёжная фурнитура\n• фирменный логотип Moncler на рукаве\nКуртка идеально подходит для повседневного ношения в холодное время года.\nУнисекс модель',
      en: 'Premium Moncler Vezere down jacket combining warmth, comfort and modern minimalist style.\n• natural goose down — light and very warm\n• durable and high-quality outer shell\n• precise branded stitching\n• practical pockets and reliable hardware\n• Moncler logo on sleeve\nIdeal for everyday wear in cold weather.\nUnisex model',
      et: 'Premium Moncler Vezere sulejope, mis ühendab soojuse, mugavuse ja kaasaegse minimalistliku stiili.\n• looduslik hanesuled — kerge ja väga soe\n• vastupidav välismaterjal\n• täpsed õmblused\n• praktilised taskud\n• Moncler logo varrukal\nSobib igapäevaseks kandmiseks külmal aastaajal.\nUnisex mudel',
    },
    images: ['images/moncler-vezere-1.jpg','images/moncler-vezere-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
    ],
  },
  {
    id: 4,
    names: { en: 'Moncler Bormes Down Vest', ru: 'Moncler Bormes Down Vest', et: 'Moncler Bormes Down Vest' },
    category: 'vests',
    cats: { en: 'Vests', ru: 'Жилетки', et: 'Vestid' },
    descs: {
      ru: 'Стильная пуховая жилетка Moncler для комфорта в прохладную погоду.\n• лёгкий и тёплый пуховый наполнитель\n• фирменный логотип Moncler\n• удобные карманы на молнии\n• современный минималистичный силуэт\nУнисекс модель',
      en: 'Stylish Moncler down vest for comfort in cool weather.\n• light and warm down fill\n• Moncler signature logo\n• practical zip pockets\n• modern minimalist silhouette\nUnisex model',
      et: 'Stiilne Moncler sulevest mugavuseks jahedas ilmas.\n• kerge ja soe suletäidis\n• Moncler logo\n• praktilised tõmblukuga taskud\n• kaasaegne minimalistlik siluett\nUnisex mudel',
    },
    images: ['images/moncler-bormes-1.jpg','images/moncler-bormes-2.jpg','images/moncler-bormes-3.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
      { hex: '#F5F5F5', name: { ru: 'Белый', en: 'White', et: 'Valge' } },
    ],
  },
  {
    id: 5,
    names: { en: 'Parajumpers Jeordie Down Vest', ru: 'Parajumpers Jeordie Down Vest', et: 'Parajumpers Jeordie Down Vest' },
    category: 'vests',
    cats: { en: 'Vests', ru: 'Жилетки', et: 'Vestid' },
    descs: {
      ru: 'Функциональная пуховая жилетка Parajumpers для комфорта в прохладную погоду.\n• качественный тёплый пуховый наполнитель\n• прочный и лёгкий внешний материал\n• аккуратные фирменные швы\n• удобные карманы на молнии\n• узнаваемый стиль Parajumpers\nОтлично подходит для многослойных образов поверх худи или свитера.\nУнисекс модель',
      en: 'Functional Parajumpers down vest for comfort in cool weather.\n• high-quality warm down fill\n• durable and lightweight outer shell\n• precise branded stitching\n• practical zip pockets\n• signature Parajumpers style\nGreat for layered looks over a hoodie or sweater.\nUnisex model',
      et: 'Funktsionaalne Parajumpers sulevest mugavuseks jahedas ilmas.\n• kvaliteetne soe suletäidis\n• vastupidav ja kerge välismaterjal\n• täpsed õmblused\n• praktilised tõmblukuga taskud\n• Parajumpers stiil\nSobib kihistatud väljanägemisteks peale hoodied või kampsuni.\nUnisex mudel',
    },
    images: ['images/parajumpers-jeordie-1.jpg','images/parajumpers-jeordie-2.jpg'],
    color: '#1C2333',
    brand: 'Parajumpers',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
    ],
  },
  {
    id: 6,
    names: { en: 'Moncler Tibb Logo-Patch Padded Gilet', ru: 'Moncler Tibb Logo-Patch Padded Gilet', et: 'Moncler Tibb Logo-Patch Padded Gilet' },
    category: 'vests',
    cats: { en: 'Vests', ru: 'Жилетки', et: 'Vestid' },
    descs: {
      ru: 'Классическая пуховая жилетка Moncler — лёгкость, тепло и современный городской стиль.\n• качественный тёплый пуховый наполнитель\n• лёгкий и прочный внешний материал\n• аккуратные фирменные швы\n• удобные карманы на молнии\n• культовый логотип Moncler\nОтлично подходит для многослойных образов — поверх худи или свитера.\nУнисекс модель',
      en: 'Classic Moncler down vest — lightness, warmth and modern urban style.\n• high-quality warm down fill\n• light and durable outer shell\n• precise branded stitching\n• practical zip pockets\n• iconic Moncler logo\nPerfect for layered looks over a hoodie or sweater.\nUnisex model',
      et: 'Klassikaline Moncler sulevest — kergus, soojus ja kaasaegne linnastiil.\n• kvaliteetne soe suletäidis\n• kerge ja vastupidav välismaterjal\n• täpsed õmblused\n• praktilised tõmblukuga taskud\n• ikooniline Moncler logo\nSobib kihistatud väljanägemisteks.\nUnisex mudel',
    },
    images: ['images/moncler-tibb-1.jpg','images/moncler-tibb-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
      { hex: '#5C6B3A', name: { ru: 'Хаки', en: 'Khaki', et: 'Khaki' } },
    ],
  },
  {
    id: 7,
    names: { en: 'Moncler Galion Hooded Jacket', ru: 'Moncler Galion Hooded Jacket', et: 'Moncler Galion Hooded Jacket' },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: {
      ru: 'Лёгкая пуховая куртка Moncler с капюшоном — для повседневного городского стиля и прохладной погоды.\n• лёгкий и качественный пуховый наполнитель\n• прочный и лёгкий внешний материал\n• аккуратные фирменные швы\n• удобные карманы на молнии\n• культовый логотип Moncler\nОтлично сочетается с худи, свитерами и повседневными образами.\nУнисекс модель',
      en: 'Lightweight Moncler hooded jacket for everyday urban style and cool weather.\n• light and high-quality down fill\n• durable and lightweight outer shell\n• precise branded stitching\n• practical zip pockets\n• iconic Moncler logo\nPairs perfectly with hoodies, sweaters and everyday outfits.\nUnisex model',
      et: 'Kerge Moncler kapuutsiga jope igapäevaseks linnastiiliks ja jahedaks ilmaks.\n• kerge ja kvaliteetne suletäidis\n• vastupidav välismaterjal\n• täpsed õmblused\n• praktilised tõmblukuga taskud\n• ikooniline Moncler logo\nSobib hoodiedega, kampsunitega ja igapäevaste riietega.\nUnisex mudel',
    },
    images: ['images/moncler-galion-1.jpg','images/moncler-galion-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    // ИСПРАВЛЕНО: Black, Grey
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#9A9A9A', name: { ru: 'Серый', en: 'Grey', et: 'Hall' } },
    ],
  },
  {
    id: 8,
    names: { en: 'Moncler Etiache Rain Jacket', ru: 'Moncler Etiache Rain Jacket', et: 'Moncler Etiache Rain Jacket' },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: {
      ru: 'Лёгкая ветровка Moncler, созданная для комфорта в тёплую и ветреную погоду. Практичная модель, сочетающая минималистичный дизайн и функциональность для повседневного городского стиля.\n• лёгкий и прочный материал\n• защита от ветра и лёгкой влаги\n• удобный капюшон с регулировкой\n• практичные карманы\n• фирменный логотип Moncler\nИдеально подходит для весенней и летней погоды.\nУнисекс модель',
      en: 'Lightweight Moncler windbreaker designed for comfort in warm and windy weather. A practical model combining minimalist design and functionality for everyday urban style.\n• lightweight and durable material\n• wind and light moisture protection\n• adjustable hood\n• practical pockets\n• Moncler logo\nPerfect for spring and summer weather.\nUnisex model',
      et: 'Kerge Moncler tuulejope, loodud mugavuseks soojal ja tuulisel ilmal. Praktiline mudel, mis ühendab minimalistliku disaini ja funktsionaalsuse igapäevaseks linnastiiliks.\n• kerge ja vastupidav materjal\n• tuule- ja kerge niiskuskaitse\n• reguleeritav kapuuts\n• praktilised taskud\n• Moncler logo\nSobib ideaalselt kevadiseks ja suvisteks ilmadeks.\nUnisex mudel',
    },
    images: ['images/moncler-etiache-1.jpg','images/moncler-etiache-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    // ИСПРАВЛЕНО: Black, Navy
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
    ],
  },
  {
    id: 9,
    names: { en: 'Moncler Cardigan Wool', ru: 'Moncler Cardigan Wool', et: 'Moncler Cardigan Wool' },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: {
      ru: 'Стильный Moncler кардиган-куртка, сочетающий комфорт вязаного трикотажа и тепло лёгкого утеплённого переда. Идеальный вариант для межсезонья и повседневного городского образа.\n• комбинированный дизайн: трикотаж + лёгкий утеплённый перед\n• мягкий и комфортный материал\n• удобные карманы на молнии\n• фирменный логотип Moncler\n• стильный и универсальный силуэт\nОтлично подходит для весны, осени и прохладных вечеров.\nУнисекс модель',
      en: 'Stylish Moncler cardigan-jacket combining the comfort of knit fabric and the warmth of a lightly padded front. The perfect option for between seasons and everyday urban style.\n• combined design: knit + lightly padded front\n• soft and comfortable material\n• practical zip pockets\n• Moncler logo\n• stylish and versatile silhouette\nPerfect for spring, autumn and cool evenings.\nUnisex model',
      et: 'Stiilne Moncler kardigan-jope, mis ühendab kootud kanga mugavuse ja kerge soojustatud esiosa soojuse. Ideaalne valik hooaegade vahetuseks ja igapäevaseks linnastiiliks.\n• kombineeritud disain: kudumine + kerge soojustatud esiosa\n• pehme ja mugav materjal\n• praktilised tõmblukuga taskud\n• Moncler logo\n• stiilne ja mitmekülgne siluett\nSobib suurepäraselt kevadeks, sügiseks ja jahedateks õhtuteks.\nUnisex mudel',
    },
    images: ['images/moncler-cardigan-1.jpg','images/moncler-cardigan-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
    ],
  },
  {
    id: 10,
    names: { en: 'Moncler Gui Gilet', ru: 'Moncler Gui Gilet', et: 'Moncler Gui Gilet' },
    category: 'vests',
    cats: { en: 'Vests', ru: 'Жилетки', et: 'Vestid' },
    descs: {
      ru: 'Лёгкая пуховая жилетка Moncler, идеально подходящая для повседневного городского стиля и прохладной погоды. Тонкая, комфортная и практичная модель, которая отлично подходит для многослойных образов.\n• лёгкий и качественный пуховый наполнитель\n• прочный и лёгкий внешний материал\n• аккуратные фирменные швы\n• удобные карманы на молнии\n• культовый логотип Moncler\nЖилетка отлично сочетается с худи, свитерами и лёгкими куртками.\nУнисекс модель',
      en: 'Lightweight Moncler down vest, perfect for everyday urban style and cool weather. A slim, comfortable and practical model ideal for layered looks.\n• light and high-quality down fill\n• durable and lightweight outer shell\n• precise branded stitching\n• practical zip pockets\n• iconic Moncler logo\nPairs perfectly with hoodies, sweaters and light jackets.\nUnisex model',
      et: 'Kerge Moncler sulevest, mis sobib ideaalselt igapäevaseks linnastiiliks ja jahedaks ilmaks. Õhuke, mugav ja praktiline mudel kihistatud väljanägemisteks.\n• kerge ja kvaliteetne suletäidis\n• vastupidav ja kerge välismaterjal\n• täpsed firmamärgised õmblused\n• praktilised tõmblukuga taskud\n• ikooniline Moncler logo\nSobib suurepäraselt hoodiedega, kampsunitega ja kergete jopedega.\nUnisex mudel',
    },
    images: ['images/moncler-gui-1.jpg','images/moncler-gui-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    // ИСПРАВЛЕНО: Black, Navy, White, Sky Blue, Khaki
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
      { hex: '#F5F5F5', name: { ru: 'Белый', en: 'White', et: 'Valge' } },
      { hex: '#7ABFDB', name: { ru: 'Голубой', en: 'Sky Blue', et: 'Taevassinine' } },
      { hex: '#5C6B3A', name: { ru: 'Хаки', en: 'Khaki', et: 'Khaki' } },
    ],
  },
  {
    id: 11,
    names: { en: 'Moncler Detachable Hood Cardigan', ru: 'Moncler Detachable Hood Cardigan', et: 'Moncler Detachable Hood Cardigan' },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: {
      ru: 'Стильная кофта-куртка Moncler с капюшоном — комфорт трикотажа и тепло лёгкого утеплённого жилета.\n• комбинированный дизайн: трикотаж + утеплённая передняя часть\n• мягкий и комфортный материал\n• удобный капюшон\n• карманы на молнии\n• фирменный логотип Moncler\nОтличный вариант для весны, осени и прохладных дней.\nУнисекс модель',
      en: 'Stylish Moncler hooded cardigan combining knit comfort and warmth of a lightly padded vest.\n• combined design: knit + padded front\n• soft and comfortable material\n• detachable hood\n• zip pockets\n• Moncler logo\nGreat for spring, autumn and cool days.\nUnisex model',
      et: 'Stiilne Moncler kapuutsiga kardigan, mis ühendab kudumise mugavuse ja kerge soojustatud vesti soojuse.\n• kombineeritud disain: kudumine + soojustatud esiosa\n• pehme materjal\n• eemaldatav kapuuts\n• tõmblukuga taskud\n• Moncler logo\nSobib kevadeks, sügiseks ja jahedateks päevadeks.\nUnisex mudel',
    },
    images: ['images/moncler-hood-cardigan-1.jpg','images/moncler-hood-cardigan-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
    ],
  },
  {
    id: 12,
    names: { en: 'Parajumpers Pharrell Hooded Bomber', ru: 'Parajumpers Pharrell Hooded Bomber', et: 'Parajumpers Pharrell Hooded Bomber' },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: {
      ru: 'Лёгкая пуховая куртка Parajumpers с капюшоном для комфорта в прохладную и межсезонную погоду.\n• качественное тёплое пуховое наполнение\n• лёгкий и прочный внешний материал\n• удобный капюшон для защиты от ветра\n• практичные карманы на молнии\n• фирменные элементы Parajumpers\nОтлично подходит для повседневных образов весной и осенью.\nУнисекс модель',
      en: 'Lightweight Parajumpers hooded down jacket for comfort in cool and between-season weather.\n• high-quality warm down fill\n• light and durable outer shell\n• comfortable hood for wind protection\n• practical zip pockets\n• Parajumpers signature details\nPerfect for everyday looks in spring and autumn.\nUnisex model',
      et: 'Kerge Parajumpers kapuutsiga sulejope mugavuseks jahedal ja hooaegade vahetusel.\n• kvaliteetne soe suletäidis\n• kerge ja vastupidav välismaterjal\n• mugav kapuuts tuulekaitseks\n• praktilised tõmblukuga taskud\n• Parajumpers detailid\nSobib igapäevaseks kandmiseks kevadel ja sügisel.\nUnisex mudel',
    },
    images: ['images/parajumpers-pharrell-1.jpg','images/parajumpers-pharrell-2.jpg'],
    color: '#1A1A1A',
    brand: 'Parajumpers',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
    ],
  },
  {
    id: 13,
    names: { en: 'Moncler Après Ski Knit Sleeves Puffer Jacket', ru: 'Moncler Après Ski Knit Sleeves Puffer Jacket', et: 'Moncler Après Ski Knit Sleeves Puffer Jacket' },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: {
      ru: 'Лёгкая Moncler куртка в спортивном alpine-стиле с вязаными рукавами.\n• лёгкий утеплённый корпус\n• вязаные рукава из мягкого трикотажа\n• спортивный горнолыжный дизайн\n• функциональные карманы на молнии\n• фирменный логотип Moncler\nПодходит как для активного отдыха, так и для стильного городского образа.\nУнисекс модель',
      en: 'Lightweight Moncler jacket in sporty alpine style with knit sleeves.\n• lightweight padded body\n• soft knit sleeves\n• sporty ski design\n• functional zip pockets\n• Moncler logo\nSuitable for active outdoor activities and stylish city looks.\nUnisex model',
      et: 'Kerge Moncler jope sportlikus alpine stiilis kootud varrukatega.\n• kerge soojustatud korpus\n• pehmed kootud varrukad\n• sportilik suusadisain\n• funktsionaalsed tõmblukuga taskud\n• Moncler logo\nSobib nii aktiivseks tegevuseks kui linnastiiliks.\nUnisex mudel',
    },
    images: ['images/moncler-apres-ski-1.jpg','images/moncler-apres-ski-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
    ],
  },
  {
    id: 14,
    names: { en: 'Moncler Retro Knit Wool Cardigan', ru: 'Moncler Retro Knit Wool Cardigan', et: 'Moncler Retro Knit Wool Cardigan' },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: {
      ru: 'Куртка-кардиган Moncler — вязаный премиальный трикотаж и лёгкая пуховая конструкция с капюшоном.\n• комбинированная конструкция: вязаный трикотаж + пуховая верхняя часть\n• качественное тёплое наполнение\n• прочный и комфортный материал\n• удобные карманы на молнии\n• фирменный логотип Moncler на рукаве\nИдеальный вариант для повседневных образов в прохладную погоду.\nУнисекс модель',
      en: 'Moncler cardigan-jacket combining premium knit wool and a lightweight down construction with hood.\n• combined construction: knit + down upper section\n• high-quality warm fill\n• durable and comfortable material\n• practical zip pockets\n• Moncler logo on sleeve\nIdeal for everyday looks in cool weather.\nUnisex model',
      et: 'Moncler kardigan-jope, mis ühendab premium kootud villa ja kerge sulejope konstruktsiooni kapuutsiga.\n• kombineeritud konstruktsioon: kudumine + suled\n• kvaliteetne soe täidis\n• vastupidav materjal\n• praktilised tõmblukuga taskud\n• Moncler logo varrukal\nIdeaalne igapäevaseks kandmiseks jahedas ilmas.\nUnisex mudel',
    },
    images: ['images/moncler-retro-knit-1.jpg','images/moncler-retro-knit-2.jpg','images/moncler-retro-knit-3.jpg','images/moncler-retro-knit-4.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
    ],
  },
  {
    id: 15,
    names: { en: 'Parajumpers Jayden Hybrid Cardigan', ru: 'Parajumpers Jayden Hybrid Cardigan', et: 'Parajumpers Jayden Hybrid Cardigan' },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: {
      ru: 'Лёгкая гибридная куртка Parajumpers — пуховая передняя часть и эластичные трикотажные рукава.\n• комбинированная конструкция: пуховая передняя часть + эластичные рукава\n• лёгкое и тёплое наполнение\n• прочный и комфортный материал\n• удобные карманы на молнии\n• фирменные элементы Parajumpers\nОтлично подходит для прохладной погоды и многослойных образов.\nМужская модель',
      en: 'Lightweight hybrid Parajumpers jacket combining a down front and elastic knit sleeves.\n• combined construction: down front + elastic sleeves\n• light and warm fill\n• durable and comfortable material\n• practical zip pockets\n• Parajumpers signature details\nGreat for cool weather and layered looks.\nMen\'s model',
      et: 'Kerge hübriid Parajumpers jope, mis ühendab sulejope esiosa ja elastsed kootud varrukad.\n• kombineeritud konstruktsioon: suled esiosas + elastsed varrukad\n• kerge ja soe täidis\n• vastupidav materjal\n• praktilised tõmblukuga taskud\n• Parajumpers detailid\nSobib jahedaks ilmaks ja kihistatud väljanägemisteks.\nMeeste mudel',
    },
    images: ['images/parajumpers-jayden-1.jpg','images/parajumpers-jayden-2.jpg'],
    color: '#2C3E50',
    brand: 'Parajumpers',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#C8D8E4', name: { ru: 'Льдистый', en: 'Ghiaccio', et: 'Jääsinine' } },
    ],
  },
  {
    id: 16,
    names: { en: 'Moncler Hooded Wool Cardigan', ru: 'Moncler Hooded Wool Cardigan', et: 'Moncler Hooded Wool Cardigan' },
    category: 'light-jackets',
    cats: { en: 'Light Jackets', ru: 'Лёгкие куртки', et: 'Kerged jakid' },
    descs: {
      ru: 'Стильная гибридная куртка Moncler с капюшоном — тепло пухового жилета и комфорт трикотажных рукавов.\n• комбинированный дизайн: трикотаж + утеплённый перед\n• лёгкий и тёплый наполнитель\n• удобный капюшон\n• функциональные карманы\n• фирменный логотип Moncler\nОтличный вариант для весны, осени и прохладной погоды.\nУнисекс модель',
      en: 'Stylish Moncler hooded hybrid jacket combining the warmth of a down vest and comfort of knit sleeves.\n• combined design: knit + padded front\n• light and warm fill\n• comfortable hood\n• functional pockets\n• Moncler logo\nGreat for spring, autumn and cool weather.\nUnisex model',
      et: 'Stiilne Moncler kapuutsiga hübriidjope, mis ühendab sulevesti soojuse ja kootud varrukatest mugavuse.\n• kombineeritud disain: kudumine + soojustatud esiosa\n• kerge ja soe täidis\n• mugav kapuuts\n• funktsionaalsed taskud\n• Moncler logo\nSobib kevadeks, sügiseks ja jahedaks ilmaks.\nUnisex mudel',
    },
    images: ['images/moncler-hooded-wool-1.jpg','images/moncler-hooded-wool-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
      { hex: '#5C6B3A', name: { ru: 'Хаки', en: 'Khaki', et: 'Khaki' } },
    ],
  },
  {
    id: 17,
    names: { en: 'Moncler Basic T-Shirt', ru: 'Moncler Basic T-Shirt', et: 'Moncler Basic T-Shirt' },
    category: 't-shirts',
    cats: { en: 'T-Shirts', ru: 'Футболки', et: 'T-särgid' },
    descs: {
      ru: 'Классическая футболка Moncler из премиального хлопка с фирменным логотипом на груди.\n• мягкий премиальный хлопок\n• прямой крой, комфортная посадка\n• фирменный логотип Moncler на груди\n• устойчивость к деформации после стирки\nИдеальная базовая вещь для любого повседневного образа.\nУнисекс модель',
      en: 'Classic Moncler T-shirt made from premium cotton with signature logo on the chest.\n• soft premium cotton\n• straight cut, comfortable fit\n• Moncler logo on chest\n• shape-retaining after washing\nThe perfect base layer for any everyday look.\nUnisex model',
      et: 'Klassikaline Moncler T-särk premium puuvillast firma logoga rinnal.\n• pehme premium puuvill\n• sirge lõige, mugav istuvus\n• Moncler logo rinnal\n• vormi säilitav pärast pesemist\nIdeaalne baasese igale igapäevasele riietusele.\nUnisex mudel',
    },
    images: ['images/moncler-basic-tshirt-1.jpg','images/moncler-basic-tshirt-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#9A9A9A', name: { ru: 'Серый', en: 'Grey', et: 'Hall' } },
      { hex: '#F5F5F5', name: { ru: 'Белый', en: 'White', et: 'Valge' } },
    ],
  },
  {
    id: 18,
    names: { en: 'Moncler Leather Badge T-Shirt', ru: 'Moncler Leather Badge T-Shirt', et: 'Moncler Leather Badge T-Shirt' },
    category: 't-shirts',
    cats: { en: 'T-Shirts', ru: 'Футболки', et: 'T-särgid' },
    descs: {
      ru: 'Стильная футболка Moncler с кожаным нашивным логотипом — характерная деталь, выделяющая её среди базовых вещей.\n• мягкий премиальный хлопок\n• кожаный нашивной логотип Moncler\n• прямой крой, комфортная посадка\n• деталь, которая делает образ завершённым\nУнисекс модель',
      en: 'Stylish Moncler T-shirt with a leather badge logo — a signature detail that sets it apart from standard basics.\n• soft premium cotton\n• leather Moncler badge logo\n• straight cut, comfortable fit\n• detail that completes any look\nUnisex model',
      et: 'Stiilne Moncler T-särk nahast pääsme logoga — iseloomulik detail, mis eristab seda tavalistest põhitoodetest.\n• pehme premium puuvill\n• nahast Moncler logo pääsme\n• sirge lõige, mugav istuvus\n• detail, mis viimistleb iga välimuse\nUnisex mudel',
    },
    images: ['images/moncler-leather-badge-1.jpg','images/moncler-leather-badge-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
    ],
  },
  {
    id: 19,
    names: { en: 'Moncler Blurred Logo T-Shirt', ru: 'Moncler Blurred Logo T-Shirt', et: 'Moncler Blurred Logo T-Shirt' },
    category: 't-shirts',
    cats: { en: 'T-Shirts', ru: 'Футболки', et: 'T-särgid' },
    descs: {
      ru: 'Футболка Moncler с графическим размытым принтом логотипа — смелое прочтение классического фирменного стиля.\n• мягкий премиальный хлопок\n• графический принт с размытым логотипом Moncler\n• прямой крой, комфортная посадка\n• актуальный streetwear-образ\nУнисекс модель',
      en: 'Moncler T-shirt with a graphic blurred logo print — a bold take on classic branding.\n• soft premium cotton\n• graphic blurred Moncler logo print\n• straight cut, comfortable fit\n• on-trend streetwear look\nUnisex model',
      et: 'Moncler T-särk graafilise hägustatud logo trükiga — julge tõlgendus klassikalisest brändingust.\n• pehme premium puuvill\n• graafiline hägustatud Moncler logo trükk\n• sirge lõige, mugav istuvus\n• trendikas streetwear välimus\nUnisex mudel',
    },
    images: ['images/moncler-blurred-logo-1.jpg','images/moncler-blurred-logo-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#F5F5F5', name: { ru: 'Белый', en: 'White', et: 'Valge' } },
    ],
  },
  {
    id: 20,
    names: { en: 'Moncler Stripe Trim Zip Hoodie', ru: 'Moncler Stripe Trim Zip Hoodie', et: 'Moncler Stripe Trim Zip Hoodie' },
    category: 'hoodies',
    cats: { en: 'Hoodies', ru: 'Худи', et: 'Kapuutsiga pusad' },
    descs: {
      ru: 'Спортивное худи Moncler на молнии с контрастными полосками на рукавах.\n• мягкий флисовый материал\n• молния по всей длине\n• контрастные полоски на рукавах\n• капюшон с регулировкой\n• фирменный логотип Moncler\nОтлично подходит для спортивного и casual-стиля.\nУнисекс модель',
      en: 'Sporty Moncler zip hoodie with contrast stripe trim on the sleeves.\n• soft fleece material\n• full-length zip\n• contrast stripes on sleeves\n• adjustable hood\n• Moncler logo\nGreat for sporty and casual looks.\nUnisex model',
      et: 'Sportilik Moncler tõmblukuga kapuutsiga pusa kontrastsete triipudega varrukatest.\n• pehme fliismaterjal\n• täispikk tõmblukk\n• kontrastsed triibud varrukatest\n• reguleeritav kapuuts\n• Moncler logo\nSobib sportlikuks ja casual stiiliks.\nUnisex mudel',
    },
    images: ['images/moncler-stripe-hoodie-1.jpg','images/moncler-stripe-hoodie-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#9A9A9A', name: { ru: 'Серый', en: 'Grey', et: 'Hall' } },
      { hex: '#F5F5F5', name: { ru: 'Белый', en: 'White', et: 'Valge' } },
    ],
  },
  {
    id: 21,
    names: { en: 'Moncler Hera Logo Patch Sweatshirt', ru: 'Moncler Hera Logo Patch Sweatshirt', et: 'Moncler Hera Logo Patch Sweatshirt' },
    category: 'hoodies',
    cats: { en: 'Hoodies', ru: 'Худи', et: 'Kapuutsiga pusad' },
    descs: {
      ru: 'Классический свитшот Moncler с нашивным логотипом — комфортная, тёплая и стильная базовая вещь.\n• мягкий хлопково-флисовый материал\n• нашивной логотип Moncler на груди\n• рибана на манжетах и внизу\n• удобный крой\nОтлично сочетается с джинсами, брюками и верхней одеждой.\nУнисекс модель',
      en: 'Classic Moncler sweatshirt with logo patch — comfortable, warm and stylish.\n• soft cotton-fleece material\n• Moncler logo patch on chest\n• ribbed cuffs and hem\n• comfortable cut\nPairs well with jeans, trousers and outerwear.\nUnisex model',
      et: 'Klassikaline Moncler dressipluus logo pääsmega — mugav, soe ja stiilne.\n• pehme puuvill-fliis materjal\n• Moncler logo pääsme rinnal\n• riblõng käistele ja alläärele\n• mugav lõige\nSobib teksade, pükste ja pealisrõivastega.\nUnisex mudel',
    },
    images: ['images/moncler-hera-sweatshirt-1.jpg','images/moncler-hera-sweatshirt-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
      { hex: '#5C6B3A', name: { ru: 'Хаки', en: 'Khaki', et: 'Khaki' } },
      { hex: '#9A9A9A', name: { ru: 'Серый', en: 'Grey', et: 'Hall' } },
      { hex: '#F5F5F5', name: { ru: 'Белый', en: 'White', et: 'Valge' } },
    ],
  },
  {
    id: 22,
    names: { en: 'Moncler Polo Shirt', ru: 'Moncler Polo Shirt', et: 'Moncler Polo Shirt' },
    category: 't-shirts',
    cats: { en: 'T-Shirts', ru: 'Футболки', et: 'T-särgid' },
    descs: {
      ru: 'Классическое поло Moncler из премиального пике — элегантная и универсальная вещь для повседневного и smart-casual образа.\n• премиальный хлопок пике\n• воротник с пуговицами\n• фирменный логотип Moncler на груди\n• комфортный прямой крой\nОтлично сочетается с брюками, шортами и лёгкими куртками.\nУнисекс модель',
      en: 'Classic Moncler polo shirt made from premium piqué — elegant and versatile for everyday and smart-casual looks.\n• premium piqué cotton\n• button collar\n• Moncler logo on chest\n• comfortable straight cut\nPairs well with trousers, shorts and light jackets.\nUnisex model',
      et: 'Klassikaline Moncler polo premium pikeest — elegantne ja mitmekülgne igapäevaseks ja smart-casual stiiliks.\n• premium piqué puuvill\n• nuppkraega\n• Moncler logo rinnal\n• mugav sirge lõige\nSobib pükste, lühikeste pükste ja kergete jopedega.\nUnisex mudel',
    },
    images: ['images/moncler-polo-1.jpg','images/moncler-polo-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
      { hex: '#F5F5F5', name: { ru: 'Белый', en: 'White', et: 'Valge' } },
    ],
  },
  {
    id: 23,
    names: { en: 'Moncler Logo Patch Swimming Shorts', ru: 'Moncler Logo Patch Swimming Shorts', et: 'Moncler Logo Patch Swimming Shorts' },
    category: 'bottoms',
    cats: { en: 'Bottoms', ru: 'Низ', et: 'Alaosal' },
    descs: {
      ru: 'Плавательные шорты Moncler с фирменным логотипом — стиль и функциональность для пляжа и повседневного лета.\n• быстросохнущий материал\n• подкладка из сетки\n• фирменный логотип Moncler\n• боковые карманы\n• эластичный пояс с завязками\nОтлично подходит для активного отдыха и летних образов.\nМужская модель',
      en: 'Moncler swimming shorts with signature logo patch — style and functionality for the beach and summer everyday wear.\n• quick-dry material\n• mesh lining\n• Moncler logo patch\n• side pockets\n• elastic waistband with drawstring\nPerfect for active leisure and summer looks.\nMen\'s model',
      et: 'Moncler ujumislühikesed püksid firma logo pääsmega — stiil ja funktsionaalsus rannaks ja suvisteks riieteks.\n• kiirkuivav materjal\n• võrguvoodri\n• Moncler logo pääsme\n• külgtaskud\n• elastne vööpael paeltega\nSobib aktiivseks puhkuseks ja suviseks stiiliks.\nMeeste mudel',
    },
    images: ['images/moncler-swim-shorts-1.jpg','images/moncler-swim-shorts-2.jpg'],
    color: '#1A1A1A',
    brand: 'Moncler',
    colors: [
      { hex: '#1A1A1A', name: { ru: 'Чёрный', en: 'Black', et: 'Must' } },
      { hex: '#1B2A4A', name: { ru: 'Тёмно-синий', en: 'Navy', et: 'Tumesinine' } },
      { hex: '#2B5FBF', name: { ru: 'Синий', en: 'Blue', et: 'Sinine' } },
      { hex: '#C0242B', name: { ru: 'Красный', en: 'Red', et: 'Punane' } },
      { hex: '#E8651A', name: { ru: 'Оранжевый', en: 'Orange', et: 'Oranž' } },
    ],
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
  const all = [...phrases, ...phrases];
  el.innerHTML = all.map((p) =>
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
  const textEl   = document.getElementById('modal-body-text');
  const colorsEl = document.getElementById('modal-colors');
  if (!overlay) return;
  const name = product.names[currentLang] || product.names.ru;
  nameEl.textContent = name;
  tgBtn.href         = buildTgLink(name);
  tgBtn.textContent  = t('modal_tg');
  if (textEl) textEl.textContent = t('modal_text');

  if (colorsEl) {
    colorsEl.innerHTML = '';
    const colors = product.colors || [];
    if (colors.length) {
      const label = document.createElement('p');
      label.className = 'modal-colors-label';
      label.textContent = currentLang === 'ru' ? 'Доступные цвета' : currentLang === 'et' ? 'Saadaolevad värvid' : 'Available colours';
      colorsEl.appendChild(label);
      const list = document.createElement('div');
      list.className = 'modal-colors-list';
      colors.forEach(c => {
        const item = document.createElement('div');
        item.className = 'modal-color-item';
        const dot = document.createElement('span');
        dot.className = 'modal-color-dot';
        dot.style.background = c.hex;
        if (c.hex === '#FFFFFF' || c.hex === '#F5F5F5') dot.style.border = '1px solid #ccc';
        const txt = document.createElement('span');
        txt.className = 'modal-color-name';
        txt.textContent = c.name[currentLang] || c.name.ru;
        item.appendChild(dot);
        item.appendChild(txt);
        list.appendChild(item);
      });
      colorsEl.appendChild(list);
    }
  }

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

  document.title = `${name} | Moncler Tallinn — Andrelook`;

  // Dynamic meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) { metaDesc = document.createElement('meta'); metaDesc.name = 'description'; document.head.appendChild(metaDesc); }
  metaDesc.content = currentLang === 'ru'
    ? `Купить ${name} в Таллинне или с доставкой по Европе. Пишите в Telegram.`
    : currentLang === 'et'
    ? `Osta ${name} Tallinnas või tarniga üle Euroopa. Kirjuta Telegramis.`
    : `Buy ${name} in Tallinn or delivery across Europe. Write us on Telegram.`;

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
    const colors = p.colors || [];
    let colorsHtml = '';
    if (colors.length) {
      const colorsLabel = currentLang === 'ru' ? 'Доступные цвета' : currentLang === 'et' ? 'Saadaolevad värvid' : 'Available colours';
      const dots = colors.map(c => {
        const border = (c.hex === '#F5F5F5' || c.hex === '#FFFFFF') ? 'border:1px solid #ccc;' : '';
        return `<div class="pd-color-item">
          <span class="pd-color-dot" style="background:${c.hex};${border}"></span>
          <span class="pd-color-name">${c.name[currentLang] || c.name.ru}</span>
        </div>`;
      }).join('');
      colorsHtml = `<div class="pd-colors">
        <p class="pd-colors-label">${colorsLabel}</p>
        <div class="pd-colors-list">${dots}</div>
      </div>`;
    }

    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    const sizesLabel = currentLang === 'ru' ? 'Размеры' : currentLang === 'et' ? 'Suurused' : 'Sizes';
    const sizesHtml = `<div class="pd-sizes">
      <p class="pd-sizes-label">${sizesLabel}</p>
      <div class="pd-sizes-list">${sizes.map(s => `<span class="pd-size">${s}</span>`).join('')}</div>
    </div>`;

    infoEl.innerHTML = `
      <p class="product-detail__cat">${cat}</p>
      <h1 class="product-detail__name">${name}</h1>
      <p class="product-detail__brand">${p.brand}</p>
      ${colorsHtml}
      ${sizesHtml}
      <div class="product-detail__desc">${desc.replace(/\n/g, '<br>')}</div>
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

/* ── Init ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileLang();
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

  function perView() {
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  let idx = 0;

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
    const cardW = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${idx * pv * cardW}px)`;
    dotsEl.querySelectorAll('.rev-dot').forEach((d, i) => d.classList.toggle('on', i === idx));
  }

  document.getElementById('rev-prev').onclick = () => goTo(idx - 1);
  document.getElementById('rev-next').onclick = () => goTo(idx + 1);

  buildDots();
  window.addEventListener('resize', () => { idx = 0; buildDots(); goTo(0); });
}

/* ── Mobile Lang Dropdown ───────────────────── */
function initMobileLang() {
  const btn = document.getElementById('mobile-lang-toggle');
  const dropdown = document.getElementById('mobile-lang-dropdown');
  if (!btn || !dropdown) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
  });

  dropdown.querySelectorAll('.lang-btn').forEach((langBtn) => {
    langBtn.addEventListener('click', () => {
      setLang(langBtn.dataset.lang);
      dropdown.classList.remove('open');
      // update label
      if (btn.querySelector('span')) btn.querySelector('span').textContent = langBtn.dataset.lang.toUpperCase();
    });
  });
}
