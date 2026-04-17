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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-infra-sky/60 via-infra-blue/70 to-infra-teal/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-infra-blue/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-infra-teal/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
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
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-infra-blue via-infra-deep-blue to-infra-teal rounded-full animate-gradient" style={{ backgroundSize: '200% auto' }} />
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              Opervia offers structured backend partnership plans for agencies that need custom systems, GoHighLevel integration, dashboards, and ongoing technical support.
            </p>

            {/* Supporting line */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto italic">
              You close the client. We build the system behind your service.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="#pricing-cards">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-infra-blue to-infra-deep-blue text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl hover:shadow-infra-blue/50">
                  <span className="relative z-10 flex items-center gap-2">
                    View Plans
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-infra-deep-blue to-infra-violet/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </a>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  Book a Call
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

      {/* SECTION 3: Comparison Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Compare Partnership Plans
            </h2>
            <p className="text-xl text-gray-600">
              Detailed feature breakdown for each partnership level
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xl">
              <thead>
                <tr className="bg-gradient-to-r from-gray-800 to-gray-900">
                  <th className="px-6 py-4 text-left text-white font-bold">Feature</th>
                  <th className="px-6 py-4 text-center text-white font-bold">Starter Partner</th>
                  <th className="px-6 py-4 text-center text-white font-bold bg-purple-600">Core Partner ⭐</th>
                  <th className="px-6 py-4 text-center text-white font-bold">Custom Partnership</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">To Start</td>
                  <td className="px-6 py-4 text-center text-gray-900">$5,000</td>
                  <td className="px-6 py-4 text-center bg-purple-50 font-semibold text-gray-900">$5,000</td>
                  <td className="px-6 py-4 text-center text-gray-900">Custom</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">Monthly</td>
                  <td className="px-6 py-4 text-center text-gray-900">$3,000/month</td>
                  <td className="px-6 py-4 text-center bg-purple-50 font-semibold text-gray-900">$5,000/month</td>
                  <td className="px-6 py-4 text-center text-gray-900">Custom</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">Contract Term</td>
                  <td className="px-6 py-4 text-center text-gray-900">12 months</td>
                  <td className="px-6 py-4 text-center bg-purple-50 font-semibold text-gray-900">12 months</td>
                  <td className="px-6 py-4 text-center text-gray-900">Custom</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">Website</td>
                  <td className="px-6 py-4 text-center text-gray-700">4 core pages + blog</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">4 core pages + blog</td>
                  <td className="px-6 py-4 text-center text-gray-700">Custom</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">Admin Dashboard</td>
                  <td className="px-6 py-4 text-center text-gray-700">Included</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">Included</td>
                  <td className="px-6 py-4 text-center text-gray-700">Included</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">Client Dashboard</td>
                  <td className="px-6 py-4 text-center text-gray-700">Included</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">Included</td>
                  <td className="px-6 py-4 text-center text-gray-700">Included</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">Main Integration</td>
                  <td className="px-6 py-4 text-center text-gray-700">GoHighLevel</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">GoHighLevel</td>
                  <td className="px-6 py-4 text-center text-gray-700">GoHighLevel or custom stack</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">Additional Integrations</td>
                  <td className="px-6 py-4 text-center text-gray-700">Up to 3</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">Up to 10</td>
                  <td className="px-6 py-4 text-center text-gray-700">Custom</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">Client-Side Features</td>
                  <td className="px-6 py-4 text-center text-gray-700">Up to 5</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">Up to 10</td>
                  <td className="px-6 py-4 text-center text-gray-700">Custom</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">Admin Access</td>
                  <td className="px-6 py-4 text-center text-gray-700">Unlimited</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">Unlimited</td>
                  <td className="px-6 py-4 text-center text-gray-700">Unlimited</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">Client Access</td>
                  <td className="px-6 py-4 text-center text-gray-700">Unlimited</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">Unlimited</td>
                  <td className="px-6 py-4 text-center text-gray-700">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">Admin Dashboard Features</td>
                  <td className="px-6 py-4 text-center text-gray-700">Starter set</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">Full set</td>
                  <td className="px-6 py-4 text-center text-gray-700">Custom</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">SEO Keyword Targeting</td>
                  <td className="px-6 py-4 text-center text-gray-700">3 keywords</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">5 keywords</td>
                  <td className="px-6 py-4 text-center text-gray-700">Custom</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">Feature Revisions / Month</td>
                  <td className="px-6 py-4 text-center text-gray-700">Up to 3</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">Up to 5</td>
                  <td className="px-6 py-4 text-center text-gray-700">Custom</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">Support Level</td>
                  <td className="px-6 py-4 text-center text-gray-700">Standard support</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">Dedicated support manager</td>
                  <td className="px-6 py-4 text-center text-gray-700">Priority / custom support</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">Strategy Calls / Month</td>
                  <td className="px-6 py-4 text-center text-gray-700">2</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">3</td>
                  <td className="px-6 py-4 text-center text-gray-700">Custom</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">First-Month Weekly Calls</td>
                  <td className="px-6 py-4 text-center text-gray-700">Included</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">Included</td>
                  <td className="px-6 py-4 text-center text-gray-700">Included</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">A2P Support for US</td>
                  <td className="px-6 py-4 text-center text-gray-700">Included</td>
                  <td className="px-6 py-4 text-center bg-purple-50 text-gray-700">Included</td>
                  <td className="px-6 py-4 text-center text-gray-700">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: What's Included in Every Plan */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Included in All Partnership Plans
            </h2>
            <p className="text-xl text-gray-600">
              Every plan includes the full foundation—no matter which level you choose
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Website foundation</p>
                  <p className="text-sm text-gray-600">4 core pages + blog</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Admin dashboard</p>
                  <p className="text-sm text-gray-600">Control center for your agency</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Client dashboard</p>
                  <p className="text-sm text-gray-600">Branded client experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">GoHighLevel as the main integration</p>
                  <p className="text-sm text-gray-600">Backend engine</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Database setup</p>
                  <p className="text-sm text-gray-600">Secure data structure</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Authentication and access control</p>
                  <p className="text-sm text-gray-600">Role-based permissions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Core security setup</p>
                  <p className="text-sm text-gray-600">Enterprise-grade protection</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Launch support</p>
                  <p className="text-sm text-gray-600">Guided deployment</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">A2P support guidance for US-based SMS compliance</p>
                  <p className="text-sm text-gray-600">SMS compliance help</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">First-month weekly strategy meetings</p>
                  <p className="text-sm text-gray-600">Intensive onboarding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our partnership plans
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <details className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold text-gray-900">Why is there a $5,000 starting fee?</h3>
                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The activation fee covers discovery, technical scoping, architecture planning, GHL integration roadmap, and development kickoff. This ensures we build the right system for your agency from day one.
              </p>
            </details>

            <details className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold text-gray-900">Why is there a 12-month term?</h3>
                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Building a complete custom system takes time. The 12-month term ensures we can deliver a fully functional, tested, and optimized system—not a rushed setup. It also allows for ongoing improvements and support as your agency grows.
              </p>
            </details>

            <details className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold text-gray-900">What's the difference between Starter and Core?</h3>
                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Starter is for lean launches with up to 5 client-side features and 3 additional integrations. Core is for agencies that need more room to grow—up to 10 client-side features, 10 additional integrations, a dedicated support manager, and more monthly feature revisions.
              </p>
            </details>

            <details className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold text-gray-900">What counts as a client-side feature?</h3>
                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                A client-side feature is any functionality your clients interact with—like a lead view, booking system, document upload, report dashboard, workflow tracker, or custom form. We'll help you prioritize which features matter most for your offer.
              </p>
            </details>

            <details className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold text-gray-900">What counts as an integration?</h3>
                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                An integration is a connection between your system and an external platform—like Stripe, Calendly, Zapier, Google Sheets, or a custom API. GoHighLevel is included as the main integration in all plans.
              </p>
            </details>

            <details className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold text-gray-900">What admin dashboard features are included?</h3>
                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Starter includes core admin features like client management, analytics, and support inbox. Core includes the full set—advanced reporting, team controls, login-as-client, notifications, and more. We'll customize based on your agency's needs.
              </p>
            </details>

            <details className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold text-gray-900">What happens after the first year?</h3>
                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                After 12 months, you can renew your partnership, upgrade to a higher tier, or transition to a custom support plan. We'll work with you to ensure continuity and ongoing optimization.
              </p>
            </details>

            <details className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold text-gray-900">When should I choose Custom Partnership?</h3>
                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Choose Custom if you need more than 10 integrations, advanced multi-layered systems, custom tech stacks beyond GoHighLevel, or specialized workflows. We'll build a tailored solution around your exact requirements.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 6: Final CTA */}
      <section className="py-24 bg-gradient-to-br from-infra-blue via-infra-deep-blue to-infra-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Help Choosing the Right Plan?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              We'll help you decide whether Starter, Core, or a Custom Partnership fits your agency best based on your current offer, client volume, and growth goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
                  Book a Strategy Call
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-10 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300">
                  Talk to Us
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
