"use client";

import PhoneMock from "./PhoneMock";

export default function ScreenDive06() {
  return (
    <section className="bg-neutral-100 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="order-2 flex justify-center md:order-1">
            <PhoneMock name="06-income-details.png" label="Income & employment" footer="Simple selectors + guardrails" />
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">Screen 06</p>
            <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">Financial profile without overwhelm</h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#2563EB] pl-6">
                <p className="font-medium text-neutral-900">Structured input</p>
                <p className="mt-1 text-neutral-600">
                  Pickers and constrained formats reduce mistakes and speed completion.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Explain &ldquo;how it&apos;s used&rdquo;</p>
                <p className="mt-1 text-neutral-600">
                  Short microcopy clarifies why we ask—reinforcing trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}