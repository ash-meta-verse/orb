import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function OurStoryPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Crafting compelling visual narratives since 2015
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="FrameStory founders"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Where It All Began</h2>
            <p className="text-muted-foreground mb-4">
              FrameStory was born from a shared passion for visual storytelling. In 2015, our founders Alex and Maya met
              while working on a documentary project that changed their perspective on the power of video.
            </p>
            <p className="text-muted-foreground mb-4">
              What started as a two-person operation in a small studio has grown into a team of dedicated creatives,
              technicians, and strategists united by the belief that every brand has a unique story worth telling.
            </p>
            <p className="text-muted-foreground">
              Our journey has been defined by constant innovation, a commitment to craft, and the relationships we've
              built with clients who trust us to bring their vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-16 md:py-24 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-4">
                To transform ideas into powerful visual stories that captivate audiences, drive engagement, and deliver
                measurable results for our clients.
              </p>
              <p className="text-muted-foreground">
                We believe in the perfect balance of creative excellence and strategic thinking, ensuring every project
                not only looks exceptional but also achieves its objectives.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-4">
                To be the leading creative force in video production, known for our innovative approach, technical
                excellence, and the tangible impact of our work.
              </p>
              <p className="text-muted-foreground">
                We envision a world where every brand, regardless of size, has access to high-quality video content that
                authentically tells their story and connects with their audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">
            These principles guide everything we do, from how we work with clients to how we craft our stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Creative Excellence",
              description:
                "We push boundaries and challenge conventions to create work that stands out and makes an impact.",
            },
            {
              title: "Strategic Thinking",
              description:
                "Every creative decision is informed by a deep understanding of our clients' goals and their audience's needs.",
            },
            {
              title: "Authentic Storytelling",
              description:
                "We believe in the power of authentic narratives that resonate with audiences on an emotional level.",
            },
            {
              title: "Technical Precision",
              description:
                "We maintain the highest standards in production quality, always seeking to refine our craft.",
            },
            {
              title: "Collaborative Spirit",
              description: "We value open communication and true partnership with our clients and within our team.",
            },
            {
              title: "Continuous Innovation",
              description:
                "We embrace new technologies and techniques to stay at the forefront of visual storytelling.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 border border-border/50 rounded-lg hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground">
              Our diverse team of creatives, technicians, and strategists brings a wealth of experience and passion to
              every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "Founder & Creative Director",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Maya Chen",
                role: "Co-Founder & Executive Producer",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "James Wilson",
                role: "Director of Photography",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Sophia Kim",
                role: "Lead Editor",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">And many more talented individuals who make our work possible.</p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">Key milestones that have shaped our company over the years.</p>
        </div>

        <div className="relative border-l border-primary/50 pl-8 ml-4 md:ml-[calc(50%-4px)] space-y-12">
          {[
            {
              year: "2015",
              title: "FrameStory Founded",
              description: "Alex and Maya establish FrameStory with a focus on documentary-style brand videos.",
            },
            {
              year: "2017",
              title: "First Major Client",
              description: "Secured our first Fortune 500 client, marking a significant turning point for the company.",
            },
            {
              year: "2019",
              title: "Studio Expansion",
              description:
                "Moved to our current 5,000 sq ft production facility and expanded our team to 15 full-time staff.",
            },
            {
              year: "2020",
              title: "Adapted to Remote Production",
              description:
                "Pioneered remote production techniques during global challenges, creating new service offerings.",
            },
            {
              year: "2022",
              title: "Award Recognition",
              description: "Received industry recognition with three major awards for our client campaigns.",
            },
            {
              year: "2023",
              title: "International Expansion",
              description: "Opened our first international office and began serving clients across three continents.",
            },
          ].map((milestone, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-12 md:-left-[calc(50%+12px)] w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-background"></div>
              </div>
              <div className="md:w-[calc(100%-32px)] md:max-w-md">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Story?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your vision to life with compelling video content that resonates with your
            audience.
          </p>
          <Link href="/book-call">
            <Button size="lg" variant="secondary" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

