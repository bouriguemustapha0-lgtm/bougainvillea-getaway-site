import { SITE } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.596-1.058-.89-1.558-.653-.45.21-1.018.382-1.312.382-.646 0-1.182-.257-1.618-.514-.65-.373-1.528-.88-2.45-1.802-1.285-1.285-2.078-2.612-2.356-3.142-.28-.53-.026-1.198.44-1.58.21-.18.44-.27.68-.27.15 0 .3.03.44.09.45.18.96.59 1.21.83.25.24.55.72.75 1.16.2.44.14.88-.09 1.18-.12.16-.28.31-.46.44-.09.07-.19.14-.28.21.09.12.18.24.28.36.42.5.9.99 1.42 1.46.24.21.48.42.74.61.09-.09.18-.19.27-.29.22-.24.45-.48.68-.72.31-.32.74-.42 1.16-.26.44.17.88.34 1.32.53.42.18.7.5.78.93.08.43-.03.86-.28 1.21-.15.2-.33.38-.52.54-.35.3-.75.53-1.18.67-.22.07-.45.1-.68.1-.67 0-1.34-.25-1.87-.57zm-1.94-9.88c-3.31 0-6 2.69-6 6 0 1.27.39 2.45 1.06 3.42l-1.06 3.18 3.26-1.04c.93.5 1.98.79 3.09.79 3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10.88c-1.13 0-2.18-.34-3.06-.92l-.22-.14-2.2.7.72-2.16-.14-.23c-.65-1.03-1.01-2.24-1.01-3.53 0-3.59 2.92-6.5 6.5-6.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z" />
    </svg>
  );
}

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
          <WhatsAppIcon className="h-5 w-5" />
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
