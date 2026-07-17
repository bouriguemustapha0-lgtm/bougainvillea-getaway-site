import { defineMcp } from "@lovable.dev/mcp-js";
import getGuesthouseInfo from "./tools/get-guesthouse-info";
import listRooms from "./tools/list-rooms";
import listAmenities from "./tools/list-amenities";
import listFaqs from "./tools/list-faqs";
import getDistances from "./tools/get-distances";
import buildWhatsappBookingLink from "./tools/build-whatsapp-booking-link";

export default defineMcp({
  name: "bougainvilla-mcp",
  title: "Bougainvilla Guesthouse",
  version: "0.1.0",
  instructions:
    "Public tools for Bougainvilla Guesthouse (Mohammedia, Morocco). Use these to answer questions about the property — rooms, amenities, location, distances, FAQs, contact — and to build a pre-filled WhatsApp booking-inquiry link. Bookings are confirmed by the guesthouse over WhatsApp.",
  tools: [
    getGuesthouseInfo,
    listRooms,
    listAmenities,
    listFaqs,
    getDistances,
    buildWhatsappBookingLink,
  ],
});
