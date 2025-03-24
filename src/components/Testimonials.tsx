
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Smart ",
    author: "Rabindra Nath Mahato",
    role: "Dev",
    stars: 5
  },
  {
    quote: "mari jai gee",
    author: "Yash Pandey",
    role: "Game Developer",
    stars: 5
  },
  {
    quote: "If Computer Science were a philosophy, Sahana would be its wisest sage—balancing logic and creativity like a perfectly optimized algorithm. She doesn’t just write code; she composes it, structuring every function like a well-orchestrated symphony.",
    author: "Manas Srivastava",
    role: "Frontend Developer",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id='testimonials' className="py-24 bg-secondary dark:bg-secondary/30">
      <div  className="max-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Reviewed By Begineers
          </h2>
          <p className="text-muted-foreground text-pretty">
            See what designers and developers are saying about me to creating
            meaningful digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-2xl shadow-sm border border-border flex flex-col h-full dark:bg-background/50 hover:pink-glow transition-all duration-300"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards"
              }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent animate-pulse-soft" style={{ animationDelay: `${i * 200}ms` }} />
                ))}
              </div>
              
              <blockquote className="flex-1 mb-6 italic text-lg">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
