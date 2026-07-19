"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MarqueeBand({ text }: { text: string }) {
   const container = useRef<HTMLDivElement>(null);
   const textRef = useRef<HTMLDivElement>(null);
   
   useEffect(() => {
     if (typeof window !== "undefined") {
       gsap.registerPlugin(ScrollTrigger);
     }
     const mediaQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");
     
     if (mediaQuery.matches && textRef.current) {
        const scrollTween = gsap.to(textRef.current, {
           xPercent: -50,
           ease: "none",
           duration: 15,
           repeat: -1,
        });
        
        const st = ScrollTrigger.create({
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
             const velocity = self.getVelocity();
             const timeScale = 1 + Math.abs(velocity) / 200;
             // Ensure it always moves at least normal speed, but speeds up on scroll
             gsap.to(scrollTween, { timeScale: Math.max(1, timeScale), duration: 0.3, overwrite: true });
          }
        });
        
        return () => {
           scrollTween.kill();
           st.kill();
        }
     }
   }, []);
   
   // Repeat the text 4 times to ensure it covers the screen width and can loop smoothly at -50%
   return (
      <div ref={container} className="w-full overflow-hidden bg-[var(--color-bark)] text-[var(--color-brass)] py-4 whitespace-nowrap flex border-y border-[var(--color-brass)]/20">
         <div ref={textRef} className="flex gap-4 font-sans text-sm tracking-[0.2em] uppercase font-bold items-center">
            <span className="px-2">{text}</span>
            <span className="px-2">{text}</span>
            <span className="px-2">{text}</span>
            <span className="px-2">{text}</span>
         </div>
      </div>
   );
}
