"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  Command, Menu, X, PlayCircle, ShieldCheck, Server, Lock,
  Activity, Eye, Sparkles, MessageSquare, Bot, User, Send,
  LayoutDashboard, BrainCircuit, Lightbulb, Briefcase, Mail,
  ChevronDown, Mic2, AlertTriangle, Zap, HeartHandshake,
  Compass, Quote, Star, Users, ArrowRight, CheckCircle
} from "lucide-react";
import { RexMockup } from "@/components/landing/RexMockup";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll observer for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.add('visible');

          const highlights = entry.target.querySelectorAll('.highlight-text');
          highlights.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('visible');
            }, 500 + (index * 200));
          });
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal, .story-section, .quote-reveal, .fade-in-up, .scale-in, .line-draw, .timeline-step').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Peter Principle Schema Progress Line
  useEffect(() => {
    const schemaContainer = document.getElementById('peter-schema');
    const timelineProgress = document.getElementById('timeline-progress');

    const handleSchemaScroll = () => {
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
        timelineProgress.style.height = `${percentage}%`;
      }
    };

    window.addEventListener('scroll', handleSchemaScroll);
    return () => window.removeEventListener('scroll', handleSchemaScroll);
  }, []);

  return (
    <div className="bg-sage-50 text-stone-600 antialiased font-sans selection:bg-sage-200 selection:text-sage-900 overflow-x-hidden">

      {/* Navigation */}
      <nav id="navbar" className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${isScrolled ? 'shadow-sm bg-sage-50/90 backdrop-blur-md border-b border-sage-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {/* NEW LOGO: COMMAND ICON */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-900/20 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.4),transparent_70%)] opacity-70"></div>
              <Command className="w-5 h-5 text-cyan-100 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] stroke-[1.5]" />
            </div>
            <span className="font-semibold text-sage-900 tracking-tight text-xl">Claovia</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">Accueil</Link>
            <Link href="#how-it-works" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">Fonctionnalités</Link>
            <Link href="#demo-section" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">Démo</Link>
            <Link href="#values" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">Notre Vision</Link>
            <Link href="#contact" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/onboarding" className="px-6 py-2.5 rounded-full bg-sage-800 text-white text-sm font-medium hover:bg-sage-900 transition-all hover:shadow-lg hover:shadow-sage-200 active:scale-95 flex items-center gap-2">
              <PlayCircle className="w-4 h-4" />
              Tester le REX
            </Link>
          </div>

          <button
            className="md:hidden text-sage-800 hover:text-sage-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t border-sage-100 absolute w-full shadow-lg z-40">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <Link href="#" className="text-sm font-medium text-stone-600" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
              <Link href="#how-it-works" className="text-sm font-medium text-stone-600" onClick={() => setMobileMenuOpen(false)}>Fonctionnalités</Link>
              <Link href="#demo-section" className="text-sm font-medium text-stone-600" onClick={() => setMobileMenuOpen(false)}>Démo</Link>
              <Link href="#values" className="text-sm font-medium text-stone-600" onClick={() => setMobileMenuOpen(false)}>Notre Vision</Link>
              <Link href="#contact" className="text-sm font-medium text-stone-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="/onboarding" className="block text-center px-5 py-3 rounded-xl bg-sage-800 text-white text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Tester le REX</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-sage-200/30 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text Content */}
          <div className="text-left reveal active">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sage-200 shadow-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500"></span>
              </span>
              <span className="text-xs font-semibold text-sage-800 tracking-wide uppercase">Pilotage d'Équipe Augmenté</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-sage-900 tracking-tight leading-[1.1] mb-6">
              Ne laissez plus vos talents<br />
              <span className="text-stone-400">partir en silence.</span>
            </h1>

            <p className="text-lg text-stone-600 max-w-lg mb-10 leading-relaxed">
              Transformez le ressenti collaborateur en <strong>plan d'action managérial immédiat</strong>. Avant qu'il ne soit trop tard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="https://typebot.co/claovia-rex-clao-ia-05gi2vb" target="_blank" className="px-8 py-4 rounded-full bg-sage-800 text-white text-base font-medium hover:bg-sage-900 transition-all shadow-xl shadow-sage-200/50 flex items-center justify-center gap-2 hover:-translate-y-1">
                Essayer Gratuitement
              </Link>
              <Link href="#demo-section" className="px-8 py-4 rounded-full bg-white border border-sage-200 text-sage-800 text-base font-medium hover:bg-sage-50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                <Eye className="w-4 h-4" />
                Voir la démo
              </Link>
            </div>

            <div className="flex items-center gap-6 text-xs text-stone-400 font-medium">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-sage-600" /> RGPD Compliant</span>
              <span className="flex items-center gap-1"><Server className="w-4 h-4 text-sage-600" /> Hébergé en France</span>
              <span className="flex items-center gap-1"><Lock className="w-4 h-4 text-sage-600" /> Données Chiffrées</span>
            </div>
          </div>

          {/* Hero Visual */}
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

      {/* Interactive Demo Section */}
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

          {/* Chat & Dashboard Split */}
          <div className="flex flex-col xl:flex-row items-start justify-center gap-10 xl:gap-16">

            {/* LEFT: Chat Collaborateur (Marie) */}
            <div className="flex-1 w-full max-w-lg mx-auto xl:max-w-none reveal delay-100 min-w-0">
              <div className="text-center mb-6 xl:text-left xl:pl-4">
                <span className="text-sm font-bold text-sage-900 bg-white px-4 py-2 rounded-full border border-sage-100 shadow-sm">
                  1. Marie se confie
                </span>
              </div>

              <div className="bg-stone-100 rounded-xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col h-[700px] relative">
                <div className="bg-stone-200 px-4 py-3 flex items-center gap-2 border-b border-stone-300">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500"></div>
                  </div>
                  <div className="mx-auto text-xs font-medium text-stone-500 bg-stone-100 px-4 py-1 rounded-md border border-stone-200 shadow-sm flex items-center gap-2">
                    <MessageSquare className="w-3 h-3" /> claovia.app/coach
                  </div>
                </div>

                <div className="bg-stone-50 p-6 border-b border-stone-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage-800 flex items-center justify-center text-white shadow-sm">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sage-900 text-lg">Clao • Coach RH</h3>
                    <p className="text-xs text-stone-500 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span> En ligne
                    </p>
                  </div>
                </div>

                <div className="flex-1 bg-stone-50/30 p-6 space-y-6 overflow-y-auto">
                  {/* Chat bubbles */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-sage-800 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-sm"><Bot className="w-4 h-4" /></div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100 max-w-[85%]">
                      Bonjour Marie ! Ravie de te retrouver pour ce REX. L'objectif est de faire le point sur ton vécu. Comment te sens-tu globalement dans ton poste en ce moment ?
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 text-xs shadow-sm border border-white"><User className="w-4 h-4" /></div>
                    <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[85%]">
                      Bonjour Clao. Honnêtement, c'est mitigé. J'adore mes clients, mais je me sens noyée sous l'administratif.
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-sage-800 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-sm"><Bot className="w-4 h-4" /></div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100 max-w-[85%]">
                      Je comprends. As-tu l'impression d'avoir le soutien nécessaire de la part de Baptiste sur ces aspects ?
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 text-xs shadow-sm border border-white"><User className="w-4 h-4" /></div>
                    <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[85%]">
                      Pas vraiment. Baptiste est très focus résultats. Quand je parle de mes blocages, j'ai l'impression qu'il ne voit que l'objectif, pas le chemin.
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-sage-800 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-sm"><Bot className="w-4 h-4" /></div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100 max-w-[85%]">
                      C'est un point clé. Si tu devais formuler une demande concrète pour qu'il puisse t'aider, quelle serait-elle ?
                    </div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 text-xs shadow-sm border border-white"><User className="w-4 h-4" /></div>
                    <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[85%]">
                      J'aimerais qu'on prenne 30 min/semaine pour revoir les priorités ensemble. Un vrai temps de coaching, pas du reporting.
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-sage-800 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-sm"><Bot className="w-4 h-4" /></div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100 max-w-[85%]">
                      C'est très clair. Je synthétise cela pour Baptiste en mettant l'accent sur ce besoin d'accompagnement opérationnel. Merci Marie !
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-stone-100">
                  <div className="flex gap-2">
                    <div className="flex-1 bg-stone-50 border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-400">Merci Clao...</div>
                    <button className="w-10 h-10 rounded-full bg-sage-800 text-white flex items-center justify-center shadow-sm">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER: Arrow */}
            <div className="flex flex-col items-center justify-center gap-3 reveal delay-200 xl:py-40">
              <div className="xl:rotate-0 rotate-90 bg-sage-100 p-4 rounded-full text-sage-600 shadow-inner border border-sage-200 group hover:scale-110 transition-transform cursor-default">
                <ArrowRight className="w-8 h-8 xl:w-10 xl:h-10 animate-pulse group-hover:animate-none" />
              </div>
              <span className="text-xs font-bold text-sage-500 uppercase tracking-wide bg-white px-2 py-1 rounded shadow-sm">Analyse IA</span>
            </div>

            {/* RIGHT: Manager Dashboard (Baptiste) */}
            <div className="flex-1 w-full max-w-lg mx-auto xl:max-w-none reveal delay-300 min-w-0">
              <div className="text-center mb-6 xl:text-left xl:pl-4">
                <span className="text-sm font-bold text-white bg-sage-900 px-4 py-2 rounded-full shadow-lg shadow-sage-200">
                  2. Baptiste reçoit
                </span>
              </div>

              <div className="bg-stone-100 rounded-xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col h-[700px] relative">
                <div className="bg-stone-200 px-4 py-3 flex items-center gap-2 border-b border-stone-300">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500"></div>
                  </div>
                  <div className="mx-auto text-xs font-medium text-stone-500 bg-stone-100 px-4 py-1 rounded-md border border-stone-200 shadow-sm flex items-center gap-2">
                    <Lock className="w-3 h-3" /> claovia.app/dashboard
                  </div>
                </div>

                <div className="flex-1 bg-stone-50 p-6 md:p-8 overflow-y-auto">
                  <div className="flex justify-between items-start mb-8 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sage-900 flex items-center justify-center text-white shadow-md">
                        <LayoutDashboard className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sage-900 text-xl">REX Manager</h3>
                        <p className="text-sm text-stone-500 mt-1 flex items-center gap-2">
                          <User className="w-3 h-3" /> Marie Dupont • Commerciale
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                      <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                        <BrainCircuit className="w-4 h-4 text-sage-500" /> Synthèse & Recommandation
                      </h4>
                      <div className="flex gap-4 items-start">
                        <div className="w-1 h-12 bg-orange-400 rounded-full shrink-0"></div>
                        <div>
                          <p className="text-sm text-stone-700 leading-relaxed mb-3">
                            <strong>Analyse :</strong> Marie est très engagée commercialement mais se sent saturée par l'administratif. Elle perçoit un décalage entre ses besoins opérationnels et un management qu'elle juge trop axé sur les résultats.
                          </p>
                          <div className="inline-flex items-center gap-2 text-sm text-sage-800 font-medium bg-sage-50 px-3 py-2 rounded-lg border border-sage-100">
                            <Lightbulb className="w-4 h-4 text-amber-500" />
                            Conseil : Passer d'une posture de "Contrôleur" à "Facilitateur" en l'aidant à prioriser.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ... more content mirroring the HTML ... */}
                    <div className="bg-stone-100 rounded-2xl p-6 border border-stone-200">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-sm font-bold text-sage-900 uppercase tracking-widest flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-sage-600" /> Kit Manager
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <details className="group bg-white rounded-xl border border-stone-200 overflow-hidden open:shadow-lg transition-all" open>
                          <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                <Mail className="w-5 h-5" />
                              </div>
                              <div>
                                <span className="block text-sm font-bold text-stone-800">Email d'invitation</span>
                                <span className="block text-xs text-stone-500">Ton : Constructif & Soutien</span>
                              </div>
                            </div>
                            <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="p-5 pt-0 border-t border-stone-100 mt-2 bg-stone-50/30">
                            <div className="mt-4 bg-white border border-stone-200 rounded-lg p-4 shadow-sm">
                              <p className="text-xs text-stone-400 font-mono mb-3 border-b border-stone-100 pb-2">Objet : Point de priorisation hebdomadaire</p>
                              <p className="text-sm text-stone-600 font-serif leading-relaxed">
                                Salue Marie,<br /><br />
                                J'ai bien reçu ton feedback via Claovia. Merci pour ta franchise sur la charge administrative.<br /><br />
                                Je te propose de mettre en place ce fameux créneau de 30 min, <strong>dédié exclusivement à tes priorités et tes blocages</strong> (on ne parlera pas de chiffres).<br /><br />
                                Dispo jeudi 10h pour lancer ça ?
                              </p>
                            </div>
                            <div className="flex gap-3 mt-4">
                              <button className="flex-1 flex items-center justify-center gap-2 bg-sage-800 text-white hover:bg-sage-900 py-2 rounded-lg text-xs font-bold transition-colors shadow-md">
                                <Send className="w-3 h-3" /> Envoyer maintenant
                              </button>
                            </div>
                          </div>
                        </details>

                        <details className="group bg-white rounded-xl border border-stone-200 overflow-hidden open:shadow-lg transition-all">
                          <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                <Mic2 className="w-5 h-5" />
                              </div>
                              <div>
                                <span className="block text-sm font-bold text-stone-800">Script d'Entretien</span>
                                <span className="block text-xs text-stone-500">Guide "Clé en main" - 30 min</span>
                              </div>
                            </div>
                            <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="p-5 pt-0 border-t border-stone-100 mt-2 bg-stone-50/30">
                            <div className="mt-4 space-y-6">

                              <div className="bg-purple-50 border border-purple-100 p-3 rounded-lg">
                                <h6 className="text-[10px] font-bold text-purple-800 uppercase mb-1">⚡ Avant d'entrer (Mindset)</h6>
                                <p className="text-[11px] text-purple-700 italic">Marie est engagée mais frustrée. Ton but n'est pas de la justifier, mais de l'écouter.</p>
                              </div>

                              <div className="relative pl-4 border-l-2 border-sage-300">
                                <h5 className="text-xs font-bold text-sage-800">1. L'Accroche (2 min)</h5>
                                <p className="text-[10px] text-stone-400 mb-1">Objectif : Faire baisser la pression</p>
                                <p className="text-xs text-stone-700 bg-white p-2 rounded border border-stone-100 shadow-sm italic">
                                  "Salut Marie. J'ai lu ton REX avec attention. Merci de m'avoir alerté sur ta charge administrative."
                                </p>
                              </div>
                            </div>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Section */}
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
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-sage-800 text-white rounded-full flex items-center justify-center font-bold border-4 border-sage-50">1</span>
                <Mic2 className="w-10 h-10 text-sage-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-center text-sage-900 mb-3">Écoute IA</h3>
              <p className="text-center text-stone-600 text-sm leading-relaxed">
                Clao, notre coach IA, mène une vraie conversation avec le collaborateur. <br /><strong>Anonyme ou identifié, au choix.</strong>
              </p>
            </div>

            <div className="relative z-10 reveal delay-200">
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 border border-sage-100 relative group">
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-sage-800 text-white rounded-full flex items-center justify-center font-bold border-4 border-sage-50">2</span>
                <BrainCircuit className="w-10 h-10 text-sage-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-center text-sage-900 mb-3">Analyse & Synthèse</h3>
              <p className="text-center text-stone-600 text-sm leading-relaxed">
                L'IA analyse 6 thématiques clés : Relation Manager, Charge, Objectifs, Motivation, Développement, Équipe.
              </p>
            </div>

            <div className="relative z-10 reveal delay-300">
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 border border-sage-100 relative group">
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-sage-800 text-white rounded-full flex items-center justify-center font-bold border-4 border-sage-50">3</span>
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
            <details className="group bg-sage-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:bg-sage-100 transition-colors">
              <summary className="flex items-center justify-between font-medium text-sage-900">
                Comment fonctionne l'anonymat des retours ?
                <span className="transition group-open:rotate-180"><ChevronDown className="w-5 h-5 text-sage-500" /></span>
              </summary>
              <p className="text-stone-600 mt-4 text-sm leading-relaxed">
                C'est une option clé. Le collaborateur peut choisir que ses réponses soient 100% anonymes. L'IA reformule alors les verbatims pour éviter toute identification par le style d'écriture, tout en gardant le sens du message.
              </p>
            </details>

            <details className="group bg-sage-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:bg-sage-100 transition-colors">
              <summary className="flex items-center justify-between font-medium text-sage-900">
                Combien de temps prend un REX ?
                <span className="transition group-open:rotate-180"><ChevronDown className="w-5 h-5 text-sage-500" /></span>
              </summary>
              <p className="text-stone-600 mt-4 text-sm leading-relaxed">
                Moins de 5 minutes pour le collaborateur. C'est une conversation fluide, pas un formulaire administratif lourd.
              </p>
            </details>

            <details className="group bg-sage-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:bg-sage-100 transition-colors">
              <summary className="flex items-center justify-between font-medium text-sage-900">
                L'IA remplace-t-elle le manager ?
                <span className="transition group-open:rotate-180"><ChevronDown className="w-5 h-5 text-sage-500" /></span>
              </summary>
              <p className="text-stone-600 mt-4 text-sm leading-relaxed">
                Jamais. Elle l'augmente. L'IA fait le travail de synthèse et de préparation (le "brouillon"), mais c'est le manager qui prend la décision finale et qui mène l'échange humain.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Values / Origin Story - REPLACED WITH REX VISUALIZATION */}
      <section id="values" className="py-24 lg:py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50 border border-sage-200 mb-8">
              <Sparkles className="w-4 h-4 text-sage-600" />
              <span className="text-xs font-medium text-sage-800 tracking-wide uppercase">Intelligence Managériale</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6 leading-tight">
              Pilotez votre équipe avec <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-sage-900">clarté et précision.</span>
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Fini le pilotage à l'aveugle. Claovia transforme les ressentis diffus en indicateurs clairs et en actions concrètes.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sage-900 text-sm">Détection Proactive</h4>
                  <p className="text-sm text-stone-500">Identifiez les risques de désengagement avant qu'ils ne deviennent critiques.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 shrink-0">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sage-900 text-sm">Actions "Clé en main"</h4>
                  <p className="text-sm text-stone-500">Recevez les scripts, emails et plans d'action prêts à l'emploi.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center reveal delay-200">
            <RexMockup />
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-white" id="contact">
        <div className="max-w-4xl mx-auto bg-sage-900 rounded-[3rem] p-12 text-center relative overflow-hidden reveal shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Prêt à clarifier votre management ?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://typebot.co/claovia-rex-clao-ia-05gi2vb" target="_blank" className="px-8 py-4 rounded-full bg-white text-sage-900 text-base font-bold hover:bg-stone-100 transition-all shadow-lg hover:scale-105 duration-200">
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
    </div>
  );
}
