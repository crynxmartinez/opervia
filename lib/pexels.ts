const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || ''

export interface PexelsPhoto {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
}

export async function searchPexelsPhotos(query: string, perPage: number = 1): Promise<PexelsPhoto[]> {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        next: { revalidate: 86400 } // Cache for 24 hours
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch from Pexels')
    }

    const data = await response.json()
    return data.photos || []
  } catch (error) {
    console.error('Pexels API error:', error)
    return []
  }
}

// Predefined curated images for specific sections
export const curatedImages = {
  hero: 'modern office technology team collaboration',
  technology: 'software development coding programming',
  teamwork: 'business team meeting collaboration',
  dashboard: 'analytics dashboard data visualization',
  automation: 'automation technology artificial intelligence',
  success: 'business success growth celebration',
  consulting: 'business consulting strategy meeting',
  development: 'web development coding laptop',
}

export function getPexelsImageUrl(query: string, size: 'large' | 'medium' | 'small' = 'large'): string {
  // For static builds, return placeholder
  // In production, this would be fetched server-side
  return `https://images.pexels.com/photos/placeholder-${size}.jpg`
}
