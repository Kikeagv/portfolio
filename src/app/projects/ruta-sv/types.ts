export interface Insight {
  number: string;
  title: string;
  insight: string;
  decision: string;
}

export interface Persona {
  emoji: string;
  name: string;
  subtitle: string;
  description: string;
  primaryNeed: string;
  color: string;
}

export interface Principle {
  label: string;
  desc: string;
}

export interface AccessibilityMetric {
  metric: string;
  label: string;
}

export interface Screen {
  name: string;
  label: string;
}