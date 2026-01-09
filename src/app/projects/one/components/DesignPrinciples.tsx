"use client";

import { principles } from "../data";

export default function DesignPrinciples() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">Design Principles</p>
          <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">Principles that protected conversion</h2>
        </div>

        <div className="overflow-hidden rounded-2xl bg-neutral-950 p-1">
          <div className="grid md:grid-cols-4">
            {principles.map((p, idx) => (
              <div
                key={p.label}
                className={`p-8 ${idx !== 3 ? "border-b border-neutral-800 md:border-r md:border-b-0" : ""}`}
              >
                <p className="text-lg font-medium text-white">{p.label}</p>
                <p className="mt-2 text-sm text-neutral-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-neutral-500">
          &ldquo;Personalización inteligente&rdquo; was a north star: give users autonomy and tools—so they don&apos;t feel powerless.
        </p>
      </div>
    </section>
  );
}