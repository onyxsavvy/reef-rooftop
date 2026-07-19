"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Experience", href: "#experience" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Visit", href: "#visit" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Show background after 50px
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = links.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "";
      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          if (section.offsetTop <= scrollPosition) {
            currentSection = `#${section.id}`;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "bg-[var(--color-espresso)]/90 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => scrollTo(e, "#home")}
            className="flex items-center"
          >
            <img src="/images/logo.png?v=3" alt="The Reef Logo" className="h-14 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  activeSection === link.href ? "text-[var(--color-brass)]" : "text-[var(--color-cream)]/70 hover:text-[var(--color-cream)]"
                )}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reserve"
              onClick={(e) => scrollTo(e, "#reserve")}
              className="bg-[var(--color-brass)] text-[var(--color-espresso)] font-medium px-6 py-2.5 rounded-full text-sm transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(184,135,75,0.3)]"
            >
              Reserve a Table
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[var(--color-cream)] p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--color-espresso)] flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button
                className="text-[var(--color-cream)] p-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>
            
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="font-serif text-4xl text-[var(--color-cream)]"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#reserve"
                onClick={(e) => scrollTo(e, "#reserve")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + links.length * 0.1 }}
                className="bg-[var(--color-brass)] text-[var(--color-espresso)] font-medium px-8 py-4 rounded-full text-lg mt-4"
              >
                Reserve a Table
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
