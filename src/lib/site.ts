// Central source of truth for site facts. Keep values identical here,
// in body copy, and in JSON-LD to keep AI answer engines confident.

export const SITE = {
  name: "Bougainvilla Retreat",
  tagline: "Boutique Guesthouse with Pool & Garden — Mohammedia, Morocco",
  descriptionShort:
    "Bougainvilla Retreat is a boutique guesthouse in Mohammedia, Morocco, about 43 km from Casablanca's Mohammed V Airport, featuring an infinity pool, landscaped garden, and halal breakfast.",
  neighborhood: "Sidi Moussa El Mejdoub",
  city: "Mohammedia",
  region: "Casablanca-Settat",
  country: "Morocco",
  // Placeholders — replace with real values before launch.
  streetAddress: "[ADD: exact street address]",
  postalCode: "[ADD: postal code]",
  phone: "[ADD: +212 XXX XXX XXX]",
  phoneHref: "tel:+212000000000",
  email: "[ADD: hello@bougainvillaretreat.com]",
  whatsapp: "https://wa.me/212000000000", // [ADD: real WhatsApp number]
  // Approximate coordinates for Sidi Moussa El Mejdoub, Mohammedia.
  geo: { lat: 33.6835, lng: -7.312 },
  distances: [
    { label: "Mohammed V International Airport (Casablanca)", value: "~43 km / 27 mi" },
    { label: "Hassan II Mosque, Casablanca", value: "~22 km / 14 mi" },
    { label: "Morocco Mall, Casablanca", value: "~32 km / 20 mi" },
    { label: "Mohammedia Royal Golf Club", value: "~16 km" },
    { label: "Miramar Beach, Mohammedia", value: "nearby" },
  ],
  ota: {
    booking: "[ADD: Booking.com listing URL]",
    airbnb: "[ADD: Airbnb listing URL]",
    tripadvisor: "[ADD: Tripadvisor listing URL]",
    agoda: "[ADD: Agoda listing URL]",
  },
  lastUpdated: "2026-07-09",
};

export const AMENITIES = [
  { title: "Infinity pool", desc: "A sun-warmed infinity pool framed by bougainvillea and palms." },
  { title: "Kids' pool", desc: "A dedicated shallow pool so families can relax together." },
  { title: "Landscaped garden", desc: "Bougainvillea, palms, and shaded pathways to wander." },
  { title: "Sun terrace", desc: "Loungers under a pergola for slow mornings and long reads." },
  { title: "Free private parking", desc: "Secure on-site parking at no extra cost." },
  { title: "Halal breakfast", desc: "Halal à la carte breakfast with local specialties, pancakes, cheese." },
  { title: "Rooms with a view", desc: "Balconies overlooking the pool or the garden." },
  { title: "Kitchen units available", desc: "Select units come with a fully-equipped kitchen." },
  { title: "Grocery delivery", desc: "Optional grocery delivery so you can settle in effortlessly." },
  { title: "Pets on request", desc: "We welcome pets — just let us know in advance." },
  { title: "Walking tours nearby", desc: "Guided walking tours available in the area." },
  { title: "Fresh linen & towels", desc: "Bed linen, towels, and slippers provided." },
];

export const ROOMS = [
  {
    slug: "garden-view-room",
    name: "Garden-View Room",
    blurb:
      "A calm double room with a private balcony over the bougainvillea garden, en-suite shower, and slippers.",
    features: ["Balcony", "Garden view", "Private bathroom", "Slippers", "Fresh linen"],
  },
  {
    slug: "pool-view-room",
    name: "Pool-View Room",
    blurb:
      "A bright room with balcony views of the infinity pool — perfect for couples on a Casablanca escape.",
    features: ["Balcony", "Pool view", "Private bathroom", "Slippers", "Fresh linen"],
  },
  {
    slug: "kitchen-suite",
    name: "Kitchen Suite",
    blurb:
      "A larger unit with a fully-equipped kitchen — ideal for families or longer stays near Casablanca.",
    features: [
      "Fully-equipped kitchen",
      "Balcony",
      "Pool or garden view",
      "Private bathroom",
      "Grocery delivery on request",
    ],
  },
];

