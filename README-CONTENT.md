# Bougainvilla Guesthouse — content TODO before launch

This site ships with `[ADD: ...]` placeholders anywhere real, verified data
is required. Search the repo for `[ADD:` to find every instance.

## Verified from Booking.com (already in `src/lib/site.ts`)

- Property name: **Bougainvilla Guesthouse** (brand shown as "Bougainvilla Retreat")
- Address: **Sidi Moussa Ben Ali, 20000, Morocco** (Mohammedia area, Casablanca-Settat)
- Rating: **9.4 / 10 "Fabulous"** (9 reviews), Booking.com quality rating 4/5
- Check-in **14:00–22:00** · Check-out **08:00–11:00**
- Distances (© OpenStreetMap via Booking.com): CMN airport 43 km, Hassan II Mosque 23 km,
  Morocco Mall 32 km, Royal Golf Club 16 km, Casa-Port / Casa-Voyageurs 20 km each,
  Anfa Place 27 km, Central Market Casablanca 20 km
- Amenities: outdoor pool, garden, sun terrace, free private parking, family rooms,
  non-smoking, halal à la carte breakfast, AC + balcony + private shower in every room,
  pets free on request, cots free (0–3), extra bed €17/night
- 5 real guest quotes (Errahali, Mouna, Adam, Sophie, Angela) in `TESTIMONIALS`
- Booking.com URL: `https://www.booking.com/hotel/ma/bougainvilla-guesthouse.html`
- Google Hotels: search deep-link

## Must replace before launch

- **Phone & email** in `src/lib/site.ts` (`phone`, `phoneHref`, `email`, `whatsapp`)
- **Exact street** (Booking lists only "Sidi Moussa Ben Ali, 20000") + refined
  `geo.lat` / `geo.lng` once confirmed
- **OTA URLs** — `airbnb`, `tripadvisor`, `agoda` in `SITE.ota` (Booking + Google set)
- **Real photography** in `src/assets/` — replace rendered placeholders
  (`hero-pool.jpg`, `garden.jpg`, `room.jpg`, `breakfast.jpg`, `terrace.jpg`, `exterior.jpg`)
  Real Booking.com photo IDs available at cf.bstatic.com/xdata/images/hotel/... — download
  and save locally rather than hot-linking.
- **Pricing / cancellation** — varies by OTA option; currently `[ADD: ...]` on Rooms page
- **Contact form** — currently `mailto:`. Swap for Formspree / Web3Forms / Getform.

## Content freshness

Update `SITE.lastUpdated` in `src/lib/site.ts` whenever facts change —
it renders in the footer and on the About / FAQ pages.
