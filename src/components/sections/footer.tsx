import { businessInfo } from "@/content";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[var(--color-espresso)] border-t border-[var(--color-cream)]/10 pt-20 pb-10 text-[var(--color-cream)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-xs">
            <div className="mb-6">
              <Image src="/images/logo.png" alt={businessInfo.name} width={200} height={80} className="h-20 w-auto object-contain" />
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
              <a href="https://instagram.com/reefrooftop" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[var(--color-cream)]/70 hover:text-[var(--color-brass)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://facebook.com/reefrooftop" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[var(--color-cream)]/70 hover:text-[var(--color-brass)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
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
