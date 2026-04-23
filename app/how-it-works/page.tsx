'use client'

import Link from "next/link"
import { ArrowRight, Sparkles, CheckCircle2, Rocket, Settings, TrendingUp, Target } from "lucide-react"
import { pexelsImages } from "@/lib/pexels"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={pexelsImages.office}
            alt="Modern workspace"
            className="w-full h-full object-cover"
          />
          {/* Blue-Green Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-infra-sky/60 via-infra-blue/70 to-infra-teal/50" />
          
          {/* Floating Particles */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-infra-blue/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-infra-teal/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 md:pt-24">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Premium Badge */}
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-float">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse-slow" />
                <span className="text-white font-bold text-sm sm:text-base tracking-wide">Structured Partnership Model</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              <span className="text-white">How We Build Your</span>
              <br />
              <span className="text-white">
                Agency SaaS Together
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              We build your agency SaaS or custom web app through a 12-month structured partnership. Instead of one massive upfront payment, invest monthly while we build your platform and stay as your backend technical partner.
            </p>

            {/* Support Line */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto italic">
              You grow your agency. We build and maintain the SaaS behind it.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-infra-blue to-infra-deep-blue text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl hover:shadow-infra-blue/50">
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Strategy Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  Talk About Your Build
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              How the Opervia Partnership Works
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We take your agency from planning to launch through a structured process designed to turn your offer into a real working system.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Phase 1: Partnership Activation */}
            <div className="relative bg-white border-2 border-blue-400 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 right-6">
                <div className="w-14 h-14 bg-blue-400 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Partnership Activation</h3>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">What happens here</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This is where we turn your idea into a clear plan.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">We focus on</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">discovery and alignment</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">offer and workflow mapping</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">feature planning</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">system structure</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">website and dashboard planning</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">integration planning</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">database and security planning</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">account setup and project preparation</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Goal</h4>
                <p className="text-gray-700 leading-relaxed">
                  To create a clear roadmap before development begins.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Why it matters</h4>
                <p className="text-gray-700 leading-relaxed">
                  A better build starts with better clarity. This phase helps both sides align on priorities, structure, and direction before the system is built.
                </p>
              </div>
            </div>

            {/* Phase 2: Build & Pre-Launch */}
            <div className="relative bg-white border-2 border-purple-400 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 right-6">
                <div className="w-14 h-14 bg-purple-400 rounded-xl flex items-center justify-center">
                  <Settings className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Build & Pre-Launch</h3>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">What happens here</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This is where the system is built, connected, and prepared for testing.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">We focus on</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">website development</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">admin dashboard build</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">client dashboard build</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">frontend and backend development</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">feature implementation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">database setup</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">GoHighLevel integration</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">security setup</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">testing and troubleshooting</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">pre-launch preparation</p>
                  </div>
                </div>
              </div>

              <div className="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Pre-launch means</h4>
                <p className="text-gray-700 leading-relaxed">
                  You test the system directly and review how it works before it goes live.
                </p>
              </div>

              <div className="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Soft launch means</h4>
                <p className="text-gray-700 leading-relaxed">
                  A small trusted group—such as your team, close clients, or early supporters—tests the platform and gives feedback before public release.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Goal</h4>
                <p className="text-gray-700 leading-relaxed">
                  To build the system and prepare it for a confident public launch.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Why it matters</h4>
                <p className="text-gray-700 leading-relaxed">
                  This phase helps catch issues early, improve the experience, and make the launch stronger.
                </p>
              </div>
            </div>

            {/* Phase 3: Launch */}
            <div className="relative bg-white border-2 border-green-400 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 right-6">
                <div className="w-14 h-14 bg-green-400 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Launch</h3>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">What happens here</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  After testing and feedback, we finalize the system and prepare it for release.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">We focus on</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">final revisions</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">feedback-based improvements</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">bug fixing</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">final testing</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">launch readiness checks</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">go-live support</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Goal</h4>
                <p className="text-gray-700 leading-relaxed">
                  To release a stable, tested, and market-ready system.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Why it matters</h4>
                <p className="text-gray-700 leading-relaxed">
                  A good launch happens after refinement, not before. This phase ensures the system is ready for real users.
                </p>
              </div>
            </div>

            {/* Phase 4: Ongoing Technical Partnership */}
            <div className="relative bg-white border-2 border-blue-600 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 right-6">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Ongoing Technical Partnership</h3>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">What happens after launch</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Once the system is live, Opervia continues as the backend technical partner behind your agency.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">We handle</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">technical support</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">maintenance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">troubleshooting</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">minor improvements</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">system optimization</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">backend guidance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">ongoing GHL support</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">white-label technical fulfillment</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Why it matters</h4>
                <p className="text-gray-700 leading-relaxed">
                  Launch is the beginning, not the end. Ongoing support keeps the system stable, useful, and ready to grow with your agency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
