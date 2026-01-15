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
      className="relative flex min-h-[70vh] flex-col justify-center px-6 py-12 md:min-h-[calc(100vh-72px)] md:py-0"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Main content */}
          <div className="text-center lg:col-span-8 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={
                isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }
              }
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-4 text-sm text-neutral-500 md:mb-6 md:text-base">Product Designer</p>

              <h1 className="text-4xl leading-[1.15] font-light tracking-tight text-neutral-900 md:text-5xl lg:text-7xl xl:text-8xl">
                I design products
                <br />
                <span className="text-neutral-400">that put people first.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-md text-base text-neutral-500 md:mx-0 md:mt-8 md:max-w-lg md:text-xl">
                Specializing in complex systems where good design it&apos;s granted.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-12 md:justify-start">
                <Link href="/projects/">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm text-white md:px-6 md:py-3"
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

          {/* Widgets - below content on mobile, side on desktop */}
          <motion.div
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-4 lg:col-span-4 lg:items-end lg:justify-end"
          >
            <WeatherWidget />
            <MusicWidget />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 hidden -translate-x-1/2 md:block"
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