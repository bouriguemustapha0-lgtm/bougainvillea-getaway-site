import { SITE } from "@/lib/site";

export function MobileBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-lg backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a
          href={SITE.ota.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 text-sm"
        >
          Booking.com
        </a>
        <a
          href={SITE.ota.agoda}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-terracotta flex-1 text-sm"
        >
          Agoda
        </a>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf text-leaf-foreground"
        >
          <span aria-hidden>💬</span>
        </a>
      </div>
    </div>
  );
}

export function WhatsAppFloating() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-leaf text-leaf-foreground shadow-lg transition-transform hover:scale-105 md:inline-flex"
    >
      <span aria-hidden className="text-2xl">💬</span>
    </a>
  );
}
