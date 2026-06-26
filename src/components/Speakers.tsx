"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, BookOpen } from "lucide-react";

export interface Speaker {
  id: string;
  name: string;
  jobTitle: string;
  topic: string;
  role?: string;
  label?: string;
  imageUrl?: string;
  imagePosition?: string; // misalnya: "top", "bottom", "center", atau "0% 20%"
  flipHorizontal?: boolean;
  imageScale?: number;
}

export const day1Speakers: Speaker[] = [
  {
    id: "d1-1",
    name: "Pdt. Williem Ferdinandus",
    jobTitle: "Pastor of Christ Chapel Manado",
    topic: "A Community of Servants Called to Lead (Mark 10:43-35)",
    role: "Preacher",
    label: "Opening Service",
    imageUrl: "Ps.-Williem-Ferdinandus-2048x2048.webp",
    imagePosition: "top",
  }
  ,
  {
    id: "d1-2",
    name: "dr. Stephanie Riady",
    jobTitle: "Executive Director of Pelita Harapan Group",
    topic: "Faithful Leadership for a Growing Mission: PHG & SDH: Where We Stand, Where We Are Going, What We Will and Will Not Pursue",
    role: "Speaker",
    imageUrl: "1712070861955.jpeg",
  },
  {
    id: "d1-3",
    name: "Heri Yulianto",
    jobTitle: "Ruling Elder of Christ Chapel Karawaci",
    topic: "Interactive Biblical Exposition: What Does It Mean to Be Alive in Christ?",
    role: "Speaker",
    imageUrl: "https://www.uph.edu/wp-content/uploads/2023/08/Heri-Yulianto-1024x1024.jpg?x78467",
    flipHorizontal: true,
  },
  {
    id: "d1-4",
    name: "Deny Kiswanto Sinaga",
    jobTitle: "Executive Director of Cluster 2",
    topic: "Faithful Leadership for a Growing Mission: PHG & SDH: Where We Stand, Where We Are Going, What We Will and Will Not Pursue",
    role: "Speaker",
    imageUrl: "DSC09905-HD.jpg",
    imagePosition: "top", // diatur atas
  },
  {
    id: "d1-5",
    name: "Wilik Chen",
    jobTitle: "Vice Executive Director of Cluster 2",
    topic: "Application Workshop: Where Does the Theme Live in Our Schools?",
    role: "Speaker",
    imageUrl: "HoS DM Wilik_edited_edited.avif",
    imagePosition: "top",
    flipHorizontal: true,
  },
  {
    id: "d1-6",
    name: "Alvin Wijaya",
    jobTitle: "School System Coordinator of SDH",
    topic: "Leadership Charge: We Do Not Teach This Theme. We Live It.",
    role: "Speaker",
    imageUrl: "DSC09339.jpg",
    imagePosition: "top",
  },
];

export const day2Speakers: Speaker[] = [
  {
    id: "d2-2",
    name: "Pdt. Ferry Pasang",
    jobTitle: "Pastor of Christ Chapel Kupang",
    label: "Devotion",
    topic: "Fragile, Fallen, and Held — The Leader Who Needs Grace (2 Corinthians 12:9-10)",
    role: "Preacher",
    imageUrl: "https://www.gprii.org/wp-content/uploads/2025/01/3.jpg"
  },
  {
    id: "d2-1",
    name: "Alfa Sritosa Citra",
    jobTitle: "Ruling Elder of Christ Chapel Karawaci",
    topic: "Guarding the Leader: Fragility, Shadow Mission, and the Biblical Safeguards",
    role: "Speaker",
    imageUrl: "ACS-scaled.jpg",
    flipHorizontal: true,
  },
  {
    id: "d2-3",
    name: "Deny Kiswanto Sinaga",
    jobTitle: "Executive Director of CLuster 2",
    topic: "SDH Growth Map  — 3-Year Growth Trajectory",
    role: "Speaker",
    imageUrl: "DSC09905-HD.jpg",
    imagePosition: "top",
  },
  {
    id: "d2-4",
    name: "Alvin Wijaya",
    jobTitle: "School System Coordinator of SDH",
    topic: "KPI as Mission Narrative\n & KPI Exploration & School Action Planning — From Understanding to Ownership",
    role: "Speaker",
    imageUrl: "DSC09339.jpg",
    imagePosition: "top",
  }
];

