"use client";

import { motion } from "framer-motion";
import { insights } from "../data";

export default function Insights() {
  return (
    <section className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="mb-4 text-sm tracking-wider text-neutral-500 uppercase">Key Insights</p>
          <h2 className="max-w-4xl text-3xl font-light text-white md:text-4xl lg:text-5xl">
            We designed trust like a feature—
            <span className="text-neutral-500"> predictable, transparent, and user-controlled.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {insights.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <span className="text-sm" style={{ color: item.accent }}>
                {item.number}
              </span>
              <h3 className="mt-4 text-xl font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-neutral-300">{item.insight}</p>
              <p className="mt-4 border-t border-white/10 pt-4 text-sm text-neutral-400">
                <span className="font-medium text-white/90">Design decision:</span> {item.decision}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}