"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        </div>
      </header>
    </>
  );
}
