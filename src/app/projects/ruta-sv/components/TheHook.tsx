"use client";

import { motion } from "framer-motion";

export function TheHook() {
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
          El Salvador&apos;s bus system moves millions daily. But there are no
          route maps. No digital tickets.
          <span className="text-neutral-400">
            {" "}
            And for users with disabilities, the barriers are even higher.
          </span>
        </motion.p>
      </div>
    </section>
  );
}