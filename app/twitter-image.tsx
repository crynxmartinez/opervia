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
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo Text */}
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
              fontSize: 120,
              fontWeight: 'bold',
              color: 'white',
              letterSpacing: '-0.05em',
              marginBottom: 20,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            OPERVIA
          </div>
          <div
            style={{
              fontSize: 40,
              color: 'rgba(255,255,255,0.95)',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.4,
              fontWeight: 600,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            White-Label Technical Partner for Agencies
          </div>
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.85)',
              textAlign: 'center',
              maxWidth: 800,
              marginTop: 30,
              lineHeight: 1.3,
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
