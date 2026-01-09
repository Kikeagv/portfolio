"use client";

import PhoneMock from "./PhoneMock";

export default function ScreenDive03() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">Screen 03</p>
            <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">Guided document capture</h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#10B981] pl-6">
                <p className="font-medium text-neutral-900">Real-time validation</p>
                <p className="mt-1 text-neutral-600">
                  Prevent bad captures early (glare, blur, cutoff) instead of failing later.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Forgiving retries</p>
                <p className="mt-1 text-neutral-600">
                  Users can recapture without losing progress or feeling punished.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <PhoneMock name="03-id-capture.png" label="Document capture" footer="Frame + checks + easy retry" />
          </div>
        </div>
      </div>
    </section>
  );
}