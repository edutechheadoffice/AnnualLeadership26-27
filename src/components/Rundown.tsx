"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Coffee, Users, Compass, BookOpen, Sun, Moon, Camera, Soup, Church, User } from "lucide-react";
import { allSpeakers } from "./Speakers";

interface Session {
  time: string;
  title: string;
  speaker: string;
  icon: any;
}

const day1Sessions: Session[] = [
  {
    time: "06:30 - 08:00",
    title: "Breakfast",
    speaker: "",
    icon: Coffee
  },
  {
    time: "08:00 - 08:15",
    title: "Welcoming and Greetings",
    speaker: "",
    icon: Users
  },
  {
    time: "09:15 - 10:15",
    title: "Opening Worship: A Community of Servants Called to Lead (Mark 10:43-45)",
    speaker: "-",
    icon: Church
  },
  {
    time: "10:15 - 10:25",
    title: "Photo Session",
    speaker: "-",
    icon: Camera
  },
  {
    time: "10:25 - 10:45",
    title: "Coffee Break",
    speaker: "",
    icon: Coffee
  },
  {
    time: "10:45 - 12:00",
    title: "Table Talk: Guarding the Mission While Growing the Movement",
    speaker: "",
    icon: Users
  },
  {
    time: "12:00 - 13:00",
    title: "Lunch Break",
    speaker: "",
    icon: Soup
  },
  {
    time: "13:00 - 14:30",
    title: "School Theme Exposition & Application — Alive in Christ Second Cycle: Faith in Christ | Colossians 2:13-14",
    speaker: "Part 1:  Rev. Dr. Yohanes Halim \nPart 2: Wilik Chen \nPart 3: Alvin Wijaya",
    icon: Compass
  },
  {
    time: "14:30 - 15:00",
    title: "Reflective Prayer & Quite Time",
    speaker: "Alexander Kevin",
    icon: Users
  },
  {
    time: "15:00 - 16:00",
    title: "Structured Rest — Personal time, optional peer walks, and quiet reflection",
    speaker: "",
    icon: Users
  },
  {
    time: "16:00 - 17:00",
    title: "Transition",
    speaker: "",
    icon: Users
  },
  {
    time: "17:00 - 19:00",
    title: "Dinner & Fellowship",
    speaker: "",
    icon: Soup
  },
];

const day2Sessions: Session[] = [
  {
    time: "06:30 - 08:00",
    title: "Breakfast",
    speaker: "",
    icon: Coffee
  },
  {
    time: "08:00 - 08:30",
    title: "Fragile, Fallen, and Held — The Leader Who Needs Grace (2 Corinthians 12:9-10)",
    speaker: "Pdt. Ferry Pasang",
    icon: BookOpen
  },
  {
    time: "08:30 - 09:45",
    title: "Guarding the Leader: Fragility, Shadow Mission, and the Biblical Safeguards",
    speaker: "Alfa Sritosa Citra",
    icon: Users
  },
  {
    time: "09:45 - 10:05",
    title: "Coffee Break",
    speaker: "",
    icon: Coffee
  },
  {
    time: "10:05 - 10:45",
    title: "SDH Growth Map — 3-Year Growth Trajectory",
    speaker: "Deny Kiswanto Sinaga",
    icon: Users
  },
  {
    time: "10:45 - 12:00",
    title: "KPI as Mission Narrative (5 Chapters)",
    speaker: "Alvin Wijaya \nHead of Departments",
    icon: Users
  },
  {
    time: "12:00 - 13:00",
    title: "Lunch",
    speaker: "",
    icon: Soup
  },
  {
    time: "13:00 - 14:30",
    title: "KPI Exploration & School Action Planning — From Understanding to Ownership",
    speaker: "Wilik Chen \n Alvin Wijaya ",
    icon: Users
  },
  {
    time: "14:30 - 14:50",
    title: "Coffee Break",
    speaker: "",
    icon: Coffee
  },
  {
    time: "14:50 - 16:50",
    title: "School Action Planning (Continued)",
    speaker: "",
    icon: Users
  },
  {
    time: "16:00 - 17:00",
    title: "Dismissal",
    speaker: "",
    icon: Users
  }
];

