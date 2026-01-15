"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { RotateCcw } from "lucide-react";

// Static data - your favorite albums
// Place album cover images in: public/albums/
const lastPlayed = {
  title: "Strategy",
  artist: "Twice",
  albumArt: "/albums/strategy.png", // Place image at: public/albums/strategy.jpg
};

const recentAlbums = [
  { title: "Strategy", artist: "Twice", image: "/albums/strategy.png", color: "#f97316" },
  { title: "Debí tirar más fotos", artist: "Bad Bunny", image: "/albums/dtmf.jpeg", color: "#ef4444" },
  { title: "Graduation", artist: "Kanye West", image: "/albums/graduation.jpeg", color: "#8b5cf6" },
  { title: "Ready to be", artist: "Twice", image: "/albums/readytobe.jpeg", color: "#f59e0b" },
  { title: "The tortured poets department", artist: "Tayor Swift", image: "/albums/torturedpoets.jpeg", color: "#3b82f6" },
  { title: "DATA", artist: "Tainy", image: "/albums/data.jpeg", color: "#ec4899" },
];

export function MusicWidget() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="perspective-1000 w-full max-w-[260px]"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          height: isFlipped ? 200 : 140,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front - Vinyl Record */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-neutral-200 bg-white/80 p-4 backdrop-blur-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex h-full items-center gap-4">
            {/* Vinyl Record */}
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative h-20 w-20"
              >
                {/* Vinyl disc */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 shadow-lg">
                  {/* Vinyl grooves */}
                  <div className="absolute inset-2 rounded-full border border-neutral-700/30" />
                  <div className="absolute inset-4 rounded-full border border-neutral-700/30" />
                  <div className="absolute inset-6 rounded-full border border-neutral-700/30" />
                  {/* Center label - Album art */}
                  <div className="absolute inset-0 m-auto h-8 w-8 overflow-hidden rounded-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={lastPlayed.albumArt}
                      alt={lastPlayed.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-neutral-900" />
                  </div>
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
              </motion.div>
            </div>

            {/* Track info */}
            <div className="flex flex-1 flex-col">
              <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Last played
              </span>
              <span className="mt-1 text-sm font-medium text-neutral-900">
                {lastPlayed.title}
              </span>
              <span className="text-xs text-neutral-500">
                {lastPlayed.artist}
              </span>

              <button
                onClick={() => setIsFlipped(true)}
                className="mt-2 flex items-center gap-1 text-[10px] font-medium text-neutral-400 transition-colors hover:text-neutral-900"
              >
                <RotateCcw className="h-3 w-3" />
                View albums
              </button>
            </div>
          </div>
        </motion.div>

        {/* Back - Albums Grid */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-neutral-200 bg-white/80 p-3 backdrop-blur-sm"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex h-full flex-col">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Recent albums
              </span>
              <button
                onClick={() => setIsFlipped(false)}
                className="text-[10px] font-medium text-neutral-400 transition-colors hover:text-neutral-900"
              >
                ← Back
              </button>
            </div>

            <div className="grid flex-1 grid-cols-3 gap-1.5">
              {recentAlbums.map((album, i) => (
                <motion.div
                  key={album.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isFlipped ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.05 }}
                  className="group relative cursor-pointer overflow-hidden rounded-md"
                  style={{ backgroundColor: album.color }}
                >
                  <div className="aspect-square w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={album.image}
                      alt={album.title}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        // Hide image on error, show color fallback
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  {/* Album overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="px-1 text-center">
                      <p className="truncate text-[8px] font-medium text-white">
                        {album.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}