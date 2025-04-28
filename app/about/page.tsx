import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Award, Clock, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              FrameStory
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            We're a team of passionate creatives, strategists, and technicians dedicated to helping our clients succeed
            through powerful visual storytelling.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=1200" alt="FrameStory team" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At FrameStory, our mission is to transform ideas into powerful visual stories that captivate audiences,
                drive engagement, and deliver measurable results for our clients.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe in the perfect balance of creative excellence and strategic thinking, ensuring every project
                not only looks exceptional but also achieves its objectives.
              </p>
              <p className="text-muted-foreground">
                Whether you're a creator looking to grow your audience, an agency seeking a reliable production partner,
                or an entrepreneur building your brand, we're here to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose FrameStory?</h2>
          <p className="text-muted-foreground text-lg">
            We're not just another video production company. Here's what sets us apart:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Proven Track Record",
              description:
                "With over 500 successful projects and a 95% client retention rate, our results speak for themselves.",
            },
            {
              title: "Fast Turnaround",
              description:
                "Our streamlined production process allows us to deliver exceptional quality within tight deadlines without compromising on creativity.",
            },
            {
              title: "Tailored Strategies",
              description:
                "We develop custom approaches for different industries and niches, ensuring your content resonates with your specific audience.",
            },
            {
              title: "End-to-End Service",
              description:
                "From concept development to distribution strategy, we handle every aspect of your video content needs.",
            },
            {
              title: "Resource Library",
              description:
                "Our clients gain access to our extensive library of templates, guides, and resources to enhance their content strategy.",
            },
            {
              title: "Transparent Pricing",
              description:
                "No hidden fees or surprise costs. Our pricing is clear, competitive, and delivers exceptional value for the quality provided.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-6 border border-border/50 rounded-lg hover:border-primary/50 transition-colors duration-300"
            >
              <CheckCircle className="h-6 w-6 text-primary mr-4 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg">
              Our diverse team of creatives, technicians, and strategists brings a wealth of experience and passion to
              every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "Founder & Creative Director",
                bio: "With over 15 years of experience in video production and digital marketing, Alex leads our creative vision and strategy.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Maya Chen",
                role: "Co-Founder & Executive Producer",
                bio: "Maya oversees production operations and client relationships, ensuring every project exceeds expectations.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "James Wilson",
                role: "Director of Photography",
                bio: "James brings a cinematic eye to every project, with expertise in both long-form and short-form video content.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Sophia Kim",
                role: "Social Media Strategist",
                bio: "Sophia specializes in platform-specific strategies that drive engagement, growth, and conversion.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Process</h2>
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

      {/* Stats */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
            <p className="text-muted-foreground text-lg">
              The numbers that showcase our commitment to excellence and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Projects Completed",
                icon: <Award className="h-8 w-8 text-primary" />,
              },
              {
                number: "95%",
                label: "Client Retention Rate",
                icon: <Users className="h-8 w-8 text-primary" />,
              },
              {
                number: "250M+",
                label: "Views Generated",
                icon: <Award className="h-8 w-8 text-primary" />,
              },
              {
                number: "48hrs",
                label: "Average Turnaround Time",
                icon: <Clock className="h-8 w-8 text-primary" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
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
