"use client";

export function DesignSystem() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
            Design System
          </p>
          <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
            Built for accessibility from the ground up
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-6 aspect-square overflow-hidden rounded-2xl bg-neutral-100 p-6">
              <div className="grid h-full grid-cols-3 gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex-1 rounded-lg bg-[#0047AB]"></div>
                  <div className="flex-1 rounded-lg bg-[#003380]"></div>
                  <div className="flex-1 rounded-lg bg-[#4D8FD6]"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex-1 rounded-lg bg-[#00A86B]"></div>
                  <div className="flex-1 rounded-lg bg-[#007A4D]"></div>
                  <div className="flex-1 rounded-lg bg-[#4DCC9A]"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex-1 rounded-lg bg-[#FF6B35]"></div>
                  <div className="flex-1 rounded-lg bg-[#FFB800]"></div>
                  <div className="flex-1 rounded-lg bg-[#1A1A2E]"></div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium text-neutral-900">
              Salvadoran Blue palette
            </h3>
            <p className="mt-2 text-neutral-600">
              Primary colors drawn from the national flag. All combinations
              meet WCAG 2.1 AA contrast requirements (4.5:1 minimum).
            </p>
          </div>

          <div>
            <div className="font-albert-sans mb-6 flex aspect-square flex-col justify-center overflow-hidden rounded-2xl bg-neutral-100 p-6">
              <p className="text-4xl font-bold text-neutral-900">Aa</p>
              <p className="mt-2 text-2xl font-semibold text-neutral-700">
                Headlines
              </p>
              <p className="mt-1 text-lg text-neutral-600">Body text at 17sp</p>
              <p className="mt-1 text-sm text-neutral-500">
                Captions at 13sp minimum
              </p>
            </div>
            <h3 className="text-lg font-medium text-neutral-900">
              Universal scaling with Albert Sans
            </h3>
            <p className="mt-2 text-neutral-600">
              Albert Sans ensures high legibility and consistent scaling across
              all platforms, supporting dynamic type from 85% to 200%.
            </p>
          </div>

          <div>
            <div className="mb-6 flex aspect-square flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-neutral-100 p-6">
              <div className="flex h-14 w-full items-center justify-center rounded-xl bg-[#0047AB] text-white">
                Buscar ruta
              </div>
              <div className="flex h-14 w-full items-center justify-center rounded-xl border-2 border-[#0047AB] text-[#0047AB]">
                Guardar ruta
              </div>
              <div className="flex h-14 w-full items-center justify-center text-[#0047AB]">
                Ver todos
              </div>
            </div>
            <h3 className="text-lg font-medium text-neutral-900">
              48dp minimum touch targets
            </h3>
            <p className="mt-2 text-neutral-600">
              Every interactive element exceeds accessibility guidelines.
              Consistent 12dp corner radius throughout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}