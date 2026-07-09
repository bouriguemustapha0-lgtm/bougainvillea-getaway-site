import { Link } from "@tanstack/react-router";
import { SITE, bookingLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl">{SITE.name}</div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            A boutique guesthouse in {SITE.neighborhood}, {SITE.city}, Morocco — with an outdoor
            pool, garden, and halal breakfast.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Visit</h3>
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
          <h3 className="text-sm font-semibold text-ink">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/rooms" className="hover:text-primary">Rooms & Suites</Link></li>
            <li><Link to="/amenities" className="hover:text-primary">Amenities</Link></li>
            <li><Link to="/location" className="hover:text-primary">Location</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Book direct on OTAs</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {bookingLinks().map((b) => (
              <li key={b.key}>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  {b.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Last updated: {SITE.lastUpdated}</p>
        </div>
      </div>
    </footer>
  );
}
