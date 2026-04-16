'use client'

import Link from "next/link"
import { ArrowRight, Sparkles, CheckCircle2, Target, Users, Zap, TrendingUp, Shield, Clock, Award, Rocket, DollarSign, BarChart3, XCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AgencyPartnerPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold">White-Label Technical Partnership</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Your Agency's</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
                Technical Backbone
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              We become your <strong>white-label technical partner</strong>—building custom systems, handling fulfillment, and delivering under your brand so you can <strong>sell bigger and scale faster</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://calendly.com/opervia/strategy-call" target="_blank">
                <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="#how-it-works">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                  See How It Works
                </button>
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>White-Label Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>No Hiring Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Custom Systems</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The Agency Growth Dilemma
            </h2>
            <p className="text-xl text-gray-600">
              You can sell, but scaling delivery is the bottleneck
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hiring is Expensive & Risky</h3>
              <p className="text-gray-700 leading-relaxed">
                $80K-$120K+ per developer, plus recruiting costs, management overhead, and the risk of bad hires or turnover.
              </p>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Freelancers Are Inconsistent</h3>
              <p className="text-gray-700 leading-relaxed">
                Project-based work with no accountability, inconsistent quality, and you're left managing multiple contractors.
              </p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Generic Tools Limit You</h3>
              <p className="text-gray-700 leading-relaxed">
                Templates and basic setups can't deliver the custom systems that differentiate your agency and command premium pricing.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong className="text-gray-900">You need a technical partner</strong> that works behind the scenes, delivers under your brand, and scales with you—without the overhead of building an in-house team.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Opervia Becomes Your Technical Team
            </h2>
            <p className="text-xl text-gray-600">
              White-label partnership model designed for agencies
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What We Build</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Custom GoHighLevel Systems</p>
                    <p className="text-sm text-gray-600">Advanced workflows, automations, and integrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Client Portals & Dashboards</p>
                    <p className="text-sm text-gray-600">Branded interfaces your clients love</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">API Integrations</p>
                    <p className="text-sm text-gray-600">Connect any tool to your tech stack</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Backend Infrastructure</p>
                    <p className="text-sm text-gray-600">Databases, webhooks, and automation engines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">SOPs & Documentation</p>
                    <p className="text-sm text-gray-600">Complete handoff materials for your team</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">How We Work</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">100% White-Label</p>
                    <p className="text-sm text-gray-600">We deliver under your agency brand</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Dedicated Partnership</p>
                    <p className="text-sm text-gray-600">We become your backend technical team</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Ongoing Support</p>
                    <p className="text-sm text-gray-600">12-month partnership with continuous improvements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Fixed Investment</p>
                    <p className="text-sm text-gray-600">Predictable pricing, no surprise costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Your Clients Never Know</p>
                    <p className="text-sm text-gray-600">Seamless integration with your brand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Simple 3-Phase Partnership Model
            </h2>
            <p className="text-xl text-gray-600">
              From discovery to ongoing support—structured for agency success
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Discovery & Build</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We learn your agency's needs, client requirements, and technical goals. Then we build your custom system from the ground up.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">$25,000</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">6-8 weeks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Refinement & Optimization</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We refine the system based on real-world usage, add features, fix issues, and optimize performance until it's perfect.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">$20,000</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">4-6 weeks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Ongoing Partnership</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We become your technical backbone—handling support, updates, improvements, and scaling as your agency grows.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">$5,000/month</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">12-month minimum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-blue-600">Total Year 1 Investment:</strong> $70,000 for a complete custom system + 12 months of dedicated technical support. Less than hiring one junior developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Agencies Choose Opervia
            </h2>
            <p className="text-xl text-gray-600">
              The partnership model that scales with you
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Effective</h3>
              <p className="text-gray-700 leading-relaxed">
                Less than hiring one developer, but you get an entire technical team with specialized expertise.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-purple-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zero Risk</h3>
              <p className="text-gray-700 leading-relaxed">
                No hiring, no management overhead, no turnover risk. We're accountable for delivery and results.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-700 leading-relaxed">
                6-8 weeks to launch vs. 6+ months to hire and onboard an in-house team.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-orange-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-700 leading-relaxed">
                Built specifically for your agency and clients—not generic templates or cookie-cutter setups.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-cyan-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Partnership</h3>
              <p className="text-gray-700 leading-relaxed">
                We grow with you—adding capacity, features, and support as your agency scales.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-pink-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Positioning</h3>
              <p className="text-gray-700 leading-relaxed">
                Custom systems let you charge premium prices and differentiate from competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Ready to Scale Your Agency?
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Book a <strong>free strategy call</strong> to discuss your agency's needs and see if Opervia is the right technical partner for you.
            </p>

            <Link href="https://calendly.com/opervia/strategy-call" target="_blank">
              <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                Book Your Strategy Call
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <p className="text-white/70 mt-6">
              No sales pitch. Just a real conversation about your goals.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
