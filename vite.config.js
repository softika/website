import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        team: resolve(__dirname, "team/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        policy: resolve(__dirname, "policy/index.html"),
        blog: resolve(__dirname, "blog/index.html"),
        "blog-ai-agents-marketing": resolve(
          __dirname,
          "blog/ai-agents-marketing/index.html",
        ),
        "blog-openclaw-security": resolve(
          __dirname,
          "blog/openclaw-security/index.html",
        ),
      },
    },
  },
});
