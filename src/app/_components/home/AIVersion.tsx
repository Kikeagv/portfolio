"use client";

import { motion } from "framer-motion";
import { Check, Copy, Download } from "lucide-react";
import { useState } from "react";

const markdownContent = `# Enrique García

**Product Designer**

+503 74780264 | [contact@enriqueagv.com](mailto:contact@enriqueagv.com) | [enriqueagv.com](https://enriqueagv.com) | San Salvador, El Salvador

---

Product Designer with 5+ years of experience designing end-to-end mobile experiences. Expert in building and scaling design systems, leading UX research initiatives, and collaborating cross-functionally with Engineering and Product teams to ship high-impact features. Proven track record in fintech and enterprise applications with deep expertise in Figma, user flows, prototyping, and developer handoff. Strong background in designing for variable connectivity, performance optimization, and edge cases.

---

## Skills

**Design Tools:** Figma, After Effects, Lottie Animations

**UX Methods:** User Research, Usability Testing, User Flows, Wireframing, A/B Testing, Rapid Validation

**Design Systems:** Token Architecture, Component Libraries, Pattern Documentation, Cross-Platform Guidelines, iOS Human Interface Guidelines, Material Design, Scalable Design Systems

**Collaboration:** Cross-Functional Team Leadership, Developer Handoff, Agile/Scrum Methodologies, Stakeholder Management, Design QA, Engineering Partnership

**Technical Knowledge:** React Native, TailwindCSS, Amplitude, Version Control (Git)

**Languages:** Spanish (Native), English (B2 Professional Working Proficiency)

---

## Professional Experience

### UX/UI Analyst
**Banco Atlántida** | San Salvador, El Salvador | September 2023 - Present

Lead end-to-end UX/UI for core retail banking products, partnering with Engineering, PM, and Business to deliver measurable outcomes across mobile platforms.

- Led end-to-end design for the One App mobile application from concept to launch, aligning user value with business goals and establishing mobile-first experience for thousands of users
- Built and maintain cross-brand design systems including design tokens, reusable components, and comprehensive guidelines for Atlántida and One brands, improving design consistency and accelerating development velocity
- Planned and executed comprehensive UX research including user interviews and usability testing; translated insights into user flows, wireframes, interactive prototypes, and developer-ready specifications
- Drove implementation quality through rigorous design reviews, detailed Figma handoff documentation with specs, states, variants, and microcopy, and hands-on QA collaboration with engineering teams
- Optimized mobile UX for real-world conditions including variable connectivity, performance constraints, error states, loading states, and edge cases

### UX/UI Designer
**BlueStar** | March 2020 - April 2023 | Full-time

Delivered complete product design lifecycle from discovery through implementation across multiple digital products.

- Shipped features end-to-end: discovery, user flows, high-fidelity UI design, interactive prototypes, and comprehensive developer handoff for mobile and web applications
- Conducted user interviews and usability tests; iterated designs based on qualitative insights and quantitative metrics to optimize conversion and user retention
- Produced wireframes, mockups, and interactive Figma prototypes; delivered developer-ready specs including edge cases, component states, interaction patterns, and exported assets
- Partnered closely with engineering teams to resolve edge cases, ensure smooth implementation, and maintain design fidelity through QA cycles

### Web Designer
**Ministry of Economy, El Salvador** | February 2022 - July 2022 | Internship

- Designed and developed internal pages for a major governmental website serving citizens
- Collaborated with cross-functional teams of designers, developers, and government stakeholders to deliver high-quality public-facing web experiences

---

## Education

**Bachelor of Engineering in Computer Science** (In Progress)  
Universidad Don Bosco | 2021 - Present

**Product Design Certification**  
Platzi | June 2019 - August 2020

---

## Leadership and Volunteer Experience

### Production Lead, Communications Ministry
**Tabernáculo de Ilopango** | February 2015 - Present

Lead production team for live events and multimedia content, coordinating cross-functional volunteers and managing end-to-end creative workflows.
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