"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Zap,
  Eye,
  Shield,
  AlertTriangle,
  MessageSquare,
  FileText,
  Play,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { DemoSection } from "@/components/landing/demo-section";
import { ScrollAnimation } from "@/components/landing/scroll-animation";
import {
  TrustBadges,
  SocialProofSection,
  FAQSection,
  TestimonialsSection
} from "@/components/landing/social-proof";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream font-sans text-deep selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />

      {/* =====================================================
          HERO SECTION with Animated Gradient
      ===================================================== */}
      <section className="pt-32 pb-12 px-4 animated-gradient-bg relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-deep/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-accent/20 px-4 py-2 rounded-full mb-8 shadow-sm"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">
              Intelligence Managériale par l'IA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-head font-bold text-deep mb-6 leading-tight"
          >
            1 Retour d'Expérience. <br />
            <span className="text-gradient bg-gradient-to-r from-accent to-deep bg-clip-text">1 Plan d'Accompagnement.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Arrêtez de collecter de la donnée pour faire des stats. <br />
            Collectez-la pour <strong className="text-deep">accompagner maintenant</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-600 mb-10"
          >
            <span className="flex items-center gap-2">
              <Check size={16} className="text-accent" /> Sans configuration
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-accent" /> Résultats immédiats
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-accent" /> ROI mesurable
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-deep text-white px-8 py-4 rounded-xl font-bold hover:bg-accent transition-all shadow-lg hover:shadow-xl hover:shadow-accent/20 touch-target"
            >
              <Play size={20} />
              Lancer 1 Retour d'Expérience
            </a>
            <Link
              href="/fonctionnalites"
              className="inline-flex items-center gap-2 bg-white text-deep border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:border-accent hover:text-accent transition-all touch-target"
            >
              Découvrir les fonctionnalités
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <TrustBadges />
        </div>
      </section>

      {/* =====================================================
          SOCIAL PROOF - Stats & Quick Testimonial
      ===================================================== */}
      <SocialProofSection />

      {/* =====================================================
          SCROLL ANIMATION - Message to Solution
      ===================================================== */}
      <ScrollAnimation />

      {/* =====================================================
          DEMO SECTION - L'histoire de Marie
      ===================================================== */}
      <DemoSection />

      {/* =====================================================
          SECTION "LE COUT DU TURNOVER"
      ===================================================== */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wider mb-4">
              <AlertTriangle size={16} />
              Le Coût Caché
            </div>
            <h2 className="text-3xl md:text-4xl font-head font-bold text-deep mb-4">
              Chaque départ vous coûte une fortune
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              80% des départs sont liés à un problème de management. La solution n'est pas de former les managers, c'est de les outiller.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                value: "150%",
                label: "du salaire annuel",
                description: "Coût moyen de remplacement d'un collaborateur",
                color: "text-red-600",
              },
              {
                value: "45j",
                label: "en moyenne",
                description: "Temps pour détecter un désengagement",
                color: "text-orange-600",
              },
              {
                value: "6 mois",
                label: "de productivité",
                description: "Perdus avant qu'un nouveau soit opérationnel",
                color: "text-amber-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-cream rounded-[28px] hover:shadow-lg transition-shadow"
              >
                <div className={`text-5xl font-head font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-deep text-white rounded-[28px] p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl font-head font-bold mb-4">
              Et si vous détectiez les signaux faibles <span className="text-accent">en temps réel</span> ?
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Claovia transforme chaque remontée terrain en plan d'action managérial. Avant que le collaborateur ne parte.
            </p>
            <a
              href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
              target="_blank"
              className="inline-flex items-center gap-2 bg-accent hover:bg-white hover:text-deep text-white px-6 py-3 rounded-xl font-bold transition-all touch-target"
            >
              Voir l'outil en action <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION "COMMENT CA MARCHE" - 3 Étapes
      ===================================================== */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-head font-bold text-deep mb-4">
              Du Retour d'Expérience à l'Action en 3 étapes
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Plus besoin d'attendre l'entretien annuel. L'IA capture, analyse et transforme immédiatement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                step: "01",
                icon: MessageSquare,
                title: "Écoute IA",
                subtitle: "Le collaborateur parle",
                description: "Clao, notre coach IA, mène une vraie conversation avec le collaborateur. Anonyme ou identifié, au choix.",
                color: "bg-light",
              },
              {
                step: "02",
                icon: Zap,
                title: "Analyse",
                subtitle: "L'IA synthétise",
                description: "6 thématiques analysées : Relation Manager, Charge, Objectifs, Motivation, Développement, Équipe.",
                color: "bg-accent/10",
              },
              {
                step: "03",
                icon: FileText,
                title: "Action Manager",
                subtitle: "Le manager agit",
                description: "Un plan d'accompagnement complet : recommandations, mails pré-rédigés, guides d'entretien.",
                color: "bg-deep/10",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <div className={`${step.color} rounded-[28px] p-8 h-full transition-all group-hover:shadow-lg`}>
                  <div className="text-accent font-head font-bold text-5xl opacity-20 mb-4">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-accent mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <step.icon size={24} />
                  </div>
                  <h3 className="font-head font-bold text-xl text-deep mb-1">{step.title}</h3>
                  <p className="text-sm text-accent font-semibold mb-3">{step.subtitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CE QUE VOUS GAGNEZ
      ===================================================== */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-head font-bold text-deep text-center mb-12"
          >
            Ce que vous gagnez tout de suite
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Visibilité",
                description: "Vous savez instantanément qui a besoin d'accompagnement, sans attendre l'entretien annuel.",
              },
              {
                icon: Zap,
                title: "Réactivité",
                description: "L'IA rédige les invitations et les guides d'entretien. Le manager n'a plus qu'à valider.",
              },
              {
                icon: Shield,
                title: "Sécurité",
                description: "L'anonymat protège le retour d'expérience. Les problèmes réels remontent enfin.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-cream rounded-[20px] hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-accent mb-4 shadow-sm">
                  <feature.icon size={20} />
                </div>
                <h3 className="font-head font-bold text-lg mb-2 text-deep">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS SECTION
      ===================================================== */}
      <TestimonialsSection />

      {/* =====================================================
          FAQ SECTION
      ===================================================== */}
      <FAQSection />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="py-20 bg-deep text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-head font-bold mb-6">
            Prêt à clarifier votre management ?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Pas de démo commerciale de 45 minutes. Testez le produit maintenant.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
              target="_blank"
              className="inline-flex items-center gap-2 bg-accent hover:bg-white hover:text-deep text-white px-8 py-4 rounded-xl font-bold transition-all text-lg shadow-lg shadow-accent/20 touch-target"
            >
              Lancer mon premier REX <ArrowRight size={20} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all touch-target"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="py-12 px-6 bg-deep border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-head font-bold text-xl text-white">Claovia</div>
          <div className="flex gap-6">
            <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">Accueil</Link>
            <Link href="/fonctionnalites" className="text-white/60 hover:text-white transition-colors text-sm">Fonctionnalités</Link>
            <Link href="/mon-histoire" className="text-white/60 hover:text-white transition-colors text-sm">Mon Histoire</Link>
            <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link>
          </div>
          <p className="text-white/40 text-sm">© 2025 Claovia. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
