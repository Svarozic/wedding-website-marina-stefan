// @ts-check
import { defineConfig } from "astro/config";
import devtoolsJson from "vite-plugin-devtools-json";

// https://astro.build/config
export default defineConfig({
  vite: {
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [devtoolsJson()],
  },
});
