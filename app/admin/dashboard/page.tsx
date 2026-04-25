import { createClient } from '@/lib/supabase/server'
import { FileText, Briefcase, Users, Calendar } from 'lucide-react'

export default async function AdminDashboardPage() {
  const supabase = createClient()

  // Fetch counts
  const [
    { count: blogCount },
    { count: portfolioCount },
    { count: leadsCount },
    { count: bookingsCount }
  ] = await Promise.all([
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
    supabase.from('portfolio_items').select('*', { count: 'exact', head: true }),
    supabase.from('leads').select('*', { count: 'exact', head: true }),
    supabase.from('bookings').select('*', { count: 'exact', head: true })
  ])

  // Fetch recent leads
  const { data: recentLeads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5)

  const stats = [
    {
      name: 'Blog Posts',
      value: blogCount || 0,
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      href: '/admin/blog'
    },
    {
      name: 'Portfolio Items',
      value: portfolioCount || 0,
      icon: Briefcase,
      color: 'from-purple-500 to-purple-600',
      href: '/admin/portfolio'
    },
    {
      name: 'Total Leads',
      value: leadsCount || 0,
      icon: Users,
      color: 'from-green-500 to-green-600',
      href: '/admin/leads'
    },
    {
      name: 'Bookings',
      value: bookingsCount || 0,
      icon: Calendar,
      color: 'from-orange-500 to-orange-600',
      href: '/admin/calendar'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <a
              key={stat.name}
              href={stat.href}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </a>
          )
        })}
      </div>

      {/* Recent Leads */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Leads</h2>
          <a
            href="/admin/leads"
            className="text-sm font-medium text-infra-blue hover:underline"
          >
            View All
          </a>
        </div>

        {recentLeads && recentLeads.length > 0 ? (
          <div className="space-y-4">
            {recentLeads.map((lead) => (
              <div
                key={lead.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{lead.name}</p>
                  <p className="text-sm text-gray-600">{lead.email}</p>
                  {lead.company && (
                    <p className="text-sm text-gray-500">{lead.company}</p>
                  )}
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    lead.status === 'new' ? 'bg-blue-100 text-blue-800' :
                    lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                    lead.status === 'qualified' ? 'bg-purple-100 text-purple-800' :
                    lead.status === 'proposal' ? 'bg-orange-100 text-orange-800' :
                    lead.status === 'won' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {lead.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">No leads yet</p>
        )}
      </div>
    </div>
  )
}
