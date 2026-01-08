"use client";

export function CoreInsight() {
  return (
    <section className="relative overflow-hidden bg-[#0047AB] py-32 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0),rgba(0,0,0,0.3))]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="mb-6 text-sm tracking-wider text-blue-200 uppercase">
          The Core Insight
        </p>
        <h2 className="text-3xl leading-tight font-light text-white md:text-5xl lg:text-6xl">
          &ldquo;Accessibility constraints don&apos;t limit design—they
          clarify it.&rdquo;
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-blue-100">
          Designing for users with the greatest barriers—visual impairments,
          motor difficulties, cognitive load—produced a better experience for
          everyone.
        </p>
      </div>
    </section>
  );
}