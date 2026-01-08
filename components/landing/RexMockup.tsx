"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export function RexMockup() {
    return (
        <div className="relative w-full max-w-sm mx-auto perspective-1000 group">
            <motion.div
                initial={{ rotateX: 10, rotateY: -10, opacity: 0, y: 50 }}
                whileInView={{ rotateX: 0, rotateY: 0, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-y-2 hover:rotate-x-2 preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 translate-z-10">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <Activity className="w-6 h-6 text-sage-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-sage-900 text-lg">Analyse en temps réel</h3>
                        <p className="text-xs text-stone-500 font-medium">Détection des signaux faibles</p>
                    </div>
                </div>

                {/* Content Cards */}
                <div className="space-y-4 translate-z-20">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between"
                    >
                        <span className="text-sm font-medium text-stone-600">Climat Social</span>
                        <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">Stable</span>
                    </motion.div>

                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between"
                    >
                        <span className="text-sm font-medium text-stone-600">Charge Équipe</span>
                        <span className="text-sm font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">Élevée</span>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-sage-900 text-white p-4 rounded-xl shadow-lg flex items-center justify-between mt-4 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                        <span className="text-sm font-medium relative z-10">Actions recommandées</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm relative z-10 animate-pulse">3 nouvelles</span>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-sage-200/40 rounded-full blur-2xl -z-10 animate-float-delayed"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl -z-10 animate-float"></div>

            </motion.div>
        </div>
    );
}
