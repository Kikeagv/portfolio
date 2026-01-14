export interface WeatherData {
  temp: number;
  condition: "sunny" | "cloudy" | "rainy";
  location: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  color: "emerald" | "blue" | "violet";
  href: string;
  image?: string;
}

export interface Job {
  period: string;
  role: string;
  company: string;
  description: string;
  highlight: string;
}

export interface Stat {
  value: string;
  label: string;
}