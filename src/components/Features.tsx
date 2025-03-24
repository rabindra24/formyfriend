
import React from 'react';
import { Smartphone, Globe, Code, Database, Box, Rocket } from 'lucide-react';

const featureItems = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Flutter Development",
    description: "Building smooth, responsive, and beautiful mobile apps—because great apps deserve great UI!"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Development",
    description: "Creating modern, responsive websites that work across all devices—because pixels matter!"
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Clean Code",
    description: "Writing structured, efficient, and bug-free (mostly 😆) code for long-term maintainability."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Database Management",
    description: "Designing and optimizing databases for fast, reliable, and secure data handling."
  },
  {
    icon: <Box className="h-6 w-6" />,
    title: "Object-Oriented Programming",
    description: "Applying OOP principles to keep code modular, reusable, and scalable!"
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Performance Optimization",
    description: "Making apps and websites faster, smoother, and more efficient—because speed matters!"
  }
];


const Features: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-accent/5 blur-3xl rounded-l-full animate-pulse-soft" />
      
      <div className="max-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-4">
          Skills & Superpowers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Code it, design it, debug it—repeat!" 💻✨
          </h2>
          <p className="text-muted-foreground text-pretty">
          I specialize in Flutter, Unity, Web Development, DSA, Databases, OOP and Everything. Always learning, always improving! 🚀
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-background border border-border p-6 rounded-2xl transition-all duration-300 hover:shadow-md hover:pink-glow dark:bg-background/50"
              style={{ 
                animationDelay: `${index * 100}ms`, 
                animationFillMode: "forwards" 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="h-12 w-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4 relative z-10 group-hover:animate-pulse-soft">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-medium mb-2 relative z-10 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
