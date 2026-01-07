"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-32 bg-deep relative overflow-hidden">
      {/* Animated blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]"
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
            <Sparkles className="text-accent" size={16} />
            <span className="text-white/90 font-semibold text-sm">
              Rejoignez 500+ managers qui transforment leur équipe
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-head font-bold text-white mb-8 leading-tight">
            Prêt à passer du feedback
            <br />à l'action ?
          </h2>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Commencez gratuitement. Aucune carte requise. Configurez votre
            première campagne REX en 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sign-up"
              className="group bg-white text-deep px-10 py-5 rounded-full font-head font-semibold text-lg hover:bg-accent hover:text-white transition-all shadow-2xl shadow-black/20 flex items-center gap-2"
            >
              Démarrer gratuitement
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
            <Link
              href="/demo"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Voir une démo live
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Pas de carte requise</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Setup en 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Support 7j/7</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
