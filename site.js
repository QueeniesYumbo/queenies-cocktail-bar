const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  navLinks.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
}

document.querySelectorAll('[data-year]').forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const socialIcons = {
  instagram: {
    label: 'Queenie’s on Instagram',
    viewBox: '0 0 448 512',
    path: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
  },
  facebook: {
    label: 'Queenie’s on Facebook',
    viewBox: '0 0 320 512',
    path: 'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
  },
  tiktok: {
    label: 'Queenie’s on TikTok',
    viewBox: '0 0 448 512',
    path: 'M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z'
  }
};

document.querySelectorAll('.footer-social a, .social-placeholder a').forEach((link) => {
  const href = link.getAttribute('href') || '';
  const platform = href.includes('instagram') ? 'instagram' : href.includes('facebook') ? 'facebook' : href.includes('tiktok') ? 'tiktok' : '';
  if (!platform) return;
  const icon = socialIcons[platform];
  link.classList.add('social-icon-link', platform);
  link.setAttribute('aria-label', icon.label);
  link.setAttribute('title', icon.label);
  link.innerHTML = `<svg viewBox="${icon.viewBox}" aria-hidden="true" focusable="false"><path d="${icon.path}"></path></svg>`;
});

const translations = {
  es: {
    'Skip to content': 'Saltar al contenido',
    'Language': 'Idioma',
    'Menu': 'Menú',
    'Home': 'Inicio',
    'Drinks & What’s On': 'Bebidas y eventos',
    'Visit Us': 'Visítanos',
    'Opening soon · Yumbo Centre': 'Próxima apertura · Centro Yumbo',
    'Meet': 'Descubre',
    'A premium, relaxed LGBTQ+ cocktail bar in the heart of Playa del Inglés—made for beautifully mixed drinks, good music and easy conversation.': 'Un bar de cócteles LGBTQ+ premium y relajado en el corazón de Playa del Inglés, creado para disfrutar de cócteles bien preparados, buena música y conversaciones agradables.',
    'Explore Queenie’s': 'Descubre Queenie’s',
    'Find us in the Yumbo': 'Encuéntranos en el Yumbo',
    'Our doors open soon': 'Abrimos muy pronto',
    'Follow our launch journey and Winter Pride plans.': 'Sigue nuestros preparativos y planes para Winter Pride.',
    'The Queenie’s mood': 'El ambiente de Queenie’s',
    'Premium without the pretence.': 'Calidad premium, sin pretensiones.',
    'Come as you are, settle in and enjoy a calmer corner of the Yumbo—welcoming, sociable and proudly LGBTQ+.': 'Ven tal como eres, ponte cómodo y disfruta de un rincón más tranquilo del Yumbo: acogedor, sociable y orgullosamente LGBTQ+.',
    'Cocktails': 'Cócteles',
    'Mixed with care': 'Preparados con mimo',
    'Classics, signature serves, Pride specials and a regularly changing cocktail of the month.': 'Clásicos, cócteles de autor, especiales Pride y un cóctel del mes que cambia regularmente.',
    'Atmosphere': 'Ambiente',
    'Relaxed by design': 'Diseñado para relajarse',
    'A wide range of music videos spanning genres and decades—something for everyone—in an electric-blue and purple setting made for comfortable conversation.': 'Una amplia selección de videoclips de distintos géneros y décadas, con algo para todos, en un ambiente azul eléctrico y morado pensado para conversar cómodamente.',
    'Everyone welcome': 'Todo el mundo es bienvenido',
    'Friendly & inclusive': 'Amable e inclusivo',
    'A proudly LGBTQ+ venue for visitors, locals, friends—and well-behaved four-legged companions.': 'Un espacio orgullosamente LGBTQ+ para visitantes, residentes, amigos y compañeros de cuatro patas bien educados.',
    'Planned opening hours': 'Horario previsto',
    'Early drinks. Great evenings.': 'Copas desde temprano. Grandes noches.',
    'We plan to open from late afternoon, giving you somewhere polished and welcoming before the Yumbo evening gets into full swing.': 'Tenemos previsto abrir desde última hora de la tarde, ofreciéndote un lugar elegante y acogedor antes de que la noche del Yumbo esté en pleno apogeo.',
    'Typical opening': 'Apertura habitual',
    'Typical closing': 'Cierre habitual',
    'Peak events': 'Eventos especiales',
    'Later where permitted': 'Hasta más tarde cuando esté permitido',
    'Final opening days and confirmed hours will be published here before launch.': 'Los días y horarios definitivos se publicarán aquí antes de la apertura.',
    'Good drinks.': 'Buenas copas.',
    'Great nights.': 'Grandes noches.',
    'Queenie’s is being created around thoughtful cocktails, relaxed service and entertainment that brings people together without taking over the room.': 'Queenie’s nace alrededor de cócteles cuidados, un servicio relajado y entretenimiento que une a la gente sin dominar el ambiente.',
    'At the bar': 'En la barra',
    'A cocktail for every mood.': 'Un cóctel para cada momento.',
    'The full menu is still being perfected. Here is what you can expect when we open.': 'Seguimos perfeccionando la carta completa. Esto es lo que podrás encontrar cuando abramos.',
    'Signatures': 'De autor',
    'Only at Queenie’s': 'Solo en Queenie’s',
    'Distinctive house cocktails with premium spirits, considered flavours and unapologetically colourful presentation.': 'Cócteles exclusivos de la casa con destilados premium, sabores bien pensados y presentaciones llenas de color.',
    'Favourites': 'Favoritos',
    'Classics, properly made': 'Clásicos, bien preparados',
    'Well-known cocktails served with consistency, generous hospitality and no unnecessary fuss.': 'Cócteles conocidos, preparados con constancia, hospitalidad y sin complicaciones innecesarias.',
    'Something different': 'Algo diferente',
    'Seasonal specials': 'Especiales de temporada',
    'Pride-themed serves, a cocktail of the month and alcohol-free choices worth getting excited about.': 'Cócteles temáticos Pride, un cóctel del mes y opciones sin alcohol que realmente apetecen.',
    'What’s on': 'Qué hay',
    'Reasons to come back.': 'Razones para volver.',
    'Play': 'Juega',
    'Music bingo': 'Bingo musical',
    'Coming soon': 'Próximamente',
    'Familiar songs, a little friendly competition and a lively Queenie’s finish.': 'Canciones conocidas, un poco de competición amistosa y un final animado al estilo Queenie’s.',
    'Gather': 'Reúnete',
    'Sunday Funday': 'Sunday Funday',
    'We turn the vibe up a little with club anthems, dancefloor classics and a touch of that irresistible Spanish-night energy.': 'Subimos un poco el ambiente con himnos de club, clásicos de la pista de baile y un toque de esa irresistible energía de las noches españolas.',
    'Celebrate': 'Celebra',
    'Special nights': 'Noches especiales',
    'Occasional DJs, artists and themed events, announced as the calendar develops.': 'DJs, artistas y eventos temáticos ocasionales que anunciaremos a medida que avance el calendario.',
    'Winter Pride 2026': 'Winter Pride 2026',
    'Queenie’s is planning to join the party.': 'Queenie’s se prepara para unirse a la fiesta.',
    'We are working towards opening for Winter Pride, with planned daily opening from 16:00 until midnight or later where permitted. Expect Pride cocktails, a warm welcome and Queenie’s signature electric-blue-and-purple atmosphere.': 'Estamos trabajando para abrir durante Winter Pride, con un horario diario previsto de 16:00 a medianoche o más tarde cuando esté permitido. Te esperan cócteles Pride, una cálida bienvenida y el característico ambiente azul eléctrico y morado de Queenie’s.',
    'Final opening date and event programme will be confirmed here.': 'La fecha definitiva de apertura y el programa de eventos se confirmarán aquí.',
    'Plan your visit': 'Planea tu visita',
    'Visit Queenie’s': 'Visita Queenie’s',
    'Find your way': 'Encuentra el camino',
    'to us.': 'hasta nosotros.',
    'We’re on the second floor of the Yumbo Centre, close to the main square in Playa del Inglés.': 'Estamos en la segunda planta del Centro Yumbo, cerca de la plaza principal de Playa del Inglés.',
    'Open in Google Maps': 'Abrir en Google Maps',
    'Address': 'Dirección',
    'Second Floor, Sector 5': 'Segunda planta, Sector 5',
    'Gran Canaria, Spain': 'Gran Canaria, España',
    'Where to look': 'Dónde encontrarnos',
    'Above Wunderbar, near the main square.': 'Encima de Wunderbar, cerca de la plaza principal.',
    'Opening': 'Apertura',
    'Coming soon—confirmed launch date to follow.': 'Próximamente; la fecha de apertura se confirmará.',
    'Contact': 'Contacto',
    'Email and WhatsApp details will be added before opening.': 'Añadiremos el correo electrónico y WhatsApp antes de abrir.',
    'Accessibility': 'Accesibilidad',
    'Planning your visit.': 'Planifica tu visita.',
    'Queenie’s is on the second floor of the Yumbo Centre. The centre has lift access between levels, though routes and lift availability can vary. Contact details will be added before opening so guests can check their individual access needs with us directly.': 'Queenie’s está en la segunda planta del Centro Yumbo. El centro dispone de ascensores entre plantas, aunque las rutas y su disponibilidad pueden variar. Añadiremos nuestros datos de contacto antes de abrir para que cada persona pueda consultarnos directamente sus necesidades de acceso.',
    'Stay connected': 'Mantente al día',
    'Follow Queenie’s': 'Sigue a Queenie’s',
    'Follow our official channels for opening updates, drinks, entertainment and everything happening at Queenie’s.': 'Sigue nuestros canales oficiales para conocer las novedades sobre la apertura, las bebidas, el entretenimiento y todo lo que ocurre en Queenie’s.',
    'Social media': 'Redes sociales',
    'Primary navigation': 'Navegación principal',
    'Open navigation': 'Abrir navegación',
    'Queenie’s home': 'Inicio de Queenie’s',
    'Queenie’s neon Q': 'Logotipo de neón de Queenie’s',
    'Stylised location marker for Queenie’s in the Yumbo Centre': 'Marcador de ubicación de Queenie’s en el Centro Yumbo',
    'Queenie’s social media': 'Redes sociales de Queenie’s',
    'Queenie’s on Instagram': 'Queenie’s en Instagram',
    'Queenie’s on Facebook': 'Queenie’s en Facebook',
    'Queenie’s on TikTok': 'Queenie’s en TikTok'
  },
  de: {
    'Skip to content': 'Zum Inhalt springen',
    'Language': 'Sprache',
    'Menu': 'Menü',
    'Home': 'Startseite',
    'Drinks & What’s On': 'Drinks & Programm',
    'Visit Us': 'Besuche uns',
    'Opening soon · Yumbo Centre': 'Eröffnung in Kürze · Yumbo Centre',
    'Meet': 'Entdecke',
    'A premium, relaxed LGBTQ+ cocktail bar in the heart of Playa del Inglés—made for beautifully mixed drinks, good music and easy conversation.': 'Eine hochwertige, entspannte LGBTQ+ Cocktailbar im Herzen von Playa del Inglés – für hervorragend gemixte Drinks, gute Musik und ungezwungene Gespräche.',
    'Explore Queenie’s': 'Queenie’s entdecken',
    'Find us in the Yumbo': 'Finde uns im Yumbo',
    'Our doors open soon': 'Wir öffnen bald',
    'Follow our launch journey and Winter Pride plans.': 'Begleite unsere Vorbereitungen und Pläne für die Winter Pride.',
    'The Queenie’s mood': 'Das Queenie’s Gefühl',
    'Premium without the pretence.': 'Premium, aber ungezwungen.',
    'Come as you are, settle in and enjoy a calmer corner of the Yumbo—welcoming, sociable and proudly LGBTQ+.': 'Komm, wie du bist, mach es dir bequem und genieße eine ruhigere Ecke des Yumbo – herzlich, gesellig und stolz LGBTQ+.',
    'Cocktails': 'Cocktails',
    'Mixed with care': 'Mit Sorgfalt gemixt',
    'Classics, signature serves, Pride specials and a regularly changing cocktail of the month.': 'Klassiker, Signature Drinks, Pride Specials und ein regelmäßig wechselnder Cocktail des Monats.',
    'Atmosphere': 'Atmosphäre',
    'Relaxed by design': 'Entspannung mit Konzept',
    'A wide range of music videos spanning genres and decades—something for everyone—in an electric-blue and purple setting made for comfortable conversation.': 'Eine große Auswahl an Musikvideos aus verschiedenen Genres und Jahrzehnten – für jeden etwas – in einem elektrisierend blauen und violetten Ambiente, das zu entspannten Gesprächen einlädt.',
    'Everyone welcome': 'Alle sind willkommen',
    'Friendly & inclusive': 'Herzlich & inklusiv',
    'A proudly LGBTQ+ venue for visitors, locals, friends—and well-behaved four-legged companions.': 'Ein stolzer LGBTQ+ Treffpunkt für Urlauber, Einheimische, Freunde und gut erzogene Vierbeiner.',
    'Planned opening hours': 'Geplante Öffnungszeiten',
    'Early drinks. Great evenings.': 'Frühe Drinks. Großartige Abende.',
    'We plan to open from late afternoon, giving you somewhere polished and welcoming before the Yumbo evening gets into full swing.': 'Wir planen, ab dem späten Nachmittag zu öffnen – ein stilvoller, einladender Ort, bevor der Abend im Yumbo richtig beginnt.',
    'Typical opening': 'Übliche Öffnung',
    'Typical closing': 'Üblicher Schluss',
    'Peak events': 'Besondere Events',
    'Later where permitted': 'Später, sofern erlaubt',
    'Final opening days and confirmed hours will be published here before launch.': 'Die endgültigen Öffnungstage und bestätigten Zeiten werden vor der Eröffnung hier veröffentlicht.',
    'Good drinks.': 'Gute Drinks.',
    'Great nights.': 'Großartige Nächte.',
    'Queenie’s is being created around thoughtful cocktails, relaxed service and entertainment that brings people together without taking over the room.': 'Queenie’s entsteht rund um durchdachte Cocktails, entspannten Service und Unterhaltung, die Menschen zusammenbringt, ohne den Raum zu beherrschen.',
    'At the bar': 'An der Bar',
    'A cocktail for every mood.': 'Ein Cocktail für jede Stimmung.',
    'The full menu is still being perfected. Here is what you can expect when we open.': 'Die vollständige Karte wird noch perfektioniert. Darauf kannst du dich zur Eröffnung freuen.',
    'Signatures': 'Signatures',
    'Only at Queenie’s': 'Nur bei Queenie’s',
    'Distinctive house cocktails with premium spirits, considered flavours and unapologetically colourful presentation.': 'Unverwechselbare Hauscocktails mit Premium-Spirituosen, ausgewogenen Aromen und farbenfroher Präsentation.',
    'Favourites': 'Favoriten',
    'Classics, properly made': 'Klassiker, richtig gemacht',
    'Well-known cocktails served with consistency, generous hospitality and no unnecessary fuss.': 'Bekannte Cocktails, zuverlässig serviert, mit herzlicher Gastfreundschaft und ohne unnötigen Schnickschnack.',
    'Something different': 'Etwas Besonderes',
    'Seasonal specials': 'Saisonale Specials',
    'Pride-themed serves, a cocktail of the month and alcohol-free choices worth getting excited about.': 'Pride-Drinks, ein Cocktail des Monats und alkoholfreie Alternativen, auf die man sich freuen kann.',
    'What’s on': 'Programm',
    'Reasons to come back.': 'Gründe, wiederzukommen.',
    'Play': 'Spielen',
    'Music bingo': 'Musik-Bingo',
    'Coming soon': 'Demnächst',
    'Familiar songs, a little friendly competition and a lively Queenie’s finish.': 'Bekannte Songs, ein wenig freundschaftlicher Wettbewerb und ein schwungvolles Queenie’s Finale.',
    'Gather': 'Zusammenkommen',
    'Sunday Funday': 'Sunday Funday',
    'We turn the vibe up a little with club anthems, dancefloor classics and a touch of that irresistible Spanish-night energy.': 'Wir drehen die Stimmung ein wenig auf – mit Clubhymnen, Dancefloor-Klassikern und einem Hauch unwiderstehlicher spanischer Nachtenergie.',
    'Celebrate': 'Feiern',
    'Special nights': 'Besondere Nächte',
    'Occasional DJs, artists and themed events, announced as the calendar develops.': 'Gelegentliche DJs, Künstler und Themenabende werden angekündigt, sobald das Programm steht.',
    'Winter Pride 2026': 'Winter Pride 2026',
    'Queenie’s is planning to join the party.': 'Queenie’s plant, bei der Party dabei zu sein.',
    'We are working towards opening for Winter Pride, with planned daily opening from 16:00 until midnight or later where permitted. Expect Pride cocktails, a warm welcome and Queenie’s signature electric-blue-and-purple atmosphere.': 'Wir arbeiten auf eine Eröffnung zur Winter Pride hin und planen täglich von 16:00 Uhr bis Mitternacht oder, sofern erlaubt, länger zu öffnen. Freu dich auf Pride-Cocktails, einen herzlichen Empfang und Queenie’s unverwechselbare elektrisierend blau-violette Atmosphäre.',
    'Final opening date and event programme will be confirmed here.': 'Das endgültige Eröffnungsdatum und das Veranstaltungsprogramm werden hier bestätigt.',
    'Plan your visit': 'Besuch planen',
    'Visit Queenie’s': 'Besuche Queenie’s',
    'Find your way': 'Finde den Weg',
    'to us.': 'zu uns.',
    'We’re on the second floor of the Yumbo Centre, close to the main square in Playa del Inglés.': 'Du findest uns im zweiten Stock des Yumbo Centre, nahe dem Hauptplatz in Playa del Inglés.',
    'Open in Google Maps': 'In Google Maps öffnen',
    'Address': 'Adresse',
    'Second Floor, Sector 5': 'Zweiter Stock, Sektor 5',
    'Gran Canaria, Spain': 'Gran Canaria, Spanien',
    'Where to look': 'Wo du uns findest',
    'Above Wunderbar, near the main square.': 'Über der Wunderbar, nahe dem Hauptplatz.',
    'Opening': 'Eröffnung',
    'Coming soon—confirmed launch date to follow.': 'Demnächst – das bestätigte Eröffnungsdatum folgt.',
    'Contact': 'Kontakt',
    'Email and WhatsApp details will be added before opening.': 'E-Mail- und WhatsApp-Kontaktdaten werden vor der Eröffnung ergänzt.',
    'Accessibility': 'Barrierefreiheit',
    'Planning your visit.': 'Plane deinen Besuch.',
    'Queenie’s is on the second floor of the Yumbo Centre. The centre has lift access between levels, though routes and lift availability can vary. Contact details will be added before opening so guests can check their individual access needs with us directly.': 'Queenie’s befindet sich im zweiten Stock des Yumbo Centre. Das Zentrum verfügt über Aufzüge zwischen den Ebenen, Wege und Verfügbarkeit können jedoch variieren. Vor der Eröffnung ergänzen wir Kontaktdaten, damit Gäste ihre individuellen Zugangsbedürfnisse direkt mit uns klären können.',
    'Stay connected': 'Bleib auf dem Laufenden',
    'Follow Queenie’s': 'Folge Queenie’s',
    'Follow our official channels for opening updates, drinks, entertainment and everything happening at Queenie’s.': 'Folge unseren offiziellen Kanälen für Neuigkeiten zur Eröffnung, zu Drinks, Unterhaltung und allem, was bei Queenie’s passiert.',
    'Social media': 'Soziale Medien',
    'Primary navigation': 'Hauptnavigation',
    'Open navigation': 'Navigation öffnen',
    'Queenie’s home': 'Queenie’s Startseite',
    'Queenie’s neon Q': 'Queenie’s Neonlogo',
    'Stylised location marker for Queenie’s in the Yumbo Centre': 'Stilisierte Standortmarkierung für Queenie’s im Yumbo Centre',
    'Queenie’s social media': 'Queenie’s soziale Medien',
    'Queenie’s on Instagram': 'Queenie’s auf Instagram',
    'Queenie’s on Facebook': 'Queenie’s auf Facebook',
    'Queenie’s on TikTok': 'Queenie’s auf TikTok'
  }
};

