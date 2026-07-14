import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { useT } from "@/i18n";

export function Footer() {
  const t = useT();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <img
            src="/logo.png"
            alt={SITE.name}
            className="h-10 w-auto object-contain"
          />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{t("footer_intro")}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{t("footer_visit")}</h3>
          <address className="mt-3 not-italic text-sm text-muted-foreground">
            {SITE.streetAddress}
            <br />
            {SITE.neighborhood}, {SITE.city}
            <br />
            {SITE.region}, {SITE.country}
            <br />
            <a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a>
            <br />
            <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{t("footer_explore")}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/rooms" className="hover:text-primary">{t("nav_rooms")}</Link></li>
            <li><Link to="/amenities" className="hover:text-primary">{t("nav_amenities")}</Link></li>
            <li><Link to="/location" className="hover:text-primary">{t("nav_location")}</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">{t("nav_gallery")}</Link></li>
            <li><Link to="/about" className="hover:text-primary">{t("nav_about")}</Link></li>
            <li><Link to="/faq" className="hover:text-primary">{t("nav_faq")}</Link></li>
            <li><Link to="/contact" className="hover:text-primary">{t("nav_contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{t("footer_book_direct")}</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/reservation" className="text-muted-foreground hover:text-primary">
                {t("book_now")}
              </Link>
            </li>
            <li>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                {t("chat_whatsapp")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. {t("footer_rights")}</p>
          <p>{t("last_updated")} {SITE.lastUpdated}</p>
        </div>
      </div>
    </footer>
  );
}
