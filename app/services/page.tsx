import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Code, Database, Gauge, Headphones, Lock, Rocket } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | What We Build",
  description: "GoHighLevel API development, custom client portals, white-label fulfillment systems, and ongoing technical support for agencies.",
  keywords: ["gohighlevel api developer", "custom client portal development", "white label saas development", "agency fulfillment partner"],
}

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "GoHighLevel API Development",
      description: "Custom systems built on top of GHL backend using API integrations.",
      includes: [
        "Custom dashboards",
        "Private integrations",
        "Workflow-connected apps",
        "Reporting layers",
        "Branded login systems"
      ]
    },
    {
      icon: Lock,
      title: "Custom Client Portals",
      description: "Tailored portals where clients log in to see leads, appointments, reports, and more.",
      includes: [
        "Role-based dashboards",
        "Lead tracking",
        "Appointment management",
        "Custom reports",
        "Mobile-responsive design"
      ]
    },
    {
      icon: Rocket,
      title: "White-Label Fulfillment Systems",
      description: "Complete backend infrastructure for agencies offering productized services.",
      includes: [
        "Automation workflows",
        "Client onboarding sequences",
        "Internal team dashboards",
        "SOPs and training",
        "Support ticketing"
      ]
    },
    {
      icon: Database,
      title: "Backend Infrastructure",
      description: "GHL automations, workflows, and database architecture.",
      includes: [
        "Workflow automation",
        "API integrations",
        "Database design",
        "Third-party connections",
        "Data migration"
      ]
    },
    {
      icon: Gauge,
      title: "Custom Dashboards",
      description: "Real-time metrics and performance tracking for your clients.",
      includes: [
        "Live data visualization",
        "Custom KPI tracking",
        "Automated reporting",
        "Export capabilities",
        "White-label branding"
      ]
    },
    {
      icon: Headphones,
      title: "Technical Support & Retainers",
      description: "Ongoing partnership for updates, fixes, and optimization.",
      includes: [
        "Monthly support hours",
        "Bug fixes",
        "Feature additions",
        "Performance monitoring",
        "Strategic consulting"
      ]
    }
  ]

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                What We Build
              </h1>
              <p className="text-lg text-muted-foreground">
                Custom technical systems that make your agency look like a tech company
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-2 text-sm">What's included:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {service.includes.map((item, j) => (
                            <li key={j}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-20 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Not Sure What You Need?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Book a discovery call and we'll help you figure out the best solution for your agency
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
