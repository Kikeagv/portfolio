"use client";

import { motion } from "framer-motion";
import { insights } from "../data";

export function Insights() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
            What I Learned
          </p>
          <h2 className="max-w-2xl text-3xl font-light text-neutral-900 md:text-4xl">
            Four insights that shaped every design decision
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {insights.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-neutral-200 p-8"
            >
              <span className="text-sm text-[#0047AB]">{item.number}</span>
              <h3 className="mt-4 text-xl font-medium text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-3 text-neutral-600">{item.insight}</p>
              <p className="mt-4 border-t border-neutral-100 pt-4 text-sm text-neutral-500">
                <span className="font-medium text-neutral-700">
                  Design decision:
                </span>{" "}
                {item.decision}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}