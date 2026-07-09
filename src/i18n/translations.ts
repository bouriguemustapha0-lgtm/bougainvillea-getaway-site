// Central translations for Bougainvilla Guesthouse. French is the default;
// English is provided as a secondary language. Keep keys stable.

export type Lang = "fr" | "en";

export type Amenity = { title: string; desc: string };
export type Room = { slug: string; name: string; blurb: string; features: string[] };
export type Faq = { q: string; a: string };
export type Testimonial = { quote: string; name: string; source: string };
export type Distance = { label: string; value: string };

type Dict = {
  // UI / nav / buttons
  nav_home: string;
  nav_rooms: string;
  nav_amenities: string;
  nav_location: string;
  nav_gallery: string;
  nav_about: string;
  nav_faq: string;
  nav_contact: string;
  book_now: string;
  book_on_booking: string;
  book_on_agoda: string;
  explore_rooms: string;
  see_all_amenities: string;
  all_rooms: string;
  getting_here: string;
  all_questions: string;
  check_availability: string;
  menu_label: string;
  chat_whatsapp: string;

  // Home
  home_hero_eyebrow: string;
  home_hero_title: string;
  home_hero_lead: string;
  home_why_eyebrow: string;
  home_why_title: string;
  home_why_lead: string;
  home_why_bullets: string[];
  home_amenities_eyebrow: string;
  home_amenities_title: string;
  home_rooms_eyebrow: string;
  home_rooms_title: string;
  home_location_eyebrow: string;
  home_location_title: string;
  home_location_lead: string;
  home_testimonials_eyebrow: string;
  home_testimonials_title: string;
  home_faq_eyebrow: string;
  home_faq_title: string;
  home_faq_lead: string;
  home_cta_title: string;
  home_cta_lead: string;

  // Rooms page
  rooms_h1: string;
  rooms_lead: string;
  rooms_pricing_note: string;

  // Amenities page
  amenities_h1: string;
  amenities_lead: string;
  amenities_good_to_know: string;
  amenities_good_to_know_items: string[];

  // Location page
  location_eyebrow: string;
  location_h1: string;
  location_lead: string;
  location_distances_title: string;
  location_getting_title: string;
  location_getting_items: { label: string; text: string }[];
  location_eat_title: string;
  location_eat_items: string[];
  location_map_caption: string;

  // About page
  about_eyebrow: string;
  about_h1: string;
  about_p1: string;
  about_p2: string;
  about_p3: string;
  about_pillars: { h: string; p: string }[];
  content_last_updated: string;

  // FAQ page
  faq_eyebrow: string;
  faq_h1: string;
  faq_lead: string;
  last_updated: string;

  // Contact page
  contact_eyebrow: string;
  contact_h1: string;
  contact_lead: string;
  contact_direct: string;
  contact_address: string;
  contact_phone: string;
  contact_email: string;
  contact_whatsapp: string;
  contact_book_otas: string;
  contact_follow: string;

  // Gallery page
  gallery_eyebrow: string;
  gallery_h1: string;
  gallery_lead: string;
  gallery_groups: { title: string; alts: string[] }[];

  // Footer
  footer_intro: string;
  footer_visit: string;
  footer_explore: string;
  footer_book_direct: string;
  footer_rights: string;

  // Content arrays
  amenities: Amenity[];
  rooms: Room[];
  faqs: Faq[];
  testimonials: Testimonial[];
  distances: Distance[];

  // Language switcher
  lang_label: string;
};

