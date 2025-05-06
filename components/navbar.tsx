"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we're scrolling up or down
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false)
      } else {
        // Scrolling up
        setVisible(true)
      }

      // Update background opacity based on scroll position
      setScrolled(currentScrollY > 20)

      // Update last scroll position
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
          scrolled ? "bg-background/95 shadow-md" : "bg-background/50"
        } ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <span className="font-bold text-primary">FrameStory</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-auto flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
            <Link href="/" className="relative transition-colors hover:text-primary">
              <span className="relative z-10">Welcome</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/our-story" className="relative transition-colors hover:text-primary">
              <span className="relative z-10">Our Story</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>

            <div className="relative group">
              <button className="flex items-center space-x-1 relative transition-colors hover:text-primary">
                <span className="relative z-10">Solutions</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link
                    href="/solutions/agencies-brands"
                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    For Agencies & Brands
                  </Link>
                  <Link
                    href="/solutions/creators"
                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    For Creators
                  </Link>
                  <Link
                    href="/solutions/entrepreneurs"
                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    For Entrepreneurs
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 relative transition-colors hover:text-primary">
                <span className="relative z-10">Portfolio</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link
                    href="/portfolio/short-video"
                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    Short Video
                  </Link>
                  <Link
                    href="/portfolio/long-video"
                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    Long Video
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="relative transition-colors hover:text-primary">
              <span className="relative z-10">Pricing</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/book-call">
              <Button
                size="sm"
                className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile side panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="font-bold text-primary text-xl" onClick={() => setMobileMenuOpen(false)}>
              FrameStory
            </Link>
            <button
              className="p-2 rounded-md text-primary hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-base font-medium">
            <Link
              href="/"
              className="py-2 border-b border-border/20 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Welcome
            </Link>

            <Link
              href="/our-story"
              className="py-2 border-b border-border/20 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Story
            </Link>

            <div className="py-2 border-b border-border/20">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none hover:text-primary transition-colors">
                  Solutions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="mt-2 ml-4 flex flex-col space-y-2">
                  <Link
                    href="/solutions/agencies-brands"
                    className="py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    For Agencies & Brands
                  </Link>
                  <Link
                    href="/solutions/creators"
                    className="py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    For Creators
                  </Link>
                  <Link
                    href="/solutions/entrepreneurs"
                    className="py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    For Entrepreneurs
                  </Link>
                </div>
              </details>
            </div>

            <div className="py-2 border-b border-border/20">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none hover:text-primary transition-colors">
                  Portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="mt-2 ml-4 flex flex-col space-y-2">
                  <Link
                    href="/portfolio/short-video"
                    className="py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Short Video
                  </Link>
                  <Link
                    href="/portfolio/long-video"
                    className="py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Long Video
                  </Link>
                </div>
              </details>
            </div>

            <Link
              href="/pricing"
              className="py-2 border-b border-border/20 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
          </nav>

          <div className="mt-auto pt-6">
            <Link href="/book-call" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full transition-all duration-300">Get a Quote</Button>
            </Link>
            <div className="flex justify-center mt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
    </>
  )
}
