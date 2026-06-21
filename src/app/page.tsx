"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import GridBackground from "@/components/GridBackground";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Invitation from "@/components/Invitation";
import Rundown from "@/components/Rundown";
import Speakers from "@/components/Speakers";
import EventGuidelines from "@/components/EventGuidelines";
import AffiliatedSchools from "@/components/AffiliatedSchools";
import VenueMap from "@/components/VenueMap";
import Venue from "@/components/Venue";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Incremental progress simulation for loading sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Brief hold at 100%
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -50,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-0 z-100 bg-[#0B2C67] flex flex-col items-center justify-center text-brand-white p-6"
          >
            {/* Grid Pattern Background Accent inside the loader */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            <div className="flex flex-col items-center max-w-md w-full relative z-10">
              {/* Micro-text Tag */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase font-bold tracking-[0.25em] text-brand-yellow-bright mb-4 text-center"
              >
                Sekolah Dian Harapan
              </motion.span>

              {/* Title Header */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl font-bebas tracking-wider text-center uppercase mb-8"
              >
                Annual Leadership Meeting
              </motion.h1>

              {/* Progress Line */}
              <div className="w-64 h-0.5 bg-brand-white/10 rounded-full overflow-hidden mb-3">
                <motion.div
                  className="h-full bg-brand-yellow-bright origin-left"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Loader Status Label */}
              <div className="text-[10px] font-mono text-brand-white/40 tracking-wider uppercase">
                Synchronizing Resources: {progress}%
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen relative"
          >
            {/* Technical grid backdrop and floating ambient canvas */}
            <GridBackground />

            {/* Sticky Header Navbar */}
            <Navbar />

            {/* Content Sections Wrapper */}
            <main className="flex-grow">
              <Hero />
              <AffiliatedSchools />
              <Invitation />
              <Rundown />
              <Speakers />
              <EventGuidelines />
              <Venue />
            </main>

            {/* Brand Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
