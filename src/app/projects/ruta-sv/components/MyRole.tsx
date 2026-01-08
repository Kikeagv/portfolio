"use client";

export function MyRole() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
              My Role
            </p>
            <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
              Solo Product Designer
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              End-to-end ownership from research through high-fidelity UI. This
              project required ruthless prioritization—every decision had to
              earn its place.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-[#0047AB] pl-6">
              <p className="font-medium text-neutral-900">Research</p>
              <p className="mt-1 text-neutral-600">
                12 user interviews, contextual observation, 87 survey responses
              </p>
            </div>
            <div className="border-l-2 border-neutral-200 pl-6">
              <p className="font-medium text-neutral-900">Analysis</p>
              <p className="mt-1 text-neutral-600">
                Competitive analysis of transit apps in similar markets
              </p>
            </div>
            <div className="border-l-2 border-neutral-200 pl-6">
              <p className="font-medium text-neutral-900">Design</p>
              <p className="mt-1 text-neutral-600">
                Complete design system, screen specifications, and user flows
              </p>
            </div>
            <div className="border-l-2 border-neutral-200 pl-6">
              <p className="font-medium text-neutral-900">Accessibility</p>
              <p className="mt-1 text-neutral-600">
                WCAG 2.1 AA compliance, screen reader optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}