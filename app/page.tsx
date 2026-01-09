"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Command, Menu, X, PlayCircle, ShieldCheck, Server, Lock,
  Eye, Sparkles, Bot, User, Send, LayoutDashboard, BrainCircuit,
  Lightbulb, Briefcase, Mail, ChevronDown, Mic2, Mic, Zap,
  ArrowRight, CheckCircle, MessageCircle, Layers, FileCheck, TrendingUp,
  Award, AlertTriangle, Users
} from "lucide-react";
import { RexMockup } from "@/components/landing/RexMockup";

export default function Home() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll reveal observer
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .story-section, .timeline-step').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Timeline scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById('peter-principle');
      if (!timelineSection) return;

      const rect = timelineSection.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const scrollProgress = (window.scrollY - sectionTop + window.innerHeight / 2) / sectionHeight;

      const progressBar = document.getElementById('timeline-progress-bar');
      if (progressBar) {
        progressBar.style.height = `${Math.max(0, Math.min(100, scrollProgress * 100))}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const managerEmail = formData.get('managerEmail') as string;
    const userName = formData.get('userName') as string;

    const params = new URLSearchParams();
    if (managerEmail) params.append('Manager Email', managerEmail);
    if (userName) params.append('Prénom', userName);

    const finalUrl = `https://typebot.co/claovia-rex-clao-ia-05gi2vb?${params.toString()}`;

    // Show loading state
    const btn = e.currentTarget.querySelector('button[type="submit"]');
    if (btn) {
      btn.setAttribute('disabled', 'true');
      btn.innerHTML = 'Lancement...';
    }

    setTimeout(() => {
      window.location.href = finalUrl;
    }, 800);
  };

  return (
    <div className="bg-sage-50 text-stone-600 antialiased font-sans selection:bg-sage-200 selection:text-sage-900 overflow-x-hidden">

      {/* ========== NAVIGATION ========== */}
      <nav className="fixed w-full z-50 top-0 left-0 bg-sage-50/80 backdrop-blur-md border-b border-sage-100 transition-all duration-300" id="navbar">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3 group">
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
            <Link href="#onboarding" className="px-6 py-2.5 rounded-full bg-sage-800 text-white text-sm font-medium hover:bg-sage-900 transition-all hover:shadow-lg hover:shadow-sage-200 active:scale-95 flex items-center gap-2">
              <PlayCircle className="w-4 h-4" />
              Tester le REX
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-sage-800 hover:text-sage-600 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-sage-100 absolute w-full shadow-lg z-40">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <Link href="#" className="text-sm font-medium text-stone-600" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
              <Link href="#how-it-works" className="text-sm font-medium text-stone-600" onClick={() => setMobileMenuOpen(false)}>Fonctionnalités</Link>
              <Link href="#demo-section" className="text-sm font-medium text-stone-600" onClick={() => setMobileMenuOpen(false)}>Démo</Link>
              <Link href="#values" className="text-sm font-medium text-stone-600" onClick={() => setMobileMenuOpen(false)}>Notre Vision</Link>
              <Link href="#contact" className="text-sm font-medium text-stone-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="#onboarding" className="block text-center px-5 py-3 rounded-xl bg-sage-800 text-white text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Tester le REX</Link>
            </div>
          </div>
        )}
      </nav>

      {/* ========== HERO SECTION AVEC ANIMATION REX ========== */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Background blobs */}
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
              <Link href="#onboarding" className="px-8 py-4 rounded-full bg-sage-800 text-white text-base font-medium hover:bg-sage-900 transition-all shadow-xl shadow-sage-200/50 flex items-center justify-center gap-2 hover:-translate-y-1">
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

          {/* ========== HERO VISUAL : 3D MOCKUP REX ========== */}
          <div className="relative hidden lg:block">
            <RexMockup />
          </div>
        </div>
      </header>

      {/* ========== SECTION DÉMO COMPLÈTE ========== */}
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

          {/* Comparaison côte à côte */}
          <div className="flex flex-col xl:flex-row items-start justify-center gap-10 xl:gap-16">

            {/* GAUCHE: Chat Collaborateur */}
            <div className="flex-1 w-full max-w-lg mx-auto xl:max-w-none reveal delay-100">
              <div className="text-center mb-6 xl:text-left xl:pl-4">
                <span className="text-sm font-bold text-sage-900 bg-white px-4 py-2 rounded-full border border-sage-100 shadow-sm">
                  1. Marie se confie
                </span>
              </div>

              <div className="bg-stone-100 rounded-xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col h-[600px]">
                {/* Window bar */}
                <div className="bg-stone-200 px-4 py-3 flex items-center gap-2 border-b border-stone-300">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto text-xs text-stone-500 bg-white px-3 py-1 rounded border border-stone-200 flex items-center gap-1">
                    <Lock className="w-3 h-3" /> claovia.app/coach
                  </div>
                </div>

                {/* Header */}
                <div className="bg-sage-800 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Clao • Coach RH</h3>
                    <p className="text-xs text-sage-200"><span className="w-2 h-2 bg-green-400 rounded-full inline-block mr-1"></span>En ligne</p>
                  </div>
                </div>

                {/* Chat */}
                <div className="flex-1 bg-stone-50 p-4 space-y-4 overflow-y-auto">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-sage-800 flex-shrink-0 flex items-center justify-center text-white">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100 max-w-[80%]">
                      Bonjour Marie ! Comment te sens-tu dans ton poste en ce moment ?
                    </div>
                  </div>

                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[80%]">
                      Honnêtement, c'est mitigé. J'adore mes clients mais je suis noyée sous l'administratif.
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-sage-800 flex-shrink-0 flex items-center justify-center text-white">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100 max-w-[80%]">
                      As-tu l'impression d'avoir le soutien de Baptiste sur ces aspects ?
                    </div>
                  </div>

                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[80%]">
                      Pas vraiment. Il est très focus résultats. Quand je parle de blocages, il ne voit que l'objectif.
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-sage-800 flex-shrink-0 flex items-center justify-center text-white">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100 max-w-[80%]">
                      Quelle demande concrète formulerais-tu pour qu'il puisse t'aider ?
                    </div>
                  </div>

                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[80%]">
                      J'aimerais 30 min/semaine pour revoir les priorités. Un vrai temps de coaching, pas du reporting.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CENTRE: Flèche */}
            <div className="flex flex-col items-center justify-center gap-3 reveal delay-200 xl:py-40">
              <div className="xl:rotate-0 rotate-90 bg-sage-100 p-4 rounded-full text-sage-600 shadow-inner border border-sage-200">
                <ArrowRight className="w-8 h-8 animate-pulse" />
              </div>
              <span className="text-xs font-bold text-sage-500 uppercase bg-white px-2 py-1 rounded shadow-sm">Analyse IA</span>
            </div>

            {/* DROITE: REX Manager */}
            <div className="flex-1 w-full max-w-lg mx-auto xl:max-w-none reveal delay-300">
              <div className="text-center mb-6 xl:text-left xl:pl-4">
                <span className="text-sm font-bold text-white bg-sage-900 px-4 py-2 rounded-full shadow-lg">
                  2. Baptiste reçoit
                </span>
              </div>

              <div className="bg-stone-100 rounded-xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col h-[600px]">
                {/* Window bar */}
                <div className="bg-stone-200 px-4 py-3 flex items-center gap-2 border-b border-stone-300">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto text-xs text-stone-500 bg-white px-3 py-1 rounded border border-stone-200 flex items-center gap-1">
                    <Lock className="w-3 h-3" /> claovia.app/dashboard
                  </div>
                </div>

                <div className="flex-1 bg-white p-6 overflow-y-auto">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-stone-100">
                    <div className="w-12 h-12 rounded-xl bg-sage-900 flex items-center justify-center text-white">
                      <LayoutDashboard className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sage-900">REX Manager</h3>
                      <p className="text-xs text-stone-500">Marie Dupont • Commerciale • Aujourd'hui</p>
                    </div>
                  </div>

                  {/* Synthèse */}
                  <div className="bg-sage-50 p-4 rounded-xl mb-4 border-l-4 border-orange-400">
                    <h4 className="text-xs font-bold text-stone-400 uppercase mb-2 flex items-center gap-2">
                      <BrainCircuit className="w-4 h-4 text-sage-500" /> Synthèse
                    </h4>
                    <p className="text-sm text-stone-700">
                      Marie est engagée mais saturée par l'admin. Elle perçoit un management trop axé résultats.
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs text-sage-800 font-medium bg-white px-3 py-1 rounded-lg border border-sage-100">
                      <Lightbulb className="w-3 h-3 text-amber-500" />
                      Passer de "Contrôleur" à "Facilitateur"
                    </div>
                  </div>

                  {/* Thématiques */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="p-2 bg-stone-50 rounded-lg text-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mx-auto mb-1"></div>
                      <p className="text-[10px] font-bold text-stone-500">Relation</p>
                    </div>
                    <div className="p-2 bg-stone-50 rounded-lg text-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mx-auto mb-1"></div>
                      <p className="text-[10px] font-bold text-stone-500">Charge</p>
                    </div>
                    <div className="p-2 bg-stone-50 rounded-lg text-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mx-auto mb-1"></div>
                      <p className="text-[10px] font-bold text-stone-500">Objectifs</p>
                    </div>
                  </div>

                  {/* Plan d'action */}
                  <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500 mb-4">
                    <p className="text-[10px] font-bold text-red-600 uppercase">À faire maintenant</p>
                    <p className="text-xs text-stone-700">Envoyer l'email de prise de contact</p>
                  </div>

                  {/* Kit Manager */}
                  <div className="bg-stone-100 p-3 rounded-xl">
                    <h4 className="text-xs font-bold text-sage-900 mb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" /> Kit Manager
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded-lg text-xs flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-500" />
                        <span>Email pré-rédigé</span>
                        <span className="ml-auto text-sage-600 font-bold">Prêt</span>
                      </div>
                      <div className="bg-white p-2 rounded-lg text-xs flex items-center gap-2">
                        <Mic2 className="w-4 h-4 text-purple-500" />
                        <span>Script d'entretien</span>
                        <span className="ml-auto text-sage-600 font-bold">Prêt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-20 bg-white border-y border-sage-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">Le Coût Caché du Silence</h2>
            <p className="text-stone-500">80% des départs sont liés à un problème de management.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-sage-50 border border-sage-100 text-center reveal delay-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-sage-800 mb-2">150%</div>
              <div className="text-sm font-semibold text-stone-400 uppercase mb-4">du salaire annuel</div>
              <p className="text-stone-600 text-sm">Coût moyen de remplacement d'un collaborateur qualifié.</p>
            </div>
            <div className="p-8 rounded-2xl bg-sage-50 border border-sage-100 text-center reveal delay-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-sage-800 mb-2">45j</div>
              <div className="text-sm font-semibold text-stone-400 uppercase mb-4">Temps perdu</div>
              <p className="text-stone-600 text-sm">Délai moyen pour détecter un désengagement sans outils.</p>
            </div>
            <div className="p-8 rounded-2xl bg-sage-50 border border-sage-100 text-center reveal delay-300 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-sage-800 mb-2">6 mois</div>
              <div className="text-sm font-semibold text-stone-400 uppercase mb-4">de productivité</div>
              <p className="text-stone-600 text-sm">Perdus avant qu'un nouveau talent soit opérationnel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PETER PRINCIPLE TIMELINE ========== */}
      <section id="peter-principle" className="relative py-32 px-6 bg-gradient-to-b from-sage-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sage-200 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold mb-4">
              <AlertTriangle className="w-3 h-3" /> Le Principe de Peter
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-sage-900 mb-6">
              Pourquoi les bons experts<br />deviennent des managers en difficulté ?
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Le Principe de Peter explique qu'on est promu jusqu'à atteindre son niveau d'incompétence.
              Excellent commercial ne signifie pas excellent manager.
            </p>
          </div>

          <div className="relative">
            {/* Timeline vertical line with progress */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-sage-200 rounded-full overflow-hidden">
              <div id="timeline-progress-bar" className="timeline-progress w-full h-0 bg-gradient-to-b from-sage-500 to-sage-800 transition-all duration-100"></div>
            </div>

            {/* Timeline steps */}
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="timeline-step relative flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                    <TrendingUp className="w-3 h-3" /> Étape 1
                  </div>
                  <h3 className="text-2xl font-bold text-sage-900 mb-2">L'expert technique</h3>
                  <p className="text-stone-600">
                    Marie excelle dans son domaine. Ses compétences sont reconnues, ses résultats parlent d'eux-mêmes.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-sage-200 rounded-full flex items-center justify-center shadow-lg z-10">
                  <Award className="w-7 h-7 text-green-600" />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>

              {/* Step 2 */}
              <div className="timeline-step relative flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12"></div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-sage-200 rounded-full flex items-center justify-center shadow-lg z-10">
                  <TrendingUp className="w-7 h-7 text-blue-600" />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                    <Users className="w-3 h-3" /> Étape 2
                  </div>
                  <h3 className="text-2xl font-bold text-sage-900 mb-2">La promotion</h3>
                  <p className="text-stone-600">
                    Récompense logique : elle devient manager. Mais gérer une équipe nécessite des compétences totalement différentes.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="timeline-step relative flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                    <AlertTriangle className="w-3 h-3" /> Étape 3
                  </div>
                  <h3 className="text-2xl font-bold text-sage-900 mb-2">Le décalage</h3>
                  <p className="text-stone-600">
                    Marie n'a jamais été formée au management. Elle reproduit ce qu'elle a vécu, sans outils ni recul.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-sage-200 rounded-full flex items-center justify-center shadow-lg z-10">
                  <AlertTriangle className="w-7 h-7 text-orange-600" />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>

              {/* Step 4 */}
              <div className="timeline-step relative flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="md:w-1/2 md:text-right md:pr-12"></div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-sage-500 rounded-full flex items-center justify-center shadow-xl z-10 animate-pulse-soft">
                  <Sparkles className="w-7 h-7 text-sage-600" />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
                    <CheckCircle className="w-3 h-3" /> Solution Claovia
                  </div>
                  <h3 className="text-2xl font-bold text-sage-900 mb-2">L'accompagnement augmenté</h3>
                  <p className="text-stone-600 mb-4">
                    Claovia donne aux managers les outils qu'ils n'ont jamais eus : écoute structurée, analyse objective, plans d'action concrets.
                  </p>
                  <Link href="#onboarding" className="inline-flex items-center gap-2 text-sage-800 font-semibold hover:text-sage-900 transition-colors">
                    Découvrir la solution <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NOTRE VISION ========== */}
      <section id="values" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 border border-sage-200 text-sage-800 text-xs font-semibold mb-4">
              <Sparkles className="w-3 h-3" /> Notre Vision
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-sage-900 mb-6">
              Pourquoi Claovia existe
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Parce que nous avons vécu ce silence. Ces départs évitables. Ces talents perdus faute d'écoute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="story-section bg-sage-50 rounded-3xl p-8 border border-sage-100">
              <div className="w-14 h-14 bg-sage-800 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">L'origine</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                Claovia est né d'une conviction : <strong>les outils RH traditionnels ne capturent pas l'essentiel</strong>.
                Les entretiens annuels arrivent trop tard. Les questionnaires anonymes restent sans suite.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Nous avons conçu un système où la parole collaborateur devient <strong>immédiatement actionnable</strong> pour le manager.
              </p>
            </div>

            <div className="story-section bg-white rounded-3xl p-8 border border-sage-100 shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">L'impact</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                Claovia ne remplace pas l'humain. <strong>Il l'augmente</strong>. En donnant au manager les bonnes informations,
                au bon moment, avec les bons outils d'action.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Notre mission : transformer chaque ressenti en opportunité de renforcer la relation managériale.
              </p>
            </div>
          </div>

          <div className="text-center story-section">
            <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-sage-900 text-white px-8 py-6 rounded-2xl">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-sage-600 border-4 border-sage-900 flex items-center justify-center font-bold">MD</div>
                <div className="w-12 h-12 rounded-full bg-sage-500 border-4 border-sage-900 flex items-center justify-center font-bold">BL</div>
                <div className="w-12 h-12 rounded-full bg-sage-400 border-4 border-sage-900 flex items-center justify-center font-bold">TC</div>
              </div>
              <div className="text-left">
                <p className="font-bold text-lg mb-1">Rejoignez les managers qui transforment leur équipe</p>
                <p className="text-sage-200 text-sm">+150 collaborateurs accompagnés depuis 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3 ÉTAPES ========== */}
      <section id="how-it-works" className="py-24 px-6 bg-sage-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">Du message à l'action en 3 étapes</h2>
            <p className="text-stone-500">Plus besoin d'attendre l'entretien annuel.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-sage-200 via-sage-300 to-sage-200 z-0"></div>

            <div className="relative z-10 reveal delay-100">
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 border border-sage-100 relative">
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-sage-800 text-white rounded-full flex items-center justify-center font-bold border-4 border-sage-50">1</span>
                <Mic className="w-10 h-10 text-sage-600" />
              </div>
              <h3 className="text-xl font-bold text-center text-sage-900 mb-3">Écoute IA</h3>
              <p className="text-center text-stone-600 text-sm">Clao mène une vraie conversation. <strong>Anonyme ou identifié.</strong></p>
            </div>

            <div className="relative z-10 reveal delay-200">
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 border border-sage-100 relative">
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-sage-800 text-white rounded-full flex items-center justify-center font-bold border-4 border-sage-50">2</span>
                <BrainCircuit className="w-10 h-10 text-sage-600" />
              </div>
              <h3 className="text-xl font-bold text-center text-sage-900 mb-3">Analyse & Synthèse</h3>
              <p className="text-center text-stone-600 text-sm">L'IA analyse les 6 thématiques clés.</p>
            </div>

            <div className="relative z-10 reveal delay-300">
              <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 border border-sage-100 relative">
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-sage-800 text-white rounded-full flex items-center justify-center font-bold border-4 border-sage-50">3</span>
                <Zap className="w-10 h-10 text-sage-600" />
              </div>
              <h3 className="text-xl font-bold text-center text-sage-900 mb-3">Action Manager</h3>
              <p className="text-center text-stone-600 text-sm">Plan complet : mails pré-rédigés, guides d'entretien.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-sage-900 mb-12 reveal">Questions Fréquentes</h2>

          <div className="space-y-4 reveal delay-100">
            <details className="group bg-sage-50 rounded-2xl p-6 cursor-pointer hover:bg-sage-100 transition-colors">
              <summary className="flex items-center justify-between font-medium text-sage-900 [&::-webkit-details-marker]:hidden">
                Comment fonctionne l'anonymat ?
                <ChevronDown className="w-5 h-5 text-sage-500 transition group-open:rotate-180" />
              </summary>
              <p className="text-stone-600 mt-4 text-sm">Le collaborateur peut choisir l'anonymat total. L'IA reformule les verbatims pour éviter toute identification.</p>
            </details>

            <details className="group bg-sage-50 rounded-2xl p-6 cursor-pointer hover:bg-sage-100 transition-colors">
              <summary className="flex items-center justify-between font-medium text-sage-900 [&::-webkit-details-marker]:hidden">
                Combien de temps prend un REX ?
                <ChevronDown className="w-5 h-5 text-sage-500 transition group-open:rotate-180" />
              </summary>
              <p className="text-stone-600 mt-4 text-sm">Moins de 5 minutes. Une conversation fluide, pas un formulaire administratif.</p>
            </details>

            <details className="group bg-sage-50 rounded-2xl p-6 cursor-pointer hover:bg-sage-100 transition-colors">
              <summary className="flex items-center justify-between font-medium text-sage-900 [&::-webkit-details-marker]:hidden">
                L'IA remplace-t-elle le manager ?
                <ChevronDown className="w-5 h-5 text-sage-500 transition group-open:rotate-180" />
              </summary>
              <p className="text-stone-600 mt-4 text-sm">Jamais. L'IA prépare, le manager décide et mène l'échange humain.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ========== SECTION ONBOARDING (INTÉGRÉE) ========== */}
      <section id="onboarding" className="py-24 px-6 bg-white border-t border-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sage-50/50 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">

          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sage-200 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-sage-800 tracking-wide uppercase">Espace Collaborateur</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-sage-900 mb-6">
              Transformez votre ressenti<br />en actions managériales
            </h2>
            <p className="text-lg text-stone-500 max-w-xl mx-auto">
              Vous parlez librement, l'IA centralise et structure l'information pour votre manager.
            </p>
          </div>

          {/* Schéma du process */}
          <div className="w-full bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-sage-200/50 border border-sage-100 mb-16 relative overflow-hidden reveal delay-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-blue-100">
                  <MessageCircle className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-sage-900 mb-2">1. Discussion avec Clao</h3>
                <p className="text-xs text-stone-400">"C'est le chaos sur le projet..."</p>
              </div>

              <div className="flex flex-col items-center relative">
                <div className="hidden md:block absolute top-10 left-[-50%] right-[-50%] h-1 rounded-full connection-line -z-10 opacity-30"></div>
                <div className="bg-sage-900 w-20 h-20 rounded-full flex items-center justify-center text-white mb-4 shadow-lg border-4 border-white animate-pulse-soft">
                  <Layers className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-sage-900 mb-1">Centralisation IA</h3>
                <p className="text-xs text-stone-400">Analyse & Structuration</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center text-green-600 mb-6 shadow-sm border border-green-100">
                  <FileCheck className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-sage-900 mb-2">3. Le Manager reçoit</h3>
                <p className="text-xs text-stone-400">"Besoin de structuration."</p>
              </div>
            </div>

            <p className="text-center text-sm text-stone-400 mt-10 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" /> Reformulation professionnelle & Centralisation
            </p>
          </div>

          {/* Formulaire */}
          <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-stone-100 reveal delay-200 text-center">
            <h3 className="text-xl font-bold text-sage-900 mb-6">Lancer votre REX</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 text-left ml-1">Prénom</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Ex: Thomas"
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 text-left ml-1">Email Manager</label>
                <input
                  type="email"
                  name="managerEmail"
                  required
                  placeholder="manager@entreprise.com"
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-sage-800 hover:bg-sage-900 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg"
              >
                Commencer <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-stone-100 flex justify-center gap-6 text-[10px] text-stone-400 font-medium">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-green-500" /> Confidentiel</span>
              <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-sage-500" /> Données chiffrées</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer id="contact" className="bg-white pt-16 pb-8 px-6 border-t border-stone-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="font-bold text-xl text-sage-900">Claovia</span>
          <p className="text-xs text-stone-400">© 2026 Claovia. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
