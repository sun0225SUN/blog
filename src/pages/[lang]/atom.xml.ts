import type { APIContext } from 'astro'
import { moreLocales } from '@/config'
import { generateAtom } from '@/utils/feed'

export function getStaticPaths() {
  return moreLocales.map(lang => ({
    params: { lang },
  }))
}

export async function GET(context: APIContext) {
  return generateAtom(context)
}
