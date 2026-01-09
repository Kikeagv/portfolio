"use client";

import {
  Navigation,
  Hero,
  TheHook,
  MyRole,
  Insights,
  DesignPrinciples,
  Solution,
  ScreenDive01,
  ScreenDive02,
  ScreenDive03,
  ScreenDive04,
  ScreenDive05,
  ScreenDive06,
  ScreenDive07,
  ScreenDive08,
  ScreenDive09,
  ScreenDive10,
  ScreenGallery,
  Reflection,
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
      <ScreenDive01 />
      <ScreenDive02 />
      <ScreenDive03 />
      <ScreenDive04 />
      <ScreenDive05 />
      <ScreenDive06 />
      <ScreenDive07 />
      <ScreenDive08 />
      <ScreenDive09 />
      <ScreenDive10 />
      <ScreenGallery />
      <Reflection />
      <NextProject />
    </div>
  );
}