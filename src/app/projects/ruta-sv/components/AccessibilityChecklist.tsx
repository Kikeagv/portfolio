"use client";

import { motion } from "framer-motion";
import { accessibilityMetrics } from "../data";

export function AccessibilityChecklist() {
  return (
    <section className="bg-[#00A86B] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm tracking-wider text-green-200 uppercase">
            Accessibility
          </p>
          <h2 className="text-3xl font-light text-white md:text-4xl">
            Every interaction verified
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {accessibilityMetrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl bg-white/10 p-6"
            >
              <p className="text-2xl font-light text-white">{item.metric}</p>
              <p className="mt-1 text-sm text-green-100">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}