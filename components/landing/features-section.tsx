"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Brain,
  FileText,
  Send,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Conversation IA Guidée",
    description:
      "Clao, votre coach IA, mène l'entretien REX avec empathie et structure. Chaque collaborateur s'exprime librement.",
    highlight: "10 min chrono",
  },
  {
    icon: Brain,
    title: "Analyse Intelligente",
    description:
      "L'IA analyse 6 thématiques clés (Relation, Charge, Objectifs, Motivation, Développement, Équipe) et détecte les signaux faibles.",
    highlight: "IA GPT-4",
  },
  {
    icon: FileText,
    title: "Plan d'Action Personnalisé",
    description:
      "Chaque manager reçoit un plan d'action concret : cette semaine, ce mois, ce trimestre. Priorisé et actionnable.",
    highlight: "100% sur-mesure",
  },
  {
    icon: Send,
    title: "Kit Manager Prêt à l'Emploi",
    description:
      "Emails pré-rédigés, guide de réunion, script d'entretien, invitations calendrier. Tout est prêt à copier-coller.",
    highlight: "Gain de 3h",
  },
  {
    icon: Shield,
    title: "Confidentialité Garantie",
    description:
      "Les mots exacts du collaborateur ne sont jamais cités. Tout est reformulé. Mode anonyme disponible.",
    highlight: "100% RGPD",
  },
  {
    icon: Zap,
    title: "Envoi Automatique",
    description:
      "Dès la fin du REX, le manager reçoit son plan + le collaborateur reçoit une confirmation. Zéro friction.",
    highlight: "Temps réel",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-cream relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Comment ça marche
            </span>
          </div>
          <h2 className="text-5xl font-head font-bold text-deep mb-6">
            De la parole à l'action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ne laissez plus le feedback dans un fichier Excel. Transformez chaque
            retour en plan d'accompagnement concret.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-accent/30 hover:shadow-2xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="text-accent" size={28} />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-xl font-head font-bold text-deep">
                  {feature.title}
                </h3>
                <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  {feature.highlight}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
