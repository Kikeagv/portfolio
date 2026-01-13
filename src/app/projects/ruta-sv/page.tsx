"use client";

import {
  Navigation,
  Hero,
  ImpactStatement,
  ContextStats,
  MyRole,
  Personas,
  DesignPrinciples,
  ScreenShowcase,
  DesignSystem,
  NextProject,
} from "./components";

export default function RutaSVPage() {
  return (
    <div className="bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <ImpactStatement />
      <ContextStats />
      <MyRole />
      <Personas />
      <DesignPrinciples />
      <ScreenShowcase />
      <DesignSystem />
      <NextProject />
    </div>
  );
}