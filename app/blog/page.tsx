'use client'

import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, Tag, TrendingUp, Sparkles } from "lucide-react"
import { pexelsImages } from "@/lib/pexels"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const blogPosts: any[] = []

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={pexelsImages.team}
            alt="Blog insights"
            className="w-full h-full object-cover"
          />
          {/* Blue-Green Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-infra-sky/60 via-infra-blue/70 to-infra-teal/50" />
          
          {/* Floating Particles */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-infra-blue/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-infra-teal/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-full mb-8 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse-slow" />
              <span className="text-white font-semibold">Insights & Resources</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Opervia Blog
            </h1>

            <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              Strategies, insights, and technical guides for agencies scaling with custom systems and white-label partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-infra-sky/20 to-infra-teal/20 rounded-full flex items-center justify-center mx-auto mb-8">
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
                <button className="group relative px-8 py-4 bg-gradient-to-r from-infra-blue to-infra-deep-blue text-white rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl hover:shadow-infra-blue/50">
                  <span className="relative z-10">
                    Back to Home
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-infra-deep-blue to-infra-violet/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-infra-blue hover:text-infra-blue transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-infra-blue via-infra-deep-blue to-infra-navy relative overflow-hidden">

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
              <button className="px-8 py-4 bg-gradient-to-r from-infra-teal to-infra-blue text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
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
