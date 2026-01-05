"use client";

import { motion } from "framer-motion";
import { Check, Copy, Download } from "lucide-react";
import { useState } from "react";

const markdownContent = `# Enrique García - Product Designer

## Summary
Product Designer specializing in complex systems—healthcare, public transit, financial services. I design for the people technology often forgets.

**Location:** Mexico City, Mexico
**Email:** enrique@example.com
**Status:** Available for work

---

## Featured Work

### Healthcare Consultation System
**Category:** UX Research • Accessibility • WCAG AAA

Designed a telehealth platform for adults 65+. The problem: existing platforms made users feel "old and stupid." The solution: dignity-first design with 18pt minimum text, forgiving interactions, and transparent data quality.

**Results:**
- 95% task completion (up from 62%)
- 86 SUS score (Grade A)
- 47% faster task completion

---

### Ruta SV
**Category:** Product Design • Mobile • Offline-first

El Salvador's first public transit app. Designed for users who'd never used a transit app, in a city where routes exist only in collective memory.

**Results:**
- 45K+ active users
- 42 user interviews conducted
- 4.6★ app store rating
- 85% 30-day retention

---

## Experience

### Senior Product Designer | FinTech Solutions
**2022 — Present**
Leading design for mobile banking products serving 2M+ users. Built design system, led research initiatives.

### UX Designer | Banco Digital
**2020 — 2022**
Designed key features for digital banking. Reduced support tickets by 30% through UX improvements.

### Product Designer | StartUp Finance
**2019 — 2020**
End-to-end design for fintech startup. Designed MVP that secured $2M in funding.

---

## Skills
- User Research
- Product Strategy
- Interaction Design
- Design Systems
- Accessibility (WCAG AAA)
- Prototyping
- Mobile Design
- Figma

---

## Contact
- Email: enrique@example.com
- LinkedIn: linkedin.com/in/enriquegarcia
- Twitter: @enriquegarcia

---

*Last updated: December 2025*
`;

export function AIVersion() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdownContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "enrique-garcia-portfolio.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-screen bg-neutral-950 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-light text-white">
                AI-Optimized Portfolio
              </h2>
              <p className="mt-2 text-neutral-400">
                Structured markdown for AI agents, recruiters&apos; tools, and
                automated systems
              </p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopy}
                className="flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-800"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm text-neutral-900 transition-colors hover:bg-neutral-100"
              >
                <Download className="h-4 w-4" />
                Download .md
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
        >
          <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-3 text-xs text-neutral-500">portfolio.md</span>
          </div>

          <pre className="max-h-150 overflow-auto p-6 text-sm leading-relaxed text-neutral-300">
            <code>{markdownContent}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}