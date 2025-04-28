import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Reach out to discuss how we can help you achieve your
            goals.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form or contact us directly using the information below.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@framestory.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Office</h3>
                  <p className="text-muted-foreground">
                    123 Creative Studio St.
                    <br />
                    Los Angeles, CA 90210
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {["Twitter", "Instagram", "LinkedIn", "YouTube"].map((platform) => (
                  <Link
                    key={platform}
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <span className="sr-only">{platform}</span>
                    <div className="w-5 h-5 bg-primary/70 rounded-full"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-background p-8 rounded-lg border border-border/50 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company/Brand
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your company or brand"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full group">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Find answers to common questions about working with us.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is your typical turnaround time for projects?",
                answer:
                  "Our turnaround time varies depending on the scope and complexity of the project. For standard projects, we typically deliver within 1-2 weeks. For larger or more complex projects, it may take 3-4 weeks. We always provide a specific timeline during our initial consultation.",
              },
              {
                question: "Do you offer rush delivery for time-sensitive projects?",
                answer:
                  "Yes, we offer rush delivery options for an additional fee, depending on our current production capacity and the scope of your project. Please inquire about rush options when discussing your project timeline.",
              },
              {
                question: "What is your revision policy?",
                answer:
                  "Each package includes a specific number of revision rounds. We strive to get your content right within these included revisions. If additional revisions are needed, we offer them at an hourly rate. For clients on monthly packages, we're often more flexible with revisions as part of our ongoing relationship.",
              },
              {
                question: "Do you work with clients outside of your local area?",
                answer:
                  "We work with clients worldwide. For remote clients, we conduct consultations via video call and handle all aspects of production that can be managed remotely. For projects requiring on-location shooting, we can either travel to your location or help coordinate with local production resources.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border/50 shadow-sm">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Schedule a consultation to discuss your video production needs and find the perfect solution for your
            business.
          </p>
          <Link href="/book-call">
            <Button size="lg" variant="secondary" className="group">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
