import React from "react";
import { ArrowRight } from "lucide-react";
import party from "party-js";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      {/* Background elements - decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />

      <div className="max-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block animate-fade-in px-3 py-1 text-sm font-medium bg-accent/20 text-accent rounded-full mb-6">
            Hey there!
          </span>

          <h1 className="animate-slide-down text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            Welcome to{" "}
            <span className="text-accent px-3 pink-glow animate-pulse-soft">
              Sahana
            </span>
            Portfolio! 🚀
          </h1>

          <p className="animate-slide-up max-w-2xl text-lg text-muted-foreground text-pretty mb-10">
            A brilliant developer, bug-squasher, and my forever teammate in
            hackathone & college events!
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <a
              href="#skills"
              className="px-6 py-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 font-medium pink-glow"
              onClick={(e) =>
                party.confetti(e.currentTarget, {
                  count: party.variation.range(80, 150), // Optimized count
                  spread: 50, // Narrower spread for an upward effect
                  size: party.variation.range(0.6, 1.5), // Keep size optimized
                  shapes: ["circle", "square"], // Optional: Change shapes
                })
              }
            >
              Skills
              <ArrowRight size={16} className="animate-pulse-soft" />
            </a>

            <a
              href="#about"
              className="px-6 py-3 rounded-full bg-background border border-border hover:bg-secondary/50 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className="mt-16 rounded-2xl overflow-hidden shadow-xl animate-fade-in opacity-0"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          <div className="aspect-video bg-secondary rounded-2xl overflow-hidden relative dark:bg-secondary/50">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <div className="animate-pulse-soft">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-accent/40 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="w-full h-full absolute z-10 bg-[#F04299] opacity-25" onClick={(e) =>
                  party.sparkles(e.currentTarget, {
                    count: party.variation.range(80, 150), // Optimized count
                    size: party.variation.range(0.6, 1.5), // Keep size optimized
                    shapes: ["circle", "square"], // Optional: Change shapes
                  })
                }></div>
              <img
                src="/Screenshot 2025-03-24 at 16-43-07 Instagram.png"
                alt="sahana m , the topper"
                
              />
            </div>
            <div className="glass absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:max-w-xs p-4 rounded-xl animate-floating dark:glass-dark z-10">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <img
                    src="/450371985_416364794692017_710562652983484594_n.jpg"
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white mb-1 dark:text-white">
                    Developer
                  </h3>
                  <p className="text-xs text-white/80 dark:text-white/80">
                    a pro at Flutter, Unity, and Web Development, all while
                    acing every subject
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
