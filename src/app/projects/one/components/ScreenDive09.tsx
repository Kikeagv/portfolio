"use client";

import { CheckCircle2, Timer, AlertTriangle } from "lucide-react";
import PhoneMock from "./PhoneMock";

export default function ScreenDive09() {
  return (
    <section className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="flex justify-center">
            <PhoneMock
              name="09-decision-status.png"
              label="Decision status"
              footer="Approved / pending / next actions"
              variant="dark"
            />
          </div>

          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-500 uppercase">Screen 09</p>
            <h3 className="text-3xl font-light text-white md:text-4xl">Transparent outcomes (no dead ends)</h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#10B981] pl-6">
                <p className="font-medium text-white">Clear state design</p>
                <p className="mt-1 text-neutral-400">
                  Approved, pending, or needs review—each state includes the next-best action.
                </p>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <p className="font-medium text-white">Reduce support contacts</p>
                <p className="mt-1 text-neutral-400">
                  When users know what&apos;s happening, they don&apos;t call for status.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-5">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="h-4 w-4" />
                  <p className="text-sm font-medium">Approved</p>
                </div>
                <p className="mt-2 text-xs text-neutral-400">Activate now</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <div className="flex items-center gap-2 text-white">
                  <Timer className="h-4 w-4" />
                  <p className="text-sm font-medium">Pending</p>
                </div>
                <p className="mt-2 text-xs text-neutral-400">ETA + updates</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <div className="flex items-center gap-2 text-white">
                  <AlertTriangle className="h-4 w-4" />
                  <p className="text-sm font-medium">Needs review</p>
                </div>
                <p className="mt-2 text-xs text-neutral-400">Fix + retry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}