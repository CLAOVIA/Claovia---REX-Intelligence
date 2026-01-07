"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Check, Zap } from "lucide-react";
import Link from "next/link";
import { RexCard } from "@/components/dashboard/RexCard";
import { useState, useEffect } from "react";
import { TrustBadges } from "@/components/landing/social-proof";

// Mock Data for the Hero Demo
const HERO_REX_DATA = {
    collaborateur: {
        prenom: "Marie",
        metier: "Commerciale",
        date: "Aujourd'hui",
    },
    rex: {
        synthese: "Marie exprime un besoin urgent de feedback sur ses dossiers en cours. Risque de désengagement détecté (Motivation 6/10).",
        recommandation: "Planifier un point de 20 min cette semaine pour valider les priorités Q1.",
        thematiques: [
            { name: "Relation avec le Manager", analyse: "Manque d'échanges formels." },
            { name: "Charge de Travail", analyse: "Intense, besoin de priorisation." },
        ],
        planAction: {
            aFaireMaintenant: ["Envoyer l'invitation (prête)", "Bloquer créneau Jeudi"],
            aPlanifier: ["Revue objectifs Q1"],
        },
        kit: {
            email: {
                objet: "Point rapide cette semaine ?",
                corps: "Salut Marie, on peut se voir 20 min pour faire le point sur tes dossiers ?"
            }
        }
    }
};

const CHAT_MESSAGES = [
    { role: "bot", text: "Salut Marie ! Comment tu te sens dans ton poste aujourd'hui ?", delay: 0.5 },
    { role: "user", text: "Honnêtement ? C'est un peu la course en ce moment.", delay: 2.5 },
    { role: "bot", text: "Je comprends. Tu as l'impression de manquer de temps ou de soutien ?", delay: 4 },
    { role: "user", text: "Surtout de soutien. Je vois peu mon manager.", delay: 6 },
    { role: "bot", text: "Noté. Je prépare un plan pour t'aider à en discuter avec lui.", delay: 8 },
];

export function HeroSplit3D() {
    const [visibleMessages, setVisibleMessages] = useState<typeof CHAT_MESSAGES>([]);

    useEffect(() => {
        // Simple chat simulation loop
        let timeouts: NodeJS.Timeout[] = [];

        const runSimulation = () => {
            setVisibleMessages([]);
            CHAT_MESSAGES.forEach((msg, i) => {
                timeouts.push(setTimeout(() => {
                    setVisibleMessages(prev => [...prev, msg]);
                }, msg.delay * 1000));
            });
        };

        runSimulation();
        // Re-run every 15s
        const interval = setInterval(runSimulation, 15000);

        return () => {
            timeouts.forEach(clearTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="relative min-h-[90vh] bg-cream pt-24 pb-12 overflow-hidden flex flex-col justify-center">

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] role-[10%] w-[40%] h-[40%] bg-deep/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT: Value Prop & Chat Simulation */}
                <div className="order-2 lg:order-1 flex flex-col items-start">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-white border border-accent/20 px-4 py-2 rounded-full mb-8 shadow-sm"
                    >
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-accent">Intelligence Managériale</span>
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-head font-bold text-deep mb-6 leading-tight"
                    >
                        Ne laissez plus vos talents <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-deep">
                            partir en silence.
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
                    >
                        Transformez le ressenti collaborateur en <strong className="text-deep">plan d'action managérial</strong> immédiat. Avant qu'il ne soit trop tard.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4 mb-12"
                    >
                        <a href="https://typebot.co/claovia-rex-clao-ia-05gi2vb" target="_blank" className="bg-deep text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent hover:scale-[1.02] transition-all shadow-xl shadow-deep/20 flex items-center gap-2">
                            <Play size={20} fill="currentColor" /> Essayer Gratuitement
                        </a>
                        <Link href="/fonctionnalites" className="bg-white text-deep border-2 border-gray-100 px-8 py-4 rounded-xl font-bold text-lg hover:border-accent hover:text-accent transition-all flex items-center gap-2">
                            Voir la démo
                        </Link>
                    </motion.div>

                    <TrustBadges />
                </div>

                {/* RIGHT: 3D Visualization (Chat -> Particles -> RexCard) */}
                <div className="order-1 lg:order-2 relative h-[500px] perspective-1000 flex items-center justify-center">

                    {/* Floating Chat Bubbles (Left Side of Visual) */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 space-y-4 z-20">
                        {visibleMessages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                className={`p-3 rounded-2xl text-xs font-medium shadow-lg backdrop-blur-sm 
                                    ${msg.role === 'bot' ? 'bg-white/90 text-deep rounded-tl-sm self-start' : 'bg-accent text-white rounded-tr-sm self-end ml-auto'}
                                `}
                            >
                                {msg.text}
                            </motion.div>
                        ))}
                    </div>

                    {/* Central Flow (Particles) */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-[120%] h-[120%] border-[1px] border-dashed border-accent/20 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="w-[80%] h-[80%] border-[1px] border-dashed border-deep/20 rounded-full absolute"
                        />
                    </div>

                    {/* 3D Rex Card (Right Side of Visual) */}
                    <motion.div
                        initial={{ rotateY: 20, rotateX: 5, x: 50, opacity: 0 }}
                        animate={{ rotateY: -10, rotateX: 5, x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative z-30 ml-20 w-80 md:w-96"
                    >
                        {/* Glowing effect behind card */}
                        <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full -z-10" />

                        <RexCard
                            data={HERO_REX_DATA}
                            className="scale-90 md:scale-100 shadow-2xl border-white/50 backdrop-blur-sm"
                        />

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2"
                        >
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold text-deep">Action requise</span>
                        </motion.div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
