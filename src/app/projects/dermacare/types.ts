import type { LucideIcon } from "lucide-react";

export interface Outcome {
    metric: string;
    label: string;
    detail: string;
    icon: LucideIcon;
}

export interface Insight {
    number: string;
    title: string;
    insight: string;
    decision: string;
    accent: string;
}

export interface Principle {
    label: string;
    desc: string;
}



export interface Screen {
    name: string;
    label: string;
    desc: string;
}

export interface JourneyStep {
    phase: string;
    screens: string;
    color: string;
}
