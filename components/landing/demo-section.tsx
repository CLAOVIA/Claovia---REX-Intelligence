"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Play,
    ArrowRight,
    Zap,
    Search,
    FileText,
    Mail,
    ChevronDown,
    Loader2,
    CheckCircle2,
    Calendar,
    MessageSquare,
    ClipboardList,
    Copy,
    Check,
    Users,
    Target,
    Heart,
    TrendingUp,
    Briefcase,
    StickyNote,
    SkipForward,
    RotateCcw,
    Pause,
} from "lucide-react";

// =====================================================
// CAS CONCRET : L'HISTOIRE DE MARIE (COMMERCIALE)
// =====================================================

const marieStory = {
    collaborateur: {
        prenom: "Marie",
        nom: "Dupont",
        metier: "Commerciale Grands Comptes",
        manager: "Laurent",
        date: "07/01/2025",
    },
    conversation: [
        { sender: "bot", text: "👋 Salut Marie ! Moi c'est Clao. Comment tu vas aujourd'hui ?", delay: 0 },
        { sender: "user", text: "Ça va, un peu fatiguée en ce moment.", delay: 2 },
        { sender: "bot", text: "Je comprends. Comment ça se passe avec Laurent ces derniers temps ?", delay: 3.5 },
        { sender: "user", text: "C'est pas toujours simple. On se voit peu.", delay: 5.5 },
        { sender: "bot", text: "Tu peux m'en dire plus ?", delay: 7 },
        { sender: "user", text: "J'ai l'impression de gérer mes dossiers toute seule. Peu de retours.", delay: 8.5 },
        { sender: "bot", text: "Et côté charge de travail, comment tu gères ?", delay: 10.5 },
        { sender: "user", text: "C'est dense. Les objectifs Q1 sont ambitieux.", delay: 12 },
        { sender: "bot", text: "Sur 10, tu dirais quoi niveau motivation ?", delay: 14 },
        { sender: "user", text: "Hmm... 6 peut-être. Ça dépend des jours.", delay: 15.5 },
        { sender: "bot", text: "Merci Marie. Je transmets ça à Laurent avec des pistes concrètes.", delay: 17 },
    ],
    rex: {
        synthese: "Les réponses sont globalement nuancées. Marie exprime un besoin de reconnaissance et de feedback plus régulier de la part de son manager. La charge de travail est perçue comme soutenue, avec des objectifs ambitieux pour le trimestre.",
        recommandation: "Suite au REX, nous recommandons de prévoir un point régulier hebdomadaire pour faire le point sur l'avancement des dossiers et apporter du soutien sur les objectifs Q1.",
        thematiques: [
            {
                name: "Relation avec le Manager",
                icon: Users,
                analyse: "Marie évoque des échanges peu fréquents avec Laurent. Elle exprime le souhait d'avoir davantage de points réguliers et de retours sur son travail."
            },
            {
                name: "Charge de Travail",
                icon: Target,
                analyse: "La charge est perçue comme soutenue, notamment en lien avec les objectifs ambitieux du premier trimestre. Marie gère ses dossiers de manière autonome."
            },
            {
                name: "Objectifs & Clarté",
                icon: Briefcase,
                analyse: "Les objectifs Q1 sont clairs mais jugés ambitieux. Marie souhaiterait un accompagnement plus proche pour les atteindre."
            },
            {
                name: "Motivation",
                icon: Heart,
                analyse: "La motivation varie selon les jours (6/10 en moyenne). Un renforcement du lien avec le manager pourrait contribuer à la stabiliser."
            },
            {
                name: "Développement",
                icon: TrendingUp,
                analyse: "Ce sujet n'a pas été abordé en détail lors de l'échange. À explorer lors d'un prochain point."
            },
            {
                name: "Équipe & Environnement",
                icon: MessageSquare,
                analyse: "Marie travaille de manière autonome sur ses comptes. Les interactions équipe n'ont pas été évoquées."
            },
        ],
        planAction: {
            aFaireMaintenant: [
                "Envoyer un message de prise de contact à Marie",
                "Bloquer un créneau pour un point cette semaine",
            ],
            aPlanifier: [
                "Instaurer un point hebdomadaire de 20 minutes",
                "Faire un point sur l'avancement des objectifs Q1",
                "Discuter des besoins en accompagnement commercial",
            ],
        },
        kit: {
            email: {
                objet: "Marie - Point de suivi cette semaine ?",
                corps: `Bonjour Marie,

J'espère que tu vas bien. Je me rends compte qu'on n'a pas eu l'occasion d'échanger en détail dernièrement, et j'aimerais qu'on prenne un moment pour faire le point ensemble.

Est-ce que tu aurais un créneau de libre cette semaine pour un café ou un call de 20-30 minutes ?

Je suis disponible jeudi matin ou vendredi après-midi, mais dis-moi ce qui t'arrange.

À bientôt,
Laurent`,
            },
            message: {
                titre: "Message Teams/Slack",
                contenu: `Salut Marie 👋

Je voulais prendre de tes nouvelles. On fait un point rapide cette semaine ?

Dis-moi quand tu es dispo, je cale un créneau.

Laurent`,
            },
            guideReunion: {
                titre: "Guide de Réunion - Point de Suivi",
                duree: "20-30 minutes",
                sections: [
                    {
                        titre: "Ouverture (3 min)",
                        contenu: "Demander comment ça va de manière générale. Créer un climat de confiance.",
                    },
                    {
                        titre: "Écoute - Dossiers en cours (10 min)",
                        questions: [
                            "Sur quels comptes tu travailles en ce moment ?",
                            "Comment tu te sens sur ces dossiers ?",
                            "De quoi tu aurais besoin de ma part ?",
                        ],
                    },
                    {
                        titre: "Objectifs Q1 (5-7 min)",
                        questions: [
                            "Comment tu te situes par rapport aux objectifs ?",
                            "Qu'est-ce qui te semble atteignable ? Plus difficile ?",
                            "Comment je peux t'aider à les atteindre ?",
                        ],
                    },
                    {
                        titre: "Clôture (3 min)",
                        contenu: "Proposer un point régulier (hebdo ou bi-hebdo). Remercier pour l'échange.",
                    },
                ],
            },
            note: {
                titre: "Note de suivi",
                contenu: `POINT MARIE - 07/01/2025

Points abordés :
- [ ] Situation générale
- [ ] Dossiers en cours
- [ ] Objectifs Q1
- [ ] Besoins d'accompagnement

Actions décidées :
- 
- 

Prochain point : ___________`,
            },
            rdv: {
                objet: "Point de suivi - Marie / Laurent",
                duree: "30 minutes",
                lieu: "Bureau ou Teams",
                description: "Point régulier pour faire le point sur les dossiers et les objectifs Q1.",
            },
        },
    },
};

