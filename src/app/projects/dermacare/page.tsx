"use client";

import {
    Navigation,
    Hero,
    TheHook,
    MyRole,
    TheProblem,
    Insights,
    UserJourney,
    Solution,
    ScreenShowcase,
    NextProject,
} from "./components";

export default function DermaCareCaseStudyPage() {
    return (
        <div className="bg-[#0a0a0a]">
            <Navigation />
            <Hero />
            <TheHook />
            <MyRole />
            <TheProblem />
            <Solution />
            <Insights />
            <UserJourney />
            <ScreenShowcase />
            <NextProject />
        </div>
    );
}
