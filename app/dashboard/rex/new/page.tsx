"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  UserPlus,
  Send,
  Clock,
  MessageSquare,
  X,
} from "lucide-react";
import Link from "next/link";

export default function NewRexPage() {
  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [currentEmail, setCurrentEmail] = useState("");
  const [rexName, setRexName] = useState("");
  const [duration, setDuration] = useState("14");

  const addCollaborator = () => {
    if (currentEmail && currentEmail.includes("@")) {
      setCollaborators([...collaborators, currentEmail]);
      setCurrentEmail("");
    }
  };

  const removeCollaborator = (email: string) => {
    setCollaborators(collaborators.filter((c) => c !== email));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API call to create REX and send invitations
    console.log("Creating REX:", { rexName, collaborators, duration });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-head font-bold text-deep mb-2">
            Créer un nouveau REX
          </h1>
          <p className="text-gray-600 mb-8">
            Lancez une campagne de retour d'expérience avec vos collaborateurs
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* REX Name */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="text-accent" size={24} />
                <h2 className="text-xl font-head font-semibold text-deep">
                  Informations générales
                </h2>
              </div>

              <div>
                <label className="block text-sm font-semibold text-deep mb-2">
                  Nom de la campagne
                </label>
                <input
                  type="text"
                  value={rexName}
                  onChange={(e) => setRexName(e.target.value)}
                  placeholder="Ex: REX Trimestriel Q1 2024"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  Ce nom n'est visible que par vous, pour organiser vos
                  campagnes
                </p>
              </div>
            </div>

            {/* Duration */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="text-accent" size={24} />
                <h2 className="text-xl font-head font-semibold text-deep">
                  Durée de la campagne
                </h2>
              </div>

              <div>
                <label className="block text-sm font-semibold text-deep mb-2">
                  Nombre de jours
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                >
                  <option value="7">7 jours</option>
                  <option value="14">14 jours (recommandé)</option>
                  <option value="21">21 jours</option>
                  <option value="30">30 jours</option>
                </select>
                <p className="text-xs text-gray-500 mt-2">
                  Le lien REX sera accessible pendant cette durée
                </p>
              </div>
            </div>

            {/* Collaborators */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <UserPlus className="text-accent" size={24} />
                <h2 className="text-xl font-head font-semibold text-deep">
                  Collaborateurs
                </h2>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-deep mb-2">
                  Ajouter des collaborateurs
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={currentEmail}
                    onChange={(e) => setCurrentEmail(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addCollaborator();
                      }
                    }}
                    placeholder="email@example.com"
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                  <button
                    type="button"
                    onClick={addCollaborator}
                    className="px-6 py-3 bg-deep text-white rounded-xl hover:bg-accent transition-colors font-semibold"
                  >
                    Ajouter
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Appuyez sur Entrée ou cliquez sur Ajouter
                </p>
              </div>

              {/* Collaborators List */}
              {collaborators.length > 0 && (
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-deep mb-3">
                    {collaborators.length} collaborateur
                    {collaborators.length > 1 ? "s" : ""} ajouté
                    {collaborators.length > 1 ? "s" : ""}
                  </div>
                  <div className="space-y-2">
                    {collaborators.map((email, index) => (
                      <motion.div
                        key={email}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center justify-between p-3 bg-light/30 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-deep/20 flex items-center justify-center text-deep font-head font-bold text-sm">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{email}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeCollaborator(email)}
                          className="w-8 h-8 rounded-full hover:bg-red-50 flex items-center justify-center transition-colors"
                        >
                          <X size={18} className="text-gray-400 hover:text-red-600" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {collaborators.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  <UserPlus size={48} className="mx-auto mb-3 opacity-30" />
                  <p>Aucun collaborateur ajouté</p>
                </div>
              )}
            </div>

            {/* Preview */}
            {collaborators.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-accent/5 to-deep/5 rounded-2xl p-8 border border-accent/20"
              >
                <h3 className="text-lg font-head font-semibold text-deep mb-4">
                  Ce qui va se passer :
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-deep">
                        Envoi des invitations
                      </div>
                      <div className="text-sm text-gray-600">
                        Chaque collaborateur recevra un email avec un lien
                        unique vers Clao
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-deep">
                        Collecte des REX
                      </div>
                      <div className="text-sm text-gray-600">
                        Clao guide chaque collaborateur dans une conversation
                        naturelle (5-10 min)
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-deep">
                        Analyse et notification
                      </div>
                      <div className="text-sm text-gray-600">
                        Vous recevrez une analyse complète avec plan d'action
                        pour chaque REX
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            )}

            {/* Submit */}
            <div className="flex gap-4">
              <Link
                href="/dashboard"
                className="flex-1 px-8 py-4 bg-white border border-gray-200 rounded-xl font-semibold hover:border-accent hover:text-accent transition-all text-center"
              >
                Annuler
              </Link>
              <button
                type="submit"
                disabled={collaborators.length === 0 || !rexName}
                className="flex-1 px-8 py-4 bg-deep text-white rounded-xl font-semibold hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send size={20} />
                <span>
                  Lancer la campagne ({collaborators.length} invitation
                  {collaborators.length > 1 ? "s" : ""})
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
