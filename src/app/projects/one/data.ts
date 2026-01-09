import type { Insight, Principle } from "./types";

export const insights: Insight[] = [
  {
    number: "01",
    title: "Trust is the primary conversion lever",
    insight:
      "Users associate credit with fear: hidden fees, unauthorized charges, and losing control. Anxiety spikes at identity + terms steps.",
    decision:
      "Radical transparency: preview everything (fees, limits, timelines), show progress and &ldquo;what happens next&rdquo; at every step.",
    accent: "#7C3AED",
  },
  {
    number: "02",
    title: "People want control—not an &ldquo;executive&rdquo;",
    insight:
      "Self-serve is the differentiator. Users want immediate access and self-management, without waiting on a person.",
    decision:
      "Design for autonomy: clear eligibility, instant status, in-app controls, and guardrails (not blockers).",
    accent: "#2563EB",
  },
  {
    number: "03",
    title: "Drop-off happens when outcomes feel unpredictable",
    insight:
      "Uncertainty kills completion: &apos;How long will this take? Will I get approved? What do you do with my data?&apos;",
    decision:
      "Set expectations upfront: time estimate, required inputs, transparent decision states with next-best actions.",
    accent: "#10B981",
  },
  {
    number: "04",
    title: "One flow must serve very different archetypes",
    insight:
      "Security-first, benefits-driven, skeptical users… the same onboarding must feel safe AND simple for all of them.",
    decision:
      "Progressive disclosure + adaptable microcopy: reassurance, benefit framing, and fallback support at the right moments.",
    accent: "#F97316",
  },
];

export const principles: Principle[] = [
  { label: "Control by Default", desc: "Make users feel in charge at every step" },
  { label: "Transparent Outcomes", desc: "Remove uncertainty with clear states" },
  { label: "Fast, Not Rushed", desc: "Speed with clarity—never confusion" },
  { label: "Safe & Compliant", desc: "Fraud prevention without punishing legit users" },
];