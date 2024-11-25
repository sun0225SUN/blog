import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import sanitizeHtml from "sanitize-html"
import { site } from "~/config"

interface PostProps {
  slug: string
  data: {
    title: string
    pubDate: Date
    description?: string
  }
  body: string
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
    items: posts.map((post: PostProps) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.slug}/`,
      content: sanitizeHtml(post.body),
    })),
    customData:
      "<follow_challenge><feedId>41477724771147784</feedId><userId>54887272939958272</userId></follow_challenge>",
  })
}
