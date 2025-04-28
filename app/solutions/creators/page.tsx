import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Play, TrendingUp, Users, Zap } from "lucide-react"

export default function CreatorsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Video Production for{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Creators
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Elevate your content, grow your audience, and monetize your platform with professional video production
              tailored for creators.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-call">
                <Button size="lg" className="group">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio/short-video">
                <Button size="lg" variant="outline" className="group">
                  See Creator Content
                  <Play className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Creator video production"
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
            <h2 className="text-3xl font-bold mb-6">Why Creators Choose FrameStory</h2>
            <p className="text-muted-foreground text-lg">
              We understand the unique challenges creators face in today's competitive landscape. Our tailored video
              production services are designed to help you stand out and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Audience Growth",
                description:
                  "Our content strategies are designed to help you attract new followers and deepen engagement with your existing audience.",
                icon: <Users className="h-10 w-10 text-primary" />,
              },
              {
                title: "Monetization Focus",
                description:
                  "We create content that not only engages but converts, helping you maximize revenue from your platform.",
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
              },
              {
                title: "Platform Optimization",
                description:
                  "Our team stays current with algorithm changes and platform trends to ensure your content performs optimally.",
                icon: <Zap className="h-10 w-10 text-primary" />,
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
          <h2 className="text-3xl font-bold mb-6">Our Services for Creators</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive video production services tailored to help creators grow and monetize their platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Content Strategy & Production",
              description:
                "Develop a consistent content strategy and production schedule that grows your audience and keeps them engaged.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Platform-specific content planning",
                "Trend analysis and implementation",
                "Content calendar development",
                "Regular production schedules",
              ],
            },
            {
              title: "Channel Growth Package",
              description:
                "Comprehensive video production and strategy services designed to accelerate subscriber and follower growth.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Audience analysis and targeting",
                "Thumbnail and title optimization",
                "Growth-focused content creation",
                "Performance analytics and optimization",
              ],
            },
            {
              title: "Monetization Optimization",
              description:
                "Strategic content creation focused on maximizing revenue through sponsorships, affiliate marketing, and platform monetization.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Sponsor-friendly content creation",
                "Integrated product placement",
                "Call-to-action optimization",
                "Conversion tracking and analysis",
              ],
            },
            {
              title: "Brand Partnership Content",
              description:
                "Professional production of sponsored content that satisfies brand partners while maintaining authenticity with your audience.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Brand guideline integration",
                "Authentic storytelling approach",
                "Performance reporting for sponsors",
                "Multi-platform deliverables",
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

      {/* Partnership Models */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Long-Term Partnership Models</h2>
            <p className="text-muted-foreground text-lg">
              We believe in building lasting relationships with creators through flexible partnership models that grow
              with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Monthly Production Package",
                description:
                  "Regular content production on a monthly retainer basis, ensuring consistent quality and publishing schedule.",
                features: [
                  "Guaranteed production slots",
                  "Consistent brand identity",
                  "Flexible content allocation",
                  "Priority scheduling",
                ],
              },
              {
                title: "Revenue Share Model",
                description:
                  "We invest in your content production in exchange for a percentage of revenue, aligning our success with yours.",
                features: [
                  "Reduced upfront costs",
                  "Shared growth incentives",
                  "Performance-based partnership",
                  "Scalable production value",
                ],
              },
              {
                title: "Growth Accelerator",
                description:
                  "A comprehensive package combining production, strategy, and channel optimization to rapidly grow your platform.",
                features: [
                  "Full-service content creation",
                  "Cross-platform optimization",
                  "Audience development strategy",
                  "Monetization consultation",
                ],
              },
            ].map((model, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{model.title}</h3>
                <p className="text-muted-foreground mb-6">{model.description}</p>

                <h4 className="font-semibold mb-3">Includes:</h4>
                <ul className="space-y-2 mb-6">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/book-call">
                  <Button variant="outline" className="w-full group">
                    Explore This Model
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Tools */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Creator Tools & Resources</h2>
          <p className="text-muted-foreground text-lg">
            Beyond production, we provide creators with tools and resources to maximize their content's impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Analytics Dashboard",
              description:
                "Access detailed performance metrics across platforms to understand what content resonates with your audience.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Cross-platform data integration",
                "Content performance tracking",
                "Audience demographic insights",
                "Growth trend analysis",
              ],
            },
            {
              title: "Thumbnail & Title Testing",
              description:
                "Optimize your content's click-through rate with our data-driven thumbnail and title testing system.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "A/B testing framework",
                "Click-through rate optimization",
                "Audience response analysis",
                "Platform-specific recommendations",
              ],
            },
            {
              title: "Content Calendar System",
              description:
                "Stay organized and consistent with our collaborative content planning and scheduling tools.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Visual content pipeline",
                "Publishing schedule management",
                "Team collaboration features",
                "Platform integration",
              ],
            },
            {
              title: "Creator Resource Library",
              description:
                "Access our extensive library of templates, guides, and resources to enhance your content creation process.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Script templates",
                "Editing presets",
                "Trend reports and insights",
                "Platform best practices",
              ],
            },
          ].map((tool, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-background hover:border-primary/50 transition-colors duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={tool.image || "/placeholder.svg"}
                  alt={tool.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{tool.title}</h3>
                <p className="text-muted-foreground mb-6">{tool.description}</p>

                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Creator Success Stories</h2>
            <p className="text-muted-foreground text-lg">
              See how we've helped creators grow their platforms and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                creator: "Alex Rivera",
                platform: "YouTube & TikTok",
                description:
                  "Partnered with Alex to develop a consistent content strategy across platforms, focusing on audience growth and monetization.",
                results: [
                  "Grew from 50K to 500K subscribers in 8 months",
                  "3x increase in average video views",
                  "Secured 5 major brand partnerships",
                ],
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                creator: "Maya Chen",
                platform: "Instagram & YouTube",
                description:
                  "Helped Maya transition from influencer to content creator with a focus on high-quality, consistent video content.",
                results: [
                  "Doubled engagement rate within 3 months",
                  "Increased monthly revenue by 215%",
                  "Successfully launched membership program",
                ],
                image: "/placeholder.svg?height=600&width=800",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-background rounded-lg overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={story.image || "/placeholder.svg"} alt={story.creator} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {story.platform}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{story.creator}</h3>
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
                      View Creator Content
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

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">What Creators Say</h2>
          <p className="text-muted-foreground text-lg">
            Hear from the creators who have partnered with us to grow their platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Working with FrameStory transformed my content and my career. Their strategic approach helped me grow my audience while staying true to my authentic voice.",
              author: "Jamie Lee",
              platform: "YouTube, 1.2M Subscribers",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              quote:
                "The team at FrameStory understands what makes content perform across different platforms. They've been instrumental in helping me build a sustainable creator business.",
              author: "Marcus Johnson",
              platform: "TikTok & Instagram, 3.5M Followers",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              quote:
                "What sets FrameStory apart is their focus on long-term growth and monetization. They don't just help you make videos; they help you build a career.",
              author: "Sophia Kim",
              platform: "Multi-platform Creator",
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
                  <p className="text-sm text-muted-foreground">{testimonial.platform}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Content to the Next Level?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Let's partner to create content that grows your audience, increases engagement, and maximizes your revenue.
          </p>
          <Link href="/book-call">
            <Button size="lg" variant="secondary" className="group">
              Schedule a Creator Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
