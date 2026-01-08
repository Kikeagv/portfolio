"use client";

export function ScreenDiveResults() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
              Route Results
            </p>
            <h3 className="text-3xl font-light text-neutral-900 md:text-4xl">
              Compare options at a glance
            </h3>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-[#0047AB] pl-6">
                <p className="font-medium text-neutral-900">Smart Filters</p>
                <p className="mt-1 text-neutral-600">
                  &ldquo;Menos tiempo&rdquo; vs &ldquo;Menos trasbordos&rdquo;
                  — users choose their priority. Toggle chips make switching
                  instant.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Clear Cost Display</p>
                <p className="mt-1 text-neutral-600">
                  Total fare shown upfront: $0.35 for direct routes, $0.70 for
                  transfers. No surprises.
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Visual Route Preview</p>
                <p className="mt-1 text-neutral-600">
                  Walk → Bus 101-B → Walk shown graphically. Transfer count and
                  walking time visible without tapping.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="aspect-390/844 w-full max-w-75 overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-xl">
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-neutral-400">route-results.png</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}