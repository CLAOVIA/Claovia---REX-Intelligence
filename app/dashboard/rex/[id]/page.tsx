"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  Mail,
  FileCheck,
  AlertTriangle,
  Brain,
  Lightbulb,
  MessageSquare,
  Calendar,
  User,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

// Mock data - sera remplacé par des vraies données Prisma
const rexData = {
  id: "rex-001",
  collaborator: {
    name: "Sophie Martin",
    email: "sophie.martin@company.com",
    team: "Produit",
    role: "Product Manager",
  },
  date: "2024-01-15T14:30:00",
  status: "priority",
  sentiment: "negative",
  dataQuality: "excellent",
  analysis: {
    summary:
      "Les réponses de Sophie indiquent une surcharge cognitive importante sur le projet Alpha. Le sentiment global est en baisse comparé au trimestre dernier (-15%). Des signaux d'alerte concernant l'équilibre vie pro/perso ont été détectés.",
    keyPoints: [
      "Surcharge de travail sur le projet Alpha (mention récurrente)",
      "Difficulté à déléguer certaines tâches",
      "Frustration liée aux changements de priorités fréquents",
      "Besoin de clarification sur les objectifs à moyen terme",
    ],
    riskLevel: "high",
    riskIndicators: [
      "Mention de stress 3 fois dans les réponses",
      "Score d'engagement en baisse de 15%",
      "Temps de travail hebdomadaire estimé >50h",
    ],
  },
  recommendations: [
    {
      priority: "high",
      title: "Organiser un point de décharge sous 48h",
      description:
        "Planifier une réunion 1:1 pour identifier les tâches qui peuvent être redistribuées ou reportées.",
      actions: [
        "Identifier 2-3 tâches à déléguer immédiatement",
        "Revoir les priorités du projet Alpha",
        "Établir des limites claires sur les horaires de travail",
      ],
    },
    {
      priority: "medium",
      title: "Clarifier la roadmap produit",
      description:
        "Organiser une session de planification pour réduire l'incertitude et les changements de priorités.",
      actions: [
        "Présenter la vision à 3 mois",
        "Définir les critères de priorisation",
        "Mettre en place un processus de validation des changements",
      ],
    },
  ],
  managerKit: [
    {
      type: "email",
      title: "Invitation réunion 1:1",
      status: "ready",
      preview:
        "Bonjour Sophie,\n\nJ'aimerais qu'on prenne un moment ensemble pour discuter de ta charge actuelle...",
    },
    {
      type: "guide",
      title: "Guide d'entretien",
      status: "ready",
      preview: "Questions à aborder:\n1. Comment te sens-tu par rapport à...",
    },
  ],
  rawResponses: [
    {
      question: "Comment évalues-tu ta charge de travail actuelle ?",
      answer:
        "Honnêtement, c'est très intense. Le projet Alpha monopolise beaucoup de temps et les priorités changent souvent.",
    },
    {
      question: "Qu'est-ce qui te motive le plus dans ton travail ?",
      answer:
        "J'adore créer de nouveaux produits et travailler avec l'équipe, mais j'ai moins de temps pour ça en ce moment.",
    },
    {
      question: "As-tu les ressources nécessaires pour atteindre tes objectifs ?",
      answer:
        "Globalement oui, mais je manque de clarté sur les priorités à moyen terme.",
    },
  ],
};

export default function RexDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <ArrowLeft size={20} className="text-gray-600" />
              </Link>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-deep" />
                <div className="w-8 h-8 rounded-full border-2 border-accent" />
                <div className="w-8 h-8 rounded-full border-2 border-deep" />
              </div>
              <span className="text-2xl font-head font-bold text-deep">
                Claovia
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-accent hover:text-accent transition-colors">
                <Download size={18} />
                <span className="font-semibold text-sm">Export PDF</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Header Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 mb-6"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-deep/20 flex items-center justify-center text-deep font-head font-bold text-xl">
                {rexData.collaborator.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h1 className="text-2xl font-head font-bold text-deep mb-1">
                  {rexData.collaborator.name}
                </h1>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Briefcase size={16} />
                    <span>{rexData.collaborator.role}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{rexData.collaborator.team}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>
                      {new Date(rexData.date).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                PRIORITÉ HAUTE
              </div>
              <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-semibold">
                Qualité: {rexData.dataQuality}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Analysis Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 mb-6"
        >
          <div className="flex items-center gap-2 text-deep mb-6">
            <Brain size={24} />
            <h2 className="text-2xl font-head font-bold">Analyse IA</h2>
          </div>

          <div className="bg-light/50 p-6 rounded-xl mb-6 border-l-4 border-accent">
            <p className="text-gray-700 leading-relaxed">
              {rexData.analysis.summary}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-deep mb-3">Points clés :</h3>
            <ul className="space-y-2">
              {rexData.analysis.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <div className="flex items-center gap-2 text-red-600 font-semibold mb-3">
              <AlertTriangle size={20} />
              <span>Indicateurs de risque</span>
            </div>
            <ul className="space-y-2">
              {rexData.analysis.riskIndicators.map((indicator, index) => (
                <li key={index} className="text-sm text-gray-700">
                  • {indicator}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Recommendations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 mb-6"
        >
          <div className="flex items-center gap-2 text-deep mb-6">
            <Lightbulb size={24} />
            <h2 className="text-2xl font-head font-bold">Recommandations</h2>
          </div>

          <div className="space-y-4">
            {rexData.recommendations.map((rec, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border-2 ${
                  rec.priority === "high"
                    ? "bg-orange-50 border-orange-200"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      rec.priority === "high"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {rec.priority === "high"
                      ? "PRIORITÉ HAUTE"
                      : "PRIORITÉ MOYENNE"}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-deep mb-2">
                  {rec.title}
                </h3>
                <p className="text-gray-700 mb-4">{rec.description}</p>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm font-semibold text-deep mb-2">
                    Actions concrètes :
                  </div>
                  <ul className="space-y-2">
                    {rec.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-accent text-xs font-bold">
                            {idx + 1}
                          </span>
                        </div>
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Manager Kit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 mb-6"
        >
          <div className="flex items-center gap-2 text-deep mb-6">
            <FileCheck size={24} />
            <h2 className="text-2xl font-head font-bold">
              Kit Manager (Prêt à l'emploi)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rexData.managerKit.map((item, index) => (
              <button
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-accent hover:shadow-lg transition-all text-left group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  {item.type === "email" ? (
                    <Mail className="text-accent" size={24} />
                  ) : (
                    <FileCheck className="text-accent" size={24} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-deep">
                      {item.title}
                    </span>
                    <span className="px-2 py-0.5 bg-green-50 text-green-600 text-xs font-semibold rounded">
                      {item.status === "ready" ? "Prêt" : ""}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.preview}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Raw Responses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 border border-gray-200"
        >
          <div className="flex items-center gap-2 text-deep mb-6">
            <MessageSquare size={24} />
            <h2 className="text-2xl font-head font-bold">
              Réponses brutes du collaborateur
            </h2>
          </div>

          <div className="space-y-6">
            {rexData.rawResponses.map((response, index) => (
              <div key={index} className="border-l-4 border-light pl-6">
                <div className="font-semibold text-deep mb-2">
                  {response.question}
                </div>
                <div className="text-gray-700 italic">
                  "{response.answer}"
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