const day3Sessions: Session[] = [
  {
    time: "06:30 - 08:00",
    title: "Breakfast",
    speaker: "",
    icon: Coffee
  },
  {
    time: "08:00 - 08:30",
    title: "We Are Unworthy Servants — Soli Deo Gloria (Luke 17:10)",
    speaker: "Pdt. Williem Ferdinandus",
    icon: BookOpen
  },
  {
    time: "08:30 - 09:30",
    title: "Learning from Each Other— School Stories That Inspire",
    speaker: "Aditya \n Nathanael \n Rifena",
    icon: BookOpen
  },
  {
    time: "09:30 - 09:45",
    title: "Coffee Break",
    speaker: "",
    icon: Coffee
  },
  {
    time: "09:45 - 10:45",
    title: "School Action Plan Workshop — Finalize, Sharpen, Commit",
    speaker: "",
    icon: BookOpen
  },
  {
    time: "10:45 - 11:45",
    title: "Professional Presence & School Community Standards",
    speaker: "",
    icon: BookOpen
  },
  {
    time: "11:45 - 12:45",
    title: "Lunch Break",
    speaker: "",
    icon: Soup
  },
  {
    time: "12:45 - 13:45",
    title: "Info Session: Universitas Pelita Harapan",
    speaker: "UPH - Marketing",
    icon: BookOpen
  },
  {
    time: "13:45 - 14:15",
    title: "Information & Updates: T&S Handbook, NTI/RTI, Lumina, and Operational Updates",
    speaker: "Alvin Wijaya",
    icon: BookOpen
  }
];

const days = [
  { id: "day1", label: "Day 01", date: "July 06, 2026", sessions: day1Sessions },
  { id: "day2", label: "Day 02", date: "July 07, 2026", sessions: day2Sessions },
  { id: "day3", label: "Day 03", date: "July 08, 2026", sessions: day3Sessions },
];

