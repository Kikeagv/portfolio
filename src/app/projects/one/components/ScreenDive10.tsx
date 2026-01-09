"use client";

import { Lock, SlidersHorizontal, Eye, BadgeCheck } from "lucide-react";
import PhoneMock from "./PhoneMock";

export default function ScreenDive10() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">Screen 10</p>
            <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">
              Activation that reinforces control
            </h3>

            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#2563EB] pl-6">
                <p className="font-medium text-neutral-900">Immediate safeguards</p>
                <p className="mt-1 text-neutral-600">
                  Freeze card, set limits, manage notifications—users feel protected on day one.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">First-use guidance</p>
                <p className="mt-1 text-neutral-600">
                  A short setup checklist increases activation without extra cognitive load.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 p-5">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-neutral-800" />
                  <p className="text-sm font-medium text-neutral-900">Freeze / unfreeze</p>
                </div>
                <p className="mt-2 text-xs text-neutral-600">Instant security control</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-5">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-neutral-800" />
                  <p className="text-sm font-medium text-neutral-900">Spending limits</p>
                </div>
                <p className="mt-2 text-xs text-neutral-600">Control by category</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-5">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-neutral-800" />
                  <p className="text-sm font-medium text-neutral-900">Transaction alerts</p>
                </div>
                <p className="mt-2 text-xs text-neutral-600">Real-time reassurance</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-5">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-neutral-800" />
                  <p className="text-sm font-medium text-neutral-900">Set PIN</p>
                </div>
                <p className="mt-2 text-xs text-neutral-600">Activation-ready</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <PhoneMock name="10-activation-controls.png" label="Activation & controls" footer="Freeze, PIN, limits, alerts" />
          </div>
        </div>
      </div>
    </section>
  );
}