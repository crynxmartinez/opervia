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

export interface PexelsResponse {
  photos: PexelsPhoto[]
  total_results: number
  page: number
  per_page: number
}

const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || ''

export async function searchPexels(query: string, perPage = 15): Promise<PexelsResponse> {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
    {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch from Pexels')
  }

  return response.json()
}

export async function getCuratedPhotos(perPage = 15): Promise<PexelsResponse> {
  const response = await fetch(
    `https://api.pexels.com/v1/curated?per_page=${perPage}`,
    {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      next: { revalidate: 3600 },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch curated photos')
  }

  return response.json()
}

// Predefined queries for different sections
export const pexelsQueries = {
  hero: 'modern office technology',
  services: 'digital marketing team',
  agency: 'creative agency workspace',
  success: 'business success celebration',
  technology: 'software development',
  teamwork: 'team collaboration',
}
