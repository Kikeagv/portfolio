"use client";

import { AlertTriangle } from "lucide-react";
import PhoneMock from "./PhoneMock";

export default function ScreenDive04() {
  return (
    <section className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="flex justify-center">
            <PhoneMock
              name="04-selfie-liveness.png"
              label="Selfie / liveness"
              footer="Fast flow + strong error recovery"
              variant="dark"
            />
          </div>

          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-500 uppercase">Screen 04</p>
            <h3 className="text-3xl font-light text-white md:text-4xl">Security without friction</h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#F97316] pl-6">
                <p className="font-medium text-white">High-risk drop-off moment</p>
                <p className="mt-1 text-neutral-400">
                  This step is emotionally &ldquo;hot.&rdquo; We designed it to be short, guided, and recovery-friendly.
                </p>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <p className="font-medium text-white">Clear feedback</p>
                <p className="mt-1 text-neutral-400">
                  Show what went wrong (lighting, angle, movement) and what to do next—instantly.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-[#F97316]" />
                <div>
                  <p className="text-sm font-medium text-white">Design intent</p>
                  <p className="mt-1 text-sm text-neutral-400">
                    Make users feel protected, not suspected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}