// Demo phases for progress tracking
const DEMO_PHASES = [
    { id: "chat", label: "Conversation", icon: MessageSquare },
    { id: "processing", label: "Analyse IA", icon: Zap },
    { id: "rex", label: "REX Manager", icon: FileText },
];

export function DemoSection() {
    const [visibleMessages, setVisibleMessages] = useState<typeof marieStory.conversation>([]);
    const [phase, setPhase] = useState<"chat" | "processing" | "rex">("chat");
    const [rexStep, setRexStep] = useState(0);
    const [expandedKit, setExpandedKit] = useState<string | null>(null);
    const [expandedTheme, setExpandedTheme] = useState<number | null>(null);
    const [copiedItem, setCopiedItem] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [demoKey, setDemoKey] = useState(0); // For replay functionality

    // Calculate progress percentage
    const getProgress = useCallback(() => {
        if (phase === "chat") {
            return (visibleMessages.length / marieStory.conversation.length) * 33;
        } else if (phase === "processing") {
            return 33 + 17;
        } else {
            return 50 + (rexStep / 5) * 50;
        }
    }, [phase, visibleMessages.length, rexStep]);

    // Reset and replay demo
    const replayDemo = useCallback(() => {
        setVisibleMessages([]);
        setPhase("chat");
        setRexStep(0);
        setExpandedKit(null);
        setExpandedTheme(null);
        setIsComplete(false);
        setIsPaused(false);
        setDemoKey(prev => prev + 1);
    }, []);

    // Skip to result
    const skipToResult = useCallback(() => {
        setVisibleMessages(marieStory.conversation);
        setPhase("rex");
        setRexStep(5);
        setIsComplete(true);
    }, []);

    useEffect(() => {
        if (isPaused) return;

        const timers: NodeJS.Timeout[] = [];

        marieStory.conversation.forEach((msg) => {
            timers.push(
                setTimeout(() => {
                    if (!isPaused) {
                        setVisibleMessages((prev) => [...prev, msg]);
                    }
                }, msg.delay * 1000)
            );
        });

        timers.push(setTimeout(() => !isPaused && setPhase("processing"), 18500));
        timers.push(setTimeout(() => !isPaused && setPhase("rex"), 20500));
        timers.push(setTimeout(() => !isPaused && setRexStep(1), 21500));
        timers.push(setTimeout(() => !isPaused && setRexStep(2), 23000));
        timers.push(setTimeout(() => !isPaused && setRexStep(3), 25000));
        timers.push(setTimeout(() => !isPaused && setRexStep(4), 27000));
        timers.push(setTimeout(() => {
            if (!isPaused) {
                setRexStep(5);
                setIsComplete(true);
            }
        }, 29000));

        return () => timers.forEach(clearTimeout);
    }, [isPaused, demoKey]);

    const copyToClipboard = (text: string, itemId: string) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(itemId);
        setTimeout(() => setCopiedItem(null), 2000);
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-cream via-light to-cream">
            <div className="max-w-7xl mx-auto">
                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 bg-white border border-accent/20 px-4 py-2 rounded-full mb-4 shadow-sm">
                        <Play className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-accent">Cas Concret</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-head font-bold text-deep mb-4">
                        L'histoire de Marie
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Marie est commerciale. Elle a besoin de plus d'échanges avec son manager. <br />
                        Voyez comment Claovia génère un plan d'action concret.
                    </p>
                </motion.div>

                {/* Progress Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-8"
                >
                    <div className="demo-timeline">
                        {DEMO_PHASES.map((p, index) => (
                            <div key={p.id} className="flex items-center">
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`demo-timeline-step ${phase === p.id ? "active" :
                                                (phase === "processing" && index === 0) ||
                                                    (phase === "rex" && index < 2) ? "completed" : ""
                                            }`}
                                    />
                                    <span className={`text-xs font-medium hidden sm:inline ${phase === p.id ? "text-accent" : "text-gray-400"
                                        }`}>
                                        {p.label}
                                    </span>
                                </div>
                                {index < DEMO_PHASES.length - 1 && (
                                    <div
                                        className="demo-timeline-line w-8 sm:w-16 mx-2"
                                        style={{
                                            "--progress": phase === "processing" && index === 0 ? "100%" :
                                                phase === "rex" && index <= 1 ? "100%" : "0%"
                                        } as React.CSSProperties}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Control Buttons */}
                <div className="flex justify-center gap-3 mb-8">
                    {!isComplete && (
                        <>
                            <button
                                onClick={() => setIsPaused(!isPaused)}
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full hover:border-accent hover:text-accent transition-colors touch-target"
                            >
                                {isPaused ? <Play size={14} /> : <Pause size={14} />}
                                {isPaused ? "Reprendre" : "Pause"}
                            </button>
                            <button
                                onClick={skipToResult}
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent bg-accent/10 border border-accent/20 rounded-full hover:bg-accent hover:text-white transition-colors touch-target"
                            >
                                <SkipForward size={14} />
                                Voir le résultat
                            </button>
                        </>
                    )}
                    {isComplete && (
                        <button
                            onClick={replayDemo}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-deep bg-white border border-gray-200 rounded-full hover:border-deep hover:bg-deep hover:text-white transition-colors touch-target"
                        >
                            <RotateCcw size={14} />
                            Rejouer la démo
                        </button>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="max-w-xl mx-auto mb-8">
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-accent to-deep rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${getProgress()}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                        <span>Début</span>
                        <span className="font-medium text-accent">{Math.round(getProgress())}%</span>
                        <span>Fin</span>
                    </div>
                </div>

                {/* Demo Container */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* LEFT: Chat Collaborateur */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-cream to-light border-b border-gray-200 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-deep flex items-center justify-center text-white font-bold">
                                            M
                                        </div>
                                        <div>
                                            <div className="font-bold text-deep text-sm">{marieStory.collaborateur.prenom}</div>
                                            <div className="text-xs text-gray-500">{marieStory.collaborateur.metier}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-400">Discussion avec Clao</span>
                                        <div className={`w-2 h-2 rounded-full ${phase === "chat" && !isPaused ? "bg-green-500 animate-pulse" : "bg-gray-300"}`} />
                                    </div>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="h-[420px] overflow-y-auto p-4 space-y-3">
                                <AnimatePresence>
                                    {visibleMessages.map((msg, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className={`max-w-[85%] ${msg.sender === "user" ? "ml-auto" : ""}`}
                                        >
                                            <div
                                                className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.sender === "bot"
                                                    ? "bg-light text-deep rounded-tl-md"
                                                    : "bg-deep text-white rounded-tr-md"
                                                    }`}
                                            >
                                                {msg.text}
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {phase !== "chat" && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex justify-center pt-4"
                                    >
                                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full">
                                            <CheckCircle2 size={14} /> REX transmis à Laurent
                                        </span>
                                    </motion.div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="p-4 border-t border-gray-100 bg-white">
                                <a
                                    href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-deep text-white font-bold rounded-xl hover:bg-accent transition-colors text-sm touch-target"
                                >
                                    <Play size={16} /> Tester le REX vous-même
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: REX Manager */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-[28px] border-2 border-deep/10 shadow-2xl overflow-hidden">
                            {/* Header REX */}
                            <div className="bg-deep text-white p-4">
                                <div className="flex items-center gap-3">
                                    <FileText size={20} />
                                    <div>
                                        <div className="font-bold">REX Manager - {marieStory.collaborateur.prenom}</div>
                                        <div className="text-xs text-white/70">
                                            {marieStory.collaborateur.prenom} {marieStory.collaborateur.nom} • {marieStory.collaborateur.metier} • {marieStory.collaborateur.date}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="max-h-[520px] overflow-y-auto p-5 space-y-5">
                                <AnimatePresence mode="wait">
                                    {phase === "processing" && (
                                        <motion.div
                                            key="processing"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="h-40 flex flex-col items-center justify-center gap-3"
                                        >
                                            <div className="relative">
                                                <Loader2 className="w-10 h-10 text-accent animate-spin" />
                                                <Zap className="w-4 h-4 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                            </div>
                                            <span className="text-sm text-gray-500">Analyse IA en cours...</span>
                                        </motion.div>
                                    )}

                                    {phase === "rex" && (
                                        <motion.div key="rex" className="space-y-5">
                                            {/* SYNTHÈSE */}
                                            {rexStep >= 1 && (
                                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                                    <div className="text-xs font-bold text-deep uppercase tracking-wider mb-2">
                                                        Synthèse
                                                    </div>
                                                    <p className="text-sm text-gray-700 bg-light p-4 rounded-xl leading-relaxed">
                                                        {marieStory.rex.synthese}
                                                    </p>
                                                </motion.div>
                                            )}

                                            {/* ANALYSE */}
                                            {rexStep >= 2 && (
                                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                                    <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase mb-2">
                                                        <Search size={14} /> Analyse
                                                    </div>
                                                    <p className="text-sm text-gray-700 italic">
                                                        L'analyse de {marieStory.collaborateur.prenom} : les réponses sont globalement nuancées et constructives.
                                                    </p>
                                                </motion.div>
                                            )}

                                            {/* RECOMMANDATION */}
                                            {rexStep >= 3 && (
                                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                                    <div className="flex items-center gap-2 text-deep font-bold text-xs uppercase mb-2">
                                                        <Zap size={14} /> Recommandation Principale
                                                    </div>
                                                    <p className="text-sm text-gray-700 bg-accent/10 border-l-4 border-accent p-4 rounded-r-xl">
                                                        {marieStory.rex.recommandation}
                                                    </p>
                                                </motion.div>
                                            )}

                                            {/* ANALYSE PAR THÉMATIQUE */}
                                            {rexStep >= 4 && (
                                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                                    <div className="flex items-center gap-2 text-deep font-bold text-xs uppercase mb-3">
                                                        <ClipboardList size={14} /> Analyse par Thématique
                                                    </div>
                                                    <div className="space-y-2">
                                                        {marieStory.rex.thematiques.map((t, i) => (
                                                            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                                                                <button
                                                                    onClick={() => setExpandedTheme(expandedTheme === i ? null : i)}
                                                                    className="w-full flex items-center justify-between p-3 hover:bg-cream transition-colors touch-target"
                                                                >
                                                                    <div className="flex items-center gap-2">
                                                                        <t.icon size={16} className="text-accent" />
                                                                        <span className="text-sm font-medium text-deep">{t.name}</span>
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
                                                                            className="overflow-hidden"
                                                                        >
                                                                            <p className="text-xs text-gray-600 p-3 pt-0 leading-relaxed">
                                                                                {t.analyse}
                                                                            </p>
                                                                        </motion.div>
                                                                    )}
                                                                </AnimatePresence>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}

                                            {/* PLAN D'ACTION */}
                                            {rexStep >= 5 && (
                                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                                    <div className="flex items-center gap-2 text-deep font-bold text-xs uppercase mb-3">
                                                        <Target size={14} /> Plan d'Action
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {/* À faire maintenant */}
                                                        <div className="bg-accent/10 p-4 rounded-xl">
                                                            <div className="text-xs font-bold text-accent mb-2">À faire maintenant</div>
                                                            <ul className="space-y-2">
                                                                {marieStory.rex.planAction.aFaireMaintenant.map((item, i) => (
                                                                    <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                                                                        <span className="w-4 h-4 rounded-full bg-accent text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                                                            !
                                                                        </span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        {/* À planifier */}
                                                        <div className="bg-cream p-4 rounded-xl">
                                                            <div className="text-xs font-bold text-deep mb-2">À planifier</div>
                                                            <ul className="space-y-2">
                                                                {marieStory.rex.planAction.aPlanifier.map((item, i) => (
                                                                    <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                                                                        <span className="w-4 h-4 rounded-full bg-gray-300 text-deep flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                                                            {i + 1}
                                                                        </span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {/* KIT MANAGER */}
                                            {rexStep >= 5 && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="border-t border-gray-200 pt-5"
                                                >
                                                    <div className="text-xs font-bold text-accent uppercase mb-4">
                                                        Kit Manager - Ressources Prêtes à l'Emploi
                                                    </div>

                                                    <div className="space-y-2">
                                                        {/* Email */}
                                                        <KitItem
                                                            icon={Mail}
                                                            color="bg-accent/10 text-accent"
                                                            title="Mail pré-rédigé"
                                                            subtitle={marieStory.rex.kit.email.objet}
                                                            expanded={expandedKit === "email"}
                                                            onToggle={() => setExpandedKit(expandedKit === "email" ? null : "email")}
                                                        >
                                                            <div className="bg-gray-50 rounded-lg p-3">
                                                                <div className="text-xs text-gray-500 mb-2">
                                                                    <strong>Objet :</strong> {marieStory.rex.kit.email.objet}
                                                                </div>
                                                                <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans">
                                                                    {marieStory.rex.kit.email.corps}
                                                                </pre>
                                                            </div>
                                                            <CopyButton
                                                                text={marieStory.rex.kit.email.corps}
                                                                itemId="email"
                                                                copiedItem={copiedItem}
                                                                onCopy={copyToClipboard}
                                                            />
                                                        </KitItem>

                                                        {/* Message */}
                                                        <KitItem
                                                            icon={MessageSquare}
                                                            color="bg-blue-100 text-blue-600"
                                                            title="Message Teams/Slack"
                                                            subtitle="Message de prise de contact"
                                                            expanded={expandedKit === "message"}
                                                            onToggle={() => setExpandedKit(expandedKit === "message" ? null : "message")}
                                                        >
                                                            <div className="bg-blue-50 rounded-lg p-3">
                                                                <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans">
                                                                    {marieStory.rex.kit.message.contenu}
                                                                </pre>
                                                            </div>
                                                            <CopyButton
                                                                text={marieStory.rex.kit.message.contenu}
                                                                itemId="message"
                                                                copiedItem={copiedItem}
                                                                onCopy={copyToClipboard}
                                                                color="bg-blue-600 hover:bg-blue-700"
                                                            />
                                                        </KitItem>

                                                        {/* Guide */}
                                                        <KitItem
                                                            icon={ClipboardList}
                                                            color="bg-green-100 text-green-600"
                                                            title="Guide de Réunion"
                                                            subtitle={marieStory.rex.kit.guideReunion.duree}
                                                            expanded={expandedKit === "guide"}
                                                            onToggle={() => setExpandedKit(expandedKit === "guide" ? null : "guide")}
                                                        >
                                                            <div className="space-y-2">
                                                                {marieStory.rex.kit.guideReunion.sections.map((s, i) => (
                                                                    <div key={i} className="bg-green-50 rounded-lg p-3">
                                                                        <div className="font-bold text-xs text-green-800 mb-1">{s.titre}</div>
                                                                        {s.contenu && <p className="text-xs text-gray-600">{s.contenu}</p>}
                                                                        {s.questions && (
                                                                            <ul className="space-y-1">
                                                                                {s.questions.map((q, j) => (
                                                                                    <li key={j} className="text-xs text-gray-600">• "{q}"</li>
                                                                                ))}
                                                                            </ul>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </KitItem>

                                                        {/* Note */}
                                                        <KitItem
                                                            icon={StickyNote}
                                                            color="bg-yellow-100 text-yellow-700"
                                                            title="Note de suivi"
                                                            subtitle="Template à remplir"
                                                            expanded={expandedKit === "note"}
                                                            onToggle={() => setExpandedKit(expandedKit === "note" ? null : "note")}
                                                        >
                                                            <div className="bg-yellow-50 rounded-lg p-3">
                                                                <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans">
                                                                    {marieStory.rex.kit.note.contenu}
                                                                </pre>
                                                            </div>
                                                            <CopyButton
                                                                text={marieStory.rex.kit.note.contenu}
                                                                itemId="note"
                                                                copiedItem={copiedItem}
                                                                onCopy={copyToClipboard}
                                                                color="bg-yellow-600 hover:bg-yellow-700"
                                                            />
                                                        </KitItem>

                                                        {/* RDV */}
                                                        <KitItem
                                                            icon={Calendar}
                                                            color="bg-purple-100 text-purple-600"
                                                            title="Proposition de RDV"
                                                            subtitle={marieStory.rex.kit.rdv.duree}
                                                            expanded={expandedKit === "rdv"}
                                                            onToggle={() => setExpandedKit(expandedKit === "rdv" ? null : "rdv")}
                                                        >
                                                            <div className="bg-purple-50 rounded-lg p-3 space-y-1 text-xs">
                                                                <div><strong className="text-purple-800">Objet :</strong> {marieStory.rex.kit.rdv.objet}</div>
                                                                <div><strong className="text-purple-800">Durée :</strong> {marieStory.rex.kit.rdv.duree}</div>
                                                                <div><strong className="text-purple-800">Lieu :</strong> {marieStory.rex.kit.rdv.lieu}</div>
                                                            </div>
                                                            <button className="mt-2 w-full py-2 bg-purple-600 text-white rounded-lg text-xs font-bold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 touch-target">
                                                                <Calendar size={14} /> Ajouter au calendrier
                                                            </button>
                                                        </KitItem>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-accent" />
                            <span className="text-sm font-medium text-gray-600">10 min</span>
                            <span className="text-xs text-gray-400">REX</span>
                        </div>
                        <ArrowRight className="text-gray-300" size={16} />
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-deep" />
                            <span className="text-sm font-medium text-gray-600">30 sec</span>
                            <span className="text-xs text-gray-400">Analyse IA</span>
                        </div>
                        <ArrowRight className="text-gray-300" size={16} />
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="text-sm font-medium text-gray-600">24h</span>
                            <span className="text-xs text-gray-400">Action Manager</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// =====================================================
// COMPOSANTS UTILITAIRES
// =====================================================

function KitItem({
    icon: Icon,
    color,
    title,
    subtitle,
    expanded,
    onToggle,
    children,
}: {
    icon: React.ElementType;
    color: string;
    title: string;
    subtitle: string;
    expanded: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}) {
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-3 hover:bg-cream transition-colors touch-target"
            >
                <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center`}>
                        <Icon size={16} />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-xs text-deep">{title}</div>
                        <div className="text-[10px] text-gray-500">{subtitle}</div>
                    </div>
                </div>
                <ChevronDown
                    className={`text-gray-400 transition-transform ${expanded ? "rotate-180" : ""}`}
                    size={16}
                />
            </button>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-3 pt-0 border-t border-gray-100">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function CopyButton({
    text,
    itemId,
    copiedItem,
    onCopy,
    color = "bg-accent hover:bg-deep",
}: {
    text: string;
    itemId: string;
    copiedItem: string | null;
    onCopy: (text: string, itemId: string) => void;
    color?: string;
}) {
    return (
        <button
            onClick={() => onCopy(text, itemId)}
            className={`mt-2 w-full py-2 ${color} text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 touch-target`}
        >
            {copiedItem === itemId ? (
                <>
                    <Check size={14} /> Copié !
                </>
            ) : (
                <>
                    <Copy size={14} /> Copier
                </>
            )}
        </button>
    );
}
