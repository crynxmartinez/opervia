import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Opervia - White-Label Technical Partner for Agencies'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  // Fetch the logo
  const logoData = await fetch(
    new URL('../../public/logo-full.png', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #4A9FD8 0%, #3B82F6 50%, #14B8A6 100%)',
          fontFamily: 'system-ui, sans-serif',
          padding: '60px',
        }}
      >
        {/* Logo Image */}
        <img
          src={logoData as any}
          alt="Opervia Logo"
          width="500"
          height="130"
          style={{
            marginBottom: 40,
          }}
        />
        
        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 48,
              color: 'rgba(255,255,255,0.98)',
              textAlign: 'center',
              maxWidth: 1000,
              lineHeight: 1.3,
              fontWeight: 700,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              marginBottom: 20,
            }}
          >
            White-Label Technical Partner for Agencies
          </div>
          <div
            style={{
              fontSize: 32,
              color: 'rgba(255,255,255,0.9)',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            Custom Systems • GoHighLevel Integration • Backend Support
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
