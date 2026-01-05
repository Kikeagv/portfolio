"use client";

import { motion } from "framer-motion";
import { Cloud, CloudRain, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import type { WeatherData } from "./types";

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    temp: 24,
    condition: "sunny",
    location: "Mexico City",
  });

  useEffect(() => {
    const conditions: WeatherData["condition"][] = [
      "sunny",
      "cloudy",
      "rainy",
    ];
    const interval = setInterval(() => {
      setWeather({
        temp: Math.floor(Math.random() * 15) + 18,
        condition: conditions[Math.floor(Math.random() * conditions.length)]!,
        location: "Mexico City",
      });
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const WeatherIcon = {
    sunny: Sun,
    cloudy: Cloud,
    rainy: CloudRain,
  }[weather.condition];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 backdrop-blur-sm"
    >
      <WeatherIcon className="h-4 w-4 text-neutral-500" />
      <span className="text-sm text-neutral-600">
        {weather.temp}°C in {weather.location}
      </span>
    </motion.div>
  );
}