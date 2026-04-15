import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://opervia.agency'),
  title: {
    default: "Opervia | White-Label Technical Partner for Agencies | GHL API Developer",
    template: "%s | Opervia"
  },
  description: "White-label technical backbone for agencies. Custom client portals, GHL API development, and fulfillment systems. We build the system behind your service.",
  keywords: [
    "white label technical partner for agencies",
    "gohighlevel api developer",
    "custom agency software development",
    "white label saas development",
    "custom client portal development",
    "agency fulfillment partner",
    "backend partner for agencies",
    "gohighlevel custom app development",
    "productized service backend",
    "agency tech stack partner"
  ],
  authors: [{ name: "Opervia" }],
  creator: "Opervia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opervia.agency",
    title: "Opervia | White-Label Technical Partner for Agencies",
    description: "White-label technical backbone for agencies. Custom client portals, GHL API development, and fulfillment systems.",
    siteName: "Opervia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opervia | White-Label Technical Partner for Agencies",
    description: "White-label technical backbone for agencies. Custom client portals, GHL API development, and fulfillment systems.",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
