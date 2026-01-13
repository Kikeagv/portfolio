"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Users, Shield } from "lucide-react";

export function TheProblem() {
    return (
        <section className="bg-neutral-100 py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-16">
                    <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">The Problem</p>
                    <h2 className="max-w-4xl text-3xl font-light text-neutral-900 md:text-4xl lg:text-5xl">
                        A market full of products,
                        <span className="text-neutral-400"> empty of guidance</span>
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl bg-white p-8 shadow-sm"
                    >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                            <AlertTriangle className="h-6 w-6 text-red-500" />
                        </div>
                        <h3 className="text-xl font-medium text-neutral-900">Information overload</h3>
                        <p className="mt-3 text-neutral-600">
                            Thousands of products with conflicting claims. Users spend hours researching
                            and still feel uncertain about what&apos;s right for their skin.
                        </p>
                        <p className="mt-4 text-sm text-neutral-400">
                            &ldquo;I&apos;ve watched 20 videos and I&apos;m more confused than when I started.&rdquo;
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="rounded-2xl bg-white p-8 shadow-sm"
                    >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                            <Users className="h-6 w-6 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-medium text-neutral-900">Generic experiences</h3>
                        <p className="mt-3 text-neutral-600">
                            Most platforms treat skin type as a single filter. Real skincare needs
                            consider concerns, lifestyle, sensitivities, and routine compatibility.
                        </p>
                        <p className="mt-4 text-sm text-neutral-400">
                            &ldquo;Every site recommends the same &apos;best sellers&apos; to everyone.&rdquo;
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="rounded-2xl bg-white p-8 shadow-sm"
                    >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
                            <Shield className="h-6 w-6 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-medium text-neutral-900">Trust deficit</h3>
                        <p className="mt-3 text-neutral-600">
                            Without professional context, users can&apos;t distinguish marketing from efficacy.
                            Trial-and-error leads to wasted money and skin reactions.
                        </p>
                        <p className="mt-4 text-sm text-neutral-400">
                            &ldquo;I&apos;ve bought so many products that did nothing—or made things worse.&rdquo;
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
