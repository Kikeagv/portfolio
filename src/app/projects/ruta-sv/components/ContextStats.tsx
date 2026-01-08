"use client";

import { motion } from "framer-motion";

export function ContextStats() {
  const stats = [
    {
      label: "transit apps for El Salvador",
      value: "0",
      gradient: "from-[#0047AB] to-[#003380]",
      textColor: "blue-200",
    },
    {
      label: "only payment accepted",
      value: "Cash",
      gradient: "from-[#00A86B] to-[#007A4D]",
      textColor: "green-200",
    },
    {
      label: "routes known only by asking strangers",
      value: "?",
      gradient: "from-neutral-800 to-neutral-900",
      textColor: "neutral-400",
    },
  ];

  return (
    <section className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex aspect-square flex-col justify-end rounded-2xl bg-linear-to-br ${stat.gradient} p-8`}
            >
              <p className="text-6xl font-light text-white md:text-7xl">
                {stat.value}
              </p>
              <p className={`mt-2 text-${stat.textColor}`}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}