import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { useLang, useT } from "@/i18n";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: `Réservation | ${SITE.name} — WhatsApp` },
      {
        name: "description",
        content:
          "Réservez votre séjour à Bougainvilla Guesthouse directement par WhatsApp — indiquez vos dates et le nombre de voyageurs, notre conciergerie vous répond en français, anglais ou arabe.",
      },
      { property: "og:title", content: `Réservation | ${SITE.name}` },
      { property: "og:description", content: "Réservation directe par WhatsApp." },
      { property: "og:url", content: "/reservation" },
    ],
    links: [{ rel: "canonical", href: "/reservation" }],
    scripts: [
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Réservation", item: "/reservation" },
        ]),
      ),
    ],
  }),
  component: ReservationPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  guests: z.coerce.number().int().min(1).max(12),
  arrival: z.string().min(1),
  departure: z.string().min(1),
});

// WhatsApp expects the phone number without symbols
const WA_NUMBER = SITE.phoneHref.replace(/[^\d]/g, "");

function todayISO(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
}

function ReservationPage() {
  const t = useT();
  const { lang } = useLang();

  const [name, setName] = useState("");
  const [guests, setGuests] = useState(2);
  const [arrival, setArrival] = useState(todayISO(2));
  const [departure, setDeparture] = useState(todayISO(4));
  const [error, setError] = useState<string | null>(null);

  const summaryLabels = useMemo(
    () =>
      lang === "fr"
        ? { name: "Nom", guests: "Voyageurs", arrival: "Arrivée", departure: "Départ" }
        : { name: "Name", guests: "Guests", arrival: "Arrival", departure: "Departure" },
    [lang],
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse({ name, guests, arrival, departure });
    if (!parsed.success) {
      setError(
        lang === "fr"
          ? "Merci de compléter tous les champs (nom, voyageurs, dates)."
          : "Please complete every field (name, guests, dates).",
      );
      return;
    }
    if (new Date(departure) <= new Date(arrival)) {
      setError(
        lang === "fr"
          ? "La date de départ doit être après la date d'arrivée."
          : "Departure must be after arrival.",
      );
      return;
    }

    const lines =
      lang === "fr"
        ? [
            `Bonjour Bougainvilla Guesthouse,`,
            ``,
            `Je souhaite réserver un séjour :`,
            `• Nom : ${parsed.data.name}`,
            `• Voyageurs : ${parsed.data.guests}`,
            `• Arrivée : ${parsed.data.arrival}`,
            `• Départ : ${parsed.data.departure}`,
            ``,
            `Pouvez-vous me confirmer les disponibilités et le tarif ? Merci !`,
          ]
        : [
            `Hello Bougainvilla Guesthouse,`,
            ``,
            `I'd like to book a stay:`,
            `• Name: ${parsed.data.name}`,
            `• Guests: ${parsed.data.guests}`,
            `• Arrival: ${parsed.data.arrival}`,
            `• Departure: ${parsed.data.departure}`,
            ``,
            `Could you confirm availability and the rate? Thank you!`,
          ];
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Layout>
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">{lang === "fr" ? "Réservation" : "Reservation"}</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            {lang === "fr" ? "Votre séjour" : "Your stay"}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            {lang === "fr"
              ? "Indiquez vos dates et le nombre de voyageurs, puis envoyez votre demande. Notre conciergerie vous confirme par WhatsApp."
              : "Enter your dates and number of guests, then send your request. Our concierge confirms by WhatsApp."}
          </p>

          <form onSubmit={onSubmit} noValidate className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
            <span className="eyebrow">{lang === "fr" ? "Vos informations" : "Your details"}</span>

            <div className="mt-6 grid gap-5">
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {lang === "fr" ? "Nom complet" : "Full name"}
                </span>
                <input
                  type="text"
                  required
                  maxLength={80}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <label className="block">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {lang === "fr" ? "Nombre de voyageurs" : "Number of guests"}
                </span>
                <input
                  type="number"
                  min={1}
                  max={12}
                  required
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {lang === "fr" ? "Arrivée" : "Arrival"}
                  </span>
                  <input
                    type="date"
                    required
                    min={todayISO()}
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
                    className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {lang === "fr" ? "Départ" : "Departure"}
                  </span>
                  <input
                    type="date"
                    required
                    min={arrival || todayISO()}
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
              </div>
            </div>

            {error && (
              <p role="alert" className="mt-4 text-sm text-destructive">
                {error}
              </p>
            )}

            {/* Summary card (dark) */}
            <div className="mt-8 rounded-xl bg-ink p-6 text-background">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-background/60">
                {lang === "fr" ? "Votre sélection" : "Your selection"}
              </span>
              <dl className="mt-4 space-y-2 text-sm">
                <Row label={summaryLabels.name} value={name || "—"} />
                <Row label={summaryLabels.guests} value={String(guests)} />
                <Row label={summaryLabels.arrival} value={arrival} />
                <Row label={summaryLabels.departure} value={departure} />
              </dl>
              <button
                type="submit"
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-terracotta text-terracotta-foreground shadow-sm transition-transform hover:scale-[1.01]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span className="font-medium tracking-wide">
                  {lang === "fr" ? "ENVOYER SUR WHATSAPP" : "SEND VIA WHATSAPP"}
                </span>
              </button>
              <p className="mt-3 text-center text-[11px] uppercase tracking-[0.18em] text-background/60">
                {lang === "fr"
                  ? "Réponse en français, anglais ou arabe."
                  : "We reply in French, English or Arabic."}
              </p>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {lang === "fr" ? "Préférez appeler ? " : "Prefer to call? "}
            <a href={SITE.phoneHref} className="text-primary hover:underline">
              {SITE.phone}
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-background/10 pb-2 last:border-0 last:pb-0">
      <dt className="text-background/70">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
