"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
  isFeatured?: boolean;
}

export function ProjectCard({ project, index, isFeatured = false }: ProjectCardProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  if (isFeatured) {
    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <Link href={project.href} className="group block">
          <div className="overflow-hidden rounded-3xl bg-neutral-900 transition-colors hover:bg-neutral-800">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
                <div>
                  <div className="mb-8 flex items-center gap-4">
                    <span className="text-sm text-neutral-600">{project.number}</span>
                    <span className="text-sm text-neutral-600">{project.period}</span>
                  </div>

                  <h2 className="text-4xl font-light text-white md:text-5xl">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-xl text-neutral-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-6 max-w-md text-lg text-neutral-500">
                    {project.description}
                  </p>

                  <p className="mt-6 text-sm text-neutral-600">
                    {project.category}
                  </p>
                </div>



                <motion.div
                  className="mt-8 flex items-center gap-2 text-white"
                  animate={{ x: hoveredProject === project.id ? 8 : 0 }}
                >
                  <span className="text-sm">Read case study</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </div>

              <div className={`relative min-h-100 bg-linear-to-br ${project.gradient} lg:min-h-150`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                  <motion.div
                    className="relative h-full w-full"
                    animate={{
                      y: hoveredProject === project.id ? -8 : 0,
                      scale: hoveredProject === project.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {project.image ? (
                      <div className="relative h-full w-full overflow-hidden rounded-2xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain"
                          priority={index < 2}
                        />
                      </div>
                    ) : (
                      <div className="aspect-9/19 overflow-hidden rounded-[2.5rem] bg-neutral-900 p-2 shadow-2xl">
                        <div className="h-full w-full overflow-hidden rounded-4xl bg-neutral-800">
                          <div className="mx-auto mt-2 h-6 w-24 rounded-full bg-neutral-900" />
                          <div className="space-y-3 p-4">
                            <div className="h-12 rounded-xl bg-white/10" />
                            <div className="h-32 rounded-xl bg-white/10" />
                            <div className="h-20 rounded-xl bg-white/10" />
                            <div className="grid grid-cols-2 gap-3">
                              <div className="h-16 rounded-xl bg-white/10" />
                              <div className="h-16 rounded-xl bg-white/10" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
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
        <div className="overflow-hidden rounded-2xl bg-neutral-900 transition-colors hover:bg-neutral-800">
          <div className={`relative h-64 bg-linear-to-br ${project.gradient}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
            <div className="absolute inset-0 p-6">
              <motion.div
                animate={{
                  y: hoveredProject === project.id ? -4 : 0,
                  scale: hoveredProject === project.id ? 1.05 : 1,
                }}
                className="relative h-full w-full"
              >
                {project.image ? (
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3 w-full h-full max-w-50 mx-auto items-center">
                    <div className="h-20 rounded-xl bg-white/20 backdrop-blur-sm" />
                    <div className="h-20 rounded-xl bg-white/20 backdrop-blur-sm" />
                    <div className="col-span-2 h-16 rounded-xl bg-white/20 backdrop-blur-sm" />
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-4 flex items-center gap-4">
              <span className="text-sm text-neutral-600">{project.number}</span>
              <span className="text-sm text-neutral-600">{project.period}</span>
            </div>

            <h3 className="text-2xl font-light text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-neutral-400">
              {project.subtitle}
            </p>

            <p className="mt-4 text-sm text-neutral-600">
              {project.category}
            </p>


          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}