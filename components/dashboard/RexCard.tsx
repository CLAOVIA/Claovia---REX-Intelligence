"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    Search,
    Zap,
    ClipboardList,
    Target,
    Mail,
    MessageSquare,
    StickyNote,
    Calendar,
    ChevronDown,
    Copy,
    CheckCircle2,
    Users,
    Briefcase,
    Heart,
    TrendingUp,
} from "lucide-react";

// Icons map for dynamic themes
const THEME_ICONS: Record<string, any> = {
    "Relation avec le Manager": Users,
    "Charge de Travail": Target,
    "Objectifs & Clarté": Briefcase,
    "Motivation": Heart,
    "Développement": TrendingUp,
    "Équipe & Environnement": MessageSquare,
};

interface RexCardProps {
    data: {
        collaborateur: {
            prenom: string;
            nom?: string;
            metier: string;
            date: string;
            // K-Anonymity flag?
        };
        rex: {
            synthese: string;
            recommandation: string;
            thematiques: Array<{
                name: string;
                analyse: string;
                // Icon logic handled internally or passed via name
            }>;
            planAction: {
                aFaireMaintenant: string[];
                aPlanifier: string[];
            };
            kit?: {
                email?: { objet: string; corps: string };
                message?: { titre: string; contenu: string };
                guideReunion?: { titre: string; duree: string; sections: Array<{ titre: string; contenu?: string; questions?: string[] }> };
                note?: { titre: string; contenu: string };
                rdv?: { objet: string; duree: string; lieu: string; description: string };
            };
        };
    };
    className?: string;
}

