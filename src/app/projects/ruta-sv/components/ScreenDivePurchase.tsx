"use client";

import Image from "next/image";


export function ScreenDivePurchase() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
              Ticket Purchase
            </p>
            <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">
              Flexible payment, clear pricing
            </h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#00A86B] pl-6">
                <p className="font-medium text-neutral-900">Ticket Types</p>
                <p className="mt-1 text-neutral-600">
                  Un viaje ($0.35), Pase de día ($1.00/24h), Pase semanal
                  ($3.50/7 días) — options for every use case.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Quantity Selector</p>
                <p className="mt-1 text-neutral-600">
                  Buy up to 10 tickets at once. Perfect for families or planning
                  ahead.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">
                  Payment Flexibility
                </p>
                <p className="mt-1 text-neutral-600">
                  Card payment or &ldquo;Efectivo en terminal&rdquo; — cash
                  option ensures no one is excluded from digital benefits.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-390/844 w-full max-w-75 overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-xl">
              <Image
                src="/projects/ruta-sv/ticket-purchase.png"
                alt="Ticket Purchase"
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