import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Instagram, Youtube, InstagramIcon as Tiktok } from "lucide-react"

export default function ShortVideoPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Short-Form{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Video Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            Engaging, scroll-stopping content optimized for social media platforms and short attention spans.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="rounded-full flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              Instagram Reels
            </Button>
            <Button variant="outline" className="rounded-full flex items-center gap-2">
              <Tiktok className="h-4 w-4" />
              TikTok
            </Button>
            <Button variant="outline" className="rounded-full flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              YouTube Shorts
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Featured Short-Form Projects</h2>
          <p className="text-muted-foreground text-lg">
            Explore our most successful short-form video campaigns and content series.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {[
            {
              title: "TechPro Product Launch Campaign",
              description:
                "A series of 15-second product videos showcasing key features of TechPro's new smartphone, optimized for Instagram and TikTok.",
              metrics: ["12.5M total views", "3.2% engagement rate", "28% increase in website traffic"],
              platforms: ["Instagram Reels", "TikTok"],
              image: "/placeholder.svg?height=600&width=1200",
              videoUrl: "#",
            },
            {
              title: "FitLife Workout Series",
              description:
                "A 12-part series of 30-second workout tutorials designed to showcase FitLife's training methodology and drive app downloads.",
              metrics: ["8.7M total views", "22K shares", "15K app installs attributed"],
              platforms: ["Instagram Reels", "YouTube Shorts"],
              image: "/placeholder.svg?height=600&width=1200",
              videoUrl: "#",
            },
            {
              title: "GourmetEats Recipe Shorts",
              description:
                "Quick, visually stunning recipe videos highlighting GourmetEats' meal delivery service and ingredient quality.",
              metrics: ["5.3M total views", "4.8% engagement rate", "32% increase in first-time orders"],
              platforms: ["TikTok", "Instagram Reels", "YouTube Shorts"],
              image: "/placeholder.svg?height=600&width=1200",
              videoUrl: "#",
            },
          ].map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="rounded-full bg-primary/90 p-4">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Platforms:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.platforms.map((platform, platformIndex) => (
                      <span key={platformIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Performance Metrics:</h4>
                  <ul className="space-y-1">
                    {project.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={project.videoUrl}>
                  <Button className="group">
                    Watch Project Reel
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Short-Form Video Gallery</h2>
            <p className="text-muted-foreground text-lg">
              Browse our collection of short-form video content across various industries and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="group relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={`/placeholder.svg?height=1920&width=1080&text=Short+Video+${index + 1}`}
                  alt={`Short video ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="mb-2">
                    {index % 3 === 0 && (
                      <span className="inline-block px-2 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs mb-2">
                        <Instagram className="h-3 w-3 inline-block mr-1" />
                        Instagram
                      </span>
                    )}
                    {index % 3 === 1 && (
                      <span className="inline-block px-2 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs mb-2">
                        <Tiktok className="h-3 w-3 inline-block mr-1" />
                        TikTok
                      </span>
                    )}
                    {index % 3 === 2 && (
                      <span className="inline-block px-2 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs mb-2">
                        <Youtube className="h-3 w-3 inline-block mr-1" />
                        YouTube
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold">
                    {index % 3 === 0 && "Product Showcase"}
                    {index % 3 === 1 && "Brand Story"}
                    {index % 3 === 2 && "Tutorial Series"}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {index % 3 === 0 && "15-second feature highlight"}
                    {index % 3 === 1 && "30-second brand narrative"}
                    {index % 3 === 2 && "60-second how-to guide"}
                  </p>
                  <div className="mt-3">
                    <Button size="sm" variant="secondary" className="group">
                      <Play className="h-3 w-3 mr-1" />
                      Watch
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="group">
              Load More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Short-Form Video Process</h2>
          <p className="text-muted-foreground text-lg">
            How we create engaging, high-performing short-form video content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Platform Strategy",
              description:
                "We analyze your target audience and goals to determine the optimal platforms, formats, and content approach.",
            },
            {
              step: "02",
              title: "Creative Development",
              description:
                "Our team develops concepts that align with platform best practices while capturing attention in the first few seconds.",
            },
            {
              step: "03",
              title: "Production & Optimization",
              description:
                "We shoot, edit, and optimize content for each platform, ensuring maximum engagement and performance.",
            },
          ].map((process, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-3">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold">{process.title}</h3>
              </div>
              <p className="text-muted-foreground">{process.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Results That Speak for Themselves</h2>
            <p className="text-muted-foreground text-lg">
              Our short-form video content consistently delivers measurable results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "250M+",
                description: "Total views across all short-form video content produced for our clients.",
              },
              {
                metric: "3.8%",
                description: "Average engagement rate, significantly higher than industry benchmarks.",
              },
              {
                metric: "32%",
                description: "Average increase in conversion rates when short-form video is implemented.",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <h3 className="text-4xl font-bold text-primary mb-4">{stat.metric}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Client Feedback</h2>
          <p className="text-muted-foreground text-lg">
            What our clients say about our short-form video production services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "The short-form content FrameStory created for our product launch generated more engagement than any campaign we've ever run. The ROI was incredible.",
              author: "Sarah Johnson",
              position: "Marketing Director, TechPro",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              quote:
                "Their understanding of platform-specific best practices and trends helped our content stand out in crowded feeds. The results exceeded our expectations.",
              author: "Michael Chen",
              position: "Social Media Manager, FitLife",
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
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Scroll-Stopping Content?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Let's collaborate to create short-form video content that captures attention and drives results.
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
