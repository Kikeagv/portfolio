"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { screens } from "../data";

export function ScreenGallery() {
  return (
    <section className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-wider text-neutral-500 uppercase">
            Screen Gallery
          </p>
          <h3 className="text-3xl font-light text-white md:text-4xl">
            The complete experience
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative aspect-9/16 overflow-hidden rounded-2xl bg-neutral-900 transition-transform group-hover:scale-[1.02]">
                <Image
                  src={`/projects/ruta-sv/${screen.name}`}
                  alt={screen.label}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-neutral-500">
                {screen.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}