import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { Layout } from "@/components/Layout";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SITE, bookingLinks } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript, lodgingSchema } from "@/lib/schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact | ${SITE.name}, Mohammedia Morocco` },
      {
        name: "description",
        content:
          "Contact Bougainvilla Retreat in Mohammedia — WhatsApp, email, and direct booking on Booking.com or Agoda.",
      },
      { property: "og:title", content: `Contact | ${SITE.name}` },
      { property: "og:description", content: "WhatsApp, email, and OTA booking links." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      jsonLdScript(lodgingSchema()),
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ]),
      ),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Come stay with us.</h1>
          <p className="mt-5 text-muted-foreground">
            For availability and rates, please book directly on Booking.com or Agoda. For anything
            else — pets, dietary needs, transfers — reach us on WhatsApp or by email.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-3xl">Direct contact</h2>
          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-sm text-muted-foreground">Address</dt>
              <dd>{SITE.streetAddress}, {SITE.neighborhood}, {SITE.city}, {SITE.region}, {SITE.country}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Phone</dt>
              <dd><a href={SITE.phoneHref} className="text-primary hover:underline">{SITE.phone}</a></dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Email</dt>
              <dd><a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a></dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">WhatsApp</dt>
              <dd><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chat with us</a></dd>
            </div>
          </dl>

          <h2 className="mt-12 font-display text-3xl">Book on OTAs</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {bookingLinks().map((b) => (
              <a key={b.key} href={b.href} target="_blank" rel="noopener noreferrer"
                 className={b.key === "booking" ? "btn-primary text-sm" : "btn-outline text-sm"}>
                {b.label}
              </a>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl">Follow us</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 text-sm"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 text-sm"
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </a>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Map to Bougainvilla Retreat"
              src={`https://www.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}&z=13&output=embed`}
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
