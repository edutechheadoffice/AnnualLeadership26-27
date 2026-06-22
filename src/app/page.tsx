"use client";

import React, { useState, useCallback } from "react";
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
import Venue from "@/components/Venue";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={handlePreloaderComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col min-h-screen relative"
          >
            {/* Technical grid backdrop and floating ambient canvas */}
            <GridBackground />

            {/* Sticky Header Navbar */}
            <Navbar />

            {/* Content Sections Wrapper */}
            <main className="flex-grow">
              <Hero />
              <Invitation />
              <Speakers />
              <Rundown />
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
