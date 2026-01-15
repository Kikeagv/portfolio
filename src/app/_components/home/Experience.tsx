"use client";

import { motion } from "framer-motion";
import type { Job } from "./types";

const jobs: Job[] = [
  {
    period: "2023 — Present",
    role: "UX/UI Analyst",
    company: "Banco Atlántida",
    description:
      "Lead end-to-end UX/UI for core retail banking products. Built cross-brand design systems, led mobile app design from concept to launch, and drove implementation quality through rigorous design reviews.",
    highlight: "Design Systems",
  },
  {
    period: "2020 — 2023",
    role: "UX/UI Designer",
    company: "BlueStar",
    description:
      "Delivered complete product design lifecycle across multiple digital products. Shipped features end-to-end with user research, prototyping, and developer handoff.",
    highlight: "Full Lifecycle",
  },
  {
    period: "2022",
    role: "Web Designer",
    company: "Ministry of Economy",
    description:
      "Designed internal pages for a major governmental website. Collaborated with cross-functional teams to deliver public-facing web experiences.",
    highlight: "Internship",
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