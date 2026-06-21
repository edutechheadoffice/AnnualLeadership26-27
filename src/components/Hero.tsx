"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants for cinematic entrance
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 pt-24 overflow-hidden"
    >
      {/* Mouse Reactive Decorative Elements */}
      <div
        className="absolute w-72 h-72 rounded-full border border-brand-blue-light/10 flex items-center justify-center pointer-events-none"
        style={{
          top: "15%",
          left: "8%",
          transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
          transition: "transform 0.3s cubic-bezier(0.1, 0.8, 0.2, 1)",
        }}
      >
        <div className="w-48 h-48 rounded-full border border-dashed border-brand-yellow/30" />
      </div>

      <div
        className="absolute w-96 h-96 rounded-full bg-brand-yellow/10 pointer-events-none"
        style={{
          bottom: "10%",
          right: "5%",
          transform: `translate(${mousePos.x * -50}px, ${mousePos.y * -50}px)`,
          transition: "transform 0.3s cubic-bezier(0.1, 0.8, 0.2, 1)",
        }}
      />

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -6 }}
        animate={{ opacity: 1, x: 0, rotate: -6 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 w-32 xl:w-80 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-white z-0"
      >
        <Image src="/hero-left.jpg" alt="Event Left" fill className="object-cover" />
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 6 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-32 xl:w-80 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-white z-0"
      >
        <Image src="/hero-right.jpg" alt="Event Right" fill className="object-cover" />
      </motion.div>

      <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        {/* Upper Micro Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-brand-blue-light/10 border border-brand-blue-light/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-dark mb-8 text-shadow-soft"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          Information Center
        </motion.div>

        {/* Cinematic Staggered Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Main Huge Display Title */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={titleWordVariants}
              className="text-6xl sm:text-8xl md:text-9xl font-bebas text-brand-blue-dark leading-[0.85] uppercase tracking-wide select-none"
            >
              Annual
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              variants={titleWordVariants}
              className="text-6xl sm:text-8xl md:text-9xl font-bebas text-brand-blue-dark leading-[0.85] uppercase tracking-wide select-none"
            >
              Leadership
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              variants={titleWordVariants}
              className="text-6xl sm:text-8xl md:text-9xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange leading-[0.85] uppercase tracking-wide select-none"
            >
              Meeting
            </motion.h1>
          </div>

          {/* Subtitle / Core Theme */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-2xl font-semibold tracking-[0.3em] uppercase text-brand-text-muted max-w-2xl leading-relaxed mt-2"
          >
            Alive in Christ <span className="block text-brand-orange">•</span> Collosians 2:3-14
          </motion.p>

          {/* Location & Date Details in Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm"
          >
            <div className="flex items-center gap-2 bg-brand-white border border-brand-blue-light/10 px-4 py-2 rounded-full shadow-sm text-brand-text-dark font-medium">
              <Calendar className="w-4 h-4 text-brand-blue-light" />
              July 06-08, 2026
            </div>
            <div className="flex items-center gap-2 bg-brand-white border border-brand-blue-light/10 px-4 py-2 rounded-full shadow-sm text-brand-text-dark font-medium">
              <MapPin className="w-4 h-4 text-brand-orange" />
              SDH Daan Mogot
            </div>
          </motion.div>


        </motion.div>
      </div>

      {/* Elegant visual wave transition helper at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-white to-transparent pointer-events-none" />
    </section>
  );
}
