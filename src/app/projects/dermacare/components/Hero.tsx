"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress: heroProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
    const heroScale = useTransform(heroProgress, [0, 0.5], [1, 0.95]);

    return (
        <motion.section
            ref={heroRef}
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="relative flex h-screen items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A7C59]/30 via-[#0a0a0a] to-[#2D5A6B]/20" />
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 text-sm tracking-[0.3em] text-[#7CB686] uppercase"
                >
                    Case Study • Concept Project
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-8 text-5xl leading-[1.1] font-light text-white md:text-7xl lg:text-8xl"
                >
                    Skincare that starts with
                    <br />
                    <span className="text-[#7CB686] italic">understanding</span>
                    <br />
                    not selling
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mx-auto max-w-3xl text-lg text-neutral-400"
                >
                    A skin specialized pharmacy experience built around personalized assessment,
                    transparent recommendations, and dermatological expertise made accessible.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="h-12 w-[1px] bg-gradient-to-b from-white/50 to-transparent"
                />
            </motion.div>
        </motion.section>
    );
}
