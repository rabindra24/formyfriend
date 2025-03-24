
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-secondary to-transparent dark:from-secondary/30 dark:to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
      
      <div className="max-container relative z-10">
        <div className="max-w-3xl mx-auto bg-background border border-border rounded-3xl p-8 md:p-12 shadow-xl dark:bg-background/70 dark:backdrop-blur-md hover:pink-glow transition-all duration-500">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to create something <span className="text-accent">exceptional</span>?
            </h2>
            <p className="text-muted-foreground text-pretty max-w-xl mx-auto">
              Join us in crafting digital experiences that combine aesthetic elegance 
              with functional excellence. Start your journey today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-6 py-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 font-medium pink-glow"
            >
              Start Creating
              <ArrowRight size={16} className="animate-pulse-soft" />
            </a>
            
            <a
              href="#"
              className="px-6 py-3 rounded-full bg-background border border-border hover:bg-secondary/50 transition-colors flex items-center justify-center gap-2 font-medium dark:bg-background/30"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
