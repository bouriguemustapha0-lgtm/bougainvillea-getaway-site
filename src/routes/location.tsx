import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { useT } from "@/i18n";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: `Emplacement & Accès | ${SITE.name}, Mohammedia` },
      {
        name: "description",
        content:
          "Bougainvilla Retreat est à Sidi Moussa Ben Ali, Mohammedia, à environ 43 km de l'aéroport Mohammed V, 23 km de la mosquée Hassan II et proche de la plage de Miramar.",
      },
      { property: "og:title", content: `Emplacement | ${SITE.name}` },
      { property: "og:description", content: "À 43 km de l'aéroport de Casablanca, près de la plage de Miramar et du golf de Mohammedia." },
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
  const t = useT();
  const distances = t("distances");
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">{t("location_eyebrow")}</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">{t("location_h1")}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{t("location_lead")}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl">{t("location_distances_title")}</h2>
            <dl className="mt-6 space-y-3">
              {distances.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between border-b border-border/60 pb-2">
                  <dt className="text-foreground">{d.label}</dt>
                  <dd className="font-medium text-primary">{d.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-12 font-display text-3xl">{t("location_getting_title")}</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              {t("location_getting_items").map((item) => (
                <li key={item.label}>
                  <strong className="text-foreground">{item.label}</strong> {item.text}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-3xl">{t("location_eat_title")}</h2>
            <ul className="mt-4 grid gap-2 text-muted-foreground sm:grid-cols-2">
              {t("location_eat_items").map((x) => (
                <li key={x}>{x}</li>
              ))}
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
            <p className="mt-4 text-sm text-muted-foreground">{t("location_map_caption")}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
