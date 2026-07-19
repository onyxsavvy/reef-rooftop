"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reserveContent, businessInfo } from "@/content";
import { Reveal } from "@/components/motion/reveal";
import { Phone, MessageCircle, Check } from "lucide-react";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function Reserve() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const inputClasses = "w-full bg-transparent border-b border-[var(--color-cream)]/30 text-[var(--color-cream)] py-3 px-1 focus:outline-none focus:border-[var(--color-brass)] transition-colors placeholder:text-[var(--color-cream)]/30 text-lg font-light rounded-none";

  return (
    <section id="reserve" className="py-24 md:py-32 bg-[var(--color-espresso)] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal delay={0.1} direction="up">
            <h3 className="text-[var(--color-brass)] tracking-widest text-xs font-bold uppercase mb-4">
              {reserveContent.eyebrow}
            </h3>
          </Reveal>
          <Reveal delay={0.2} direction="up">
            <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-cream)] leading-tight mb-6">
              {reserveContent.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.3} direction="up">
            <p className="text-[var(--color-cream)]/70 text-lg font-light">
              {reserveContent.body}
            </p>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto bg-[var(--color-bark)]/50 backdrop-blur-sm p-8 md:p-12 border border-[var(--color-cream)]/10">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <Reveal delay={0.4}>
                    <input type="text" placeholder="Name" required className={inputClasses} />
                  </Reveal>
                  <Reveal delay={0.5}>
                    <input type="tel" placeholder="Phone Number" required className={inputClasses} />
                  </Reveal>
                  <Reveal delay={0.6}>
                    <input type="date" required className={inputClasses} />
                  </Reveal>
                  <Reveal delay={0.7}>
                    <input type="time" required className={inputClasses} />
                  </Reveal>
                  <Reveal delay={0.8}>
                    <select required className={inputClasses} defaultValue="">
                      <option value="" disabled className="text-black">Party Size</option>
                      {[1,2,3,4,5,6,7,8,"9+"].map(n => <option key={n} value={n} className="text-black">{n} People</option>)}
                    </select>
                  </Reveal>
                  <Reveal delay={0.9}>
                    <input type="text" placeholder="Occasion (optional)" className={inputClasses} />
                  </Reveal>
                </div>
                
                <Reveal delay={1.0}>
                  <textarea 
                    placeholder="Message (optional)" 
                    rows={1}
                    className={inputClasses}
                  />
                </Reveal>
                
                <Reveal delay={1.1} className="mt-8 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <a href={`tel:${businessInfo.phone}`} className="text-[var(--color-cream)] hover:text-[var(--color-brass)] transition-colors flex items-center gap-2 text-sm uppercase tracking-widest">
                      <Phone size={16} /> Call
                    </a>
                    <a href={`https://wa.me/91${businessInfo.phone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="text-[var(--color-cream)] hover:text-[var(--color-brass)] transition-colors flex items-center gap-2 text-sm uppercase tracking-widest">
                      <MessageCircle size={16} /> WhatsApp
                    </a>
                  </div>
                  
                  <MagneticButton>
                    {isSubmitting ? "Sending..." : reserveContent.submitText}
                  </MagneticButton>
                </Reveal>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-[var(--color-brass)] flex items-center justify-center mb-6 text-[var(--color-brass)]">
                  <motion.div
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Check size={32} />
                  </motion.div>
                </div>
                <h3 className="font-serif text-3xl text-[var(--color-cream)] mb-4">Reservation Received</h3>
                <p className="text-[var(--color-cream)]/70 text-lg font-light max-w-sm">
                  {reserveContent.successMessage}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
