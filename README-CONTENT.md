# Bougainvilla Retreat — content TODO before launch

This site ships with `[ADD: ...]` placeholders anywhere real, verified data
is required. Search the repo for `[ADD:` to find every instance.

## Must replace before launch

- **NAP (Name/Address/Phone)** in `src/lib/site.ts`:
  - `streetAddress`, `postalCode`
  - `phone` (and `phoneHref` — set to real `tel:+212...` link)
  - `email`
  - `whatsapp` (real `https://wa.me/212...` number)
  - `geo.lat` / `geo.lng` — refine to the exact property coordinates
- **OTA URLs** in `src/lib/site.ts` (`SITE.ota.*`):
  - Booking.com listing URL
  - Airbnb listing URL
  - Tripadvisor listing URL
  - Agoda listing URL
- **Real photography** in `src/assets/` — replace the rendered placeholders:
  - `hero-pool.jpg`, `garden.jpg`, `room.jpg`, `breakfast.jpg`,
    `terrace.jpg`, `exterior.jpg`
  - Preserve descriptive, keyword-rich alt text (already present in JSX).
- **Verified guest reviews** in `src/lib/site.ts` (`TESTIMONIALS`) —
  replace `[ADD: ...]` quotes/names with actual, permitted reviews from
  Booking.com / Airbnb / Tripadvisor.
- **Pricing / cancellation** — currently marked `[ADD: ...]` on the Rooms
  page. Leave it out or add per-OTA notes.
- **Contact form** — the Contact page currently uses `mailto:`. Swap for a
  hosted form service (Formspree, Web3Forms, Getform) before launch.

## SEO / GEO

- Sitewide title/description/og tags come from `src/routes/__root.tsx` and
  each route's `head()`.
- Structured data: `LodgingBusiness`, `FAQPage`, and `BreadcrumbList` JSON-LD
  are emitted per route via `src/lib/schema.ts`.
- Sitemap: `src/routes/sitemap[.]xml.ts` — set `BASE_URL` once a custom
  domain is live.
- `public/robots.txt` allows all crawlers by default.
- Keep facts (distances, amenities, halal breakfast, pets) identical
  across `src/lib/site.ts`, body copy, FAQ, and JSON-LD so AI answer
  engines have a single confident source.

## Content freshness

Update `SITE.lastUpdated` in `src/lib/site.ts` whenever facts change —
it renders in the footer and on the About / FAQ pages.
