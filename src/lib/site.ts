// Central source of truth for site facts. Keep values identical here,
// in body copy, and in JSON-LD to keep AI answer engines confident.
// Facts verified from the property's Booking.com listing (Nov 2026).

export const SITE = {
  name: "Bougainvilla Guesthouse",
  brand: "Bougainvilla Retreat",
  tagline: "Boutique Guesthouse with Pool & Garden — Mohammedia, Morocco",
  descriptionShort:
    "Bougainvilla Guesthouse is a boutique guesthouse in Sidi Moussa Ben Ali, Mohammedia, Morocco — 43 km from Casablanca's Mohammed V Airport — with an outdoor pool, landscaped garden, sun terrace, free private parking, and halal à la carte breakfast. Rated 9.4/10 “Fabulous” on Booking.com.",
  neighborhood: "Sidi Moussa Ben Ali",
  city: "Mohammedia",
  region: "Casablanca-Settat",
  country: "Morocco",
  streetAddress: "Sidi Moussa Ben Ali",
  postalCode: "20000",
  phone: "[ADD: +212 XXX XXX XXX]",
  phoneHref: "tel:+212000000000",
  email: "[ADD: hello@bougainvillaretreat.com]",
  whatsapp: "https://wa.me/212000000000", // [ADD: real WhatsApp number]
  // Approximate coordinates for Sidi Moussa Ben Ali, Mohammedia region.
  geo: { lat: 33.6835, lng: -7.312 },
  rating: { value: 9.4, scale: 10, count: 9, label: "Fabulous", source: "Booking.com" },
  qualityRating: 4, // Booking.com quality rating out of 5
  checkIn: "14:00 – 22:00",
  checkOut: "08:00 – 11:00",
  // Distances verified from Booking.com listing (© OpenStreetMap).
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
  ota: {
    booking: "https://www.booking.com/hotel/ma/bougainvilla-guesthouse.html",
    google: "https://www.google.com/travel/search?q=Bougainvilla+Retreat+Mohammedia",
    airbnb: "[ADD: Airbnb listing URL]",
    tripadvisor: "[ADD: Tripadvisor listing URL]",
    agoda: "[ADD: Agoda listing URL]",
  },
  lastUpdated: "2026-07-09",
};

export const AMENITIES = [
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
];

export const ROOMS = [
  {
    slug: "garden-cottage",
    name: "Cottage — Garden View",
    blurb:
      "A charming cottage-style room opening onto the bougainvillea garden, with one single bed and one large double bed, a private bathroom, air conditioning and a desk.",
    features: [
      "1 single + 1 double bed",
      "Garden view",
      "Private bathroom (shower)",
      "Air conditioning",
      "Desk & wardrobe",
      "Free toiletries & hair dryer",
    ],
  },
  {
    slug: "pool-view-room",
    name: "Pool-View Room",
    blurb:
      "A bright room with a private balcony over the pool — perfect for a couples' escape from Casablanca. Air-conditioned, with private shower and fresh linen.",
    features: [
      "Balcony over the pool",
      "Air conditioning",
      "Private bathroom (shower)",
      "Desk & wardrobe",
      "Fresh linen & towels",
    ],
  },
  {
    slug: "family-room",
    name: "Family Room",
    blurb:
      "A larger family-friendly room in the same garden setting. Cots are free on request; extra beds available at €17 per night.",
    features: [
      "Family-friendly",
      "Free cots on request",
      "Extra bed €17/night",
      "Air conditioning",
      "Private bathroom (shower)",
    ],
  },
];

