"use client";

import PhoneMock from "./PhoneMock";

export default function ScreenDive05() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">Screen 05</p>
            <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">Personal details, trimmed to essentials</h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#7C3AED] pl-6">
                <p className="font-medium text-neutral-900">Progressive disclosure</p>
                <p className="mt-1 text-neutral-600">
                  We keep cognitive load low by revealing only what&apos;s needed at the moment.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Smart defaults</p>
                <p className="mt-1 text-neutral-600">
                  Prefill where safe, reduce typing, and prevent validation errors early.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <PhoneMock name="05-personal-details.png" label="Personal details" footer="Short, structured inputs" />
          </div>
        </div>
      </div>
    </section>
  );
}