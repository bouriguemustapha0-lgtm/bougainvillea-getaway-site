import { defineTool } from "@lovable.dev/mcp-js";
import { AMENITIES } from "@/lib/site";

export default defineTool({
  name: "list_amenities",
  title: "List amenities",
  description: "List the amenities and services offered at Bougainvilla Guesthouse (pool, garden, breakfast, parking, etc.).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(AMENITIES, null, 2) }],
    structuredContent: { amenities: AMENITIES },
  }),
});
