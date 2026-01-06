"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Lightbulb,
  AlertTriangle,
  Mail,
  FileCheck,
  ChevronRight,
} from "lucide-react";

export function ManagerDoc() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 6500); // Analyse
    const timer2 = setTimeout(() => setStep(2), 8000); // Recommandation
    const timer3 = setTimeout(() => setStep(3), 9500); // Kit Action
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="w-full h-full bg-white rounded-3xl shadow-xl border border-black/5 flex flex-col overflow-hidden relative">
      {/* Header Doc */}
      <div className="bg-deep p-4 text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FileText size={18} />
          <span className="font-head font-semibold text-sm">
            REX Manager - Synthèse
          </span>
        </div>
        <div className="text-xs bg-white/10 px-2 py-1 rounded">
          Confidentiel
        </div>
      </div>

      <div className="p-6 flex flex-col gap-6 overflow-y-auto">
        {/* 1. Analyse */}
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2 text-deep text-xs font-bold uppercase tracking-wider">
              <Search size={14} /> Analyse IA
            </div>
            <div className="text-sm text-gray-600 bg-light/50 p-3 rounded-lg border-l-4 border-accent">
              Les réponses indiquent une{" "}
              <span className="font-bold text-deep">surcharge cognitive</span>.
              Le sentiment global est en baisse comparé au mois dernier.
            </div>
          </motion.div>
        )}

        {/* 2. Recommandation */}
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2 text-deep text-xs font-bold uppercase tracking-wider">
              <Lightbulb size={14} /> Recommandation
            </div>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 flex gap-3">
              <AlertTriangle
                size={20}
                className="text-orange-500 shrink-0 mt-1"
              />
              <div className="text-sm text-gray-700">
                <strong>Priorité Haute :</strong> Organiser un point de décharge
                sous 48h.
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. Kit Action */}
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-auto pt-4 border-t border-gray-100"
          >
            <div className="text-xs font-bold text-deep mb-3 uppercase">
              Kit Manager (Prêt à l'emploi)
            </div>
            <div className="grid grid-cols-1 gap-2">
              <button className="flex items-center justify-between w-full p-3 rounded-xl bg-white border border-gray-200 hover:border-accent hover:shadow-md transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Mail size={16} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-deep">
                      Invitation Réunion
                    </div>
                    <div className="text-xs text-gray-500">
                      Brouillon rédigé
                    </div>
                  </div>
                </div>
                <ChevronRight
                  size={16}
                  className="text-gray-400 group-hover:text-accent"
                />
              </button>

              <button className="flex items-center justify-between w-full p-3 rounded-xl bg-white border border-gray-200 hover:border-accent hover:shadow-md transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <FileCheck size={16} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-deep">
                      Guide d'entretien
                    </div>
                    <div className="text-xs text-gray-500">
                      Script & Questions
                    </div>
                  </div>
                </div>
                <ChevronRight
                  size={16}
                  className="text-gray-400 group-hover:text-accent"
                />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
