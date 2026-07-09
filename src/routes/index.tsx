import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero-pool.jpg";
import gardenImg from "@/assets/garden.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import roomImg from "@/assets/room.jpg";
import terraceImg from "@/assets/terrace.jpg";
import { AMENITIES, FAQS, ROOMS, SITE, TESTIMONIALS, bookingLinks } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript, lodgingSchema } from "@/lib/schema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} | Boutique Guesthouse with Pool & Garden, Mohammedia` },
      {
        name: "description",
        content: SITE.descriptionShort,
      },
      { property: "og:title", content: `${SITE.name} | Boutique Guesthouse, Mohammedia` },
      { property: "og:description", content: SITE.descriptionShort },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      jsonLdScript(lodgingSchema()),
      jsonLdScript(breadcrumbSchema([{ name: "Home", item: "/" }])),
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Bougainvilla Retreat outdoor pool at sunset, surrounded by bougainvillea and palms, Mohammedia Morocco"
            width={1920}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/60" />
        </div>
        <div className="container-page flex min-h-[88vh] flex-col justify-end pb-16 pt-32 text-white">
          <span className="eyebrow text-white/90">Mohammedia · Casablanca-Settat · Morocco</span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl text-white">
            A bougainvillea-draped retreat, minutes from Casablanca.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90">
            Bougainvilla Retreat is a boutique guesthouse in Sidi Moussa Ben Ali, Mohammedia — with an outdoor
            pool, landscaped garden, and halal breakfast, about 43 km from Casablanca's airport.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.ota.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book on Booking.com
            </a>
            <a href={SITE.ota.agoda} target="_blank" rel="noopener noreferrer" className="btn-terracotta">
              Book on Agoda
            </a>
            <Link to="/rooms" className="btn-outline border-white/60 text-white hover:bg-white/10">
              Explore rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Why stay here */}
      <section className="section-pad">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">Why stay here</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              A quieter side of Casablanca, wrapped in bougainvillea.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Bougainvilla Retreat trades the Casablanca traffic for a garden pool, a shaded terrace,
              and slow Moroccan breakfasts. Close enough for Hassan II Mosque and the airport;
              far enough to actually rest.
            </p>
            <ul className="mt-6 grid gap-2 text-[15px]">
              {[
                "Outdoor pool",
                "Landscaped garden with sun terrace",
                "Halal à la carte breakfast",
                "Balcony rooms with pool or garden views",
                "Free private parking, pets welcome on request",
                "Free private parking on site",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-primary"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={gardenImg} alt="Bougainvillea garden pathway at Bougainvilla Retreat" loading="lazy" width={1600} height={1100} className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]" />
            <img src={terraceImg} alt="Sun terrace under a pergola at Bougainvilla Retreat, Mohammedia" loading="lazy" width={1600} height={1100} className="aspect-[4/5] w-full rounded-2xl object-cover" />
            <img src={breakfastImg} alt="Halal breakfast served on the garden terrace at Bougainvilla Retreat" loading="lazy" width={1600} height={1100} className="aspect-[4/5] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* Amenities strip */}
      <section className="bg-secondary/40 section-pad">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Amenities</span>
              <h2 className="mt-2 font-display text-4xl">Everything for a slow, easy stay</h2>
            </div>
            <Link to="/amenities" className="btn-outline">See all amenities</Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AMENITIES.slice(0, 8).map((a) => (
              <div key={a.title} className="card-soft p-6">
                <h3 className="font-display text-xl">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms preview */}
      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Rooms & Suites</span>
              <h2 className="mt-2 font-display text-4xl">Balcony rooms, garden views</h2>
            </div>
            <Link to="/rooms" className="btn-outline">All rooms</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ROOMS.map((r) => (
              <article key={r.slug} className="card-soft flex flex-col">
                <img src={roomImg} alt={`${r.name} at Bougainvilla Retreat, Mohammedia Morocco`} loading="lazy" width={1600} height={1100} className="aspect-[4/3] w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl">{r.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{r.blurb}</p>
                  <a href={SITE.ota.booking} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 self-start text-sm">
                    Check availability
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Location teaser */}
      <section className="bg-secondary/40 section-pad">
        <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">Location</span>
            <h2 className="mt-2 font-display text-4xl">Mohammedia — 43 km from Casablanca's airport</h2>
            <p className="mt-4 text-muted-foreground">
              Sidi Moussa Ben Ali sits on Morocco's Atlantic coast between Casablanca and Rabat.
              You're close to Miramar Beach, the Mohammedia Royal Golf Club, and a short drive from
              Hassan II Mosque.
            </p>
            <dl className="mt-6 grid gap-3 text-sm">
              {SITE.distances.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between border-b border-border/60 pb-2">
                  <dt className="text-foreground">{d.label}</dt>
                  <dd className="font-medium text-primary">{d.value}</dd>
                </div>
              ))}
            </dl>
            <Link to="/location" className="btn-outline mt-6">Getting here</Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <iframe
              title="Map of Bougainvilla Retreat, Mohammedia"
              src={`https://www.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}&z=13&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="container-page">
          <span className="eyebrow">Guests say</span>
          <h2 className="mt-2 font-display text-4xl">Reviews from real stays</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="card-soft p-6">
                <blockquote className="text-lg leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  — {t.name} · <span className="text-primary">{t.source}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-secondary/40 section-pad">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-2 font-display text-4xl">Good to know</h2>
            <p className="mt-4 text-muted-foreground">
              Straight answers to the most common questions about stays at Bougainvilla Retreat.
            </p>
            <Link to="/faq" className="btn-outline mt-6">All questions</Link>
          </div>
          <dl className="space-y-6">
            {FAQS.slice(0, 5).map((f) => (
              <div key={f.q}>
                <dt className="font-display text-xl">{f.q}</dt>
                <dd className="mt-2 text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-pad">
        <div className="container-page rounded-3xl bg-gradient-to-br from-primary to-primary-glow p-10 text-primary-foreground md:p-16">
          <h2 className="max-w-3xl font-display text-4xl text-primary-foreground md:text-5xl">
            Ready for a garden, a pool, and a slower Casablanca?
          </h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/90">
            Check availability on your favourite booking platform — no fees, no calls, just book.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {bookingLinks().map((b) => (
              <a
                key={b.key}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-background/95 px-5 py-3 text-sm font-medium text-ink hover:bg-background"
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