translations.es['Special Winter Pride menu coming'] = 'Próximamente: menú especial de Winter Pride';
translations.de['Special Winter Pride menu coming'] = 'Bald erhältlich: unsere spezielle Winter-Pride-Karte';

const translatedTitles = {
  'Queenie’s Cocktail Bar | Yumbo Centre': { es: 'Queenie’s Cocktail Bar | Centro Yumbo', de: 'Queenie’s Cocktail Bar | Yumbo Centre' },
  'Drinks & What’s On | Queenie’s': { es: 'Bebidas y eventos | Queenie’s', de: 'Drinks & Programm | Queenie’s' },
  'Visit Us | Queenie’s Cocktail Bar': { es: 'Visítanos | Queenie’s Cocktail Bar', de: 'Besuche uns | Queenie’s Cocktail Bar' }
};

const translatedDescriptions = {
  'Queenie’s Cocktail Bar — premium cocktails and a relaxed, welcoming atmosphere in the Yumbo Centre, Playa del Inglés.': { es: 'Queenie’s Cocktail Bar: cócteles premium y un ambiente relajado y acogedor en el Centro Yumbo, Playa del Inglés.', de: 'Queenie’s Cocktail Bar – Premium-Cocktails und eine entspannte, einladende Atmosphäre im Yumbo Centre, Playa del Inglés.' },
  'Discover cocktails, themed nights and Winter Pride plans at Queenie’s Cocktail Bar in the Yumbo Centre.': { es: 'Descubre cócteles, noches temáticas y nuestros planes para Winter Pride en Queenie’s Cocktail Bar, en el Centro Yumbo.', de: 'Entdecke Cocktails, Themenabende und unsere Winter-Pride-Pläne in Queenie’s Cocktail Bar im Yumbo Centre.' },
  'Find Queenie’s Cocktail Bar on the second floor of the Yumbo Centre in Playa del Inglés, Gran Canaria.': { es: 'Encuentra Queenie’s Cocktail Bar en la segunda planta del Centro Yumbo, en Playa del Inglés, Gran Canaria.', de: 'Du findest Queenie’s Cocktail Bar im zweiten Stock des Yumbo Centre in Playa del Inglés, Gran Canaria.' }
};

