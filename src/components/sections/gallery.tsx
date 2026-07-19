"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/motion/reveal";

const galleryImages = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
  "/images/gallery-5.png"
];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    const mediaQuery = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    if (mediaQuery.matches && containerRef.current && col1Ref.current && col2Ref.current) {
      gsap.to(col1Ref.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      gsap.to(col2Ref.current, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  }, []);

  const col1Images = galleryImages.filter((_, i) => i % 2 === 0);
  const col2Images = galleryImages.filter((_, i) => i % 2 === 1);

  return (
    <section id="gallery" ref={containerRef} className="py-24 md:py-32 bg-[var(--color-espresso)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="mb-16 md:mb-24 text-center">
          <h3 className="text-[var(--color-brass)] tracking-widest text-xs font-bold uppercase mb-4">
            Vibe Check
          </h3>
          <p className="text-[var(--color-cream)]/60 text-sm">
            Tag @reefrooftop — we love a good repost.
          </p>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
          {/* Column 1 */}
          <div ref={col1Ref} className="w-full md:w-1/2 flex flex-col gap-8 md:gap-16">
            {col1Images.map((src, i) => (
              <Reveal key={src} delay={i * 0.2}>
                <div className="relative aspect-[4/5] w-full overflow-hidden group cursor-pointer">
                  <Image 
                    src={src}
                    alt={`Gallery image ${i * 2 + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--color-espresso)]/0 group-hover:bg-[var(--color-espresso)]/20 transition-colors duration-500" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Column 2 - Offset */}
          <div ref={col2Ref} className="w-full md:w-1/2 flex flex-col gap-8 md:gap-16 md:mt-32">
            {col2Images.map((src, i) => (
              <Reveal key={src} delay={0.2 + i * 0.2}>
                <div className="relative aspect-[3/4] w-full overflow-hidden group cursor-pointer">
                  <Image 
                    src={src}
                    alt={`Gallery image ${i * 2 + 2}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--color-espresso)]/0 group-hover:bg-[var(--color-espresso)]/20 transition-colors duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
