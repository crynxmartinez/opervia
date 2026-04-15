'use client'

import React from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function AgencyPartnerPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your White-Label Technical Partner for Agency Growth
              </h1>
              <p className="text-lg text-muted-foreground">
                Agencies don't need to hire a full internal tech team to offer powerful backend systems and custom software-like solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Who This Is For</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>✓ Agency owners</p>
                  <p>✓ Marketers</p>
                  <p>✓ Closers</p>
                  <p>✓ Consultants</p>
                  <p>✓ Niche experts</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What We Handle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>✓ Backend architecture</p>
                  <p>✓ Technical setup</p>
                  <p>✓ Automations & portals</p>
                  <p>✓ Dashboards & SOPs</p>
                  <p>✓ Support</p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-center">Why This Model Works</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">You Handle:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Leads & sales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Relationships</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Niche expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Account management</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">We Handle:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>System architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Integrations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Technical support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Partner?</h2>
                <p className="text-muted-foreground mb-6">
                  Book a partner call to discuss how we can support your agency
                </p>
                <Link href="/contact">
                  <Button size="lg">
                    Book a Partner Call <ArrowRight className="ml-2 h-4 w-4" />
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
