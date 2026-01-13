"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { journeySteps } from "../data";

export function UserJourney() {
    return (
        <section className="bg-neutral-100 py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-16">
                    <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">User Journey</p>
                    <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
                        From stranger to confident customer in four phases
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                    {journeySteps.map((step, idx) => (
                        <motion.div
                            key={step.phase}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative rounded-2xl bg-white p-6 shadow-sm"
                        >
                            <div
                                className="mb-4 h-1 w-12 rounded-full"
                                style={{ backgroundColor: step.color }}
                            />
                            <p className="text-2xl font-light text-neutral-900">{step.phase}</p>
                            <p className="mt-2 text-sm text-neutral-500">{step.screens}</p>
                            {idx < 3 && (
                                <ArrowRight className="absolute right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-neutral-300 md:block" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