export default function Rundown() {
  const [activeDay, setActiveDay] = useState("day1");
  const activeSessions = days.find((d) => d.id === activeDay)?.sessions || [];

  return (
    <section id="rundown" className="py-24 px-6 bg-brand-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand-orange/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-brand-blue-light/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-blue-light"
          >
            Schedule
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bebas text-brand-blue-dark tracking-wide uppercase mt-2 text-shadow-soft"
          >
            Event Rundown
          </motion.h3>
          <div className="w-12 h-1 bg-brand-orange mt-4 rounded-full" />
        </div>

        {/* Day Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
          {days.map((day) => {
            const isActive = activeDay === day.id;
            return (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-6 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative shadow-sm flex flex-col items-center gap-1 ${isActive
                  ? "text-brand-white bg-brand-blue-dark scale-105"
                  : "text-brand-text-dark bg-brand-white hover:bg-brand-blue-light/5 border border-brand-blue-light/10 hover:scale-105 hover:shadow-md"
                  }`}
              >
                <span className="relative z-10">{day.label}</span>
                <span className="block text-[10px] sm:text-xs opacity-70 relative z-10 font-medium normal-case">
                  {day.date}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeDayBg"
                    className="absolute inset-0 bg-brand-blue-dark rounded-2xl -z-0 shadow-lg shadow-brand-blue-dark/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Timeline Container */}
        <div className="relative mt-8">
          {/* Vertical central connector line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-blue-light/5 via-brand-blue-light/20 to-brand-blue-light/5 -translate-x-1/2 pointer-events-none rounded-full" />

          {/* Sessions List */}
          <div className="space-y-8 md:space-y-12">
            <AnimatePresence mode="wait">
              {activeSessions.map((session, index) => {
                const SessionIcon = session.icon;
                const isEven = index % 2 === 0;

                // Process speaker formatting
                const hasSpeaker = session.speaker && session.speaker.trim() !== "" && session.speaker !== "-";
                const speakersList = hasSpeaker ? session.speaker.split('\n').filter(s => s.trim() !== "") : [];

                return (
                  <motion.div
                    key={`${activeDay}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`flex flex-col md:flex-row items-stretch relative ${isEven ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* Time Label on one side */}
                    <div className={`hidden md:flex w-full md:w-1/2 items-center px-12 mb-4 md:mb-0 ${isEven ? "justify-start" : "justify-end"}`}>
                      <div className="flex items-center gap-2 font-mono text-lg text-brand-text-dark font-semibold">
                        <Clock className="w-5 h-5" />
                        {session.time}
                      </div>
                    </div>

                    {/* Timeline Dot Indicator */}
                    <div className="absolute left-10 md:left-1/2 w-10 h-10 rounded-full bg-brand-white border-[3px] border-brand-blue-light flex items-center justify-center -translate-x-1/2 z-10 shadow-md shadow-brand-blue-light/20 pointer-events-none">
                      <SessionIcon className="w-4 h-4 text-brand-blue-dark" />
                    </div>

                    {/* Session Details Card on the other side */}
                    <div className="w-full pl-[80px] pr-4 md:w-1/2 md:px-12">
                      <div className="bg-brand-white/80 backdrop-blur-sm border border-brand-blue-light/10 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden">

                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10">
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                            {/* Mobile Time Label */}
                            <div className="flex md:hidden items-center gap-2 font-mono text-sm text-brand-text-dark font-semibold">
                              <Clock className="w-4 h-4" />
                              {session.time}
                            </div>
                          </div>

                          <h4 className="text-xl sm:text-2xl font-bebas text-brand-blue-dark tracking-wide mb-4 leading-tight">
                            {session.title}
                          </h4>

                          {/* Dynamic Speakers Display */}
                          {speakersList.length > 0 && (
                            <div className="mb-2 bg-brand-cream/50 rounded-xl p-3 border border-brand-blue-light/5">
                              {speakersList.length === 1 ? (
                                (() => {
                                  const speakerData = allSpeakers.find(s => s.name.trim().toLowerCase() === speakersList[0].trim().toLowerCase() || speakersList[0].includes(s.name) || s.name.includes(speakersList[0]));
                                  return (
                                    <div className="flex items-center gap-3">
                                      {speakerData?.imageUrl ? (
                                        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-brand-orange/20 shadow-sm relative bg-brand-white">
                                          <img
                                            src={speakerData.imageUrl}
                                            alt={speakerData.name}
                                            className="w-full h-full object-cover"
                                            style={{
                                              objectPosition: speakerData.imagePosition || "center",
                                              transform: speakerData.flipHorizontal ? "scaleX(-1)" : undefined,
                                              scale: speakerData.imageScale || 1,
                                            }}
                                          />
                                        </div>
                                      ) : (
                                        <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                                          <User className="w-4 h-4 text-brand-orange" />
                                        </div>
                                      )}
                                      <span className="text-sm font-semibold text-brand-text-dark">
                                        {speakersList[0]}
                                      </span>
                                    </div>
                                  );
                                })()
                              ) : (
                                <div className="space-y-2.5">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-text-muted mb-1 block">Presenters</span>
                                  <div className="flex flex-wrap gap-2.5">
                                    {speakersList.map((speaker, idx) => {
                                      const speakerData = allSpeakers.find(s => s.name.trim().toLowerCase() === speaker.trim().toLowerCase() || speaker.includes(s.name) || s.name.includes(speaker));
                                      return (
                                        <div key={idx} className="flex items-center gap-2 bg-brand-white pr-3 pl-1.5 py-1.5 rounded-full border border-brand-blue-light/10 shadow-sm">
                                          {speakerData?.imageUrl ? (
                                            <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-brand-orange/20 relative bg-brand-cream">
                                              <img
                                                src={speakerData.imageUrl}
                                                alt={speakerData.name}
                                                className="w-full h-full object-cover"
                                                style={{
                                                  objectPosition: speakerData.imagePosition || "center",
                                                  transform: speakerData.flipHorizontal ? "scaleX(-1)" : undefined,
                                                  scale: speakerData.imageScale || 1,
                                                }}
                                              />
                                            </div>
                                          ) : (
                                            <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                                              <User className="w-3 h-3 text-brand-orange" />
                                            </div>
                                          )}
                                          <span className="text-sm font-medium text-brand-text-dark whitespace-nowrap">
                                            {speaker.trim()}
                                          </span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
