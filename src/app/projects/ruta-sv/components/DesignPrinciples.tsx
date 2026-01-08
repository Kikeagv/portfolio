"use client";

import { principles } from "../data";

export function DesignPrinciples() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
            Design Principles
          </p>
          <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
            Four principles guided every decision
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl bg-neutral-950 p-1">
          <div className="grid md:grid-cols-4">
            {principles.map((principle, index) => (
              <div
                key={principle.label}
                className={`p-8 ${
                  index !== 3
                    ? "border-b border-neutral-800 md:border-r md:border-b-0"
                    : ""
                }`}
              >
                <p className="text-lg font-medium text-white">
                  {principle.label}
                </p>
                <p className="mt-2 text-sm text-neutral-500">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}