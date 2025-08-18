// @ts-check
import { defineConfig } from "astro/config";
import devtoolsJson from "vite-plugin-devtools-json";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [devtoolsJson(), tailwindcss()],
  },
});
