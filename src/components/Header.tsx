import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { useT, LanguageSwitcher } from "@/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const t = useT();
  const nav = [
    { to: "/", label: t("nav_home") },
    { to: "/rooms", label: t("nav_rooms") },
    { to: "/amenities", label: t("nav_amenities") },
    { to: "/location", label: t("nav_location") },
    { to: "/gallery", label: t("nav_gallery") },
    { to: "/about", label: t("nav_about") },
    { to: "/faq", label: t("nav_faq") },
    { to: "/contact", label: t("nav_contact") },
  ] as const;
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-2" aria-label={`${SITE.name} home`}>
          <img
            src="/logo.png"
            alt=""
            aria-hidden
            className="h-9 w-auto shrink-0 object-contain"
          />
          <span className="truncate font-display text-xl leading-none">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a
            href={SITE.ota.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            {t("book_now")}
          </a>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          aria-label={t("menu_label")}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">{t("menu_label")}</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-page flex flex-col gap-1 py-3" aria-label="Mobile">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm hover:bg-secondary"
                activeProps={{ className: "text-primary font-medium bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="px-3 pt-2">
              <LanguageSwitcher />
            </div>
            <a
              href={SITE.ota.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 text-sm"
            >
              {t("book_on_booking")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
