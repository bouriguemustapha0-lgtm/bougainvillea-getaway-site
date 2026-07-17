import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SITE } from "@/lib/site";

const WA_NUMBER = SITE.phoneHref.replace(/[^\d]/g, "");

export default defineTool({
  name: "build_whatsapp_booking_link",
  title: "Build WhatsApp booking link",
  description:
    "Build a pre-filled WhatsApp URL to send a booking inquiry to Bougainvilla Guesthouse. Returns a wa.me link with the guest name, party size and dates prefilled in the message.",
  inputSchema: {
    name: z.string().trim().min(1).describe("Guest's full name."),
    guests: z.number().int().min(1).max(12).describe("Number of travelers (1-12)."),
    arrival: z.string().describe("Arrival date in YYYY-MM-DD format."),
    departure: z.string().describe("Departure date in YYYY-MM-DD format."),
    language: z.enum(["fr", "en"]).describe("Message language: 'fr' or 'en'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ name, guests, arrival, departure, language }) => {
    const lines =
      language === "fr"
        ? [
            "Bonjour Bougainvilla Guesthouse,",
            "",
            "Je souhaite réserver un séjour :",
            `• Nom : ${name}`,
            `• Voyageurs : ${guests}`,
            `• Arrivée : ${arrival}`,
            `• Départ : ${departure}`,
            "",
            "Pouvez-vous me confirmer les disponibilités et le tarif ? Merci !",
          ]
        : [
            "Hello Bougainvilla Guesthouse,",
            "",
            "I'd like to book a stay:",
            `• Name: ${name}`,
            `• Guests: ${guests}`,
            `• Arrival: ${arrival}`,
            `• Departure: ${departure}`,
            "",
            "Could you confirm availability and the rate? Thank you!",
          ];
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    return {
      content: [{ type: "text", text: url }],
      structuredContent: { url, message: lines.join("\n") },
    };
  },
});