export const FAQS = [
  {
    q: "Where is Bougainvilla Retreat located?",
    a: "Bougainvilla Retreat is a boutique guesthouse in Sidi Moussa El Mejdoub, Mohammedia, in the Casablanca-Settat region of Morocco.",
  },
  {
    q: "Is Bougainvilla Retreat close to Casablanca airport?",
    a: "Yes. The guesthouse is about 43 km (27 miles) from Mohammed V International Airport (CMN) in Casablanca, roughly a 40–50 minute drive depending on traffic.",
  },
  {
    q: "Does Bougainvilla Retreat have a pool?",
    a: "Yes. There is an infinity pool and a separate kids' pool, both set within a landscaped garden of bougainvillea and palms.",
  },
  {
    q: "Is breakfast halal at Bougainvilla Retreat?",
    a: "Yes. Breakfast is halal and served à la carte, featuring local specialties, pancakes, and cheese.",
  },
  {
    q: "Are pets allowed at Bougainvilla Retreat?",
    a: "Pets are welcome on request. Please contact the guesthouse in advance so we can prepare for your stay.",
  },
  {
    q: "How far is Bougainvilla Retreat from Hassan II Mosque?",
    a: "Hassan II Mosque in Casablanca is about 22 km (14 miles) from Bougainvilla Retreat.",
  },
  {
    q: "How far is Bougainvilla Retreat from Morocco Mall?",
    a: "Morocco Mall in Casablanca is about 32 km (20 miles) from the guesthouse.",
  },
  {
    q: "Is there a golf course nearby?",
    a: "Yes. Mohammedia Royal Golf Club is about 16 km from Bougainvilla Retreat.",
  },
  {
    q: "Can I book a room with a kitchen?",
    a: "Yes. Select units at Bougainvilla Retreat come with a fully-equipped kitchen, and grocery delivery can be arranged on request.",
  },
  {
    q: "Is parking available?",
    a: "Yes. Free private parking is available on site.",
  },
  {
    q: "Do the rooms have balconies?",
    a: "Yes. Rooms and units come with a private balcony overlooking either the infinity pool or the landscaped garden.",
  },
  {
    q: "Where can I book Bougainvilla Retreat?",
    a: "You can book Bougainvilla Retreat on Booking.com, Airbnb, Tripadvisor, or Agoda. Direct links are available on this website's Book Now buttons.",
  },
  {
    q: "What restaurants are near Bougainvilla Retreat?",
    a: "Nearby dining options in Mohammedia include Le Grill Robuchon, Marea (seafood), Dar Zaki, and Le Café Robuchon.",
  },
  {
    q: "Is Bougainvilla Retreat good for families?",
    a: "Yes. Families enjoy the kids' pool, spacious kitchen units, free parking, and the safe garden setting near Miramar Beach in Mohammedia.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "[ADD: verified guest review from Booking.com or Airbnb]",
    name: "[ADD: guest name]",
    source: "Booking.com",
  },
  {
    quote: "[ADD: verified guest review from Airbnb]",
    name: "[ADD: guest name]",
    source: "Airbnb",
  },
  {
    quote: "[ADD: verified guest review from Tripadvisor]",
    name: "[ADD: guest name]",
    source: "Tripadvisor",
  },
];

export function bookingLinks() {
  return [
    { label: "Book on Booking.com", href: SITE.ota.booking, key: "booking" },
    { label: "Book on Airbnb", href: SITE.ota.airbnb, key: "airbnb" },
    { label: "Book on Tripadvisor", href: SITE.ota.tripadvisor, key: "tripadvisor" },
    { label: "Book on Agoda", href: SITE.ota.agoda, key: "agoda" },
  ];
}
