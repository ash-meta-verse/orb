import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Award, Clock, Film } from "lucide-react"

export default function LongVideoPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Long-Form{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Video Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            Cinematic brand films, documentaries, and in-depth video content that tells your story with depth and
            impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="rounded-full flex items-center gap-2">
              <Film className="h-4 w-4" />
              Brand Films
            </Button>
            <Button variant="outline" className="rounded-full flex items-center gap-2">
              <Award className="h-4 w-4" />
              Documentaries
            </Button>
            <Button variant="outline" className="rounded-full flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Extended Content
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Featured Long-Form Projects</h2>
          <p className="text-muted-foreground text-lg">
            Explore our most impactful long-form video productions that have helped brands tell their stories.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {[
            {
              title: "Horizon: A Sustainable Future",
              client: "EcoTech Innovations",
              description:
                "A 12-minute brand documentary showcasing EcoTech's commitment to sustainability and their innovative approach to renewable energy solutions.",
              challenge:
                "EcoTech needed to communicate complex technological innovations while emotionally connecting with viewers on environmental issues.",
              solution:
                "We created a narrative-driven documentary that balanced technical explanations with powerful human stories and stunning visuals of environmental impact.",
              results: [
                "Featured in two international film festivals",
                "2.3M organic views across platforms",
                "35% increase in investor interest",
              ],
              duration: "12:24",
              image: "/placeholder.svg?height=600&width=1200",
              videoUrl: "#",
            },
            {
              title: "The Artisan's Journey",
              client: "Handcrafted Luxury",
              description:
                "A series of 8-minute brand films highlighting the craftsmanship, heritage, and attention to detail behind Handcrafted Luxury's premium products.",
              challenge:
                "Justifying premium pricing in a market increasingly dominated by mass production and fast fashion.",
              solution:
                "We created intimate portraits of the master artisans behind each product, showcasing the time, skill, and tradition that goes into every piece.",
              results: [
                "42% increase in high-value conversions",
                "Featured in Vogue and Design Quarterly",
                "Adopted as training material for new employees",
              ],
              duration: "8:15",
              image: "/placeholder.svg?height=600&width=1200",
              videoUrl: "#",
            },
            {
              title: "Transformations: Client Success Stories",
              client: "Elite Fitness",
              description:
                "A series of 15-minute documentary-style videos following clients through their fitness journeys with Elite Fitness's coaching program.",
              challenge:
                "Differentiating from competitors in the saturated fitness market and justifying premium pricing for coaching services.",
              solution:
                "We created authentic, emotionally resonant stories that showcased not just physical transformations but life-changing mental and emotional journeys.",
              results: [
                "215% increase in program applications",
                "Testimonial content with 8.5x higher conversion rate than previous marketing",
                "Featured on major fitness publications",
              ],
              duration: "15:42",
              image: "/placeholder.svg?height=600&width=1200",
              videoUrl: "#",
            },
          ].map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer shadow-xl">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="rounded-full bg-primary/90 p-4">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white rounded-full text-sm flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {project.duration}
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="mb-4">
                  <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {project.client}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-1">The Challenge:</h4>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Our Solution:</h4>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={project.videoUrl}>
                  <Button className="group">
                    Watch Full Video
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Categories */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Long-Form Video Categories</h2>
            <p className="text-muted-foreground text-lg">
              Explore our expertise across different types of long-form video content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Documentaries",
                description:
                  "Cinematic films that tell your brand's story, showcase your mission, and connect emotionally with your audience.",
                image: "/placeholder.svg?height=600&width=800",
                features: [
                  "5-20 minute duration",
                  "Narrative-driven storytelling",
                  "Cinematic production quality",
                  "Emotional connection focus",
                ],
              },
              {
                title: "Product & Service Films",
                description:
                  "In-depth explorations of your products or services that educate customers and showcase value beyond short-form content.",
                image: "/placeholder.svg?height=600&width=800",
                features: [
                  "3-10 minute duration",
                  "Detailed feature showcases",
                  "Customer journey integration",
                  "Educational approach",
                ],
              },
              {
                title: "Thought Leadership Series",
                description:
                  "Video series that establish your brand as an authority in your industry through interviews, insights, and expertise.",
                image: "/placeholder.svg?height=600&width=800",
                features: ["10-30 minute episodes", "Expert interviews", "Industry insights", "Authority positioning"],
              },
              {
                title: "Customer Story Films",
                description:
                  "Documentary-style videos that showcase real customer experiences and transformations with your product or service.",
                image: "/placeholder.svg?height=600&width=800",
                features: [
                  "5-15 minute duration",
                  "Authentic testimonials",
                  "Emotional storytelling",
                  "Problem-solution narrative",
                ],
              },
              {
                title: "Corporate Culture Films",
                description:
                  "Videos that showcase your company culture, team, and values to attract talent and build trust with customers.",
                image: "/placeholder.svg?height=600&width=800",
                features: [
                  "5-12 minute duration",
                  "Team spotlights",
                  "Values-focused content",
                  "Behind-the-scenes access",
                ],
              },
              {
                title: "Educational Series",
                description:
                  "In-depth educational content that provides value to your audience while establishing your brand as a trusted resource.",
                image: "/placeholder.svg?height=600&width=800",
                features: [
                  "10-30 minute episodes",
                  "Comprehensive tutorials",
                  "Industry education",
                  "Value-first approach",
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border/50 bg-background hover:border-primary/50 transition-colors duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>

                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/portfolio">
                    <Button variant="outline" className="w-full group">
                      View Examples
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Long-Form Video Process</h2>
          <p className="text-muted-foreground text-lg">
            How we create compelling long-form video content that achieves your objectives.
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
                  "We begin by understanding your brand, objectives, and audience to develop a strategic approach to your long-form content.",
              },
              {
                step: "02",
                title: "Narrative Development",
                description:
                  "Our creative team crafts a compelling narrative structure that will engage viewers and effectively communicate your message.",
              },
              {
                step: "03",
                title: "Pre-Production Planning",
                description:
                  "We handle all logistics, casting, location scouting, and technical planning to ensure a smooth production process.",
              },
              {
                step: "04",
                title: "Production",
                description:
                  "Our experienced production team captures high-quality footage using cinema-grade equipment and techniques.",
              },
              {
                step: "05",
                title: "Post-Production",
                description:
                  "Expert editing, color grading, sound design, and motion graphics bring your story to life with polish and precision.",
              },
              {
                step: "06",
                title: "Distribution Strategy",
                description:
                  "We provide guidance on how to maximize the impact of your long-form content across various platforms and channels.",
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Client Feedback</h2>
            <p className="text-muted-foreground text-lg">
              What our clients say about our long-form video production services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The brand documentary FrameStory created for us has become a cornerstone of our marketing strategy. It's opened doors to partnerships and opportunities we never anticipated.",
                author: "David Rodriguez",
                position: "CEO, EcoTech Innovations",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                quote:
                  "What sets FrameStory apart is their ability to balance artistic vision with strategic business objectives. Our long-form content is beautiful and effective.",
                author: "Jennifer Lee",
                position: "Marketing Director, Handcrafted Luxury",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Let's collaborate to create long-form video content that captivates your audience and achieves your
            objectives.
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
