"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, TrendingUp, Instagram, Mail, ImageIcon } from "lucide-react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("fitness")
  const [isVisible, setIsVisible] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["creators", "startups", "service brands"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Content Creation",
      description: "Reels, carousels, and branded visuals",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Paid Ads Management",
      description: "Meta & Instagram Ads with real ROI",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Strategy & Growth Planning",
      description: "Tailored monthly strategies",
    },
  ]

  const mockCampaigns = {
    fitness: {
      title: "Fitness Coach Sample",
      items: [
        "3 Reels showing exercises + hooks",
        'Carousel: "5 Things Every Beginner Gets Wrong"',
        "1 Ad mockup for lead generation (CTA: Book Your Free Call)",
      ],
    },
    influencer: {
      title: "Influencer Sample",
      items: [
        "Branded personal quote post",
        "Storyboard of a Reel: Behind-the-scenes + CTA overlay",
        "Sample content calendar (7-day)",
      ],
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-2xl">
                  <span>👋</span>
                  <span className="font-light text-gray-600 dark:text-gray-300">Hi, I'm</span>
                  <span className="font-bold text-gray-900 dark:text-white">Ashraf</span>
                  <span className="font-light text-gray-600 dark:text-gray-300">– Founder of</span>
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Ash-Agency
                  </span>
                </div>

                <div className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                  <p>
                    I help{" "}
                    <span className="inline-block min-w-[140px] font-semibold text-blue-600 transition-all duration-500">
                      {roles[currentRole]}
                    </span>{" "}
                    grow through engaging content & profitable ad campaigns.
                  </p>
                  <p className="mt-2 font-medium text-gray-900 dark:text-white">
                    Whether you're just launching or scaling, I make your brand stand out & sell.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
                  <Users className="w-24 h-24 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-3xl">🔥</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">What I Do</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 dark:bg-gray-700 dark:shadow-gray-900/20"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-3xl">📈</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Selected Work</h2>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto shadow-2xl border-0 dark:bg-gray-700 dark:shadow-gray-900/20">
            <CardContent className="p-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Badge className="bg-green-100 text-green-800 px-3 py-1">✅ Client</Badge>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">CompanyFormationX (B2B)</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      <span className="font-semibold">Objective:</span> Build authority & generate service inquiries
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-400 p-6 rounded-r-xl">
                  <p className="text-lg italic text-gray-700 dark:text-blue-100">
                    "Ash-Agency made our content look professional and handled everything smoothly."
                  </p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">– Client Testimonial</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mock Campaigns Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-3xl">💡</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Mock Campaigns</h2>
              <span className="text-lg text-gray-600 dark:text-gray-300">(Creative Samples)</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 dark:bg-gray-600 p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab("fitness")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "fitness"
                      ? "bg-white text-blue-600 shadow-md dark:bg-gray-700 dark:text-blue-400"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  📌 Fitness Coach Sample
                </button>
                <button
                  onClick={() => setActiveTab("influencer")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "influencer"
                      ? "bg-white text-blue-600 shadow-md dark:bg-gray-700 dark:text-blue-400"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  📌 Influencer Sample
                </button>
              </div>
            </div>

            <Card className="shadow-xl border-0 dark:bg-gray-700 dark:shadow-gray-900/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {mockCampaigns[activeTab as keyof typeof mockCampaigns].title}
                </h3>
                <div className="space-y-4">
                  {mockCampaigns[activeTab as keyof typeof mockCampaigns].items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-200 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-4xl">📞</span>
            <h2 className="text-4xl font-bold">Let's Work Together</h2>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <p className="text-xl">
              I currently have{" "}
              <span className="font-bold bg-white/20 px-3 py-1 rounded-full">
                2 client slots
              </span>{" "}
              open.
            </p>
            <p className="text-lg opacity-90">Ready to grow your brand?</p>
          </div>

          {/* CTA Button */}
          <div className="space-y-6">
            <a
              href="https://ash-agency.com/book-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Book a Free 15-min Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex justify-center space-x-8 pt-6">
            <div className="flex items-center space-x-2 opacity-90">
              <Mail className="w-5 h-5" />
              <span>hello@ash-agency.com</span>
            </div>
            <div className="flex items-center space-x-2 opacity-90">
              <Instagram className="w-5 h-5" />
              <span>@ash.agency</span>
            </div>
          </div>
        </div>
      </div>
  )
}
