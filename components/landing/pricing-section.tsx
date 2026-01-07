"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Gratuit",
    period: "Pour toujours",
    description: "Parfait pour tester l'impact sur une équipe",
    features: [
      "5 REX par mois",
      "1 manager",
      "Analyses IA complètes",
      "Kit Manager inclus",
      "Support email",
    ],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Growth",
    price: "99€",
    period: "par mois",
    description: "Pour les équipes qui veulent scaler",
    features: [
      "REX illimités",
      "Jusqu'à 10 managers",
      "Analytics avancés",
      "Dashboard équipe",
      "Intégrations (Slack, Teams)",
      "Support prioritaire",
      "Onboarding dédié",
    ],
    cta: "Démarrer l'essai 14 jours",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "Volume",
    description: "Pour les organisations exigeantes",
    features: [
      "Tout de Growth +",
      "Managers illimités",
      "SSO & SAML",
      "API complète",
      "Déploiement on-premise possible",
      "SLA garanti 99.9%",
      "Customer Success Manager dédié",
      "Formations manager incluses",
    ],
    cta: "Contacter l'équipe",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-light rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-deep/10 rounded-full mb-6">
            <span className="text-deep font-semibold text-sm uppercase tracking-wider">
              Tarifs
            </span>
          </div>
          <h2 className="text-5xl font-head font-bold text-deep mb-6">
            Un plan pour chaque ambition
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Commencez gratuitement, scalez quand vous êtes prêt. Aucune carte
            requise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 border-2 transition-all ${
                plan.popular
                  ? "border-accent bg-gradient-to-br from-accent/5 to-accent/10 shadow-2xl"
                  : "border-gray-200 bg-white hover:border-accent/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles size={14} /> Plus populaire
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-head font-bold text-deep mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-head font-bold text-deep">
                    {plan.price}
                  </span>
                  {plan.period !== "Volume" && (
                    <span className="text-gray-500">/ {plan.period}</span>
                  )}
                </div>
                {plan.period === "Volume" && (
                  <p className="text-gray-500 text-sm mt-1">{plan.period}</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="text-accent" size={14} />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sign-up"
                className={`block w-full text-center py-4 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? "bg-deep text-white hover:bg-accent shadow-lg shadow-deep/20"
                    : "bg-white border-2 border-deep text-deep hover:bg-deep hover:text-white"
                }`}
              >
                {plan.cta}
              </Link>
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
            Besoin d'une démo personnalisée ?{" "}
            <Link href="/contact" className="text-accent font-semibold hover:underline">
              Contactez notre équipe
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
