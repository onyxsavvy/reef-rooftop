"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonialsContent } from "@/content";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsContent.quotes.length);
    }, 6000); // 6 second hold per quote
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-32 md:py-48 bg-[var(--color-espresso)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        <Reveal delay={0.1}>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-serif text-8xl md:text-[9rem] lg:text-[12rem] leading-none text-[var(--color-brass)] mb-2 md:mb-6">
              <CountUp end={4.6} suffix="★" duration={2} />
            </h2>
            <div className="flex items-center gap-2 text-lg md:text-2xl text-[var(--color-cream)]/80 font-light tracking-wide">
              <CountUp end={12900} suffix="+" duration={2} /> 
              <span>Google Reviews</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 md:mt-32 w-full max-w-3xl min-h-[120px] md:min-h-[160px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute w-full"
            >
              <p className="font-serif text-2xl md:text-4xl text-[var(--color-cream)] leading-relaxed italic">
                "{testimonialsContent.quotes[currentIndex]}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Progress Dots */}
        <Reveal delay={0.4} className="mt-12 flex gap-3">
          {testimonialsContent.quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="w-2 h-2 rounded-full transition-all duration-500"
              style={{
                backgroundColor: currentIndex === i ? "var(--color-brass)" : "rgba(243, 233, 210, 0.2)",
                transform: currentIndex === i ? "scale(1.5)" : "scale(1)"
              }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </Reveal>

      </div>
    </section>
  );
}
