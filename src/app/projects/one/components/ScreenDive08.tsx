"use client";

import PhoneMock from "./PhoneMock";

export default function ScreenDive08() {
  return (
    <section className="bg-neutral-100 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="order-2 flex justify-center md:order-1">
            <PhoneMock name="08-terms-consent.png" label="Terms & consent" footer="Plain-language highlights + full docs" />
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">Screen 08</p>
            <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">Consent that users actually understand</h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#7C3AED] pl-6">
                <p className="font-medium text-neutral-900">Key highlights</p>
                <p className="mt-1 text-neutral-600">
                  Summary bullets increase comprehension, reducing &ldquo;I&apos;ll do this later&rdquo; abandonment.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Trust cues</p>
                <p className="mt-1 text-neutral-600">
                  Clear links to full documents + transparent handling of user data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}