export const FAQS = [
  {
    q: "Where is Bougainvilla Guesthouse located?",
    a: "Bougainvilla Guesthouse is in Sidi Moussa Ben Ali (postal code 20000), in the Mohammedia area of the Casablanca-Settat region, Morocco.",
  },
  {
    q: "How far is Bougainvilla Guesthouse from Casablanca airport?",
    a: "The guesthouse is 43 km from Mohammed V International Airport (CMN) in Casablanca — roughly a 40–50 minute drive depending on traffic.",
  },
  {
    q: "Does Bougainvilla Guesthouse have a pool?",
    a: "Yes. There is an outdoor pool set within a landscaped garden of bougainvillea and palms, with a sun terrace and loungers.",
  },
  {
    q: "Is breakfast halal at Bougainvilla Guesthouse?",
    a: "Yes. Breakfast is halal and served à la carte.",
  },
  {
    q: "Are pets allowed at Bougainvilla Guesthouse?",
    a: "Yes. Pets are welcome free of charge on request — please let the guesthouse know in advance.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is from 14:00 to 22:00 and check-out is from 08:00 to 11:00.",
  },
  {
    q: "How far is Bougainvilla Guesthouse from Hassan II Mosque?",
    a: "Hassan II Mosque in Casablanca is 23 km from Bougainvilla Guesthouse.",
  },
  {
    q: "How far is Bougainvilla Guesthouse from Morocco Mall?",
    a: "Morocco Mall in Casablanca is 32 km from the guesthouse.",
  },
  {
    q: "Is there a golf course nearby?",
    a: "Yes. Mohammedia Royal Golf Club is about 16 km from Bougainvilla Guesthouse.",
  },
  {
    q: "How far are the Casablanca train stations?",
    a: "Casa-Port and Casa-Voyageurs train stations are each about 20 km away.",
  },
  {
    q: "Is parking available?",
    a: "Yes. Free private parking is available on site.",
  },
  {
    q: "Is the property non-smoking?",
    a: "Yes. Bougainvilla Guesthouse is a fully non-smoking property. Bachelor/hen parties and similar events are not allowed.",
  },
  {
    q: "Do the rooms have balconies and air conditioning?",
    a: "Yes. Rooms are air-conditioned and come with a balcony (many with a pool view), a desk, wardrobe, and a private bathroom with shower, free toiletries and a hair dryer.",
  },
  {
    q: "Are cots and extra beds available?",
    a: "Cots are free on request for children under 3. Extra beds are €17 per person per night for guests aged 3 and up, subject to availability.",
  },
  {
    q: "Where can I book Bougainvilla Guesthouse?",
    a: "You can book on Booking.com (rated 9.4/10 “Fabulous”), Google Hotels, and — once listings go live — Airbnb, Tripadvisor and Agoda. Direct links are on the Book Now buttons across this site.",
  },
  {
    q: "Is Bougainvilla Guesthouse good for families?",
    a: "Yes. Family rooms, free cots, free parking, a safe garden setting, and the pool make it a comfortable base for families visiting Mohammedia and Casablanca.",
  },
];

// Verified guest quotes from the Booking.com listing (translated where noted).
export const TESTIMONIALS = [
  {
    quote:
      "We had an excellent stay. The place is unique, full of charm, and set in a calm and pleasant environment. The pool is a real asset, as is the beautifully kept garden.",
    name: "Errahali",
    source: "Booking.com — France",
  },
  {
    quote: "Exceptional stay, an adorable host who takes care of every detail.",
    name: "Mouna",
    source: "Booking.com — France",
  },
  {
    quote:
      "This little corner of paradise in the countryside keeps all its promises. The calm, the tranquillity, and the feeling that time stands still give you a complete change of scenery.",
    name: "Adam",
    source: "Booking.com — France",
  },
  {
    quote: "The staff, the green spaces, the food, the family atmosphere, the pool.",
    name: "Sophie",
    source: "Booking.com — France",
  },
  {
    quote:
      "A beautifully kept room. In the garden with the pool you can truly unwind. The owner is very kind and cooked wonderfully for us.",
    name: "Angela",
    source: "Booking.com — Netherlands (translated)",
  },
];

export function bookingLinks() {
  return [
    { label: "Book on Booking.com (9.4/10)", href: SITE.ota.booking, key: "booking" },
    { label: "View on Google Hotels", href: SITE.ota.google, key: "google" },
    { label: "Book on Airbnb", href: SITE.ota.airbnb, key: "airbnb" },
    { label: "Book on Tripadvisor", href: SITE.ota.tripadvisor, key: "tripadvisor" },
    { label: "Book on Agoda", href: SITE.ota.agoda, key: "agoda" },
  ];
}
