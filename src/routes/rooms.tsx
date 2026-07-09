import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ROOMS, SITE, bookingLinks } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import roomImg from "@/assets/room.jpg";
import terraceImg from "@/assets/terrace.jpg";
import gardenImg from "@/assets/garden.jpg";

const imgs = [roomImg, terraceImg, gardenImg];

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: `Rooms & Suites | ${SITE.name}, Mohammedia` },
      {
        name: "description",
        content:
          "Balcony rooms at Bougainvilla Retreat in Mohammedia, Morocco — pool or garden views, private bathrooms, and fresh linen. Book direct on Booking.com or Agoda.",
      },
      { property: "og:title", content: `Rooms & Suites | ${SITE.name}` },
      { property: "og:description", content: "Balcony rooms with pool or garden views." },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
    scripts: [
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Rooms & Suites", item: "/rooms" },
        ]),
      ),
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Rooms & Suites</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Balcony rooms, garden views</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Every room at Bougainvilla Retreat opens onto a private balcony with a pool or garden
            view, and comes with air conditioning, a desk, wardrobe, fresh bed linen and a private
            bathroom with shower, free toiletries and hair dryer.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page space-y-16">
          {ROOMS.map((r, i) => (
            <article key={r.slug} className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <img
                src={imgs[i % imgs.length]}
                alt={`${r.name} — ${SITE.name}, ${SITE.city}, Morocco`}
                loading="lazy"
                width={1600}
                height={1100}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
              />
              <div>
                <h2 className="font-display text-4xl">{r.name}</h2>
                <p className="mt-4 text-muted-foreground">{r.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {r.features.map((f) => (
                    <li key={f} className="rounded-full bg-secondary px-3 py-1 text-xs">
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  {bookingLinks().map((b) => (
                    <a key={b.key} href={b.href} target="_blank" rel="noopener noreferrer"
                       className={b.key === "booking" ? "btn-primary text-sm" : "btn-outline text-sm"}>
                      {b.label}
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Prices and cancellation terms are set by the booking platform.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
