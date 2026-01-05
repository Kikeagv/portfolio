"use client";

import { motion } from "framer-motion";
import type { Job } from "./types";

const jobs: Job[] = [
  {
    period: "2022 — Now",
    role: "Senior Product Designer",
    company: "FinTech Solutions",
    description: "Leading design for mobile banking products serving 2M+ users.",
    highlight: "2M+ users",
  },
  {
    period: "2020 — 2022",
    role: "UX Designer",
    company: "Banco Digital",
    description:
      "Designed and shipped key features for digital banking platform.",
    highlight: "30% fewer tickets",
  },
  {
    period: "2019 — 2020",
    role: "Product Designer",
    company: "StartUp Finance",
    description: "End-to-end design for fintech startup from 0 to funding.",
    highlight: "$2M funding",
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-neutral-100 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-2 text-sm tracking-wider text-neutral-400 uppercase">
            Experience
          </p>
          <h2 className="text-3xl font-light text-neutral-900">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl bg-white p-8"
            >
              <p className="text-sm text-neutral-400">{job.period}</p>
              <h3 className="mt-4 text-xl font-medium text-neutral-900">
                {job.role}
              </h3>
              <p className="mt-1 text-neutral-600">{job.company}</p>
              <p className="mt-4 text-sm text-neutral-500">{job.description}</p>
              <div className="mt-6">
                <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-900">
                  {job.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}