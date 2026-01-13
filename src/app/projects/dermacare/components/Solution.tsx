"use client";

import { Scan, Target, FlaskConical } from "lucide-react";

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

export function Solution() {
    return (
        <section className="bg-gradient-to-b from-neutral-950 to-[#4A7C59]/20 py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-16 text-center">
                    <p className="mb-4 text-sm tracking-wider text-[#7CB686] uppercase">The Solution</p>
                    <h2 className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                        DermaCare
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-neutral-400">
                        A skin pharmacy that guides before it sells. Personalized assessment → transparent matching → confident purchase.
                    </p>
                </div>

                {/* Hero 3-screen showcase */}
                <div className="rounded-3xl bg-gradient-to-br from-[#4A7C59] to-[#2D5A6B] p-8 md:p-12">
                    <div className="grid place-items-center gap-10 md:grid-cols-3">
                        <PhoneMock
                            name="04-skin-type.png"
                            label="Skin Assessment"
                            footer="Learn while you answer"
                            variant="dark"
                        />
                        <PhoneMock
                            name="07-results.png"
                            label="Your Skin Profile"
                            footer="Personalized, explained"
                            variant="dark"
                        />
                        <PhoneMock
                            name="09-product-detail.png"
                            label="Product Match"
                            footer="Why it's right for you"
                            variant="dark"
                        />
                    </div>
                </div>

                {/* Value props */}
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-white/5 p-7">
                        <div className="flex items-center gap-3 text-white">
                            <Scan className="h-5 w-5" />
                            <p className="text-sm font-medium">Assessment</p>
                        </div>
                        <p className="mt-3 text-xl font-light text-white">6 questions</p>
                        <p className="mt-2 text-sm text-neutral-400">Comprehensive but fast—each question teaches.</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-7">
                        <div className="flex items-center gap-3 text-white">
                            <Target className="h-5 w-5" />
                            <p className="text-sm font-medium">Matching</p>
                        </div>
                        <p className="mt-3 text-xl font-light text-white">Transparent reasoning</p>
                        <p className="mt-2 text-sm text-neutral-400">Every product shows why it matches your profile.</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-7">
                        <div className="flex items-center gap-3 text-white">
                            <FlaskConical className="h-5 w-5" />
                            <p className="text-sm font-medium">Education</p>
                        </div>
                        <p className="mt-3 text-xl font-light text-white">Ingredients decoded</p>
                        <p className="mt-2 text-sm text-neutral-400">Plain-language explanations, not marketing speak.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
