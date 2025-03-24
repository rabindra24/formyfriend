import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import party from "party-js";
import About from "@/components/About";
const Index = () => {
  useEffect(() => {
    // Initialize animations for elements as they come into view
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scale-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select elements to observe
    document.querySelectorAll("#features > div > div > div").forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    document.querySelectorAll("#contact > div > div").forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    // Testimonials animation
    document
      .querySelectorAll("section > div > div.grid > div")
      .forEach((el) => {
        el.classList.add("opacity-0");
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);
  const lastClickTime = useRef(0);

  // Check for saved theme in localStorage and set initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // If no saved preference, check system preference
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 relative">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About/>
        <Testimonials />
        {/* <CallToAction /> */}
      </main>
      <Footer />
      <div className="relative max-w-[100px] overflow-hidden">
        <div
          className="bg-accent fixed max-md:right-5 right-32 top-[50%] h-14 w-14 rounded-full z-10 text-2xl flex items-center justify-center cursor-pointer shadow-lg"
          onClick={(e) =>
            party.confetti(e.currentTarget, {
              count: party.variation.range(80, 150), // Optimized count
              spread: 50, // Narrower spread for an upward effect
              size: party.variation.range(0.6, 1.5), // Keep size optimized
              shapes: ["circle", "square"], // Optional: Change shapes
            })
          }
        >
          🎉
        </div>
      </div>
    </div>
  );
};

export default Index;
