"use client";

import { motion } from "framer-motion";


const skills = [
  "User Research",
  "Product Strategy",
  "Interaction Design",
  "Design Systems",
  "Accessibility",
  "Prototyping",
];

export function About() {
  return (
    <section id="about" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
            About
          </p>

          <h2 className="text-3xl leading-snug font-light text-neutral-900 md:text-4xl">
            Designer. Builder. Obsessive about clarity.
          </h2>

          <div className="mt-8 space-y-6 text-lg text-neutral-600">
            <p>
              Years of shipping mobile products taught me that great design isn&apos;t about pixel-perfect screens. It&apos;s about making hard things feel effortless.
            </p>
            <p>I think AI can accelerate the development cycle, AI is not going to replace me but is making me better and faster each day.</p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-2">
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
    </section>
  );
}