const fr: Dict = {
  nav_home: "Accueil",
  nav_rooms: "Chambres",
  nav_amenities: "Services",
  nav_location: "Emplacement",
  nav_gallery: "Galerie",
  nav_about: "À propos",
  nav_faq: "FAQ",
  nav_contact: "Contact",
  book_now: "Réserver",
  book_on_booking: "Réserver sur Booking.com\u00a0",
  book_on_agoda: "Réserver sur Agoda",
  explore_rooms: "Voir les chambres",
  see_all_amenities: "Tous les services",
  all_rooms: "Toutes les chambres",
  getting_here: "Comment venir",
  all_questions: "Toutes les questions",
  check_availability: "Voir les disponibilités",
  menu_label: "Ouvrir le menu",
  chat_whatsapp: "Discuter sur WhatsApp",

  home_hero_eyebrow: "Mohammedia · Casablanca-Settat · Maroc",
  home_hero_title: "Une retraite tapissée de bougainvilliers, à quelques minutes de Casablanca.",
  home_hero_lead:
    "Nichée à Sidi Moussa Ben Ali, Bougainvilla Retreat est l'endroit où les matinées commencent lentement au bord de la piscine, où le jasmin et les bougainvilliers parfument les allées, et où chaque petit-déjeuner est préparé avec soin. À seulement 43 km de Casablanca, à mille lieues de son agitation.",

  home_why_eyebrow: "Pourquoi séjourner ici",
  home_why_title: "Le côté paisible de Casablanca, drapé de bougainvilliers.",
  home_why_lead:
    "Bougainvilla Retreat troque les embouteillages de Casablanca contre une piscine de jardin, une terrasse ombragée et de longs petits-déjeuners marocains. Assez proche pour la mosquée Hassan II et l'aéroport ; assez loin pour vraiment se reposer.",
  home_why_bullets: [
    "Piscine extérieure",
    "Jardin paysager avec terrasse ensoleillée",
    "Petit-déjeuner halal à la carte",
    "Chambres avec balcon donnant sur la piscine ou le jardin",
    "Parking privé gratuit, animaux acceptés sur demande",
    "Parking privé gratuit sur place",
  ],

  home_amenities_eyebrow: "Services",
  home_amenities_title: "Tout pour un séjour lent et facile",

  home_rooms_eyebrow: "Chambres & Suites",
  home_rooms_title: "Chambres avec balcon, vues sur le jardin",

  home_location_eyebrow: "Emplacement",
  home_location_title: "Mohammedia — à 43 km de l'aéroport de Casablanca",
  home_location_lead:
    "Sidi Moussa Ben Ali se trouve sur la côte atlantique du Maroc, entre Casablanca et Rabat. Vous êtes proche de la plage de Miramar, du Mohammedia Royal Golf Club, et à courte distance de la mosquée Hassan II.",

  home_testimonials_eyebrow: "Ils en parlent",
  home_testimonials_title: "Avis de séjours réels",

  home_faq_eyebrow: "FAQ",
  home_faq_title: "Bon à savoir",
  home_faq_lead:
    "Réponses directes aux questions les plus fréquentes sur les séjours à Bougainvilla Retreat.",

  home_cta_title: "Prêt pour un jardin, une piscine et un Casablanca plus doux ?",
  home_cta_lead:
    "Vérifiez les disponibilités sur votre plateforme de réservation préférée — sans frais, sans appel, réservez simplement.",

  rooms_h1: "Chambres avec balcon, vues sur le jardin",
  rooms_lead:
    "Chaque chambre de Bougainvilla Retreat s'ouvre sur un balcon privé donnant sur la piscine ou le jardin, avec climatisation, bureau, armoire, linge de lit frais et salle de bains privative (douche, articles de toilette gratuits et sèche-cheveux).",
  rooms_pricing_note:
    "Les tarifs et conditions d'annulation sont définis par la plateforme de réservation.",

  amenities_h1: "Une piscine, un jardin, et tout ce qu'il faut pour ralentir.",
  amenities_lead:
    "Bougainvilla Retreat s'articule autour d'une piscine de jardin, d'une terrasse ombragée et d'une hospitalité attentionnée — avec des équipements pratiques pour faciliter les courts comme les longs séjours.",
  amenities_good_to_know: "Bon à savoir avant de réserver",
  amenities_good_to_know_items: [
    "Petit-déjeuner halal à la carte — spécialités locales, pancakes, fromage.",
    "Climatisation, bureau, armoire et linge de lit frais dans chaque chambre.",
    "Salle de bains privative avec douche, articles de toilette gratuits et sèche-cheveux.",
    "Animaux acceptés sur demande — merci de nous contacter à l'avance.",
    "Parking privé gratuit sur place.",
    "Des visites à pied dans la région de Mohammedia peuvent être organisées.",
    "Linge, serviettes et chaussons toujours fournis.",
    "Établissement entièrement non-fumeurs.",
  ],

  location_eyebrow: "Emplacement & accès",
  location_h1: "Sidi Moussa Ben Ali, Mohammedia — le côté plus calme de Casablanca.",
  location_lead:
    "Bougainvilla Retreat se trouve à Mohammedia, dans la région Casablanca-Settat, à environ 40–50 minutes en voiture de l'aéroport international Mohammed V.",
  location_distances_title: "Distances",
  location_getting_title: "Comment venir",
  location_getting_items: [
    {
      label: "Depuis l'aéroport Mohammed V (CMN) :",
      text: "environ 40–50 min en taxi ou transfert privé via l'autoroute A3/A5.",
    },
    {
      label: "Depuis le centre-ville de Casablanca :",
      text: "environ 30–40 min en voiture par la route côtière ou l'autoroute.",
    },
    {
      label: "En train :",
      text: "les trains ONCF desservent fréquemment la gare de Mohammedia ; prenez ensuite un court taxi jusqu'à Sidi Moussa Ben Ali.",
    },
    {
      label: "Parking :",
      text: "parking privé gratuit sur place.",
    },
  ],
  location_eat_title: "Manger à proximité",
  location_eat_items: ["Le Grill Robuchon", "Marea (fruits de mer)", "Dar Zaki", "Le Café Robuchon"],
  location_map_caption:
    "Sidi Moussa Ben Ali, Mohammedia — à environ 43 km de l'aéroport Mohammed V.",

  about_eyebrow: "Notre histoire",
  about_h1: "Baptisée d'après la fleur qui l'a façonnée.",
  about_p1:
    "Bougainvilla Retreat a commencé comme une maison de famille à Sidi Moussa Ben Ali, Mohammedia — un quartier tranquille entre Casablanca et Rabat. Avec le temps, le bougainvillier a envahi les murs, la pergola, l'allée qui mène à la piscine. On aurait dit que la fleur nommait le lieu, alors nous l'avons laissée faire.",
  about_p2:
    "Aujourd'hui, c'est une maison d'hôtes de charme pour les voyageurs qui veulent la facilité de Casablanca — l'aéroport, la mosquée Hassan II, le Morocco Mall — sans l'intensité. Les chambres s'ouvrent sur le jardin et la piscine extérieure. Le petit-déjeuner est halal, à la carte, et servi sous les treilles quand la météo le permet (c'est presque toujours le cas).",
  about_p3:
    "Nous restons petits par choix. Si vous avez besoin de courses livrées, d'accueillir un animal ou d'organiser une visite à pied, il suffit de demander.",
  about_pillars: [
    {
      h: "Hospitalité chaleureuse",
      p: "Assez petite pour retenir votre prénom, assez grande pour avoir une vraie piscine.",
    },
    {
      h: "Petit-déjeuner halal",
      p: "Petit-déjeuner à la carte avec spécialités locales, pancakes, fromage et thé à la menthe.",
    },
    {
      h: "Un design centré sur le jardin",
      p: "Chaque chambre donne sur la piscine ou les bougainvilliers. Le jardin, c'est l'essentiel.",
    },
  ],
  content_last_updated: "Contenu mis à jour le :",

  faq_eyebrow: "Questions fréquentes",
  faq_h1: "Les questions qui reviennent le plus souvent.",
  faq_lead: "Réponses rapides et factuelles sur un séjour à Bougainvilla Retreat, à Mohammedia.",
  last_updated: "Dernière mise à jour :",

  contact_eyebrow: "Contact",
  contact_h1: "Venez séjourner chez nous.",
  contact_lead:
    "Pour les disponibilités et les tarifs, merci de réserver directement sur Booking.com ou Agoda. Pour tout le reste — animaux, régimes alimentaires, transferts — contactez-nous sur WhatsApp ou par e-mail.",
  contact_direct: "Contact direct",
  contact_address: "Adresse",
  contact_phone: "Téléphone",
  contact_email: "E-mail",
  contact_whatsapp: "WhatsApp",
  contact_book_otas: "Réserver sur les OTA",
  contact_follow: "Suivez-nous",

  gallery_eyebrow: "Galerie",
  gallery_h1: "Une promenade à travers le jardin.",
  gallery_lead:
    "De vraies photographies de la maison d'hôtes — la piscine au crépuscule, la façade fleurie, nos chambres et les matinées au jardin.",
  gallery_groups: [
    {
      title: "Piscine & terrasse",
      alts: [
        "Piscine extérieure au coucher du soleil avec vue sur le jardin, Bougainvilla Retreat Mohammedia",
        "Piscine avec parasol en paille au crépuscule, Bougainvilla Retreat",
        "Vue sur la campagne depuis la terrasse de Bougainvilla Retreat",
      ],
    },
    {
      title: "Jardin",
      alts: [
        "Fontaine devant la maison d'hôtes couverte de bougainvilliers, Bougainvilla Retreat",
        "Dôme géodésique et jardin de lavande à Bougainvilla Retreat",
        "Canards sur le bassin du jardin de Bougainvilla Retreat",
      ],
    },
    {
      title: "Chambres",
      alts: [
        "Chambre de style marocain avec art peint à la main et décoration murale tissée",
        "Chambre familiale avec lits jumeaux et niches en arc, Bougainvilla Retreat",
        "Tête de lit tapissée avec pièce murale en feuilles de palmier tressées",
        "Chambre avec œuvre représentant des cavaliers marocains au-dessus du lit",
        "Intérieur de la suite dôme géodésique avec porte marocaine",
        "Salon avec canapé vert et alcôve marocaine, Bougainvilla Retreat",
      ],
    },
    {
      title: "Petit-déjeuner",
      alts: ["Pain cuit au feu de bois en extérieur à Bougainvilla Retreat"],
    },
  ],

  footer_intro:
    "Une maison d'hôtes de charme à Sidi Moussa Ben Ali, Mohammedia, Maroc — avec piscine extérieure, jardin et petit-déjeuner halal.",
  footer_visit: "Visiter",
  footer_explore: "Explorer",
  footer_book_direct: "Réserver en direct sur les OTA",
  footer_rights: "Tous droits réservés.",

  amenities: [
    { title: "Piscine extérieure", desc: "Une piscine extérieure baignée de soleil, entourée de bougainvilliers et de palmiers." },
    { title: "Jardin paysager", desc: "Bougainvilliers, palmiers et allées ombragées à flâner." },
    { title: "Terrasse ensoleillée", desc: "Transats sous une pergola pour des matinées lentes et de longues lectures." },
    { title: "Parking privé gratuit", desc: "Stationnement sécurisé sur place, sans supplément." },
    { title: "Petit-déjeuner halal", desc: "Petit-déjeuner halal à la carte avec des spécialités locales." },
    { title: "Chambres climatisées", desc: "Chaque chambre dispose de la climatisation et d'une armoire." },
    { title: "Balcon vue piscine", desc: "Chambres avec balcon privatif donnant sur la piscine." },
    { title: "Salle de bains privative", desc: "Douche, articles de toilette gratuits et sèche-cheveux dans chaque chambre." },
    { title: "Chambres familiales", desc: "Chambres adaptées aux familles ; lits bébé gratuits, lits supplémentaires 17 €/nuit." },
    { title: "Animaux acceptés (gratuit)", desc: "Les animaux séjournent gratuitement sur demande — prévenez-nous à l'avance." },
    { title: "Établissement non-fumeurs", desc: "Maison d'hôtes paisible, entièrement non-fumeurs." },
    { title: "Linge et serviettes frais", desc: "Linge de lit, serviettes et articles de toilette fournis." },
  ],

  rooms: [
    {
      slug: "garden-cottage",
      name: "Cottage — Vue Jardin",
      blurb:
        "Une chambre de style cottage ouvrant sur le jardin de bougainvilliers, avec un lit simple et un grand lit double. Salle de bains privative avec douche, articles de toilette gratuits et sèche-cheveux, climatisation, bureau, armoire et linge de lit frais.",
      features: [
        "1 lit simple + 1 lit double",
        "Vue jardin",
        "Salle de bains privative (douche)",
        "Articles de toilette gratuits & sèche-cheveux",
        "Climatisation",
        "Bureau & armoire",
        "Linge de lit frais",
      ],
    },
    {
      slug: "pool-view-room",
      name: "Chambre Vue Piscine",
      blurb:
        "Une chambre lumineuse avec balcon privatif donnant sur la piscine — idéale pour une escapade en couple loin de Casablanca. Climatisée, avec douche privative, articles de toilette gratuits, sèche-cheveux, bureau, armoire et linge de lit frais.",
      features: [
        "Balcon vue piscine",
        "Climatisation",
        "Salle de bains privative (douche)",
        "Articles de toilette gratuits & sèche-cheveux",
        "Bureau & armoire",
        "Linge de lit frais",
      ],
    },
    {
      slug: "family-room",
      name: "Chambre Familiale",
      blurb:
        "Une chambre plus grande, adaptée aux familles, dans le cadre du jardin, avec climatisation, salle de bains privative (douche, articles de toilette gratuits, sèche-cheveux), bureau, armoire et linge de lit frais. Lits bébé gratuits sur demande ; lits supplémentaires à 17 € par nuit.",
      features: [
        "Adaptée aux familles",
        "Climatisation",
        "Salle de bains privative (douche)",
        "Articles de toilette gratuits & sèche-cheveux",
        "Bureau & armoire",
        "Lits bébé gratuits sur demande",
        "Lit supplémentaire 17 €/nuit",
      ],
    },
  ],

  faqs: [
    { q: "Où se trouve Bougainvilla Guesthouse ?", a: "Bougainvilla Guesthouse est à Sidi Moussa Ben Ali (code postal 20000), dans la région de Mohammedia (Casablanca-Settat), au Maroc." },
    { q: "À quelle distance de l'aéroport de Casablanca ?", a: "La maison d'hôtes est à 43 km de l'aéroport international Mohammed V (CMN) de Casablanca — environ 40–50 minutes de route selon le trafic." },
    { q: "Y a-t-il une piscine ?", a: "Oui. Une piscine extérieure au cœur d'un jardin paysager de bougainvilliers et de palmiers, avec une terrasse ensoleillée et des transats." },
    { q: "Le petit-déjeuner est-il halal ?", a: "Oui. Le petit-déjeuner est halal et servi à la carte." },
    { q: "Les animaux sont-ils acceptés ?", a: "Oui. Les animaux sont acceptés gratuitement sur demande — merci de prévenir la maison d'hôtes à l'avance." },
    { q: "Quels sont les horaires d'arrivée et de départ ?", a: "L'arrivée se fait de 14h00 à 22h00 et le départ de 08h00 à 11h00." },
    { q: "À quelle distance de la mosquée Hassan II ?", a: "La mosquée Hassan II à Casablanca est à 23 km de Bougainvilla Guesthouse." },
    { q: "À quelle distance du Morocco Mall ?", a: "Le Morocco Mall à Casablanca est à 32 km de la maison d'hôtes." },
    { q: "Y a-t-il un golf à proximité ?", a: "Oui. Le Mohammedia Royal Golf Club se trouve à environ 16 km de Bougainvilla Guesthouse." },
    { q: "À quelle distance des gares de Casablanca ?", a: "Les gares Casa-Port et Casa-Voyageurs sont chacune à environ 20 km." },
    { q: "Un parking est-il disponible ?", a: "Oui. Un parking privé gratuit est disponible sur place." },
    { q: "L'établissement est-il non-fumeurs ?", a: "Oui. Bougainvilla Guesthouse est un établissement entièrement non-fumeurs. Les enterrements de vie de garçon/de jeune fille et événements similaires ne sont pas autorisés." },
    { q: "Les chambres ont-elles un balcon et la climatisation ?", a: "Oui. Les chambres sont climatisées et disposent d'un balcon (souvent avec vue piscine), d'un bureau, d'une armoire et d'une salle de bains privative avec douche, articles de toilette gratuits et sèche-cheveux." },
    { q: "Y a-t-il des lits bébé et des lits supplémentaires ?", a: "Les lits bébé sont gratuits sur demande pour les enfants de moins de 3 ans. Les lits supplémentaires sont à 17 € par personne et par nuit à partir de 3 ans, sous réserve de disponibilité." },
    { q: "Où réserver Bougainvilla Guesthouse ?", a: "Vous pouvez réserver directement sur Booking.com (noté 9,4/10 « Fabuleux ») ou sur Agoda. Utilisez les boutons Réserver sur le site pour accéder à chaque annonce." },
    { q: "Est-ce adapté aux familles ?", a: "Oui. Chambres familiales, lits bébé gratuits, parking gratuit, jardin sécurisé et piscine en font une base confortable pour les familles visitant Mohammedia et Casablanca." },
  ],

  testimonials: [
    { quote: "Nous avons passé un excellent séjour. L'endroit est unique, plein de charme et dans un environnement calme et agréable. La piscine est un vrai atout, tout comme le jardin superbement entretenu.", name: "Errahali", source: "Booking.com — France" },
    { quote: "Séjour exceptionnel, une hôte adorable qui prend soin du moindre détail.", name: "Mouna", source: "Booking.com — France" },
    { quote: "Ce petit coin de paradis à la campagne tient toutes ses promesses. Le calme, la tranquillité et l'impression que le temps s'arrête offrent un dépaysement complet.", name: "Adam", source: "Booking.com — France" },
    { quote: "Le personnel, les espaces verts, la nourriture, l'ambiance familiale, la piscine.", name: "Sophie", source: "Booking.com — France" },
    { quote: "Une chambre superbement tenue. Dans le jardin, au bord de la piscine, on peut vraiment se détendre. Le propriétaire est très gentil et cuisine merveilleusement.", name: "Angela", source: "Booking.com — Pays-Bas (traduit)" },
  ],

  distances: [
    { label: "Aéroport international Mohammed V (Casablanca)", value: "43 km" },
    { label: "Mosquée Hassan II, Casablanca", value: "23 km" },
    { label: "Morocco Mall, Casablanca", value: "32 km" },
    { label: "Mohammedia Royal Golf Club", value: "16 km" },
    { label: "Marché central de Casablanca", value: "20 km" },
    { label: "Anfa Place Living Resort", value: "27 km" },
    { label: "Gare Casa-Port", value: "20 km" },
    { label: "Gare Casa-Voyageurs", value: "20 km" },
  ],

  lang_label: "Langue",
};

