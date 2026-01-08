"use client";

import { motion } from "framer-motion";

export function Research() {
  return (
    <section className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-4 text-sm tracking-wider text-neutral-500 uppercase">
            Research
          </p>
          <h2 className="max-w-3xl text-3xl font-light text-white md:text-4xl lg:text-5xl">
            I needed to understand how people actually navigate—
            <span className="text-neutral-500">
              not how I assumed they did.
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-neutral-300">
            I interviewed 12 users across different contexts: daily commuters,
            occasional travelers, elderly users with limited tech experience,
            and screen reader users. Combined with 87 survey responses and
            hours of contextual observation, patterns emerged.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            The biggest surprise? People don&apos;t think in route numbers.
            They think in landmarks. &ldquo;The bus that passes by
            Metrocentro&rdquo; means more than &ldquo;Route 101-B.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}