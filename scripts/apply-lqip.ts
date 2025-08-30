/**
 * Generate and apply LQIP (Low-Quality Image Placeholders) to images
 * Usage: pnpm apply-lqip
 */

import type { HTMLElement } from 'node-html-parser'
import type { Buffer } from 'node:buffer'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
// @ts-expect-error - No type definitions available
import quantize from '@lokesh.dhakar/quantize'
import glob from 'fast-glob'
import { getPixels } from 'ndarray-pixels'
import { parse } from 'node-html-parser'
import sharp from 'sharp'

const distDir = 'dist'
const assetsDir = 'src/assets'
const lqipMapPath = 'src/assets/lqip-map.json'

interface LqipMap {
  [path: string]: number
}

interface ImageStats {
  total: number
  cached: number
  new: number
}

interface FileMapping {
  filePath: string
  webUrl: string
}

/**
 * Convert RGB color to OKLab color space
 * https://github.com/Kalabasa/leanrada.com/blob/7b6739c7c30c66c771fcbc9e1dc8942e628c5024/main/scripts/update/lib/color/convert.mjs
 */
function rgbToOkLab(rgb: { r: number, g: number, b: number }) {
  // Convert to linear RGB
  const toLinear = (c: number) => {
    const normalized = Math.max(0, Math.min(255, c)) / 255
    return normalized >= 0.04045
      ? ((normalized + 0.055) / 1.055) ** 2.4
      : normalized / 12.92
  }

  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(toLinear)

  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b)
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b)
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b)

  return {
    L: 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    a: 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    b: 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  }
}

/**
 * Extract dominant colors from images and validate options
 * https://github.com/Kalabasa/leanrada.com/blob/7b6739c7c30c66c771fcbc9e1dc8942e628c5024/main/scripts/update/lib/color/thief.mjs
 */
function validateOptions({ colorCount = 10, quality = 10 } = {}) {
  if (colorCount === 1) {
    throw new Error('colorCount should be between 2 and 20. Use getColor() for single color extraction')
  }

  return {
    colorCount: Math.max(2, Math.min(20, Number.isInteger(colorCount) ? colorCount : 10)),
    quality: Math.max(1, Number.isInteger(quality) && quality > 0 ? quality : 10),
  }
}

async function loadImg(img: Buffer | string) {
  try {
    const instance = sharp(img)
    const [buffer, { format }] = await Promise.all([
      instance.toBuffer(),
      instance.metadata(),
    ])

    if (!format) {
      throw new Error('Invalid image format')
    }
    return await getPixels(buffer, format)
  }
  catch (error) {
    throw new Error(`Image processing failed: ${error}`)
  }
}

function createPixelArray(pixels: Uint8Array | Uint8ClampedArray, pixelCount: number, quality: number): number[][] {
  const pixelArray: number[][] = []
  const maxOffset = pixels.length - 3

  for (let i = 0; i < pixelCount; i += quality) {
    const offset = i * 4
    if (offset > maxOffset) {
      break
    }

    pixelArray.push([
      pixels[offset], // r
      pixels[offset + 1], // g
      pixels[offset + 2], // b
    ])
  }

  return pixelArray
}

export async function getPalette(img: Buffer | string, colorCount = 10, quality = 10): Promise<number[][]> {
  try {
    const options = validateOptions({ colorCount, quality })
    const imgData = await loadImg(img)
    const pixelCount = imgData.shape[0] * imgData.shape[1]
    const pixelArray = createPixelArray(imgData.data, pixelCount, options.quality)

    return quantize(pixelArray, options.colorCount)?.palette() ?? []
  }
  catch (error) {
    if (error instanceof Error && error.message.includes('colorCount')) {
      throw error
    }
    return []
  }
}

/**
 * LQIP core algorithm
 * https://github.com/Kalabasa/leanrada.com/blob/7b6739c7c30c66c771fcbc9e1dc8942e628c5024/main/scripts/update/lqip.mjs
 */
const lqipBaseValue = -(2 ** 19)
const pixelMaxValue = 0b11
const lMaxValue = 0b11
const aMaxValue = 0b111
const bMaxValue = 0b111
const maxColorScale = 0b1000
const bitShifts = {
  pixelA: 18,
  pixelB: 16,
  pixelC: 14,
  pixelD: 12,
  pixelE: 10,
  pixelF: 8,
  l: 6,
  a: 3,
  b: 0,
} as const

function bitsToLab(ll: number, aaa: number, bbb: number) {
  const L = (ll / lMaxValue) * 0.6 + 0.2
  const a = (aaa / maxColorScale) * 0.7 - 0.35
  const b = ((bbb + 1) / maxColorScale) * 0.7 - 0.35
  return { L, a, b }
}

