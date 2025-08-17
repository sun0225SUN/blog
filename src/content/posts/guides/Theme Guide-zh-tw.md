---
title: 主題上手指南
published: 2025-01-26
updated: 2025-04-13
tags:
  - 部落格主題
  - 指南
pin: 99
lang: zh-tw
abbrlink: theme-guide
---

Retypeset 是一款基於 [Astro](https://astro.build/) 框架的靜態部落格主題，中文名為重新編排。本文為 Retypeset 主題上手指南，主要介紹如何修改主題配置與創建新文章，來幫助你快速搭建個人部落格。

## 主題配置

通過修改配置文件 [src/config.ts](https://github.com/radishzzz/astro-theme-retypeset/blob/master/src/config.ts) 來自定義你的部落格。

### 站點信息

```ts
site: {
  // 站點標題
  title: 'Retypeset'
  // 站點副標題
  subtitle: 'Revive the beauty of typography'
  // 站點描述
  description: 'Retypeset is a static blog theme...'
  // 使用 src/i18n/ui.ts 中的多語言標題/副標題/站點描述，代替上方靜態配置
  i18nTitle: true // true, false
  // 作者名稱
  author: 'radishzz'
  // 站點地址
  url: 'https://retypeset.radishzz.cc'
  // 站點圖標
  // 推薦格式：svg, png, ico
  favicon: '/icons/favicon.svg' // 或 https://example.com/favicon.svg
}
```

### 主題配色

```ts
color: {
  // 默認主題
  mode: 'light' // light, dark, auto
  // 亮色模式
  light: {
    // 主要顏色
    // 用於站點標題、滑鼠懸停效果等
    primary: 'oklch(25% 0.005 298)'
    // 次要顏色
    // 用於普通文本
    secondary: 'oklch(40% 0.005 298)'
    // 背景色
    background: 'oklch(96% 0.005 298)'
    // 高亮顏色
    // 用於導航欄、選中文本等
    highlight: 'oklch(0.93 0.195089 103.2532 / 0.5)'
  }
  // 暗色模式
  dark: {
    // 主要顏色
    primary: 'oklch(92% 0.005 298)'
    // 次要顏色
    secondary: 'oklch(77% 0.005 298)'
    // 背景色
    background: 'oklch(22% 0.005 298)'
    // 高亮顏色
    highlight: 'oklch(0.93 0.195089 103.2532 / 0.2)'
  }
}
```

### 全局設置

```ts
global: {
  // 默認語言
  // 站點根路徑 '/' 的語言
  locale: 'zh' // de, en, es, fr, ja, ko, pl, pt, ru, zh, zh-tw
  // 更多語言
  // 生成 '/en/' '/es/' 等多語言路徑
  // 不要重複填寫默認語言，可以為空 []
  moreLocales: ['en', 'es', 'ja', 'ru', 'zh-tw'] // ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pl', 'pt', 'ru', 'zh', 'zh-tw']
  // 字體樣式
  fontStyle: 'sans' // sans, serif
  // 文章日期格式
  // YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
  // 2025-04-13, 04-13-2025, 13-04-2025, Apr 13 2025，13 Apr 2025
  dateFormat: 'YYYY-MM-DD'
  // 文章目錄
  toc: true // true, false
  // KaTeX 數學渲染
  katex: true // true, false
  // 減少動畫效果
  reduceMotion: false // true, false
}
```

### 評論系統

```ts
comment: {
  // 開啟評論系統
  enabled: true // true, false
  // giscus 評論系統
  giscus: {
    repo: ''
    repoId: ''
    category: ''
    categoryId: ''
    mapping: 'pathname'
    strict: '0'
    reactionsEnabled: '1'
    emitMetadata: '0'
    inputPosition: 'bottom'
  }
  // twikoo 評論系統
  twikoo: {
    envId: ''
    // version: 前端版本可在 package.json 中修改
  }
  // waline 評論系統
  waline: {
    // 服務器地址
    serverURL: 'https://retypeset-comment.radishzz.cc'
    // emoji 表情地址
    emoji: [
      'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji'
      // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji'
      // 更多表情：https://waline.js.org/en/guide/features/emoji.html
    ]
    // gif 搜索
    search: false // true, false
    // 圖片上傳
    imageUploader: false // true, false
  }
}
```

### 搜索引擎優化

```ts
seo: {
  // @twitter ID
  twitterID: '@radishzz_'
  // 站點驗證
  verification: {
    // google 搜索控制台
    google: 'AUCrz5F1e5qbnmKKDXl2Sf8u6y0kOpEO1wLs6HMMmlM'
    // bing 網站管理員工具
    bing: '64708CD514011A7965C84DDE1D169F87'
    // yandex 網站管理員
    yandex: ''
    // baidu 站長工具
    baidu: ''
  }
  // google 網站分析
  googleAnalyticsID: ''
  // umami 網站分析
  umamiAnalyticsID: '520af332-bfb7-4e7c-9386-5f273ee3d697'
  // follow 驗證
  follow: {
    // 訂閱 ID
    feedID: ''
    // 用戶 ID
    userID: ''
  }
  // apiflash access key 訪問密鑰
  // 自動生成網站截圖用於 open graph
  // 獲取訪問密鑰：https://apiflash.com/
  apiflashKey: ''
}
```

### 自定義頁腳

```ts
footer: {
  // 社交鏈接
  links: [
    {
      name: 'RSS',
      url: '/atom.xml', // 或 /rss.xml
    },
    {
      name: 'GitHub',
      url: 'https://github.com/radishzzz/astro-theme-retypeset',
    },
    {
      name: 'Email',
      url: 'email@radishzz.cc',
    }
    // {
    //   name: 'X',
    //   url: 'https://x.com/radishzz_',
    // },
  ]
  // 建站年份
  startYear: 2025
}
```

### 資源預加載

```ts
preload: {
  // 圖床地址
  // 優化 Markdown 文件中的遠程圖片以避免佈局抖動
  imageHostURL: 'image.radishzz.cc'
  // 定制 google analytics js
  // 適用於路由 google analytics js 到自定義域名的用戶
  customGoogleAnalyticsJS: ''
  // 定制 umami analytics js
  // 適用於自部署 umami，或路由 umami analytics js 到自定義域名的用戶
  customUmamiAnalyticsJS: 'https://js.radishzz.cc/jquery.min.js'
}
```

## 更多配置

除了配置文件 `src/config.ts` 外，還有部分配置項位於其它文件中。

### 語法高亮

代碼塊的語法高亮主題。

```ts
// astro.config.ts

shikiConfig: {
  // 可選主題：https://shiki.style/themes
  // 背景色默認跟隨部落格主題，而非語法高亮主題
  themes: {
    light: 'github-light' // 亮色主題
    dark: 'github-dark' // 暗色主題
  }
}
```

### 文章摘要

文章自動摘要的字元數量。

```ts
// src/utils/description.ts

const excerptLengths: Record<ExcerptScene, {
  cjk: number // 中文、日文、韓文
  other: number // 其他語言
}> = {
  list: { // 首頁文章列表
    cjk: 120, // 自動摘要前 120 字
    other: 240, // 自動摘要前 240 字
  },
}
```

### Open Graph

[Open Graph 社交卡片](https://orcascan.com/tools/open-graph-validator?url=https%3A%2F%2Fretypeset.radishzz.cc%2Fzh-tw%2Fposts%2Ftheme-guide%2F) 樣式。

```ts
// src/pages/og/[...image].ts

getImageOptions: (_path, page) => ({
  logo: {
    path: './public/icons/og-logo.png', // 本地路徑的 PNG 圖片
    size: [250], // logo 寬度
  },
  font: {
    title: { // 標題
      families: ['Noto Sans SC'], // 字體
      weight: 'Bold', // 字重
      color: [34, 33, 36], // 顏色
      lineHeight: 1.5, // 行高
    },
  },
  fonts: [ // 字體路徑（本地或遠程）
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Bold.otf',
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Regular.otf',
  ],
  bgGradient: [[242, 241, 245]], // 背景色
  // 更多配置：https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
})
```

### RSS 訂閱

[RSS 訂閱頁](https://retypeset.radishzz.cc/zh-tw/atom.xml) 配色。

```html
<!-- public/feeds/xxx-style.xsl -->

<style type="text/css">
body{color:oklch(25% 0.005 298)} /* 字體顏色 */
.bg-white{background-color:oklch(0.96 0.005 298)!important} /* 背景顏色 */
.text-gray{color:oklch(0.25 0.005 298 / 75%)!important} /* 次要字體顏色 */
</style>
```

## 創建新文章

執行 `pnpm new-post <filename>` 創建新文章，可在 `src/content/posts/` 目錄中編輯。

```bash
pnpm new-post                      ->  src/content/posts/new-post.md
pnpm new-post first-post           ->  src/content/posts/first-post.md
pnpm new-post 2025/03/first-post   ->  src/content/posts/2025/03/first-post.md
pnpm new-post first-post.mdx       ->  src/content/posts/first-post.mdx
```

### Front Matter

`title` 和 `published` 為必填項，其餘配置均可刪除。

```md
---
# 必填
title: 主題上手指南
published: 2025-01-26

# 可選
description: 自動選取文章前 120 字作為摘要。
updated: 2025-03-26
tags:
  - 部落格主題
  - 指南

# 進階，可選
draft: true/false
pin: 0-99
toc: true/false
lang: de/en/es/fr/ja/ko/pl/pt/ru/zh/zh-tw
abbrlink: theme-guide
---
```

### 進階配置

#### draft

是否標記文章為草稿。設為 true 時無法發佈文章，僅供本地開發預覽。預設為 false。

#### pin

是否置頂文章。數字越大，文章的置頂優先級越高。預設為 0，即不置頂。

#### toc

是否生成目錄。顯示 h2 至 h4 標題。預設由全域配置項 `global.toc` 決定，可在文章中單獨設定以覆蓋全域配置。

#### lang

指定文章語言。只能指定一種語言，不指定則預設顯示在所有語言路徑下。

```md
# src/config.ts
# locale: 'en'
# moreLocales: ['es', 'ru']

# lang: ''
src/content/posts/apple.md   ->  example.com/posts/apple/
                             ->  example.com/es/posts/apple/
                             ->  example.com/ru/posts/apple/
# lang: en
src/content/posts/apple.md   ->  example.com/posts/apple/
# lang: es
src/content/posts/apple.md   ->  example.com/es/posts/apple/
# lang: ru
src/content/posts/apple.md   ->  example.com/ru/posts/apple/
```

#### abbrlink

自定義文章 URL。只能包含小寫字母、數字和連字符 `-`。

```md
# src/config.ts
# locale: 'en'
# moreLocales: ['es', 'ru']
# lang: 'es'

# abbrlink: ''
src/content/posts/apple.md           ->  example.com/es/posts/apple/
src/content/posts/guide/apple.md     ->  example.com/es/posts/guide/apple/
src/content/posts/2025/03/apple.md   ->  example.com/es/posts/2025/03/apple/

# abbrlink: 'banana'
src/content/posts/apple.md           ->  example.com/es/posts/banana/
src/content/posts/guide/apple.md     ->  example.com/es/posts/banana/
src/content/posts/2025/03/apple.md   ->  example.com/es/posts/banana/
```

### 混排優化

執行 `pnpm format-posts`，可優化 `src/content/` 目錄中 Markdown 文件的排版格式。在 CJK（中文、日文、韓文）與英文混寫的場景下，補充正確的空格，糾正標點符號等。

```bash
pnpm format-posts
🔍 Scanning Markdown files...
📦 Found 56 Markdown files
✅ src/content/posts/guides/Theme Guide-ja.md
✅ src/content/posts/guides/Theme Guide-zh-tw.md
✅ src/content/posts/guides/Theme Guide-zh.md
✨ Formatted 3 files successfully
```
