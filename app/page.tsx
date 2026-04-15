import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Rocket, Zap, CheckCircle2, Users, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Pexels Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Modern office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              You Close the Deal.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                We Build the System.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              White-label technical partner for agencies. We build custom portals, dashboards, and backend systems—so your clients think you're a tech company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Book a Strategy Call <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black">
                  See What We Build
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Agencies Are Stuck Between Two Bad Options
            </h2>
            <p className="text-xl text-gray-600">
              Generic software or expensive developers. There's a third way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-between">
                  Option 1: Generic Software
                  <span className="text-red-500">✗</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span> Clients get lost in menus
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span> Low adoption rates
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span> High churn
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span> Looks like everyone else
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-between">
                  Option 2: Hire Developers
                  <span className="text-red-500">✗</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span> Expensive ($80k+/year)
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span> Slow to deliver
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span> Risky hires
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span> Hard to manage
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              There's a third way.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section with Pexels Image */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We're Your White-Label Technical Backbone
            </h2>
            <p className="text-xl text-gray-600">
              Expert development resources that seamlessly integrate with GoHighLevel, all under your agency's brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-500">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Custom Client Portals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Deliver a branded, intuitive experience with custom dashboards and reporting that wow your clients.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-purple-500">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">GHL API Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Extend GoHighLevel's functionality with bespoke integrations and automation tailored to your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-green-500">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Fulfillment Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Streamline operations with automated client onboarding, task management, and reporting systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Partner With Opervia?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Scale Your Offerings</h3>
                <p className="text-gray-600 text-lg">
                  Expand your service portfolio without the overhead of hiring an in-house development team.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Maintain Brand Control</h3>
                <p className="text-gray-600 text-lg">
                  All solutions are white-labeled, ensuring your brand remains front and center with your clients.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
                <p className="text-gray-600 text-lg">
                  Get your custom solutions delivered quickly without compromising on quality or functionality.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-600 text-lg">
                  Access a team of experienced developers specialized in GoHighLevel and modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Agency?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Partner with Opervia and unlock new possibilities for your clients and your business.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100">
              Book Your Free Consultation <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Opervia</h3>
              <p className="text-sm">
                White-label technical partner for agencies building the future.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:text-white">Custom Portals</Link></li>
                <li><Link href="/services" className="hover:text-white">GHL Development</Link></li>
                <li><Link href="/services" className="hover:text-white">Fulfillment Systems</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="/agency-partner" className="hover:text-white">For Agencies</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-sm">
                Ready to transform your agency?
                <br />
                <Link href="/contact" className="text-blue-400 hover:text-blue-300">Get in touch →</Link>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Opervia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
