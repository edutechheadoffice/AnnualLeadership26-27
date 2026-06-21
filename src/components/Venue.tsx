"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Sparkles, Building } from "lucide-react";

export default function Venue() {
  return (
    <section id="venue" className="py-24 px-6 bg-brand-white relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-brand-blue-light/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange"
          >
            Location
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bebas text-brand-blue-dark tracking-wide uppercase mt-2 text-shadow-soft"
          >
            SDH Daan Mogot Campus
          </motion.h3>
          <div className="w-12 h-1 bg-brand-blue-light mt-4 rounded-full" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Glassmorphic Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-brand-blue-light/10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Building className="w-3.5 h-3.5" />
                Conference Venue
              </div>

              <h4 className="text-3xl font-bebas text-brand-blue-dark tracking-wide uppercase mb-4">
                Sekolah Dian Harapan Daan Mogot
              </h4>

              <p className="text-sm text-brand-text-muted leading-relaxed mb-6">
                The campus is strategically located in West Jakarta, designed with modern architecture and state-of-the-art academic facilities. The leadership meeting will be held across the Main Chapel.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue-light/10 flex items-center justify-center text-brand-blue-light shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark">Address</h5>
                    <p className="text-xs text-brand-text-muted">
                      Jl. Daan Mogot KM 11, RT.1/RW.4, Kedaung Kali Angke, Cengkareng, Jakarta Barat, 11710
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue-light/10 flex items-center justify-center text-brand-blue-light shrink-0">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark">Parking & Access</h5>
                    <p className="text-xs text-brand-text-muted">
                      Parking is available in the main school yard. Access via Daan Mogot main highway.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-brand-blue-light/10 pt-6">
              <a
                href="https://maps.app.goo.gl/uXpS3YgqQ6MubY1q6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue-dark hover:bg-brand-blue text-brand-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300"
              >
                Open in Google Maps
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Map IFrame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[400px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden border border-brand-blue-light/10 shadow-lg relative group"
          >
            {/* Soft inner shadow accent */}
            <div className="absolute inset-0 border border-brand-white/20 rounded-3xl pointer-events-none z-10" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8624647313885!2d106.72147367469733!3d-6.14917459383778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8072049c303%3A0xe96c4b267155bbad!2sSekolah%20Dian%20Harapan%20Daan%20Mogot!5e0!3m2!1sen!2sid!4v1717056000000!5m2!1sen!2sid"
              className="w-full h-full border-0 rounded-3xl grayscale-[20%] contrast-[110%] group-hover:grayscale-0 transition-all duration-500"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sekolah Dian Harapan Daan Mogot Location Map"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
