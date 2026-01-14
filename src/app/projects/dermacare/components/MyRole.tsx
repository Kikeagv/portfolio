"use client";

export function MyRole() {
    return (
        <section className="bg-white py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-16 md:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">My Role</p>
                        <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
                            Product Designer
                        </h2>
                        <p className="mt-6 text-lg text-neutral-600">
                            End-to-end concept design: research synthesis, user flows, information architecture,
                            interaction design, visual design, and design system creation.
                            A project exploring personalization in skincare e-commerce.
                        </p>
                    </div>

                    <div className="space-y-6">

                        <div className="grid grid-cols-2 gap-3">
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
