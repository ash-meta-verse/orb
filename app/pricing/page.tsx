"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, HelpCircle } from "lucide-react"

export default function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(true)

  // Calculate annual price (monthly × 12 months × 0.9 for 10% discount)
  const calculateAnnualPrice = (monthlyPrice: string) => {
    const numericPrice = Number.parseFloat(monthlyPrice.replace(/[^0-9.]/g, ""))
    if (isNaN(numericPrice)) return monthlyPrice

    // For prices with "+" sign, keep the plus
    const hasPlus = monthlyPrice.includes("+")
    const annualPrice = Math.round(numericPrice * 12 * 0.9)
    return `$${annualPrice}${hasPlus ? "+" : ""}`
  }

  const pricingTiers = [
    {
      name: "Starter Plan",
      description: "Perfect for new creators and businesses needing consistent, quality content.",
      monthlyPrice: "$350",
      features: [
        "8 Social media posts (carousel, quote, reels cover)",
        "2 Short-form videos (up to 30 seconds)",
        "1 Ad creative setup",
        "Caption copywriting + Hashtag set",
        "1 revision round",
        "Delivery within 10 days",
      ],
    },
    {
      name: "Growth Plan",
      description: "For brands ready to scale their reach and convert leads through content + ads.",
      monthlyPrice: "$750",
      features: [
        "12 Content pieces (mix of carousels, reels, stories)",
        "4 Short-form videos (branded)",
        "2 Ad creatives + campaign setup",
        "Strategy call (30 min/month)",
        "2 revision rounds",
        "Delivery within 7 days",
      ],
      highlighted: true,
    },
    {
      name: "Scale Plan",
      description: "For serious brands needing hands-free social & ad growth.",
      monthlyPrice: "$1,200+",
      features: [
        "20+ content pieces/month (planned calendar)",
        "6–8 Reels or TikToks with editing",
        "4 Ads with A/B testing",
        "Monthly reporting + dashboard",
        "Priority support",
        "Delivery within 5 days",
      ],
    },
  ]

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
            Social media marketing packages designed to build your brand, attract your audience, and drive measurable
            growth.
          </p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center items-center mb-12">
            <span
              className={`text-lg font-medium mr-4 cursor-pointer transition-colors duration-300 ${
                isMonthly ? "text-primary font-bold" : "text-muted-foreground"
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </span>
            <div
              className="relative inline-block w-16 h-8 rounded-full bg-primary/20 cursor-pointer"
              onClick={() => setIsMonthly(!isMonthly)}
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-primary transition-transform duration-300 ${
                  isMonthly ? "left-1" : "left-9"
                }`}
              ></div>
            </div>
            <span
              className={`text-lg font-medium ml-4 cursor-pointer transition-colors duration-300 ${
                !isMonthly ? "text-primary font-bold" : "text-muted-foreground"
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Annual{" "}
              <span
                className={`text-xs font-medium transition-colors duration-300 ${
                  !isMonthly ? "text-primary bg-primary/10 px-2 py-1 rounded-full" : "text-primary"
                }`}
              >
                Save 10%
              </span>
            </span>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
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
                <p className="text-muted-foreground mb-6">{tier.description}</p>

                <div className="mb-6">
                  <p className="text-3xl font-bold">
                    {isMonthly ? tier.monthlyPrice : calculateAnnualPrice(tier.monthlyPrice)}
                    <span className="text-sm font-normal text-muted-foreground">{isMonthly ? "/month" : "/year"}</span>
                  </p>
                  {isMonthly ? (
                    <p className="text-sm text-primary">Switch to annual for 10% savings</p>
                  ) : (
                    <p className="text-sm text-primary">You save 10% with annual billing</p>
                  )}
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
                description: "Scalable social media solutions that integrate with your existing marketing strategies.",
                features: [
                  "White-label content creation",
                  "Multi-platform management",
                  "Client presentation materials",
                  "Rush delivery options",
                  "Dedicated account manager",
                ],
                cta: "Agency Solutions",
              },
              {
                audience: "Content Creators",
                description: "Consistent, high-quality content to grow your platform and engage your audience.",
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
                description: "Cost-effective social media solutions to build your brand and drive business growth.",
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
          <h2 className="text-3xl font-bold mb-6">What's Included in Every Social Media Package</h2>
          <p className="text-muted-foreground text-lg">
            No matter which package you choose, you'll receive these premium services and benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Content Strategy & Planning",
              description:
                "Strategic content planning aligned with your brand goals and target audience engagement patterns.",
            },
            {
              title: "Professional Design & Creation",
              description:
                "High-quality visual content creation including graphics, carousels, and short-form video content.",
            },
            {
              title: "Copywriting & Hashtags",
              description:
                "Engaging captions and strategic hashtag research to maximize your content's reach and engagement.",
            },
            {
              title: "Ad Creative Development",
              description:
                "Professional ad creatives designed to convert, with strategic campaign setup and optimization.",
            },
            {
              title: "Performance Tracking",
              description: "Regular monitoring and reporting on content performance and social media growth metrics.",
            },
            {
              title: "Brand Consistency",
              description:
                "Consistent visual identity and messaging across all your social media platforms and content.",
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
                question: "Why should I choose a monthly package instead of annual billing?",
                answer:
                  "Monthly packages offer flexibility with a month-to-month commitment. Annual billing provides a 10% discount and is ideal for businesses committed to long-term social media growth. Choose monthly if you prefer flexibility, or annual if you want to save and are committed to consistent social media marketing.",
              },
              {
                question: "What happens if I need to make changes after the revision rounds?",
                answer:
                  "We strive to get your content right within the included revision rounds. If additional revisions are needed, we offer them at an hourly rate. For clients on monthly packages, we're often more flexible with revisions as part of our ongoing relationship.",
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
                question: "What's your payment structure for monthly and annual packages?",
                answer:
                  "Monthly packages are billed at the beginning of each month. Annual packages are billed upfront for the entire year, offering a 10% discount compared to monthly billing. Both options require a minimum 3-month commitment to ensure we can develop a consistent strategy and workflow.",
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
            Schedule a consultation to discuss your social media needs and find the perfect package for your business.
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
