"use client";

import { motion } from "framer-motion";
import {
    FileText,
    Search,
    Zap,
    Target,
    Users,
    Heart,
    TrendingUp,
    MessageSquare,
    Mail,
    FileCheck,
    Calendar,
    ClipboardList,
    ChevronRight,
    Shield,
    UserCheck,
} from "lucide-react";

// Structure complète du REX Manager basée sur le fichier Word
const rexExample = {
    header: {
        prenom: "Thomas",
        nom: "Martin",
        metier: "Chef de Projet Digital",
        date: "06/01/2025",
        mode: "Identifié",
        kanonymity: false,
    },
    synthese: {
        globale: "Les réponses sont globalement préoccupantes. Un sentiment de surcharge et de manque de reconnaissance ressort fortement. Thomas exprime une fatigue liée à un volume de travail excessif (50h+/semaine) et un manque de feedback constructif de la part de son manager.",
        urgence: "HAUTE",
    },
    thematiques: [
        { name: "Relation Manager", icon: Users, score: "Tendue", color: "text-orange-600", detail: "Difficulté à être écouté. Propositions rarement validées." },
        { name: "Charge de travail", icon: Target, score: "Critique", color: "text-red-600", detail: "50h+/semaine. Projet Alpha chronophage sans priorisation." },
        { name: "Objectifs & Clarté", icon: ClipboardList, score: "Floue", color: "text-amber-600", detail: "Manque de visibilité sur les priorités à moyen terme." },
        { name: "Motivation", icon: Heart, score: "En baisse", color: "text-orange-600", detail: "Sentiment de non-reconnaissance malgré les efforts." },
        { name: "Développement", icon: TrendingUp, score: "Stagnant", color: "text-amber-600", detail: "Pas de perspective de formation ou d'évolution." },
        { name: "Équipe", icon: MessageSquare, score: "Correcte", color: "text-green-600", detail: "Bonne ambiance avec les collègues directs." },
    ],
    recommandation: {
        principale: "Organiser un point de décharge prioritaire sous 48h pour rééquilibrer la charge et rétablir un dialogue constructif.",
        planifier: [
            "Entretien individuel sur la charge de travail",
            "Revue des priorités du Projet Alpha",
            "Point carrière et perspectives",
        ],
        maintenant: [
            "Accusé de réception du REX",
            "Planifier le point 1:1",
        ],
    },
    kitManager: [
        { icon: Mail, title: "Invitation Point 1:1", description: "Mail pré-rédigé pour inviter Thomas à un échange", cta: "Copier l'email" },
        { icon: FileCheck, title: "Guide de Réunion", description: "Script complet avec questions à poser et ton à adopter", cta: "Télécharger" },
        { icon: Calendar, title: "Proposition de Rendez-vous", description: "Template Outlook/Google avec objet et description", cta: "Créer l'événement" },
        { icon: ClipboardList, title: "Plan d'Action Suggéré", description: "Checklist des actions à mettre en place", cta: "Voir le plan" },
    ],
};

export function RexShowcase() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-4">
                        <FileText size={16} />
                        Exemple de REX
                    </div>
                    <h2 className="text-3xl md:text-4xl font-head font-bold text-deep mb-4">
                        Ce que reçoit le Manager
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Un plan d'accompagnement complet, actionnable immédiatement. Pas des données brutes, des solutions.
                    </p>
                </motion.div>

                {/* REX Document */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[28px] border border-gray-200 shadow-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-deep text-white p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="font-head font-bold text-lg">
                                        REX Manager - {rexExample.header.prenom}
                                    </h3>
                                    <p className="text-white/70 text-sm">
                                        {rexExample.header.prenom} {rexExample.header.nom} • {rexExample.header.metier} • {rexExample.header.date}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1 text-xs bg-white/20 px-3 py-1.5 rounded-full">
                                    <UserCheck size={14} /> {rexExample.header.mode}
                                </span>
                                <span className="flex items-center gap-1 text-xs bg-accent px-3 py-1.5 rounded-full font-bold">
                                    Priorité {rexExample.synthese.urgence}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 space-y-8">
                        {/* Synthèse */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider mb-3">
                                <Search size={14} /> Synthèse Globale
                            </div>
                            <p className="text-gray-700 bg-light p-4 rounded-xl leading-relaxed">
                                {rexExample.synthese.globale}
                            </p>
                        </motion.div>

                        {/* Recommandation Principale */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="flex items-center gap-2 text-deep font-bold text-xs uppercase tracking-wider mb-3">
                                <Zap size={14} /> Recommandation Principale
                            </div>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl">
                                <p className="text-gray-800 font-medium">{rexExample.recommandation.principale}</p>
                            </div>
                        </motion.div>

                        {/* Analyse par Thématique */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2 text-deep font-bold text-xs uppercase tracking-wider mb-4">
                                <ClipboardList size={14} /> Analyse par Thématique
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {rexExample.thematiques.map((theme, i) => (
                                    <motion.div
                                        key={theme.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * i }}
                                        className="bg-cream p-4 rounded-xl"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <theme.icon size={16} className="text-gray-500" />
                                                <span className="font-bold text-sm text-deep">{theme.name}</span>
                                            </div>
                                            <span className={`text-xs font-bold ${theme.color}`}>{theme.score}</span>
                                        </div>
                                        <p className="text-xs text-gray-600">{theme.detail}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Plan d'Action */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center gap-2 text-deep font-bold text-xs uppercase tracking-wider mb-4">
                                <Target size={14} /> Plan d'Action
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-light p-4 rounded-xl">
                                    <h4 className="font-bold text-sm text-deep mb-3 flex items-center gap-2">
                                        <Calendar size={14} /> À planifier
                                    </h4>
                                    <ul className="space-y-2">
                                        {rexExample.recommandation.planifier.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                                    {i + 1}
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                                    <h4 className="font-bold text-sm text-orange-700 mb-3 flex items-center gap-2">
                                        <Zap size={14} /> À faire maintenant
                                    </h4>
                                    <ul className="space-y-2">
                                        {rexExample.recommandation.maintenant.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                                    !
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Kit Manager */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="border-t border-gray-200 pt-8"
                        >
                            <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider mb-4">
                                <Shield size={14} /> Kit Manager - Outils Prêts à l'Emploi
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {rexExample.kitManager.map((tool, i) => (
                                    <motion.button
                                        key={tool.title}
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-accent hover:shadow-md transition-all group text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                                <tool.icon size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm text-deep">{tool.title}</div>
                                                <div className="text-xs text-gray-500">{tool.description}</div>
                                            </div>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-300 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
