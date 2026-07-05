"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Coffee, Users, Compass, BookOpen, Sun, Moon, Camera, Soup, Church, User } from "lucide-react";
import { allSpeakers } from "./Speakers";




interface Person {
  name: string;
  role: string;
}

interface Session {
  time: string;
  title: string;
  people?: Person[];
  icon: any;
}

const day1Sessions: Session[] = [
  {
    time: "06:30 - 08:00",
    title: "Breakfast",
    icon: Coffee
  },
  {
    time: "08:00 - 08:15",
    title: "Welcoming and Greetings",
    icon: Users
  },
  {
    time: "08:15 - 09:15",
    title: "Opening Worship",
    people: [
      {
        name: "Alexander Kevin",
        role: "Liturgist"
      },
      {
        name: "Pdt. Williem Ferdinandus",
        role: "Preacher"
      }
    ],
    icon: Church
  },
  {
    time: "09:15 - 10:00",
    title: "Growing Faithfully Together: Collective Leadership for Christ-Centered & Sustainable Growth",
    people: [
      {
        name: "Deny Kiswanto Sinaga, M.Ed",
        role: "Speaker"
      }
    ],
    icon: Church
  },
  {
    time: "10:00 - 10:20",
    title: "Photo Session",
    icon: Camera
  },
  {
    time: "10:20 - 11:50",
    title: "Table Talk: Guarding the Mission While Growing the Movement",
    people: [
      {
        name: "Alvin Wijaya, M.Ed",
        role: "Facilitator"
      }
    ],
    icon: Users
  },
  {
    time: "11:50 - 12:50",
    title: "Lunch Break",
    icon: Soup
  },
  {
    time: "12:50 - 14:20",
    title: "School Theme Exposition & Application — Alive in Christ Second Cycle: Faith in Christ | Colossians 2:13-14",
    people: [
      {
        name: "Part 1: Heri Yulianto",
        role: "Speaker"
      },
      {
        name: "Part 2 & Part 3: Wilik, M.Pd",
        role: "Speaker"
      }
    ],
    icon: Compass
  },
  {
    time: "14:20 - 15:00",
    title: "Reflective Prayer & Quite Time",
    people: [
      {
        name: "Alexander Kevin",
        role: "Facilitator"
      }
    ],
    icon: Users
  },
  {
    time: "15:00 - 16:00",
    title: "Structured Rest — Personal time, optional peer walks, and quiet reflection",
    icon: Users
  },
  {
    time: "16:00 - 17:00",
    title: "Transition",
    icon: Users
  },
  {
    time: "17:00 - 19:00",
    title: "Dinner & Fellowship",
    icon: Soup
  },
];

const day2Sessions: Session[] = [
  {
    time: "06:30 - 08:00",
    title: "Breakfast",
    icon: Coffee
  },
  {
    time: "08:00 - 08:30",
    title: "Fragile, Fallen, and Held — The Leader Who Needs Grace (2 Corinthians 12:9-10)",
    people: [
      {
        name: "Pdt. Ferry Pasang",
        role: "Preacher"
      }
    ],
    icon: BookOpen
  },
  {
    time: "08:30 - 09:45",
    title: "Guarding the Leader: Fragility, Shadow Mission, and the Biblical Safeguards",
    people: [
      {
        name: "Alfa Sritosa Citra",
        role: "Speaker"
      }
    ],
    icon: Users
  },
  {
    time: "09:45 - 10:05",
    title: "Coffee Break",
    icon: Coffee
  },
  {
    time: "10:05 - 10:45",
    title: "SDH Growth Map — 3-Year Growth Trajectory",
    people: [
      {
        name: "Deny Kiswanto Sinaga, M.Ed",
        role: "Speaker"
      }
    ],
    icon: Users
  },
  {
    time: "10:45 - 12:00",
    title: "KPI as Mission Narrative (5 Chapters)",
    people: [
      {
        name: "Wilik, M.Pd",
        role: "Speaker"
      }
    ],
    icon: Users
  },
  {
    time: "12:00 - 13:00",
    title: "Lunch",
    icon: Soup
  },
  {
    time: "13:00 - 14:30",
    title: "KPI Exploration & School Action Planning — From Understanding to Ownership",
    people: [
      {
        name: "Wilik, M.Pd",
        role: "Facilitators"
      }
    ],
    icon: Users
  },
  {
    time: "14:30 - 14:50",
    title: "Coffee Break",
    icon: Coffee
  },
  {
    time: "14:50 - 16:50",
    title: "School Action Planning (Continued)",
    icon: Users
  },
  {
    time: "16:00 - 17:00",
    title: "Dismissal",
    icon: Users
  }
];

