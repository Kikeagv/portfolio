"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data";

export function OtherProjects() {
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="bg-neutral-950 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-sm uppercase tracking-wider text-neutral-600"
        >
          More Projects
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isFeatured={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}