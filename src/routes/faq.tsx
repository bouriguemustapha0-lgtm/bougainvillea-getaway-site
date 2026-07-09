import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLdScript } from "@/lib/schema";
import { useT } from "@/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `FAQ | ${SITE.name}, Mohammedia — Piscine, petit-déjeuner, aéroport` },
      {
        name: "description",
        content:
          "Questions fréquentes sur Bougainvilla Retreat à Mohammedia : distance de l'aéroport de Casablanca, piscine, petit-déjeuner halal, animaux et réservation.",
      },
      { property: "og:title", content: `FAQ | ${SITE.name}` },
      { property: "og:description", content: "Réponses sur la piscine, le petit-déjeuner halal, les distances, les animaux et la réservation." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      jsonLdScript(faqSchema()),
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "FAQ", item: "/faq" },
        ]),
      ),
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const t = useT();
  const faqs = t("faqs");
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">{t("faq_eyebrow")}</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">{t("faq_h1")}</h1>
          <p className="mt-5 text-muted-foreground">{t("faq_lead")}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <dl className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-border pb-6">
                <dt>
                  <h2 className="font-display text-2xl">{f.q}</h2>
                </dt>
                <dd className="mt-3 text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-xs text-muted-foreground">{t("last_updated")} {SITE.lastUpdated}.</p>
        </div>
      </section>
    </Layout>
  );
}
