"use client";

import { motion } from "framer-motion";
import PhoneMock from "./PhoneMock";

interface ScreenInfo {
    name: string;
    label: string;
    footer?: string;
    description: string;
}

interface ProcessModuleProps {
    moduleNumber: string;
    title: string;
    description: string;
    screens: [ScreenInfo, ScreenInfo];
    variant?: "light" | "dark";
}

export default function ProcessModule({
    moduleNumber,
    title,
    description,
    screens,
    variant = "light",
}: ProcessModuleProps) {
    const sectionBg = variant === "dark"
        ? "bg-gradient-to-b from-neutral-950 to-[#EF4444]/10"
        : "bg-white";
    const titleColor = variant === "dark" ? "text-white" : "text-neutral-900";
    const descColor = variant === "dark" ? "text-neutral-400" : "text-neutral-600";
    const labelColor = variant === "dark" ? "text-neutral-500" : "text-neutral-400";

    return (
        <section className={`${sectionBg} py-24 md:py-40`}>
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <p className={`mb-4 text-sm tracking-[0.2em] ${labelColor} uppercase`}>
                        Module {moduleNumber}
                    </p>
                    <h2 className={`mb-6 text-3xl font-light ${titleColor} md:text-5xl`}>
                        {title}
                    </h2>
                    <p className={`mx-auto max-w-2xl text-lg ${descColor} leading-relaxed`}>
                        {description}
                    </p>
                </motion.div>

                {/* Screens Grid */}
                <div className="grid gap-16 md:grid-cols-2 lg:gap-24">
                    {screens.map((screen, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative w-full max-w-sm">
                                <PhoneMock
                                    name={screen.name}
                                    label={screen.label}
                                    footer={screen.footer}
                                    variant={variant}
                                />
                            </div>
                            <div className="mt-12 w-full max-w-sm border-l-2 border-[#EF4444] pl-6">
                                <p className={`text-lg font-medium ${titleColor}`}>{screen.label}</p>
                                <p className={`mt-3 ${descColor} leading-relaxed text-sm`}>
                                    {screen.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
