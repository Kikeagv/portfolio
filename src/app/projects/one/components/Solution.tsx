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
          <p className="mx-auto mt-4 max-w-3xl text-neutral-400">
            Ten key screens designed as a single trust-building narrative: clarity → verification → offer → decision → control.
          </p>
        </div>

        {/* Hero 3-screen showcase */}
        <div className="rounded-3xl bg-gradient-to-br from-[#7C3AED] to-[#2563EB] p-8 md:p-12">
          <div className="grid place-items-center gap-10 md:grid-cols-3">
            <PhoneMock
              name="01-eligibility.png"
              label="Eligibility"
              footer="Know requirements + time before you start"
              variant="dark"
            />
            <PhoneMock
              name="07-offer-summary.png"
              label="Offer Summary"
              footer="Fees, APR, limits—summarized first"
              variant="dark"
            />
            <PhoneMock
              name="10-activation-controls.png"
              label="Activation & Controls"
              footer="Freeze card, limits, PIN, notifications"
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
            <p className="mt-3 text-3xl font-light text-white">~ X min</p>
            <p className="mt-2 text-sm text-neutral-400">Replace with your measured median.</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-7">
            <div className="flex items-center gap-3 text-white">
              <Smartphone className="h-5 w-5" />
              <p className="text-sm font-medium">Completion rate</p>
            </div>
            <p className="mt-3 text-3xl font-light text-white">+ X%</p>
            <p className="mt-2 text-sm text-neutral-400">Lift vs previous/benchmark funnel.</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-7">
            <div className="flex items-center gap-3 text-white">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-sm font-medium">Support reduction</p>
            </div>
            <p className="mt-3 text-3xl font-light text-white">- X%</p>
            <p className="mt-2 text-sm text-neutral-400">&ldquo;Status / next steps&rdquo; contacts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}