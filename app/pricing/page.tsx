'use client'

import Link from "next/link"
import { ArrowRight, Sparkles, Target, Settings, Rocket, TrendingUp, Users, Zap, Shield, CheckCircle2, XCircle, Clock, DollarSign, BarChart3 } from "lucide-react"
import { Header } from "@/components/header"

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

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-float">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse-slow" />
              <span className="text-white font-bold text-base tracking-wide">Fixed Investment Model</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              <span className="text-white">Investment in Your</span>
              <br />
              <span className="text-white">
                <span className="relative inline-block">
                  Technical Future
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-gradient" style={{ backgroundSize: '200% auto' }} />
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              A structured partnership model designed for agencies ready to scale with <strong>custom GoHighLevel systems</strong> and <strong>white-label technical support</strong>—without the chaos of hiring or the limits of generic software.
            </p>

            {/* Supporting line */}
            <p className="text-lg md:text-xl text-cyan-300 italic font-semibold animate-pulse-slow">
              Transparent. Fixed. Premium.
            </p>

            {/* Price Display */}
            <div className="inline-block bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <div className="text-xl text-white/90 font-semibold mb-2">
                Starting at
              </div>
              <div className="text-6xl md:text-7xl font-bold text-white mb-2">
                $5,000
              </div>
              <div className="text-sm text-white/70 mt-2">
                Activation Fee
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl">
                  <span className="relative z-10 flex items-center gap-2">
                    Book Strategy Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <a href="#breakdown">
                <button className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  See Investment Breakdown
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Investment Visual */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              One Partnership. Three Phases. Clear Value.
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach to building, launching, and supporting your custom system
            </p>
          </div>

          {/* Timeline Visual */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Activation</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$5,000</div>
                  <div className="text-sm text-gray-600 font-semibold">ONE-TIME</div>
                  <div className="mt-4 text-sm text-gray-700">Week 1-2</div>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pre-Launch</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">$5,000</div>
                  <div className="text-sm text-gray-600 font-semibold">ONE-TIME</div>
                  <div className="mt-4 text-sm text-gray-700">Week 3-12</div>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Partnership</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">$5,000</div>
                  <div className="text-sm text-gray-600 font-semibold">PER MONTH</div>
                  <div className="mt-4 text-sm text-gray-700">12 Months</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Agencies Choose Opervia */}
      <section id="breakdown" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Investment Breakdown
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing for each phase of your partnership
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Phase 1: Activation & Planning */}
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-400 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-6 right-6">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-float">
                  <Target className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Activation & Planning</h3>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-xl shadow-lg">
                    <DollarSign className="w-6 h-6 text-white" />
                    <span className="text-2xl font-bold text-white">5,000</span>
                    <span className="text-sm text-white/90 font-semibold">ONE-TIME</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What You Get:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Discovery & technical scoping</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Architecture planning</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">GHL integration roadmap</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Feature prioritization</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Development kickoff</p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-300 rounded-lg">
                <ArrowRight className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Clear roadmap in 2 weeks</span>
              </div>
            </div>

            {/* Phase 2: Build & Pre-Launch */}
            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-400 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-6 right-6">
                <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <Settings className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Build & Pre-Launch</h3>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 rounded-xl shadow-lg">
                    <DollarSign className="w-6 h-6 text-white" />
                    <span className="text-2xl font-bold text-white">5,000</span>
                    <span className="text-sm text-white/90 font-semibold">ONE-TIME</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What You Get:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Full system development</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Custom portal & dashboard</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">GHL API integrations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Database & security setup</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Testing & launch prep</p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-300 rounded-lg">
                <ArrowRight className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">Live system ready to launch</span>
              </div>
            </div>

            {/* Phase 3: Launch & Partnership */}
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-6 right-6">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  <Rocket className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Launch & Partnership</h3>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 rounded-xl shadow-lg">
                      <DollarSign className="w-6 h-6 text-white" />
                      <span className="text-2xl font-bold text-white">5,000</span>
                      <span className="text-sm text-white/90 font-semibold">PER MONTH</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-lg ml-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">12-Month Minimum</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What You Get:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Technical support</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Bug fixes & optimization</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">Minor improvements</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">System updates</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">White-label backend support</p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-lg">
                <ArrowRight className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Stable, improving system</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Agencies Choose Opervia */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Agencies Choose Opervia Over Alternatives
            </h2>
            <p className="text-xl text-gray-600">
              Compare the investment and value
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Left: Problems */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Approaches</h3>
              
              <div className="bg-white border-2 border-red-300 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Hire In-House Developer</h4>
                    <p className="text-gray-700 mb-2">$80K-$120K+/year salary</p>
                    <p className="text-sm text-gray-600">Plus recruiting costs, benefits, management overhead, and risk of bad hires</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-red-300 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Freelance Developers</h4>
                    <p className="text-gray-700 mb-2">$20K-$40K per project</p>
                    <p className="text-sm text-gray-600">Inconsistent quality, no support after delivery, communication challenges</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-red-300 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Generic Software</h4>
                    <p className="text-gray-700 mb-2">$500-$2K/month</p>
                    <p className="text-sm text-gray-600">Limited customization, looks like everyone else, no competitive advantage</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-red-300 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">DIY Approach</h4>
                    <p className="text-gray-700 mb-2">Your time + stress</p>
                    <p className="text-sm text-gray-600">Takes you away from sales, accumulates technical debt, fragile systems</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Opervia Solution */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl border-4 border-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-yellow-300" />
                    </div>
                    <h3 className="text-3xl font-bold">The Opervia Partnership</h3>
                  </div>

                  <div className="text-5xl font-bold mb-2">$5,000</div>
                  <div className="text-xl mb-6 opacity-90">Per Month</div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-300 mt-0.5 flex-shrink-0" />
                      <p className="text-white">Fixed investment, no surprises</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-300 mt-0.5 flex-shrink-0" />
                      <p className="text-white">Dedicated technical partner</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-300 mt-0.5 flex-shrink-0" />
                      <p className="text-white">Custom-built GoHighLevel system</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-300 mt-0.5 flex-shrink-0" />
                      <p className="text-white">12-month ongoing support</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-300 mt-0.5 flex-shrink-0" />
                      <p className="text-white">White-label delivery</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-300 mt-0.5 flex-shrink-0" />
                      <p className="text-white">No hiring headaches</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-6 h-6 text-green-300 mt-0.5 flex-shrink-0" />
                      <p className="text-white">Less than one junior dev's salary</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/30">
                    <p className="text-lg font-semibold">
                      → Complete technical infrastructure for less than hiring one developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Calculate Your Potential ROI
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                See how quickly the Opervia partnership pays for itself
              </p>

              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Example Scenario:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Number of clients:</span>
                    <span className="text-2xl font-bold text-gray-900">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Average monthly client value:</span>
                    <span className="text-2xl font-bold text-gray-900">$5,000</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-semibold">Year 1 Revenue:</span>
                      <span className="text-3xl font-bold text-green-600">$180,000</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-semibold">Opervia Investment:</span>
                      <span className="text-2xl font-bold text-gray-900">$70,000</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                      <span className="text-xl font-bold text-gray-900">Net Profit:</span>
                      <span className="text-4xl font-bold text-green-600">$110,000</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-lg font-bold text-gray-900">ROI:</span>
                      <span className="text-3xl font-bold text-green-600">157%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This example assumes you close 3 clients at $5K/month. With Opervia's custom system and white-label support, many agencies charge $7K-$15K/month, significantly increasing ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Is This Investment Right for You?
            </h2>
            <p className="text-xl text-gray-600">
              Honest assessment to help you decide
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Perfect Fit */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Perfect Fit If You...</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Sell $5K-$15K/month services to clients</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Want custom technical infrastructure</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Need white-label backend support</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Ready for 12-month commitment</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Tired of generic tools and fragile delivery</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Want GoHighLevel API developer expertise</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Value ongoing partnership over one-time builds</p>
                </div>
              </div>
            </div>

            {/* Not Ideal */}
            <div className="bg-white border-2 border-red-300 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Not Ideal If You...</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <XCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Looking for cheap templates or DIY solutions</p>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Need one-time project only (no ongoing support)</p>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Can't commit to 12-month partnership</p>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Want to manage development yourself</p>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Annual budget under $50K for technical infrastructure</p>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Just starting out (not ready for premium investment)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* After Year One */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                What Happens After 12 Months?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your partnership doesn't have to end. Many agencies continue long-term as we become their permanent <strong className="text-blue-600">white-label backend partner</strong>. Pricing after year one is flexible based on your system scope, support needs, and growth plans.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-2">Continue Partnership</h4>
                  <p className="text-sm text-gray-600">Ongoing monthly support at adjusted rates</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-2">Adjust Support Level</h4>
                  <p className="text-sm text-gray-600">Scale up or down based on your needs</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-2">Add New Features</h4>
                  <p className="text-sm text-gray-600">Expand your system with new modules</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-2">Scale With Growth</h4>
                  <p className="text-sm text-gray-600">Partnership evolves as you grow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Investment Questions Answered
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why not just charge one upfront fee?</h3>
              <p className="text-gray-700 leading-relaxed">
                Because this is a partnership, not a one-time build. The system needs ongoing support, optimization, and improvements to succeed. The structured model ensures we're invested in your long-term success, not just delivering and disappearing.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I pay monthly instead of the upfront fees?</h3>
              <p className="text-gray-700 leading-relaxed">
                The activation and pre-launch fees ensure commitment from both sides before we begin development. These one-time investments protect the partnership and ensure we can dedicate proper resources to your project from day one.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What's included in the monthly $5,000 fee?</h3>
              <p className="text-gray-700 leading-relaxed">
                Full technical support, maintenance, bug fixes, minor improvements, system optimization, ongoing technical guidance, and white-label backend support. You get a dedicated technical partner, not just software access.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I cancel before 12 months?</h3>
              <p className="text-gray-700 leading-relaxed">
                The 12-month term ensures we can properly build, launch, and support your system. Early termination terms are discussed during onboarding. We want partners who are committed to success, not just trying things out.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I upgrade or add features later?</h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. Minor improvements are included in the monthly partnership. Major new features or modules can be scoped separately. Your system grows with your business.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you work with GoHighLevel specifically?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. We specialize as a <strong className="text-blue-600">GoHighLevel API developer</strong> and build custom <strong className="text-blue-600">GHL integrations</strong>, portals, and backend systems that extend far beyond standard GHL features. This is our core expertise.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is this white-label?</h3>
              <p className="text-gray-700 leading-relaxed">
                100%. Opervia acts as your <strong className="text-blue-600">white-label technical partner</strong>—we deliver under your agency brand, and your clients never know we exist. You get all the credit.
              </p>
            </div>

            {/* FAQ 8 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How does this compare to hiring a developer?</h3>
              <p className="text-gray-700 leading-relaxed">
                A junior developer costs $80K-$120K+/year (plus benefits, management, and recruiting costs). For $70K, you get an entire technical team, proven systems, ongoing support, and zero hiring risk. Plus, we're experts in GoHighLevel and agency systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-6 animate-float">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse-slow" />
              <span className="text-white font-bold text-base tracking-wide">Ready to Scale?</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Ready to Invest in Your
              <br />
              <span className="text-cyan-300">Technical Future?</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              Book a 30-minute strategy call. We'll discuss your project, confirm fit, and create a clear technical roadmap—<strong className="text-white">no obligation, no pressure</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/contact">
                <button className="group relative px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl">
                  <span className="relative z-10 flex items-center gap-2">
                    Book Strategy Call Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>30-minute discovery call</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Get answers to your questions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Confirm partnership fit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>No hidden fees or surprises</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
