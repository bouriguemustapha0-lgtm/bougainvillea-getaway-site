import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import roomTwinBeds from "@/assets/room-twin-beds.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomSuiteInterior from "@/assets/room-suite-interior.jpg";
import { useT } from "@/i18n";

const imgs = [roomTwinBeds, roomSuite, roomSuiteInterior];

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: `Chambres & Suites | ${SITE.name}, Mohammedia` },
      {
        name: "description",
        content:
          "Chambres avec balcon à Bougainvilla Retreat, Mohammedia — vue piscine ou jardin, salle de bains privative et linge frais. Réservez en direct sur Booking.com ou Agoda.",
      },
      { property: "og:title", content: `Chambres & Suites | ${SITE.name}` },
      { property: "og:description", content: "Chambres avec balcon, vues sur piscine ou jardin." },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
    scripts: [
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Rooms & Suites", item: "/rooms" },
        ]),
      ),
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  const t = useT();
  const rooms = t("rooms");
  const bookingLinks = [
    { label: t("book_on_booking"), href: SITE.ota.booking, key: "booking" },
    { label: t("book_on_agoda"), href: SITE.ota.agoda, key: "agoda" },
  ];
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">{t("home_rooms_eyebrow")}</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">{t("rooms_h1")}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{t("rooms_lead")}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page space-y-16">
          {rooms.map((r, i) => (
            <article key={r.slug} className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <img
                src={imgs[i % imgs.length]}
                alt={`${r.name} — ${SITE.name}, ${SITE.city}`}
                loading="lazy"
                width={1600}
                height={1100}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
              />
              <div>
                <h2 className="font-display text-4xl">{r.name}</h2>
                <p className="mt-4 text-muted-foreground">{r.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {r.features.map((f) => (
                    <li key={f} className="rounded-full bg-secondary px-3 py-1 text-xs">
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  {bookingLinks.map((b) => (
                    <a key={b.key} href={b.href} target="_blank" rel="noopener noreferrer"
                       className={b.key === "booking" ? "btn-primary text-sm" : "btn-outline text-sm"}>
                      {b.label}
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">{t("rooms_pricing_note")}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
