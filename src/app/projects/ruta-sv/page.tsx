"use client";

import {
  Navigation,
  Hero,
  TheHook,
  ContextStats,
  MyRole,
  Research,
  CoreInsight,
  Insights,
  Personas,
  DesignPrinciples,
  Solution,
  ScreenDiveHome,
  ScreenDiveAlerts,
  ScreenDiveResults,
  ScreenDiveDetail,
  ScreenDivePurchase,
  ScreenDiveTickets,
  ScreenGallery,
  DesignSystem,
  AccessibilityChecklist,
  Reflection,
  NextProject,
} from "./components";

export default function RutaSVPage() {
  return (
    <div className="bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <TheHook />
      <ContextStats />
      <MyRole />
      <Research />
      <CoreInsight />
      <Insights />
      <Personas />
      <DesignPrinciples />
      <Solution />
      <ScreenDiveHome />
      <ScreenDiveAlerts />
      <ScreenDiveResults />
      <ScreenDiveDetail />
      <ScreenDivePurchase />
      <ScreenDiveTickets />
      <ScreenGallery />
      <DesignSystem />
      <AccessibilityChecklist />
      <Reflection />
      <NextProject />
    </div>
  );
}