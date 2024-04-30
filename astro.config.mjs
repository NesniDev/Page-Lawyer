import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://www.abogadasandraalba.com",
  integrations: [tailwind(), sitemap(), preact()],
  output: "server",
  adapter: vercel()
});