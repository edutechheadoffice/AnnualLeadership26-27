"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

export default function TemplateResources() {
  return (
    <section id="resources" className="py-16 px-6 bg-brand-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue-light/5 -skew-x-12 transform origin-top-right pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl border border-brand-blue-light/10 p-8 md:p-12 rounded-[2.5rem] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 card-shadow-premium-hover"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center shrink-0 border border-brand-blue/10">
              <FileText className="w-8 h-8 text-brand-blue" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bebas text-brand-blue-dark tracking-wide mb-2">
                Resources File
              </h3>
              <p className="text-brand-text-muted max-w-lg">
                Download the Strategic Planning (KPI & SI) files required for your preparation and workshops.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="https://ypph.sharepoint.com/:b:/s/InternalHeadofOffice/IQDSuM5XmVIoT5JCHD9xArI_ASbcAmEEddr-NXgJvNKM_w8?e=VKMjlU&download=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-white font-bold uppercase tracking-wider rounded-full hover:bg-brand-orange/90 hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-300 group"
            >
              <span>Download </span>
              <Download className="w-5 h-5 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
