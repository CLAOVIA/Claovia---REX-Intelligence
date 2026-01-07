"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Comment fonctionne la confidentialité des REX ?",
    answer:
      "Les mots exacts du collaborateur ne sont jamais cités dans le document manager. Tout est reformulé par l'IA pour préserver l'expression libre. Un mode anonyme est également disponible pour les situations sensibles.",
  },
  {
    question: "Combien de temps prend un REX pour le collaborateur ?",
    answer:
      "En moyenne 10-15 minutes. Clao, notre IA conversationnelle, guide naturellement l'entretien et s'adapte aux réponses. Plus besoin de questionnaires à rallonge.",
  },
  {
    question: "Que se passe-t-il après qu'un collaborateur complète son REX ?",
    answer:
      "L'IA analyse les réponses et génère instantanément deux documents : une synthèse pour le collaborateur (confirmation) et un plan d'accompagnement complet pour le manager (analyse, recommandations, kit d'action). Les emails sont envoyés automatiquement.",
  },
  {
    question: "Le kit manager est-il vraiment prêt à l'emploi ?",
    answer:
      "Oui, 100%. Vous recevez des emails pré-rédigés, un guide de réunion étape par étape, des scripts d'entretien, et même des invitations calendrier. Tout est personnalisé au contexte du collaborateur. Copier-coller suffit.",
  },
  {
    question: "Claovia remplace-t-il les entretiens managériaux ?",
    answer:
      "Non, Claovia prépare et structure les entretiens. L'IA détecte les signaux faibles et vous donne les bons outils pour mener des échanges de qualité. L'humain reste au centre.",
  },
  {
    question: "Comment intégrer Claovia dans nos process RH existants ?",
    answer:
      "Claovia s'intègre facilement : envoyez un lien REX par email, Slack ou Teams. Vous pouvez planifier des campagnes trimestrielles ou l'utiliser à la demande. Les données s'exportent en CSV et nous avons des intégrations avec les principaux SIRH.",
  },
  {
    question: "Quelle est la différence avec une enquête engagement classique ?",
    answer:
      "Les enquêtes donnent des scores globaux sans plan d'action. Claovia génère un accompagnement personnalisé par collaborateur, exploitable immédiatement par le manager. C'est opérationnel, pas théorique.",
  },
  {
    question: "Les données sont-elles stockées en France (RGPD) ?",
    answer:
      "Oui, toutes les données sont hébergées sur des serveurs en France (AWS eu-west-3 ou OVH). Nous sommes 100% conformes RGPD avec DPA disponible sur demande.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-deep/10 rounded-full mb-6">
            <span className="text-deep font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-5xl font-head font-bold text-deep mb-6">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur Claovia
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-deep pr-8">
                  {faq.question}
                </span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="text-accent" size={18} />
                  ) : (
                    <Plus className="text-accent" size={18} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            Une autre question ?{" "}
            <a
              href="mailto:contact@claovia.com"
              className="text-accent font-semibold hover:underline"
            >
              Contactez-nous
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
