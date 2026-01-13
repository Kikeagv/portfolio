"use client";

import Image from "next/image";


export function Solution() {
  return (
    <section className="bg-linear-to-b from-neutral-950 to-[#0047AB]/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-wider text-[#4D8FD6] uppercase">
            The Solution
          </p>
          <h2 className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
            Ruta SV
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            A complete transit companion: route planning, real-time alerts, and
            digital ticketing—all designed for El Salvador&apos;s unique
            context.
          </p>
        </div>

        <div className="mb-24 overflow-hidden rounded-3xl bg-linear-to-br from-[#0047AB] to-[#00A86B] p-8 md:p-16">
          <div className="mx-auto max-w-sm">
            <div className="relative aspect-390/844 overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
              <Image
                src="/projects/ruta-sv/home-screen.png"
                alt="Ruta SV Home"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}