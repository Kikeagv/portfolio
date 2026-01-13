"use client";

import Image from "next/image";


export function ScreenDiveAlerts() {
  return (
    <section className="bg-neutral-100 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="order-2 flex justify-center md:order-1">
            <div className="relative aspect-390/844 w-full max-w-75 overflow-hidden rounded-[2.5rem] bg-white shadow-xl">
              <Image
                src="/projects/ruta-sv/home-alert.png"
                alt="Alerts"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
              Real-Time Alerts
            </p>
            <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">
              Proactive service notifications
            </h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#FF6B35] pl-6">
                <p className="font-medium text-neutral-900">
                  Service Disruptions
                </p>
                <p className="mt-1 text-neutral-600">
                  &ldquo;Alerta en servicio&rdquo; — clear warning about delays
                  on Ruta 24-A due to roadwork on Carretera Panamericana.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Active Trip Status</p>
                <p className="mt-1 text-neutral-600">
                  When traveling, the card shows live status: &ldquo;Llegando en
                  5 minutos&rdquo; with origin-destination context.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Non-Intrusive Design</p>
                <p className="mt-1 text-neutral-600">
                  Alerts overlay without blocking—dismissible with X, content
                  remains accessible underneath.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}