'use client'

import Link from "next/link"
import { ArrowRight, Code, Database, Layout, Zap, BookOpen, Headphones, CheckCircle2, Sparkles, Users, TrendingUp, Rocket, Settings, FileText, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
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
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-float">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse-slow" />
              <span className="text-white font-bold text-base tracking-wide">White-Label Technical Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              <span className="text-white">Services That Power Your</span>
              <br />
              <span className="text-white">
                Agency Behind the{' '}
                <span className="relative inline-block">
                  Scenes.
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-gradient" style={{ backgroundSize: '200% auto' }} />
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              We help agencies launch and support custom GoHighLevel-powered systems through a structured backend partnership model.
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
              <Link href="/portfolio">
                <button className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  See What We Build
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Opervia is built for agencies that need more than a one-time hire. We act as the <strong className="text-gray-900">backend partner for agencies</strong>—building custom systems, dashboards, <strong className="text-gray-900">custom client portal development</strong>, GoHighLevel integrations, and backend workflows that help your agency deliver at a higher level.
            </p>
            <p className="text-lg text-gray-600 mt-6 font-medium">
              Instead of forcing agencies to choose between generic software or a large in-house build cost, Opervia offers a third path: a structured technical partnership designed for delivery, launch, and long-term support.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Six service categories that power your agency's technical delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Service 1: GoHighLevel Development */}
            <div className="relative bg-white border-2 border-blue-400 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 pr-14">GoHighLevel Development</h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Real GHL implementation, not just basic setup. We build the backend foundation that powers your agency's service delivery.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Account & backend setup</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Pipelines, opportunities & calendars</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Workflows & automations</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Email/SMS setup & domain config</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-blue-600">
                  → Strong backend foundation for your agency
                </p>
              </div>
            </div>

            {/* Service 2: GHL API Integrations */}
            <div className="relative bg-white border-2 border-purple-400 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 pr-14">GHL API Integrations</h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your technical advantage. We build custom integrations that separate you from standard GHL setup providers.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">GoHighLevel V2 API integrations</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Webhook workflows & custom sync</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Third-party connections</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Custom frontend integration</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-purple-600">
                  → Technical differentiation from competitors
                </p>
              </div>
            </div>

            {/* Service 3: Custom Client Portals */}
            <div className="relative bg-white border-2 border-cyan-400 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center">
                  <Layout className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 pr-14">Custom Client Portals</h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                The visible client-facing outcome. Cleaner experience than raw software menus.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Login-based portals & role dashboards</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Branded client experience</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Lead views & booking tracking</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Reporting & support area</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-cyan-600">
                  → Premium client experience that wows
                </p>
              </div>
            </div>

            {/* Service 4: White-Label Technical Fulfillment */}
            <div className="relative bg-white border-2 border-indigo-400 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-indigo-400 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 pr-14">White-Label Technical Fulfillment</h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your core partner model. We deliver behind the scenes under your agency brand.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Behind-the-scenes delivery</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Technical scoping & implementation</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Fulfillment under your brand</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Revision support & handoff help</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-indigo-600">
                  → Sell with confidence, no dev team needed
                </p>
              </div>
            </div>

            {/* Service 5: SOPs & Training */}
            <div className="relative bg-white border-2 border-green-400 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 pr-14">SOPs & Training</h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                More than just build. We ensure smooth adoption with documentation and training.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">SOP documentation & guides</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Staff usage & onboarding guides</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Recorded walkthroughs</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Live training & admin handoff</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-green-600">
                  → Better adoption, less confusion
                </p>
              </div>
            </div>

            {/* Service 6: Support & Optimization */}
            <div className="relative bg-white border-2 border-orange-400 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 pr-14">Support & Optimization</h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Long-term value. We stay involved after the initial build with ongoing support.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Technical support & bug fixes</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Automation troubleshooting</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Portal & dashboard updates</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Maintenance retainers & optimization</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-orange-600">
                  → Ongoing partnership, not one-and-done
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Services Connect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              How It All Connects
            </h2>
            
            <div className="relative">
              {/* Flow Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 -translate-y-1/2 hidden md:block" />
              
              {/* Flow Steps */}
              <div className="grid md:grid-cols-5 gap-6 relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg relative z-10">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">GHL Foundation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg relative z-10">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">API + Automations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg relative z-10">
                    <Layout className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">Client Portal</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg relative z-10">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">SOP/Handoff</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg relative z-10">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">Ongoing Optimization</p>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-8 text-lg">
              This is your complete delivery system—from backend to client-facing experience.
            </p>
          </div>
        </div>
      </section>

      {/* What We Can Build */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What We Can Build
            </h2>
            <p className="text-xl text-gray-600">
              Real use cases across different verticals
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {/* Agency Ops */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Agency Ops</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Agency client portal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Internal operations portal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Admin dashboard</span>
                </li>
              </ul>
            </div>

            {/* Client Experience */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-100">
              <h3 className="text-lg font-bold text-purple-600 mb-4">Client Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Real estate lead dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Contractor quote system</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Travel inquiry dashboard</span>
                </li>
              </ul>
            </div>

            {/* Internal Team Systems */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-cyan-100">
              <h3 className="text-lg font-bold text-cyan-600 mb-4">Internal Team Systems</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Clinic workflow portal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Role-based reporting system</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">Custom team dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
              Built for Agencies That Need a Technical Backbone
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Best results happen when you already have client demand and want stronger delivery.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Best Fit */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-7 h-7" />
                  Best Fit
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Agency owners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Marketers & closers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Consultants & niche experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Teams that can sell but need technical fulfillment</span>
                  </li>
                </ul>
              </div>

              {/* Not Ideal */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
                  <span className="w-7 h-7 flex items-center justify-center bg-red-600 text-white rounded-full text-lg">✕</span>
                  Not Ideal Fit
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-0.5 flex-shrink-0">•</span>
                    <span>Cheap one-off setup seekers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-0.5 flex-shrink-0">•</span>
                    <span>Clients who only want templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-0.5 flex-shrink-0">•</span>
                    <span>Businesses looking only for VA-level support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Opervia */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
              Why Agencies Work With Opervia
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              This model beats in-house hiring and generic software
            </p>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
              <div className="grid md:grid-cols-3 divide-x divide-gray-200">
                {/* In-House */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">In-House Hire</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✕</span>
                      <span>$100k+ per developer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✕</span>
                      <span>3-6 months to hire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✕</span>
                      <span>Management overhead</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✕</span>
                      <span>Risk of bad hires</span>
                    </li>
                  </ul>
                </div>

                {/* Generic Tools */}
                <div className="p-8 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">Generic Tools</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">~</span>
                      <span>Fast to start</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✕</span>
                      <span>Weak differentiation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✕</span>
                      <span>Looks like competitors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✕</span>
                      <span>Limited customization</span>
                    </li>
                  </ul>
                </div>

                {/* Opervia */}
                <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                  <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">Opervia</h3>
                  <ul className="space-y-3 text-gray-700 text-sm font-medium">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Custom + fast delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>White-label flexibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Ongoing support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No hiring risk</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">No need to hire a full in-house tech team</h4>
                  <p className="text-gray-600 text-sm">Get expert technical delivery without the overhead</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Stronger technical delivery</h4>
                  <p className="text-gray-600 text-sm">Custom systems that differentiate your agency</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Better client-facing experience</h4>
                  <p className="text-gray-600 text-sm">Portals and dashboards that wow your clients</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Structured handoff and training</h4>
                  <p className="text-gray-600 text-sm">SOPs and documentation for smooth adoption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              How We Work
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                <h3 className="font-bold text-gray-900 mb-2">Discovery & Scoping</h3>
                <p className="text-sm text-gray-600">We learn about your agency, clients, and goals</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                <h3 className="font-bold text-gray-900 mb-2">System Planning</h3>
                <p className="text-sm text-gray-600">We design a solution tailored to your needs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                <h3 className="font-bold text-gray-900 mb-2">Build & Implementation</h3>
                <p className="text-sm text-gray-600">We build your system with regular check-ins</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
                <h3 className="font-bold text-gray-900 mb-2">Handoff & Support</h3>
                <p className="text-sm text-gray-600">We launch and provide ongoing support</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/how-it-works" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2">
                See Full Process
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900/90 via-blue-900/85 to-purple-900/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse-slow" />
              <span className="text-white font-bold text-base">Ready to Scale?</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Need a Technical Team Behind Your Agency?
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              We help agencies deliver stronger systems through <strong>GoHighLevel development</strong>, custom portals, backend infrastructure, and white-label technical fulfillment.
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
                  Talk About Your Build
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
