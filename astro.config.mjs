import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  output: "server",
  integrations: [tailwind(), sitemap()],
  site: "https://kdl.or.id",
  base: "/",
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  trailingSlash: "always",
});
