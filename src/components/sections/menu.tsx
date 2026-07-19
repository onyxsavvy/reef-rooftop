import Image from "next/image";
import { menuHighlights } from "@/content";
import { PinFilmstrip } from "@/components/motion/pin-filmstrip";
import { Reveal } from "@/components/motion/reveal";

export function Menu() {
  return (
    <div id="menu">
       <PinFilmstrip>
         <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24 w-full h-full">
           <div className="flex-shrink-0 max-w-sm w-full">
             <Reveal>
               <h3 className="text-[var(--color-brass)] tracking-widest text-xs font-bold uppercase mb-4">
                 {menuHighlights.eyebrow}
               </h3>
               <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] leading-tight mb-8">
                 {menuHighlights.headline}
               </h2>
               <div className="inline-block border border-[var(--color-brass)]/30 text-[var(--color-brass)] px-4 py-2 rounded-full text-sm">
                 {menuHighlights.priceNote}
               </div>
             </Reveal>
           </div>
           
           {/* Dish Cards */}
           <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center w-full">
             {menuHighlights.dishes.map((dish, idx) => (
               <Reveal key={idx} delay={0.1 * idx} className="w-full md:w-[320px] flex-shrink-0 flex flex-col items-start md:items-center text-left md:text-center border-l md:border-l-0 md:border-t-0 md:border-l-[1px] border-[var(--color-brass)]/20 pl-6 md:pl-12">
                 {dish.image && (
                   <div className="relative w-full h-48 md:w-48 md:h-48 mb-6 overflow-hidden rounded-full">
                     <Image 
                       src={dish.image} 
                       alt={dish.name}
                       fill
                       sizes="(max-width: 768px) 100vw, 320px"
                       className="object-cover transition-transform duration-700 hover:scale-105"
                     />
                   </div>
                 )}
                 <h4 className="font-serif text-2xl text-[var(--color-cream)] mb-2">{dish.name}</h4>
                 <p className="text-[var(--color-cream)]/70 text-sm mb-4 leading-relaxed">{dish.note}</p>
                 <span className="text-[var(--color-brass)] text-xs uppercase tracking-widest font-medium">{dish.tag}</span>
               </Reveal>
             ))}
             
             <Reveal delay={0.6} className="w-full md:w-[200px] flex-shrink-0 flex items-start md:items-center justify-start md:justify-center pt-8 md:pt-0">
                <a href="/menu" className="text-[var(--color-cream)] border-b border-[var(--color-brass)] pb-1 hover:text-[var(--color-brass)] transition-colors uppercase tracking-widest text-sm font-medium">
                  {menuHighlights.cta}
                </a>
             </Reveal>
           </div>
         </div>
       </PinFilmstrip>
    </div>
  );
}
