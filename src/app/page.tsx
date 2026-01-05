"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Navigation,
  Hero,
  Projects,
  About,
  Experience,
  Contact,
  Footer,
  AIVersion,
} from "~/app/_components/home";

export default function Home() {
  const [version, setVersion] = useState<"human" | "ai">("human");

  const handleSetVersion = (newVersion: "human" | "ai") => {
    setVersion(newVersion);
    if (newVersion === "human") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <div className="bg-[#fafafa]">
      <Navigation version={version} onVersionChange={handleSetVersion} />

      <AnimatePresence mode="wait">
        {version === "ai" ? (
          <motion.div
            key="ai"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-16"
          >
            <AIVersion />
          </motion.div>
        ) : (
          <motion.div key={version} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero />
            <Projects />
            <About />
            <Experience />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