translations.fr = {
  "Skip to content": "Aller au contenu",
  "Language": "Langue",
  "Menu": "Menu",
  "Home": "Accueil",
  "Drinks & What’s On": "Boissons et événements",
  "Visit Us": "Nous trouver",
  "Opening soon · Yumbo Centre": "Ouverture prochaine · Yumbo Centre",
  "Meet": "Découvrez",
  "A premium, relaxed LGBTQ+ cocktail bar in the heart of Playa del Inglés—made for beautifully mixed drinks, good music and easy conversation.": "Un bar à cocktails LGBTQ+ haut de gamme et décontracté au cœur de Playa del Inglés, pour savourer de délicieux cocktails, écouter de la bonne musique et discuter en toute simplicité.",
  "Explore Queenie’s": "Découvrez Queenie’s",
  "Find us in the Yumbo": "Retrouvez-nous au Yumbo",
  "Our doors open soon": "Nous ouvrons bientôt",
  "Follow our launch journey and Winter Pride plans.": "Suivez nos préparatifs d’ouverture et nos projets pour la Winter Pride.",
  "The Queenie’s mood": "L’esprit Queenie’s",
  "Premium without the pretence.": "Le raffinement, sans prétention.",
  "Come as you are, settle in and enjoy a calmer corner of the Yumbo—welcoming, sociable and proudly LGBTQ+.": "Venez comme vous êtes, installez-vous et profitez d’un coin plus calme du Yumbo : accueillant, convivial et fièrement LGBTQ+.",
  "Cocktails": "Cocktails",
  "Mixed with care": "Préparés avec soin",
  "Classics, signature serves, Pride specials and a regularly changing cocktail of the month.": "Des classiques, des créations maison, des spécialités Pride et un cocktail du mois régulièrement renouvelé.",
  "Atmosphere": "Ambiance",
  "Relaxed by design": "Pensé pour se détendre",
  "A wide range of music videos spanning genres and decades—something for everyone—in an electric-blue and purple setting made for comfortable conversation.": "Un vaste choix de clips musicaux de tous les styles et de toutes les époques, pour tous les goûts, dans un décor bleu électrique et violet propice à la conversation.",
  "Everyone welcome": "Tout le monde est bienvenu",
  "Friendly & inclusive": "Convivial et inclusif",
  "A proudly LGBTQ+ venue for visitors, locals, friends—and well-behaved four-legged companions.": "Un lieu fièrement LGBTQ+ pour les visiteurs, les habitants, les amis et les compagnons à quatre pattes bien élevés.",
  "Planned opening hours": "Horaires prévus",
  "Early drinks. Great evenings.": "Un verre dès l’après-midi. De belles soirées.",
  "We plan to open from late afternoon, giving you somewhere polished and welcoming before the Yumbo evening gets into full swing.": "Nous prévoyons d’ouvrir en fin d’après-midi, pour vous offrir un cadre élégant et accueillant avant que la soirée ne batte son plein au Yumbo.",
  "Typical opening": "Ouverture habituelle",
  "Typical closing": "Fermeture habituelle",
  "Peak events": "Grands événements",
  "Later where permitted": "Plus tard si autorisé",
  "Final opening days and confirmed hours will be published here before launch.": "Les jours et horaires d’ouverture définitifs seront publiés ici avant l’ouverture.",
  "Good drinks.": "De bons cocktails.",
  "Great nights.": "De belles soirées.",
  "Queenie’s is being created around thoughtful cocktails, relaxed service and entertainment that brings people together without taking over the room.": "Queenie’s prend forme autour de cocktails soignés, d’un service décontracté et d’animations qui rassemblent sans envahir l’espace.",
  "At the bar": "Au bar",
  "A cocktail for every mood.": "Un cocktail pour chaque envie.",
  "The full menu is still being perfected. Here is what you can expect when we open.": "Nous peaufinons encore la carte complète. Voici ce qui vous attend à l’ouverture.",
  "Signatures": "Créations maison",
  "Only at Queenie’s": "Seulement chez Queenie’s",
  "Distinctive house cocktails with premium spirits, considered flavours and unapologetically colourful presentation.": "Des cocktails maison uniques, des spiritueux haut de gamme, des saveurs équilibrées et une présentation résolument colorée.",
  "Favourites": "Les incontournables",
  "Classics, properly made": "Des classiques bien préparés",
  "Well-known cocktails served with consistency, generous hospitality and no unnecessary fuss.": "Des cocktails appréciés, préparés avec régularité, servis avec générosité et sans complications inutiles.",
  "Something different": "Envie d’autre chose",
  "Seasonal specials": "Spécialités de saison",
  "Pride-themed serves, a cocktail of the month and alcohol-free choices worth getting excited about.": "Des cocktails sur le thème de la Pride, un cocktail du mois et des options sans alcool qui donnent envie.",
  "What’s on": "Au programme",
  "Reasons to come back.": "De bonnes raisons de revenir.",
  "Play": "Jouez",
  "Music bingo": "Bingo musical",
  "Coming soon": "Bientôt",
  "Familiar songs, a little friendly competition and a lively Queenie’s finish.": "Des chansons connues, un peu de compétition amicale et un final animé à la Queenie’s.",
  "Gather": "Retrouvons-nous",
  "Sunday Funday": "Sunday Funday",
  "Queenie’s Sunday Sessions": "Queenie’s Sunday Sessions",
  "We turn the vibe up a little with club anthems, dancefloor classics and a touch of that irresistible Spanish-night energy.": "On fait monter l’ambiance avec des hymnes de club, des classiques du dancefloor et une touche de cette irrésistible énergie des nuits espagnoles.",
  "Celebrate": "Célébrez",
  "Special nights": "Soirées spéciales",
  "Occasional DJs, artists and themed events, announced as the calendar develops.": "Des DJ, des artistes et des soirées à thème ponctuels, annoncés au fil de la programmation.",
  "Winter Pride 2026": "Winter Pride 2026",
  "Queenie’s is planning to join the party.": "Queenie’s se prépare à faire la fête.",
  "We are working towards opening for Winter Pride, with planned daily opening from 16:00 until midnight or later where permitted. Expect Pride cocktails, a warm welcome and Queenie’s signature electric-blue-and-purple atmosphere.": "Nous préparons notre ouverture pour la Winter Pride, avec des horaires quotidiens prévus de 16 h à minuit, ou plus tard si autorisé. Au programme : des cocktails Pride, un accueil chaleureux et l’ambiance bleu électrique et violet emblématique de Queenie’s.",
  "Final opening date and event programme will be confirmed here.": "La date d’ouverture définitive et le programme des événements seront confirmés ici.",
  "Plan your visit": "Préparez votre visite",
  "Visit Queenie’s": "Venez chez Queenie’s",
  "Find your way": "Trouvez le chemin",
  "to us.": "jusqu’à nous.",
  "Find your way to us.": "Comment nous trouver.",
  "We’re on the second floor of the Yumbo Centre, close to the main square in Playa del Inglés.": "Nous sommes au deuxième étage du Yumbo Centre, près de la place principale de Playa del Inglés.",
  "Open in Google Maps": "Ouvrir dans Google Maps",
  "Address": "Adresse",
  "Second Floor, Sector 5": "Deuxième étage, secteur 5",
  "Gran Canaria, Spain": "Grande Canarie, Espagne",
  "Where to look": "Où nous trouver",
  "Above Wunderbar, near the main square.": "Au-dessus du Wunderbar, près de la place principale.",
  "Opening": "Ouverture",
  "Coming soon—confirmed launch date to follow.": "Ouverture prochaine : la date sera confirmée bientôt.",
  "Contact": "Contact",
  "Email and WhatsApp details will be added before opening.": "Nos coordonnées e-mail et WhatsApp seront ajoutées avant l’ouverture.",
  "Accessibility": "Accessibilité",
  "Planning your visit.": "Préparez votre visite.",
  "Queenie’s is on the second floor of the Yumbo Centre. The centre has lift access between levels, though routes and lift availability can vary. Contact details will be added before opening so guests can check their individual access needs with us directly.": "Queenie’s se trouve au deuxième étage du Yumbo Centre. Des ascenseurs relient les différents niveaux, mais les itinéraires et leur disponibilité peuvent varier. Nos coordonnées seront ajoutées avant l’ouverture pour vous permettre de nous contacter directement au sujet de vos besoins d’accès.",
  "Stay connected": "Gardez le contact",
  "Follow Queenie’s": "Suivez Queenie’s",
  "Follow our official channels for opening updates, drinks, entertainment and everything happening at Queenie’s.": "Suivez nos comptes officiels pour découvrir les actualités de l’ouverture, les boissons, les animations et tout ce qui se passe chez Queenie’s.",
  "Social media": "Réseaux sociaux",
  "Primary navigation": "Navigation principale",
  "Open navigation": "Ouvrir le menu de navigation",
  "Queenie’s home": "Accueil de Queenie’s",
  "Queenie’s neon Q": "Q néon de Queenie’s",
  "Stylised location marker for Queenie’s in the Yumbo Centre": "Repère de localisation de Queenie’s au Yumbo Centre",
  "Queenie’s social media": "Réseaux sociaux de Queenie’s",
  "Queenie’s on Instagram": "Queenie’s sur Instagram",
  "Queenie’s on Facebook": "Queenie’s sur Facebook",
  "Queenie’s on TikTok": "Queenie’s sur TikTok",
  "Special Winter Pride menu coming": "Bientôt : notre carte spéciale Winter Pride"
};
translations.nl = {
  "Skip to content": "Ga naar inhoud",
  "Language": "Taal",
  "Menu": "Menu",
  "Home": "Home",
  "Drinks & What’s On": "Drankjes & agenda",
  "Visit Us": "Bezoek ons",
  "Opening soon · Yumbo Centre": "Binnenkort open · Yumbo Centre",
  "Meet": "Ontdek",
  "A premium, relaxed LGBTQ+ cocktail bar in the heart of Playa del Inglés—made for beautifully mixed drinks, good music and easy conversation.": "Een ontspannen LGBTQ+ cocktailbar met premiumkwaliteit in het hart van Playa del Inglés, voor heerlijk gemixte drankjes, goede muziek en gezellige gesprekken.",
  "Explore Queenie’s": "Ontdek Queenie’s",
  "Find us in the Yumbo": "Vind ons in het Yumbo",
  "Our doors open soon": "We openen binnenkort",
  "Follow our launch journey and Winter Pride plans.": "Volg onze voorbereidingen voor de opening en onze plannen voor Winter Pride.",
  "The Queenie’s mood": "De sfeer van Queenie’s",
  "Premium without the pretence.": "Premium, zonder pretenties.",
  "Come as you are, settle in and enjoy a calmer corner of the Yumbo—welcoming, sociable and proudly LGBTQ+.": "Kom zoals je bent, neem plaats en geniet van een rustiger plekje in het Yumbo: gastvrij, gezellig en met trots LGBTQ+.",
  "Cocktails": "Cocktails",
  "Mixed with care": "Met zorg gemixt",
  "Classics, signature serves, Pride specials and a regularly changing cocktail of the month.": "Klassiekers, huiscocktails, Pride-specials en een regelmatig wisselende cocktail van de maand.",
  "Atmosphere": "Sfeer",
  "Relaxed by design": "Gemaakt om te ontspannen",
  "A wide range of music videos spanning genres and decades—something for everyone—in an electric-blue and purple setting made for comfortable conversation.": "Een ruime keuze aan muziekvideo’s uit allerlei genres en decennia, voor ieder wat wils, in een elektrisch blauw en paars decor waar je ontspannen kunt bijpraten.",
  "Everyone welcome": "Iedereen welkom",
  "Friendly & inclusive": "Vriendelijk & inclusief",
  "A proudly LGBTQ+ venue for visitors, locals, friends—and well-behaved four-legged companions.": "Een plek die met trots LGBTQ+ is, voor bezoekers, locals, vrienden en goed opgevoede viervoeters.",
  "Planned opening hours": "Geplande openingstijden",
  "Early drinks. Great evenings.": "Vroeg een drankje. Heerlijke avonden.",
  "We plan to open from late afternoon, giving you somewhere polished and welcoming before the Yumbo evening gets into full swing.": "We zijn van plan vanaf de late namiddag open te gaan, zodat je al terechtkunt op een stijlvolle, gastvrije plek voordat de avond in het Yumbo echt losbarst.",
  "Typical opening": "Gebruikelijke openingstijd",
  "Typical closing": "Gebruikelijke sluitingstijd",
  "Peak events": "Grote evenementen",
  "Later where permitted": "Langer open waar toegestaan",
  "Final opening days and confirmed hours will be published here before launch.": "De definitieve openingsdagen en bevestigde tijden worden hier vóór de opening gepubliceerd.",
  "Good drinks.": "Goede drankjes.",
  "Great nights.": "Geweldige avonden.",
  "Queenie’s is being created around thoughtful cocktails, relaxed service and entertainment that brings people together without taking over the room.": "Bij Queenie’s draait het om zorgvuldig gemaakte cocktails, ontspannen service en entertainment dat mensen samenbrengt zonder de hele ruimte over te nemen.",
  "At the bar": "Aan de bar",
  "A cocktail for every mood.": "Een cocktail voor elke stemming.",
  "The full menu is still being perfected. Here is what you can expect when we open.": "We leggen nog de laatste hand aan de volledige kaart. Dit kun je bij de opening verwachten.",
  "Signatures": "Huiscocktails",
  "Only at Queenie’s": "Alleen bij Queenie’s",
  "Distinctive house cocktails with premium spirits, considered flavours and unapologetically colourful presentation.": "Bijzondere huiscocktails met premiumdistillaten, doordachte smaken en een uitgesproken kleurrijke presentatie.",
  "Favourites": "Favorieten",
  "Classics, properly made": "Klassiekers, goed gemaakt",
  "Well-known cocktails served with consistency, generous hospitality and no unnecessary fuss.": "Bekende cocktails, elke keer met dezelfde kwaliteit, royaal gastheerschap en zonder onnodig gedoe.",
  "Something different": "Iets anders",
  "Seasonal specials": "Seizoensspecials",
  "Pride-themed serves, a cocktail of the month and alcohol-free choices worth getting excited about.": "Drankjes in Pride-thema, een cocktail van de maand en alcoholvrije opties om enthousiast van te worden.",
  "What’s on": "Wat is er te doen",
  "Reasons to come back.": "Redenen om terug te komen.",
  "Play": "Speel mee",
  "Music bingo": "Muziekbingo",
  "Coming soon": "Binnenkort",
  "Familiar songs, a little friendly competition and a lively Queenie’s finish.": "Bekende nummers, een beetje vriendschappelijke competitie en een bruisende afsluiting op z’n Queenie’s.",
  "Gather": "Kom samen",
  "Sunday Funday": "Sunday Funday",
  "Queenie’s Sunday Sessions": "Queenie’s Sunday Sessions",
  "We turn the vibe up a little with club anthems, dancefloor classics and a touch of that irresistible Spanish-night energy.": "We voeren de sfeer een beetje op met clubanthems, dancefloorklassiekers en een vleugje van die onweerstaanbare Spaanse nachtenergie.",
  "Celebrate": "Vier mee",
  "Special nights": "Bijzondere avonden",
  "Occasional DJs, artists and themed events, announced as the calendar develops.": "Af en toe dj’s, artiesten en thema-evenementen, die we aankondigen zodra het programma vorm krijgt.",
  "Winter Pride 2026": "Winter Pride 2026",
  "Queenie’s is planning to join the party.": "Queenie’s maakt zich klaar om mee te feesten.",
  "We are working towards opening for Winter Pride, with planned daily opening from 16:00 until midnight or later where permitted. Expect Pride cocktails, a warm welcome and Queenie’s signature electric-blue-and-purple atmosphere.": "We werken toe naar een opening tijdens Winter Pride, met geplande dagelijkse openingstijden van 16:00 tot middernacht of later waar toegestaan. Verwacht Pride-cocktails, een warm welkom en de kenmerkende elektrisch blauwe en paarse sfeer van Queenie’s.",
  "Final opening date and event programme will be confirmed here.": "De definitieve openingsdatum en het evenementenprogramma worden hier bevestigd.",
  "Plan your visit": "Plan je bezoek",
  "Visit Queenie’s": "Bezoek Queenie’s",
  "Find your way": "Vind de weg",
  "to us.": "naar ons.",
  "Find your way to us.": "Zo vind je ons.",
  "We’re on the second floor of the Yumbo Centre, close to the main square in Playa del Inglés.": "Je vindt ons op de tweede verdieping van het Yumbo Centre, vlak bij het centrale plein in Playa del Inglés.",
  "Open in Google Maps": "Openen in Google Maps",
  "Address": "Adres",
  "Second Floor, Sector 5": "Tweede verdieping, sector 5",
  "Gran Canaria, Spain": "Gran Canaria, Spanje",
  "Where to look": "Waar je ons vindt",
  "Above Wunderbar, near the main square.": "Boven Wunderbar, vlak bij het centrale plein.",
  "Opening": "Opening",
  "Coming soon—confirmed launch date to follow.": "Binnenkort open; de bevestigde openingsdatum volgt.",
  "Contact": "Contact",
  "Email and WhatsApp details will be added before opening.": "Ons e-mailadres en WhatsApp-nummer worden vóór de opening toegevoegd.",
  "Accessibility": "Toegankelijkheid",
  "Planning your visit.": "Je bezoek plannen.",
  "Queenie’s is on the second floor of the Yumbo Centre. The centre has lift access between levels, though routes and lift availability can vary. Contact details will be added before opening so guests can check their individual access needs with us directly.": "Queenie’s bevindt zich op de tweede verdieping van het Yumbo Centre. Er zijn liften tussen de verdiepingen, maar routes en de beschikbaarheid van liften kunnen variëren. Onze contactgegevens worden vóór de opening toegevoegd, zodat je specifieke toegankelijkheidsbehoeften rechtstreeks met ons kunt bespreken.",
  "Stay connected": "Blijf op de hoogte",
  "Follow Queenie’s": "Volg Queenie’s",
  "Follow our official channels for opening updates, drinks, entertainment and everything happening at Queenie’s.": "Volg onze officiële kanalen voor nieuws over de opening, drankjes, entertainment en alles wat er bij Queenie’s gebeurt.",
  "Social media": "Sociale media",
  "Primary navigation": "Hoofdnavigatie",
  "Open navigation": "Navigatie openen",
  "Queenie’s home": "Queenie’s startpagina",
  "Queenie’s neon Q": "Queenie’s neon-Q",
  "Stylised location marker for Queenie’s in the Yumbo Centre": "Gestileerde locatiemarkering voor Queenie’s in het Yumbo Centre",
  "Queenie’s social media": "Sociale media van Queenie’s",
  "Queenie’s on Instagram": "Queenie’s op Instagram",
  "Queenie’s on Facebook": "Queenie’s op Facebook",
  "Queenie’s on TikTok": "Queenie’s op TikTok",
  "Special Winter Pride menu coming": "Binnenkort: onze speciale Winter Pride-kaart"
};

