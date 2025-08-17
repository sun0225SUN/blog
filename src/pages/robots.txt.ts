import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site)

  const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /_astro/',
    'Disallow: /feeds/',
    'Disallow: /giscus/',
    'Disallow: /og/',
    'Disallow: /~partytown/',
    '',
    `Sitemap: ${sitemapURL.href}`,
  ].join('\n')

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
