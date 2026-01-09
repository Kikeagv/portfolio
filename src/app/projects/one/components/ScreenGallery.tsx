"use client";

import { motion } from "framer-motion";

const screens = [
  { name: "01-eligibility.png", label: "Eligibility", desc: "Requirements + time estimate before commitment" },
  { name: "02-kyc-intro.png", label: "Identity intro", desc: "Explain why verification is needed" },
  { name: "03-id-capture.png", label: "Document capture", desc: "Guided capture + real-time checks" },
  { name: "04-selfie-liveness.png", label: "Selfie / liveness", desc: "Fast, forgiving flow with retries" },
  { name: "05-personal-details.png", label: "Personal details", desc: "Only what&apos;s necessary; clear progress" },
  { name: "06-income-details.png", label: "Income & employment", desc: "Simple, structured inputs; no overwhelm" },
  { name: "07-offer-summary.png", label: "Offer summary", desc: "Limits, fees, APR—summarized first" },
  { name: "08-terms-consent.png", label: "Terms & consent", desc: "Plain-language highlights + full docs" },
  { name: "09-decision-status.png", label: "Decision status", desc: "Approved / pending / alternative actions" },
  { name: "10-activation-controls.png", label: "Activation & controls", desc: "Set PIN, freeze card, spending controls" },
];

export default function ScreenGallery() {
  return (
    <section className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-wider text-neutral-500 uppercase">Screen Gallery</p>
          <h3 className="text-3xl font-light text-white md:text-4xl">10 key screens</h3>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Replace each placeholder with a redacted screenshot or polished mock. Keep filenames the same.
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
              <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-neutral-900 transition-transform group-hover:scale-[1.02]">
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-800 p-3">
                  <p className="text-center text-xs text-neutral-300">{s.name}</p>
                  <p className="text-center text-[11px] text-neutral-500">{s.label}</p>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-neutral-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}