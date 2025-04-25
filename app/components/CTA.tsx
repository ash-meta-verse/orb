import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6 transition-all duration-300 hover:scale-105">
          Ready to Transform Your Social Media Presence?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto transition-all duration-300 hover:text-white">
          Join hundreds of businesses already using ash-agency.com to grow their audience, increase engagement, and
          drive conversions.
        </p>
        <Link href="/book-call">
          <Button
            size="lg"
            variant="secondary"
            className="transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:scale-105"
          >
            Book a Call Today
          </Button>
        </Link>
      </div>

      {/* Interactive background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/5 transition-transform duration-500 hover:scale-150"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/5 transition-transform duration-500 hover:scale-150"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/5 transition-transform duration-500 hover:scale-150"></div>
      </div>
    </section>
  )
}

