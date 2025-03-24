import React from "react";
import { Smartphone, Globe, Code, Database, Box, Rocket } from "lucide-react";
import party from "party-js";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-accent/5 blur-3xl rounded-l-full animate-pulse-soft" />

      <div className="max-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-4">
            🙋‍♀️ About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Yupp! I'm Sahana M, 💻✨
          </h2>
          <p className="">
            a developer who loves building cool things with Flutter, web tech,
            and databases. Whether it’s crafting sleek mobile apps or making
            websites work like magic, I enjoy every bit of it! When I’m not
            coding, you’ll find me rocking college events, exploring new tech,
            or enjoying a good dose of coffee and sambaar rice ☕🍛.
            <br /> And unlike most developers, I actually sleep on time—because
            a fresh mind writes better code! 😆 <br /> ನಾನು ಯಾವಾಗಲೂ ಕಲಿಯುತ್ತೇನೆ,
            ಯಾವಾಗಲೂ ಬೆಳೆಯುತ್ತೇನೆ! 🚀 (Always learning, always growing!)
          </p>
        </div>
        <div className="text-center ">
          <img
            src="/Screenshot 2025-03-24 at 16-43-07 Instagram.png"
            className="mx-auto max-h-[400px] rounded-lg mb-5"
            alt=""
            onClick={(e) =>
              party.sparkles(e.currentTarget, {
                count: party.variation.range(80, 150), // Optimized count
                size: party.variation.range(0.6, 1.5), // Keep size optimized
                shapes: ["circle", "square"], // Optional: Change shapes
              })
            }
          />
          <p>click on the image</p>
        </div>
      </div>
    </section>
  );
};

export default About;
