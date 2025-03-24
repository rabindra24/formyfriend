
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import party from "party-js";


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 bg-background/80 backdrop-blur-lg shadow-sm dark:bg-background/50" : "py-6"
      )}
    >
      <div className="max-container flex items-center justify-between">
        <a href="/" className="text-2xl font-semibold tracking-tight">
          <img src="/logo.png" alt="Sahana M" className='w-20' />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Skills", "About", "Testimonials", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors link-underline"
            >
              {item}
            </a>
          ))}
          
          <ThemeToggle />
          
          <a
            href="#contact"
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
              "bg-accent text-accent-foreground hover:bg-accent/90 pink-glow"
            )}
            onClick={(e) =>
                        party.confetti(e.currentTarget, {
                          count: party.variation.range(80, 150), // Optimized count
                          spread: 50, // Narrower spread for an upward effect
                          size: party.variation.range(0.6, 1.5), // Keep size optimized
                          shapes: ["circle", "square"], // Optional: Change shapes
                        })
                      }
          >
            Happy Birthday 🥳
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 top-[60px] bg-background z-50 px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-background/90 backdrop-blur-md",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-4">
          {["Skills", "About", "Testimonials", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-foreground/80 py-2 hover:text-accent" 
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          
          <a
            href="#contact" 
            className="flex justify-center py-2 px-4 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 pink-glow"
            // onClick={() => setIsMenuOpen(false)}
            onClick={(e) =>
              party.confetti(e.currentTarget, {
                count: party.variation.range(80, 150), // Optimized count
                spread: 50, // Narrower spread for an upward effect
                size: party.variation.range(0.6, 1.5), // Keep size optimized
                shapes: ["circle", "square"], // Optional: Change shapes
              })
            }
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
