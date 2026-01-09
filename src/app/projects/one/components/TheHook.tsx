"use client";

import { motion } from "framer-motion";

export default function TheHook() {
  return (
    <section className="relative bg-white py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl leading-relaxed font-light text-neutral-900 md:text-4xl lg:text-5xl"
        >
          People don&apos;t avoid credit because they don&apos;t want it.
          <span className="text-neutral-400"> They avoid it because they don&apos;t trust it.</span>
          <br />
          Hidden fees, unclear approvals, and bureaucracy make them feel powerless.
        </motion.p>
        <p className="mt-10 text-lg text-neutral-600">
          Our job was to replace anxiety with control—without sacrificing fraud prevention or compliance.
        </p>
      </div>
    </section>
  );
}