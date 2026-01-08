"use client";

export function ScreenDiveDetail() {
  return (
    <section className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="flex justify-center">
            <div className="aspect-390/844 w-full max-w-75 overflow-hidden rounded-[2.5rem] bg-white shadow-xl">
              <div className="flex h-full w-full items-center justify-center bg-neutral-100">
                <p className="text-neutral-400">route-detail.png</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-500 uppercase">
              Route Detail
            </p>
            <h3 className="text-3xl font-light text-white md:text-4xl">
              Step-by-step navigation
            </h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#0047AB] pl-6">
                <p className="font-medium text-white">Interactive Map</p>
                <p className="mt-1 text-neutral-400">
                  Full route visualized on map with key stops marked. Users see
                  exactly where they&apos;re going.
                </p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-6">
                <p className="font-medium text-white">Timeline View</p>
                <p className="mt-1 text-neutral-400">
                  Departure 2:30 PM → Arrival 3:15 PM. Each segment detailed:
                  walk 5 min, board Bus 35, ride 12 stops.
                </p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-6">
                <p className="font-medium text-white">Action Clarity</p>
                <p className="mt-1 text-neutral-400">
                  &ldquo;Subir al bus&rdquo; and &ldquo;Bajar del bus&rdquo;
                  — explicit instructions at each transition point.
                </p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-6">
                <p className="font-medium text-white">Dual CTAs</p>
                <p className="mt-1 text-neutral-400">
                  &ldquo;Iniciar viaje&rdquo; for immediate navigation,
                  &ldquo;Guardar ruta&rdquo; for offline access later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}