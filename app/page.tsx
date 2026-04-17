import Link from "next/link"
import { ArrowRight, Code, Rocket, Zap, CheckCircle2, Users, TrendingUp, Sparkles, AlertTriangle } from "lucide-react"
import { pexelsImages } from "@/lib/pexels"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section with Pexels Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={pexelsImages.hero}
            alt="Modern office"
            className="w-full h-full object-cover"
          />
          {/* Darker, Refined Overlay for Better Contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/75 to-purple-900/80" />
          
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-animate opacity-10" />
          
          {/* Floating Particles */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Premium Badge - Larger, Brighter, Clearer */}
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-float">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse-slow" />
                <span className="text-white font-bold text-sm sm:text-base tracking-wide">White-Label Technical Partner</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Main Heading with Text Shadow for Crispness */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              <span className="text-white">You Close the Deal.</span>
              <br />
              <span className="text-white">
                We Build the{' '}
                <span className="relative inline-block">
                  System.
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full animate-gradient" style={{ backgroundSize: '200% auto' }} />
                </span>
              </span>
            </h1>

            {/* Subheading - Brighter, Benefit-Focused */}
            <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              White-label technical partner for agencies. We build custom systems, portals, dashboards, and backend workflows—<strong className="text-white">so you can deliver like a real technical team without hiring one in-house.</strong>
            </p>

            {/* CTA Buttons - Stronger Design */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/50">
                  <span className="relative z-10 flex items-center gap-2">
                    See How It Works
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  Book a Strategy Call
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-glow" />
          </div>
        </div>
      </section>

      {/* Problem Section - REDESIGNED */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Impactful Header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Agencies Are Stuck Between Two Bad Options
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Generic software that limits you, or expensive in-house development.
            </p>
          </div>

          {/* Premium Problem Cards with AlertTriangle */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {/* Card 1 - The Software Trap */}
            <div className="relative bg-white border-l-4 border-red-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-red-200">
              {/* Premium AlertTriangle Badge */}
              <div className="absolute top-5 right-5 animate-pulse-slow">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg rotate-0 hover:rotate-12 transition-transform">
                  <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Punchy Card Title */}
              <h3 className="text-2xl font-bold mb-6 text-gray-900 pr-14">Option 1: Generic Software</h3>
              
              {/* Impactful Bullet Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed font-medium">Crowded systems that feel generic</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed font-medium">Limited customization options</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed font-medium">Clients feel the limitations</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed font-medium">Hard to differentiate from competitors</p>
                </div>
              </div>
              
              {/* Enhanced Background with Danger Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 to-orange-50/40 rounded-2xl -z-10" />
              <div className="absolute inset-0 bg-red-500/5 rounded-2xl -z-10" />
            </div>

            {/* Card 2 - The Hiring Trap */}
            <div className="relative bg-white border-l-4 border-red-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-red-200">
              {/* Premium AlertTriangle Badge */}
              <div className="absolute top-5 right-5 animate-pulse-slow">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg rotate-0 hover:rotate-12 transition-transform">
                  <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Punchy Card Title */}
              <h3 className="text-2xl font-bold mb-6 text-gray-900 pr-14">Option 2: Hire Developers</h3>
              
              {/* Impactful Bullet Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed font-medium">$100K+ per developer annually</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed font-medium">6+ months to build a team</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed font-medium">Management overhead and complexity</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed font-medium">Turnover risk and recruiting costs</p>
                </div>
              </div>
              
              {/* Enhanced Background with Danger Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 to-orange-50/40 rounded-2xl -z-10" />
              <div className="absolute inset-0 bg-red-500/5 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Premium "Third Way" Solution Block */}
          <div className="max-w-4xl mx-auto">
            {/* Impactful Transition Statement */}
            <div className="text-center mb-6">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 animate-gradient" style={{ backgroundSize: '200% auto' }}>
                The Third Option: Opervia
              </p>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                A white-label technical partner and backend partner for agencies.
              </p>
            </div>

            {/* Premium Solution Card with Sparkles */}
            <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-transparent rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-gradient" style={{ backgroundSize: '200% auto' }} />
              
              {/* Premium Sparkles Badge */}
              <div className="absolute top-5 right-5 z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl animate-float">
                  <Sparkles className="w-7 h-7 text-white animate-pulse-slow" strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Punchy Title */}
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pr-16 animate-gradient" style={{ backgroundSize: '200% auto' }}>
                We Become Your Backend Technical Partner
              </h3>
              
              {/* Benefit-Focused Bullets with Sparkles */}
              <div className="grid md:grid-cols-2 gap-5 relative z-10">
                <div className="flex items-start gap-3 group/item">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-800 leading-relaxed font-semibold">Backend partner for agencies without hiring in-house</p>
                </div>
                <div className="flex items-start gap-3 group/item">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-800 leading-relaxed font-semibold">Custom systems built around your actual service</p>
                </div>
                <div className="flex items-start gap-3 group/item">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-800 leading-relaxed font-semibold">White-label delivery under your brand</p>
                </div>
                <div className="flex items-start gap-3 group/item">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-800 leading-relaxed font-semibold">Ongoing support after launch as your agency fulfillment partner</p>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section with Pexels Background */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={pexelsImages.team}
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        {/* Animated Blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We're Your White-Label Technical Backbone
            </h2>
            <p className="text-xl text-gray-600">
              Expert development resources that seamlessly integrate with GoHighLevel, all under your agency's brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover-lift border-t-4 border-blue-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Custom Client Portals</h3>
                <p className="text-gray-600">
                  Deliver a branded, intuitive experience with custom dashboards and reporting that wow your clients.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover-lift border-t-4 border-purple-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">GHL API Development</h3>
                <p className="text-gray-600">
                  Extend GoHighLevel's functionality with bespoke integrations and automation tailored to your needs.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover-lift border-t-4 border-green-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fulfillment Systems</h3>
                <p className="text-gray-600">
                  Streamline operations with automated client onboarding, task management, and reporting systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-animate" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Partner With Opervia?
            </h2>
            <p className="text-xl text-gray-600">
              We empower agencies to scale without the overhead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Benefit 1 */}
            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Scale Your Offerings</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Expand your service portfolio without the overhead of hiring an in-house development team.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Maintain Brand Control</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  All solutions are white-labeled, ensuring your brand remains front and center with your clients.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Get your custom solutions delivered quickly without compromising on quality or functionality.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Access a team of experienced developers specialized in GoHighLevel and modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-gradient-animate" style={{ backgroundSize: '200% 200%' }} />
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Agency?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with Opervia and unlock new possibilities for your clients and your business.
          </p>
          <Link href="/contact">
            <button className="group relative px-10 py-5 bg-white text-blue-600 rounded-lg font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">
                Book Your Free Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Opervia</h3>
              <p className="text-sm text-gray-400">
                White-label technical partner for agencies building the future.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:text-white transition-colors">Custom Portals</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">GHL Development</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Fulfillment Systems</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="/agency-partner" className="hover:text-white transition-colors">For Agencies</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Get Started</h4>
              <p className="text-sm mb-4">
                Ready to transform your agency?
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                Book a call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Opervia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
