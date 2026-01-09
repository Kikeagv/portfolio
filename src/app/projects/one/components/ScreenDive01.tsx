"use client";

import PhoneMock from "./PhoneMock";

export default function ScreenDive01() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">Screen 01</p>
            <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">Eligibility-first commitment</h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#7C3AED] pl-6">
                <p className="font-medium text-neutral-900">Set expectations upfront</p>
                <p className="mt-1 text-neutral-600">
                  Users see requirements and time estimate before starting—reducing abandonment from uncertainty.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Predictable progress</p>
                <p className="mt-1 text-neutral-600">
                  A clear step indicator answers &ldquo;where am I?&rdquo; and &ldquo;what&apos;s next?&rdquo; instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <PhoneMock name="01-eligibility.png" label="Eligibility" footer="Requirements + time estimate" />
          </div>
        </div>
      </div>
    </section>
  );
}