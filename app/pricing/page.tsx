"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, HelpCircle } from "lucide-react"

export default function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(false)

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transparent{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Premium video production packages designed to deliver exceptional quality and measurable results for your
            business.
          </p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center items-center mb-12">
            <span
              className={`text-lg font-medium mr-4 transition-colors duration-300 ${isMonthly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsMonthly(!isMonthly)}
              className={`relative inline-block w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
                isMonthly ? "bg-primary/80" : "bg-primary/20"
              }`}
              aria-pressed={isMonthly}
              role="switch"
              aria-label="Toggle pricing"
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                  isMonthly ? "left-1" : "left-9"
                }`}
              ></div>
            </button>
            <span
              className={`text-lg font-medium ml-4 transition-colors duration-300 ${!isMonthly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Yearly
            </span>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                description: "Perfect for businesses just beginning to leverage video in their marketing strategy.",
                monthlyDescription: "Flexible monthly plan with no long-term commitment.",
                yearlyDescription: "Save 20% with our annual plan for consistent video content.",
                price: "$15,000",
                monthlyPrice: "$1,500",
                features: [
                  "1 premium video per month",
                  "Up to 90 seconds in length",
                  "3 social media edits",
                  "Basic SEO optimization",
                  "1 revision round",
                  "Delivery within 2 weeks",
                ],
              },
              {
                name: "Professional",
                description:
                  "Comprehensive package for businesses ready to fully integrate video into their marketing.",
                monthlyDescription: "Our most popular monthly option for growing businesses.",
                yearlyDescription: "Our best value annual plan with priority service and extra benefits.",
                price: "$35,000",
                monthlyPrice: "$3,500",
                features: [
                  "2 premium videos per month",
                  "Up to 3 minutes in length",
                  "5 social media edits",
                  "Advanced SEO optimization",
                  "2 revision rounds",
                  "Delivery within 10 days",
                  "Monthly strategy session",
                  "Performance analytics",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                description: "All-inclusive package for businesses with extensive video content needs.",
                monthlyDescription: "Comprehensive monthly solution for enterprise-level video needs.",
                yearlyDescription: "Maximum savings and benefits with our premium annual enterprise plan.",
                price: "$75,000+",
                monthlyPrice: "$7,500+",
                features: [
                  "4+ premium videos per month",
                  "Custom video lengths",
                  "10+ social media edits",
                  "Comprehensive SEO strategy",
                  "Unlimited revision rounds",
                  "Priority delivery timeline",
                  "Dedicated account manager",
                  "Quarterly strategy planning",
                  "Advanced performance analytics",
                  "Custom distribution strategy",
                ],
              },
            ].map((tier, index) => (
              <div
                key={index}
                className={`bg-background p-8 rounded-lg border ${tier.highlighted ? "border-primary shadow-lg" : "border-border/50"} transition-shadow duration-300 hover:shadow-md relative`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-4">{tier.description}</p>

                {/* Plan-specific description */}
                <p
                  className={`text-sm text-muted-foreground mb-6 transition-all duration-500 ${isMonthly ? "opacity-100" : "opacity-0 absolute"}`}
                >
                  {tier.monthlyDescription}
                </p>
                <p
                  className={`text-sm text-muted-foreground mb-6 transition-all duration-500 ${!isMonthly ? "opacity-100" : "opacity-0 absolute"}`}
                >
                  {tier.yearlyDescription}
                </p>

                <div className="mb-6 h-24">
                  <div className="h-12 relative">
                    {/* Monthly price */}
                    <div
                      className={`transition-all duration-500 absolute inset-0 ${
                        isMonthly ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                      }`}
                    >
                      <p className="text-3xl font-bold">
                        {tier.monthlyPrice}
                        <span className="text-sm font-normal text-muted-foreground">/month</span>
                      </p>
                    </div>

                    {/* Yearly price */}
                    <div
                      className={`transition-all duration-500 absolute inset-0 ${
                        !isMonthly ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                      }`}
                    >
                      <p className="text-3xl font-bold">
                        {tier.price}
                        <span className="text-sm font-normal text-muted-foreground">/year</span>
                      </p>
                    </div>
                  </div>

                  {/* Secondary price option */}
                  <div className="mt-4">
                    {isMonthly && (
                      <p className="text-sm text-muted-foreground transition-all duration-500 opacity-100">
                        or {tier.price}/year (save 20%)
                      </p>
                    )}
                    {!isMonthly && (
                      <p className="text-sm text-muted-foreground transition-all duration-500 opacity-100">
                        or {tier.monthlyPrice}/month
                      </p>
                    )}
                  </div>
                </div>

                <h4 className="font-semibold mb-3">What's included:</h4>
                <ul className="space-y-2 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/book-call">
                  <Button variant={tier.highlighted ? "default" : "outline"} className="w-full group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom solution? We offer tailored packages to meet your specific needs.
            </p>
            <Link href="/book-call">
              <Button variant="outline" className="group">
                Request Custom Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Audience-Specific Pricing */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Tailored Solutions for Your Needs</h2>
            <p className="text-muted-foreground text-lg">
              We offer specialized packages designed for different audience segments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                audience: "Agencies & Brands",
                description:
                  "Scalable video production solutions that integrate with your existing marketing strategies.",
                features: [
                  "White-label production services",
                  "Multi-project discounts",
                  "Client presentation materials",
                  "Rush delivery options",
                  "Dedicated account manager",
                ],
                cta: "Agency Solutions",
              },
              {
                audience: "Content Creators",
                description: "Consistent, high-quality video content to grow your platform and engage your audience.",
                features: [
                  "Platform-optimized content",
                  "Growth-focused strategy",
                  "Revenue share options",
                  "Regular content schedules",
                  "Trend analysis and implementation",
                ],
                cta: "Creator Packages",
              },
              {
                audience: "Entrepreneurs",
                description: "Cost-effective video solutions to build your brand and drive business growth.",
                features: [
                  "ROI-focused content",
                  "Lead generation optimization",
                  "Flexible payment options",
                  "Growth-stage pricing",
                  "Business strategy integration",
                ],
                cta: "Entrepreneur Plans",
              },
            ].map((segment, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{segment.audience}</h3>
                <p className="text-muted-foreground mb-6">{segment.description}</p>

                <h4 className="font-semibold mb-3">Specialized Features:</h4>
                <ul className="space-y-2 mb-6">
                  {segment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/solutions/${segment.audience
                    .toLowerCase()
                    .replace(/\s+&\s+/g, "-")
                    .replace(/\s+/g, "-")}`}
                >
                  <Button variant="outline" className="w-full group">
                    Explore {segment.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">What's Included in Every Package</h2>
          <p className="text-muted-foreground text-lg">
            No matter which package you choose, you'll receive these premium services and benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Professional Production",
              description:
                "High-quality video production with professional equipment, experienced crew, and cinematic techniques.",
            },
            {
              title: "Strategic Approach",
              description:
                "Content aligned with your business objectives and designed to achieve specific, measurable results.",
            },
            {
              title: "Creative Direction",
              description:
                "Expert creative guidance to ensure your videos stand out and effectively communicate your message.",
            },
            {
              title: "Post-Production Excellence",
              description:
                "Professional editing, color grading, sound design, and motion graphics to elevate your content.",
            },
            {
              title: "Platform Optimization",
              description:
                "Content optimized for the platforms where your audience engages most, ensuring maximum impact.",
            },
            {
              title: "Rights Management",
              description:
                "Full ownership of all content created for your brand, with clear licensing for music and assets.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border border-border/50 rounded-lg hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our pricing and packages.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Why should I choose a yearly package instead of monthly?",
                answer:
                  "Yearly packages offer several advantages: significant cost savings (20% off monthly rates), consistent content delivery, priority service, and the ability to build a cohesive video library over time. They're ideal for businesses committed to making video a core part of their marketing strategy.",
              },
              {
                question: "What happens if I need to make changes after the revision rounds?",
                answer:
                  "We strive to get your content right within the included revision rounds. If additional revisions are needed, we offer them at an hourly rate. For clients on yearly packages, we're often more flexible with revisions as part of our ongoing relationship.",
              },
              {
                question: "Do you offer discounts for non-profits or educational institutions?",
                answer:
                  "Yes, we offer special pricing for non-profits, educational institutions, and social impact organizations. Please contact us directly to discuss your specific needs and budget.",
              },
              {
                question: "Can I upgrade or downgrade my package later?",
                answer:
                  "Absolutely. Our packages are designed to grow with your business. You can upgrade at any time, and downgrade with 30 days' notice. We'll work with you to ensure your package aligns with your current needs and budget.",
              },
              {
                question: "What's your payment structure for yearly packages?",
                answer:
                  "Yearly packages can be paid in full upfront for maximum savings, or we offer quarterly payment plans. Monthly packages are billed at the beginning of each month with a 3-month minimum commitment.",
              },
              {
                question: "Do you offer rush delivery for time-sensitive projects?",
                answer:
                  "Yes, we offer rush delivery options for an additional fee, depending on current production capacity and the scope of your project. Please inquire about rush options when discussing your project timeline.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border/50 shadow-sm">
                <div className="flex items-start">
                  <HelpCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Have more questions? We're here to help.</p>
            <Link href="/book-call">
              <Button className="group">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Schedule a consultation to discuss your video production needs and find the perfect package for your
            business.
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
