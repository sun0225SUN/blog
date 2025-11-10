import type { ThemeConfig } from '@/types'

export const themeConfig: ThemeConfig = {
  // SITE INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  site: {
    // site title
    title: 'Guoqi Sun',
    // site subtitle
    subtitle: 'A rational romantic.',
    // site description
    description: 'Code | Cycle | Write | PhotoGraph',
    // use i18n title/subtitle/description from src/i18n/ui.ts instead of static ones above
    i18nTitle: true, // true, false
    // author name
    author: 'sun0225SUN',
    // site url
    url: 'https://blog.guoqi.dev',
    // base path
    // root directory for all pages and assets
    base: '/', // e.g., '/blog', '/docs'
    // favicon url
    // recommended formats: svg, png or ico
    favicon: 'https://files.guoqi.dev/favicon.ico', // or https://example.com/favicon.svg
  },
  // SITE INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // COLOR SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  color: {
    // default theme mode
    mode: 'dark', // light, dark, auto
    light: {
      // primary color
      // used for title, hover, etc
      // oklch color picker: https://oklch.com/
      primary: 'oklch(25% 0.005 298)',
      // secondary color
      // used for post text
      secondary: 'oklch(40% 0.005 298)',
      // background color
      background: 'oklch(96% 0.005 298)',
      // highlight color
      // used for navbar, selected text, etc
      highlight: 'oklch(0.93 0.195089 103.2532 / 0.5)', // rgba(255,235,0,0.5)
    },
    dark: {
      // primary color
      primary: 'oklch(92% 0.005 298)',
      // secondary color
      secondary: 'oklch(77% 0.005 298)',
      // background color
      background: 'oklch(0 0 1)',
      // highlight color
      highlight: 'oklch(0.93 0.195089 103.2532 / 0.2)', // rgba(255,235,0,0.2)
    },
  },
  // COLOR SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // GLOBAL SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  global: {
    // default language
    locale: 'zh', // de, en, es, fr, ja, ko, pl, pt, ru, zh, zh-tw
    // more languages
    // not fill in the locale code above again, can be an empty array []
    moreLocales: ['en'], // ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pl', 'pt', 'ru', 'zh', 'zh-tw']
    // font styles for post text
    fontStyle: 'sans', // sans, serif
    // date format for posts
    dateFormat: 'MM-DD-YYYY', // YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
    // table of contents for posts
    toc: true, // true, false
    // KaTeX math rendering
    katex: true, // true, false
    // reduce motion
    reduceMotion: false, // true, false
  },
  // GLOBAL SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // COMMENT SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  comment: {
    // enable comment system
    enabled: true, // true, false
    // giscus
    // https://giscus.app/
    giscus: {
      repo: 'sun0225SUN/blog',
      repoId: 'R_kgDOPfQmqg',
      category: 'General',
      categoryId: 'DIC_kwDOPfQmqs4CuxPO',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      envId: '',
      // version: frontend version can be changed in package.json
    },
    // waline
    // https://waline.js.org/en/
    waline: {
      // server url
      serverURL: '',
      // emoji url
      emoji: [
        // 'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji',
        // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji',
        // more emojis: https://waline.js.org/en/guide/features/emoji.html
      ],
      // gif search
      search: false, // true, false
      // image uploader
      imageUploader: false, // true, false
    },
  },
  // COMMENT SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // SEO SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  seo: {
    // @twitter ID
    twitterID: '@sun0225SUN',
    // site verification
    verification: {
      // google search console
      // https://search.google.com/search-console
      google: '',
      // bing webmaster tools
      // https://www.bing.com/webmasters
      bing: '',
      // yandex webmaster
      // https://webmaster.yandex.com
      yandex: '',
      // baidu search
      // https://ziyuan.baidu.com
      baidu: '',
    },
    // google analytics
    // https://analytics.google.com
    googleAnalyticsID: '',
    // umami analytics
    // https://cloud.umami.is
    umamiAnalyticsID: '9ab6d73e-e1a0-4f42-8b02-f3153050a1c5',
    // follow verification
    // https://follow.is/
    follow: {
      // feed ID
      feedID: '210191552542913536',
      // user ID
      userID: '54887272939958272',
    },
    // apiflash access key
    // automatically generate website screenshots for open graph images
    // get your access key at: https://apiflash.com/
    apiflashKey: 'd749a09196274841b74adfdf634632a4',
  },
  // SEO SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // FOOTER SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  footer: {
    links: [
      {
        name: 'RSS',
        url: '/rss.xml',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/sun0225SUN',
      },
      {
        name: 'Email',
        url: 'hi@guoqi.dev',
      },
      {
        name: 'X',
        url: 'https://x.com/sun0225SUN',
      },
    ],
    startYear: 2022,
  },
  // FOOTER SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // PRELOAD SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  preload: {
    // image hosting url
    // optimize remote images in Markdown files to avoid cumulative layout shift
    imageHostURL: 'files.guoqi.dev',
    // custom google analytics js
    // for users who route analytics javascript to a customized domain
    // see https://gist.github.com/xiaopc/0602f06ca465d76bd9efd3dda9393738
    customGoogleAnalyticsJS: '',
    // custom umami analytics js
    // for users who deploy umami on their own, or route analytics javascript to a customized domain
    // see https://github.com/umami-software/umami/discussions/1026
    customUmamiAnalyticsJS: 'https://umami.guoqi.dev/script.js',
  },
  // PRELOAD SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END
}

export default themeConfig

export const base = themeConfig.site.base === '/' ? '' : themeConfig.site.base.replace(/\/$/, '')
export const defaultLocale = themeConfig.global.locale
export const moreLocales = themeConfig.global.moreLocales
export const allLocales = [defaultLocale, ...moreLocales]
