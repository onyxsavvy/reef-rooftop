"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StickySplitRevealProps {
  images: string[];
  children: React.ReactNode;
  className?: string;
}

export function StickySplitReveal({ images, children, className }: StickySplitRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    // Only apply complex GSAP pins if media query allows motion and min-width is desktop
    const mediaQuery = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    let ctx = gsap.context(() => {});

    if (mediaQuery.matches && containerRef.current && imageRefs.current.length > 1) {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=150%", // Scroll range for pinning
            pin: true,
            scrub: true,
          }
        });

        // Crossfade between images based on scroll
        if (imageRefs.current[1]) {
          tl.fromTo(
            imageRefs.current[1],
            { opacity: 0 },
            { opacity: 1, ease: "none" }
          );
        }
      }, containerRef);
    }

    return () => ctx.revert();
  }, [images]);

  return (
    <section 
      ref={containerRef} 
      className={cn("relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden", className)}
    >
      {/* Left Panel: Images */}
      <div ref={leftPanelRef} className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
        {images.map((src, idx) => (
          <img
            key={src}
            ref={(el) => { imageRefs.current[idx] = el; }}
            src={src}
            alt={`Experience visual ${idx + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: idx === 0 ? 1 : 0 }} 
          />
        ))}
      </div>
      
      {/* Right Panel: Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-[var(--color-espresso)] z-10">
        <div className="max-w-md w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
