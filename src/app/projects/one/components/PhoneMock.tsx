"use client";

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
  const frameBg = variant === "dark" ? "bg-white" : "bg-neutral-100";
  const innerBg = variant === "dark" ? "bg-neutral-100" : "bg-white";
  const text = variant === "dark" ? "text-neutral-400" : "text-neutral-400";
  const chip = variant === "dark" ? "bg-neutral-900/80 text-white" : "bg-white/80 text-neutral-900";

  return (
    <div className="w-full max-w-[320px]">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium text-neutral-900">{label}</p>
        <span className={`rounded-full px-3 py-1 text-xs ${chip}`}>{name}</span>
      </div>

      <div className={`aspect-[390/844] overflow-hidden rounded-[2.6rem] ${frameBg} shadow-2xl`}>
        <div className="h-full w-full p-3">
          <div className={`h-full w-full overflow-hidden rounded-[2.2rem] ${innerBg}`}>
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center">
                <p className={`${text}`}>{name}</p>
                {footer ? <p className="mt-2 text-xs text-neutral-500">{footer}</p> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneMock;