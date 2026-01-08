"use client";

import { motion } from "framer-motion";
import { personas } from "../data";

export function Personas() {
  return (
    <section className="bg-neutral-100 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
            Who I Designed For
          </p>
          <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
            Three personas, three different needs
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white p-8"
            >
              <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl"
                style={{ backgroundColor: `${persona.color}20` }}
              >
                {persona.emoji}
              </div>
              <h3 className="text-xl font-medium text-neutral-900">
                {persona.name}
              </h3>
              <p
                className="mt-1 text-sm"
                style={{ color: persona.color }}
              >
                {persona.subtitle}
              </p>
              <p className="mt-4 text-neutral-600">{persona.description}</p>
              <p className="mt-4 text-sm text-neutral-500">
                <span className="font-medium">Primary need:</span>{" "}
                {persona.primaryNeed}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}