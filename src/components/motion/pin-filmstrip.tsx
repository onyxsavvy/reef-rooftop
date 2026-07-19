"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PinFilmstripProps {
  children: React.ReactNode;
  className?: string;
}

export function PinFilmstrip({ children, className }: PinFilmstripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    let ctx = gsap.context(() => {});

    // Need a tiny delay for Next.js app router initial paint so widths are correct
    setTimeout(() => {
      if (mediaQuery.matches && containerRef.current && scrollWrapperRef.current) {
        ctx = gsap.context(() => {
          const getScrollAmount = () => {
            if (!scrollWrapperRef.current) return 0;
            return -(scrollWrapperRef.current.scrollWidth - window.innerWidth);
          };

          const tween = gsap.to(scrollWrapperRef.current, {
            x: getScrollAmount,
            ease: "none"
          });

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${getScrollAmount() * -1}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true
          });
        }, containerRef);
      }
    }, 100);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={cn("relative md:h-screen w-full overflow-hidden bg-[var(--color-espresso)] flex flex-col justify-center", className)}>
      <div ref={scrollWrapperRef} className="flex flex-col md:flex-row md:flex-nowrap w-full md:w-fit h-fit items-start md:items-center px-[5vw] md:px-[10vw] py-24 md:py-0 gap-16 md:gap-0">
        {children}
      </div>
    </section>
  );
}
