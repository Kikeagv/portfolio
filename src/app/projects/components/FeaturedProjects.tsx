"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="px-6 pb-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-sm uppercase tracking-wider text-neutral-600"
        >
          Featured Case Studies
        </motion.p>

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isFeatured
            />
          ))}
        </div>
      </div>
    </section>
  );
}