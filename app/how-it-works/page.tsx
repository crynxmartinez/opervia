import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works | Our Process",
  description: "Discover how Opervia partners with agencies to build custom technical systems. Simple, structured process from discovery to delivery.",
  keywords: ["agency technical process", "white label development process", "gohighlevel implementation"],
}

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                How It Works
              </h1>
              <p className="text-lg text-muted-foreground">
                Simple, structured, and designed for results
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-16">
              {[
                {
                  step: "1",
                  title: "Discovery Call",
                  description: "We start by understanding your agency model and client needs",
                  details: [
                    "Understand your agency model",
                    "Map current workflow",
                    "Identify technical gaps",
                    "Define success metrics"
                  ]
                },
                {
                  step: "2",
                  title: "System Blueprint",
                  description: "We design the technical architecture for your solution",
                  details: [
                    "What stays in GHL backend",
                    "What gets custom-built",
                    "User roles and permissions",
                    "Integration requirements",
                    "Timeline and milestones"
                  ]
                },
                {
                  step: "3",
                  title: "Build Phase",
                  description: "We develop your custom system while keeping you updated",
                  details: [
                    "Backend setup (GHL automations, workflows, API)",
                    "Custom frontend (portal, dashboard, login)",
                    "Database architecture",
                    "Testing and QA"
                  ]
                },
                {
                  step: "4",
                  title: "Handoff & Training",
                  description: "We ensure your team knows how to use and manage the system",
                  details: [
                    "SOPs and documentation",
                    "Video walkthroughs",
                    "Team training",
                    "Client onboarding templates"
                  ]
                },
                {
                  step: "5",
                  title: "Ongoing Partnership",
                  description: "We continue supporting and improving your system",
                  details: [
                    "Monthly retainer support",
                    "Bug fixes and updates",
                    "Feature additions",
                    "Performance optimization"
                  ]
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Risk Reversal</CardTitle>
                  <CardDescription>What if it doesn't work?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Milestone-based delivery (you see progress)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Revision rounds included</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>No lock-in contracts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Clear success metrics upfront</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6">
                Book a discovery call to discuss your agency's technical needs
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Book a Call <ArrowRight className="ml-2 h-4 w-4" />
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
