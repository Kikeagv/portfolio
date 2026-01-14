"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { WeatherWidget } from "./WeatherWidget";
import { MusicWidget } from "./MusicWidget";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  useEffect(() => {
    setIsVisible(false);
    setHasScrolled(false);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      style={{
        opacity: hasScrolled && isVisible ? heroOpacity : 1,
        y: hasScrolled && isVisible ? heroY : 0,
      }}
      className="relative flex min-h-screen flex-col justify-center px-6 pt-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={
                isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }
              }
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-6 text-neutral-500">Product Designer</p>

              <h1 className="text-5xl leading-[1.1] font-light tracking-tight text-neutral-900 md:text-7xl lg:text-8xl">
                I design products
                <br />
                <span className="text-neutral-400">that put people first.</span>
              </h1>

              <p className="mt-8 max-w-lg text-xl text-neutral-500">
                Specializing in complex systems—healthcare, transit,
                finance—where good design isn&apos;t a luxury, it&apos;s a necessity.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link href="/projects/">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm text-white"
                  >
                    View my work
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </Link>
                <Link
                  href="mailto:contact@enriqueagv.com"
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  Get in touch →
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end lg:justify-end"
          >
            <WeatherWidget />
            <MusicWidget />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ArrowDown className="h-5 w-5 text-neutral-400" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}