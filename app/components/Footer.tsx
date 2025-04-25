import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 text-foreground py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 transition-all duration-300 hover:text-primary hover:translate-x-1">
            ash-agency.com
          </h3>
          <p className="text-muted-foreground transition-all duration-300 hover:text-foreground">
            Simplifying social media management for businesses of all sizes.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 transition-all duration-300 hover:text-primary hover:translate-x-1">
            Platform
          </h4>
          <ul className="space-y-2">
            {["Benefits", "Pricing", "Integrations"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 transition-all duration-300 hover:text-primary hover:translate-x-1">
            Resources
          </h4>
          <ul className="space-y-2">
            {["Blog", "Social Media Guide", "Case Studies"].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 transition-all duration-300 hover:text-primary hover:translate-x-1">
            Connect
          </h4>
          <div className="flex space-x-4">
            {[
              { icon: <Facebook className="h-6 w-6" />, name: "Facebook" },
              { icon: <Twitter className="h-6 w-6" />, name: "Twitter" },
              { icon: <Instagram className="h-6 w-6" />, name: "Instagram" },
              { icon: <Linkedin className="h-6 w-6" />, name: "LinkedIn" },
            ].map((social) => (
              <Link
                key={social.name}
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-border/40 text-center text-muted-foreground">
        <p className="transition-all duration-300 hover:text-foreground">
          &copy; {new Date().getFullYear()} ash-agency.com. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

