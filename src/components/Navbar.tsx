"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Speakers", href: "#speakers" },
  { label: "Rundown", href: "#rundown" },
  { label: "Resources", href: "#resources" },
  { label: "Guidelines", href: "#guidelines" },
  { label: "Venue", href: "#venue" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section for indicator
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#F8F8F6]/85 backdrop-blur-md shadow-md py-3 border-b border-brand-blue-light/10"
          : "bg-transparent py-5"
          }`}
      >
        {/* Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue-light via-brand-yellow-bright to-brand-orange origin-left z-50"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Event Title */}
          <a href="#hero" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="ALM Logo"
              width={128}
              height={128}
              className="mr-3 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-200 relative py-1 ${isActive ? "text-brand-blue-light" : "text-brand-text-dark hover:text-brand-blue-light"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow-bright"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-blue-dark hover:text-brand-blue transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-[#F8F8F6]/95 backdrop-blur-lg border-b border-brand-blue-light/10 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold uppercase tracking-wider text-brand-text-dark hover:text-brand-blue-light transition-colors py-1 border-b border-brand-blue-light/5"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  href="#activities"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-brand-white py-3 rounded-full text-sm uppercase font-bold tracking-wider shadow-md"
                >
                  Activity Center
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
