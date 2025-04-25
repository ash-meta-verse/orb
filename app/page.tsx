"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Play, Users, BarChart, Zap, ChevronDown } from "lucide-react"
import Footer from "@/app/components/Footer"

// Import the AnimatedSection component at the top of the file
import AnimatedSection from "@/components/animated-section"

// Scroll down indicator component
function ScrollIndicator() {
  const scrollToContent = () => {
    const contentSection = document.getElementById("content-start")
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      onClick={scrollToContent}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer z-10"
    >
      {/* Mouse icon */}
      <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center mb-2 relative">
        <div className="w-1.5 h-1.5 bg-current rounded-full absolute top-2 animate-[scroll_1.5s_ease-in-out_infinite]"></div>
      </div>
      <span className="text-sm mb-2 font-medium">Scroll Down</span>
      <div className="animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <AnimatedSection
        variant="fadeIn"
        className="relative container mx-auto px-4 min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center text-center relative z-20 flex-grow flex justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Your Partner for{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Social Media Success
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Premium video production and social media management tailored for creators, agencies, and entrepreneurs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/solutions/agencies-brands">
                <Button size="lg" className="group">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="group">
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </AnimatedSection>

      {/* Audience Segments */}
      <AnimatedSection
        variant="fadeInUp"
        id="content-start"
        className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Tailored Solutions for Every Need</h2>
            <p className="text-muted-foreground text-lg">
              We provide specialized video production and social media services for three distinct audience segments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "For Agencies & Brands",
                description:
                  "End-to-end campaign management, high-value deliverables, and quick turnaround times for agencies and established brands.",
                icon: <BarChart className="h-10 w-10 text-primary" />,
                link: "/solutions/agencies-brands",
                cta: "Agency Solutions",
              },
              {
                title: "For Creators",
                description:
                  "Personal branding, content creation, and monetization strategies to help creators grow their audience and revenue.",
                icon: <Users className="h-10 w-10 text-primary" />,
                link: "/solutions/creators",
                cta: "Creator Solutions",
              },
              {
                title: "For Entrepreneurs",
                description:
                  "Cost-effective solutions to build your online presence, generate leads, and drive sales through strategic social media.",
                icon: <Zap className="h-10 w-10 text-primary" />,
                link: "/solutions/entrepreneurs",
                cta: "Entrepreneur Solutions",
              },
            ].map((segment, index) => (
              <AnimatedSection
                key={index}
                variant="fadeInUp"
                delay={index * 200}
                className="bg-background p-8 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{segment.icon}</div>
                <h3 className="text-xl font-bold mb-3">{segment.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">{segment.description}</p>
                <Link href={segment.link}>
                  <Button variant="outline" className="w-full group">
                    Explore {segment.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection variant="fadeInUp" className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose FrameStory?</h2>
          <p className="text-muted-foreground text-lg">
            We deliver exceptional quality, fast turnaround times, and measurable results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Premium Quality",
              description:
                "We never compromise on quality. Our team of experienced professionals ensures that every project meets the highest standards of excellence.",
            },
            {
              title: "Fast Turnaround",
              description:
                "We understand the importance of timely delivery. Our streamlined production process allows us to deliver exceptional results quickly.",
            },
            {
              title: "Tailored Strategies",
              description:
                "We develop custom strategies based on your specific goals, audience, and industry to ensure maximum impact and ROI.",
            },
            {
              title: "Measurable Results",
              description:
                "We focus on delivering tangible outcomes that drive business growth, from increased engagement to higher conversion rates.",
            },
            {
              title: "Consistent Support",
              description:
                "Our monthly packages provide ongoing optimization and support to ensure your social media presence continues to evolve and improve.",
            },
            {
              title: "Industry Expertise",
              description:
                "With years of experience across various industries, we bring valuable insights and best practices to every project.",
            },
          ].map((feature, index) => (
            <AnimatedSection
              key={index}
              variant="fadeInUp"
              delay={index * 100}
              className="flex items-start p-6 border border-border/50 rounded-lg hover:border-primary/50 transition-colors duration-300"
            >
              <CheckCircle className="h-6 w-6 text-primary mr-4 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Portfolio Preview */}
      <AnimatedSection variant="fadeInUp" className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Work</h2>
            <p className="text-muted-foreground text-lg">
              Explore our portfolio of video production and social media projects across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection
              variant="fadeInUp"
              delay={200}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-background hover:border-primary/50 transition-colors duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Long-form video"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="rounded-full bg-primary/90 p-4">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Long-Form Video</h3>
                <p className="text-muted-foreground mb-6">
                  Cinematic brand films, documentaries, and in-depth video content that tells your story with depth and
                  impact.
                </p>
                <Link href="/portfolio/long-video">
                  <Button variant="outline" className="w-full group">
                    View Long-Form Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection
              variant="fadeInUp"
              delay={400}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-background hover:border-primary/50 transition-colors duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Short-form video"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="rounded-full bg-primary/90 p-4">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Short-Form Video</h3>
                <p className="text-muted-foreground mb-6">
                  Engaging, scroll-stopping content optimized for social media platforms and short attention spans.
                </p>
                <Link href="/portfolio/short-video">
                  <Button variant="outline" className="w-full group">
                    View Short-Form Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection variant="fadeInUp" className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from the clients we've worked with.
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
                "Working with FrameStory transformed my content and my career. Their strategic approach helped me grow my audience while staying true to my authentic voice.",
              author: "Jamie Lee",
              position: "YouTube Creator, 1.2M Subscribers",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              quote:
                "As a startup founder, every dollar counts. FrameStory delivered premium quality that justified the investment and has paid dividends in customer acquisition.",
              author: "Mark Thompson",
              position: "Tech Startup Founder",
              image: "/placeholder.svg?height=200&width=200",
            },
          ].map((testimonial, index) => (
            <AnimatedSection
              key={index}
              variant="fadeInUp"
              delay={index * 200}
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
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Client Logos */}
      <AnimatedSection variant="fadeInUp" className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Trusted By</h2>
            <p className="text-muted-foreground text-lg">
              We've had the privilege of working with amazing clients across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <AnimatedSection key={index} variant="fadeInUp" delay={index * 100} className="flex justify-center">
                <div className="h-16 w-32 bg-background/50 rounded-md flex items-center justify-center">
                  <div className="text-muted-foreground font-medium">Client Logo</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection variant="fadeInUp" className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Social Media Presence?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Let's collaborate to create content that captivates your audience and delivers measurable results.
          </p>
          <Link href="/book-call">
            <Button size="lg" variant="secondary" className="group">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </AnimatedSection>
      <Footer />
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(4px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </main>
  )
}

