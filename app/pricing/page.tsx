import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, HelpCircle } from "lucide-react"

export default function PricingPage() {
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
            Premium content creation and advertising packages designed to build your brand and drive measurable results
            for your business.
          </p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center items-center mb-12">
            <span className="text-lg font-medium mr-4">Monthly</span>
            <div className="relative inline-block w-16 h-8 rounded-full bg-primary/20">
              <div className="absolute left-1 top-1 w-6 h-6 rounded-full bg-primary transition-transform"></div>
            </div>
            <span className="text-lg font-medium ml-4">One-time</span>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Plan",
                tagline: "Establish Your Brand",
                description: "Ideal for new businesses and consultants aiming to build a consistent online presence.",
                price: "$500",
                monthlyPrice: "$350",
                features: [
                  "8 social media posts (carousel, quote, and value formats)",
                  "2 short-form videos (≤ 30 sec)",
                  "1 advertising creative setup",
                  "Caption writing and hashtag research",
                  "1 round of revisions",
                  "Delivery: Within 10 business days",
                ],
              },
              {
                name: "Growth Plan",
                tagline: "Drive Visibility & Leads",
                description:
                  "Recommended for growing service brands aiming to combine content and advertising for lead generation.",
                price: "$950",
                monthlyPrice: "$750",
                features: [
                  "12 content pieces (visuals, carousels, reels, stories)",
                  "4 branded short-form videos",
                  "2 ad campaigns (setup & creative)",
                  "Monthly content planning session",
                  "2 rounds of revisions",
                  "Delivery: Within 7 business days",
                ],
                highlighted: true,
              },
              {
                name: "Scale Plan",
                tagline: "Full-Funnel Growth Execution",
                description: "Tailored for established businesses scaling their inbound marketing and ad reach.",
                price: "Custom",
                monthlyPrice: "$1,200+",
                features: [
                  "20+ content pieces/month",
                  "6–8 edited short-form videos",
                  "4 paid media creatives with A/B testing",
                  "Strategic performance reporting",
                  "Priority communication",
                  "Dedicated content manager",
                  "Delivery: Within 5 business days",
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
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <p className="text-primary font-medium mb-3">{tier.tagline}</p>
                <p className="text-muted-foreground mb-6">{tier.description}</p>

                <div className="mb-6">
                  <p className="text-3xl font-bold">
                    {tier.monthlyPrice}
                    <span className="text-sm font-normal text-muted-foreground">/month</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    or {tier.price} {tier.price === "Custom" ? "(based on scope)" : "one-time payment"}
                  </p>
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
                  "Scalable content creation solutions that integrate with your existing marketing strategies.",
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
                description: "Cost-effective content solutions to build your brand and drive business growth.",
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
              title: "Professional Content Creation",
              description:
                "High-quality content creation with professional tools, experienced creators, and modern techniques.",
            },
            {
              title: "Strategic Approach",
              description:
                "Content aligned with your business objectives and designed to achieve specific, measurable results.",
            },
            {
              title: "Creative Direction",
              description:
                "Expert creative guidance to ensure your content stands out and effectively communicates your message.",
            },
            {
              title: "Post-Production Excellence",
              description: "Professional editing, color grading, sound design, and graphics to elevate your content.",
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
                question: "Why should I choose a monthly package instead of one-time production?",
                answer:
                  "Monthly packages offer several advantages: consistent content delivery, cost savings compared to individual productions, ongoing strategy refinement, and the ability to build a cohesive content library over time. They're ideal for businesses committed to making content a core part of their marketing strategy.",
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
                question: "What's your payment structure for monthly packages?",
                answer:
                  "Monthly packages are billed at the beginning of each month. We require a 3-month minimum commitment for monthly packages to ensure we can develop a consistent strategy and production workflow.",
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
            Schedule a consultation to discuss your content creation needs and find the perfect package for your
            business.
          </p>
          <Link href="/book-call">
            <Button size="lg" variant="secondary" className="group" toBookCall>
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
