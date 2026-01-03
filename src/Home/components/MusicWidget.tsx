"use client";

import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useState } from "react";

export function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack] = useState({
    title: "Clair de Lune",
    artist: "Debussy",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 backdrop-blur-sm"
    >
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform hover:scale-110"
      >
        {isPlaying ? (
          <Pause className="h-3 w-3" />
        ) : (
          <Play className="ml-0.5 h-3 w-3" />
        )}
      </button>
      <div className="flex flex-col">
        <span className="text-xs font-medium text-neutral-900">
          {currentTrack.title}
        </span>
        <span className="text-xs text-neutral-500">{currentTrack.artist}</span>
      </div>
      {isPlaying && (
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [4, 12, 4] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 0.8,
                delay: i * 0.1,
              }}
              className="w-0.5 rounded-full bg-neutral-400"
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}