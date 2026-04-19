import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://opervia.com'),
  title: {
    default: "Opervia | White-Label Technical Partner for Agencies",
    template: "%s | Opervia"
  },
  description: "Opervia is the white-label technical partner for agencies that need custom systems, GoHighLevel integration, admin control, client dashboards, and ongoing backend support. Build, launch, and scale with structured partnership.",
  keywords: [
    "white-label technical partner",
    "agency backend support",
    "GoHighLevel integration",
    "custom client portals",
    "agency fulfillment systems",
    "GHL development",
    "white-label development",
    "agency technical partner",
    "custom dashboards",
    "backend infrastructure"
  ],
  authors: [{ name: "Opervia" }],
  creator: "Opervia",
  publisher: "Opervia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opervia.com',
    siteName: 'Opervia',
    title: 'Opervia | White-Label Technical Partner for Agencies',
    description: 'White-label technical partner for agencies. Custom systems, GoHighLevel integration, client dashboards, and ongoing backend support.',
  },
  facebook: {
    appId: '1234567890', // Replace with your actual Facebook App ID when you create one
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opervia | White-Label Technical Partner for Agencies',
    description: 'White-label technical partner for agencies. Custom systems, GoHighLevel integration, and ongoing backend support.',
    creator: '@opervia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when ready
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Opervia',
    description: 'White-label technical partner for agencies that need custom systems, GoHighLevel integration, and ongoing backend support.',
    url: 'https://opervia.com',
    logo: 'https://opervia.com/logo-full.png',
    sameAs: [
      // Add your social media URLs here when ready
      // 'https://twitter.com/opervia',
      // 'https://linkedin.com/company/opervia',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English'
    },
    areaServed: 'Worldwide',
    serviceType: [
      'White-Label Development',
      'GoHighLevel Integration',
      'Custom Client Portals',
      'Agency Backend Support'
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
