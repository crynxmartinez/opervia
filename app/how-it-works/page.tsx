'use client'

import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { WaveDivider } from "@/components/wave-divider"
import { AnimatedGradient, FloatingBlobs, GridPattern } from "@/components/animated-background"
import { ScrollReveal, FadeIn } from "@/components/scroll-reveal"
import { motion } from "framer-motion"


export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="relative py-20 overflow-hidden">
          <AnimatedGradient />
          <GridPattern />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                How It Works
              </h1>
              <p className="text-lg text-muted-foreground">
                Simple, structured, and designed for results
              </p>
            </motion.div>

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
              ].map((item, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.15}>
                  <Card className="relative hover-lift">
                    <div className="absolute -left-4 top-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold animate-pulse-slow">
                      {item.step}
                    </div>
                    <CardHeader className="pl-12">
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-12">
                      <ul className="space-y-2">
                        {item.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
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
