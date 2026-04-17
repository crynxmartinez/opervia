'use client'

import Link from "next/link"
import { ArrowRight, Sparkles, CheckCircle2, Rocket, Settings, TrendingUp, Shield, Users, Zap, Clock, Target, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900/80 via-blue-900/75 to-purple-900/80">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              <span className="text-white">How the Opervia</span>
              <br />
              <span className="text-white">
                Partnership{' '}
                <span className="relative inline-block">
                  Works
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-gradient" style={{ backgroundSize: '200% auto' }} />
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              We help agencies launch <strong>custom GoHighLevel systems</strong> through a structured build, launch, and ongoing <strong>white-label technical partnership</strong>—without requiring a massive upfront software payment.
            </p>

            {/* Support Line */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto italic">
              You bring the client. We build the system behind your service.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/50">
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

      {/* Simple Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Opervia works through a <strong className="text-gray-900">structured annual partnership model</strong>. Instead of charging one large upfront fee for a custom web app and backend system, we break the engagement into a <strong className="text-gray-900">build start phase</strong>, a <strong className="text-gray-900">pre-launch phase</strong>, and a <strong className="text-gray-900">12-month technical partnership</strong>. This allows agencies to launch stronger <strong className="text-gray-900">GoHighLevel-powered systems</strong> while gaining ongoing <strong className="text-gray-900">backend partner support</strong>, <strong className="text-gray-900">white-label technical fulfillment</strong>, and system improvements.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Phase Model Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              The 3-Phase Partnership Model
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach to building, launching, and supporting your custom system
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Phase 1: Activation & Planning */}
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
                  This is the starting point of the partnership.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">We handle:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Discovery and scope alignment</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">System planning</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Architecture mapping</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Feature prioritization</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Technical structure</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">GHL connection planning</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Frontend/backend planning</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Database and security planning</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">GoHighLevel API developer planning</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Custom gohighlevel developer scoping</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Goal</h4>
                <p className="text-gray-700 leading-relaxed">
                  To define the system clearly and begin development with a committed technical roadmap.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Why it matters</h4>
                <p className="text-gray-700 leading-relaxed">
                  This phase protects both sides by ensuring the build starts with proper direction, structure, and expectations—<strong className="text-blue-600">especially for complex GoHighLevel integrations and custom portal builds</strong>.
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Build & Launch</h3>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">What happens here</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This is where the system is built and prepared for launch.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">We handle:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Website development</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Dashboard template and portal build</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Frontend and backend development</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Admin features</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Client-facing features</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Database setup</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">GHL integration</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Security implementation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Testing and troubleshooting</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Launch preparation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">GoHighLevel API integrations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Custom gohighlevel developer implementation</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Goal</h4>
                <p className="text-gray-700 leading-relaxed">
                  To prepare the system for soft launch or live deployment.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Why it matters</h4>
                <p className="text-gray-700 leading-relaxed">
                  Before launch, the core system should be functional, connected, tested, and ready for real usage.
                </p>
              </div>
            </div>

            {/* Phase 3: Launch & 12-Month Partnership */}
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Launch & Ongoing Technical Partnership</h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">12-month minimum partnership term</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">What happens here</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Once the system launches, Opervia continues as the backend technical partner.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">We handle:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Technical support</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Bug fixes</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Maintenance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Minor improvements</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Troubleshooting</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">System optimization</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Ongoing technical guidance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Backend fulfillment support</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Continued GHL/backend management</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">White-label backend partner support</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Agency fulfillment partner services</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">Ongoing GoHighLevel API developer support</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Goal</h4>
                <p className="text-gray-700 leading-relaxed">
                  To keep the system stable, useful, and improving after launch.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Why it matters</h4>
                <p className="text-gray-700 leading-relaxed">
                  Most systems fail after launch because there is no proper support, no technical ownership, and no ongoing optimization. This phase solves that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Model Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why We Use This Model
            </h2>
            <p className="text-xl text-gray-600">
              A partnership approach that benefits both agencies and their clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Lower Upfront Burden</h3>
              <p className="text-gray-700 leading-relaxed">
                Clients do not need to pay a massive custom software bill all at once.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Faster Action</h3>
              <p className="text-gray-700 leading-relaxed">
                The project can begin with a clear activation step instead of waiting for a large capital decision.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Real Partnership</h3>
              <p className="text-gray-700 leading-relaxed">
                This is not just a one-time build. It is a structured technical partnership.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Better Launch Quality</h3>
              <p className="text-gray-700 leading-relaxed">
                The system is supported through planning, build, launch, and post-launch improvement.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-400 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Ongoing Technical Backbone</h3>
              <p className="text-gray-700 leading-relaxed">
                Agencies get more than software—they get backend support and technical delivery capacity.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">No Hiring Risk</h3>
              <p className="text-gray-700 leading-relaxed">
                You get a <strong className="text-cyan-600">dedicated backend partner for agencies</strong> without the cost, time, or risk of hiring an in-house <strong className="text-cyan-600">GoHighLevel developer</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What's Included in the Partnership
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive technical support from planning to ongoing optimization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Build Foundation */}
            <div className="relative bg-white border-2 border-blue-400 rounded-2xl p-8 shadow-lg">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-gray-900 pr-14">Build Foundation</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Website</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Custom white-label client portal/dashboard</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Admin backend</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Database structure</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Frontend and backend setup</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Core security implementation</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">GoHighLevel development and setup</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">GHL API integrations</p>
                </div>
              </div>
            </div>

            {/* Launch Readiness */}
            <div className="relative bg-white border-2 border-purple-400 rounded-2xl p-8 shadow-lg">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-gray-900 pr-14">Launch Readiness</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Testing</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Troubleshooting</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Soft launch support</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Deployment preparation</p>
                </div>
              </div>
            </div>

            {/* Ongoing Partnership */}
            <div className="relative bg-white border-2 border-cyan-400 rounded-2xl p-8 shadow-lg">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-gray-900 pr-14">Ongoing Partnership</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Support</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Bug fixes</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Minor enhancements</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Optimization</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Technical guidance</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Backend system support</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">White-label technical partner support</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Backend partner for agencies services</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">GoHighLevel API developer maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After Year One */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                What Happens After Year One
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                After the initial 12-month partnership term, clients may continue with Opervia under an ongoing <strong className="text-blue-600">white-label technical partnership</strong> agreement, depending on the system scope, support needs, and future development plans. Many agencies continue long-term as we become their <strong className="text-blue-600">backend partner for ongoing fulfillment</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Model Is Not */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What This Model Is Not
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-red-300 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Not a generic template setup</h3>
                    <p className="text-gray-700 text-sm">We build custom systems, not cookie-cutter templates.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-red-300 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Not a one-time freelancer project</h3>
                    <p className="text-gray-700 text-sm">This is a structured partnership, not a gig.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-red-300 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Not a cheap monthly VA package</h3>
                    <p className="text-gray-700 text-sm">We provide real technical development and support.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-red-300 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Not raw software access with no support</h3>
                    <p className="text-gray-700 text-sm">You get ongoing partnership and technical guidance.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-red-300 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Not a generic GoHighLevel template reseller</h3>
                    <p className="text-gray-700 text-sm">We build custom GHL integrations and portals.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-700 leading-relaxed">
                Opervia is designed for agencies that want a real <strong className="text-blue-600">white-label technical partner</strong> and <strong className="text-blue-600">backend fulfillment team</strong>, not just another tool account or template.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Best Fit for Agencies That Want to Scale With Better Delivery
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Best Fit</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Agencies selling custom services <strong className="text-green-600">powered by GoHighLevel</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Teams that need a <strong className="text-green-600">backend partner for agencies</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Agencies that want a cleaner client-facing system</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Agencies that can sell but need technical fulfillment</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Teams that want long-term support after launch</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Agencies that want a <strong className="text-green-600">white-label technical partner</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">Teams that need <strong className="text-green-600">GoHighLevel API developer</strong> expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why is there an activation fee?</h3>
              <p className="text-gray-700 leading-relaxed">
                It covers discovery, technical planning, scope alignment, and the start of development.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why is there a pre-launch fee?</h3>
              <p className="text-gray-700 leading-relaxed">
                It confirms the project before launch and covers the final build, testing, and deployment preparation phase.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why is there a 12-month term?</h3>
              <p className="text-gray-700 leading-relaxed">
                Because this is a technical partnership model, not just a one-time setup. The system is built, launched, supported, and improved through an annual engagement.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is the web app fully paid upfront?</h3>
              <p className="text-gray-700 leading-relaxed">
                No. The model is structured so the value of the build and technical partnership is distributed across the first year.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What is included in the monthly partnership?</h3>
              <p className="text-gray-700 leading-relaxed">
                Support, maintenance, troubleshooting, minor improvements, and continued technical partnership after launch.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What if we need major new features?</h3>
              <p className="text-gray-700 leading-relaxed">
                Large expansions or major new modules can be scoped separately.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you work with GoHighLevel?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. We specialize as a <strong className="text-blue-600">GoHighLevel API developer</strong> and build custom <strong className="text-blue-600">GHL integrations</strong>, portals, and backend systems that extend beyond standard GHL features.
              </p>
            </div>

            {/* FAQ 8 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is this white-label?</h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. Opervia acts as your <strong className="text-blue-600">white-label technical partner</strong>—we deliver under your agency brand, and your clients never know we exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Ready to Build and Launch With a <span className="text-cyan-300">White-Label Technical Partner</span> Behind You?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              Opervia helps agencies move from generic tools and fragile delivery to structured <strong className="text-white">GoHighLevel-powered systems</strong>, stronger client experiences, and real <strong className="text-white">backend partner support</strong>. We act as your <strong className="text-white">agency fulfillment partner</strong>—you close the deal, we build the system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl">
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Strategy Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  Start the Partnership
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