function findOklabBits(targetL: number, targetA: number, targetB: number) {
  const targetChroma = Math.hypot(targetA, targetB)
  const scaledTargetA = targetA / (1e-6 + targetChroma ** 0.5)
  const scaledTargetB = targetB / (1e-6 + targetChroma ** 0.5)

  let bestBits = [0, 0, 0]
  let bestDifference = Infinity

  for (let lli = 0; lli <= lMaxValue; lli++) {
    for (let aaai = 0; aaai <= aMaxValue; aaai++) {
      for (let bbbi = 0; bbbi <= bMaxValue; bbbi++) {
        const { L, a, b } = bitsToLab(lli, aaai, bbbi)
        const chroma = Math.hypot(a, b)
        const scaledA = a / (1e-6 + chroma ** 0.5)
        const scaledB = b / (1e-6 + chroma ** 0.5)

        const difference = Math.hypot(
          L - targetL,
          scaledA - scaledTargetA,
          scaledB - scaledTargetB,
        )

        if (difference < bestDifference) {
          bestDifference = difference
          bestBits = [lli, aaai, bbbi]
        }
      }
    }
  }

  return { ll: bestBits[0], aaa: bestBits[1], bbb: bestBits[2] }
}

async function generateLqipValue(imagePath: string): Promise<number | null> {
  try {
    const theSharp = sharp(imagePath)
    const [stats, previewBuffer, dominantColor] = await Promise.all([
      theSharp.stats(),
      theSharp
        .resize(3, 2, { fit: 'fill' })
        .sharpen({ sigma: 1 })
        .removeAlpha()
        .toFormat('raw', { bitdepth: 8 })
        .toBuffer(),
      getPalette(imagePath, 4, 10).then((palette) => {
        if (!palette?.length) {
          throw new Error('Failed to extract color palette')
        }
        return palette[0]
      }),
    ])

    if (!stats.isOpaque) {
      return null
    }

    const { L: rawBaseL, a: rawBaseA, b: rawBaseB } = rgbToOkLab({
      r: dominantColor[0],
      g: dominantColor[1],
      b: dominantColor[2],
    })

    const { ll, aaa, bbb } = findOklabBits(rawBaseL, rawBaseA, rawBaseB)
    const { L: baseL } = bitsToLab(ll, aaa, bbb)
    const pixelValues = Array.from({ length: 6 }, (_, i) => {
      const offset = i * 3
      const { L } = rgbToOkLab({
        r: previewBuffer[offset],
        g: previewBuffer[offset + 1],
        b: previewBuffer[offset + 2],
      })
      const clampedValue = Math.min(1, Math.max(0, 0.5 + L - baseL))
      return Math.round(clampedValue * pixelMaxValue)
    })

    const lqip = lqipBaseValue
      + ((pixelValues[0] & pixelMaxValue) << bitShifts.pixelA)
      + ((pixelValues[1] & pixelMaxValue) << bitShifts.pixelB)
      + ((pixelValues[2] & pixelMaxValue) << bitShifts.pixelC)
      + ((pixelValues[3] & pixelMaxValue) << bitShifts.pixelD)
      + ((pixelValues[4] & pixelMaxValue) << bitShifts.pixelE)
      + ((pixelValues[5] & pixelMaxValue) << bitShifts.pixelF)
      + ((ll & lMaxValue) << bitShifts.l)
      + ((aaa & aMaxValue) << bitShifts.a)
      + (bbb & bMaxValue)

    return lqip
  }
  catch (error) {
    console.error(`⚠️ Failed to process image: ${imagePath}`, error)
    return null
  }
}

/**
 * LQIP processing functions
 * Image analysis, mapping generation, and HTML application
 */
async function loadExistingLqipMap(): Promise<LqipMap> {
  try {
    const data = await fs.readFile(lqipMapPath, 'utf-8')
    return JSON.parse(data) as LqipMap
  }
  catch {
    return {} as LqipMap
  }
}

async function scanAndAnalyzeImages(): Promise<{ fileMappings: FileMapping[], imageStats: ImageStats, existingMap: LqipMap }> {
  await fs.mkdir(assetsDir, { recursive: true })

  const webpFiles = await glob('_astro/**/*.webp', {
    cwd: distDir,
    absolute: true,
  })

  const existingMap = await loadExistingLqipMap()

  const fileMappings = webpFiles.map(filePath => ({
    filePath,
    webUrl: `/${path.relative(distDir, filePath).replace(/\\/g, '/')}`,
  }))

  const { cached, new: newCount } = fileMappings.reduce((acc, { webUrl }) => {
    existingMap[webUrl] !== undefined ? acc.cached++ : acc.new++
    return acc
  }, { cached: 0, new: 0 })

  return {
    fileMappings,
    imageStats: { total: fileMappings.length, cached, new: newCount },
    existingMap,
  }
}

