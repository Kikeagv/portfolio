import type { Insight, Persona, Principle, AccessibilityMetric, Screen } from "./types";

export const insights: Insight[] = [
  {
    number: "01",
    title: "Landmarks over route numbers",
    insight:
      "Users navigate by visual landmarks, not abstract route identifiers. 'Near Metrocentro' beats 'Route 52'.",
    decision:
      "Search by landmark, destination, or address. Route numbers are secondary.",
  },
  {
    number: "02",
    title: "Connectivity is unreliable",
    insight:
      "Data plans are expensive and coverage is inconsistent. Users can't depend on constant connection.",
    decision:
      "Offline-first architecture. Downloaded routes and tickets work without signal.",
  },
  {
    number: "03",
    title: "Cash remains essential",
    insight:
      "Not everyone has bank accounts or smartphones. Digital-only excludes many riders.",
    decision:
      "Digital tickets complement cash—'Efectivo en terminal' option always available.",
  },
  {
    number: "04",
    title: "Accessibility users face compounded barriers",
    insight:
      "Screen reader users, elderly riders, and those with motor impairments experience every friction point more acutely.",
    decision:
      "48dp touch targets, VoiceOver/TalkBack optimization, high contrast throughout.",
  },
];

export const personas: Persona[] = [
  {
    emoji: "👩‍💼",
    name: "María",
    subtitle: "Daily Commuter, 34",
    description:
      "Takes multiple buses to work. Values speed and reliability. Frustrated by payment friction and transfer uncertainty.",
    primaryNeed: "Quick route planning with accurate transfer times",
    color: "#0047AB",
  },
  {
    emoji: "👴",
    name: "Roberto",
    subtitle: "Occasional Traveler, 67",
    description:
      "Uses transit for medical appointments. Limited smartphone experience. Needs simple, forgiving interface with large touch targets.",
    primaryNeed: "Simple mode with step-by-step guidance",
    color: "#00A86B",
  },
  {
    emoji: "👩‍🦯",
    name: "Ana",
    subtitle: "Accessibility Advocate, 28",
    description:
      "Screen reader user. Tech-savvy but excluded by poorly designed apps. Needs full VoiceOver support and logical navigation order.",
    primaryNeed: "Complete screen reader accessibility",
    color: "#FF6B35",
  },
];

export const principles: Principle[] = [
  {
    label: "Accessible-First",
    desc: "Design for constraints, benefit everyone",
  },
  {
    label: "Local Context",
    desc: "Landmarks, language, mental models",
  },
  {
    label: "Connectivity-Conscious",
    desc: "Offline by default, online when available",
  },
  {
    label: "Progressive Complexity",
    desc: "Simple start, depth when needed",
  },
];

export const accessibilityMetrics: AccessibilityMetric[] = [
  { metric: "4.5:1", label: "Minimum contrast ratio (WCAG AA)" },
  { metric: "48dp", label: "Minimum touch target size" },
  { metric: "100%", label: "Screen reader label coverage" },
  { metric: "85-200%", label: "Dynamic type scale range" },
  { metric: "Full", label: "Keyboard navigation support" },
  { metric: "Yes", label: "Respects reduced motion preference" },
];

export const screens: Screen[] = [
  { name: "home-screen.png", label: "Home" },
  { name: "home-alert.png", label: "Alerts" },
  { name: "route-results.png", label: "Routes" },
  { name: "route-detail.png", label: "Detail" },
  { name: "ticket-purchase.png", label: "Purchase" },
  { name: "my-tickets.png", label: "My Tickets" },
  { name: "ticket-qr.png", label: "QR Code" },
];