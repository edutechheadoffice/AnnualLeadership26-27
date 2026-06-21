"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shirt, Briefcase, Info, Laptop, Badge } from "lucide-react";

export default function EventGuidelines() {
  return (
    <section id="guidelines" className="py-24 px-6 bg-brand-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue-light/5 -skew-x-12 transform origin-top-right pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-blue-light"
          >
            Preparation
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bebas text-brand-blue-dark tracking-wide uppercase mt-2 text-shadow-soft"
          >
            Event Guidelines
          </motion.h3>
          <div className="w-12 h-1 bg-brand-orange mt-4 rounded-full" />
        </div>

        <div className="flex flex-col gap-12">
          {/* Dresscode Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-cream/80 backdrop-blur-sm border border-brand-blue-light/10 p-8 sm:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

            <div className="flex flex-col items-center text-center mb-12 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 shadow-inner">
                <Shirt className="w-8 h-8 text-brand-orange" />
              </div>
              <h4 className="text-3xl sm:text-4xl font-bebas text-brand-blue-dark tracking-wide">
                Dresscode
              </h4>
              <p className="text-brand-text-muted mt-3 max-w-xl mx-auto">
                Please ensure you wear the designated attire for each day of the event to maintain our shared identity and professionalism.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
              {/* Day 1 */}
              <div className="bg-brand-white rounded-3xl p-6 sm:p-8 border border-brand-blue-light/10 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 relative group flex flex-col h-full">

                <h5 className="font-bold text-brand-text-dark text-lg uppercase tracking-wider mb-1">Day 1</h5>
                <p className="text-brand-text-muted font-medium mb-6">Batik</p>
                <div className="relative w-full flex-1 min-h-[220px] rounded-2xl overflow-hidden flex items-end justify-center bg-gradient-to-b from-brand-orange/5 via-brand-cream to-brand-orange/20">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/batik.png"
                      alt="Batik Shirt"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 origin-bottom"
                    />
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-brand-white rounded-3xl p-6 sm:p-8 border border-brand-blue-light/10 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 relative group flex flex-col h-full">

                <h5 className="font-bold text-brand-text-dark text-lg uppercase tracking-wider mb-1">Day 2</h5>
                <p className="text-brand-text-muted font-medium mb-6">Raker shirt <span className="block text-sm text-brand-blue-light font-normal italic mt-1">(will be provided)</span></p>
                <div className="relative w-full flex-1 min-h-[220px] rounded-2xl overflow-hidden flex items-end justify-center bg-gradient-to-b from-brand-blue-light/5 via-brand-cream to-brand-blue-light/20">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/raker-shirt.png"
                      alt="Raker Polo Shirt"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 origin-bottom"
                    />
                  </div>
                </div>
              </div>

              {/* Day 3 */}
              <div className="bg-brand-white rounded-3xl p-6 sm:p-8 border border-brand-blue-light/10 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 relative group flex flex-col h-full">

                <h5 className="font-bold text-brand-text-dark text-lg uppercase tracking-wider mb-1">Day 3</h5>
                <p className="text-brand-text-muted font-medium mb-6">Smart Casual</p>
                <div className="relative w-full flex-1 min-h-[220px] rounded-2xl overflow-hidden flex items-end justify-center bg-gradient-to-b from-brand-yellow/5 via-brand-cream to-brand-yellow/20">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/smart-casual.png"
                      alt="Smart Casual Outfit"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 origin-bottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* To Bring Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-blue-dark/5 backdrop-blur-sm border border-brand-blue-light/10 p-8 sm:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue-light/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10">
              <div className="md:w-1/3 flex flex-col items-start">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue-light/10 flex items-center justify-center mb-6 shadow-inner">
                  <Briefcase className="w-8 h-8 text-brand-blue" />
                </div>
                <h4 className="text-3xl sm:text-4xl font-bebas text-brand-blue-dark tracking-wide mb-3">
                  What to Bring
                </h4>
                <p className="text-brand-text-muted">
                  Make sure you have these essentials with you throughout the meeting.
                </p>
              </div>

              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <div className="flex flex-col gap-4 p-6 sm:p-8 bg-brand-white rounded-3xl border border-brand-blue-light/5 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                    <Badge className="w-6 h-6 text-brand-orange group-hover:text-brand-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-text-dark text-lg mb-2">Lanyard</h5>
                    <p className="text-brand-text-muted text-sm leading-relaxed">
                      Please bring your lanyard. For those who have not had one, it will be provided.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6 sm:p-8 bg-brand-white rounded-3xl border border-brand-blue-light/5 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-full bg-brand-blue-light/10 flex items-center justify-center group-hover:bg-brand-blue-light transition-colors">
                    <Laptop className="w-6 h-6 text-brand-blue-light group-hover:text-brand-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-text-dark text-lg mb-2">Laptop</h5>
                    <p className="text-brand-text-muted text-sm leading-relaxed">
                      Required for the workshops and panel discussions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
