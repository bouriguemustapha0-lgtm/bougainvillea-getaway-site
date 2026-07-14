import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroAsset from "@/assets/hero-dome.jpg";
import gardenImg from "@/assets/garden.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import roomImg from "@/assets/room.jpg";
import terraceImg from "@/assets/terrace.jpg";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript, lodgingSchema } from "@/lib/schema";
import { useLang, useT } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} | Maison d'hôtes de charme avec piscine — Mohammedia` },
      { name: "description", content: SITE.descriptionShort },
      { property: "og:title", content: `${SITE.name} | Maison d'hôtes, Mohammedia` },
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
  const t = useT();
  const { lang } = useLang();
  const amenities = t("amenities");
  const rooms = t("rooms");
  const faqs = t("faqs");
  const testimonials = t("testimonials");
  const distances = t("distances");

  useEffect(() => {
    if (document.getElementById("hotel-jsonld")) return;

    const hotelSchema = {
      "@context": "https://schema.org",
      "@type": "Hotel",
      name: SITE.name,
      description: SITE.descriptionShort,
      url: window.location.origin,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        addressCountry: "MA",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Outdoor pool", value: true },
        { "@type": "LocationFeatureSpecification", name: "Sun terrace", value: true },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "hotel-jsonld";
    script.text = JSON.stringify(hotelSchema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("hotel-jsonld");
      if (existing?.parentNode) existing.parentNode.removeChild(existing);
    };
  }, []);

  const heroAlt =
    lang === "fr"
      ? "Bungalow dôme géodésique et piscine à Bougainvilla Retreat, Mohammedia Maroc"
      : "Geodesic dome bungalow and swimming pool at Bougainvilla Retreat, Mohammedia Morocco";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroAsset}
            alt={heroAlt}
            width={1920}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/60" />
        </div>
        <div className="container-page flex min-h-[88vh] flex-col justify-end pb-16 pt-32 text-white">
          <span className="eyebrow text-white/90">{t("home_hero_eyebrow")}</span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl text-white">
            {t("home_hero_title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90">{t("home_hero_lead")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/reservation" className="btn-primary">
              {t("book_now")}
            </Link>
            <Link to="/rooms" className="btn-outline border-white/60 text-white hover:bg-white/10">
              {t("explore_rooms")}
            </Link>
          </div>
        </div>
      </section>

      {/* Why stay here */}
      <section className="section-pad">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">{t("home_why_eyebrow")}</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t("home_why_title")}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{t("home_why_lead")}</p>
            <ul className="mt-6 grid gap-2 text-[15px]">
              {t("home_why_bullets").map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span aria-hidden className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={gardenImg} alt="" loading="lazy" width={1600} height={1100} className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]" />
            <img src={terraceImg} alt="" loading="lazy" width={1600} height={1100} className="aspect-[4/5] w-full rounded-2xl object-cover" />
            <img src={breakfastImg} alt="" loading="lazy" width={1600} height={1100} className="aspect-[4/5] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* Amenities strip */}
      <section className="bg-secondary/40 section-pad">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">{t("home_amenities_eyebrow")}</span>
              <h2 className="mt-2 font-display text-4xl">{t("home_amenities_title")}</h2>
            </div>
            <Link to="/amenities" className="btn-outline">{t("see_all_amenities")}</Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.slice(0, 8).map((a) => (
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
              <span className="eyebrow">{t("home_rooms_eyebrow")}</span>
              <h2 className="mt-2 font-display text-4xl">{t("home_rooms_title")}</h2>
            </div>
            <Link to="/rooms" className="btn-outline">{t("all_rooms")}</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {rooms.map((r) => (
              <article key={r.slug} className="card-soft flex flex-col">
                <img src={roomImg} alt={`${r.name} — ${SITE.name}, ${SITE.city}`} loading="lazy" width={1600} height={1100} className="aspect-[4/3] w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl">{r.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{r.blurb}</p>
                  <a href={SITE.ota.booking} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 self-start text-sm">
                    {t("check_availability")}
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
            <span className="eyebrow">{t("home_location_eyebrow")}</span>
            <h2 className="mt-2 font-display text-4xl">{t("home_location_title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("home_location_lead")}</p>
            <dl className="mt-6 grid gap-3 text-sm">
              {distances.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between border-b border-border/60 pb-2">
                  <dt className="text-foreground">{d.label}</dt>
                  <dd className="font-medium text-primary">{d.value}</dd>
                </div>
              ))}
            </dl>
            <Link to="/location" className="btn-outline mt-6">{t("getting_here")}</Link>
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
          <span className="eyebrow">{t("home_testimonials_eyebrow")}</span>
          <h2 className="mt-2 font-display text-4xl">{t("home_testimonials_title")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((tst, i) => (
              <figure key={i} className="card-soft p-6">
                <blockquote className="text-lg leading-relaxed">"{tst.quote}"</blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  — {tst.name} · <span className="text-primary">{tst.source}</span>
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
            <span className="eyebrow">{t("home_faq_eyebrow")}</span>
            <h2 className="mt-2 font-display text-4xl">{t("home_faq_title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("home_faq_lead")}</p>
            <Link to="/faq" className="btn-outline mt-6">{t("all_questions")}</Link>
          </div>
          <dl className="space-y-6">
            {faqs.slice(0, 5).map((f) => (
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
            {t("home_cta_title")}
          </h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/90">{t("home_cta_lead")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: t("book_on_booking"), href: SITE.ota.booking, key: "booking" },
              { label: t("book_on_agoda"), href: SITE.ota.agoda, key: "agoda" },
            ].map((b) => (
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
