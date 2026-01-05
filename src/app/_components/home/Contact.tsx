"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section className="bg-neutral-950 px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Have a project where
            <br />
            <span className="text-neutral-500">design really matters?</span>
          </h2>

          <motion.a
            href="mailto:enrique@example.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-12 inline-flex items-center gap-3 text-2xl text-white transition-colors hover:text-neutral-300"
          >
            enrique@example.com
            <ArrowUpRight className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}