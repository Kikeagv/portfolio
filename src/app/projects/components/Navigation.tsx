"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 mix-blend-difference">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/">
          <motion.span
            className="flex items-center gap-2 text-sm text-white"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </motion.span>
        </Link>
        <span className="text-sm text-white">Work</span>
      </div>
    </nav>
  );
}