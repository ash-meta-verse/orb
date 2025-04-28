"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BookCall() {
  useEffect(() => {
    // Load TidyCal script
    const script = document.createElement("script")
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Clean up
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 flex items-center gap-2 hover:gap-3 transition-all">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Book a Call With Our Team</h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Schedule a consultation with our social media experts to discuss how we can help grow your brand's online
            presence.
          </p>

          <div className="bg-card rounded-lg p-6 shadow-lg border border-border/40">
            {/* TidyCal Embed */}
            <div className="tidycal-embed" data-path="achrafgarsaa/15-minute-meeting"></div>
          </div>

          <div className="mt-12 text-center text-muted-foreground">
            <p>
              Having trouble scheduling? Contact us directly at{" "}
              <span className="text-primary">contact@ash-agency.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
