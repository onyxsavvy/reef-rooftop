import { visitContent } from "@/content";
import { Reveal } from "@/components/motion/reveal";
import { MapPin, Clock, IndianRupee } from "lucide-react";

export function Visit() {
  return (
    <section id="visit" className="py-24 md:py-32 bg-[var(--color-bark)] border-t border-[var(--color-espresso)]/50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Info Side */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <Reveal delay={0.1}>
            <h3 className="text-[var(--color-brass)] tracking-widest text-xs font-bold uppercase mb-4">
              {visitContent.eyebrow}
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-cream)] leading-tight mb-12">
              {visitContent.headline}
            </h2>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal delay={0.2} direction="up" className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[var(--color-brass)] shrink-0 mt-1" />
              <div>
                <h4 className="text-[var(--color-cream)] font-medium mb-1 tracking-wide">Location</h4>
                <p className="text-[var(--color-cream)]/70 text-sm leading-relaxed font-light">
                  {visitContent.location}
                </p>
                <p className="text-[var(--color-brass)]/80 text-xs mt-3 italic">
                  {visitContent.note}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up" className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[var(--color-brass)] shrink-0 mt-1" />
              <div>
                <h4 className="text-[var(--color-cream)] font-medium mb-1 tracking-wide">Hours</h4>
                <p className="text-[var(--color-cream)]/70 text-sm font-light">
                  {visitContent.hours}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4} direction="up" className="flex items-start gap-4">
              <IndianRupee className="w-6 h-6 text-[var(--color-brass)] shrink-0 mt-1" />
              <div>
                <h4 className="text-[var(--color-cream)] font-medium mb-1 tracking-wide">Pricing</h4>
                <p className="text-[var(--color-cream)]/70 text-sm font-light">
                  {visitContent.priceRange}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Map Side */}
        <div className="w-full lg:w-2/3 h-[50vh] lg:h-auto min-h-[400px] bg-[var(--color-espresso)] rounded-sm overflow-hidden relative">
          <Reveal delay={0.3} className="w-full h-full">
            {/* Simple embed map placeholder for now - you can replace with a real Google Maps iframe later */}
            <iframe 
              src="https://maps.google.com/maps?q=Hotel%20Coral%20Grand,%20Kantatoli,%20Ranchi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(100%) contrast(1.2) sepia(20%) hue-rotate(350deg)" }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>

      </div>
    </section>
  );
}
