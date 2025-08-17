import type { CollectionEntry } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'
import { getCollection } from 'astro:content'
import { getPostDescription } from '@/utils/description'

// eslint-disable-next-line antfu/no-top-level-await
const posts = await getCollection('posts')

// Create slug-to-metadata lookup object for blog posts
const pages = Object.fromEntries(
  posts.map((post: CollectionEntry<'posts'>) => [
    post.id,
    {
      title: post.data.title,
      description: getPostDescription(post, 'og'),
    },
  ]),
)

// Configure Open Graph image generation route
export const { getStaticPaths, GET } = OGImageRoute({
  param: 'image',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: './public/icons/og-logo.png', // Required local path and PNG format
      size: [250],
    },
    border: {
      color: [242, 241, 245],
      width: 20,
    },
    font: {
      title: {
        families: ['Noto Sans SC'], // or Noto Serif SC
        weight: 'Bold',
        color: [34, 33, 36],
        lineHeight: 1.5,
      },
      description: {
        families: ['Noto Sans SC'], // or Noto Serif SC
        color: [72, 71, 74],
        lineHeight: 1.5,
      },
    },
    fonts: [
      'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Bold.otf',
      'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Sans/SubsetOTF/SC/NotoSansSC-Regular.otf',
      // 'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Serif/SubsetOTF/SC/NotoSerifSC-Bold.otf',
      // 'https://cdn.jsdelivr.net/gh/notofonts/noto-cjk@main/Serif/SubsetOTF/SC/NotoSerifSC-Regular.otf',
    ],
    bgGradient: [[242, 241, 245]],
  }),
})
