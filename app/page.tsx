"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Command,
  Menu,
  PlayCircle,
  Sparkles,
  Activity,
  ShieldCheck,
  Server,
  Lock,
  CheckCircle,
  AlertTriangle,
  User,
  Bot,
  Send,
  Eye,
  MessageSquare,
  BrainCircuit,
  Zap,
  Calendar,
  LayoutDashboard,
  Lightbulb,
  Mail,
  Copy,
  Mic2,
  ChevronDown,
  Star,
  Users,
  Briefcase,
  Compass,
  HeartHandshake,
  LayoutGrid,
  Quote,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            entry.target.classList.add("visible");

            const highlights = entry.target.querySelectorAll(".highlight-text");
            highlights.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, 500 + index * 200);
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".reveal, .story-section, .fade-in-up, .scale-in, .line-draw, .timeline-step").forEach((element) => {
      observer.observe(element);
    });

    // Scroll progress line logic
    const schemaContainer = document.getElementById("peter-schema");
    const timelineProgress = document.getElementById("timeline-progress");

    const handleScroll = () => {
      if (schemaContainer && timelineProgress) {
        const rect = schemaContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        let percentage = 0;
        const startPoint = windowHeight * 0.7;
        const endPoint = rect.height;
        const offset = startPoint - rect.top;

        if (offset > 0) {
          percentage = (offset / endPoint) * 100;
        }
        percentage = Math.max(0, Math.min(100, percentage));
        (timelineProgress as HTMLElement).style.height = `${percentage}%`;
      }

      const nav = document.getElementById("navbar");
      if (nav) {
        if (window.scrollY > 20) {
          nav.classList.add("shadow-sm", "bg-sage-50/90");
        } else {
          nav.classList.remove("shadow-sm", "bg-sage-50/90");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-smooth bg-sage-50 text-stone-600 antialiased font-sans selection:bg-sage-200 selection:text-sage-900 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className="fixed w-full z-50 top-0 left-0 bg-sage-50/80 backdrop-blur-md border-b border-sage-100 transition-all duration-300"
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-900/20 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.4),transparent_70%)] opacity-70"></div>
              <Command className="w-5 h-5 text-cyan-100 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] stroke-[1.5]" />
            </div>
            <span className="font-semibold text-sage-900 tracking-tight text-xl">Claovia</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">
              Accueil
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">
              Fonctionnalités
            </Link>
            <Link href="#demo-section" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">
              Démo
            </Link>
            <Link href="#values" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">
              Notre Vision
            </Link>
            <Link href="#contact" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/onboarding"
              className="px-6 py-2.5 rounded-full bg-sage-800 text-white text-sm font-medium hover:bg-sage-900 transition-all hover:shadow-lg hover:shadow-sage-200 active:scale-95 flex items-center gap-2"
            >
              <PlayCircle className="w-4 h-4" />
              Tester le REX
            </Link>
          </div>

          <button
            id="mobile-menu-btn"
            className="md:hidden text-sage-800 hover:text-sage-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-sage-100 absolute w-full shadow-lg z-40">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <Link href="#" className="text-sm font-medium text-stone-600">
                Accueil
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium text-stone-600">
                Fonctionnalités
              </Link>
              <Link href="#demo-section" className="text-sm font-medium text-stone-600">
                Démo
              </Link>
              <Link href="#values" className="text-sm font-medium text-stone-600">
                Notre Vision
              </Link>
              <Link href="#contact" className="text-sm font-medium text-stone-600">
                Contact
              </Link>
              <Link
                href="/onboarding"
                className="block text-center px-5 py-3 rounded-xl bg-sage-800 text-white text-sm font-medium"
              >
                Tester le REX
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-sage-200/30 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left reveal active">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sage-200 shadow-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500"></span>
              </span>
              <span className="text-xs font-semibold text-sage-800 tracking-wide uppercase">
                Pilotage d'Équipe Augmenté
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-sage-900 tracking-tight leading-[1.1] mb-6">
              Ne laissez plus vos talents
              <br />
              <span className="text-stone-400">partir en silence.</span>
            </h1>

            <p className="text-lg text-stone-600 max-w-lg mb-10 leading-relaxed">
              Transformez le ressenti collaborateur en <strong>plan d'action managérial immédiat</strong>. Avant qu'il ne soit trop tard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-sage-800 text-white text-base font-medium hover:bg-sage-900 transition-all shadow-xl shadow-sage-200/50 flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                Essayer Gratuitement
              </a>
              <Link
                href="#demo-section"
                className="px-8 py-4 rounded-full bg-white border border-sage-200 text-sage-800 text-base font-medium hover:bg-sage-50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                <Eye className="w-4 h-4" />
                Voir la démo
              </Link>
            </div>

            <div className="flex items-center gap-6 text-xs text-stone-400 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-sage-600" /> RGPD Compliant
              </span>
              <span className="flex items-center gap-1">
                <Server className="w-4 h-4 text-sage-600" /> Hébergé en France
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-sage-600" /> Données Chiffrées
              </span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-sage-100 to-transparent rounded-full blur-3xl opacity-40"></div>
            <div className="relative bg-white/50 backdrop-blur-md border border-white/50 p-8 rounded-3xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Activity className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-bold text-sage-900">Analyse en temps réel</h3>
                  <p className="text-xs text-stone-500">Détection des signaux faibles</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between">
                  <span className="text-sm font-medium text-stone-600">Climat Social</span>
                  <span className="text-sm font-bold text-green-600">Stable</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between">
                  <span className="text-sm font-medium text-stone-600">Charge Équipe</span>
                  <span className="text-sm font-bold text-orange-500">Élevée</span>
                </div>
                <div className="bg-sage-900 text-white p-4 rounded-xl shadow-lg flex items-center justify-between mt-4">
                  <span className="text-sm font-medium">Actions recommandées</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-xs">3 nouvelles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Demo Section - Simplified for length */}
      <section id="demo-section" className="py-24 px-6 bg-gradient-to-b from-white via-sage-50/50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold mb-4">
              <Sparkles className="w-3 h-3" /> Démo Live
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">Parlez, Claovia s'occupe du reste</h2>
            <p className="text-stone-500 max-w-2xl mx-auto text-lg">
              Le collaborateur s'exprime librement. L'IA génère instantanément l'analyse complète et les outils pour le manager.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-100">
              <div className="text-center mb-6">
                <span className="text-sm font-bold text-sage-900 bg-white px-4 py-2 rounded-full border border-sage-100 shadow-sm">
                  1. Marie se confie
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage-800 flex items-center justify-center text-white">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-stone-100 text-sm text-stone-600 max-w-[85%]">
                    Bonjour Marie ! Comment te sens-tu dans ton poste ?
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="bg-blue-600 p-3 rounded-2xl text-sm text-white max-w-[85%]">
                    Honnêtement, je me sens noyée sous l'administratif...
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-100 rounded-2xl shadow-xl p-8 border border-stone-200">
              <div className="text-center mb-6">
                <span className="text-sm font-bold text-white bg-sage-900 px-4 py-2 rounded-full shadow-lg">
                  2. Baptiste reçoit
                </span>
              </div>
              <div className="bg-white p-6 rounded-xl border border-stone-200">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                  <BrainCircuit className="w-4 h-4 text-sage-500" /> Synthèse & Recommandation
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed mb-3">
                  <strong>Analyse :</strong> Marie est engagée mais saturée par l'administratif. Elle perçoit un décalage avec le management.
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-sage-800 font-medium bg-sage-50 px-3 py-2 rounded-lg border border-sage-100">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  Conseil : Passer de "Contrôleur" à "Facilitateur"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Coût Caché */}
      <section className="py-20 bg-white border-y border-sage-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">Le Coût Caché du Silence</h2>
            <p className="text-stone-500">80% des départs sont liés à un problème de management. La solution n'est pas de former, c'est d'outiller.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-sage-50 border border-sage-100 text-center reveal delay-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-sage-800 mb-2">150%</div>
              <div className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-4">du salaire annuel</div>
              <p className="text-stone-600 text-sm">Coût moyen de remplacement d'un collaborateur qualifié.</p>
            </div>
            <div className="p-8 rounded-2xl bg-sage-50 border border-sage-100 text-center reveal delay-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-sage-800 mb-2">45j</div>
              <div className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-4">Temps perdu</div>
              <p className="text-stone-600 text-sm">Délai moyen pour détecter un désengagement silencieux sans outils.</p>
            </div>
            <div className="p-8 rounded-2xl bg-sage-50 border border-sage-100 text-center reveal delay-300 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-sage-800 mb-2">6 mois</div>
              <div className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-4">de productivité</div>
              <p className="text-stone-600 text-sm">Perdus avant qu'un nouveau talent ne soit pleinement opérationnel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-6 bg-sage-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">Du message à l'action en 3 étapes</h2>
            <p className="text-stone-500">Plus besoin d'attendre l'entretien annuel. L'IA transforme immédiatement.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-sage-200 via-sage-300 to-sage-200 z-0"></div>

            <div className="relative z-10 reveal delay-100">
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 border border-sage-100 relative group">
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-sage-800 text-white rounded-full flex items-center justify-center font-bold border-4 border-sage-50">
                  1
                </span>
                <MessageSquare className="w-10 h-10 text-sage-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-center text-sage-900 mb-3">Écoute IA</h3>
              <p className="text-center text-stone-600 text-sm leading-relaxed">
                Clao, notre coach IA, mène une vraie conversation avec le collaborateur. <strong>Anonyme ou identifié, au choix.</strong>
              </p>
            </div>

            <div className="relative z-10 reveal delay-200">
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 border border-sage-100 relative group">
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-sage-800 text-white rounded-full flex items-center justify-center font-bold border-4 border-sage-50">
                  2
                </span>
                <BrainCircuit className="w-10 h-10 text-sage-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-center text-sage-900 mb-3">Analyse & Synthèse</h3>
              <p className="text-center text-stone-600 text-sm leading-relaxed">
                L'IA analyse 6 thématiques clés : Relation Manager, Charge, Objectifs, Motivation, Développement, Équipe.
              </p>
            </div>

            <div className="relative z-10 reveal delay-300">
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 border border-sage-100 relative group">
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-sage-800 text-white rounded-full flex items-center justify-center font-bold border-4 border-sage-50">
                  3
                </span>
                <Zap className="w-10 h-10 text-sage-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-center text-sage-900 mb-3">Action Manager</h3>
              <p className="text-center text-stone-600 text-sm leading-relaxed">
                Le manager reçoit un plan complet : recommandations, mails pré-rédigés, guides d'entretien. Il n'a plus qu'à valider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-sage-900 mb-12 reveal">Questions Fréquentes</h2>
          <div className="space-y-4 reveal delay-100">
            <details className="group bg-sage-50 rounded-2xl p-6 cursor-pointer hover:bg-sage-100 transition-colors">
              <summary className="flex items-center justify-between font-medium text-sage-900 list-none">
                Comment fonctionne l'anonymat des retours ?
                <ChevronDown className="w-5 h-5 text-sage-500 transition group-open:rotate-180" />
              </summary>
              <p className="text-stone-600 mt-4 text-sm leading-relaxed">
                C'est une option clé. Le collaborateur peut choisir que ses réponses soient 100% anonymes. L'IA reformule alors les verbatims pour éviter toute identification par le style d'écriture.
              </p>
            </details>

            <details className="group bg-sage-50 rounded-2xl p-6 cursor-pointer hover:bg-sage-100 transition-colors">
              <summary className="flex items-center justify-between font-medium text-sage-900 list-none">
                Combien de temps prend un REX ?
                <ChevronDown className="w-5 h-5 text-sage-500 transition group-open:rotate-180" />
              </summary>
              <p className="text-stone-600 mt-4 text-sm leading-relaxed">
                Moins de 5 minutes pour le collaborateur. C'est une conversation fluide, pas un formulaire administratif lourd.
              </p>
            </details>

            <details className="group bg-sage-50 rounded-2xl p-6 cursor-pointer hover:bg-sage-100 transition-colors">
              <summary className="flex items-center justify-between font-medium text-sage-900 list-none">
                L'IA remplace-t-elle le manager ?
                <ChevronDown className="w-5 h-5 text-sage-500 transition group-open:rotate-180" />
              </summary>
              <p className="text-stone-600 mt-4 text-sm leading-relaxed">
                Jamais. Elle l'augmente. L'IA fait le travail de synthèse et de préparation, mais c'est le manager qui prend la décision finale et qui mène l'échange humain.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Values / Origin Story - Simplified Peter Principle */}
      <section id="values" className="py-24 lg:py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20 story-section">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50 border border-sage-200 mb-8 scale-in">
              <Sparkles className="w-4 h-4 text-sage-600" />
              <span className="text-xs font-medium text-sage-800 tracking-wide uppercase">Notre Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-sage-900 tracking-tight mb-6">L'origine d'une réflexion</h2>
          </div>

          <div className="space-y-16">
            <div className="story-section">
              <div className="bg-gradient-to-br from-sage-50 to-white rounded-3xl p-8 md:p-12 border border-sage-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-sage-600" />
                  </div>
                  <span className="text-sm font-semibold text-sage-800 tracking-wide uppercase">La Genèse</span>
                </div>
                <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                  Claovia est née d'une <span className="font-medium text-sage-900">analyse systémique</span> du monde de l'entreprise — fruit d'années d'observation du fonctionnement des organisations.
                </p>
              </div>
            </div>

            <div className="story-section">
              <div className="bg-stone-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <p className="text-lg md:text-xl text-stone-300 leading-relaxed mb-8">
                  Les mêmes processus se répètent : hiérarchies rigides, et surtout...
                </p>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                    des <span className="text-sage-400">dysfonctionnements humains</span> que personne n'osait nommer.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center py-12 mt-12 bg-sage-50 rounded-3xl border border-sage-100">
              <div className="inline-flex p-4 rounded-full bg-white shadow-sm mb-6">
                <MessageSquare className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-sage-900 tracking-tight mb-4">Libérer la parole des équipes</h3>
              <p className="text-lg text-stone-500 max-w-2xl mx-auto px-4">
                Pour casser ce cycle d'échec, l'objectif est clair : remettre l'humain au centre et offrir un canal d'expression sécurisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-white" id="contact">
        <div className="max-w-4xl mx-auto bg-sage-900 rounded-[3rem] p-12 text-center relative overflow-hidden reveal shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Prêt à clarifier votre management ?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white text-sage-900 text-base font-bold hover:bg-stone-100 transition-all shadow-lg hover:scale-105 duration-200"
              >
                Lancer mon premier REX
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 px-6 border-t border-stone-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="font-bold text-xl text-sage-900">Claovia</span>
          <p className="text-xs text-stone-400">© 2026 Claovia. Tous droits réservés.</p>
        </div>
      </footer>

      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px) scale(0.98);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .delay-100 {
          transition-delay: 0.1s;
        }
        .delay-200 {
          transition-delay: 0.2s;
        }
        .delay-300 {
          transition-delay: 0.3s;
        }
        .story-section {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .story-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .scale-in {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scale-in.visible {
          opacity: 1;
          transform: scale(1);
        }
        .line-draw {
          width: 0;
          transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .line-draw.visible {
          width: 100%;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
