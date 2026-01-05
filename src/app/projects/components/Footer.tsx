"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <p className="text-sm text-neutral-400">© 2025 Enrique García</p>
        <Link
          href="/"
          className="text-sm text-neutral-400 transition-colors hover:text-neutral-900"
        >
          Back to home
        </Link>
      </div>
    </footer>
  );
}