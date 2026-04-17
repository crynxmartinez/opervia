import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-infra-navy text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image 
              src="/logo-full.png" 
              alt="Opervia Logo" 
              width={180} 
              height={48}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400">
              White-label technical partner for agencies building the future.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Custom Portals</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">GHL Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Fulfillment Systems</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <p className="text-sm mb-4">
              Ready to transform your agency?
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              Book a call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 Opervia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
