"use client";

import { motion } from "framer-motion";
import { Clock, Cloud, CloudRain, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import type { WeatherData } from "./types";

// San Salvador, El Salvador coordinates
const LATITUDE = 13.6929;
const LONGITUDE = -89.2182;

// Map WMO weather codes to conditions
function getConditionFromCode(code: number): WeatherData["condition"] {
  // Clear sky
  if (code === 0 || code === 1) return "sunny";
  // Partly cloudy, cloudy
  if (code >= 2 && code <= 3) return "cloudy";
  // Fog, drizzle, rain, thunderstorm, snow
  if (code >= 45) return "rainy";
  return "cloudy";
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    temp: 24,
    condition: "sunny",
    location: "San Salvador",
  });
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch weather data from Open-Meteo API
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,weather_code&timezone=America/El_Salvador`
        );
        const data = (await response.json()) as {
          current?: { temperature_2m: number; weather_code: number };
        };

        if (data.current) {
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            condition: getConditionFromCode(data.current.weather_code),
            location: "San Salvador",
          });
        }
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      } finally {
        setIsLoading(false);
      }
    }

    void fetchWeather();
    // Refresh weather every 10 minutes
    const weatherInterval = setInterval(() => {
      void fetchWeather();
    }, 600000);
    return () => clearInterval(weatherInterval);
  }, []);

  // Update time every second
  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "America/El_Salvador",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeString);
    }

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
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
      {isLoading ? (
        <span className="text-sm text-neutral-400">Loading...</span>
      ) : (
        <>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-neutral-400" />
            <span className="text-sm text-neutral-500">{currentTime}</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5">
            <WeatherIcon className="h-4 w-4 text-neutral-500" />
            <span className="text-sm text-neutral-600">
              {weather.temp}°C in {weather.location}
            </span>
          </div>
        </>
      )}
    </motion.div>
  );
}