import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://blog.sunguoqi.com",
  vite: {
    worker: {
      plugins: () => [],
    },
  },
  integrations: [react(), tailwind(), mdx()],
})
