"use client";

import { motion } from "framer-motion";

const colors = [
    { hex: "#0047AB", name: "Salvadoran Blue" },
    { hex: "#00A86B", name: "Transit Green" },
    { hex: "#FF6B35", name: "Alert Orange" },
    { hex: "#FFB800", name: "Warning Yellow" },
    { hex: "#1A1A2E", name: "Night Mode" },
];

const metrics = [
    { value: "4.5:1", label: "Contrast Ratio" },
    { value: "48dp", label: "Touch Targets" },
    { value: "100%", label: "Screen Reader" },
    { value: "WCAG AA", label: "Compliant" },
];

export function DesignHighlights() {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <p className="mb-4 text-sm tracking-[0.3em] text-neutral-400 uppercase">
                        Design System
                    </p>
                    <h2 className="text-3xl font-light text-neutral-900 md:text-4xl lg:text-5xl">
                        Built for everyone
                    </h2>
                </motion.div>

                <div className="grid gap-16 md:grid-cols-2">
                    {/* Color Palette */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="mb-6 text-lg font-medium text-neutral-900">
                            Color Palette
                        </h3>
                        <div className="flex gap-3">
                            {colors.map((color) => (
                                <div key={color.hex} className="flex-1">
                                    <div
                                        className="aspect-square rounded-2xl shadow-lg"
                                        style={{ backgroundColor: color.hex }}
                                    />
                                    <p className="mt-3 text-center text-xs text-neutral-500">
                                        {color.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Accessibility Metrics */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="mb-6 text-lg font-medium text-neutral-900">
                            Accessibility
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {metrics.map((metric) => (
                                <div
                                    key={metric.label}
                                    className="rounded-2xl bg-neutral-100 p-6 text-center"
                                >
                                    <p className="text-2xl font-semibold text-[#0047AB]">
                                        {metric.value}
                                    </p>
                                    <p className="mt-1 text-sm text-neutral-600">{metric.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