export function RexCard({ data, className = "" }: RexCardProps) {
    const [expandedTheme, setExpandedTheme] = useState<number | null>(null);
    const [expandedKit, setExpandedKit] = useState<string | null>(null);
    const [copiedItem, setCopiedItem] = useState<string | null>(null);

    const copyToClipboard = (text: string, itemId: string) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(itemId);
        setTimeout(() => setCopiedItem(null), 2000);
    };

    const { collaborateur, rex } = data;

    return (
        <div className={`bg-white rounded-[28px] border-2 border-deep/10 shadow-2xl overflow-hidden transform-gpu perspective-1000 ${className}`}>
            {/* Header REX */}
            <div className="bg-deep text-white p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/10 rounded-lg">
                            <FileText size={20} />
                        </div>
                        <div>
                            <div className="font-bold text-sm md:text-base">REX Manager - {collaborateur.prenom}</div>
                            <div className="text-xs text-white/70">
                                {collaborateur.prenom} {collaborateur.nom || ""} • {collaborateur.metier} • {collaborateur.date}
                            </div>
                        </div>
                    </div>
                    {/* K-Anonymity Badge could go here */}
                </div>
            </div>

            {/* Content */}
            <div className="max-h-[600px] overflow-y-auto p-5 space-y-5 custom-scrollbar">

                {/* SYNTHÈSE */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="text-xs font-bold text-deep uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Search size={14} className="text-accent" /> Synthèse Globale
                    </div>
                    <p className="text-sm text-gray-700 bg-light p-4 rounded-xl leading-relaxed border border-accent/10">
                        {rex.synthese}
                    </p>
                </motion.div>

                {/* RECOMMANDATION */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <div className="flex items-center gap-2 text-deep font-bold text-xs uppercase mb-2">
                        <Zap size={14} className="text-alertOrange" /> Action Prioritaire
                    </div>
                    <p className="text-sm text-deep font-medium bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent p-4 rounded-r-xl">
                        {rex.recommandation}
                    </p>
                </motion.div>

                {/* ANALYSE PAR THÉMATIQUE */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <div className="flex items-center gap-2 text-deep font-bold text-xs uppercase mb-3">
                        <ClipboardList size={14} /> Analyse par Thématique
                    </div>
                    <div className="space-y-2">
                        {rex.thematiques.map((t, i) => {
                            const Icon = THEME_ICONS[t.name] || MessageSquare;
                            return (
                                <div key={i} className="border border-gray-100 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                    <button
                                        onClick={() => setExpandedTheme(expandedTheme === i ? null : i)}
                                        className="w-full flex items-center justify-between p-3 hover:bg-cream transition-colors touch-target"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                                <Icon size={14} />
                                            </div>
                                            <span className="text-sm font-semibold text-deep">{t.name}</span>
                                        </div>
                                        <ChevronDown
                                            className={`text-gray-400 transition-transform ${expandedTheme === i ? "rotate-180" : ""}`}
                                            size={16}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {expandedTheme === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-cream/50"
                                            >
                                                <p className="text-xs text-gray-600 p-4 pt-0 leading-relaxed border-t border-gray-100 mt-2">
                                                    {t.analyse}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* PLAN D'ACTION */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <div className="flex items-center gap-2 text-deep font-bold text-xs uppercase mb-3">
                        <Target size={14} /> Plan d'Action
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* À faire maintenant */}
                        <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-4 rounded-xl border border-accent/10">
                            <div className="text-xs font-bold text-accent mb-2 flex items-center gap-1">
                                <Zap size={12} fill="currentColor" /> À faire maintenant
                            </div>
                            <ul className="space-y-2">
                                {rex.planAction.aFaireMaintenant.map((item, i) => (
                                    <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                                        <span className="w-4 h-4 rounded-full bg-accent text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 shadow-sm">
                                            !
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* À planifier */}
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <div className="text-xs font-bold text-gray-500 mb-2 flex items-center gap-1">
                                <Calendar size={12} /> À planifier
                            </div>
                            <ul className="space-y-2">
                                {rex.planAction.aPlanifier.map((item, i) => (
                                    <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                                        <span className="w-4 h-4 rounded-full bg-white border border-gray-200 text-gray-500 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                            {i + 1}
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* KIT MANAGER */}
                {rex.kit && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="border-t border-gray-200 pt-5 mt-5"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-xs font-bold text-deep uppercase flex items-center gap-2">
                                <Briefcase size={14} className="text-accent" /> Kit Manager
                            </div>
                            <span className="text-[10px] font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">Prêt à l'emploi</span>
                        </div>

                        <div className="space-y-3">
                            {/* Email */}
                            {rex.kit.email && (
                                <KitItem
                                    icon={Mail}
                                    color="bg-indigo-50 text-indigo-600 border-indigo-100"
                                    title="Mail d'invitation"
                                    subtitle={rex.kit.email.objet}
                                    expanded={expandedKit === "email"}
                                    onToggle={() => setExpandedKit(expandedKit === "email" ? null : "email")}
                                >
                                    <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-inner">
                                        <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans">{rex.kit.email.corps}</pre>
                                    </div>
                                    <CopyButton text={rex.kit.email.corps} itemId="email" copiedItem={copiedItem} onCopy={copyToClipboard} />
                                </KitItem>
                            )}

                            {/* Guide */}
                            {rex.kit.guideReunion && (
                                <KitItem
                                    icon={ClipboardList}
                                    color="bg-emerald-50 text-emerald-600 border-emerald-100"
                                    title="Guide d'entretien"
                                    subtitle={rex.kit.guideReunion.duree}
                                    expanded={expandedKit === "guide"}
                                    onToggle={() => setExpandedKit(expandedKit === "guide" ? null : "guide")}
                                >
                                    <div className="space-y-2">
                                        {rex.kit.guideReunion.sections.map((s, i) => (
                                            <div key={i} className="bg-white rounded-lg p-3 border border-gray-100">
                                                <div className="font-bold text-xs text-emerald-800 mb-1">{s.titre}</div>
                                                {s.contenu && <p className="text-xs text-gray-600 mb-2">{s.contenu}</p>}
                                                {s.questions && (
                                                    <ul className="space-y-1 bg-emerald-50/50 p-2 rounded text-emerald-900/80">
                                                        {s.questions.map((q, j) => <li key={j} className="text-xs">• {q}</li>)}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </KitItem>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

// Subcomponents for Kit
function KitItem({ icon: Icon, color, title, subtitle, expanded, onToggle, children }: any) {
    return (
        <div className={`rounded-xl border transition-all ${expanded ? 'shadow-md border-gray-200 bg-white' : 'border-transparent hover:border-gray-200'} ${color.includes('bg-') ? '' : 'bg-white'}`}>
            <button
                onClick={onToggle}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${color}`}
            >
                <div className="flex items-center gap-3">
                    <div className="bg-white/80 p-2 rounded-lg shadow-sm">
                        <Icon size={16} />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-sm">{title}</div>
                        <div className="text-xs opacity-80 truncate max-w-[180px]">{subtitle}</div>
                    </div>
                </div>
                <div className={`p-1 rounded-full ${expanded ? 'bg-white/20' : ''}`}>
                    <ChevronDown size={16} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
                </div>
            </button>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-3 pt-0 border-t border-gray-100/50">
                            <div className="mt-3 space-y-3">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

function CopyButton({ text, itemId, copiedItem, onCopy, color = "bg-deep hover:bg-black" }: any) {
    return (
        <button
            onClick={() => onCopy(text, itemId)}
            className={`w-full py-2 ${color} text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 touch-target shadow-sm active:scale-95`}
        >
            {copiedItem === itemId ? <CheckCircle2 size={14} /> : <Copy size={14} />}
            {copiedItem === itemId ? "Copié !" : "Copier"}
        </button>
    )
}