const day3Sessions: Session[] = [
  {
    time: "06:30 - 08:00",
    title: "Breakfast",
    icon: Coffee
  },
  {
    time: "08:00 - 08:30",
    title: "We Are Unworthy Servants — Soli Deo Gloria (Luke 10:17-20)",
    people: [
      {
        name: "Grace Purnamasari Christian",
        role: "Preacher"
      }
    ],
    icon: BookOpen
  },
  {
    time: "08:30 - 09:40",
    title: "Learning from Each Other— School Stories That Inspire",
    people: [
      {
        name: "Wilik, M.Pd",
        role: "Moderator"
      },
      {
        name: "Aditya Wiranata Sapang",
        role: "Speaker"
      },
      {
        name: "Nathanael Febrian",
        role: "Speaker"
      },
      {
        name: "Rifena Kurniawan",
        role: "Speaker"
      }
    ],
    icon: BookOpen
  },
  {
    time: "09:40 - 10:00",
    title: "Coffee Break",
    icon: Coffee
  },
  {
    time: "10:00 - 10:30",
    title: "Faithful Leadership for a Growing Mission: PHG & SDH: Where We Stand, Where We Are Going, What We Will and Will Not Pursue",
    people: [
      {
        name: "Dr. Stephanie Riady",
        role: "Speaker"
      }
    ],
    icon: BookOpen
  },
  {
    time: "10:30 - 11:30",
    title: "Professional Presence & School Community Standards",
    people: [
      {
        name: "Heinz Pearly Wokas",
        role: "Speaker"
      },
      {
        name: "Stephani Caroline Olua",
        role: "Speaker"
      }
    ],
    icon: BookOpen
  },
  {
    time: "11:30 - 13:30",
    title: "Lunch Break",
    icon: Soup
  },
  {
    time: "13:30 - 14:15",
    title: "Info Session: Universitas Pelita Harapan",
    people: [
      {
        name: "UPH - Marketing",
        role: "Facilitator"
      }
    ],
    icon: BookOpen
  },
  {
    time: "14:15 - 15:00",
    title: "Information & Updates: T&S Handbook, NTI/RTI, Lumina, and Operational Updates",
    people: [
      {
        name: "Alvin Wijaya, M.Ed",
        role: "Speaker"
      },
      {
        name: "Wilik Chen, M.Pd",
        role: "Spekaer"
      }
    ],
    icon: BookOpen
  },
  {
    time: "14:15 - 15:00",
    title: "Closing Worship: Soli Deo Gloria",
    people: [
      {
        name: "Deny Kiswanto Sinaga, M.Ed",
        role: "Speaker"
      }
    ],
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
  const [selectedTime, setSelectedTime] = useState("All");

  const activeSessions = days.find((d) => d.id === activeDay)?.sessions || [];

  // Extract unique times for the currently selected day
  const uniqueTimes = Array.from(new Set(activeSessions.map(s => s.time)));

  // Filter sessions based on selected time
  const filteredSessions = selectedTime === "All"
    ? activeSessions
    : activeSessions.filter(s => s.time === selectedTime);

  const handleDayChange = (dayId: string) => {
    setActiveDay(dayId);
    setSelectedTime("All"); // Reset time filter when day changes
  };

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

        {/* Day Selector Tabs & Time Filter */}
        <div className="flex flex-col items-center gap-6 mb-16">
          {/* Day Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {days.map((day) => {
              const isActive = activeDay === day.id;
              return (
                <button
                  key={day.id}
                  onClick={() => handleDayChange(day.id)}
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

          {/* Time Filter Dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-brand-blue-dark">Filter by Time:</span>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="px-4 py-2 rounded-xl text-sm font-medium border border-brand-blue-light/20 bg-brand-white text-brand-text-dark focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all shadow-sm"
            >
              <option value="All">All Times</option>
              {uniqueTimes.map((time, idx) => (
                <option key={idx} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-8">
          {/* Vertical central connector line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-blue-light/5 via-brand-blue-light/20 to-brand-blue-light/5 -translate-x-1/2 pointer-events-none rounded-full" />

          {/* Sessions List */}
          <div className="space-y-8 md:space-y-12">
            <AnimatePresence mode="wait">
              {filteredSessions.map((session, index) => {
                const SessionIcon = session.icon;
                const isEven = index % 2 === 0;

                // Process speaker formatting
                const people = session.people || [];

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
                    {/* Time Label on one side - Desktop: Premium Glowing Badge */}
                    <div className={`hidden md:flex w-full md:w-1/2 items-center px-12 mb-4 md:mb-0 ${isEven ? "justify-start" : "justify-end"}`}>
                      <div className="relative group/time">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue-light/30 via-brand-blue/20 to-brand-orange/20 rounded-2xl blur-sm opacity-60 group-hover/time:opacity-100 transition-opacity duration-300" />
                        <div className="relative flex items-center gap-3 bg-gradient-to-br from-brand-blue-dark to-brand-blue px-5 py-3 rounded-2xl shadow-lg shadow-brand-blue-dark/20">
                          {/* Clock Icon with pulse ring */}
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-brand-yellow-bright/30 animate-ping scale-150" />
                            <div className="relative bg-brand-yellow-bright/20 p-1.5 rounded-full">
                              <Clock className="w-4 h-4 text-brand-yellow-bright" />
                            </div>
                          </div>
                          {/* Split time display */}
                          <div className="flex items-center gap-1.5">
                            {session.time.split(" - ").map((t, i) => (
                              <React.Fragment key={i}>
                                {i > 0 && (
                                  <span className="text-brand-white/40 text-sm">→</span>
                                )}
                                <span className="font-bold text-brand-white text-base tracking-widest">{t}</span>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
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
                            {/* Mobile Time Label - Compact Premium Badge */}
                            <div className="flex md:hidden items-center gap-2 bg-gradient-to-r from-brand-blue-dark to-brand-blue px-3 py-1.5 rounded-xl shadow-sm shadow-brand-blue-dark/20 mb-1">
                              <Clock className="w-3 h-3 text-brand-yellow-bright shrink-0" />
                              <span className="font-mono text-xs font-bold text-brand-white tracking-wider">{session.time}</span>
                            </div>
                          </div>

                          <h4 className="text-xl sm:text-2xl font-bebas text-brand-blue-dark tracking-wide mb-4 leading-tight">
                            {session.title}
                          </h4>

                          {/* Dynamic People Display */}
                          {people.length > 0 && (
                            <div className="mb-2 bg-brand-cream/50 rounded-xl p-3 border border-brand-blue-light/5">
                              <div className="space-y-2">
                                {people.map((person, idx) => {
                                  const speakerData = allSpeakers.find(
                                    s =>
                                      s.name.trim().toLowerCase() === person.name.trim().toLowerCase() ||
                                      person.name.includes(s.name) ||
                                      s.name.includes(person.name)
                                  );

                                  return (
                                    <div
                                      key={idx}
                                      className="flex items-center gap-3 bg-brand-white rounded-xl px-3 py-2 border border-brand-blue-light/10"
                                    >
                                      {speakerData?.imageUrl ? (
                                        <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-orange/20">
                                          <img
                                            src={speakerData.imageUrl}
                                            alt={speakerData.name}
                                            className="w-full h-full object-cover"
                                            style={{
                                              objectPosition: speakerData.imagePosition || "center",
                                              transform: speakerData.flipHorizontal
                                                ? "scaleX(-1)"
                                                : undefined,
                                              scale: speakerData.imageScale || 1,
                                            }}
                                          />
                                        </div>
                                      ) : (
                                        <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
                                          <User className="w-4 h-4 text-brand-orange" />
                                        </div>
                                      )}

                                      <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-brand-text-dark">
                                          {person.name}
                                        </span>

                                        <span className="text-xs uppercase tracking-wider text-brand-text-muted">
                                          {person.role}
                                        </span>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
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
