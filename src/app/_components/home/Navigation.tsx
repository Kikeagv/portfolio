"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bot, Download, User } from "lucide-react";

interface NavigationProps {
  version: "human" | "ai";
  onVersionChange: (version: "human" | "ai") => void;
}

export function Navigation({ version, onVersionChange }: NavigationProps) {
  return (
    <nav className="bg-[#fafafa]">
      {/* Mobile: stacked centered layout, Desktop: horizontal spread */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-4 md:flex-row md:justify-between md:gap-4">
        {/* Name - hidden on very small screens on mobile */}
        <Link href="/" className="hidden md:block">
          <Image
            src="/LOGO.svg"
            alt="Enrique García"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Mobile row: toggle + download */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Human/AI Toggle - more compact on mobile */}
          <div className="relative flex items-center rounded-full border border-neutral-200 bg-white p-1">
            <motion.div
              className="absolute inset-y-1 w-[calc(50%-2px)] rounded-full bg-neutral-900"
              animate={{
                x: version === "human" ? 4 : "calc(100% + 4px)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <button
              onClick={() => onVersionChange("human")}
              className={`relative z-10 flex w-20 items-center justify-center gap-1.5 rounded-full py-1.5 text-xs font-medium transition-colors md:w-24 md:gap-2 md:py-2 md:text-sm ${version === "human"
                ? "text-white"
                : "text-neutral-500 hover:text-neutral-900"
                }`}
            >
              <User className="h-3.5 w-3.5 md:h-4 md:w-4" />
              Human
            </button>
            <button
              onClick={() => onVersionChange("ai")}
              className={`relative z-10 flex w-20 items-center justify-center gap-1.5 rounded-full py-1.5 text-xs font-medium transition-colors md:w-24 md:gap-2 md:py-2 md:text-sm ${version === "ai"
                ? "text-white"
                : "text-neutral-500 hover:text-neutral-900"
                }`}
            >
              <Bot className="h-3.5 w-3.5 md:h-4 md:w-4" />
              AI
            </button>
          </div>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#work"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Experience
            </a>
          </div>

          {/* Resume button */}
          <motion.a
            href="/Resume_Enrique_Garcia.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1.5 text-xs text-white transition-colors hover:bg-neutral-800 md:px-4 md:py-2 md:text-sm"
          >
            <Download className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Resume</span>
          </motion.a>
        </div>
      </div>
    </nav>
  );
}