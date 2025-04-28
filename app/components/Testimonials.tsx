const testimonials = [
  {
    quote:
      "Since using ash-agency.com, our engagement has increased by 78% and we've gained over 10,000 new followers in just three months.",
    author: "Sarah Johnson",
    company: "Boutique Clothing Brand",
  },
  {
    quote:
      "The time we save on social media management allows us to focus on creating better content. Our conversion rate from social media has doubled.",
    author: "Michael Chen",
    company: "Tech Startup Founder",
  },
  {
    quote:
      "The analytics provided by ash-agency.com helped us understand what content resonates with our audience. Our reach has grown by 150% in six months.",
    author: "Emily Rodriguez",
    company: "Marketing Director",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 border-t border-border/40">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          See how businesses like yours have transformed their social media presence with ash-agency.com.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="interactive relative overflow-hidden rounded-lg border bg-background p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 cursor-pointer"
            >
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
