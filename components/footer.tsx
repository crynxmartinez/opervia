import Link from "next/link"

export function Footer() {
  const navigation = {
    services: [
      { name: "GHL API Development", href: "/gohighlevel-developer" },
      { name: "Custom Client Portals", href: "/custom-portals" },
      { name: "Agency Partnership", href: "/agency-partner" },
      { name: "Technical Support", href: "/services" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Pricing", href: "/pricing" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">Opervia</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              White-label technical partner for agencies. We build the system behind your service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Opervia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