Object.assign(translatedTitles["Queenie’s Cocktail Bar | Yumbo Centre"], {"fr":"Queenie’s Cocktail Bar | Yumbo Centre","nl":"Queenie’s Cocktail Bar | Yumbo Centre"});
Object.assign(translatedTitles["Drinks & What’s On | Queenie’s"], {"fr":"Boissons et événements | Queenie’s","nl":"Drankjes & agenda | Queenie’s"});
Object.assign(translatedTitles["Visit Us | Queenie’s Cocktail Bar"], {"fr":"Nous trouver | Queenie’s Cocktail Bar","nl":"Bezoek ons | Queenie’s Cocktail Bar"});
Object.assign(translatedDescriptions["Queenie’s Cocktail Bar — premium cocktails and a relaxed, welcoming atmosphere in the Yumbo Centre, Playa del Inglés."], {"fr":"Queenie’s Cocktail Bar : des cocktails haut de gamme et une ambiance détendue et accueillante au Yumbo Centre, à Playa del Inglés.","nl":"Queenie’s Cocktail Bar: premiumcocktails en een ontspannen, gastvrije sfeer in het Yumbo Centre, Playa del Inglés."});
Object.assign(translatedDescriptions["Discover cocktails, themed nights and Winter Pride plans at Queenie’s Cocktail Bar in the Yumbo Centre."], {"fr":"Découvrez les cocktails, les soirées à thème et les projets pour la Winter Pride chez Queenie’s Cocktail Bar au Yumbo Centre.","nl":"Ontdek cocktails, thema-avonden en plannen voor Winter Pride bij Queenie’s Cocktail Bar in het Yumbo Centre."});
Object.assign(translatedDescriptions["Find Queenie’s Cocktail Bar on the second floor of the Yumbo Centre in Playa del Inglés, Gran Canaria."], {"fr":"Retrouvez Queenie’s Cocktail Bar au deuxième étage du Yumbo Centre, à Playa del Inglés, Grande Canarie.","nl":"Je vindt Queenie’s Cocktail Bar op de tweede verdieping van het Yumbo Centre in Playa del Inglés, Gran Canaria."});

