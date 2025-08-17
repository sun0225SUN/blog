import { defaultLocale, moreLocales } from '@/config'
import { getLangFromPath, getNextGlobalLang } from '@/i18n/lang'

/**
 * Get path to tag page with language support
 *
 * @param tagName Tag name
 * @param lang Current language code
 * @returns Path to tag page
 */
export function getTagPath(tagName: string, lang: string): string {
  return lang === defaultLocale
    ? `/tags/${tagName}/`
    : `/${lang}/tags/${tagName}/`
}

/**
 * Get next language path for [...tags_tag] page
 *
 * @param currentPath Current page path
 * @returns Path to tags list page in next language
 */
export function getTagsListLangPath(currentPath: string): string {
  const currentLang = getLangFromPath(currentPath)
  const nextLang = getNextGlobalLang(currentLang)

  // Build path to tags list page
  if (nextLang === defaultLocale) {
    return '/tags/'
  }

  return `/${nextLang}/tags/`
}

/**
 * Generate localized path based on current language
 *
 * @param path Path to localize
 * @param currentLang Current language code
 * @returns Localized path with language prefix
 */
export function getLocalizedPath(path: string, currentLang?: string) {
  const normalizedPath = path.replace(/^\/|\/$/g, '')
  const lang = currentLang ?? getLangFromPath(path)

  if (normalizedPath === '') {
    return lang === defaultLocale ? '/' : `/${lang}/`
  }

  return lang === defaultLocale ? `/${normalizedPath}/` : `/${lang}/${normalizedPath}/`
}

/**
 * Build path for next language
 *
 * @param currentPath Current page path
 * @param currentLang Current language code
 * @param nextLang Next language code to switch to
 * @returns Path for next language
 */
export function getNextLangPath(currentPath: string, currentLang: string, nextLang: string): string {
  if (currentPath === '/') {
    return nextLang === defaultLocale ? '/' : `/${nextLang}/`
  }

  let nextPath: string

  if (nextLang === defaultLocale) {
    nextPath = currentPath.replace(`/${currentLang}`, '') || '/'
  }
  else if (currentLang === defaultLocale) {
    nextPath = `/${nextLang}${currentPath}`
  }
  else {
    nextPath = currentPath.replace(`/${currentLang}`, `/${nextLang}`)
  }

  return nextPath.endsWith('/') ? nextPath : `${nextPath}/`
}

/**
 * Get next language path from global language list
 *
 * @param currentPath Current page path
 * @returns Path for next supported language
 */
export function getNextGlobalLangPath(currentPath: string): string {
  const currentLang = getLangFromPath(currentPath)
  const nextLang = getNextGlobalLang(currentLang)
  return getNextLangPath(currentPath, currentLang, nextLang)
}

/**
 * Get next language path from supported language list
 *
 * @param currentPath Current page path
 * @param supportedLangs List of supported language codes
 * @returns Path for next supported language
 */
export function getNextSupportedLangPath(currentPath: string, supportedLangs: string[]): string {
  if (supportedLangs.length === 0) {
    return getNextGlobalLangPath(currentPath)
  }

  // Sort supported languages by global priority
  const langPriority = new Map(
    [defaultLocale, ...moreLocales].map((lang, index) => [lang, index]),
  )
  const sortedLangs = [...supportedLangs].sort(
    (a, b) => (langPriority.get(a) ?? 0) - (langPriority.get(b) ?? 0),
  )

  // Get current language and next in cycle
  const currentLang = getLangFromPath(currentPath)
  const currentIndex = sortedLangs.indexOf(currentLang)
  const nextLang = sortedLangs[(currentIndex + 1) % sortedLangs.length]

  return getNextLangPath(currentPath, currentLang, nextLang)
}
