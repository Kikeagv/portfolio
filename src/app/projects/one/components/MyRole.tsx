"use client";

export default function MyRole() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">My Role</p>
            <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
              Principal Product Designer (UX/UI)
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Led end-to-end onboarding design from discovery to launch: flows, IA, UX writing, high-fidelity UI,
              interaction specs, and implementation QA. Partnered with 1 PM, 1 PO, and 10 devs.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 p-6">
              <p className="text-sm font-medium text-neutral-900">Responsibilities</p>
              <div className="mt-3 grid gap-3 text-sm text-neutral-600">
                <p>• Funnel strategy + IA + user flows</p>
                <p>• KYC UX (error recovery, retries, clarity)</p>
                <p>• Offer/terms comprehension design</p>
                <p>• Activation + controls (freeze, limits, pin)</p>
                <p>• Dev handoff + build QA</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-neutral-950 p-4 text-white">
                <p className="text-xs text-neutral-400">Team</p>
                <p className="mt-1 text-lg font-light">12</p>
              </div>
              <div className="rounded-xl bg-neutral-950 p-4 text-white">
                <p className="text-xs text-neutral-400">Platforms</p>
                <p className="mt-1 text-lg font-light">iOS/Android</p>
              </div>
              <div className="rounded-xl bg-neutral-950 p-4 text-white">
                <p className="text-xs text-neutral-400">Status</p>
                <p className="mt-1 text-lg font-light">Launched</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}