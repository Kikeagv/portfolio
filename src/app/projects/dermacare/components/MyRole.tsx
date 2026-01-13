"use client";

export function MyRole() {
    return (
        <section className="bg-white py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-16 md:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">My Role</p>
                        <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
                            Solo Product Designer
                        </h2>
                        <p className="mt-6 text-lg text-neutral-600">
                            End-to-end concept design: research synthesis, user flows, information architecture,
                            interaction design, visual design, and design system creation.
                            A self-directed project exploring personalization in skincare e-commerce.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-2xl border border-neutral-200 p-6">
                            <p className="text-sm font-medium text-neutral-900">Deliverables</p>
                            <div className="mt-3 grid gap-3 text-sm text-neutral-600">
                                <p>• Competitive analysis + user research synthesis</p>
                                <p>• Complete user flow mapping (3 journeys)</p>
                                <p>• Design system (colors, typography, components)</p>
                                <p>• High-fidelity screens (10 key screens)</p>
                                <p>• Interaction specifications</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="rounded-xl bg-neutral-950 p-4 text-white">
                                <p className="text-xs text-neutral-400">Duration</p>
                                <p className="mt-1 text-lg font-light">8 weeks</p>
                            </div>
                            <div className="rounded-xl bg-neutral-950 p-4 text-white">
                                <p className="text-xs text-neutral-400">Platform</p>
                                <p className="mt-1 text-lg font-light">iOS/Android</p>
                            </div>
                            <div className="rounded-xl bg-neutral-950 p-4 text-white">
                                <p className="text-xs text-neutral-400">Type</p>
                                <p className="mt-1 text-lg font-light">Concept</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
