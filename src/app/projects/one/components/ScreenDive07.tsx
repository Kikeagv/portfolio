"use client";

import PhoneMock from "./PhoneMock";

export default function ScreenDive07() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">Screen 07</p>
            <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">Offer clarity before legal text</h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#10B981] pl-6">
                <p className="font-medium text-neutral-900">Offer snapshot</p>
                <p className="mt-1 text-neutral-600">
                  Users see the important numbers first: fees, APR, limits, and timeline—no surprises.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Comparison-ready</p>
                <p className="mt-1 text-neutral-600">
                  Make it easy to understand what&apos;s good about the offer—without marketing fluff.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <PhoneMock name="07-offer-summary.png" label="Offer summary" footer="Fees, APR, limits—summarized first" />
          </div>
        </div>
      </div>
    </section>
  );
}