export const day3Speakers: Speaker[] = [
  {
    id: "d3-1",
    name: "Grace Purnamasari Christian",
    jobTitle: "SDH Academic - PDCE Biblical Studies",
    label: "Devotion",
    topic: "We Are Unworthy Servants — Soli Deo Gloria (Luke 17:10)",
    role: "Preacher",
    imageUrl: "https://www.uph.edu/wp-content/uploads/2024/08/Grace-Purnamasari-Christian-S.Th_.-M.Div_.jpg?x78467",
  },
  {
    id: "d3-2",
    name: "Rifena Kurniawan",
    jobTitle: "Acting Head of School of SDH Lippo Village",
    topic: "Learning from Each Other — School Stories That Inspire",
    role: "Speaker",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEUW78Itz8WqQ/profile-displayphoto-crop_800_800/B56ZgjHE3dH0AM-/0/1752935715514?e=1783555200&v=beta&t=9675OBu8nQWyFiG7_2CWkf9wSbDBl_Kzd41QBaR71bQ",
    flipHorizontal: true,
  },
  {
    id: "d3-3",
    name: "Aditya Wiranata Sapang",
    jobTitle: "Principal Coordinator of SDH Sentul",
    topic: "Learning from Each Other — School Stories That Inspire",
    role: "Speaker",
    imageUrl: "WhatsApp Image 2026-06-26 at 09.54.34.jpeg",
    imagePosition: "30% 100%"
  },
  {
    id: "d3-4",
    name: "Nathanael Febrian",
    jobTitle: "Head of School of SDH Cikarang",
    topic: "Learning from Each Other — School Stories That Inspire",
    role: "Speaker",
    imageUrl: "WhatsApp Image 2026-06-22 at 14.08.12.jpeg",
    flipHorizontal: true,
  },
  {
    id: "d3-6",
    name: "Heinz Pearly Wokaz",
    jobTitle: "Head of School of SDH Holland Village",
    label: "Topic",
    topic: "Professional Presence & School Community Standards",
    role: "Speaker",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQHgpydzL3WDGg/profile-displayphoto-shrink_800_800/B56ZeNzvCmGQAk-/0/1750430850926?e=1784160000&v=beta&t=d6EsffHtbNKON5oE6n0lJC3FNWey7lxuRmgF9ADFRY4",
    imagePosition: "top",
    flipHorizontal: true,
  },
  {
    id: "d3-7",
    name: "Stephani Caroline Olua",
    jobTitle: "Head of HR Department",
    label: "Topic",
    topic: "Professional Presence & School Community Standards",
    role: "Speaker",
    imageUrl: "DSC06247.jpg",
    imagePosition: "top",
  },
  {
    id: "d3-8",
    name: "Alvin Wijaya",
    jobTitle: "School System Coordinator of SDH",
    label: "Info & Updates",
    topic: "Information & Updates: T&S Handbook, NTI/RTI, Lumina, and Operational Updates",
    role: "Speaker",
    imageUrl: "DSC09339.jpg",
    imagePosition: "top",
  }
];

const days = [
  { id: "day1", label: "Day 01", speakers: day1Speakers },
  { id: "day2", label: "Day 02", speakers: day2Speakers },
  { id: "day3", label: "Day 03", speakers: day3Speakers },
];

export const allSpeakers = [...day1Speakers, ...day2Speakers, ...day3Speakers];

export default function Speakers() {
  const [activeDay, setActiveDay] = useState("day1");
  const activeSpeakers = days.find((d) => d.id === activeDay)?.speakers || [];

  return (
    <section id="speakers" className="py-24 px-6 bg-brand-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-light/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange"
          >
            Featured Keynotes
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bebas text-brand-blue-dark tracking-wide uppercase mt-2 text-shadow-soft"
          >
            Meet The Preachers & Speakers
          </motion.h3>
          <div className="w-12 h-1 bg-brand-blue-light mt-4 rounded-full" />
        </div>

        {/* Day Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {days.map((day) => {
            const isActive = activeDay === day.id;
            return (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 relative shadow-sm ${isActive
                  ? "text-brand-white bg-brand-orange"
                  : "text-brand-text-dark bg-brand-cream hover:bg-brand-orange/10 border border-brand-orange/10"
                  }`}
              >
                <span className="relative z-10">{day.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeSpeakerDayBg"
                    className="absolute inset-0 bg-brand-orange rounded-full -z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Speakers Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {activeSpeakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-brand-cream border border-brand-blue-light/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Image Placeholder */}
                  <div className="w-full h-96 bg-gradient-to-br from-brand-blue-dark/5 to-brand-blue-light/20 flex items-center justify-center relative overflow-hidden">
                    {speaker.imageUrl ? (
                      <img
                        src={speaker.imageUrl}
                        alt={speaker.name}
                        className="w-full h-full object-cover transition-transform duration-500"
                        style={{
                          objectPosition: speaker.imagePosition || "center",
                          transform: speaker.flipHorizontal
                            ? "scaleX(-1)"
                            : undefined,
                          scale: speaker.imageScale || 1,
                        }}
                      />
                    ) : (
                      <User className="w-20 h-20 text-brand-blue-dark/10 group-hover:scale-110 transition-transform duration-500" />
                    )}
                    {/* A subtle overlay to make it look like a premium placeholder */}
                    <div className="absolute inset-0 bg-brand-blue-dark/10 mix-blend-multiply opacity-50 transition-opacity duration-300 group-hover:opacity-0" />
                    <div className="absolute bottom-2 right-2 bg-brand-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-bold text-brand-blue-dark uppercase tracking-wider shadow-sm">
                      {speaker.role || "Speaker"}
                    </div>
                  </div>

                  {/* Speaker Details */}
                  <div className="p-6 relative">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-6 w-8 h-1 bg-brand-orange -translate-y-1/2 rounded-full" />

                    <h4 className="text-2xl font-bebas text-brand-blue-dark tracking-wide uppercase mb-1">
                      {speaker.name}
                    </h4>
                    <p className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-4">
                      {speaker.jobTitle}
                    </p>

                    <div className="border-t border-brand-blue-light/10 pt-4 mt-2">
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-brand-blue-light shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-[10px] font-semibold text-brand-text-muted uppercase tracking-wider mb-1">
                            {speaker.label || "Topic"}:
                          </span>
                          <span className="text-sm font-medium text-brand-blue-dark leading-snug">
                            {speaker.topic}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
