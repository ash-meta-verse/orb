import { BarChart2, Clock, Users, Globe, MessageCircle, TrendingUp } from "lucide-react"

const features = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Save Time",
    description: "Schedule posts across all platforms from one dashboard, saving hours each week.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Increase Engagement",
    description: "AI-powered content suggestions to boost likes, comments, and shares.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Grow Your Audience",
    description: "Strategic tools to attract and retain followers across all platforms.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Multi-Platform Management",
    description: "Manage Facebook, Instagram, Twitter, LinkedIn, and TikTok from one place.",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Streamlined Communication",
    description: "Respond to comments and messages from all platforms in a unified inbox.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Performance Analytics",
    description: "Comprehensive reports to track growth and optimize your social strategy.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Benefits of Social Media Management</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Discover how ash-agency.com can transform your social media presence and drive real business results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="interactive relative overflow-hidden rounded-lg border bg-background p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 cursor-pointer"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

