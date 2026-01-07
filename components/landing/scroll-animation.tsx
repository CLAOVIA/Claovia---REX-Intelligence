"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, FileText, Send, CheckCircle, Sparkles, User } from "lucide-react";

const STEPS = [
    { id: 1, label: "Message envoyé", color: "bg-accent" },
    { id: 2, label: "Analyse IA", color: "bg-deep" },
    { id: 3, label: "Plan d'action", color: "bg-green-500" },
];

export function ScrollAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Animation phases based on scroll - optimized for 130vh (faster/more direct)
    const messageOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const messageY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    const sendProgress = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
    const sendScale = useTransform(scrollYProgress, [0.2, 0.35], [1, 0.9]);

    const processingOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
    const processingScale = useTransform(scrollYProgress, [0.35, 0.5], [0.8, 1]);

    // Arrow animation starts as processing finishes
    const arrowProgress = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);

    const solutionOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const solutionY = useTransform(scrollYProgress, [0.6, 0.8], [30, 0]);

    const managerOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);
    const managerX = useTransform(scrollYProgress, [0.75, 0.9], [50, 0]);

    // Progress for vertical bar
    const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Step indicators
    const step1Active = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const step2Active = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
    const step3Active = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

    return (
        <section ref={containerRef} className="min-h-[130vh] relative bg-gradient-to-b from-cream to-white">
            {/* Vertical Progress Bar (Desktop) */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
                <div className="relative h-32 w-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent to-deep rounded-full"
                        style={{ height: progressHeight }}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.id}
                            style={{
                                opacity: index === 0 ? step1Active : index === 1 ? step2Active : step3Active,
                                scale: useTransform(
                                    index === 0 ? step1Active : index === 1 ? step2Active : step3Active,
                                    [0, 1],
                                    [0.8, 1]
                                )
                            }}
                            className="flex items-center gap-2"
                        >
                            <div className={`w-2 h-2 rounded-full ${step.color} shadow-sm`} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 w-full">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                            <Zap size={12} />
                            Comment ça fonctionne
                        </span>
                        <h2 className="text-3xl md:text-5xl font-head font-bold text-deep mb-4">
                            Du message à l'action
                        </h2>
                        <p className="text-gray-600 max-w-lg mx-auto text-lg">
                            L'IA transforme les mots en opportunités managériales en temps réel.
                        </p>
                    </motion.div>

                    {/* Animation Visualization */}
                    <div className="relative h-[400px] flex items-center justify-center">

                        {/* ========================================================
                            STEP 1: Message (Premium Glass Bubble)
                        ======================================================== */}
                        <motion.div
                            style={{ opacity: messageOpacity, y: messageY }}
                            className="absolute left-0 md:left-[5%] top-1/2 -translate-y-1/2 w-[300px] md:w-[320px] z-10"
                        >
                            <motion.div
                                style={{ scale: sendScale }}
                                className="glass-enhanced rounded-3xl p-6 shadow-2xl border border-white/40 relative overflow-hidden group"
                            >
                                {/* Decorative gradient blur */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500" />

                                <div className="flex items-start gap-4 mb-4 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border border-white flex items-center justify-center shadow-inner">
                                        <User className="text-gray-500" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-sm text-deep flex justify-between items-center">
                                            <span>Collaborateur</span>
                                            <span className="text-[10px] text-gray-400 font-medium">10:42</span>
                                        </div>
                                        <div className="text-xs text-accent font-medium">via Clao</div>
                                    </div>
                                </div>

                                <div className="bg-white/60 rounded-2xl p-4 rounded-tl-none shadow-sm border border-white/50 relative z-10">
                                    <p className="text-deep/90 text-sm leading-relaxed font-medium">
                                        "J'ai besoin de plus de feedback sur mon travail. Je ne sais pas toujours si je suis sur la bonne voie."
                                    </p>
                                </div>

                                <motion.div
                                    style={{ opacity: sendProgress }}
                                    className="mt-4 flex items-center justify-end gap-2 text-accent text-xs font-bold"
                                >
                                    <span>Envoyé</span>
                                    <div className="bg-accent text-white p-1 rounded-full">
                                        <Send size={10} />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* ========================================================
                            STEP 2: Processing (Pulse/Radar Effect)
                        ======================================================== */}
                        <motion.div
                            style={{ opacity: processingOpacity, scale: processingScale }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                        >
                            <div className="relative w-40 h-40 flex items-center justify-center">
                                {/* Outer Ripples */}
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 rounded-full border border-accent/20"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    className="absolute inset-4 rounded-full border border-accent/30"
                                />

                                {/* Core */}
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-deep to-accent shadow-[0_0_30px_rgba(58,133,119,0.4)] flex items-center justify-center z-10 relative overflow-hidden">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.3)_360deg)]"
                                    />
                                    <Sparkles className="text-white relative z-10" size={32} />
                                </div>

                                {/* Label */}
                                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                                    <div className="text-sm font-bold text-deep bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow-sm border border-gray-100">
                                        Analyse IA
                                    </div>
                                    <div className="text-[10px] text-gray-500 font-medium mt-1">
                                        ~30 secondes
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* ========================================================
                            STEP 3: Solution (Premium Doc Card)
                        ======================================================== */}
                        <motion.div
                            style={{ opacity: solutionOpacity, y: solutionY }}
                            className="absolute right-0 md:right-[5%] top-1/2 -translate-y-1/2 w-[320px] md:w-[350px] z-10"
                        >
                            <motion.div
                                style={{ opacity: managerOpacity, x: managerX }}
                                className="bg-white rounded-3xl p-0 shadow-2xl border border-gray-100 relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500"
                            >
                                {/* Header Strip */}
                                <div className="bg-deep px-6 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
                                            <FileText className="text-white" size={16} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-white/90 uppercase tracking-widest">Plan d'action</div>
                                            <div className="text-[10px] text-white/60">Généré il y a 2min</div>
                                        </div>
                                    </div>
                                    <div className="bg-green-500/20 border border-green-500/30 text-green-400 text-[10px] font-bold px-2 py-1 rounded">
                                        PRIORITAIRE
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="space-y-4">
                                        <div className="bg-cream/50 rounded-xl p-4 border border-gray-100">
                                            <div className="text-xs font-bold text-accent mb-1 uppercase">Recommandation</div>
                                            <p className="text-sm text-deep font-medium leading-snug">
                                                Instaurer un point hebdomadaire de 15 min focus "Feedback & Développement".
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                                                <div className="text-green-500 bg-green-50 rounded-full p-1 group-hover:scale-110 transition-transform">
                                                    <CheckCircle size={14} />
                                                </div>
                                                <span className="text-xs text-gray-600 font-medium group-hover:text-deep transition-colors">Mail d'invitation pré-rédigé</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                                                <div className="text-green-500 bg-green-50 rounded-full p-1 group-hover:scale-110 transition-transform">
                                                    <CheckCircle size={14} />
                                                </div>
                                                <span className="text-xs text-gray-600 font-medium group-hover:text-deep transition-colors">Guide d'entretien structuré</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                                            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
                                        </div>
                                        <div className="text-xs font-bold text-accent cursor-pointer hover:underline">
                                            Voir le détail &rarr;
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.svg
                            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block -z-10 overflow-visible"
                            style={{ opacity: processingOpacity }}
                        >
                            <defs>
                                <linearGradient id="premiumArrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3A8577" stopOpacity="0.4" />
                                    <stop offset="50%" stopColor="#3A8577" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#20372F" stopOpacity="1" />
                                </linearGradient>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="2" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                                <marker id="arrowheadPremium" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                                    <path d="M2,2 L10,6 L2,10 L4,6 Z" fill="#20372F" />
                                </marker>
                            </defs>

                            {/* Line from Message to AI (Dotted & Flowing) */}
                            <motion.path
                                d="M320 200 L420 200"
                                stroke="url(#premiumArrowGradient)"
                                strokeWidth="2"
                                strokeDasharray="6 4"
                                fill="none"
                                style={{ pathLength: sendProgress, opacity: 0.5 }}
                                animate={{ strokeDashoffset: [0, -20] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Premium Animated Curve from AI to Solution */}
                            {/* Uses Cubic Bezier for smoother "S" curve feel */}
                            <motion.path
                                d="M 580 200 C 620 200, 640 100, 740 200"
                                stroke="url(#premiumArrowGradient)"
                                strokeWidth="3"
                                fill="none"
                                filter="url(#glow)"
                                markerEnd="url(#arrowheadPremium)"
                                strokeLinecap="round"
                                style={{ pathLength: arrowProgress }}
                            />
                        </motion.svg>
                    </div>

                    {/* Scroll indicator with fade out */}
                    <motion.div
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
                    >
                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Découvrir le process</span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-6 h-10 rounded-full border-2 border-gray-200 flex justify-center p-1"
                        >
                            <motion.div
                                animate={{ height: ["20%", "50%", "20%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-1 bg-accent/50 rounded-full"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
