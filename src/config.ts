export const config = {
  defaultLocale: 'zh',
  locales: ['en', 'zh', 'zh-tw', 'ja', 'ko'],
  title: 'Guoqi Sun',
  description: {
    default:
      "Guoqi Sun's blog. Year notes, travel, work, and the tinkering along the way.",
    zh: 'Guoqi Sun 的个人博客。年记、旅行、工作，以及一路上的折腾。',
    'zh-tw': 'Guoqi Sun 的個人部落格。年記、旅行、工作，以及一路上的折騰。',
    ja: 'Guoqi Sun のブログ。一年の記録、旅、仕事、そしてそのあいだの試行錯誤。',
    ko: 'Guoqi Sun의 블로그. 한 해의 기록, 여행, 일, 그리고 그 사이의 시행착오.',
  },
  favicon: [
    { href: '/favicon.svg', type: 'image/svg+xml' },
    { href: '/favicon.ico' },
  ],

  url: 'https://blog.guoqi.dev',
  author: 'Guoqi Sun',
  blog: {
    // A positive integer, or 'all' to show every post.
    perPage: 'all',
  } satisfies { perPage: number | 'all' },
  // Excalifont for Latin. Xiaolai, slightly larger, for other scripts.
  handwriting: true,
  nav: [
    'home',
    'archive',
    'tags',
    {
      link: 'https://camlife.app',
      label: {
        default: 'Camlife',
        zh: '影集',
        'zh-tw': '影集',
        ja: 'アルバム',
        ko: '앨범',
      },
    },
    {
      link: 'https://cyc.earth',
      label: {
        default: 'Cycling',
        zh: '骑行',
        'zh-tw': '騎行',
        ja: 'サイクリング',
        ko: '라이딩',
      },
    },
    'about',
  ],
}
