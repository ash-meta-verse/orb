import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 transition-all duration-500 hover:scale-105">
          Social Media Management
          <br />
          <span className="text-muted-foreground">made effortless</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 transition-all duration-300 hover:text-foreground">
          ash-agency.com helps businesses grow their online presence, engage with their audience, and convert followers
          into customers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/book-call">
            <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
              <span className="relative z-10">Hire Us</span>
              <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </Button>
          </Link>
          <Link href="#portfolio">
            <Button
              variant="outline"
              className="relative group px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            >
              <span className="relative z-10">Show Portfolio</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

