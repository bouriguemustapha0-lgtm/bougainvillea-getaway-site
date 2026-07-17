import { defineTool } from "@lovable.dev/mcp-js";
import { ROOMS } from "@/lib/site";

export default defineTool({
  name: "list_rooms",
  title: "List rooms",
  description: "List every room type available at Bougainvilla Guesthouse with its features and description.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(ROOMS, null, 2) }],
    structuredContent: { rooms: ROOMS },
  }),
});
