import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { CursorThemeProvider } from "@/components/custom-cursor-theme-provider"
import MouseMoveEffect from "@/components/mouse-move-effect"
import CustomCursor from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FrameStory - Professional Video Production",
  description: "Crafting compelling visual narratives for brands, creators, and entrepreneurs.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <CursorThemeProvider>
          <div className="relative min-h-screen">
            {/* Background gradients */}
            <div className="pointer-events-none fixed inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
              <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
              <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
              {/* Navbar will appear on all pages */}
              <Navbar />

              {/* Page content */}
              <main>{children}</main>
            </div>
          </div>

          {/* Custom cursor components */}
          <MouseMoveEffect />
          <CustomCursor />
        </CursorThemeProvider>
      </body>
    </html>
  )
}
