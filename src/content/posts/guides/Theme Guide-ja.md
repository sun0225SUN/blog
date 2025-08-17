---
title: テーマ使用ガイド
published: 2025-01-26
updated: 2025-04-13
tags:
  - ブログテーマ
  - ガイド
pin: 99
lang: ja
abbrlink: theme-guide
---

Retypeset は、日本語では「再組版」と呼ばれる、[Astro](https://astro.build/) フレームワークをベースにした静的ブログテーマです。本ガイドではテーマの設定変更方法と新しい記事の作成方法を紹介し、個人ブログを素早く構築できるよう支援します。

## テーマ設定

設定ファイル [src/config.ts](https://github.com/radishzzz/astro-theme-retypeset/blob/master/src/config.ts) を変更してあなたのブログをカスタマイズできます。

### サイト情報

```ts
site: {
  // サイトタイトル
  title: 'Retypeset'
  // サイトサブタイトル
  subtitle: 'Revive the beauty of typography'
  // サイト説明
  description: 'Retypeset is a static blog theme...'
  // 上記の静的設定の代わりに src/i18n/ui.ts の多言語タイトル/サブタイトル/説明を使用
  i18nTitle: true // true, false
  // 著者名
  author: 'radishzz'
  // サイト URL
  url: 'https://retypeset.radishzz.cc'
  // ファビコン URL
  // 推奨フォーマット：svg, png, ico
  favicon: '/icons/favicon.svg' // または https://example.com/favicon.svg
}
```

### テーマカラー

```ts
color: {
  // デフォルトテーマモード
  mode: 'light' // light, dark, auto
  // ライトモード
  light: {
    // プライマリカラー
    // サイトタイトル、ホバー効果などに使用
    primary: 'oklch(25% 0.005 298)'
    // セカンダリカラー
    // 通常テキストに使用
    secondary: 'oklch(40% 0.005 298)'
    // 背景色
    background: 'oklch(96% 0.005 298)'
    // ハイライトカラー
    // ナビゲーションバー、選択されたテキストなどに使用
    highlight: 'oklch(0.93 0.195089 103.2532 / 0.5)'
  }
  // ダークモード
  dark: {
    // プライマリカラー
    primary: 'oklch(92% 0.005 298)'
    // セカンダリカラー
    secondary: 'oklch(77% 0.005 298)'
    // 背景色
    background: 'oklch(22% 0.005 298)'
    // ハイライトカラー
    highlight: 'oklch(0.93 0.195089 103.2532 / 0.2)'
  }
}
```

### グローバル設定

```ts
global: {
  // デフォルト言語
  // サイトのルートパス '/' の言語
  locale: 'zh' // de, en, es, fr, ja, ko, pl, pt, ru, zh, zh-tw
  // その他の言語
  // '/en/' '/es/' などの多言語パスを生成
  // デフォルト言語を重複して入力しないでください、空の配列 [] も可能です
  moreLocales: ['en', 'es', 'ja', 'ru', 'zh-tw'] // ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pl', 'pt', 'ru', 'zh', 'zh-tw']
  // フォントスタイル
  fontStyle: 'sans' // sans, serif
  // 記事の日付フォーマット
  // YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
  // 2025-04-13, 04-13-2025, 13-04-2025, Apr 13 2025，13 Apr 2025
  dateFormat: 'YYYY-MM-DD'
  // 記事の目次
  toc: true // true, false
  // KaTeX 数式レンダリング
  katex: true // true, false
  // アニメーション効果を減らす
  reduceMotion: false // true, false
}
```

### コメントシステム

```ts
comment: {
  // コメントシステムを有効にする
  enabled: true // true, false
  // giscus コメントシステム
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
  // twikoo コメントシステム
  twikoo: {
    envId: ''
    // version: フロントエンドのバージョンは package.json で変更できます
  }
  // waline コメントシステム
  waline: {
    // サーバー URL
    serverURL: 'https://retypeset-comment.radishzz.cc'
    // 絵文字 URL
    emoji: [
      'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji'
      // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji'
      // その他の絵文字：https://waline.js.org/en/guide/features/emoji.html
    ]
    // gif 検索
    search: false // true, false
    // 画像アップローダー
    imageUploader: false // true, false
  }
}
```

### 検索エンジン最適化

```ts
seo: {
  // @twitter ID
  twitterID: '@radishzz_'
  // サイト認証
  verification: {
    // Google Search Console
    google: 'AUCrz5F1e5qbnmKKDXl2Sf8u6y0kOpEO1wLs6HMMmlM'
    // Bing ウェブマスターツール
    bing: '64708CD514011A7965C84DDE1D169F87'
    // Yandex ウェブマスター
    yandex: ''
    // Baidu 検索
    baidu: ''
  }
  // Google Analytics
  googleAnalyticsID: ''
  // Umami Analytics
  umamiAnalyticsID: '520af332-bfb7-4e7c-9386-5f273ee3d697'
  // フォロー認証
  follow: {
    // フィード ID
    feedID: ''
    // ユーザーID
    userID: ''
  }
  // APIFlash アクセスキー
  // OpenGraph 用のウェブサイトスクリーンショットを自動生成
  // アクセスキーの取得：https://apiflash.com/
  apiflashKey: ''
}
```

### フッター設定

```ts
footer: {
  // ソーシャルリンク
  links: [
    {
      name: 'RSS',
      url: '/atom.xml', // または /rss.xml
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
  // サイト開始年
  startYear: 2025
}
```

### リソースプリロード

```ts
preload: {
  // 画像ホスティング URL
  // Markdown ファイル内のリモート画像を最適化してレイアウトシフトを防止
  imageHostURL: 'image.radishzz.cc'
  // カスタム Google Analytics JS
  // アナリティクス JavaScript をカスタムドメインにルーティングするユーザー向け
  customGoogleAnalyticsJS: ''
  // カスタム Umami Analytics JS
  // Umami を自己デプロイしたり、アナリティクス JavaScript をカスタムドメインにルーティングするユーザー向け
  customUmamiAnalyticsJS: 'https://js.radishzz.cc/jquery.min.js'
}
```

## その他の設定

設定ファイル `src/config.ts` 以外にも、一部の設定は他のファイルにあります。

### シンタックスハイライト

コードブロックのシンタックスハイライトテーマ。

```ts
// astro.config.ts

shikiConfig: {
  // 利用可能なテーマ：https://shiki.style/themes
  // 背景色はデフォルトでシンタックスハイライトテーマではなく、ブログテーマに従います
  themes: {
    light: 'github-light' // ライトテーマ
    dark: 'github-dark' // ダークテーマ
  }
}
```

### 記事の抜粋

記事の自動抜粋の文字数。

```ts
// src/utils/description.ts

const excerptLengths: Record<ExcerptScene, {
  cjk: number // 中国語、日本語、韓国語
  other: number // その他の言語
}> = {
  list: { // ホームページ記事リスト
    cjk: 120, // 先頭から 120 文字を自動抜粋
    other: 240, // 先頭から 240 文字を自動抜粋
  },
}
```

### Open Graph

[Open Graph ソーシャルカード](https://orcascan.com/tools/open-graph-validator?url=https%3A%2F%2Fretypeset.radishzz.cc%2Fja%2Fposts%2Ftheme-guide%2F) スタイル。

```ts
// src/pages/og/[...image].ts

getImageOptions: (_path, page) => ({
  logo: {
    path: './public/icons/og-logo.png', // ローカルパスの PNG 形式が必要
    size: [250], // ロゴの幅
  },
  font: {
    title: { // タイトル
      families: ['Noto Sans SC'], // フォント
      weight: 'Bold', // 太さ
      color: [34, 33, 36], // 色
      lineHeight: 1.5, // 行の高さ
    },
  },
  fonts: [ // フォントパス（ローカルまたはリモート）
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Bold.otf',
    'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Regular.otf',
  ],
  bgGradient: [[242, 241, 245]], // 背景色
  // その他の設定：https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
})
```

### RSS フィード

[RSS フィードページ](https://retypeset.radishzz.cc/ja/atom.xml) スタイル。

```html
<!-- public/feeds/xxx-style.xsl -->

<style type="text/css">
body{color:oklch(25% 0.005 298)} /* フォントカラー */
.bg-white{background-color:oklch(0.96 0.005 298)!important} /* 背景色 */
.text-gray{color:oklch(0.25 0.005 298 / 75%)!important} /* セカンダリフォントカラー */
</style>
```

## 新しい記事の作成

`pnpm new-post <filename>` を実行して新しい記事を作成し、`src/content/posts/` ディレクトリで編集できます。

```bash
pnpm new-post                      ->  src/content/posts/new-post.md
pnpm new-post first-post           ->  src/content/posts/first-post.md
pnpm new-post 2025/03/first-post   ->  src/content/posts/2025/03/first-post.md
pnpm new-post first-post.mdx       ->  src/content/posts/first-post.mdx
```

### Front Matter

`title` と `published` のみが必須フィールドで、他のすべての設定は省略できます。

```markdown
---
# 必須
title: テーマ使用ガイド
published: 2025-01-26

# 任意
description: 記事の最初の 120 文字が自動的に要約として選択されます。
updated: 2025-03-26
tags:
  - ブログテーマ
  - ガイド

# 高度な設定（任意）
draft: true/false
pin: 0-99
toc: true/false
lang: de/en/es/fr/ja/ko/pl/pt/ru/zh/zh-tw
abbrlink: theme-guide
---
```

### 高度な設定

#### draft

記事を下書きとしてマークします。true に設定すると、記事は公開されず、ローカル開発プレビューでのみ利用可能です。デフォルトは false です。

#### pin

記事をトップに固定します。数字が大きいほど、固定された記事の優先度が高くなります。デフォルトは 0 で、固定されていないことを意味します。

#### toc

目次を生成するかどうか。h2 から h4 までの見出しを表示します。デフォルトではグローバル設定項目 `global.toc` によって決定されますが、記事ごとに個別に設定して上書きすることもできます。

#### lang

記事の言語を指定します。一つの言語のみ指定できます。指定しない場合、記事はデフォルトですべての言語パスに表示されます。

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

記事の URL をカスタマイズします。小文字、数字、ハイフン `-` のみ使用できます。

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

### 混植の最適化

`pnpm format-posts` コマンドを実行すると、`src/content/` ディレクトリ内の Markdown ファイルの書式を最適化できます。特に CJK（日本語や中国語、韓国語）と英字が混在する場合に、適切なスペースを追加し、句読点を修正するなどの処理を行います。

```bash
pnpm format-posts
🔍 Scanning Markdown files...
📦 Found 56 Markdown files
✅ src/content/posts/guides/Theme Guide-ja.md
✅ src/content/posts/guides/Theme Guide-zh-tw.md
✅ src/content/posts/guides/Theme Guide-zh.md
✨ Formatted 3 files successfully
```
