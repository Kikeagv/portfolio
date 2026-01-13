"use client";

import Image from "next/image";


export function ScreenDiveHome() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
              Home Screen
            </p>
            <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">
              Search-first, personalized experience
            </h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#0047AB] pl-6">
                <p className="font-medium text-neutral-900">Personalized Greeting</p>
                <p className="mt-1 text-neutral-600">
                  &ldquo;Buenos días, Hola María&rdquo; — contextual greeting
                  based on time of day creates a warm, personal experience.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Quick Search Access</p>
                <p className="mt-1 text-neutral-600">
                  Origin defaults to &ldquo;Ubicación actual&rdquo;.
                  Destination field prominently placed for immediate route
                  planning.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Recent & Favorites</p>
                <p className="mt-1 text-neutral-600">
                  &ldquo;Tus últimos viajes&rdquo; and &ldquo;Favoritos&rdquo;
                  reduce friction for repeat destinations—Trabajo, Casa,
                  Metrocentro.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-390/844 w-full max-w-75 overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-xl">
              <Image
                src="/projects/ruta-sv/home-screen.png"
                alt="Home Screen"
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