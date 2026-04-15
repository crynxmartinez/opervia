'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Code, Database, Gauge, Lock, Rocket, Users, Zap, CheckCircle2, X } from "lucide-react"
import { WaveDivider } from "@/components/wave-divider"
import { AnimatedGradient, FloatingBlobs, DotPattern } from "@/components/animated-background"
import { ScrollReveal, FadeIn, ScaleIn } from "@/components/scroll-reveal"
import { motion } from "framer-motion"


export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <AnimatedGradient />
          <FloatingBlobs />
          <DotPattern />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                You Close the Deal. <br />
                <span className="text-gradient">We Build the System.</span> <br />
                They See the Magic.
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                White-label technical partner for agencies. We build custom portals, dashboards, and backend systems using GoHighLevel API—so your clients think you're a tech company.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto hover-lift">
                    Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto hover-lift">
                    See What We Build
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          <WaveDivider variant="wave1" className="text-muted/30" />
        </section>

        {/* The Problem Section */}
        <section className="relative py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Agencies Are Stuck Between Two Bad Options
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ScrollReveal direction="left" delay={0.1}>
                <Card className="border-destructive/50 hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">Option 1: Generic Software</CardTitle>
                      <X className="h-6 w-6 text-destructive" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-muted-foreground">❌ Clients get lost in menus</p>
                    <p className="text-muted-foreground">❌ Low adoption rates</p>
                    <p className="text-muted-foreground">❌ High churn</p>
                    <p className="text-muted-foreground">❌ Looks like everyone else</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <Card className="border-destructive/50 hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">Option 2: Hire Developers</CardTitle>
                      <X className="h-6 w-6 text-destructive" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-muted-foreground">❌ Expensive ($80k+/year)</p>
                    <p className="text-muted-foreground">❌ Slow to deliver</p>
                    <p className="text-muted-foreground">❌ Risky hires</p>
                    <p className="text-muted-foreground">❌ Hard to manage</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
            <FadeIn delay={0.4}>
              <div className="text-center mt-12">
                <p className="text-2xl font-semibold text-gradient animate-pulse-slow">There's a third way.</p>
              </div>
            </FadeIn>
          </div>
          <WaveDivider variant="wave2" flip={true} className="text-background" />
        </section>

        {/* What We Do Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  We're Your White-Label Technical Backbone
                </h2>
                <p className="text-lg text-muted-foreground">
                  Partner with us to deliver custom software-grade systems without the overhead
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <ScaleIn delay={0.1}>
                <Card className="hover-lift hover-glow h-full">
                  <CardHeader>
                    <Database className="h-12 w-12 text-primary mb-4 animate-float" />
                    <CardTitle>Backend Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      GHL automations, workflows, API integrations, and database architecture
                    </p>
                  </CardContent>
                </Card>
              </ScaleIn>
              <ScaleIn delay={0.2}>
                <Card className="hover-lift hover-glow h-full">
                  <CardHeader>
                    <Gauge className="h-12 w-12 text-primary mb-4 animate-float" />
                    <CardTitle>Custom Client-Facing Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Portals, dashboards, and branded experiences your clients actually use
                    </p>
                  </CardContent>
                </Card>
              </ScaleIn>
              <ScaleIn delay={0.3}>
                <Card className="hover-lift hover-glow h-full">
                  <CardHeader>
                    <Rocket className="h-12 w-12 text-primary mb-4 animate-float" />
                    <CardTitle>Ongoing Fulfillment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Support, updates, optimization, and SOPs to keep everything running
                    </p>
                  </CardContent>
                </Card>
              </ScaleIn>
            </div>
          </div>
          <WaveDivider variant="curve" className="text-muted/30" />
        </section>

        {/* Why This Model Works */}
        <section className="relative py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Agency Backbone Model
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">You Handle:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p>Sales & client relationships</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p>Niche expertise</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p>Account management</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">We Handle:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p>System architecture</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p>Development & integrations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p>Technical support & SOPs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center">Result:</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span>Faster delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span>Higher perceived value</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span>Better client retention</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span>Stronger margins</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Build Section */}
        <section className="relative py-20">
          <FloatingBlobs />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Build
              </h2>
              <p className="text-lg text-muted-foreground">
                Custom systems that make your agency look like a tech company
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Lock, title: "Custom Client Portals", desc: "Branded login systems with role-based access" },
                { icon: Gauge, title: "Real-Time Dashboards", desc: "Live metrics and performance tracking" },
                { icon: Zap, title: "Workflow Automations", desc: "Backend processes that run on autopilot" },
                { icon: Users, title: "Branded Login Systems", desc: "Professional authentication experiences" },
                { icon: Code, title: "Reporting Layers", desc: "Custom analytics and data visualization" },
                { icon: Database, title: "Internal Tools", desc: "Team dashboards and management systems" },
              ].map((item, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <Card className="hover-lift hover-glow h-full">
                    <CardHeader>
                      <item.icon className="h-10 w-10 text-primary mb-2" />
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple, structured, and designed for results
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                { step: "1", title: "Discovery", desc: "We map your workflow and client needs" },
                { step: "2", title: "Build", desc: "We create the backend + custom frontend" },
                { step: "3", title: "Deliver", desc: "We hand off with SOPs, training, and support" },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Who This Is For
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                "Marketing agencies offering done-for-you services",
                "Consultants productizing their expertise",
                "Niche experts (real estate, legal, clinics)",
                "Agency owners who can sell but can't build",
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <p className="text-center">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Not Just Hire a Developer?
              </h2>
            </div>
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left font-semibold"></th>
                    <th className="p-4 text-left font-semibold">In-House Dev</th>
                    <th className="p-4 text-left font-semibold">Freelancer</th>
                    <th className="p-4 text-left font-semibold text-primary">Opervia</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Cost", inhouse: "$80k+/year", freelancer: "$50-150/hr", opervia: "Retainer" },
                    { label: "Speed", inhouse: "Slow", freelancer: "Inconsistent", opervia: "Fast" },
                    { label: "GHL Expertise", inhouse: "Rare", freelancer: "Hit or miss", opervia: "Core focus" },
                    { label: "Ongoing Support", inhouse: "You manage", freelancer: "Gone after project", opervia: "Included" },
                    { label: "White-Label", inhouse: "Maybe", freelancer: "No", opervia: "Yes" },
                  ].map((row, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-4 font-medium">{row.label}</td>
                      <td className="p-4 text-muted-foreground">{row.inhouse}</td>
                      <td className="p-4 text-muted-foreground">{row.freelancer}</td>
                      <td className="p-4 text-primary font-semibold">{row.opervia}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <AnimatedGradient />
          <DotPattern />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                  Let's Build the System Behind Your Service
                </h2>
                <p className="text-lg text-muted-foreground">
                  Schedule a discovery call to see how we can help your agency deliver stronger systems
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="hover-lift">
                    Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
