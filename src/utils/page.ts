import { base, moreLocales } from '@/config'
import { getLangFromPath } from '@/i18n/lang'
import { getLocalizedPath } from '@/i18n/path'

// Checks if normalized path matches a specific page type
function isPageType(path: string, prefix: string = '') {
  const pathWithoutBase = base && path.startsWith(base)
    ? path.slice(base.length)
    : path

  // Removes leading and trailing slashes from the path
  const normalizedPath = pathWithoutBase.replace(/^\/|\/$/g, '')

  if (prefix === '') {
    return normalizedPath === '' || moreLocales.includes(normalizedPath)
  }

  return normalizedPath.startsWith(prefix)
    || moreLocales.some(lang => normalizedPath.startsWith(`${lang}/${prefix}`))
}

export function isHomePage(path: string) {
  return isPageType(path)
}

export function isPostPage(path: string) {
  return isPageType(path, 'posts')
}

export function isTagPage(path: string) {
  return isPageType(path, 'tags')
}

export function isAboutPage(path: string) {
  return isPageType(path, 'about')
}

export function isLinksPage(path: string) {
  return isPageType(path, 'links')
}

// Returns page context with language, page types and localization helper
export function getPageInfo(path: string) {
  const currentLang = getLangFromPath(path)
  const isHome = isHomePage(path)
  const isPost = isPostPage(path)
  const isTag = isTagPage(path)
  const isAbout = isAboutPage(path)
  const isLinks = isLinksPage(path)

  return {
    currentLang,
    isHome,
    isPost,
    isTag,
    isAbout,
    isLinks,
    getLocalizedPath: (targetPath: string) =>
      getLocalizedPath(targetPath, currentLang),
  }
}
