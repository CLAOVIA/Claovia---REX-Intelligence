"use client";

import { motion } from "framer-motion";
import { PlayCircle, ArrowRightLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { CollabChat } from "@/components/landing/collab-chat";
import { ManagerDoc } from "@/components/landing/manager-doc";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden flex flex-col items-center">
        {/* Background Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-light rounded-full blur-[100px] -z-10 opacity-60"
        />

        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left z-10"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold text-deep uppercase tracking-wider">
                Nouvelle fonctionnalité
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-head font-bold text-deep leading-[1.1] mb-6">
              L'IA qui reconnecte <br />
              <span className="text-accent relative inline-block">
                l'Humain
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-accent/20"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
              Transformez les feedbacks collaborateurs en plans d'actions
              managériaux concrets.
              <br />
              Sans émojis superflus, juste des données claires et des outils
              prêts à l'emploi.
            </p>

            <div className="flex gap-4">
              <Link
                href="/sign-up"
                className="bg-deep text-white px-8 py-4 rounded-full font-semibold hover:bg-accent hover:-translate-y-1 transition-all shadow-xl shadow-deep/20 flex items-center gap-2"
              >
                Démo Interactive
              </Link>
              <button className="bg-white text-deep border border-gray-200 px-8 py-4 rounded-full font-semibold hover:border-accent hover:text-accent transition-all flex items-center gap-2">
                <PlayCircle size={20} /> Voir la vidéo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                  />
                ))}
              </div>
              <div>Utilisé par +500 DRH exigeants</div>
            </div>
          </motion.div>

          {/* Animation Stage */}
          <div className="relative h-[600px] w-full flex items-center">
            {/* Animated Connection Line */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-20 z-0 hidden lg:block overflow-visible">
              <line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <motion.circle
                r="6"
                fill="#3A8577"
                initial={{ cx: "15%", cy: "50%", opacity: 0 }}
                animate={{ cx: "85%", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.5, delay: 5.5, ease: "easeInOut" }}
              />
            </svg>

            {/* Collab Card (Left/Top) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute left-0 top-10 w-[320px] lg:w-[380px] h-[420px] z-10"
            >
              <CollabChat />
            </motion.div>

            {/* Manager Card (Right/Bottom) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute right-0 bottom-10 w-[340px] lg:w-[400px] h-[480px] z-20"
            >
              <ManagerDoc />
            </motion.div>

            {/* Connecting Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 6 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl border border-accent/20 z-30"
            >
              <div className="bg-accent/10 p-2 rounded-full">
                <ArrowRightLeft className="text-accent" size={24} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
