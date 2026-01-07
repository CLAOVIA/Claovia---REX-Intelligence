"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, ArrowRight, FileText, Zap, Send, CheckCircle, ArrowDown } from "lucide-react";

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

    // Animation phases based on scroll - optimized for 150vh
    const messageOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
    const messageY = useTransform(scrollYProgress, [0, 0.25], [50, 0]);

    const sendProgress = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
    const sendScale = useTransform(scrollYProgress, [0.25, 0.4], [1, 0.95]);

    const processingOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
    const processingScale = useTransform(scrollYProgress, [0.4, 0.55], [0.8, 1]);

    const solutionOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
    const solutionY = useTransform(scrollYProgress, [0.55, 0.75], [30, 0]);

    const managerOpacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);
    const managerX = useTransform(scrollYProgress, [0.75, 0.95], [50, 0]);

    // Progress for vertical bar
    const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Step indicators
    const step1Active = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
    const step2Active = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
    const step3Active = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);

    return (
        <section ref={containerRef} className="min-h-[150vh] relative bg-gradient-to-b from-cream to-white">
            {/* Vertical Progress Bar */}
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
                            <div className={`w-2 h-2 rounded-full ${step.color}`} />
                            <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                                {step.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 w-full">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                            <Zap size={14} />
                            Comment ça fonctionne
                        </span>
                        <h2 className="text-3xl md:text-4xl font-head font-bold text-deep mb-4">
                            Du message à la solution
                        </h2>
                        <p className="text-gray-600 max-w-lg mx-auto">
                            Suivez le parcours d'un retour d'expérience en temps réel
                        </p>
                    </motion.div>

                    {/* Animation Container */}
                    <div className="relative h-[350px] md:h-[400px] flex items-center justify-center">
                        {/* Step 1: Message sent */}
                        <motion.div
                            style={{ opacity: messageOpacity, y: messageY }}
                            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-[250px] md:w-[280px]"
                        >
                            <motion.div
                                style={{ scale: sendScale }}
                                className="bg-white rounded-[24px] p-5 md:p-6 shadow-lg border border-gray-100 relative"
                            >
                                {/* Step Badge */}
                                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shadow-lg">
                                    1
                                </div>

                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <MessageSquare className="text-accent" size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-deep">Collaborateur</div>
                                        <div className="text-xs text-gray-500">via Clao</div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    "J'ai besoin de plus de feedback sur mon travail. Je ne sais pas toujours si je suis sur la bonne voie."
                                </p>
                                <motion.div
                                    style={{ opacity: sendProgress }}
                                    className="mt-4 flex items-center gap-2 text-accent text-xs font-medium"
                                >
                                    <Send size={14} />
                                    Retour d'expérience envoyé
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Step 2: Processing */}
                        <motion.div
                            style={{ opacity: processingOpacity, scale: processingScale }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="relative">
                                {/* Step Badge */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-deep text-white flex items-center justify-center text-sm font-bold shadow-lg z-10">
                                    2
                                </div>

                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-deep flex items-center justify-center shadow-2xl">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="relative"
                                    >
                                        <Zap className="text-accent" size={28} />
                                    </motion.div>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <div className="text-sm font-bold text-deep">Analyse IA</div>
                                <div className="text-xs text-gray-500">30 secondes</div>
                            </div>
                        </motion.div>

                        {/* Step 3: Solution appears */}
                        <motion.div
                            style={{ opacity: solutionOpacity, y: solutionY }}
                            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-[280px] md:w-[320px]"
                        >
                            <motion.div
                                style={{ opacity: managerOpacity, x: managerX }}
                                className="bg-white rounded-[24px] p-5 md:p-6 shadow-xl border-2 border-accent/20 relative"
                            >
                                {/* Step Badge */}
                                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                                    3
                                </div>

                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-deep flex items-center justify-center">
                                        <FileText className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-deep">REX Manager</div>
                                        <div className="text-xs text-gray-500">Plan d'action</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="bg-light rounded-lg p-3">
                                        <div className="text-xs font-bold text-accent mb-1">Recommandation</div>
                                        <p className="text-xs text-gray-600">
                                            Instaurer un point hebdomadaire de 15 min pour partager les retours.
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-deep">
                                        <CheckCircle size={14} className="text-green-600" />
                                        <span>Mail pré-rédigé disponible</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-deep">
                                        <CheckCircle size={14} className="text-green-600" />
                                        <span>Guide de réunion prêt</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Connection Lines - SVG */}
                        <motion.svg
                            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
                            style={{ opacity: processingOpacity }}
                        >
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3A8577" />
                                    <stop offset="100%" stopColor="#20372F" />
                                </linearGradient>
                            </defs>
                            <motion.line
                                x1="280"
                                y1="50%"
                                x2="calc(50% - 60px)"
                                y2="50%"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                strokeDasharray="8,4"
                                style={{ pathLength: sendProgress }}
                            />
                            <motion.line
                                x1="calc(50% + 60px)"
                                y1="50%"
                                x2="calc(100% - 320px)"
                                y2="50%"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                strokeDasharray="8,4"
                                style={{ pathLength: solutionOpacity }}
                            />
                        </motion.svg>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
                    >
                        <span className="text-xs font-medium">Scrollez pour découvrir</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md"
                        >
                            <ArrowDown size={16} className="text-accent" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
