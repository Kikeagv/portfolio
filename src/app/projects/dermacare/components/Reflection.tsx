"use client";

export function Reflection() {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="mx-auto max-w-4xl px-6">
                <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">Reflection</p>
                <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">What I learned</h2>

                <div className="mt-12 space-y-8">
                    <div className="border-l-2 border-[#4A7C59] pl-6">
                        <h3 className="font-medium text-neutral-900">Personalization requires explanation</h3>
                        <p className="mt-2 text-neutral-600">
                            Matching algorithms are only valuable if users understand and trust them.
                            &ldquo;Why this product?&rdquo; is the question that converts skeptics into buyers.
                        </p>
                    </div>

                    <div className="border-l-2 border-neutral-200 pl-6">
                        <h3 className="font-medium text-neutral-900">Assessment is a product, not a barrier</h3>
                        <p className="mt-2 text-neutral-600">
                            When each question teaches something, the assessment becomes valuable in itself—not just a gate to recommendations.
                        </p>
                    </div>

                    <div className="border-l-2 border-neutral-200 pl-6">
                        <h3 className="font-medium text-neutral-900">Trust compounds across touchpoints</h3>
                        <p className="mt-2 text-neutral-600">
                            Clinical aesthetics, transparent reasoning, and educational content each build trust.
                            Together, they create confidence that no single element could achieve alone.
                        </p>
                    </div>

                    <div className="border-l-2 border-neutral-200 pl-6">
                        <h3 className="font-medium text-neutral-900">Next steps would validate assumptions</h3>
                        <p className="mt-2 text-neutral-600">
                            As a concept project, the metrics are projected. Real validation would require
                            implementation, user testing, and iteration based on actual completion and conversion data.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
