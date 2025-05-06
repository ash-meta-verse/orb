"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ModernFooter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send this to your API
      console.log("Subscribing email:", email)
      setSubscribed(true)
      setEmail("")

      // Reset the success message after 5 seconds
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold">Streamline</h3>
            <p className="text-muted-foreground">
              Elevating your digital presence with cutting-edge solutions tailored for modern businesses.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
                { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
                { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
                { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
                { icon: <Github size={18} />, href: "#", label: "GitHub" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-base font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0">
                      <ArrowRight size={14} />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-base font-semibold">Solutions</h4>
            <ul className="space-y-2">
              {[
                { label: "For Agencies & Brands", href: "/solutions/agencies-brands" },
                { label: "For Creators", href: "/solutions/creators" },
                { label: "For Entrepreneurs", href: "/solutions/entrepreneurs" },
                { label: "Pricing", href: "/pricing" },
                { label: "Book a Call", href: "/book-call" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0">
                      <ArrowRight size={14} />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-base font-semibold">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter to receive updates and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="mt-2 space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {subscribed ? (
                  <span className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Subscribed!
                  </span>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>© {new Date().getFullYear()} Streamline. All rights reserved.</motion.div>
          <motion.div variants={itemVariants} className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
