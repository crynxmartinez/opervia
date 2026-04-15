import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Portfolio | Case Studies",
  description: "See how Opervia has helped agencies build custom technical systems, client portals, and fulfillment infrastructure.",
  keywords: ["gohighlevel case studies", "custom portal examples", "agency technical solutions"],
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Portfolio & Use Cases
              </h1>
              <p className="text-lg text-muted-foreground">
                Real examples of custom systems we've built for agencies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Real Estate Lead Dashboard</CardTitle>
                  <CardDescription>Custom agent portal with lead pipeline management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built for a real estate agency managing 500+ leads/month. Agents couldn't track leads in crowded CRM.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Solution:</strong> Custom agent portal with lead pipeline, appointment booking, and performance metrics</p>
                    <p><strong>Backend:</strong> GHL workflows, SMS/email automation</p>
                    <p><strong>Result:</strong> 40% faster lead response time, 25% higher close rate</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clinic Follow-Up Portal</CardTitle>
                  <CardDescription>Patient management and automated follow-up system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Medical clinic needed better patient follow-up and appointment management.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Solution:</strong> Custom patient portal with appointment scheduling and automated reminders</p>
                    <p><strong>Backend:</strong> GHL automation, calendar integration</p>
                    <p><strong>Result:</strong> 60% reduction in no-shows, improved patient satisfaction</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contractor Quote System</CardTitle>
                  <CardDescription>Automated quoting and project management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Home services contractor needed faster quote generation and project tracking.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Solution:</strong> Custom quote portal with automated pricing and project dashboard</p>
                    <p><strong>Backend:</strong> GHL workflows, payment integration</p>
                    <p><strong>Result:</strong> 3x faster quote delivery, 50% more conversions</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Agency Client Dashboard</CardTitle>
                  <CardDescription>White-label reporting and analytics platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Marketing agency needed branded client reporting without manual work.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Solution:</strong> Custom dashboard with automated reporting and KPI tracking</p>
                    <p><strong>Backend:</strong> GHL data, API integrations, automated reports</p>
                    <p><strong>Result:</strong> 10 hours/week saved, higher client retention</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
