import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import exterior from "@/assets/exterior.jpg";
import { useT } from "@/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `À propos | ${SITE.name} — Une retraite au jardin de bougainvilliers` },
      {
        name: "description",
        content:
          "L'histoire de Bougainvilla Retreat — une maison d'hôtes de charme à Mohammedia, Maroc, autour d'un jardin de bougainvilliers, d'une piscine extérieure et d'une hospitalité marocaine chaleureuse.",
      },
      { property: "og:title", content: `À propos | ${SITE.name}` },
      { property: "og:description", content: "Une maison d'hôtes de charme à Mohammedia, autour d'un jardin de bougainvilliers." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "About", item: "/about" },
        ]),
      ),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  return (
    <Layout>
      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">{t("about_eyebrow")}</span>
            <h1 className="mt-3 font-display text-5xl md:text-6xl">{t("about_h1")}</h1>
            <p className="mt-6 text-lg text-muted-foreground">{t("about_p1")}</p>
            <p className="mt-4 text-muted-foreground">{t("about_p2")}</p>
            <p className="mt-4 text-muted-foreground">{t("about_p3")}</p>
          </div>
          <img
            src={exterior}
            alt=""
            loading="lazy"
            width={1600}
            height={1100}
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      <section className="bg-secondary/40 section-pad">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {t("about_pillars").map((x) => (
            <div key={x.h}>
              <h2 className="font-display text-2xl">{x.h}</h2>
              <p className="mt-2 text-muted-foreground">{x.p}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="container-page mt-10 text-xs text-muted-foreground">
        {t("content_last_updated")} {SITE.lastUpdated}.
      </p>
    </Layout>
  );
}
