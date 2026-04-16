'use client'

import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, Tag, TrendingUp, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Scale Your Agency with White-Label Technical Partners",
      excerpt: "Discover why top agencies are partnering with technical teams instead of hiring in-house developers. Learn the cost savings, time benefits, and how to choose the right partner.",
      category: "Agency Growth",
      author: "Opervia Team",
      date: "April 15, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      slug: "scale-agency-white-label-partners",
      featured: true
    },
    {
      id: 2,
      title: "GoHighLevel Custom Development: Beyond Templates",
      excerpt: "Why generic GHL snapshots limit your agency's potential and how custom development unlocks premium pricing and better client retention.",
      category: "Technical",
      author: "Opervia Team",
      date: "April 12, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      slug: "gohighlevel-custom-development",
      featured: true
    },
    {
      id: 3,
      title: "The Real Cost of Hiring vs. Partnering for Agency Tech",
      excerpt: "A detailed breakdown comparing the total cost of hiring developers vs. partnering with a white-label technical team. The numbers might surprise you.",
      category: "Business Strategy",
      author: "Opervia Team",
      date: "April 10, 2026",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
      slug: "cost-hiring-vs-partnering",
      featured: false
    },
    {
      id: 4,
      title: "Building Client Portals That Increase Retention by 40%",
      excerpt: "How custom client portals improve communication, showcase value, and dramatically reduce churn for agency clients.",
      category: "Client Success",
      author: "Opervia Team",
      date: "April 8, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      slug: "client-portals-retention",
      featured: false
    },
    {
      id: 5,
      title: "API Integrations: Connecting Your Agency's Tech Stack",
      excerpt: "Learn how to integrate multiple tools seamlessly and create automated workflows that save hours of manual work every week.",
      category: "Technical",
      author: "Opervia Team",
      date: "April 5, 2026",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      slug: "api-integrations-tech-stack",
      featured: false
    },
    {
      id: 6,
      title: "From $5K to $15K/Month: Premium Agency Positioning",
      excerpt: "How custom systems and technical differentiation allow agencies to charge 3x more than competitors using generic tools.",
      category: "Agency Growth",
      author: "Opervia Team",
      date: "April 3, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop",
      slug: "premium-agency-positioning",
      featured: false
    }
  ]

  const categories = ["All", "Agency Growth", "Technical", "Business Strategy", "Client Success"]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold">Insights & Resources</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Opervia Blog
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Strategies, insights, and technical guides for agencies scaling with custom systems and white-label partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  category === "All"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 cursor-pointer">
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">📝</div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Latest Articles</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 cursor-pointer h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-blue-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl">📄</div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Agency Growth Insights
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to receive strategies, case studies, and technical guides for scaling your agency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>

            <p className="text-white/60 text-sm mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
