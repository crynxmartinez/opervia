'use client'

import Link from "next/link"
import { ArrowRight, Code, Database, Layout, Zap, BookOpen, Headphones, CheckCircle2, Sparkles, Users, TrendingUp, Rocket, Settings, FileText, Phone, Globe, LayoutDashboard } from "lucide-react"
import { pexelsImages } from "@/lib/pexels"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={pexelsImages.team}
            alt="Team collaboration"
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
                <span className="text-white font-bold text-sm sm:text-base tracking-wide">12-Month Partnership Model</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              <span className="text-white">We Build Your Agency SaaS</span>
              <br />
              <span className="text-white">
                or Custom Web App
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              We build your agency SaaS or custom web app through a 12-month partnership—and stay as your backend technical partner for ongoing support, updates, and improvements.
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
              <Link href="/portfolio">
                <button className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  See What We Build
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Partner Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Everything Inside Core Partner
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our flagship backend partnership for agencies that need more than setup—custom SaaS platforms, integrations, admin control, client dashboards, and ongoing technical support.
            </p>
          </div>

          {/* Featured Core Partner Block */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-300 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500">
              {/* Premium Badge */}
              <div className="absolute top-6 right-6">
                <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                  <span className="text-white font-bold text-sm">FLAGSHIP OFFER</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Core Partner
                </h3>
                <div className="text-xl text-gray-600 mb-4">
                  Our flagship backend partnership
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
                Built for agencies that need a real backend technical partner. Core Partner includes the full foundation: website, admin dashboard, client dashboard, custom integrations, advanced support, and room for deeper custom delivery of your SaaS platform.
              </p>

              {/* What's Included Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">1 website with 4 core public pages plus blog</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">1 admin dashboard</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">1 client dashboard</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Custom integrations (Stripe, APIs, etc.)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Up to 10 additional integrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Up to 10 client-side features</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Unlimited admins and clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Up to 5 feature revisions per month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Dedicated support manager</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">3 strategy calls per month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">1 weekly strategy meeting during first month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">A2P support guidance for US clients</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    See Pricing Details
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                    Book a Strategy Call
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Five Pillar Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Pillar 1: Website & Frontend */}
            <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <Globe className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900">Website & Frontend</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4 font-medium">A complete front-facing system</p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Home</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">About</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Services</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Pricing</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Blog</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Custom branded UI</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Connected to backend structure</p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Admin Dashboard */}
            <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <LayoutDashboard className="w-10 h-10 text-purple-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900">Admin Dashboard</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4 font-medium">The control center for your agency</p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Analytics / Reports</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Client Management</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Login as Client</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Support Inbox</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Notifications</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Team / Admin Controls</p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Client Dashboard */}
            <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <Users className="w-10 h-10 text-cyan-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900">Client Dashboard</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4 font-medium">The system your client actually uses</p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Branded dashboard</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Role-based access</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Up to 10 client-side features</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Lead, booking, records views</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Reports & workflow views</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Built around your actual offer</p>
                </div>
              </div>
            </div>

            {/* Pillar 4: Custom Integrations */}
            <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <Database className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900">Custom Integrations</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4 font-medium">Connect your SaaS to any platform</p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Stripe, payment processors</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Up to 10 additional integrations</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Workflow & automation connection</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">API / webhook support</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Launch-ready backend structure</p>
                </div>
              </div>
            </div>

            {/* Pillar 5: Support & Partnership */}
            <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <Headphones className="w-10 h-10 text-orange-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900">Support & Partnership</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4 font-medium">Ongoing technical partnership after launch</p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Dedicated support manager</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Up to 5 monthly feature revisions</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">3 strategy calls per month</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">First-month weekly onboarding calls</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Continued support & optimization</p>
                </div>
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
                  <p className="font-semibold text-gray-900 text-sm">Integration Foundation</p>
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
                      <span>High annual developer costs</span>
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
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-6">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse-slow" />
                <span className="text-white font-bold text-sm sm:text-base">Ready to Scale?</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Need a Technical Team Behind Your Agency?
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              We help agencies build and scale their SaaS platforms through <strong>custom development</strong>, client portals, backend infrastructure, and ongoing technical partnership.
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
