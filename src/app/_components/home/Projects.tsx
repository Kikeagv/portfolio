"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import type { Project } from "./types";

const projects: Project[] = [
  {
    id: "one",
    number: "01",
    title: "Credit Card Onboarding",
    subtitle: "Earning trust in under 5 minutes",
    description: "Designing an onboarding that turns fear of credit into confident activation.",
    category: "UX/UI Design • Product Design",
    color: "violet",
    href: "/projects/one",
    stats: { archetypes: "5", steps: "6", process: "Self-serve" },
  },
  {
    id: "ruta-sv",
    number: "02",
    title: "Ruta SV",
    subtitle: "El Salvador's first transit app",
    description: "What if a city's entire transit knowledge lived in people's heads?",
    category: "Product Design • Mobile",
    color: "blue",
    href: "/projects/ruta-sv",
    stats: { users: "45K+", interviews: "42", rating: "4.6★" },
  },
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const getColorClass = (color: string) => {
    switch (color) {
      case "emerald": return "bg-emerald-500";
      case "blue": return "bg-blue-500";
      case "violet": return "bg-violet-500";
      default: return "bg-neutral-500";
    }
  };

  const getGradientClass = (color: string) => {
    switch (color) {
      case "emerald": return "from-emerald-600 to-teal-600";
      case "blue": return "from-blue-600 to-cyan-600";
      case "violet": return "from-violet-600 to-purple-600";
      default: return "from-neutral-600 to-neutral-700";
    }
  };

  return (
    <section id="work" className="bg-neutral-950 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-2 text-sm tracking-wider text-neutral-500 uppercase">
            Selected Work
          </p>
          <h2 className="text-3xl font-light text-white">Case Studies</h2>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link href={project.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-neutral-900 transition-colors hover:bg-neutral-800">
                  <div
                    className={`absolute top-0 left-0 h-full w-1 ${getColorClass(project.color)}`}
                  />

                  <div className="p-8 md:p-12">
                    <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <div className="mb-4 flex items-center gap-4">
                          <span className="text-sm text-neutral-600">
                            {project.number}
                          </span>
                          <span className="text-sm text-neutral-600">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-3xl font-light text-white md:text-4xl">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-lg text-neutral-400">
                          {project.description}
                        </p>
                      </div>

                      <motion.div
                        animate={{
                          x: hoveredProject === project.id ? 8 : 0,
                          opacity: hoveredProject === project.id ? 1 : 0.5,
                        }}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-700"
                      >
                        <ArrowRight className="h-5 w-5 text-white" />
                      </motion.div>
                    </div>

                    <div className="mt-8 flex gap-8 border-t border-neutral-800 pt-6">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-xl font-light text-white">{value}</p>
                          <p className="text-xs tracking-wider text-neutral-600 uppercase">
                            {key}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    animate={{
                      height: hoveredProject === project.id ? 250 : 0,
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div
                      className={`h-62.5 bg-linear-to-br ${getGradientClass(project.color)}`}
                    >
                      <div className="flex h-full w-full items-center justify-center">
                        <p className="text-white/40">Project preview</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}