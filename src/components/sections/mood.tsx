"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { moodContent } from "@/content";
import { Reveal } from "@/components/motion/reveal";

export function Mood() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");
    if (mediaQuery.matches && bgRef.current) {
      gsap.fromTo(bgRef.current, 
        { yPercent: -20 },
        {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: "#mood",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }
  }, []);

  return (
    <section id="mood" className="relative h-[80svh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--color-espresso)]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-espresso)]/40 z-10" />
        <div ref={bgRef} className="absolute inset-[-20%] w-[140%] h-[140%]">
          <Image 
            src="/images/experience-3.png"
            alt="The Reef Signature Mood" 
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
      <div className="relative z-20 text-center px-4 w-full">
        <Reveal delay={0.2}>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[var(--color-cream)] leading-tight max-w-4xl mx-auto">
            {moodContent.line}
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
