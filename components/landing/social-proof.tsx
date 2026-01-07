"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Flag, Award, ChevronDown, Plus, Minus } from "lucide-react";

// =====================================================
// TRUST BADGES COMPONENT
// =====================================================

export function TrustBadges() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
        >
            <div className="trust-badge">
                <Shield className="text-accent" />
                <span>RGPD Compliant</span>
            </div>
            <div className="trust-badge">
                <Flag className="text-accent" />
                <span>Hébergé en France</span>
            </div>
            <div className="trust-badge">
                <Lock className="text-accent" />
                <span>Données Chiffrées</span>
            </div>
            <div className="trust-badge">
                <Award className="text-accent" />
                <span>IA Éthique</span>
            </div>
        </motion.div>
    );
}

// =====================================================
// ANIMATED COUNTER COMPONENT
// =====================================================

export function AnimatedCounter({
    target,
    suffix = "",
    duration = 2000
}: {
    target: number;
    suffix?: string;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = Date.now();
        const step = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing function for smooth animation
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(target * eased));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [isVisible, target, duration]);

    return (
        <motion.span
            onViewportEnter={() => setIsVisible(true)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            {count.toLocaleString()}{suffix}
        </motion.span>
    );
}

// =====================================================
// SOCIAL PROOF SECTION
// =====================================================

export function SocialProofSection() {
    return (
        <section className="py-12 bg-white border-t border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {/* Counter */}
                        <div className="counter-badge">
                            <div className="number font-head">
                                <AnimatedCounter target={1247} suffix="+" />
                            </div>
                            <div className="label">REX analysés</div>
                        </div>

                        {/* Separator */}
                        <div className="hidden md:block w-px h-12 bg-gray-200" />

                        {/* Stats */}
                        <div className="flex gap-8">
                            <div className="text-center">
                                <div className="text-2xl font-head font-bold text-deep">
                                    <AnimatedCounter target={94} suffix="%" />
                                </div>
                                <div className="text-xs text-gray-500">Satisfaction managers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-head font-bold text-accent">
                                    {"<"}<AnimatedCounter target={24} />h
                                </div>
                                <div className="text-xs text-gray-500">Temps action</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-head font-bold text-deep">
                                    <AnimatedCounter target={67} suffix="%" />
                                </div>
                                <div className="text-xs text-gray-500">Turnover évité</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 max-w-2xl mx-auto"
                    >
                        <blockquote className="text-gray-600 italic text-sm leading-relaxed">
                            "Claovia nous a permis de détecter un collaborateur en difficulté avant qu'il ne démissionne.
                            Le REX a tout changé dans notre approche managériale."
                        </blockquote>
                        <div className="mt-3 flex items-center justify-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-deep flex items-center justify-center text-white text-xs font-bold">
                                SL
                            </div>
                            <div className="text-left">
                                <div className="text-xs font-bold text-deep">Sophie Laurent</div>
                                <div className="text-xs text-gray-400">DRH, Entreprise Tech (150 pers.)</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// =====================================================
// FAQ DATA
// =====================================================

const faqData = [
    {
        question: "Comment fonctionne l'anonymat des retours ?",
        answer: "Le collaborateur choisit son niveau d'anonymat au début du REX. En mode anonyme, aucune information identifiante n'est transmise au manager. L'IA analyse le contenu et génère des recommandations génériques. En mode identifié, le manager reçoit un rapport personnalisé avec le contexte complet."
    },
    {
        question: "Combien de temps prend un REX ?",
        answer: "La conversation avec Clao dure environ 10 minutes. L'analyse IA est instantanée (moins de 30 secondes). Le manager reçoit son plan d'action par email immédiatement. L'objectif est de permettre une action managériale dans les 24h."
    },
    {
        question: "Les données sont-elles sécurisées ?",
        answer: "Oui, toutes les données sont hébergées en France sur des serveurs certifiés ISO 27001. Les échanges sont chiffrés de bout en bout. Nous sommes conformes RGPD et les données sont supprimées après 12 mois sur demande."
    },
    {
        question: "Peut-on intégrer Claovia à nos outils RH existants ?",
        answer: "Claovia s'intègre facilement avec les principaux SIRH (Workday, SAP SuccessFactors, Talentsoft). Une API REST est disponible pour les intégrations personnalisées. Nous proposons aussi des connecteurs Teams et Slack."
    },
    {
        question: "Quel est le coût de Claovia ?",
        answer: "Claovia propose une tarification par collaborateur et par mois. Le premier REX est gratuit pour tester l'outil. Contactez-nous pour un devis personnalisé adapté à la taille de votre organisation."
    },
    {
        question: "L'IA remplace-t-elle le manager ?",
        answer: "Non, l'IA ne remplace pas le manager. Elle l'outille. Claovia analyse les remontées terrain et génère des recommandations, mais c'est le manager qui décide et agit. L'objectif est de lui faire gagner du temps et de lui donner les bons outils au bon moment."
    },
];

// =====================================================
// FAQ SECTION
// =====================================================

export function FAQSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-cream">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-head font-bold text-deep mb-4">
                        Questions Fréquentes
                    </h2>
                    <p className="text-gray-600 max-w-lg mx-auto">
                        Tout ce que vous devez savoir sur Claovia et les REX
                    </p>
                </motion.div>

                <div className="space-y-3">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`faq-item ${expandedIndex === index ? "expanded" : ""}`}
                        >
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="faq-header w-full touch-target"
                                aria-expanded={expandedIndex === index}
                            >
                                <span className="font-bold text-deep text-left pr-4">{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expandedIndex === index ? "bg-accent text-white" : "bg-gray-100 text-gray-500"
                                    }`}>
                                    {expandedIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="faq-content">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">Vous avez d'autres questions ?</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-accent font-bold hover:text-deep transition-colors"
                    >
                        Contactez-nous
                        <ChevronDown className="rotate-[-90deg]" size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

// =====================================================
// TESTIMONIALS SECTION
// =====================================================

const testimonials = [
    {
        quote: "Le REX a transformé nos points d'équipe. On a enfin des conversations productives.",
        author: "Marc D.",
        role: "Manager Commercial",
        company: "SaaS B2B",
        initials: "MD",
    },
    {
        quote: "J'ai pu anticiper le départ d'un talent clé grâce aux signaux détectés par Claovia.",
        author: "Julie T.",
        role: "Responsable RH",
        company: "Startup FinTech",
        initials: "JT",
    },
    {
        quote: "Les mails pré-rédigés me font gagner un temps fou. Je peux agir immédiatement.",
        author: "Thomas R.",
        role: "Chef de Projet",
        company: "ESN",
        initials: "TR",
    },
];

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-head font-bold text-deep mb-4">
                        Ce qu'ils disent de Claovia
                    </h2>
                    <p className="text-gray-600">
                        Des managers et RH qui ont adopté les REX
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="relative h-[200px] md:h-[180px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <div className="bg-cream rounded-[28px] p-8 h-full flex flex-col justify-between">
                                <blockquote className="text-lg md:text-xl text-deep font-medium leading-relaxed">
                                    "{testimonials[activeIndex].quote}"
                                </blockquote>
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-deep flex items-center justify-center text-white text-sm font-bold">
                                        {testimonials[activeIndex].initials}
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-deep">
                                            {testimonials[activeIndex].author}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all touch-target ${index === activeIndex
                                    ? "bg-accent w-6"
                                    : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Voir témoignage ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
