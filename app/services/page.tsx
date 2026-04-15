'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Code, Database, Gauge, Headphones, Lock, Rocket } from "lucide-react"
import { WaveDivider } from "@/components/wave-divider"
import { AnimatedGradient, FloatingBlobs, DotPattern } from "@/components/animated-background"
import { ScrollReveal, FadeIn, ScaleIn } from "@/components/scroll-reveal"
import { motion } from "framer-motion"


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
        <section className="relative py-20 overflow-hidden">
          <AnimatedGradient />
          <FloatingBlobs />
          <DotPattern />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                What We Build
              </h1>
              <p className="text-lg text-muted-foreground">
                Custom technical systems that make your agency look like a tech company
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <Card className="hover-lift hover-glow h-full">
                    <CardHeader>
                      <service.icon className="h-12 w-12 text-primary mb-4 animate-float" />
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
                </ScrollReveal>
              ))}
            </div>

            <FadeIn delay={0.8}>
              <div className="mt-20 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 text-gradient">Not Sure What You Need?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Book a discovery call and we'll help you figure out the best solution for your agency
                </p>
                <Link href="/contact">
                  <Button size="lg" className="hover-lift">
                    Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
          <WaveDivider variant="wave3" className="text-background" />
        </section>
      </main>
      <Footer />
    </>
  )
}
