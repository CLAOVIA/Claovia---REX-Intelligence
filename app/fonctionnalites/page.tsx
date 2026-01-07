"use client";

import { motion } from "framer-motion";
import {
    MessageSquare,
    Zap,
    FileText,
    Shield,
    Users,
    TrendingUp,
    Mail,
    Calendar,
    ClipboardList,
    ArrowRight,
    CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";

const features = [
    {
        icon: MessageSquare,
        title: "Conversation IA naturelle",
        description: "Clao, notre coach IA, mène une vraie conversation avec le collaborateur. Pas un questionnaire, un échange authentique.",
        benefits: ["Anonymat possible", "10-15 minutes", "Ton bienveillant"],
    },
    {
        icon: Zap,
        title: "Analyse instantanée",
        description: "L'IA analyse les 6 thématiques clés et génère un rapport structuré en quelques secondes.",
        benefits: ["6 thématiques analysées", "Synthèse automatique", "Recommandations concrètes"],
    },
    {
        icon: FileText,
        title: "Retour d'Expérience structuré",
        description: "Un document complet pour le manager : synthèse, analyse par thématique, plan d'action prioritaire.",
        benefits: ["Structure claire", "Pas de données brutes", "Actions prioritaires"],
    },
    {
        icon: Shield,
        title: "Anonymat garanti",
        description: "Le collaborateur choisit : identifié ou anonyme. Technologie K-anonymity pour une protection maximale.",
        benefits: ["Choix du collaborateur", "K-anonymity", "Mots jamais cités"],
    },
    {
        icon: Mail,
        title: "Kit Manager complet",
        description: "Emails pré-rédigés, guides de réunion, notes de suivi, propositions de rendez-vous. Tout est prêt.",
        benefits: ["Emails prêts", "Guides de réunion", "Notes de suivi"],
    },
    {
        icon: Calendar,
        title: "Plan d'action intégré",
        description: "Deux colonnes simples : ce qu'il faut faire maintenant, ce qu'il faut planifier.",
        benefits: ["Priorités claires", "Actions immédiates", "Suivi facilité"],
    },
];

const thematiques = [
    { name: "Relation Manager", icon: Users },
    { name: "Charge de travail", icon: ClipboardList },
    { name: "Objectifs et Clarté", icon: FileText },
    { name: "Motivation", icon: TrendingUp },
    { name: "Développement", icon: Zap },
    { name: "Équipe et Environnement", icon: MessageSquare },
];

export default function Fonctionnalites() {
    return (
        <div className="min-h-screen bg-cream font-sans text-deep">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-head font-bold text-deep mb-6">
                            Nos Fonctionnalités
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Tout ce dont vous avez besoin pour transformer les retours terrain en actions managériales concrètes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-cream rounded-[28px] p-8"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                                    <feature.icon className="text-accent" size={28} />
                                </div>
                                <h3 className="text-xl font-head font-bold text-deep mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-2">
                                    {feature.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                                            <CheckCircle size={16} className="text-accent shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6 Thématiques */}
            <section className="py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-head font-bold text-deep mb-4">
                            6 thématiques analysées
                        </h2>
                        <p className="text-gray-600">
                            Chaque retour d'expérience explore ces 6 dimensions essentielles.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {thematiques.map((theme, index) => (
                            <motion.div
                                key={theme.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-xl p-6 text-center border border-gray-200"
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                                    <theme.icon className="text-accent" size={24} />
                                </div>
                                <h3 className="font-bold text-deep text-sm">{theme.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-head font-bold text-deep mb-4">
                            Comment ça fonctionne
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Le collaborateur s'exprime",
                                description: "Une conversation de 10-15 minutes avec Clao, notre coach IA. Anonyme ou identifié, au choix.",
                            },
                            {
                                step: "02",
                                title: "L'IA analyse et structure",
                                description: "En 30 secondes, l'IA génère un retour d'expérience complet avec recommandations.",
                            },
                            {
                                step: "03",
                                title: "Le manager agit",
                                description: "Kit complet à disposition : emails, guides, actions prioritaires. Tout est prêt.",
                            },
                        ].map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="text-center"
                            >
                                <div className="text-5xl font-head font-bold text-accent/20 mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-head font-bold text-deep mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-deep text-white text-center px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-head font-bold mb-6">
                        Prêt à découvrir Claovia ?
                    </h2>
                    <p className="text-white/60 mb-8">
                        Testez le produit maintenant. Pas de démo commerciale, juste la solution.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-white hover:text-deep text-white px-8 py-4 rounded-xl font-bold transition-all"
                        >
                            Tester maintenant <ArrowRight size={20} />
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-deep border-t border-white/10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="font-head font-bold text-xl text-white">Claovia</div>
                    <div className="flex gap-6">
                        <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">Accueil</Link>
                        <Link href="/fonctionnalites" className="text-white/60 hover:text-white transition-colors text-sm">Fonctionnalités</Link>
                        <Link href="/mon-histoire" className="text-white/60 hover:text-white transition-colors text-sm">Mon Histoire</Link>
                        <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link>
                    </div>
                    <p className="text-white/40 text-sm">2025 Claovia. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
}
