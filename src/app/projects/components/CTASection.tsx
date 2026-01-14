"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light text-neutral-900 md:text-5xl">
            Want to see more?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-neutral-600">
            These are just the highlights. I&rsquo;ve worked on 50+ projects{" "}
            across healthcare, finance, and public services.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="mailto:contact@enriqueagv.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-white"
            >
              Let&rsquo;s talk
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-full border border-neutral-300 px-8 py-4 text-neutral-900 transition-colors hover:border-neutral-900"
            >
              Download resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}