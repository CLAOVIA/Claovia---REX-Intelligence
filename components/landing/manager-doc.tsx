"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Search,
  Zap,
  Mail,
  ChevronRight,
  Loader2,
} from "lucide-react";

export function ManagerDoc() {
  const [showDoc, setShowDoc] = useState(false);
  const [docStep, setDocStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowDoc(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showDoc) {
      const t1 = setTimeout(() => setDocStep(1), 500);
      const t2 = setTimeout(() => setDocStep(2), 1500);
      const t3 = setTimeout(() => setDocStep(3), 2500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [showDoc]);

  return (
    <div className="bg-white rounded-[28px] border-2 border-deep/10 h-[420px] shadow-xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-deep text-white p-4 flex justify-between items-center">
        <span className="text-xs font-bold uppercase tracking-wider">
          Sortie : Manager
        </span>
        <FileText size={16} />
      </div>

      <AnimatePresence mode="wait">
        {!showDoc ? (
          <motion.div
            key="waiting"
            exit={{ opacity: 0 }}
            className="flex-1 flex items-center justify-center flex-col gap-3 text-gray-400"
          >
            <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center">
              <Loader2 className="animate-spin" size={24} />
            </div>
            <span className="text-sm">Traitement du REX...</span>
          </motion.div>
        ) : (
          <motion.div
            key="doc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 p-5 space-y-5 overflow-y-auto"
          >
            {/* Analyse */}
            <AnimatePresence>
              {docStep >= 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase mb-2">
                    <Search size={14} /> Analyse
                  </div>
                  <div className="text-sm text-gray-800">
                    <span className="font-bold">Surcharge critique</span> détectée sur le Projet Alpha.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Recommandation */}
            <AnimatePresence>
              {docStep >= 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="flex items-center gap-2 text-deep font-bold text-xs uppercase mb-2">
                    <Zap size={14} /> Accompagnement Requis
                  </div>
                  <div className="text-sm text-gray-600 bg-light p-3 rounded-lg">
                    Planifier un point de décharge sous 48h.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Kit Manager */}
            <AnimatePresence>
              {docStep >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-2"
                >
                  <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-accent group transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-deep/10 p-2 rounded text-deep group-hover:bg-accent group-hover:text-white transition-colors">
                        <Mail size={16} />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-deep">Invitation 1:1</div>
                        <div className="text-[10px] text-gray-500">Kit d'accompagnement prêt</div>
                      </div>
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-gray-300 group-hover:text-accent transition-colors"
                    />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
