"use client";

import PhoneMock from "./PhoneMock";

export default function ScreenDive02() {
  return (
    <section className="bg-neutral-100 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="order-2 flex justify-center md:order-1">
            <PhoneMock name="02-kyc-intro.png" label="Identity intro" footer="Why we need this + privacy cues" />
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">Screen 02</p>
            <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">Reduce KYC anxiety with clarity</h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#2563EB] pl-6">
                <p className="font-medium text-neutral-900">Explain &ldquo;why&rdquo; before &ldquo;do&rdquo;</p>
                <p className="mt-1 text-neutral-600">
                  A short, honest explanation improves trust and decreases rage quits at verification.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Time-bound reassurance</p>
                <p className="mt-1 text-neutral-600">
                  &ldquo;This step takes ~X seconds&rdquo; reduces perceived effort even when the step count is unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}