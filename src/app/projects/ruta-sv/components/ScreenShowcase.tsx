"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const screens = [
    { name: "home-screen.png", label: "Home" },
    { name: "route-detail.png", label: "Route Detail" },
    { name: "route-results.png", label: "Search Results" },
    { name: "home-alert.png", label: "Alerts" },
    { name: "ticket-purchase.png", label: "Purchase" },
    { name: "my-tickets.png", label: "My Tickets" },
    { name: "ticket-qr.png", label: "QR Ticket" },
    { name: "route-map.png", label: "Live trip" },
];

export function ScreenShowcase() {
    return (
        <section className="bg-gradient-to-b from-neutral-950 via-[#0047AB]/20 to-neutral-950 py-24 md:py-40">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <p className="mb-4 text-sm tracking-[0.3em] text-[#4D8FD6] uppercase">
                        The Complete Experience
                    </p>
                    <h2 className="text-4xl font-light text-white md:text-5xl lg:text-6xl">
                        One seamless journey.
                    </h2>
                </motion.div>

                {/* Featured Hero Row - 2 Large Screens */}
                <div className="mb-12 grid gap-8 md:grid-cols-2">
                    {screens.slice(0, 2).map((screen, index) => (
                        <motion.div
                            key={screen.label}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative"
                        >
                            <div className="relative mx-auto max-w-sm">
                                {/* Phone Frame */}
                                <div className="aspect-[390/844] overflow-hidden rounded-[3rem] bg-gradient-to-br from-neutral-800 to-neutral-900 p-2 shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:scale-[1.02]">
                                    <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                                        <Image
                                            src={`/projects/ruta-sv/${screen.name}`}
                                            alt={screen.label}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                {/* Label */}
                                <p className="mt-6 text-center text-lg font-medium text-white">
                                    {screen.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Grid of 6 Screens */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {screens.slice(2).map((screen, index) => (
                        <motion.div
                            key={screen.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            className="group"
                        >
                            <div className="relative mx-auto max-w-xs">
                                {/* Phone Frame */}
                                <div className="aspect-[390/844] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-neutral-800 to-neutral-900 p-1.5 shadow-xl shadow-black/30 transition-transform duration-500 group-hover:scale-[1.03]">
                                    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
                                        <Image
                                            src={`/projects/ruta-sv/${screen.name}`}
                                            alt={screen.label}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                {/* Label */}
                                <p className="mt-4 text-center text-sm font-medium text-neutral-300">
                                    {screen.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
