"use client";

export default function Reflection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">Reflection</p>
        <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">What made this work</h2>

        <div className="mt-12 space-y-8">
          <div className="border-l-2 border-[#7C3AED] pl-6">
            <h3 className="font-medium text-neutral-900">Trust is a UX outcome</h3>
            <p className="mt-2 text-neutral-600">
              Predictable steps + transparent states + user control turned a high-anxiety funnel into a confident completion.
            </p>
          </div>

          <div className="border-l-2 border-neutral-200 pl-6">
            <h3 className="font-medium text-neutral-900">Speed came from clarity</h3>
            <p className="mt-2 text-neutral-600">
              The fastest onboarding isn&apos;t the shortest—it&apos;s the one users understand without hesitation.
            </p>
          </div>

          <div className="border-l-2 border-neutral-200 pl-6">
            <h3 className="font-medium text-neutral-900">Control after approval matters</h3>
            <p className="mt-2 text-neutral-600">
              Activation + safeguards (freeze/limits/alerts) reinforce trust and accelerate first-use behavior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}