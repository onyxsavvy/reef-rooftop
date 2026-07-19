"use client";

import Image from "next/image";
import { eventsContent } from "@/content";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function Events() {
  return (
    <section id="events" className="py-24 md:py-32 bg-[var(--color-bark)] text-[var(--color-cream)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-2 lg:order-1">
          <Reveal delay={0.1}>
            <h3 className="text-[var(--color-brass)] tracking-widest text-xs font-bold uppercase mb-6">
              {eventsContent.eyebrow}
            </h3>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] leading-tight mb-8">
              {eventsContent.headline}
            </h2>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="text-[var(--color-cream)]/80 text-lg leading-relaxed mb-12 max-w-lg font-light">
              {eventsContent.body}
            </p>
          </Reveal>
          
          <div className="flex flex-col gap-6 mb-12 w-full">
            {eventsContent.callouts.map((callout, i) => (
              <Reveal key={i} delay={0.4 + (i * 0.1)} direction="left" className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[var(--color-brass)] shrink-0" />
                <span className="text-lg md:text-xl font-serif text-[var(--color-cream)]">{callout}</span>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={0.7}>
            <MagneticButton href="#reserve">
              {eventsContent.cta}
            </MagneticButton>
          </Reveal>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 h-[50vh] lg:h-[80vh] relative">
          <Reveal delay={0.3} className="w-full h-full">
            <div className="relative w-full h-full overflow-hidden rounded-sm">
              <Image 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop"
                alt="Celebrations at The Reef"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
