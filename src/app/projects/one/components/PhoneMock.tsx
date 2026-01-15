"use client";

import Image from "next/image";

function PhoneMock({
  name,
  label,
  footer,
  variant = "light",
}: {
  name: string;
  label: string;
  footer?: string;
  variant?: "light" | "dark";
}) {
  const frameBg = variant === "dark" ? "bg-neutral-900" : "bg-neutral-100";


  return (
    <div className="w-full">
      <div
        className={`relative aspect-[390/844] overflow-hidden rounded-[3rem] ${frameBg} border-[8px] ${variant === 'dark' ? 'border-neutral-800' : 'border-neutral-200'} shadow-2xl transition-transform duration-500 hover:scale-[1.02]`}
      >
        <Image
          src={`/projects/one/${name}`}
          alt={label}
          fill
          className="object-cover"
        />
      </div>
      {footer && (
        <p className="mt-4 text-center text-xs tracking-wider text-neutral-500 uppercase">{footer}</p>
      )}
    </div>
  );
}

export default PhoneMock;