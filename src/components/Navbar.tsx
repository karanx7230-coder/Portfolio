import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../data/personalInfo";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Scroll-spy: highlight the nav tab of the section currently in view.
    // IntersectionObserver (not offsetTop math) so transformed section
    // wrappers can't throw off the calculation.
    const ids = navItems.map((item) => item.href.substring(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-35% 0px -60% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-4 shadow-[0_18px_40px_-24px_rgba(30,71,56,0.35)] border-b border-[#C5A059]/15"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative py-1 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#1E4738]"
                    : "text-[#59605D] hover:text-[#1D1D1F]"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A059]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Status + Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E4738] text-white font-mono text-[10px] uppercase tracking-[0.18em] shadow-[0_10px_25px_-12px_rgba(30,71,56,0.8)] hover:bg-[#2D5D4A] transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
            </span>
            <span>{PERSONAL_INFO.availability}</span>
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs tracking-wider uppercase font-mono text-[#9C968A] hover:text-[#C5A059] transition-colors duration-300"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]/70" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1D1D1F] hover:text-[#C5A059] focus:outline-none transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-[#C5A059]" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl px-6 pt-4 pb-8 overflow-hidden border-b border-[#C5A059]/15"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] font-medium text-[#1D1D1F] hover:text-[#C5A059] py-2 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#1E4738] text-white font-mono text-[11px] uppercase tracking-[0.18em]"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
                  </span>
                  <span>{PERSONAL_INFO.availability}</span>
                </a>
                <div className="flex items-center justify-between">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider font-mono text-[#9C968A] hover:text-[#C5A059] flex items-center gap-1"
                  >
                    GitHub <ArrowUpRight className="w-3 h-3 text-[#C5A059]" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider font-mono text-[#9C968A] hover:text-[#C5A059] flex items-center gap-1"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3 text-[#C5A059]" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
