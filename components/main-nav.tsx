"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    // Set active item based on current path
    const path = window.location.pathname
    if (path === "/") setActiveItem("welcome")
    else if (path.includes("/our-story")) setActiveItem("our-story")
    else if (path.includes("/solutions")) setActiveItem("solutions")
    else if (path.includes("/portfolio")) setActiveItem("portfolio")
    else if (path.includes("/pricing")) setActiveItem("pricing")

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Welcome", href: "/", id: "welcome" },
    { name: "Our Story", href: "/our-story", id: "our-story" },
    {
      name: "Solutions",
      id: "solutions",
      children: [
        { name: "For Agencies & Brands", href: "/solutions/agencies-brands" },
        { name: "For Creators", href: "/solutions/creators" },
        { name: "For Entrepreneurs", href: "/solutions/entrepreneurs" },
      ],
    },
    {
      name: "Portfolio",
      id: "portfolio",
      children: [
        { name: "Short Video", href: "/portfolio/short-video" },
        { name: "Long Video", href: "/portfolio/long-video" },
      ],
    },
    { name: "Pricing", href: "/pricing", id: "pricing" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg py-3" : "bg-gradient-to-b from-black/80 to-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-9 w-9 rounded-full bg-primary flex items-center justify-center">
              <Film className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">FrameStory</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.id} className="relative group px-1">
                {item.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={cn(
                          "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                          activeItem === item.id ? "text-primary" : "text-gray-200 hover:text-white hover:bg-white/10",
                        )}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="center"
                      className="bg-black/95 backdrop-blur-md border-gray-800 text-white min-w-[200px]"
                    >
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.href} asChild>
                          <Link
                            href={child.href}
                            className="w-full px-4 py-2 hover:bg-white/10 cursor-pointer rounded-sm"
                          >
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      activeItem === item.id ? "text-primary" : "text-gray-200 hover:text-white hover:bg-white/10",
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-white">Get a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <div key={item.id} className="py-1">
                  {item.children ? (
                    <div className="space-y-2">
                      <div
                        className={cn(
                          "text-sm font-medium px-1 py-1",
                          activeItem === item.id ? "text-primary" : "text-white",
                        )}
                      >
                        {item.name}
                      </div>
                      <div className="pl-4 flex flex-col space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-sm text-gray-300 hover:text-primary transition-colors py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium block py-1",
                        activeItem === item.id ? "text-primary" : "text-white hover:text-primary",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Get a Quote</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
