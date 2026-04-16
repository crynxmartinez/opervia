import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Opervia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              How It Works
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 hover:text-blue-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  )
}
