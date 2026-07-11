import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import heroImg from "@/assets/hero-pool.jpg";
import { useT } from "@/i18n";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: `Services | Piscine, jardin & petit-déjeuner halal — ${SITE.name}` },
      {
        name: "description",
        content:
          "Services à Bougainvilla Retreat, Mohammedia : piscine extérieure, jardin paysager, terrasse ensoleillée, petit-déjeuner halal, parking gratuit et animaux acceptés.",
      },
      { property: "og:title", content: `Services | ${SITE.name}` },
      {
        property: "og:description",
        content: "Piscine, jardin, petit-déjeuner halal, parking gratuit et plus encore.",
      },
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
  const t = useT();
  const amenities = t("amenities");
  return (
    <Layout>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="container-page py-24 text-white">
          <span className="eyebrow text-white/90">{t("nav_amenities")}</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-6xl text-white">
            {t("amenities_h1")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">{t("amenities_lead")}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <div key={a.title} className="card-soft p-6">
                <h2 className="font-display text-2xl">{a.title}</h2>
                <p className="mt-3 text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-secondary/60 p-10 md:p-14">
            <h2 className="font-display text-3xl">{t("amenities_good_to_know")}</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {t("amenities_good_to_know_items").map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
