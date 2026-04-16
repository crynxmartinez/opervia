'use client'

import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, Tag, TrendingUp, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const blogPosts: any[] = []

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold">Insights & Resources</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Opervia Blog
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Strategies, insights, and technical guides for agencies scaling with custom systems and white-label partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <div className="text-7xl">📝</div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Coming Soon
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're preparing valuable content about agency growth, technical strategies, and white-label partnerships. Check back soon for insights that help you scale your agency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Back to Home
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Agency Growth Insights
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to receive strategies, case studies, and technical guides for scaling your agency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>

            <p className="text-white/60 text-sm mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
