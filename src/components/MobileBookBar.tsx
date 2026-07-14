import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { useT } from "@/i18n";

export function MobileBookBar() {
  const t = useT();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-lg backdrop-blur md:hidden">
      <div className="flex gap-2">
        <Link to="/reservation" className="btn-primary flex-1 text-sm">
          {t("book_now")}
        </Link>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("chat_whatsapp")}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-foreground shadow-sm"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

export function WhatsAppFloating() {
  const t = useT();
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("chat_whatsapp")}
      className="fixed bottom-6 right-6 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-white text-foreground shadow-lg transition-transform hover:scale-105 md:inline-flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
