"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, Ticket } from "lucide-react";

export default function Invitation() {
  return (
    <section className="relative py-24 sm:py-32 px-6 bg-brand-white overflow-hidden" id="invitation">
      {/* Enhanced Light Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-brand-blue-light/10 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-brand-orange/10 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 mix-blend-multiply" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange mb-8 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Official Invitation</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bebas text-brand-blue-dark uppercase tracking-wider mb-8 text-shadow-soft">
            You Are Invited, School Leaders!
          </h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
            A meaningful occasion to inspire, strengthen, and equip one another in proclaiming Christ and impacting the life of every learner.
          </p>
        </motion.div>

        {/* Premium Light Theme Ticket Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative group mx-auto max-w-4xl"
        >
          {/* Subtle glowing outline on hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue-light/30 via-brand-orange/30 to-brand-yellow-bright/30 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition duration-700" />

          <div className="relative flex flex-col md:flex-row bg-white/80 backdrop-blur-xl border border-brand-blue-light/10 rounded-3xl overflow-hidden card-shadow-premium-hover">

            {/* Left Side: Main Info */}
            <div className="flex-1 p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-white to-brand-cream/50">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Ticket className="w-40 h-40 text-brand-blue" />
              </div>

              <h3 className="text-3xl sm:text-4xl font-bebas text-brand-blue uppercase tracking-wider mb-2">
                EVENT DETAILS
              </h3>
              <p className="text-brand-text-muted text-sm tracking-widest uppercase mb-10 font-medium">
                Annual Leadership Meeting Academic Year 2026/2027
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center shrink-0 border border-brand-blue/10 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                    <Calendar className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs uppercase tracking-wider text-brand-text-muted font-bold mb-1">Date</p>
                    <p className="text-xl text-brand-blue-dark font-semibold">July 06 - 08, 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/5 flex items-center justify-center shrink-0 border border-brand-orange/10 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500">
                    <MapPin className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs uppercase tracking-wider text-brand-text-muted font-bold mb-1">Location</p>
                    <p className="text-xl text-brand-blue-dark font-semibold">SDH Daan Mogot</p>
                    <p className="text-sm text-brand-text-muted mt-1">Jakarta Barat, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
