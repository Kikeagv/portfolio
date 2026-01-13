"use client";

import { motion } from "framer-motion";

export function ImpactStatement() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl leading-relaxed font-light text-neutral-900 md:text-4xl lg:text-5xl"
        >
          El Salvador had no transit apps.
          <span className="text-neutral-400">
            {" "}I designed Ruta SV—an accessible, offline-first solution that puts riders first.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
