"use client";

import {
  Navigation,
  Hero,
  FeaturedProjects,
  CTASection,
  Footer,
} from "./components";

export default function ProjectsPage() {
  return (
    <div className="bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <CTASection />
      <Footer />
    </div>
  );
}