function cleanLqipMap(existingMap: LqipMap, fileMappings: FileMapping[]): LqipMap {
  return fileMappings.reduce((acc, { webUrl }) => {
    if (existingMap[webUrl] !== undefined) {
      acc[webUrl] = existingMap[webUrl]
    }
    return acc
  }, {} as LqipMap)
}

async function processNewImages(fileMappings: FileMapping[], stats: ImageStats, cleanedMap: LqipMap): Promise<LqipMap> {
  const newMap = { ...cleanedMap }

  let processed = 0
  for (const { filePath, webUrl } of fileMappings) {
    if (cleanedMap[webUrl] === undefined) {
      processed++

      if (processed % 10 === 0 || processed === stats.new) {
        console.log(`🔄 Processing: ${processed}/${stats.new}`)
      }

      const lqipValue = await generateLqipValue(filePath)
      if (lqipValue !== null) {
        newMap[webUrl] = lqipValue
      }
    }
  }

  console.log(`✅ Generated LQIP styles for ${stats.new} new images`)

  const isNewFile = Object.keys(cleanedMap).length === 0
  await fs.writeFile(lqipMapPath, `${JSON.stringify(newMap, null, 2)}\n`)
  console.log(`📁 LQIP mapping ${isNewFile ? 'saved to' : 'updated in'} ${lqipMapPath}`)

  return newMap
}

function processImage(img: HTMLElement, lqipMap: LqipMap): boolean {
  const src = img.getAttribute('src')
  if (!src) {
    return false
  }

  const lqipValue = lqipMap[src]
  if (lqipValue === undefined) {
    return false
  }

  const currentStyle = img.getAttribute('style') ?? ''
  if (currentStyle.includes('--lqip:')) {
    return false
  }

  const newStyle = currentStyle
    ? `${currentStyle}; --lqip:${lqipValue}`
    : `--lqip:${lqipValue}`

  img.setAttribute('style', newStyle)
  return true
}

async function applyLqipToHtml(lqipMap: LqipMap): Promise<number> {
  const htmlFiles = await glob('**/*.html', { cwd: distDir })
  let totalApplied = 0

  for (const htmlFile of htmlFiles) {
    try {
      const filePath = `${distDir}/${htmlFile}`
      const root = parse(await fs.readFile(filePath, 'utf-8'))
      const images = root.querySelectorAll('img')

      if (images.length === 0) {
        continue
      }

      let hasChanges = false
      for (const img of images) {
        const wasUpdated = processImage(img, lqipMap)
        if (wasUpdated) {
          totalApplied++
          hasChanges = true
        }
      }

      if (hasChanges) {
        await fs.writeFile(filePath, root.toString())
      }
    }
    catch (error) {
      console.warn(`⚠️ Failed to process ${htmlFile}:`, error)
      continue
    }
  }

  return totalApplied
}

/**
 * Main workflow
 * Coordinates LQIP generation and application process
 */
async function main() {
  console.log('🔍 Starting LQIP processing...')

  const { fileMappings, imageStats, existingMap } = await scanAndAnalyzeImages()

  if (imageStats.total === 0) {
    console.log('✨ No images found to process')
    return
  }

  console.log(`📦 Found ${imageStats.total} images (${imageStats.cached} cached, ${imageStats.new} new)`)

  const cleanedMap = cleanLqipMap(existingMap, fileMappings)

  let lqipMap: LqipMap
  if (imageStats.new > 0) {
    lqipMap = await processNewImages(fileMappings, imageStats, cleanedMap)
  }
  else {
    lqipMap = cleanedMap

    if (Object.keys(existingMap).length > Object.keys(cleanedMap).length) {
      await fs.writeFile(lqipMapPath, `${JSON.stringify(cleanedMap, null, 2)}\n`)
    }
  }

  const appliedCount = await applyLqipToHtml(lqipMap)

  if (appliedCount === 0) {
    console.log('✨ All images already have LQIP styles')
    return
  }

  console.log(`✨ Successfully applied LQIP styles to ${appliedCount} images`)
}

main().catch((error) => {
  console.error('❌ LQIP processing failed:', error)
  process.exit(1)
})
