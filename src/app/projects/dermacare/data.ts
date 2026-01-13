import {
    CheckCircle2,
    TrendingUp,
    Shield,
    Timer,
} from "lucide-react";
import type { Outcome, Insight, Principle, Screen, JourneyStep } from "./types";

export const outcomes: Outcome[] = [
    {
        metric: "87%",
        label: "Assessment completion",
        detail: "Users who start the skin assessment complete it fully",
        icon: CheckCircle2,
    },
    {
        metric: "3.2x",
        label: "Higher engagement",
        detail: "Time spent exploring products vs. generic e-commerce",
        icon: TrendingUp,
    },
    {
        metric: "94%",
        label: "Trust confidence",
        detail: "Users report feeling confident in their product matches",
        icon: Shield,
    },
    {
        metric: "< 5 min",
        label: "Time to first recommendation",
        detail: "From download to personalized product matches",
        icon: Timer,
    },
];

export const insights: Insight[] = [
    {
        number: "01",
        title: "Overwhelm kills conversion",
        insight:
            "Users face thousands of products with conflicting claims. Choice paralysis leads to abandonment or regretted purchases.",
        decision:
            "Curate first, expand later. Show personalized matches prominently, with exploration as a secondary path.",
        accent: "#4A7C59",
    },
    {
        number: "02",
        title: "Assessment = investment, not friction",
        insight:
            "Users are willing to invest time if they perceive genuine value. The key is making each question feel purposeful.",
        decision:
            "Progressive disclosure with contextual education. Each question teaches something while gathering data.",
        accent: "#2D5A6B",
    },
    {
        number: "03",
        title: "Personalization must be transparent",
        insight:
            "\"Why this product for me?\" is the question that converts. Black-box recommendations erode trust.",
        decision:
            "Explicit match reasoning on every product. Show the connection between user profile and recommendation.",
        accent: "#D4B896",
    },
    {
        number: "04",
        title: "Education reduces returns",
        insight:
            "Users who understand ingredients and usage instructions have significantly higher satisfaction and lower return rates.",
        decision:
            "Ingredient breakdowns, usage guidance, and compatibility warnings integrated into product pages.",
        accent: "#1A3A4A",
    },
];

export const principles: Principle[] = [
    { label: "Expertise, Accessible", desc: "Dermatological guidance without jargon" },
    { label: "Personalization, Transparent", desc: "Always explain why something matches" },
    { label: "Education, Not Overwhelm", desc: "Teach while guiding decisions" },
    { label: "Trust, Earned", desc: "Clinical credibility in every interaction" },
];

export const screens: Screen[] = [
    { name: "01-welcome.png", label: "Welcome", desc: "Value proposition + trust signals" },
    { name: "02-value-carousel.png", label: "Value carousel", desc: "Benefits preview before commitment" },
    { name: "03-assessment-intro.png", label: "Assessment intro", desc: "Set expectations, time estimate" },
    { name: "04-skin-type.png", label: "Skin type", desc: "Educational selection with guidance" },
    { name: "05-concerns.png", label: "Primary concerns", desc: "Multi-select with priority ranking" },
    { name: "06-lifestyle.png", label: "Lifestyle factors", desc: "Context that affects recommendations" },
    { name: "07-results.png", label: "Results summary", desc: "Personalized skin profile" },
    { name: "08-shop-home.png", label: "Shop home", desc: "Curated matches + exploration" },
    { name: "09-product-detail.png", label: "Product detail", desc: "Match reasoning + ingredients" },
    { name: "10-cart.png", label: "Cart + routine", desc: "Complete routine suggestions" },
];

export const journeySteps: JourneyStep[] = [
    { phase: "Discover", screens: "Welcome → Value carousel", color: "#4A7C59" },
    { phase: "Understand", screens: "Assessment (6 screens)", color: "#2D5A6B" },
    { phase: "Match", screens: "Results → Recommendations", color: "#D4B896" },
    { phase: "Shop", screens: "Browse → Purchase", color: "#1A3A4A" },
];
