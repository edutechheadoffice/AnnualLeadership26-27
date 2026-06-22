"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  color: string;
}

interface PreloaderProps {
  onComplete: () => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const PRELOADER_IMAGES = [
  "/hero-left.jpg",
  "/hero-right.jpg",
  "/DSC06417.JPG"
];

const CAPTIONS = [
  { text: "True Knowledge", sub: "" },
  { text: "Faith in Christ", sub: "" },
  { text: "Godly Character", sub: "" },
];

// Brand color system — matches main page
const BRAND = {
  blueDark: "#0B2C67",
  blue: "#2159B5",
  blueLight: "#2F78D8",
  yellow: "#F3D54E",
  orange: "#F28B42",
  white: "#FFFFFF",
  textMuted: "#4B5E7A",
};

const PARTICLE_COLORS = [
  `rgba(243, 213, 78, 0.7)`,   // brand-yellow
  `rgba(47, 120, 216, 0.65)`,  // brand-blue-light
  `rgba(242, 139, 66, 0.5)`,   // brand-orange
  `rgba(255, 255, 255, 0.35)`, // white
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Init particles
    particlesRef.current = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${p.opacity})`);
        ctx.fill();

        // Draw glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        grd.addColorStop(0, p.color.replace(/[\d.]+\)$/, "0.15)"));
        grd.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Move
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  );
}

function LightStreaks() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {/* Diagonal light streaks — brand yellow & blue */}
      <motion.div
        className="absolute -top-20 -left-20 w-[2px] h-[60vh] bg-gradient-to-b from-transparent via-[rgba(243,213,78,0.25)] to-transparent"
        style={{ transform: "rotate(35deg)", transformOrigin: "top left" }}
        animate={{ x: ["0%", "120vw"], opacity: [0, 0.8, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 7, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-20 left-[20%] w-[1px] h-[40vh] bg-gradient-to-b from-transparent via-[rgba(47,120,216,0.35)] to-transparent"
        style={{ transform: "rotate(25deg)", transformOrigin: "top left" }}
        animate={{ x: ["0%", "100vw"], opacity: [0, 0.7, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 9, delay: 2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-20 right-[10%] w-[1.5px] h-[50vh] bg-gradient-to-b from-transparent via-[rgba(242,139,66,0.25)] to-transparent"
        style={{ transform: "rotate(45deg)", transformOrigin: "top right" }}
        animate={{ x: ["0%", "-80vw"], opacity: [0, 0.6, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 6, delay: 4, ease: "easeInOut" }}
      />

      {/* Ambient corner glows — brand colors */}
      <div className="absolute top-0 left-0 w-96 h-96" style={{ background: "radial-gradient(ellipse at top left, rgba(47,120,216,0.14), transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96" style={{ background: "radial-gradient(ellipse at bottom right, rgba(243,213,78,0.10), transparent 70%)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(33,89,181,0.08), transparent 70%)" }} />
    </div>
  );
}

function CaptionSequence() {
  const [captionIndex, setCaptionIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = () => {
      setVisible(false);
      setTimeout(() => {
        setCaptionIndex((prev) => (prev + 1) % CAPTIONS.length);
        setVisible(true);
      }, 600);
    };

    const timer = setInterval(cycle, 3000);
    return () => clearInterval(timer);
  }, []);

  const current = CAPTIONS[captionIndex];

  return (
    <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center z-40 px-6">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={captionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-2"
          >
            {/* Caption — Bebas Neue to match main page headings */}
            <span
              className="font-bebas tracking-[0.3em] uppercase text-white"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                textShadow: "0 0 24px rgba(243,213,78,0.6), 0 0 48px rgba(243,213,78,0.2)",
                letterSpacing: captionIndex === 2 ? "0.4em" : "0.3em",
              }}
            >
              {current.text}
            </span>

            {/* Animated underline — brand yellow */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="h-px w-48 origin-center"
              style={{ background: "linear-gradient(90deg, transparent, #F3D54E, transparent)" }}
            />

            {/* Scripture ref — Inter, muted blue */}
            {current.sub ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.65 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-xs tracking-[0.2em] uppercase font-sans font-medium"
                style={{ color: "#7fa8d4" }}
              >
                {current.sub}
              </motion.span>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setNextIndex((currentIndex + 1) % PRELOADER_IMAGES.length);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PRELOADER_IMAGES.length);
        setTransitioning(false);
      }, 1200);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 z-0">
      {/* Current image with Ken Burns */}
      <AnimatePresence>
        <motion.div
          key={`img-${currentIndex}`}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: transitioning ? 0 : 1, scale: transitioning ? 1.12 : 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={PRELOADER_IMAGES[currentIndex]}
            alt="Leadership meeting photo"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Next image pre-loaded below */}
      <AnimatePresence>
        {transitioning && (
          <motion.div
            key={`img-next-${nextIndex}`}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={PRELOADER_IMAGES[nextIndex]}
              alt="Leadership meeting photo"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Multi-layer overlays — deep navy brand-blue-dark */}
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, #0B2C67 0%, rgba(11,44,103,0.7) 40%, rgba(11,44,103,0.35) 100%)" }} />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to bottom, rgba(11,44,103,0.75) 0%, transparent 35%)" }} />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to right, rgba(11,44,103,0.45) 0%, transparent 30%, transparent 70%, rgba(11,44,103,0.45) 100%)" }} />
      {/* Vignette using brand navy */}
      <div className="absolute inset-0 z-10" style={{ background: "radial-gradient(ellipse at center, transparent 25%, rgba(11,44,103,0.7) 100%)" }} />
    </div>
  );
}

function CircularProgress({ progress }: { progress: number }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      {/* Outer glow — brand blue + yellow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: `0 0 22px 4px rgba(47,120,216,0.25), 0 0 44px 8px rgba(243,213,78,0.12)` }}
      />

      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
        {/* Track */}
        <circle
          cx="50" cy="50" r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="2.5"
        />
        {/* Progress arc — brand blue-light → brand yellow */}
        <motion.circle
          cx="50" cy="50" r={radius}
          fill="none"
          stroke="url(#progressGradBrand)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
        <defs>
          <linearGradient id="progressGradBrand" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2F78D8" />
            <stop offset="100%" stopColor="#F3D54E" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center — Bebas Neue for number, Inter for label */}
      <div className="absolute flex flex-col items-center">
        <span
          className="font-bebas text-2xl text-white tabular-nums leading-none"
          style={{ textShadow: "0 0 12px rgba(243,213,78,0.7)" }}
        >
          {progress}
        </span>
        <span className="text-[8px] uppercase tracking-[0.2em] font-sans" style={{ color: "#7fa8d4" }}>%</span>
      </div>
    </div>
  );
}

function HexagonalAccent() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {/* Thin hexagonal grid lines at edges */}
      <svg className="absolute top-0 left-0 w-64 h-64 opacity-[0.06]" viewBox="0 0 200 200">
        <defs>
          <pattern id="hex" x="0" y="0" width="20" height="23.1" patternUnits="userSpaceOnUse">
            <polygon points="10,1 19,6.5 19,16.5 10,22 1,16.5 1,6.5" fill="none" stroke="#64A0FF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#hex)" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.06]" viewBox="0 0 200 200">
        <defs>
          <pattern id="hex2" x="0" y="0" width="20" height="23.1" patternUnits="userSpaceOnUse">
            <polygon points="10,1 19,6.5 19,16.5 10,22 1,16.5 1,6.5" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#hex2)" />
      </svg>
    </div>
  );
}

// ─── Main Preloader ───────────────────────────────────────────────────────────

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Simulate loading progress
  useEffect(() => {
    let current = 0;
    const target = 100;

    const tick = () => {
      if (current >= target) {
        setProgress(100);
        setTimeout(() => setShowButton(true), 600);
        return;
      }

      // Realistic easing: fast start, slow near end
      const remaining = target - current;
      const increment = Math.max(0.5, remaining * 0.04 + Math.random() * 1.5);
      current = Math.min(current + increment, target);
      setProgress(Math.floor(current));

      const delay = current < 60 ? 40 : current < 85 ? 60 : 90;
      setTimeout(tick, delay);
    };

    const startDelay = setTimeout(tick, 400);
    return () => clearTimeout(startDelay);
  }, []);

  const handleEnter = useCallback(() => {
    setExiting(true);
    setTimeout(onComplete, 900);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: exiting ? 0.9 : 0.4, ease: [0.76, 0, 0.24, 1] }}
      style={{ background: BRAND.blueDark }}
    >
      {/* ── Background: scrolling image carousel ── */}
      <ImageCarousel />

      {/* ── Canvas particles ── */}
      <FloatingParticles />

      {/* ── Light streaks ── */}
      <LightStreaks />

      {/* ── Hexagonal corner accents ── */}
      <HexagonalAccent />

      {/* ── Thin top progress bar — brand blue-light → brand yellow ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-50" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${BRAND.blueLight}, ${BRAND.yellow})`,
            boxShadow: `0 0 10px rgba(243,213,78,0.55)`,
            transition: "width 0.1s linear",
          }}
        />
      </div>

      {/* ── Main center content ── */}
      <div className="relative z-40 flex flex-col items-center px-6 text-center" style={{ marginTop: "-6vh" }}>

        {/* Event label — Inter, brand yellow */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-5 flex items-center gap-4"
        >
          <div className="h-px w-12 sm:w-20" style={{ background: `linear-gradient(to right, transparent, ${BRAND.yellow})` }} />
          <div className="relative w-48 h-12 sm:w-64 sm:h-16">
            <Image
              src="/sdh-logo-white.png"
              alt="Sekolah Dian Harapan"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 192px, 256px"
              style={{ filter: "drop-shadow(0 0 10px rgba(243,213,78,0.4))" }}
            />
          </div>
          <div className="h-px w-12 sm:w-20" style={{ background: `linear-gradient(to left, transparent, ${BRAND.yellow})` }} />
        </motion.div>

        {/* Main title — Bebas Neue, exact same style as Hero.tsx */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-bebas uppercase text-white leading-none mb-1 select-none"
          style={{
            fontSize: "clamp(3rem, 11vw, 7rem)",
            letterSpacing: "0.06em",
            textShadow: `0 0 50px rgba(47,120,216,0.35), 0 0 100px rgba(47,120,216,0.12)`,
          }}
        >
          Annual
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-[1px] mb-1 origin-center"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(243,213,78,0.55), rgba(47,120,216,0.55), transparent)`,
          }}
        />

        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="font-bebas uppercase text-white leading-none mb-1 select-none"
          style={{
            fontSize: "clamp(3rem, 11vw, 7rem)",
            letterSpacing: "0.06em",
            textShadow: `0 0 50px rgba(243,213,78,0.4), 0 0 100px rgba(243,213,78,0.15)`,
          }}
        >
          Leadership
        </motion.h1>

        {/* "Meeting" — same gradient as Hero: brand-blue → brand-orange */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-bebas uppercase leading-none select-none"
          style={{
            fontSize: "clamp(3rem, 11vw, 7rem)",
            letterSpacing: "0.06em",
            background: `linear-gradient(to right, ${BRAND.blue}, ${BRAND.orange})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Meeting
        </motion.h1>

        {/* Decorative line — brand yellow */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="mt-3 w-48 h-[1px] origin-center"
          style={{
            background: `linear-gradient(90deg, transparent, ${BRAND.yellow}, transparent)`,
          }}
        />

        {/* Progress + button zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <AnimatePresence mode="wait">
            {!showButton ? (
              <motion.div
                key="progress"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <CircularProgress progress={progress} />
              </motion.div>
            ) : (
              <motion.div
                key="button"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Button — brand yellow accent, Inter label */}
                <button
                  id="preloader-enter-btn"
                  onClick={handleEnter}
                  className="relative group px-10 py-3.5 font-sans text-xs uppercase tracking-[0.3em] font-semibold text-white transition-all duration-300"
                  style={{
                    border: `1px solid rgba(243,213,78,0.45)`,
                    background: `rgba(243,213,78,0.07)`,
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = `rgba(243,213,78,0.16)`;
                    (e.currentTarget as HTMLButtonElement).style.borderColor = `rgba(243,213,78,0.85)`;
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 22px rgba(243,213,78,0.3), inset 0 0 20px rgba(243,213,78,0.06)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = `rgba(243,213,78,0.07)`;
                    (e.currentTarget as HTMLButtonElement).style.borderColor = `rgba(243,213,78,0.45)`;
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  }}
                >
                  {/* Corner accents — brand yellow */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l" style={{ borderColor: BRAND.yellow }} />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r" style={{ borderColor: BRAND.yellow }} />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l" style={{ borderColor: BRAND.yellow }} />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r" style={{ borderColor: BRAND.yellow }} />

                  <span style={{ textShadow: `0 0 14px rgba(243,213,78,0.7)` }}>
                    GO TO WEBSITE
                  </span>
                </button>

              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Animated captions ── */}
      <CaptionSequence />

      {/* ── Bottom decorative strip — brand colors ── */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="h-px origin-center"
          style={{ background: `linear-gradient(90deg, transparent, rgba(243,213,78,0.45), rgba(47,120,216,0.35), transparent)` }}
        />
        <div className="h-20" style={{ background: `linear-gradient(to top, ${BRAND.blueDark}, transparent)` }} />
      </div>

      {/* ── Scan-line overlay for depth ── */}
      <div
        className="absolute inset-0 z-30 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
          backgroundSize: "100% 3px",
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
