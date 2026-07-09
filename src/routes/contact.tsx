import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SITE, bookingLinks } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript, lodgingSchema } from "@/lib/schema";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact | ${SITE.name}, Mohammedia Morocco` },
      {
        name: "description",
        content:
          "Contact Bougainvilla Retreat in Mohammedia — WhatsApp, email, and OTA booking links for Booking.com, Airbnb, Tripadvisor, and Agoda.",
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
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Inquiry from ${form.name || "website visitor"}`,
  )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;

  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Come stay with us.</h1>
          <p className="mt-5 text-muted-foreground">
            For availability and rates, please book through Booking.com, Airbnb, Tripadvisor, or
            Agoda. For anything else — pets, dietary needs, transfers — reach us directly.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
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

          <form
            className="card-soft space-y-5 p-8"
            onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }}
          >
            <h2 className="font-display text-3xl">Send us a message</h2>
            <p className="text-sm text-muted-foreground">
              This form opens your email app. For booking, prefer the OTA links above.
            </p>
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button type="submit" className="btn-primary w-full">Send message</button>
            <p className="text-xs text-muted-foreground">
              [ADD: swap mailto for a hosted form service (Formspree / Web3Forms) before launch.]
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
}
