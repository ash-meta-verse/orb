import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Play, BarChart, Target, Rocket } from "lucide-react"

export default function EntrepreneursPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Video Production for{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Entrepreneurs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build your brand, generate leads, and drive sales with strategic video content that delivers measurable
              results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-call">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio/short-video">
                <Button size="lg" variant="outline" className="group">
                  View Our Work
                  <Play className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Entrepreneur video production"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Entrepreneurs Choose FrameStory</h2>
            <p className="text-muted-foreground text-lg">
              We understand the unique challenges entrepreneurs face. Our video production services are designed to help
              you build your brand and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ROI-Focused Content",
                description:
                  "We create video content that not only looks great but delivers measurable business results and clear return on investment.",
                icon: <BarChart className="h-10 w-10 text-primary" />,
              },
              {
                title: "Strategic Approach",
                description:
                  "Every video we produce is aligned with your business goals, whether that's lead generation, sales, or brand building.",
                icon: <Target className="h-10 w-10 text-primary" />,
              },
              {
                title: "Scalable Solutions",
                description:
                  "Our production packages grow with your business, providing premium quality at every stage of your entrepreneurial journey.",
                icon: <Rocket className="h-10 w-10 text-primary" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Services for Entrepreneurs</h2>
          <p className="text-muted-foreground text-lg">
            Premium video production services designed to help entrepreneurs build their brand and grow their business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Brand Story Videos",
              description:
                "Compelling videos that communicate your brand's mission, values, and unique selling proposition to build trust with your audience.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Authentic storytelling approach",
                "Professional interview techniques",
                "Emotional connection focus",
                "Multiple platform deliverables",
              ],
            },
            {
              title: "Product & Service Videos",
              description:
                "Clear, engaging videos that showcase your offerings, demonstrate value, and drive conversions.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Benefit-focused messaging",
                "Professional demonstrations",
                "Conversion-optimized structure",
                "Call-to-action integration",
              ],
            },
            {
              title: "Lead Generation Content",
              description:
                "Strategic video content designed to capture leads and move prospects through your sales funnel.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Landing page videos",
                "Educational content series",
                "Webinar production",
                "Lead magnet videos",
              ],
            },
            {
              title: "Social Media Content",
              description:
                "Platform-optimized video content that builds your brand presence and engages your target audience.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Platform-specific formats",
                "Consistent posting packages",
                "Engagement-focused content",
                "Audience growth strategies",
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-background hover:border-primary/50 transition-colors duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/book-call">
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Premium Packages for Entrepreneurs</h2>
            <p className="text-muted-foreground text-lg">
              Cost-effective yet premium video production packages designed to deliver maximum value for entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Startup Essentials",
                price: "$2,500",
                description: "Perfect for entrepreneurs just beginning to leverage video in their business.",
                features: [
                  "Brand story video (60-90 seconds)",
                  "3 social media edits",
                  "Basic SEO optimization",
                  "1 revision round",
                  "Delivery within 2 weeks",
                ],
              },
              {
                title: "Growth Accelerator",
                price: "$5,000",
                description: "Comprehensive package for entrepreneurs ready to scale their video marketing efforts.",
                features: [
                  "Brand story video (90-120 seconds)",
                  "Product/service showcase video",
                  "5 social media edits",
                  "Advanced SEO optimization",
                  "2 revision rounds",
                  "Delivery within 3 weeks",
                  "30-day social media strategy",
                ],
                highlighted: true,
              },
              {
                title: "Premium Authority",
                price: "$8,500",
                description: "All-inclusive package for entrepreneurs looking to establish industry authority.",
                features: [
                  "Brand story video (2-3 minutes)",
                  "Product/service showcase video",
                  "Customer testimonial video",
                  "10 social media edits",
                  "Comprehensive SEO strategy",
                  "Unlimited revision rounds",
                  "Delivery within 4 weeks",
                  "60-day content calendar",
                  "Performance analytics report",
                ],
              },
            ].map((package_, index) => (
              <div
                key={index}
                className={`bg-background p-8 rounded-lg border ${package_.highlighted ? "border-primary shadow-lg" : "border-border/50"} transition-shadow duration-300 hover:shadow-md relative`}
              >
                {package_.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{package_.title}</h3>
                <p className="text-3xl font-bold mb-2">{package_.price}</p>
                <p className="text-muted-foreground mb-6">{package_.description}</p>

                <h4 className="font-semibold mb-3">Includes:</h4>
                <ul className="space-y-2 mb-6">
                  {package_.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/book-call">
                  <Button variant={package_.highlighted ? "default" : "outline"} className="w-full group">
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

      {/* ROI Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">The ROI of Professional Video</h2>
          <p className="text-muted-foreground text-lg">
            Our video production services are an investment that delivers measurable returns for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=800&width=1200" alt="Video ROI" fill className="object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">How Our Videos Drive Business Results</h3>

            <div className="space-y-6">
              {[
                {
                  title: "Increased Conversion Rates",
                  description:
                    "Our clients see an average 80% increase in conversion rates when using professional video on landing pages and product pages.",
                },
                {
                  title: "Higher Engagement",
                  description:
                    "Videos increase time on site by an average of 88%, giving you more opportunity to connect with potential customers.",
                },
                {
                  title: "Improved SEO Performance",
                  description:
                    "Websites with video are 53 times more likely to reach the first page of Google search results.",
                },
                {
                  title: "Enhanced Trust & Credibility",
                  description:
                    "92% of consumers say that video helps them make purchasing decisions and builds trust in a brand.",
                },
              ].map((point, index) => (
                <div key={index}>
                  <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Entrepreneur Success Stories</h2>
            <p className="text-muted-foreground text-lg">
              See how we've helped entrepreneurs build their brands and grow their businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                entrepreneur: "Sarah Johnson",
                business: "Wellness Coaching",
                description:
                  "Helped Sarah establish her personal brand and generate leads for her coaching business through strategic video content.",
                results: [
                  "215% increase in qualified leads",
                  "Reduced cost per acquisition by 40%",
                  "Established industry authority position",
                ],
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                entrepreneur: "Michael Chen",
                business: "SaaS Startup",
                description:
                  "Created product videos and customer testimonials that helped Michael's SaaS startup acquire new customers and reduce churn.",
                results: [
                  "68% increase in trial signups",
                  "Reduced demo-to-customer time by 35%",
                  "Secured $1.2M in additional funding",
                ],
                image: "/placeholder.svg?height=600&width=800",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-background rounded-lg overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.entrepreneur}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {story.business}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{story.entrepreneur}</h3>
                  <p className="text-muted-foreground mb-6">{story.description}</p>

                  <h4 className="font-semibold mb-3">Results:</h4>
                  <ul className="space-y-2 mb-6">
                    {story.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/portfolio/short-video">
                    <Button variant="outline" className="group">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio/short-video">
              <Button size="lg" className="group">
                View More Success Stories
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/*  />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">What Entrepreneurs Say</h2>
          <p className="text-muted-foreground text-lg">
            Hear from the entrepreneurs who have transformed their businesses with our video production services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Investing in professional video with FrameStory was one of the best business decisions I've made. The ROI has been incredible, and the quality sets me apart from competitors.",
              author: "David Rodriguez",
              business: "E-commerce Founder",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              quote:
                "What impressed me most was how they translated my business vision into compelling visual content. The videos have become central to my marketing strategy.",
              author: "Jennifer Lee",
              business: "Financial Consultant",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              quote:
                "As a startup founder, every dollar counts. FrameStory delivered premium quality that justified the investment and has paid dividends in customer acquisition.",
              author: "Mark Thompson",
              business: "Tech Startup Founder",
              image: "/placeholder.svg?height=200&width=200",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </div>
              <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business with Video?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Let's create strategic video content that builds your brand, generates leads, and drives sales.
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
