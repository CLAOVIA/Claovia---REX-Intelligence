"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, TrendingUp, AlertCircle, Clock } from "lucide-react";

export function RexMockup() {
    return (
        <div className="relative w-full max-w-md mx-auto perspective-1000 group">
            <motion.div
                initial={{ rotateX: 12, rotateY: -12, opacity: 0, y: 50 }}
                whileInView={{ rotateX: 0, rotateY: 0, opacity: 1, y: 0 }}
                whileHover={{ rotateX: 0, rotateY: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="relative bg-white rounded-[2rem] border border-sage-200 shadow-2xl p-6 backdrop-blur-sm transform preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600">
                            <LayoutDashboard className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sage-900 text-lg">REX Manager • Q1 2026</h3>
                            <p className="text-sm text-sage-500">Vue d'ensemble équipe</p>
                        </div>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-sage-50 to-white p-4 rounded-xl border border-sage-100"
                    >
                        <div className="flex items-center gap-2 text-sage-600 mb-1">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wide">Climat</span>
                        </div>
                        <div className="text-3xl font-bold text-sage-900">7.8<span className="text-lg text-sage-400">/10</span></div>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-red-50 to-white p-4 rounded-xl border border-red-100"
                    >
                        <div className="flex items-center gap-2 text-red-600 mb-1">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wide">Alertes</span>
                        </div>
                        <div className="text-3xl font-bold text-red-600">2</div>
                    </motion.div>
                </div>

                {/* Last REX Card */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-sage-50 rounded-xl p-4 border border-sage-100"
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-sage-200 rounded-full flex items-center justify-center text-sage-700 font-bold">
                                MD
                            </div>
                            <div>
                                <p className="font-semibold text-sage-900">Marie D.</p>
                                <div className="flex items-center gap-1 text-xs text-sage-500">
                                    <Clock className="w-3 h-3" />
                                    <span>Il y a 2 heures</span>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">
                            À TRAITER
                        </div>
                    </div>
                    <p className="text-sm text-sage-600 mb-3 italic">
                        "Besoin urgent de support sur le projet X..."
                    </p>
                    <button className="w-full bg-sage-800 hover:bg-sage-900 text-white font-semibold py-2 rounded-lg transition-colors text-sm">
                        Voir l'analyse détaillée
                    </button>
                </motion.div>

                {/* Floating shadow effect */}
                <div className="absolute inset-0 bg-sage-900/5 rounded-[2rem] blur-2xl -z-10 transform translate-y-8"></div>
            </motion.div>
        </div>
    );
}
