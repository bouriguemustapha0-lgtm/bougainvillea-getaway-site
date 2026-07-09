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
import { useT } from "@/i18n";

const groupImages: string[][] = [
  [hero, poolUmbrella, terrace],
  [garden, exterior, ducks],
  [room, roomTwin, roomDetail, roomArt, domeInterior, lounge],
  [breakfast],
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Galerie | ${SITE.name}, Mohammedia Maroc` },
      { name: "description", content: "Photos de Bougainvilla Retreat à Mohammedia — piscine, jardin, chambres et petit-déjeuner." },
      { property: "og:title", content: `Galerie | ${SITE.name}` },
      { property: "og:description", content: "Photos de la piscine, du jardin, des chambres et du petit-déjeuner." },
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
  const t = useT();
  const groups = t("gallery_groups");
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">{t("gallery_eyebrow")}</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">{t("gallery_h1")}</h1>
          <p className="mt-5 text-muted-foreground">{t("gallery_lead")}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page space-y-16">
          {groups.map((g, gi) => (
            <div key={g.title}>
              <h2 className="font-display text-3xl">{g.title}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {(groupImages[gi] ?? []).map((src, i) => (
                  <figure key={i} className="overflow-hidden rounded-2xl border border-border">
                    <img
                      src={src}
                      alt={g.alts[i] ?? ""}
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