const originalTitle = document.title;
const descriptionMeta = document.querySelector('meta[name="description"]');
const originalDescription = descriptionMeta?.getAttribute('content') || '';
const originalText = new WeakMap();
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const textNodes = [];
let currentNode;

while ((currentNode = walker.nextNode())) {
  if (currentNode.parentElement?.closest('script, style, select')) continue;
  if (!currentNode.nodeValue.trim()) continue;
  originalText.set(currentNode, currentNode.nodeValue);
  textNodes.push(currentNode);
}

const translatableAttributes = ['aria-label', 'title'];
const attributeElements = [...document.querySelectorAll('[aria-label], [title]')];
attributeElements.forEach((element) => {
  translatableAttributes.forEach((attribute) => {
    const value = element.getAttribute(attribute);
    if (value) element.dataset[`original${attribute === 'aria-label' ? 'AriaLabel' : 'Title'}`] = value;
  });
});

function translateValue(value, language) {
  return language === 'en' ? value : (translations[language]?.[value] || value);
}

function applyLanguage(language) {
  const selectedLanguage = ['en', 'es', 'de', 'fr', 'nl'].includes(language) ? language : 'en';
  document.documentElement.lang = selectedLanguage;

  textNodes.forEach((node) => {
    const source = originalText.get(node);
    const trimmed = source.trim();
    const translated = translateValue(trimmed, selectedLanguage);
    node.nodeValue = source.replace(trimmed, translated);
  });

  attributeElements.forEach((element) => {
    const ariaSource = element.dataset.originalAriaLabel;
    const titleSource = element.dataset.originalTitle;
    if (ariaSource) element.setAttribute('aria-label', translateValue(ariaSource, selectedLanguage));
    if (titleSource) element.setAttribute('title', translateValue(titleSource, selectedLanguage));
  });

  document.title = selectedLanguage === 'en' ? originalTitle : (translatedTitles[originalTitle]?.[selectedLanguage] || originalTitle);
  if (descriptionMeta) descriptionMeta.setAttribute('content', selectedLanguage === 'en' ? originalDescription : (translatedDescriptions[originalDescription]?.[selectedLanguage] || originalDescription));
  document.querySelectorAll('[data-language]').forEach((select) => { select.value = selectedLanguage; });

  try { localStorage.setItem('queenies-language', selectedLanguage); } catch (error) { /* Preference storage is optional. */ }
}

let preferredLanguage = 'en';
try { preferredLanguage = localStorage.getItem('queenies-language') || 'en'; } catch (error) { /* Use English. */ }

document.querySelectorAll('[data-language]').forEach((select) => {
  select.addEventListener('change', (event) => applyLanguage(event.target.value));
});

applyLanguage(preferredLanguage);
