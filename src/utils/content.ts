import type { CollectionEntry } from 'astro:content'
import { getCollection, render } from 'astro:content'
import { defaultLocale } from '@/config'
import { memoize } from '@/utils/cache'

export type Post = CollectionEntry<'posts'> & {
  remarkPluginFrontmatter: {
    minutes: number
  }
}

const metaCache = new Map<string, { minutes: number }>()

/**
 * Add metadata including reading time to a post
 *
 * @param post The post to enhance with metadata
 * @returns Enhanced post with reading time information
 */
async function addMetaToPost(post: CollectionEntry<'posts'>): Promise<Post> {
  const cacheKey = `${post.id}-${post.data.lang || 'universal'}`

  if (metaCache.has(cacheKey)) {
    return {
      ...post,
      remarkPluginFrontmatter: metaCache.get(cacheKey)!,
    }
  }

  const { remarkPluginFrontmatter } = await render(post)
  metaCache.set(cacheKey, remarkPluginFrontmatter as { minutes: number })

  return {
    ...post,
    remarkPluginFrontmatter: metaCache.get(cacheKey)!,
  }
}

/**
 * Find duplicate post slugs within the same language
 *
 * @param posts Array of blog posts to check
 * @returns Array of descriptive error messages for duplicate slugs
 */
async function _checkPostSlugDuplication(posts: CollectionEntry<'posts'>[]): Promise<string[]> {
  const slugMap = new Map<string, Set<string>>()
  const duplicates: string[] = []

  posts.forEach((post) => {
    const lang = post.data.lang
    const slug = post.data.abbrlink || post.id

    if (!slugMap.has(lang)) {
      slugMap.set(lang, new Set())
    }

    const slugSet = slugMap.get(lang)!
    if (!slugSet.has(slug)) {
      slugSet.add(slug)
      return
    }

    if (!lang) {
      duplicates.push(`Duplicate slug "${slug}" found in universal post (applies to all languages)`)
    }
    else {
      duplicates.push(`Duplicate slug "${slug}" found in "${lang}" language post`)
    }
  })

  return duplicates
}

export const checkPostSlugDuplication = memoize(_checkPostSlugDuplication)

/**
 * Get all posts (including pinned ones, excluding drafts in production)
 *
 * @param lang The language code to filter by, defaults to site's default language
 * @returns Posts filtered by language, enhanced with metadata, sorted by date
 */
async function _getPosts(lang?: string) {
  const currentLang = lang || defaultLocale

  const filteredPosts = await getCollection(
    'posts',
    ({ data }: CollectionEntry<'posts'>) => {
      // Show drafts in dev mode only
      const shouldInclude = import.meta.env.DEV || !data.draft
      return shouldInclude && (data.lang === currentLang || data.lang === '')
    },
  )

  const enhancedPosts = await Promise.all(filteredPosts.map(addMetaToPost))

  return enhancedPosts.sort((a: Post, b: Post) =>
    b.data.published.valueOf() - a.data.published.valueOf(),
  )
}

export const getPosts = memoize(_getPosts)

/**
 * Get all non-pinned posts
 *
 * @param lang The language code to filter by, defaults to site's default language
 * @returns Regular posts (non-pinned), filtered by language
 */
async function _getRegularPosts(lang?: string) {
  const posts = await getPosts(lang)
  return posts.filter(post => !post.data.pin)
}

export const getRegularPosts = memoize(_getRegularPosts)

/**
 * Get pinned posts sorted by pin priority
 *
 * @param lang The language code to filter by, defaults to site's default language
 * @returns Pinned posts sorted by pin value in descending order
 */
async function _getPinnedPosts(lang?: string) {
  const posts = await getPosts(lang)
  return posts
    .filter(post => post.data.pin && post.data.pin > 0)
    .sort((a, b) => (b.data.pin ?? 0) - (a.data.pin ?? 0))
}

export const getPinnedPosts = memoize(_getPinnedPosts)

/**
 * Group posts by year and sort within each year
 *
 * @param lang The language code to filter by, defaults to site's default language
 * @returns Map of posts grouped by year (descending), sorted by date within each year
 */
async function _getPostsByYear(lang?: string): Promise<Map<number, Post[]>> {
  const posts = await getRegularPosts(lang)
  const yearMap = new Map<number, Post[]>()

  posts.forEach((post: Post) => {
    const year = post.data.published.getFullYear()
    if (!yearMap.has(year)) {
      yearMap.set(year, [])
    }
    yearMap.get(year)!.push(post)
  })

  // Sort posts within each year by date
  yearMap.forEach((yearPosts) => {
    yearPosts.sort((a, b) => {
      const aDate = a.data.published
      const bDate = b.data.published
      return bDate.getMonth() - aDate.getMonth() || bDate.getDate() - aDate.getDate()
    })
  })

  return new Map([...yearMap.entries()].sort((a, b) => b[0] - a[0]))
}

export const getPostsByYear = memoize(_getPostsByYear)

/**
 * Group posts by their tags
 *
 * @param lang The language code to filter by, defaults to site's default language
 * @returns Map where keys are tag names and values are arrays of posts with that tag
 */
async function _getPostsGroupByTags(lang?: string) {
  const posts = await getPosts(lang)
  const tagMap = new Map<string, Post[]>()

  posts.forEach((post: Post) => {
    post.data.tags?.forEach((tag: string) => {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, [])
      }
      tagMap.get(tag)!.push(post)
    })
  })

  return tagMap
}

export const getPostsGroupByTags = memoize(_getPostsGroupByTags)

/**
 * Get all tags sorted by post count
 *
 * @param lang The language code to filter by, defaults to site's default language
 * @returns Array of tags sorted by popularity (most posts first)
 */
async function _getAllTags(lang?: string) {
  const tagMap = await getPostsGroupByTags(lang)
  const tagsWithCount = Array.from(tagMap.entries())

  tagsWithCount.sort((a, b) => b[1].length - a[1].length)
  return tagsWithCount.map(([tag]) => tag)
}

export const getAllTags = memoize(_getAllTags)

/**
 * Get all posts that contain a specific tag
 *
 * @param tag The tag name to filter posts by
 * @param lang The language code to filter by, defaults to site's default language
 * @returns Array of posts that contain the specified tag
 */
async function _getPostsByTag(tag: string, lang?: string) {
  const tagMap = await getPostsGroupByTags(lang)
  return tagMap.get(tag) ?? []
}

export const getPostsByTag = memoize(_getPostsByTag)

/**
 * Check which languages support a specific tag
 *
 * @param tag The tag name to check language support for
 * @returns Array of language codes that support the specified tag
 */
async function _getTagSupportedLangs(tag: string) {
  const posts = await getCollection(
    'posts',
    ({ data }) => !data.draft,
  )
  const { allLocales } = await import('@/config')

  return allLocales.filter(locale =>
    posts.some(post =>
      post.data.tags?.includes(tag)
      && (post.data.lang === locale || post.data.lang === ''),
    ),
  )
}

export const getTagSupportedLangs = memoize(_getTagSupportedLangs)
