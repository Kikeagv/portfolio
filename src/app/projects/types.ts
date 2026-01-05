export interface Stat {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  period: string;
  color: "blue" | "emerald" | "violet" | "amber";
  gradient: string;
  href: string;
  stats: Stat[];
  featured: boolean;
}