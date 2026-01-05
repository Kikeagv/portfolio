"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, Download, User } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

interface NavigationProps {
  version: "human" | "ai";
  onVersionChange: (version: "human" | "ai") => void;
}

export function Navigation({ version, onVersionChange }: NavigationProps) {
  const humanButtonRef = useRef<HTMLButtonElement>(null);
  const aiButtonRef = useRef<HTMLButtonElement>(null);
  const [buttonDimensions, setButtonDimensions] = useState({
    human: { width: 0, x: 0 },
    ai: { width: 0, x: 0 },
  });

  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (humanButtonRef.current && aiButtonRef.current) {
        const container = humanButtonRef.current.parentElement;
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const humanRect = humanButtonRef.current.getBoundingClientRect();
          const aiRect = aiButtonRef.current.getBoundingClientRect();

          setButtonDimensions({
            human: {
              width: humanRect.width,
              x: humanRect.left - containerRect.left,
            },
            ai: {
              width: aiRect.width,
              x: aiRect.left - containerRect.left,
            },
          });
        }
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [version]);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[#fafafa]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-medium text-neutral-900">
          Enrique García
        </Link>

        <div className="flex items-center gap-6">
          <div className="relative flex items-center rounded-full border border-neutral-200 bg-white p-1">
            {buttonDimensions.human.width > 0 &&
              buttonDimensions.ai.width > 0 && (
                <motion.div
                  className="absolute top-1 h-[calc(100%-8px)] rounded-full bg-neutral-900"
                  style={{
                    width:
                      version === "human"
                        ? `${buttonDimensions.human.width}px`
                        : `${buttonDimensions.ai.width}px`,
                  }}
                  animate={{
                    x:
                      version === "human"
                        ? buttonDimensions.human.x
                        : buttonDimensions.ai.x,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
              <button
                ref={humanButtonRef}
                onClick={() => onVersionChange("human")}
                className={`relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-colors ${
                  version === "human"
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                <User className="h-3 w-3" />
                Human
              </button>
              <button
                ref={aiButtonRef}
                onClick={() => onVersionChange("ai")}
                className={`relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-colors ${
                  version === "ai"
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                <Bot className="h-3 w-3" />
                AI
              </button>
            </div>

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

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-800"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </motion.a>
          </div>
        </div>
    </nav>
  );
}