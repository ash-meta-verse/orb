import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Play } from "lucide-react"

export default function AgenciesBrandsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Video Production for{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Agencies & Brands
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Elevate your brand's visual storytelling with premium video content that captivates audiences and delivers
              measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-call">
                <Button size="lg" className="group">
                  Schedule a Consultation
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
              alt="Agency video production"
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
            <h2 className="text-3xl font-bold mb-6">Why Agencies & Brands Choose FrameStory</h2>
            <p className="text-muted-foreground text-lg">
              We understand the unique challenges agencies and brands face in today's competitive landscape. Our
              tailored video production services are designed to help you stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality, Fast Turnaround",
                description:
                  "We deliver high-end video content within tight deadlines without compromising on quality or creativity.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
              },
              {
                title: "Scalable Production Solutions",
                description:
                  "From single videos to comprehensive campaigns, our flexible production model scales to meet your needs and budget.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M2 20h20" />
                    <path d="M5 20V8.2c0-.4.2-.8.5-1L10 4l4.5 3.2c.3.2.5.6.5 1V20" />
                    <path d="M12 4v6.5" />
                    <path d="M18 20V8.2c0-.4-.2-.8-.5-1L13 4" />
                  </svg>
                ),
              },
              {
                title: "Strategic Approach",
                description:
                  "We align every video project with your marketing objectives to ensure maximum ROI and audience engagement.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                ),
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
          <h2 className="text-3xl font-bold mb-6">Our Services for Agencies & Brands</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive video production services tailored to elevate your brand and engage your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Brand Films & Commercials",
              description:
                "Cinematic brand stories and commercials that capture your brand's essence and connect emotionally with your audience.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Concept development and scriptwriting",
                "Full production and post-production",
                "Music licensing and custom scoring",
                "Multiple deliverable formats",
              ],
            },
            {
              title: "Campaign Content",
              description:
                "Cohesive video content packages designed to support integrated marketing campaigns across multiple channels.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Cross-platform content strategy",
                "Primary and derivative assets",
                "Platform-optimized edits",
                "Campaign performance analytics",
              ],
            },
            {
              title: "Product Videos",
              description:
                "Compelling product demonstrations and explainer videos that showcase features and benefits in an engaging way.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Product-focused cinematography",
                "Technical specification integration",
                "Benefit-driven narratives",
                "E-commerce optimized formats",
              ],
            },
            {
              title: "Social Media Content",
              description:
                "Scroll-stopping social media videos designed to increase engagement, build community, and drive conversions.",
              image: "/placeholder.svg?height=600&width=800",
              features: [
                "Platform-specific content creation",
                "Trend-aware creative direction",
                "Engagement-optimized storytelling",
                "Regular content packages available",
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

      {/* Case Studies */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
            <p className="text-muted-foreground text-lg">
              See how we've helped agencies and brands achieve their goals through strategic video content.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                client: "Horizon Agency",
                project: "Multi-Channel Campaign for Tech Client",
                description:
                  "Created a comprehensive video package for Horizon's tech client, including a brand film, product demos, and social content.",
                results: ["43% increase in engagement", "2.8x ROI on ad spend", "Featured in industry publications"],
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                client: "NorthStar Brands",
                project: "Product Launch Video Series",
                description:
                  "Developed a series of product videos for a major consumer goods launch, optimized for e-commerce and social platforms.",
                results: [
                  "156% increase in conversion rate",
                  "3.2M views across platforms",
                  "18% increase in average order value",
                ],
                image: "/placeholder.svg?height=600&width=800",
              },
            ].map((study, index) => (
              <div
                key={index}
                className="bg-background rounded-lg overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={study.image || "/placeholder.svg"} alt={study.client} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {study.client}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{study.project}</h3>
                  <p className="text-muted-foreground mb-6">{study.description}</p>

                  <h4 className="font-semibold mb-3">Results:</h4>
                  <ul className="space-y-2 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/portfolio/long-video">
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
            <Link href="/portfolio/long-video">
              <Button size="lg" className="group">
                View More Case Studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Production Process</h2>
          <p className="text-muted-foreground text-lg">
            A streamlined approach designed for efficiency, transparency, and exceptional results.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description:
                  "We begin by understanding your brand, objectives, and audience to develop a strategic approach to your video content.",
              },
              {
                step: "02",
                title: "Creative Development",
                description:
                  "Our creative team develops concepts, scripts, and storyboards that align with your brand and campaign objectives.",
              },
              {
                step: "03",
                title: "Production Planning",
                description:
                  "We handle all logistics, casting, location scouting, and technical planning to ensure a smooth production process.",
              },
              {
                step: "04",
                title: "Filming & Production",
                description:
                  "Our experienced production team captures high-quality footage using state-of-the-art equipment and techniques.",
              },
              {
                step: "05",
                title: "Post-Production",
                description:
                  "Expert editing, color grading, sound design, and motion graphics bring your story to life with polish and precision.",
              },
              {
                step: "06",
                title: "Delivery & Support",
                description:
                  "We provide final deliverables in all required formats, along with strategic guidance for distribution and optimization.",
              },
            ].map((process, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg absolute left-1/2 transform -translate-x-1/2 z-10">
                  {process.step}
                </div>

                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:hidden flex items-center mb-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-3">
                          {process.step}
                        </div>
                        <h3 className="text-xl font-bold">{process.title}</h3>
                      </div>
                      <h3 className="hidden md:block text-xl font-bold mb-2">{process.title}</h3>
                      <p className="text-muted-foreground">{process.description}</p>
                    </>
                  ) : (
                    <div className="md:hidden">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-3">
                          {process.step}
                        </div>
                        <h3 className="text-xl font-bold">{process.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{process.description}</p>
                    </div>
                  )}
                </div>

                <div className="md:w-1/2 md:pl-12">
                  {index % 2 === 1 ? (
                    <>
                      <h3 className="hidden md:block text-xl font-bold mb-2">{process.title}</h3>
                      <p className="hidden md:block text-muted-foreground">{process.description}</p>
                    </>
                  ) : (
                    <div className="hidden md:block"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Hear from the agencies and brands we've worked with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "FrameStory has been an invaluable partner for our agency. Their ability to understand our clients' needs and deliver exceptional video content on tight deadlines has made them our go-to production team.",
                author: "Sarah Johnson",
                position: "Creative Director, Horizon Agency",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                quote:
                  "The team at FrameStory consistently delivers premium quality that exceeds our expectations. Their strategic approach to video content has helped us achieve measurable results for our campaigns.",
                author: "Michael Chen",
                position: "Marketing Director, NorthStar Brands",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                quote:
                  "Working with FrameStory has transformed how we approach video content. Their production process is seamless, and the results speak for themselves in terms of engagement and conversion.",
                author: "Emily Rodriguez",
                position: "Brand Manager, Elevate Digital",
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
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand's Visual Storytelling?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Let's collaborate to create video content that captivates your audience and delivers measurable results.
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
