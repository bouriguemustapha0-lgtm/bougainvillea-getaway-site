import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { AMENITIES, SITE } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import heroImg from "@/assets/hero-pool.jpg";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: `Amenities | Pool, Garden & Halal Breakfast — ${SITE.name}` },
      {
        name: "description",
        content:
          "Amenities at Bougainvilla Retreat, Mohammedia: outdoor pool, kids' pool, landscaped garden, sun terrace, halal breakfast, free parking, and pet-friendly stays.",
      },
      { property: "og:title", content: `Amenities | ${SITE.name}` },
      { property: "og:description", content: "Pool, garden, halal breakfast, free parking, and more at Bougainvilla Retreat." },
      { property: "og:url", content: "/amenities" },
    ],
    links: [{ rel: "canonical", href: "/amenities" }],
    scripts: [
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Amenities", item: "/amenities" },
        ]),
      ),
    ],
  }),
  component: AmenitiesPage,
});

function AmenitiesPage() {
  return (
    <Layout>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Outdoor pool at Bougainvilla Retreat" width={1920} height={1200} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="container-page py-24 text-white">
          <span className="eyebrow text-white/90">Amenities</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-6xl text-white">
            A pool, a garden, and everything you need to slow down.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Bougainvilla Retreat is built around a garden pool, a shaded terrace, and thoughtful
            hospitality — with practical extras that make short and long stays easy.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((a) => (
              <div key={a.title} className="card-soft p-6">
                <h2 className="font-display text-2xl">{a.title}</h2>
                <p className="mt-3 text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-secondary/60 p-10 md:p-14">
            <h2 className="font-display text-3xl">Good to know before you book</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              <li>Halal à la carte breakfast — local specialties, pancakes, cheese.</li>
              <li>Grocery delivery on request for kitchen-unit stays.</li>
              <li>Pets welcome on request — please contact us in advance.</li>
              <li>Free private parking on site.</li>
              <li>Walking tours in the Mohammedia area can be arranged.</li>
              <li>Linen, towels, and slippers are always provided.</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
