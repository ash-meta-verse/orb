"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function CalendlyBadge() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the badge after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link href="/book-call">
        <Button className="rounded-full px-4 py-6 bg-[#0069ff] hover:bg-[#0051c3] text-white shadow-lg flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          <span>Schedule time with me</span>
        </Button>
      </Link>
    </div>
  )
}
