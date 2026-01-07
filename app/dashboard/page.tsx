"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  FileText,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";

// Mock data - sera remplacé par des vraies données Prisma
const stats = [
  {
    label: "REX en cours",
    value: "12",
    change: "+3 cette semaine",
    icon: Clock,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    label: "Taux de réponse",
    value: "87%",
    change: "+12% vs mois dernier",
    icon: TrendingUp,
    color: "text-accent",
    bg: "bg-light",
  },
  {
    label: "Actions prioritaires",
    value: "5",
    change: "À traiter sous 48h",
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    label: "Collaborateurs",
    value: "45",
    change: "3 équipes",
    icon: Users,
    color: "text-deep",
    bg: "bg-gray-50",
  },
];

const recentRex = [
  {
    id: "rex-001",
    collaborator: "Sophie Martin",
    team: "Produit",
    status: "priority",
    statusLabel: "Priorité Haute",
    sentiment: "negative",
    date: "Il y a 2h",
    preview: "Surcharge cognitive détectée - Projet Alpha",
  },
  {
    id: "rex-002",
    collaborator: "Thomas Dubois",
    team: "Engineering",
    status: "completed",
    statusLabel: "Traité",
    sentiment: "positive",
    date: "Hier",
    preview: "Bonne dynamique d'équipe, besoin de formation",
  },
  {
    id: "rex-003",
    collaborator: "Marie Leclerc",
    team: "Marketing",
    status: "in_progress",
    statusLabel: "En cours",
    sentiment: "neutral",
    date: "Il y a 1 jour",
    preview: "Feedback sur les outils de communication",
  },
];

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-deep" />
                <div className="w-8 h-8 rounded-full border-2 border-accent" />
                <div className="w-8 h-8 rounded-full border-2 border-deep" />
              </div>
              <span className="text-2xl font-head font-bold text-deep">
                Claovia
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-deep">Jean Dupont</span>
                <span className="text-gray-400 mx-2">•</span>
                <span>Manager</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-deep/20 flex items-center justify-center text-deep font-head font-bold">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-head font-bold text-deep mb-2">
            Tableau de bord
          </h1>
          <p className="text-gray-600">
            Vue d'ensemble de vos REX et actions managériales
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-accent/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}
                >
                  <stat.icon className={stat.color} size={24} />
                </div>
              </div>
              <div className="text-3xl font-head font-bold text-deep mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-700 mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Rechercher un REX, un collaborateur..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-accent hover:text-accent transition-colors">
            <Filter size={20} />
            <span className="font-semibold">Filtres</span>
          </button>
          <Link
            href="/dashboard/rex/new"
            className="flex items-center gap-2 px-6 py-3 bg-deep text-white rounded-xl hover:bg-accent transition-colors font-semibold"
          >
            <Plus size={20} />
            <span>Nouveau REX</span>
          </Link>
        </div>

        {/* REX List */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-head font-semibold text-deep">
              REX récents
            </h2>
          </div>

          <div className="divide-y divide-gray-100">
            {recentRex.map((rex, index) => (
              <motion.div
                key={rex.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-deep/20 flex items-center justify-center text-deep font-head font-bold text-sm">
                        {rex.collaborator
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-deep">
                          {rex.collaborator}
                        </div>
                        <div className="text-sm text-gray-500">{rex.team}</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-3">{rex.preview}</p>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{rex.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span
                        className={`px-2 py-1 rounded-full font-semibold ${
                          rex.status === "priority"
                            ? "bg-red-50 text-red-600"
                            : rex.status === "completed"
                            ? "bg-green-50 text-green-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {rex.statusLabel}
                      </span>
                    </div>
                  </div>

                  <div className="ml-4">
                    <Link
                      href={`/dashboard/rex/${rex.id}`}
                      className="px-4 py-2 bg-deep text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-sm"
                    >
                      Voir le détail
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <button className="text-accent font-semibold hover:underline">
              Voir tous les REX →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
