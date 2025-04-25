import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const portfolioItems = [
  {
    title: "Fashion Brand Growth",
    description: "Increased engagement by 120% and followers by 45K in 6 months",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Instagram", "TikTok", "Content Strategy"],
  },
  {
    title: "Tech Startup Launch",
    description: "Generated 2.5M impressions and 15K leads through targeted campaigns",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["LinkedIn", "Twitter", "Paid Social"],
  },
  {
    title: "Restaurant Chain Rebrand",
    description: "Revitalized social presence with 89% increase in engagement rate",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Facebook", "Instagram", "Community Management"],
  },
  {
    title: "Fitness Influencer Growth",
    description: "Scaled to 500K followers with 3.2% engagement rate across platforms",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Instagram", "YouTube", "Content Creation"],
  },
  {
    title: "E-commerce Holiday Campaign",
    description: "Drove $1.2M in attributable revenue through social channels",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Instagram", "Facebook", "Paid Social"],
  },
  {
    title: "B2B Lead Generation",
    description: "Created content strategy resulting in 350+ qualified leads per month",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["LinkedIn", "Content Strategy", "Lead Generation"],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 border-t border-border/40">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Our Portfolio</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Explore our recent social media management success stories and see how we've helped brands grow their digital
          presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="interactive group relative overflow-hidden rounded-lg border bg-background transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="group/btn flex items-center gap-1 hover:text-primary">
                  View Case Study
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/book-call">
            <Button
              size="lg"
              className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
            >
              Work With Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

