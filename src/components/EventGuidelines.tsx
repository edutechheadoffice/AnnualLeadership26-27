"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shirt, Briefcase, Info, Laptop, Badge, IdCardLanyard } from "lucide-react";

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
          {/* Event Essentials Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-cream/80 backdrop-blur-sm border border-brand-blue-light/10 p-8 sm:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

            <div className="flex flex-col items-center text-center mb-12 relative z-10">
              <h4 className="text-3xl sm:text-4xl font-bebas text-brand-blue-dark tracking-wide">
                Event Essentials
              </h4>
              <div className="w-12 h-1 bg-brand-orange mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
              {/* Left: Dress Code */}
              <div className="bg-brand-white rounded-3xl p-6 sm:p-8 border border-brand-blue-light/10 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 flex flex-col h-full group">
                <h5 className="font-bold text-brand-text-dark text-xl mb-6">Dress Code</h5>
                <div className="flex flex-col gap-6 flex-1">
                  {/* Day 1 */}
                  <div className="flex items-center gap-4 group/item">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-white shrink-0 border border-brand-blue-light/10 shadow-sm group-hover/item:shadow-md transition-all">
                      <Image
                        src="/images/batik_3d_white.png"
                        alt="Batik"
                        fill
                        className="object-contain p-2 group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-brand-text-dark text-lg">Day 1</span>
                      <span className="text-brand-text-muted">Batik</span>
                    </div>
                  </div>

                  {/* Day 2 */}
                  <div className="flex items-center gap-4 group/item">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-white shrink-0 border border-brand-blue-light/10 shadow-sm group-hover/item:shadow-md transition-all">
                      <Image
                        src="/images/baju raker.png"
                        alt="SDH Leaders Shirt"
                        fill
                        className="object-contain p-2 group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-brand-text-dark text-lg">Day 2</span>
                      <span className="text-brand-text-muted leading-tight">SDH Leaders Shirt</span>
                      <span className="text-xs text-brand-blue-light italic mt-1">(to be provided)</span>
                    </div>
                  </div>

                  {/* Day 3 */}
                  <div className="flex items-center gap-4 group/item">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-white shrink-0 border border-brand-blue-light/10 shadow-sm group-hover/item:shadow-md transition-all">
                      <Image
                        src="/raker-smart.png"
                        alt="Smart Casual"
                        fill
                        className="object-contain p-2 group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-brand-text-dark text-lg">Day 3</span>
                      <span className="text-brand-text-muted">Smart Casual</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mid: Lanyard */}
              <div className="bg-brand-white rounded-3xl p-6 sm:p-8 border border-brand-blue-light/10 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 flex flex-col h-full group">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue-light/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue-light transition-colors">
                  <IdCardLanyard className="w-8 h-8 text-brand-blue-light group-hover:text-brand-white transition-colors" />
                </div>
                <h5 className="font-bold text-brand-text-dark text-xl mb-4">Lanyard</h5>
                <p className="text-brand-text-muted leading-relaxed">
                  To be worn throughout the duration of the event. Lanyards will be provided for newly appointed leaders from non-SDH.
                </p>
              </div>

              {/* Right: Laptop */}
              <div className="bg-brand-white rounded-3xl p-6 sm:p-8 border border-brand-blue-light/10 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 flex flex-col h-full group">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                  <Laptop className="w-8 h-8 text-brand-blue group-hover:text-brand-white transition-colors" />
                </div>
                <h5 className="font-bold text-brand-text-dark text-xl mb-4">Laptop</h5>
                <p className="text-brand-text-muted leading-relaxed">
                  Required for workshops and panel discussions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
