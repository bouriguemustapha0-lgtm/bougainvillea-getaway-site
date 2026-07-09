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
import roomTwin from "@/assets/room-twin.jpg";
import lounge from "@/assets/lounge.jpg";
import roomDetail from "@/assets/room-detail.jpg";
import roomArt from "@/assets/room-art.jpg";
import domeInterior from "@/assets/dome-interior.jpg";
import poolUmbrella from "@/assets/pool-umbrella.jpg";
import ducks from "@/assets/ducks.jpg";

const groups: { title: string; items: { src: string; alt: string }[] }[] = [
  {
    title: "Pool & terrace",
    items: [
      { src: hero, alt: "Outdoor pool at sunset with garden views, Bougainvilla Retreat Mohammedia" },
      { src: poolUmbrella, alt: "Pool with straw umbrella at dusk, Bougainvilla Retreat" },
      { src: terrace, alt: "Garden view over the countryside from the terrace at Bougainvilla Retreat" },
    ],
  },
  {
    title: "Garden",
    items: [
      { src: garden, alt: "Fountain in front of the bougainvillea-covered guesthouse, Bougainvilla Retreat" },
      { src: exterior, alt: "Geodesic dome and lavender garden at Bougainvilla Retreat" },
      { src: ducks, alt: "Ducks on the garden pond at Bougainvilla Retreat" },
    ],
  },
  {
    title: "Rooms",
    items: [
      { src: room, alt: "Moroccan-styled bedroom with hand-painted art and woven wall decor" },
      { src: roomTwin, alt: "Family room with twin beds and arched wall niches, Bougainvilla Retreat" },
      { src: roomDetail, alt: "Upholstered headboard with woven palm-leaf wall piece" },
      { src: roomArt, alt: "Bedroom with Moroccan horsemen artwork above the headboard" },
      { src: domeInterior, alt: "Interior of the geodesic dome suite with Moroccan door" },
      { src: lounge, alt: "Living lounge with green sofa and Moroccan alcove, Bougainvilla Retreat" },
    ],
  },
  {
    title: "Breakfast",
    items: [
      { src: breakfast, alt: "Bread baking over the outdoor wood fire at Bougainvilla Retreat" },
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
            Real photographs from the guesthouse — pool at dusk, the bougainvillea facade, our rooms, and mornings in the garden.
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
