import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "$29",
    features: ["5 social profiles", "30 scheduled posts per month", "Basic analytics", "Single user", "Email support"],
  },
  {
    name: "Professional",
    price: "$79",
    features: [
      "15 social profiles",
      "Unlimited scheduled posts",
      "Advanced analytics",
      "3 team members",
      "Priority support",
      "Content suggestions",
    ],
  },
  {
    name: "Business",
    price: "$199",
    features: [
      "Unlimited social profiles",
      "Unlimited scheduled posts",
      "Custom reports",
      "Unlimited team members",
      "24/7 support",
      "AI content creation",
      "Competitor analysis",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 border-t border-border/40">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Choose the plan that fits your social media management needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="interactive relative overflow-hidden rounded-lg border bg-background p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-lg font-normal text-muted-foreground">/month</span>
              </p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/book-call">
                <Button
                  className="w-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  variant={index === 1 ? "default" : "outline"}
                >
                  {index === 2 ? "Contact Us" : "Get Started"}
                </Button>
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

