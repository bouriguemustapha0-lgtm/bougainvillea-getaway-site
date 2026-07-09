import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: `Location & Getting Here | ${SITE.name}, Mohammedia` },
      {
        name: "description",
        content:
          "Bougainvilla Retreat is in Sidi Moussa Ben Ali, Mohammedia, about 43 km from Mohammed V Airport, 22 km from Hassan II Mosque, and near Miramar Beach.",
      },
      { property: "og:title", content: `Location | ${SITE.name}` },
      { property: "og:description", content: "43 km from Casablanca airport, near Miramar Beach and Mohammedia Royal Golf Club." },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
    scripts: [
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Location", item: "/location" },
        ]),
      ),
    ],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Location & Getting Here</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Sidi Moussa Ben Ali, Mohammedia — the calmer side of Casablanca.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Bougainvilla Retreat is in Mohammedia, in the Casablanca-Settat region, roughly a
            40–50 minute drive from Mohammed V International Airport.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl">Distances</h2>
            <dl className="mt-6 space-y-3">
              {SITE.distances.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between border-b border-border/60 pb-2">
                  <dt className="text-foreground">{d.label}</dt>
                  <dd className="font-medium text-primary">{d.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-12 font-display text-3xl">Getting here</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">From Mohammed V Airport (CMN):</strong> ~40–50 min by taxi or private transfer via the A3/A5 motorway.</li>
              <li><strong className="text-foreground">From Casablanca city center:</strong> ~30–40 min by car via the coastal road or motorway.</li>
              <li><strong className="text-foreground">By train:</strong> ONCF trains run frequently to Mohammedia station; take a short taxi to Sidi Moussa Ben Ali.</li>
              <li><strong className="text-foreground">Parking:</strong> free private parking on site.</li>
            </ul>

            <h2 className="mt-12 font-display text-3xl">Eat nearby</h2>
            <ul className="mt-4 grid gap-2 text-muted-foreground sm:grid-cols-2">
              <li>Le Grill Robuchon</li>
              <li>Marea (seafood)</li>
              <li>Dar Zaki</li>
              <li>Le Café Robuchon</li>
            </ul>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
              <iframe
                title="Map to Bougainvilla Retreat"
                src={`https://www.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}&z=13&output=embed`}
                width="100%"
                height="520"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Sidi Moussa Ben Ali, Mohammedia — roughly 43 km from Mohammed V Airport.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
