"use client";

import {
  Navigation,
  Hero,
  TheHook,
  MyRole,
  Insights,
  DesignPrinciples,
  Solution,
  ProcessModule,
  ScreenGallery,
  NextProject,
} from "./components";

export default function OnePage() {
  return (
    <div className="bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <TheHook />
      <MyRole />
      <Insights />
      <DesignPrinciples />
      <Solution />

      {/* Module 1: Onboarding & Identity */}
      <ProcessModule
        moduleNumber="01"
        title="Foundations of Trust"
        description="Setting clear expectations and validating identity through a seamless, biometric-first approach that prioritizes security without sacrificing speed."
        variant="light"
        screens={[
          {
            name: "X - 1.png",
            label: "Predictable Start",
            description: "A comprehensive checklist and 5-step progress indicator reduce cognitive load and abandonment by answering 'what's next?' before the user even starts.",
            footer: "The Entry Point"
          },
          {
            name: "X - 2.png",
            label: "Smart Validation",
            description: "Biometric identity verification with real-time guidance ensures high pass rates while reinforcing the product's premium security standards.",
            footer: "Identity Verification"
          }
        ]}
      />

      {/* Module 2: The Moment of Truth */}
      <ProcessModule
        moduleNumber="02"
        title="The Credit Offer"
        description="Transforming the complex decision of credit into a moment of celebration, with transparent terms and guided selection of high-value rewards."
        variant="dark"
        screens={[
          {
            name: "X - 11.png",
            label: "Approved Offer",
            description: "Instant decisioning with a clearly visualized credit limit and rate. We use a countdown timer to drive conversion and highlight the offer's exclusivity.",
            footer: "Real-time Decision"
          },
          {
            name: "X - 13.png",
            label: "Smart Rewards",
            description: "Guided choice between Points, Cashback, or Miles. We use data-driven badges to simplify complex financial trade-offs for the user.",
            footer: "Benefit Choice"
          }
        ]}
      />

      {/* Module 3: Deep Customization */}
      <ProcessModule
        moduleNumber="03"
        title="Tactile Ownership"
        description="Completing the journey with personalization that makes the digital product feel tangible, while providing deep transparency into selected benefits."
        variant="light"
        screens={[
          {
            name: "X - 15.png",
            label: "Card Tailoring",
            description: "A live card preview with color swatches and name selection options allows users to 'feel' the product before the physical card arrives.",
            footer: "Personalization"
          },
          {
            name: "X - 14.png",
            label: "Benefit Clarity",
            description: "Rich, contextual details for rewards. We explain the 'why' and 'how' of benefits to ensure long-term engagement and product satisfaction.",
            footer: "Transparency"
          }
        ]}
      />

      <ScreenGallery />
      <NextProject />
    </div>
  );
}