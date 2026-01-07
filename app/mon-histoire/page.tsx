"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Lightbulb, Target, Quote } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";

export default function MonHistoire() {
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-head font-bold text-deep mb-6 leading-tight">
                            L'histoire de
                            <span className="block text-accent">Claovia</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Une plateforme née de l'expérience, construite pour transformer le monde du travail.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Origin */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                <Lightbulb className="text-accent" size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-head font-bold text-deep mb-4">
                                    L'origine d'une réflexion
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Claovia est née d'une réflexion profonde, forgée par plusieurs années d'observation du fonctionnement des entreprises, de leurs dynamiques humaines et de leurs dysfonctionnements parfois invisibles.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    J'ai vu les mêmes processus se répéter : systèmes de commissions descendants, hiérarchies rigides, et surtout des dysfonctionnements humains que personne n'osait nommer.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="bg-deep text-white rounded-[28px] p-8 md:p-12">
                            <div className="flex items-start gap-4 mb-6">
                                <Quote className="text-accent shrink-0" size={32} />
                            </div>
                            <blockquote className="text-2xl md:text-3xl font-head font-bold mb-6 leading-tight">
                                Ce n'est pas parce que tu es un bon expert métier que tu es un bon manager.
                            </blockquote>
                            <p className="text-white/70 leading-relaxed">
                                Cette phrase, c'est ma philosophie. J'ai observé un système où les managers sont choisis sur des titres et non des compétences. "Tu es là depuis 3 ans, tu as fait 100K au lieu de 50K objectivés... félicitations, tu es manager !"
                            </p>
                            <p className="text-white/70 leading-relaxed mt-4">
                                Mais savoir vendre ne signifie pas savoir accompagner, comprendre, ou former une équipe.
                            </p>
                        </div>
                    </motion.div>

                    {/* For Managers */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                <Target className="text-accent" size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-head font-bold text-deep mb-4">
                                    Des outils pour les managers
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    J'ai croisé d'excellents experts métier qui, pédagogiquement, n'avaient pas les clés ou les outils pour accompagner leurs équipes. Des gens brillants techniquement mais qui n'avaient jamais appris à transmettre ou à écouter.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Claovia est né pour eux aussi : leur donner les moyens de comprendre leurs équipes grâce à des retours d'expérience directs et des recommandations concrètes.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Give Voice */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                <Users className="text-accent" size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-head font-bold text-deep mb-4">
                                    Redonner la parole aux collaborateurs
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    L'idée était simple : remettre au centre ceux qui font tourner l'entreprise au quotidien et surtout leur donner la parole.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Combien de collaborateurs ont des points hebdomadaires ou mensuels avec leur manager, mais n'osent pas toujours dire ce qu'ils pensent vraiment ? Par peur du jugement. Par contrainte hiérarchique. Par manque de légitimité perçue.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Combien de signaux restent invisibles parce que la parole n'est pas libérée ? C'est de là qu'est né le REX : un espace où chaque voix compte, où le ressenti individuel devient intelligence collective.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Celebrate Great Managers */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                <Heart className="text-accent" size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-head font-bold text-deep mb-4">
                                    Valoriser les managers exceptionnels
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Mais attention : j'ai aussi rencontré des managers formidables. Des personnes inspirantes, à l'écoute, capables de tirer le meilleur de leurs équipes.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    J'ai recueilli de nombreux témoignages de collaborateurs qui ont eu la chance d'avoir des managers exceptionnels. Claovia existe aussi pour eux.
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                        Valoriser leurs compétences
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                        Légitimer leur posture auprès de leur hiérarchie
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                        Justifier des augmentations méritées
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                        Reconnaître leur impact réel
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Conclusion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-light rounded-[28px] p-8 md:p-12 text-center"
                    >
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Car un bon manager, c'est précieux. Certains collaborateurs sont prêts à quitter leur poste si leur manager change ou part.
                        </p>
                        <p className="text-xl font-head font-bold text-deep">
                            Claovia permet de mesurer et de prouver cette valeur, pour mieux soutenir ceux qui font vraiment la différence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-deep text-white text-center px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-head font-bold mb-6">
                        Envie de transformer votre management ?
                    </h2>
                    <p className="text-white/60 mb-8">
                        Découvrez comment Claovia peut aider vos équipes.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-white hover:text-deep text-white px-8 py-4 rounded-xl font-bold transition-all"
                        >
                            Découvrir la solution <ArrowRight size={20} />
                        </Link>
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
