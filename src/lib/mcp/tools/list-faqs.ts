import { defineTool } from "@lovable.dev/mcp-js";
import { FAQS } from "@/lib/site";

export default defineTool({
  name: "list_faqs",
  title: "List FAQs",
  description: "Return frequently asked questions and answers about Bougainvilla Guesthouse (location, breakfast, pets, parking, check-in, distances, etc.).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(FAQS, null, 2) }],
    structuredContent: { faqs: FAQS },
  }),
});
