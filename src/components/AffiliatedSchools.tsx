"use client";

import { motion } from "framer-motion";

export default function AffiliatedSchools() {
    const logos = [
        {
            name: "Sekolah Dian Harapan",
            image: "/Main Logo SDH - Horizontal - Color.png",
        },
        {
            name: "Hope Intercultural Schoo",
            image: "/Short Logo HIS - Horizontal_Short Logo HIS - Horizontal - Color 2.png",
        },
        {
            name: "HORA",
            image: "/Hora Chinese School_Hora Logo Colours 2.png",
        },
    ];

    return (
        <section className="relative pt-24 pb-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >

                </motion.div>

                {/* Logo Row */}
                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={logo.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-32 w-60 rounded-2xl border border-brand-blue-light/10 bg-white shadow-sm flex items-center justify-center px-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="max-h-36 object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}