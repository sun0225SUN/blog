import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { site } from "~/config"

interface PostProps {
  slug: string
  data: {
    title: string
    pubDate: Date
  }
}

export async function GET() {
  const posts = await getCollection("posts")
  return rss({
    title: site.title,
    description: site.description,
    site:
      process.env.NODE_ENV === "development"
        ? "http://localhost:4321"
        : site.url,
    items: posts
      .sort((a, b) => {
        const aDate = a.data.pubDate ? new Date(a.data.pubDate) : new Date()
        const bDate = b.data.pubDate ? new Date(b.data.pubDate) : new Date()
        return bDate.getTime() - aDate.getTime()
      })
      .map((post: PostProps) => ({
        ...post.data,
        link: `/posts/${post.slug}/`,
      })),
    customData:
      "<follow_challenge><feedId>41477724771147784</feedId><userId>54887272939958272</userId></follow_challenge>",
  })
}
