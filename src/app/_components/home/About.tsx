"use client";

import { motion } from "framer-motion";
import type { Stat } from "./types";

const skills = [
  "User Research",
  "Product Strategy",
  "Interaction Design",
  "Design Systems",
  "Accessibility",
  "Prototyping",
];

const stats: Stat[] = [
  { value: "5+", label: "Years experience" },
  { value: "50+", label: "Projects shipped" },
  { value: "100+", label: "User interviews" },
  { value: "2", label: "Countries" },
];

export function About() {
  return (
    <section id="about" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-4/5 overflow-hidden rounded-2xl bg-neutral-100">
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-neutral-400">Photo</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -right-6 -bottom-6 rounded-xl bg-neutral-900 p-6 text-white shadow-2xl"
            >
              <p className="text-3xl font-light">5+ years</p>
              <p className="mt-1 text-sm text-neutral-400">
                designing products
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
              About
            </p>

            <h2 className="text-3xl leading-snug font-light text-neutral-900 md:text-4xl">
              I start every project the same way: by listening.
            </h2>

            <div className="mt-8 space-y-6 text-lg text-neutral-600">
              <p>
                Before opening Figma, I&apos;m in the field. Riding buses with
                commuters. Sitting in living rooms with seniors trying health
                apps. Understanding problems in context, not just in theory.
              </p>
              <p>The best design decisions come from the deepest understanding.</p>
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 gap-8 border-t border-neutral-200 pt-12 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-4xl font-light text-neutral-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}