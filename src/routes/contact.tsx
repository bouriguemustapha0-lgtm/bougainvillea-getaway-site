import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { Layout } from "@/components/Layout";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript, lodgingSchema } from "@/lib/schema";
import { useT } from "@/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact | ${SITE.name}, Mohammedia Maroc` },
      {
        name: "description",
        content:
          "Contactez Bougainvilla Retreat à Mohammedia — WhatsApp, e-mail et réservation directe sur Booking.com ou Agoda.",
      },
      { property: "og:title", content: `Contact | ${SITE.name}` },
      { property: "og:description", content: "WhatsApp, e-mail et liens de réservation OTA." },
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
  const t = useT();
  return (
    <Layout>
      <section className="border-b border-border bg-secondary/40 py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">{t("contact_eyebrow")}</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">{t("contact_h1")}</h1>
          <p className="mt-5 text-muted-foreground">{t("contact_lead")}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-3xl">{t("contact_direct")}</h2>
          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-sm text-muted-foreground">{t("contact_address")}</dt>
              <dd>{SITE.streetAddress}, {SITE.neighborhood}, {SITE.city}, {SITE.region}, {SITE.country}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">{t("contact_phone")}</dt>
              <dd><a href={SITE.phoneHref} className="text-primary hover:underline">{SITE.phone}</a></dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">{t("contact_email")}</dt>
              <dd><a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a></dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">{t("contact_whatsapp")}</dt>
              <dd>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {t("chat_whatsapp")}
                </a>
              </dd>
            </div>
          </dl>

          <h2 className="mt-12 font-display text-3xl">{t("book_now")}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/reservation" className="btn-primary text-sm">
              {t("book_now")}
            </Link>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
              {t("chat_whatsapp")}
            </a>
          </div>

          <h2 className="mt-12 font-display text-3xl">{t("contact_follow")}</h2>
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
