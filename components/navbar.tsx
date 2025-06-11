'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY);
      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-full px-6 py-3 border border-white/20 shadow-lg backdrop-blur-lg transition-all duration-300 ${
          scrolled ? "bg-white/30 dark:bg-black/30" : "bg-white/20 dark:bg-black/20"
        } ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-semibold text-sm">
            Ash Agency
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-white">
            <Link href="/">Welcome</Link>
            <Link href="/our-story">Our Story</Link>

            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                <span>Solutions</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white/80 dark:bg-black/80 border border-white/20 backdrop-blur-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1 text-sm text-black dark:text-white">
                  <Link href="/solutions/selector" className="block px-4 py-2 hover:bg-accent">Find Your Solution</Link>
                  <Link href="/solutions/agencies-brands" className="block px-4 py-2 hover:bg-accent">For Agencies</Link>
                  <Link href="/solutions/creators" className="block px-4 py-2 hover:bg-accent">For Creators</Link>
                  <Link href="/solutions/entrepreneurs" className="block px-4 py-2 hover:bg-accent">For Entrepreneurs</Link>
                </div>
              </div>
            </div>

            <Link href="/portfolio">Portfolio</Link>
            <Link href="/pricing">Pricing</Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/book-call">
              <Button size="sm" className="hover:shadow-xl hover:scale-105 transition-transform">Get a Quote</Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white/80 dark:bg-black/90 backdrop-blur-xl shadow-lg transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Ash Agency</Link>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6 text-primary" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 text-base font-medium text-black dark:text-white">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Welcome</Link>
            <Link href="/our-story" onClick={() => setMobileMenuOpen(false)}>Our Story</Link>
            <Link href="/solutions/selector" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
            <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          </nav>

          <div className="mt-auto pt-6 space-y-4">
            <Link href="/book-call" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full">Get a Quote</Button>
            </Link>
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
    </>
  );
}
