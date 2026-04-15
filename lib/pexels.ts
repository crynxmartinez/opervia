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
      next: { revalidate: 3600 },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch from Pexels')
  }

  return response.json()
}

// Predefined image URLs (fallback if API fails)
export const pexelsImages = {
  hero: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
  team: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1920',
  office: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920',
  success: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920',
}
