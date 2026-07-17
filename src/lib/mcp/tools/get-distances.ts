import { defineTool } from "@lovable.dev/mcp-js";
import { SITE } from "@/lib/site";

export default defineTool({
  name: "get_distances",
  title: "Get distances to nearby landmarks",
  description: "Return distances from Bougainvilla Guesthouse to nearby landmarks (Casablanca airport, Hassan II Mosque, Morocco Mall, train stations, etc.).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SITE.distances, null, 2) }],
    structuredContent: { distances: SITE.distances },
  }),
});
