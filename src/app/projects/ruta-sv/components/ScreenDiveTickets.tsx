"use client";

import Image from "next/image";


export function ScreenDiveTickets() {
  return (
    <section className="bg-neutral-100 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
            Ticket Management
          </p>
          <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">
            From purchase to validation
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Tickets organized by status, QR codes optimized for quick scanning
            in any lighting condition.
          </p>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="flex justify-center">
            <div className="relative aspect-390/844 w-full max-w-70 overflow-hidden rounded-[2.5rem] bg-white shadow-xl">
              <Image
                src="/projects/ruta-sv/my-tickets.png"
                alt="My Tickets"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-390/844 w-full max-w-70 overflow-hidden rounded-[2.5rem] bg-white shadow-xl">
              <Image
                src="/projects/ruta-sv/ticket-qr.png"
                alt="Ticket QR"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B35]/10">
              <span className="text-lg">🎫</span>
            </div>
            <h4 className="font-medium text-neutral-900">Status Tabs</h4>
            <p className="mt-2 text-sm text-neutral-600">
              Activos, Sin usar, Anteriores — instantly find the right ticket
              without scrolling.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0047AB]/10">
              <span className="text-lg">⏱️</span>
            </div>
            <h4 className="font-medium text-neutral-900">Time Remaining</h4>
            <p className="mt-2 text-sm text-neutral-600">
              Color-coded badges: orange for expiring soon, blue for days
              remaining.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00A86B]/10">
              <span className="text-lg">☀️</span>
            </div>
            <h4 className="font-medium text-neutral-900">Auto-Brightness</h4>
            <p className="mt-2 text-sm text-neutral-600">
              &ldquo;Brillo al máximo&rdquo; — screen brightness automatically
              boosted for outdoor scanning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}