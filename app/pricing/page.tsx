'use client'

import Link from "next/link"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 md:pt-24">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Premium Badge */}
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-float">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse-slow" />
                <span className="text-white font-bold text-sm sm:text-base tracking-wide">Transparent Pricing • No Hidden Fees • 12-Month Partnership</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              <span className="text-white">Choose the Partnership</span>
              <br />
              <span className="text-white">
                <span className="relative inline-block">
                  Level That Fits Your Agency
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-gradient" style={{ backgroundSize: '200% auto' }} />
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              Opervia offers structured backend partnership plans for agencies that need custom systems, GoHighLevel integration, dashboards, and ongoing technical support.
            </p>

            {/* Supporting line */}
            <p className="text-lg md:text-xl text-cyan-300 italic font-semibold">
              You close the client. We build the system behind your service.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="#pricing-cards">
                <button className="group relative px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl">
                  <span className="relative z-10 flex items-center gap-2">
                    View Plans
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </a>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  Book a Strategy Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Three Pricing Cards */}
      <section id="pricing-cards" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Card 1: Starter Partner */}
              <div className="relative bg-white border-2 border-blue-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-6 right-6">
                  <div className="px-3 py-1 bg-blue-100 rounded-full">
                    <span className="text-xs font-bold text-blue-700">LEAN LAUNCH</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Starter Partner</h3>
                  <p className="text-gray-600 mb-6">For agencies that need a lean custom system with the core foundation in place.</p>
                  
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-blue-600">$5,000</span>
                    <span className="text-gray-600"> to start</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">$3,000</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">12-month term</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">1 website + admin dashboard + client dashboard</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">GoHighLevel as main integration</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Up to 5 client-side features</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Up to 3 additional integrations</p>
                  </div>
                </div>

                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Card 2: Core Partner (FEATURED) */}
              <div className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 border-4 border-purple-400 rounded-2xl p-8 shadow-2xl transform md:scale-105 hover:scale-110 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg">
                    <span className="text-sm font-bold text-white">⭐ MOST POPULAR</span>
                  </div>
                </div>

                <div className="mb-6 mt-4">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Partner</h3>
                  <p className="text-gray-700 mb-6">For agencies that need a stronger backend technical partner with broader integrations, deeper admin tools, and more room to grow.</p>
                  
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-purple-600">$5,000</span>
                    <span className="text-gray-700"> to start</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">$5,000</span>
                    <span className="text-gray-700">/month</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">12-month term</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-800 font-medium">1 website + admin dashboard + client dashboard</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-800 font-medium">GoHighLevel as main integration</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-800 font-medium">Up to 10 client-side features</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-800 font-medium">Up to 10 additional integrations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-800 font-medium">Dedicated support manager</p>
                  </div>
                </div>

                <Link href="/contact">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
                    Book a Strategy Call
                  </button>
                </Link>
              </div>

              {/* Card 3: Custom Partnership */}
              <div className="relative bg-white border-2 border-gray-300 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-6 right-6">
                  <div className="px-3 py-1 bg-gray-800 rounded-full">
                    <span className="text-xs font-bold text-white">ENTERPRISE</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Custom Partnership</h3>
                  <p className="text-gray-600 mb-6">For agencies with larger scopes, advanced workflows, or more specialized backend requirements.</p>
                  
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                  </div>
                  <div className="text-gray-600 mb-2">pricing</div>
                  <div className="text-sm text-gray-500 mb-4">Custom scope</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Built around your delivery model</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Best for advanced or multi-layered systems</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Custom integrations & workflows</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Priority support</p>
                  </div>
                </div>

                <Link href="/contact">
                  <button className="w-full px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-xl font-bold hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105">
                    Talk to Us
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Comparison Table - TO BE BUILT */}

      {/* SECTION 4: What's Included - TO BE BUILT */}

      {/* SECTION 5: First-Month Onboarding - TO BE BUILT */}

      {/* SECTION 6: FAQ - TO BE BUILT */}

      {/* SECTION 7: Final CTA - TO BE BUILT */}

      <Footer />
    </div>
  )
}
