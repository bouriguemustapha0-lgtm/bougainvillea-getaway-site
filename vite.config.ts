import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/tanstack/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  vite: {
    plugins: [
      mcpPlugin(),
      nitro({
        preset: "vercel",
      }),
    ],
  },
});
