import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            FrameStory{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Insights, tips, and industry trends to help you elevate your video content and social media strategy.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Featured blog post"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="mb-4">
              <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">Featured</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">10 Video Trends That Will Dominate Social Media in 2025</h2>
            <p className="text-muted-foreground mb-6">
              Stay ahead of the curve with our predictions for the top video trends that will shape social media content
              in the coming year. From AI-enhanced editing to immersive storytelling techniques, these trends will help
              you create more engaging and effective video content.
            </p>
            <div className="flex items-center mb-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image src="/placeholder.svg?height=200&width=200" alt="Author" fill className="object-cover" />
              </div>
              <div>
                <p className="font-medium">Alex Rivera</p>
                <p className="text-sm text-muted-foreground">March 15, 2025 · 10 min read</p>
              </div>
            </div>
            <Link href="/blog/video-trends-2025">
              <Button className="group">
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
            <p className="text-muted-foreground text-lg">
              Explore our latest insights and tips to elevate your video content strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How to Optimize Your Videos for Each Social Platform",
                excerpt:
                  "Learn the specific requirements and best practices for creating video content that performs well on Instagram, TikTok, YouTube, and more.",
                category: "Strategy",
                author: "Sophia Kim",
                date: "March 10, 2025",
                readTime: "8 min read",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "The Psychology of Effective Video Storytelling",
                excerpt:
                  "Discover the psychological principles that make stories compelling and how to apply them to your video content for maximum impact.",
                category: "Storytelling",
                author: "James Wilson",
                date: "March 5, 2025",
                readTime: "12 min read",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Budget-Friendly Equipment for Professional-Looking Videos",
                excerpt:
                  "You don't need expensive gear to create high-quality videos. Here's our guide to affordable equipment that delivers professional results.",
                category: "Production",
                author: "Maya Chen",
                date: "February 28, 2025",
                readTime: "7 min read",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "How to Measure the ROI of Your Video Content",
                excerpt:
                  "Learn how to track and analyze the performance of your video content to demonstrate clear return on investment.",
                category: "Analytics",
                author: "Alex Rivera",
                date: "February 20, 2025",
                readTime: "9 min read",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Creating a Consistent Video Content Calendar",
                excerpt:
                  "Develop a sustainable content strategy with our step-by-step guide to planning and maintaining a video content calendar.",
                category: "Strategy",
                author: "Sophia Kim",
                date: "February 15, 2025",
                readTime: "10 min read",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "The Art of the Thumbnail: Increasing Click-Through Rates",
                excerpt:
                  "Discover how to create thumbnails that grab attention and entice viewers to click on your videos across all platforms.",
                category: "Optimization",
                author: "James Wilson",
                date: "February 8, 2025",
                readTime: "6 min read",
                image: "/placeholder.svg?height=600&width=800",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border/50 bg-background hover:border-primary/50 transition-colors duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium px-2 py-1 bg-primary/90 text-primary-foreground rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                        <Image
                          src="/placeholder.svg?height=200&width=200"
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm">{post.author}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {post.date} · {post.readTime}
                    </p>
                  </div>
                </div>

                <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`} className="absolute inset-0">
                  <span className="sr-only">Read {post.title}</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
          <p className="text-muted-foreground text-lg">Find articles relevant to your specific interests and needs.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Strategy",
            "Production",
            "Editing",
            "Storytelling",
            "Analytics",
            "Optimization",
            "Platforms",
            "Equipment",
            "Trends",
            "Case Studies",
            "Tutorials",
            "Resources",
          ].map((category, index) => (
            <Link
              key={index}
              href={`/blog/category/${category.toLowerCase()}`}
              className="p-4 bg-background rounded-lg border border-border/50 text-center hover:border-primary/50 hover:bg-primary/5 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Get the latest insights, tips, and trends delivered directly to your inbox.
          </p>

          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            <p className="text-sm opacity-80 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
