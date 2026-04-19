import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Opervia - White-Label Technical Partner for Agencies'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
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
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '80px',
        }}
      >
        {/* Logo Text */}
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            color: 'white',
            letterSpacing: '-0.05em',
            marginBottom: 30,
            textShadow: '0 8px 32px rgba(0,0,0,0.3)',
            display: 'flex',
          }}
        >
          OPERVIA
        </div>
        
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
              textShadow: '0 4px 16px rgba(0,0,0,0.3)',
              marginBottom: 24,
              display: 'flex',
            }}
          >
            White-Label Technical Partner for Agencies
          </div>
          <div
            style={{
              fontSize: 34,
              color: 'rgba(255,255,255,0.92)',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.4,
              fontWeight: 600,
              display: 'flex',
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
