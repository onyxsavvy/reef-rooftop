import { businessInfo } from "@/content";

export function Footer() {
  return (
    <footer className="bg-[var(--color-espresso)] border-t border-[var(--color-cream)]/10 pt-20 pb-10 text-[var(--color-cream)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-xs">
            <h2 className="font-serif text-3xl mb-6">{businessInfo.name}</h2>
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
              <a href="#" className="uppercase tracking-widest text-xs hover:text-[var(--color-brass)] transition-colors font-medium">Instagram</a>
              <a href="#" className="uppercase tracking-widest text-xs hover:text-[var(--color-brass)] transition-colors font-medium">Facebook</a>
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
