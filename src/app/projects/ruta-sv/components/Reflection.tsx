"use client";

export function Reflection() {
  const reflections = [
    {
      title: "Accessibility is a design philosophy, not a checklist",
      borderColor: "#0047AB",
      description:
        "Starting with the needs of users who face the greatest barriers—screen reader users, elderly riders, those with motor impairments—produced a cleaner, more intuitive experience for everyone. Constraints clarify.",
    },
    {
      title: "Solo work demands ruthless prioritization",
      borderColor: "border-neutral-200",
      description:
        "Without a team to divide work, every feature had to earn its place. I constantly asked: &ldquo;Does this serve the core user need?&rdquo; If not, it waited. This focus made the product stronger.",
    },
    {
      title: "Local context matters more than best practices",
      borderColor: "border-neutral-200",
      description:
        "Generic transit app patterns didn't fit. Users here navigate by landmarks, not route numbers. They need offline functionality, not real-time-only features. Understanding the local mental model was everything.",
    },
    {
      title: "What's next",
      borderColor: "border-neutral-200",
      description:
        "Future opportunities include real-time GPS tracking integration, community-contributed route updates, and multi-modal expansion. The foundation is built for growth.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
          Reflection
        </p>
        <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
          What this project taught me
        </h2>

        <div className="mt-12 space-y-8">
          {reflections.map((item, index) => (
            <div
              key={index}
              className={`border-l-2 pl-6 ${
                item.borderColor.startsWith("border-")
                  ? item.borderColor
                  : ""
              }`}
              style={
                !item.borderColor.startsWith("border-")
                  ? { borderColor: item.borderColor }
                  : undefined
              }
            >
              <h3 className="font-medium text-neutral-900">{item.title}</h3>
              <p
                className="mt-2 text-neutral-600"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}