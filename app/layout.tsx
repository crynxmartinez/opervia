import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.opervia.agency'),
  title: {
    default: "Opervia | White-Label Technical Partner for Agencies",
    template: "%s | Opervia"
  },
  description: "Build your agency SaaS through a 12-month partnership. No massive upfront fees. We're your backend technical partner—build, launch, ongoing support.",
  keywords: [
    "agency saas development",
    "build agency saas",
    "backend technical partner",
    "custom web app development",
    "12-month saas partnership",
    "agency web app builder",
    "saas development no upfront cost",
    "agency technical partner",
    "custom client portals",
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
    url: 'https://www.opervia.agency',
    siteName: 'Opervia',
    title: 'Opervia | White-Label Technical Partner for Agencies',
    description: 'Build your agency SaaS through a 12-month partnership. No massive upfront fees. Custom web apps, dashboards, integrations, and ongoing support.',
    images: [
      {
        url: 'https://www.opervia.agency/logo-full.png',
        width: 800,
        height: 400,
        alt: 'Opervia Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opervia | White-Label Technical Partner for Agencies',
    description: 'Build your agency SaaS through a 12-month partnership. No upfront fees. Custom web apps and ongoing technical support.',
    images: ['https://www.opervia.agency/logo-full.png'],
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
    description: 'Build your agency SaaS or custom web app through a 12-month partnership. We\'re your backend technical partner for ongoing support and growth.',
    url: 'https://www.opervia.agency',
    logo: 'https://www.opervia.agency/logo-full.png',
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
