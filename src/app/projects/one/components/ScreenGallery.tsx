"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screens = [
  { name: "X - 1.png", label: "Start Intro", desc: "Eligibility check & initial steps" },
  { name: "X - 2.png", label: "Identity validation", desc: "Selfie capture for verification" },
  { name: "X - 3.png", label: "Phone verification", desc: "OTP 6-digit code entry" },
  { name: "X - 4.png", label: "Residence address", desc: "Map view + location details" },
  { name: "X - 5.png", label: "Email entry", desc: "Contact information setup" },
  { name: "X - 6.png", label: "Personal details", desc: "Profile & academic background" },
  { name: "X - 7.png", label: "Employment", desc: "Workplace & contract details" },
  { name: "X - 8.png", label: "References", desc: "Empty state for adding contacts" },
  { name: "X - 9.png", label: "Add family ref", desc: "Bottom sheet for reference entry" },
  { name: "X - 10.png", label: "References list", desc: "Filled personal/family refs" },
  { name: "X - 11.png", label: "Offer approved", desc: "Exclusive credit limit offer" },
  { name: "X - 12.png", label: "Offer unavailable", desc: "Waitlist state for ineligible" },
  { name: "X - 13.png", label: "Choose rewards", desc: "Benefit selection (permanent)" },
  { name: "X - 14.png", label: "Benefit details", desc: "Deeper look at selected perks" },
  { name: "X - 15.png", label: "Personalization", desc: "Card color & name customization" },
];

export default function ScreenGallery() {
  return (
    <section className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-wider text-neutral-500 uppercase">Screen Gallery</p>
          <h3 className="text-3xl font-light text-white md:text-4xl">Complete Flow</h3>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            A deep dive into key screens that make up the digital onboarding experience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
          {screens.map((s, index) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group"
            >
              <div className="aspect-[390/844] overflow-hidden rounded-2xl bg-neutral-900 transition-transform group-hover:scale-[1.02] border border-white/5 relative">
                <Image
                  src={`/projects/one/${s.name}`}
                  alt={s.label}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-3 text-center text-[11px] font-medium text-white">{s.label}</p>
              <p className="text-center text-[10px] text-neutral-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}