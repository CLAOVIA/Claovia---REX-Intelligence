"use client";

import { motion } from "framer-motion";
import { TrendingDown, Users, Clock, Target } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    value: "50%",
    label: "des démissions liées au manager",
    source: "Gallup",
    color: "text-red-500",
  },
  {
    icon: Users,
    value: "15%",
    label: "de turnover moyen en France",
    source: "INSEE 2024",
    color: "text-orange-500",
  },
  {
    icon: Clock,
    value: "6-9 mois",
    label: "de salaire = coût d'un départ",
    source: "Deloitte",
    color: "text-yellow-600",
  },
  {
    icon: Target,
    value: "7%",
    label: "de salariés français engagés",
    source: "Gallup 2024",
    color: "text-accent",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-deep">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-head font-bold text-white mb-4">
            Le coût de l'inaction
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Chaque collaborateur qui part coûte cher. Chaque manager débordé
            impacte son équipe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-accent/50 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 ${stat.color}`}
                >
                  <stat.icon size={24} />
                </div>
                <div className="text-4xl font-head font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80 mb-2">{stat.label}</div>
                <div className="text-xs text-white/50">Source: {stat.source}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 text-sm">
            Utilisé par{" "}
            <span className="text-accent font-semibold">500+ managers</span>{" "}
            pour réduire le turnover
          </p>
        </motion.div>
      </div>
    </section>
  );
}
