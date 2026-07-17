import { defineTool } from "@lovable.dev/mcp-js";
import { SITE } from "@/lib/site";

export default defineTool({
  name: "get_guesthouse_info",
  title: "Get guesthouse info",
  description:
    "Return core public facts about Bougainvilla Guesthouse: name, location, contact, check-in/out times, rating, and booking links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: SITE.name,
      brand: SITE.brand,
      tagline: SITE.tagline,
      description: SITE.descriptionShort,
      address: {
        street: SITE.streetAddress,
        neighborhood: SITE.neighborhood,
        city: SITE.city,
        region: SITE.region,
        postalCode: SITE.postalCode,
        country: SITE.country,
      },
      geo: SITE.geo,
      contact: {
        phone: SITE.phone,
        email: SITE.email,
        whatsapp: SITE.whatsapp,
      },
      social: SITE.social,
      checkIn: SITE.checkIn,
      checkOut: SITE.checkOut,
      rating: SITE.rating,
      bookingLinks: SITE.ota,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
