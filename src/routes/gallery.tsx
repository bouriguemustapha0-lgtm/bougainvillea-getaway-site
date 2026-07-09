import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import hero from "@/assets/hero-pool.jpg";
import garden from "@/assets/garden.jpg";
import room from "@/assets/room.jpg";
import breakfast from "@/assets/breakfast.jpg";
import terrace from "@/assets/terrace.jpg";
import exterior from "@/assets/exterior.jpg";

const groups: { title: string; items: { src: string; alt: string }[] }[] = [
  {
    title: "Pool & terrace",
    items: [
      { src: hero, alt: "Infinity pool at sunset with bougainvillea and palms, Bougainvilla Retreat Mohammedia" },
      { src: terrace, alt: "Sun terrace with loungers under a pergola at Bougainvilla Retreat" },
    ],
  },
  {
    title: "Garden",
    items: [
      { src: garden, alt: "Bougainvillea-lined garden pathway at Bougainvilla Retreat" },
      { src: exterior, alt: "Terracotta facade covered in bougainvillea, Bougainvilla Retreat entrance" },
    ],
  },
  {
    title: "Rooms",
    items: [
      { src: room, alt: "Boutique guesthouse bedroom with balcony overlooking the pool, Bougainvilla Retreat" },
    ],
  },
  {
    title: "Breakfast",
    items: [
      { src: breakfast, alt: "Halal Moroccan breakfast served on the garden terrace at Bougainvilla Retreat" },
    ],
  },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery | ${SITE.name}, Mohammedia Morocco` },
      { name: "description", content: "Photos of Bougainvilla Retreat in Mohammedia — pool, garden, rooms, and breakfast." },
      { property: "og:title", content: `Gallery | ${SITE.name}` },
      { property: "og:description", content: "Photos of the pool, garden, rooms, and breakfast." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
    scripts: [
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Gallery", item: "/gallery" },
        ]),
      ),
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Gallery</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">A tour through the garden.</h1>
          <p className="mt-5 text-muted-foreground">
            [ADD: replace these renderings with real property photography before launch.]
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page space-y-16">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="font-display text-3xl">{g.title}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((it, i) => (
                  <figure key={i} className="overflow-hidden rounded-2xl border border-border">
                    <img
                      src={it.src}
                      alt={it.alt}
                      loading="lazy"
                      width={1600}
                      height={1100}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
