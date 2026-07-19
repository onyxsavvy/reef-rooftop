"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroContent } from "@/content";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    // Gentle parallax on scroll-out
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");
    if (mediaQuery.matches && bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }
  }, []);

  return (
    <section id="home" className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[var(--color-espresso)]">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-espresso)]/50 via-[var(--color-espresso)]/30 to-[var(--color-espresso)] z-10 pointer-events-none" />
        <div ref={bgRef} className="absolute inset-[-10%] w-[120%] h-[120%]">
          <Image
            src="/images/hero.png"
            alt="The Reef Rooftop"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <Reveal delay={0.1} direction="up">
          <p className="text-[var(--color-brass)] tracking-widest text-xs md:text-sm font-bold uppercase mb-6">
            {heroContent.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.3} direction="up">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-0 md:mb-2 text-[var(--color-cream)] leading-tight">
            {heroContent.headline}
          </h1>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[var(--color-cream)]/90 italic mb-8 font-light">
            {heroContent.subHeadline}
          </h2>
        </Reveal>
        <Reveal delay={0.5} direction="up">
          <p className="text-lg md:text-xl text-[var(--color-cream)]/80 mb-12 max-w-xl mx-auto font-light">
            {heroContent.tagline}
          </p>
        </Reveal>
        <Reveal delay={0.7} direction="up" className="flex flex-col items-center gap-8">
          <MagneticButton href="#reserve">
            {heroContent.primaryCta}
          </MagneticButton>
          <a href="#experience" className="text-[var(--color-cream)]/60 hover:text-[var(--color-cream)] transition-colors text-sm uppercase tracking-widest flex flex-col items-center gap-2 mt-4">
            <span>{heroContent.secondaryCta}</span> 
            <span className="text-lg animate-bounce">↓</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
