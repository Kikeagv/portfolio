"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screens = [
    { name: "07-results.png", label: "Results Summary" },
    { name: "08-shop-home.png", label: "Shop Home" },
    { name: "01-welcome.png", label: "Welcome" },
    { name: "02-category-search.png", label: "Category Search" },
    { name: "03-assessment-intro.png", label: "Assessment Intro" },
    { name: "04-skin-type.png", label: "Skin Type" },
    { name: "05-concerns.png", label: "Primary Concerns" },
    { name: "06-lifestyle.png", label: "Lifestyle Factors" },
    { name: "09-product-detail.png", label: "Product Detail" },
];

export function ScreenShowcase() {
    return (
        <section className="bg-gradient-to-b from-neutral-950 via-[#4A7C59]/20 to-neutral-950 py-24 md:py-40">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <p className="mb-4 text-sm tracking-[0.3em] text-[#7CB686] uppercase">
                        The Complete Experience
                    </p>
                    <h2 className="text-4xl font-light text-white md:text-5xl lg:text-6xl">
                        From assessment to purchase.
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
                                            src={`/projects/dermacare/${screen.name}`}
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

                {/* Grid of Remaining Screens */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                                            src={`/projects/dermacare/${screen.name}`}
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
