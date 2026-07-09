import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import exterior from "@/assets/exterior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About | ${SITE.name} — A Bougainvillea Garden Retreat` },
      {
        name: "description",
        content:
          "The story behind Bougainvilla Retreat — a boutique guesthouse in Mohammedia, Morocco, built around a bougainvillea garden, an outdoor pool, and warm Moroccan hospitality.",
      },
      { property: "og:title", content: `About | ${SITE.name}` },
      { property: "og:description", content: "A boutique guesthouse in Mohammedia built around a bougainvillea garden and warm Moroccan hospitality." },
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
  return (
    <Layout>
      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Our story</span>
            <h1 className="mt-3 font-display text-5xl md:text-6xl">Named for the flower that shaped it.</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Bougainvilla Retreat began as a family home in Sidi Moussa Ben Ali, Mohammedia — a
              quiet neighborhood between Casablanca and Rabat. Over time the bougainvillea took over
              the walls, the pergola, the pathway to the pool. It felt like the flower was naming
              the place, so we let it.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today it's a boutique guesthouse for travelers who want the ease of Casablanca —
              airport, Hassan II Mosque, Morocco Mall — without the intensity. Rooms open onto the
              garden and the outdoor pool. Breakfast is halal, à la carte, and served under the
              vines when the weather is right (it usually is).
            </p>
            <p className="mt-4 text-muted-foreground">
              We keep things small on purpose. If you need groceries delivered, a pet welcomed, or a
              walking tour arranged, just ask.
            </p>
          </div>
          <img
            src={exterior}
            alt="Facade of Bougainvilla Retreat covered in blooming bougainvillea, Mohammedia Morocco"
            loading="lazy"
            width={1600}
            height={1100}
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      <section className="bg-secondary/40 section-pad">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {[
            { h: "Warm hospitality", p: "Small enough to remember your name, big enough to have a proper pool." },
            { h: "Halal breakfast", p: "À la carte breakfast with local specialties, pancakes, cheese, and mint tea." },
            { h: "Garden-first design", p: "Every room looks onto the pool or the bougainvillea. The garden is the point." },
          ].map((x) => (
            <div key={x.h}>
              <h2 className="font-display text-2xl">{x.h}</h2>
              <p className="mt-2 text-muted-foreground">{x.p}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="container-page mt-10 text-xs text-muted-foreground">
        Content last updated: {SITE.lastUpdated}.
      </p>
    </Layout>
  );
}
