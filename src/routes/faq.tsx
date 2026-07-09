import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FAQS, SITE } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLdScript } from "@/lib/schema";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `FAQ | ${SITE.name}, Mohammedia — Pool, Breakfast, Airport` },
      {
        name: "description",
        content:
          "Frequently asked questions about Bougainvilla Retreat in Mohammedia: distance to Casablanca airport, pool, halal breakfast, pets, kitchen units, and booking.",
      },
      { property: "og:title", content: `FAQ | ${SITE.name}` },
      { property: "og:description", content: "Answers about the pool, halal breakfast, distances, pets, and booking." },
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
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Frequently asked</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Questions we hear most often.</h1>
          <p className="mt-5 text-muted-foreground">
            Fast, factual answers about staying at Bougainvilla Retreat in Mohammedia.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <dl className="space-y-8">
            {FAQS.map((f) => (
              <div key={f.q} className="border-b border-border pb-6">
                <dt>
                  <h2 className="font-display text-2xl">{f.q}</h2>
                </dt>
                <dd className="mt-3 text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-xs text-muted-foreground">Last updated: {SITE.lastUpdated}.</p>
        </div>
      </section>
    </Layout>
  );
}
