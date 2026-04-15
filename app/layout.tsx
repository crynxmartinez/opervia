import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Opervia | White-Label Technical Partner for Agencies",
  description: "White-label technical backbone for agencies. Custom client portals, GHL API development, and fulfillment systems.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
