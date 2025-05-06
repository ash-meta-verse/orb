import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, BarChart, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Tailored video production and social media strategies for different audiences and needs.
          </p>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="container mx-auto px-4 py-12 md:py-16 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Solution 1: Agencies & Brands */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
            {/* Card Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95 z-10"></div>

            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Agencies & Brands"
                fill
                className="object-cover opacity-60"
              />
            </div>

            {/* Content */}
            <div className="relative z-20 p-8 h-full flex flex-col">
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <BarChart className="h-6 w-6 text-primary" />
              </div>

              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                For Agencies & Brands
              </h2>

              <p className="text-muted-foreground mb-6 flex-grow">
                End-to-end campaign management, high-value deliverables, and quick turnaround times for agencies and
                established brands.
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Content creation & management
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Paid media campaigns
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Analytics & reporting
                </li>
              </ul>

              <Link href="/solutions/agencies-brands" className="mt-auto">
                <Button className="w-full group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center w-full transition-transform group-hover:translate-x-[-8px]">
                    Explore Solution
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-4" />
                  </span>
                  <span className="absolute inset-0 bg-primary z-0 translate-y-[105%] group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Solution 2: Creators */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
            {/* Card Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95 z-10"></div>

            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Creators"
                fill
                className="object-cover opacity-60"
              />
            </div>

            {/* Content */}
            <div className="relative z-20 p-8 h-full flex flex-col">
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Users className="h-6 w-6 text-primary" />
              </div>

              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">For Creators</h2>

              <p className="text-muted-foreground mb-6 flex-grow">
                Personal branding, content creation, and monetization strategies to help creators grow their audience
                and revenue.
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Audience growth strategies
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Content production & editing
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Monetization optimization
                </li>
              </ul>

              <Link href="/solutions/creators" className="mt-auto">
                <Button className="w-full group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center w-full transition-transform group-hover:translate-x-[-8px]">
                    Explore Solution
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-4" />
                  </span>
                  <span className="absolute inset-0 bg-primary z-0 translate-y-[105%] group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Solution 3: Entrepreneurs */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
            {/* Card Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95 z-10"></div>

            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Entrepreneurs"
                fill
                className="object-cover opacity-60"
              />
            </div>

            {/* Content */}
            <div className="relative z-20 p-8 h-full flex flex-col">
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Rocket className="h-6 w-6 text-primary" />
              </div>

              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">For Entrepreneurs</h2>

              <p className="text-muted-foreground mb-6 flex-grow">
                Cost-effective solutions to build your online presence, generate leads, and drive sales through
                strategic social media.
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Brand building & positioning
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Lead generation campaigns
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  ROI-focused content
                </li>
              </ul>

              <Link href="/solutions/entrepreneurs" className="mt-auto">
                <Button className="w-full group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center w-full transition-transform group-hover:translate-x-[-8px]">
                    Explore Solution
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-4" />
                  </span>
                  <span className="absolute inset-0 bg-primary z-0 translate-y-[105%] group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Sure Which Solution Is Right For You?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Schedule a free consultation and we'll help you find the perfect solution for your specific needs.
          </p>
          <Link href="/book-call">
            <Button size="lg" variant="secondary" className="group">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
