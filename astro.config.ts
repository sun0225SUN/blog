import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import Compress from 'astro-compress'
import { defineConfig } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive'
import remarkMath from 'remark-math'
import UnoCSS from 'unocss/astro'
import { themeConfig } from './src/config'
import { langMap } from './src/i18n/config'
import { rehypeCodeCopyButton } from './src/plugins/rehype-code-copy-button.mjs'
import { rehypeExternalLinks } from './src/plugins/rehype-external-links.mjs'
import { rehypeHeadingAnchor } from './src/plugins/rehype-heading-anchor.mjs'
import { rehypeImageProcessor } from './src/plugins/rehype-image-processor.mjs'
import { remarkContainerDirectives } from './src/plugins/remark-container-directives.mjs'
import { remarkLeafDirectives } from './src/plugins/remark-leaf-directives.mjs'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'

const siteUrl = themeConfig.site.url
const defaultLocale = themeConfig.global.locale
const imageHostURL = themeConfig.preload?.imageHostURL
const imageConfig = imageHostURL
  ? { image: { domains: [imageHostURL], remotePatterns: [{ protocol: 'https' }] } }
  : {}

export default defineConfig({
  site: siteUrl,
  base: '/',
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport', // hover, tap, viewport, load
  },
  ...imageConfig,
  i18n: {
    locales: Object.entries(langMap).map(([path, codes]) => ({
      path,
      codes: codes as [string, ...string[]],
    })),
    defaultLocale,
  },
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    mdx(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
    sitemap(),
    Compress({
      CSS: true,
      HTML: true,
      Image: false,
      JavaScript: true,
      SVG: false,
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkDirective,
      remarkMath,
      remarkContainerDirectives,
      remarkLeafDirectives,
      remarkReadingTime,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      rehypeHeadingAnchor,
      rehypeImageProcessor,
      rehypeExternalLinks,
      rehypeCodeCopyButton,
    ],
    shikiConfig: {
      // Available themes: https://shiki.style/themes
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  devToolbar: {
    enabled: false,
  },
  // For local development
  server: {
    headers: {
      'Access-Control-Allow-Origin': 'https://giscus.app',
    },
  },
})
