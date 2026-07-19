import { businessInfo } from "@/content";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-espresso)] border-t border-[var(--color-cream)]/10 pt-20 pb-10 text-[var(--color-cream)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-xs">
            <div className="mb-6">
              <img src="/images/logo.png" alt={businessInfo.name} className="h-16 w-auto object-contain" />
            </div>
            <p className="text-sm text-[var(--color-cream)]/60 leading-relaxed font-light mb-6">
              {businessInfo.location}
            </p>
            <a href={`mailto:${businessInfo.email}`} className="block text-sm text-[var(--color-cream)]/80 hover:text-[var(--color-brass)] transition-colors mb-2 font-light">
              {businessInfo.email}
            </a>
            <a href={`tel:${businessInfo.phone}`} className="block text-sm text-[var(--color-cream)]/80 hover:text-[var(--color-brass)] transition-colors font-light">
              {businessInfo.phone}
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-sm text-[var(--color-cream)]/70 font-light">
            <p className="mb-4">{businessInfo.hours}</p>
            <p className="mb-4">{businessInfo.priceRange}</p>
            
            <div className="flex items-center gap-6 mt-4">
              <a href="#" aria-label="Instagram" className="text-[var(--color-cream)]/70 hover:text-[var(--color-brass)] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-[var(--color-cream)]/70 hover:text-[var(--color-brass)] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[var(--color-cream)]/10 pt-8 text-xs text-[var(--color-cream)]/40 font-light gap-4">
          <p>© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
          <p>Website by <a href="#" className="hover:text-[var(--color-cream)] transition-colors">OnyxSavvy</a></p>
        </div>
      </div>
    </footer>
  );
}
