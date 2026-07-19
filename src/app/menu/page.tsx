import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";

export default function MenuPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-1 pt-32 pb-24 bg-[var(--color-espresso)] flex flex-col items-center justify-center text-center px-6 mt-16">
         <h1 className="font-serif text-5xl md:text-7xl text-[var(--color-cream)] mb-6">Full Menu</h1>
         <p className="text-[var(--color-cream)]/70 max-w-xl mx-auto mb-12">
           Our complete seasonal menu is currently being updated. Please visit us to see the latest offerings.
         </p>
         <a href="/#reserve" className="bg-[var(--color-brass)] text-[var(--color-espresso)] font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(184,135,75,0.4)]">
           Reserve a Table
         </a>
      </div>
      <Footer />
    </main>
  );
}