const en: Dict = {
  nav_home: "Home",
  nav_rooms: "Rooms",
  nav_amenities: "Amenities",
  nav_location: "Location",
  nav_gallery: "Gallery",
  nav_about: "About",
  nav_faq: "FAQ",
  nav_contact: "Contact",
  book_now: "Book Now",
  book_on_booking: "Book on Booking.com\u00a0",
  book_on_agoda: "Book on Agoda",
  explore_rooms: "Explore rooms",
  see_all_amenities: "See all amenities",
  all_rooms: "All rooms",
  getting_here: "Getting here",
  all_questions: "All questions",
  check_availability: "Check availability",
  menu_label: "Toggle menu",
  chat_whatsapp: "Chat on WhatsApp",

  home_hero_eyebrow: "Mohammedia · Casablanca-Settat · Morocco",
  home_hero_title: "A bougainvillea-draped retreat, minutes from Casablanca.",
  home_hero_lead:
    "Tucked away in Sidi Moussa Ben Ali, Bougainvilla Retreat is where slow mornings begin by the pool, jasmine and bougainvillea scent the garden paths, and every breakfast is made with care. Just 43 km from Casablanca, yet a world away from the rush.",

  home_why_eyebrow: "Why stay here",
  home_why_title: "A quieter side of Casablanca, wrapped in bougainvillea.",
  home_why_lead:
    "Bougainvilla Retreat trades the Casablanca traffic for a garden pool, a shaded terrace, and slow Moroccan breakfasts. Close enough for Hassan II Mosque and the airport; far enough to actually rest.",
  home_why_bullets: [
    "Outdoor pool",
    "Landscaped garden with sun terrace",
    "Halal à la carte breakfast",
    "Balcony rooms with pool or garden views",
    "Free private parking, pets welcome on request",
    "Free private parking on site",
  ],

  home_amenities_eyebrow: "Amenities",
  home_amenities_title: "Everything for a slow, easy stay",

  home_rooms_eyebrow: "Rooms & Suites",
  home_rooms_title: "Balcony rooms, garden views",

  home_location_eyebrow: "Location",
  home_location_title: "Mohammedia — 43 km from Casablanca's airport",
  home_location_lead:
    "Sidi Moussa Ben Ali sits on Morocco's Atlantic coast between Casablanca and Rabat. You're close to Miramar Beach, the Mohammedia Royal Golf Club, and a short drive from Hassan II Mosque.",

  home_testimonials_eyebrow: "Guests say",
  home_testimonials_title: "Reviews from real stays",

  home_faq_eyebrow: "FAQ",
  home_faq_title: "Good to know",
  home_faq_lead:
    "Straight answers to the most common questions about stays at Bougainvilla Retreat.",

  home_cta_title: "Ready for a garden, a pool, and a slower Casablanca?",
  home_cta_lead:
    "Check availability on your favourite booking platform — no fees, no calls, just book.",

  rooms_h1: "Balcony rooms, garden views",
  rooms_lead:
    "Every room at Bougainvilla Retreat opens onto a private balcony with a pool or garden view, and comes with air conditioning, a desk, wardrobe, fresh bed linen and a private bathroom with shower, free toiletries and hair dryer.",
  rooms_pricing_note: "Prices and cancellation terms are set by the booking platform.",

  amenities_h1: "A pool, a garden, and everything you need to slow down.",
  amenities_lead:
    "Bougainvilla Retreat is built around a garden pool, a shaded terrace, and thoughtful hospitality — with practical extras that make short and long stays easy.",
  amenities_good_to_know: "Good to know before you book",
  amenities_good_to_know_items: [
    "Halal à la carte breakfast — local specialties, pancakes, cheese.",
    "Air conditioning, desk, wardrobe and fresh bed linen in every room.",
    "Private bathroom with shower, free toiletries and hair dryer.",
    "Pets welcome on request — please contact us in advance.",
    "Free private parking on site.",
    "Walking tours in the Mohammedia area can be arranged.",
    "Linen, towels, and slippers are always provided.",
    "Fully non-smoking property.",
  ],

  location_eyebrow: "Location & Getting Here",
  location_h1: "Sidi Moussa Ben Ali, Mohammedia — the calmer side of Casablanca.",
  location_lead:
    "Bougainvilla Retreat is in Mohammedia, in the Casablanca-Settat region, roughly a 40–50 minute drive from Mohammed V International Airport.",
  location_distances_title: "Distances",
  location_getting_title: "Getting here",
  location_getting_items: [
    { label: "From Mohammed V Airport (CMN):", text: "~40–50 min by taxi or private transfer via the A3/A5 motorway." },
    { label: "From Casablanca city center:", text: "~30–40 min by car via the coastal road or motorway." },
    { label: "By train:", text: "ONCF trains run frequently to Mohammedia station; take a short taxi to Sidi Moussa Ben Ali." },
    { label: "Parking:", text: "free private parking on site." },
  ],
  location_eat_title: "Eat nearby",
  location_eat_items: ["Le Grill Robuchon", "Marea (seafood)", "Dar Zaki", "Le Café Robuchon"],
  location_map_caption: "Sidi Moussa Ben Ali, Mohammedia — roughly 43 km from Mohammed V Airport.",

  about_eyebrow: "Our story",
  about_h1: "Named for the flower that shaped it.",
  about_p1:
    "Bougainvilla Retreat began as a family home in Sidi Moussa Ben Ali, Mohammedia — a quiet neighborhood between Casablanca and Rabat. Over time the bougainvillea took over the walls, the pergola, the pathway to the pool. It felt like the flower was naming the place, so we let it.",
  about_p2:
    "Today it's a boutique guesthouse for travelers who want the ease of Casablanca — airport, Hassan II Mosque, Morocco Mall — without the intensity. Rooms open onto the garden and the outdoor pool. Breakfast is halal, à la carte, and served under the vines when the weather is right (it usually is).",
  about_p3:
    "We keep things small on purpose. If you need groceries delivered, a pet welcomed, or a walking tour arranged, just ask.",
  about_pillars: [
    { h: "Warm hospitality", p: "Small enough to remember your name, big enough to have a proper pool." },
    { h: "Halal breakfast", p: "À la carte breakfast with local specialties, pancakes, cheese, and mint tea." },
    { h: "Garden-first design", p: "Every room looks onto the pool or the bougainvillea. The garden is the point." },
  ],
  content_last_updated: "Content last updated:",

  faq_eyebrow: "Frequently asked",
  faq_h1: "Questions we hear most often.",
  faq_lead: "Fast, factual answers about staying at Bougainvilla Retreat in Mohammedia.",
  last_updated: "Last updated:",

  contact_eyebrow: "Contact",
  contact_h1: "Come stay with us.",
  contact_lead:
    "For availability and rates, please book directly on Booking.com or Agoda. For anything else — pets, dietary needs, transfers — reach us on WhatsApp or by email.",
  contact_direct: "Direct contact",
  contact_address: "Address",
  contact_phone: "Phone",
  contact_email: "Email",
  contact_whatsapp: "WhatsApp",
  contact_book_otas: "Book on OTAs",
  contact_follow: "Follow us",

  gallery_eyebrow: "Gallery",
  gallery_h1: "A tour through the garden.",
  gallery_lead:
    "Real photographs from the guesthouse — pool at dusk, the bougainvillea facade, our rooms, and mornings in the garden.",
  gallery_groups: [
    {
      title: "Pool & terrace",
      alts: [
        "Outdoor pool at sunset with garden views, Bougainvilla Retreat Mohammedia",
        "Pool with straw umbrella at dusk, Bougainvilla Retreat",
        "Garden view over the countryside from the terrace at Bougainvilla Retreat",
      ],
    },
    {
      title: "Garden",
      alts: [
        "Fountain in front of the bougainvillea-covered guesthouse, Bougainvilla Retreat",
        "Geodesic dome and lavender garden at Bougainvilla Retreat",
        "Ducks on the garden pond at Bougainvilla Retreat",
      ],
    },
    {
      title: "Rooms",
      alts: [
        "Moroccan-styled bedroom with hand-painted art and woven wall decor",
        "Family room with twin beds and arched wall niches, Bougainvilla Retreat",
        "Upholstered headboard with woven palm-leaf wall piece",
        "Bedroom with Moroccan horsemen artwork above the headboard",
        "Interior of the geodesic dome suite with Moroccan door",
        "Living lounge with green sofa and Moroccan alcove, Bougainvilla Retreat",
      ],
    },
    {
      title: "Breakfast",
      alts: ["Bread baking over the outdoor wood fire at Bougainvilla Retreat"],
    },
  ],

  footer_intro:
    "A boutique guesthouse in Sidi Moussa Ben Ali, Mohammedia, Morocco — with an outdoor pool, garden, and halal breakfast.",
  footer_visit: "Visit",
  footer_explore: "Explore",
  footer_book_direct: "Book direct on OTAs",
  footer_rights: "All rights reserved.",

  amenities: [
    { title: "Outdoor pool", desc: "A sun-warmed outdoor pool framed by bougainvillea and palms." },
    { title: "Landscaped garden", desc: "Bougainvillea, palms, and shaded pathways to wander." },
    { title: "Sun terrace", desc: "Loungers under a pergola for slow mornings and long reads." },
    { title: "Free private parking", desc: "Secure on-site parking at no extra cost." },
    { title: "Halal breakfast", desc: "Halal à la carte breakfast with local specialties." },
    { title: "Air-conditioned rooms", desc: "Every room comes with air conditioning and a wardrobe." },
    { title: "Balcony with pool view", desc: "Rooms with a private balcony overlooking the pool." },
    { title: "Private bathroom", desc: "Shower, free toiletries, and hair dryer in every room." },
    { title: "Family rooms", desc: "Family-friendly rooms; cots free, extra beds €17/night." },
    { title: "Pets welcome (free)", desc: "Pets stay free on request — just let us know in advance." },
    { title: "Non-smoking property", desc: "Peaceful, fully non-smoking guesthouse." },
    { title: "Fresh linen & towels", desc: "Bed linen, towels, and toiletries provided." },
  ],

  rooms: [
    {
      slug: "garden-cottage",
      name: "Cottage — Garden View",
      blurb:
        "A cottage-style room opening onto the bougainvillea garden, with one single bed and one large double bed. Includes a private bathroom with shower, free toiletries and hair dryer, air conditioning, a desk, wardrobe and fresh bed linen.",
      features: [
        "1 single + 1 double bed",
        "Garden view",
        "Private bathroom (shower)",
        "Free toiletries & hair dryer",
        "Air conditioning",
        "Desk & wardrobe",
        "Fresh bed linen",
      ],
    },
    {
      slug: "pool-view-room",
      name: "Pool-View Room",
      blurb:
        "A bright room with a private balcony overlooking the pool — perfect for a couples' escape from Casablanca. Air-conditioned, with a private shower, free toiletries, hair dryer, desk, wardrobe and fresh bed linen.",
      features: [
        "Balcony with pool view",
        "Air conditioning",
        "Private bathroom (shower)",
        "Free toiletries & hair dryer",
        "Desk & wardrobe",
        "Fresh bed linen",
      ],
    },
    {
      slug: "family-room",
      name: "Family Room",
      blurb:
        "A larger family-friendly room in the garden setting, with air conditioning, a private bathroom (shower, free toiletries, hair dryer), desk, wardrobe and fresh bed linen. Cots are free on request; extra beds available at €17 per night.",
      features: [
        "Family-friendly",
        "Air conditioning",
        "Private bathroom (shower)",
        "Free toiletries & hair dryer",
        "Desk & wardrobe",
        "Free cots on request",
        "Extra bed €17/night",
      ],
    },
  ],

  faqs: [
    { q: "Where is Bougainvilla Guesthouse located?", a: "Bougainvilla Guesthouse is in Sidi Moussa Ben Ali (postal code 20000), in the Mohammedia area of the Casablanca-Settat region, Morocco." },
    { q: "How far is Bougainvilla Guesthouse from Casablanca airport?", a: "The guesthouse is 43 km from Mohammed V International Airport (CMN) in Casablanca — roughly a 40–50 minute drive depending on traffic." },
    { q: "Does Bougainvilla Guesthouse have a pool?", a: "Yes. There is an outdoor pool set within a landscaped garden of bougainvillea and palms, with a sun terrace and loungers." },
    { q: "Is breakfast halal at Bougainvilla Guesthouse?", a: "Yes. Breakfast is halal and served à la carte." },
    { q: "Are pets allowed at Bougainvilla Guesthouse?", a: "Yes. Pets are welcome free of charge on request — please let the guesthouse know in advance." },
    { q: "What are the check-in and check-out times?", a: "Check-in is from 14:00 to 22:00 and check-out is from 08:00 to 11:00." },
    { q: "How far is Bougainvilla Guesthouse from Hassan II Mosque?", a: "Hassan II Mosque in Casablanca is 23 km from Bougainvilla Guesthouse." },
    { q: "How far is Bougainvilla Guesthouse from Morocco Mall?", a: "Morocco Mall in Casablanca is 32 km from the guesthouse." },
    { q: "Is there a golf course nearby?", a: "Yes. Mohammedia Royal Golf Club is about 16 km from Bougainvilla Guesthouse." },
    { q: "How far are the Casablanca train stations?", a: "Casa-Port and Casa-Voyageurs train stations are each about 20 km away." },
    { q: "Is parking available?", a: "Yes. Free private parking is available on site." },
    { q: "Is the property non-smoking?", a: "Yes. Bougainvilla Guesthouse is a fully non-smoking property. Bachelor/hen parties and similar events are not allowed." },
    { q: "Do the rooms have balconies and air conditioning?", a: "Yes. Rooms are air-conditioned and come with a balcony (many with a pool view), a desk, wardrobe, and a private bathroom with shower, free toiletries and a hair dryer." },
    { q: "Are cots and extra beds available?", a: "Cots are free on request for children under 3. Extra beds are €17 per person per night for guests aged 3 and up, subject to availability." },
    { q: "Where can I book Bougainvilla Guesthouse?", a: "You can book directly on Booking.com (rated 9.4/10 “Fabulous”) or on Agoda. Use the Book Now buttons across this site to go straight to each listing." },
    { q: "Is Bougainvilla Guesthouse good for families?", a: "Yes. Family rooms, free cots, free parking, a safe garden setting, and the pool make it a comfortable base for families visiting Mohammedia and Casablanca." },
  ],

  testimonials: [
    { quote: "We had an excellent stay. The place is unique, full of charm, and set in a calm and pleasant environment. The pool is a real asset, as is the beautifully kept garden.", name: "Errahali", source: "Booking.com — France" },
    { quote: "Exceptional stay, an adorable host who takes care of every detail.", name: "Mouna", source: "Booking.com — France" },
    { quote: "This little corner of paradise in the countryside keeps all its promises. The calm, the tranquillity, and the feeling that time stands still give you a complete change of scenery.", name: "Adam", source: "Booking.com — France" },
    { quote: "The staff, the green spaces, the food, the family atmosphere, the pool.", name: "Sophie", source: "Booking.com — France" },
    { quote: "A beautifully kept room. In the garden with the pool you can truly unwind. The owner is very kind and cooked wonderfully for us.", name: "Angela", source: "Booking.com — Netherlands (translated)" },
  ],

  distances: [
    { label: "Mohammed V International Airport (Casablanca)", value: "43 km" },
    { label: "Hassan II Mosque, Casablanca", value: "23 km" },
    { label: "Morocco Mall, Casablanca", value: "32 km" },
    { label: "Mohammedia Royal Golf Club", value: "16 km" },
    { label: "Casablanca Central Market", value: "20 km" },
    { label: "Anfa Place Living Resort", value: "27 km" },
    { label: "Casa-Port Train Station", value: "20 km" },
    { label: "Casa-Voyageurs Train Station", value: "20 km" },
  ],

  lang_label: "Language",
};

export const TRANSLATIONS: Record<Lang, Dict> = { fr, en };
export type TranslationKey = keyof Dict;
