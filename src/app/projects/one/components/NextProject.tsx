"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NextProject() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <Link href="/projects" className="block">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm tracking-wider text-neutral-400 uppercase">Next Project</p>
              <p className="mt-2 text-2xl text-neutral-900 md:text-3xl">View More Work</p>
            </div>
            <ArrowRight className="h-8 w-8 text-neutral-400" />
          </div>
        </div>
      </Link>
    </section>
  );
}