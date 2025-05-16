"use client"

import type React from "react"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import { motion } from "framer-motion"

export function CompactFooter() {
  return (
    <motion.footer
      className="border-t py-6 md:py-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <p className="text-sm text-muted-foreground">Ash Agency - Crafting compelling visual narratives since 2023</p>

        <div className="flex items-center space-x-4">
          <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
          <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} label="Facebook" />
          <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
          <SocialLink href="https://youtube.com" icon={<Youtube size={18} />} label="YouTube" />
        </div>
      </div>
    </motion.footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors" aria-label={label}>
      {icon}
    </Link>
  )
}
