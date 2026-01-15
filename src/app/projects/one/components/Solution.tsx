"use client";

import { Timer, Smartphone, ShieldCheck } from "lucide-react";
import PhoneMock from "./PhoneMock";

export default function Solution() {
  return (
    <section className="bg-gradient-to-b from-neutral-950 to-[#7C3AED]/20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-wider text-[#C4B5FD] uppercase">The Product</p>
          <h2 className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
            Credit Card Onboarding
          </h2>
        </div>

        {/* Hero 3-screen showcase */}
        <div className="rounded-3xl bg-gradient-to-br from-[#7C3AED] to-[#2563EB] p-8 md:p-12">
          <div className="grid place-items-center gap-10 md:grid-cols-3">
            <PhoneMock
              name="X - 1.png"
              label="Eligibility"
              variant="dark"
            />
            <PhoneMock
              name="X - 11.png"
              label="Offer Summary"
              variant="dark"
            />
            <PhoneMock
              name="X - 15.png"
              label="Activation & Controls"
              variant="dark"
            />
          </div>
        </div>

        {/* Placeholder Metrics */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-7">
            <div className="flex items-center gap-3 text-white">
              <Timer className="h-5 w-5" />
              <p className="text-sm font-medium">Time to complete</p>
            </div>
            <p className="mt-3 text-3xl font-light text-white">~ 15 min</p>
            <p className="mt-2 text-sm text-neutral-400">Time from zero to card on the way</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-7">
            <div className="flex items-center gap-3 text-white">
              <Smartphone className="h-5 w-5" />
              <p className="text-sm font-medium">Completion rate</p>
            </div>
            <p className="mt-3 text-3xl font-light text-white">46%</p>
            <p className="mt-2 text-sm text-neutral-400">Users are given an outcome (offer or rejection).</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-7">
            <div className="flex items-center gap-3 text-white">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-sm font-medium">NPS</p>
            </div>
            <p className="mt-3 text-3xl font-light text-white">86</p>
            <p className="mt-2 text-sm text-neutral-400">One of the highest for a digital banking experience in El Salvador</p>
          </div>
        </div>
      </div>
    </section>
  );
}