"use client";

import { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // Initialize Lucide icons after component mounts
    if (typeof window !== "undefined" && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" onLoad={() => {
        if ((window as any).lucide) {
          (window as any).lucide.createIcons();
        }
      }} />

      <div className="bg-sage-50 text-stone-600 antialiased font-sans selection:bg-sage-200 selection:text-sage-900 overflow-x-hidden">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

          * { font-family: 'Inter', sans-serif; }

          /* Sage colors */
          .bg-sage-50 { background-color: #F4F7F5; }
          .bg-sage-100 { background-color: #E3EBE6; }
          .bg-sage-200 { background-color: #C5D6CC; }
          .bg-sage-300 { background-color: #A3C2B0; }
          .bg-sage-400 { background-color: #87AB96; }
          .bg-sage-500 { background-color: #6B9078; }
          .bg-sage-600 { background-color: #4F705D; }
          .bg-sage-700 { background-color: #3E5649; }
          .bg-sage-800 { background-color: #2D4438; }
          .bg-sage-900 { background-color: #1F3027; }

          .text-sage-50 { color: #F4F7F5; }
          .text-sage-100 { color: #E3EBE6; }
          .text-sage-200 { color: #C5D6CC; }
          .text-sage-300 { color: #A3C2B0; }
          .text-sage-400 { color: #87AB96; }
          .text-sage-500 { color: #6B9078; }
          .text-sage-600 { color: #4F705D; }
          .text-sage-700 { color: #3E5649; }
          .text-sage-800 { color: #2D4438; }
          .text-sage-900 { color: #1F3027; }

          .border-sage-50 { border-color: #F4F7F5; }
          .border-sage-100 { border-color: #E3EBE6; }
          .border-sage-200 { border-color: #C5D6CC; }
          .border-sage-300 { border-color: #A3C2B0; }
          .border-sage-400 { border-color: #87AB96; }
          .border-sage-500 { border-color: #6B9078; }
          .border-sage-600 { border-color: #4F705D; }
          .border-sage-700 { border-color: #3E5649; }
          .border-sage-800 { border-color: #2D4438; }
          .border-sage-900 { border-color: #1F3027; }

          .shadow-sage-200 { --tw-shadow-color: #C5D6CC; }

          /* Base Reveal Class */
          .reveal {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: opacity, transform;
          }
          .reveal.active {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          .delay-100 { transition-delay: 0.1s; }
          .delay-200 { transition-delay: 0.2s; }
          .delay-300 { transition-delay: 0.3s; }

          /* Story Section Animations */
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

          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          /* Custom Scrollbar */
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #F4F7F5; }
          ::-webkit-scrollbar-thumb { background: #C5D6CC; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #A3C2B0; }
        `}</style>

        <nav className="fixed w-full z-50 top-0 left-0 bg-sage-50/80 backdrop-blur-md border-b border-sage-100 transition-all duration-300" id="navbar">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-900/20 border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.4),transparent_70%)] opacity-70"></div>
                <i data-lucide="command" className="w-5 h-5 text-cyan-100 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] stroke-[1.5]"></i>
              </div>
              <span className="font-semibold text-sage-900 tracking-tight text-xl">Claovia</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">Accueil</a>
              <a href="#how-it-works" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">Fonctionnalités</a>
              <a href="#demo-section" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">Démo</a>
              <a href="#values" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">Notre Vision</a>
              <a href="#contact" className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors">Contact</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/onboarding" className="px-6 py-2.5 rounded-full bg-sage-800 text-white text-sm font-medium hover:bg-sage-900 transition-all hover:shadow-lg hover:shadow-sage-200 active:scale-95 flex items-center gap-2">
                <i data-lucide="play-circle" className="w-4 h-4"></i>
                Tester le REX
              </Link>
            </div>

            <button id="mobile-menu-btn" className="md:hidden text-sage-800 hover:text-sage-600 focus:outline-none" onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) menu.classList.toggle('hidden');
            }}>
              <i data-lucide="menu" className="w-6 h-6"></i>
            </button>
          </div>

          <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-sage-100 absolute w-full shadow-lg z-40">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <a href="#" className="text-sm font-medium text-stone-600">Accueil</a>
              <a href="#how-it-works" className="text-sm font-medium text-stone-600">Fonctionnalités</a>
              <a href="#demo-section" className="text-sm font-medium text-stone-600">Démo</a>
              <a href="#values" className="text-sm font-medium text-stone-600">Notre Vision</a>
              <a href="#contact" className="text-sm font-medium text-stone-600">Contact</a>
              <Link href="/onboarding" className="block text-center px-5 py-3 rounded-xl bg-sage-800 text-white text-sm font-medium">Tester le REX</Link>
            </div>
          </div>
        </nav>

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
                <span className="text-xs font-semibold text-sage-800 tracking-wide uppercase">Pilotage d'Équipe Augmenté</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-sage-900 tracking-tight leading-[1.1] mb-6">
                Ne laissez plus vos talents<br/>
                <span className="text-stone-400">partir en silence.</span>
              </h1>

              <p className="text-lg text-stone-600 max-w-lg mb-10 leading-relaxed">
                Transformez le ressenti collaborateur en <strong>plan d'action managérial immédiat</strong>. Avant qu'il ne soit trop tard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="https://typebot.co/claovia-rex-clao-ia-05gi2vb" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-sage-800 text-white text-base font-medium hover:bg-sage-900 transition-all shadow-xl shadow-sage-200/50 flex items-center justify-center gap-2 hover:-translate-y-1">
                  Essayer Gratuitement
                </a>
                <a href="#demo-section" className="px-8 py-4 rounded-full bg-white border border-sage-200 text-sage-800 text-base font-medium hover:bg-sage-50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                  <i data-lucide="eye" className="w-4 h-4"></i>
                  Voir la démo
                </a>
              </div>

              <div className="flex items-center gap-6 text-xs text-stone-400 font-medium">
                <span className="flex items-center gap-1"><i data-lucide="shield-check" className="w-4 h-4 text-sage-600"></i> RGPD Compliant</span>
                <span className="flex items-center gap-1"><i data-lucide="server" className="w-4 h-4 text-sage-600"></i> Hébergé en France</span>
                <span className="flex items-center gap-1"><i data-lucide="lock" className="w-4 h-4 text-sage-600"></i> Données Chiffrées</span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-sage-100 to-transparent rounded-full blur-3xl opacity-40"></div>
              <div className="relative bg-white/50 backdrop-blur-md border border-white/50 p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <i data-lucide="activity" className="w-6 h-6 text-sage-600"></i>
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

        {/* Simplified demo and other sections - keeping only essential content */}
        <section id="demo-section" className="py-24 px-6 bg-gradient-to-b from-white via-sage-50/50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">Parlez, Claovia s'occupe du reste</h2>
            <p className="text-stone-500 max-w-2xl mx-auto text-lg mb-16">
              Le collaborateur s'exprime librement. L'IA génère instantanément l'analyse complète et les outils pour le manager.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white border-y border-sage-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-sage-900 mb-4">Le Coût Caché du Silence</h2>
              <p className="text-stone-500">80% des départs sont liés à un problème de management.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-sage-50 border border-sage-100 text-center">
                <div className="text-4xl font-bold text-sage-800 mb-2">150%</div>
                <div className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-4">du salaire annuel</div>
                <p className="text-stone-600 text-sm">Coût moyen de remplacement d'un collaborateur qualifié.</p>
              </div>
              <div className="p-8 rounded-2xl bg-sage-50 border border-sage-100 text-center">
                <div className="text-4xl font-bold text-sage-800 mb-2">45j</div>
                <div className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-4">Temps perdu</div>
                <p className="text-stone-600 text-sm">Délai moyen pour détecter un désengagement silencieux.</p>
              </div>
              <div className="p-8 rounded-2xl bg-sage-50 border border-sage-100 text-center">
                <div className="text-4xl font-bold text-sage-800 mb-2">6 mois</div>
                <div className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-4">de productivité</div>
                <p className="text-stone-600 text-sm">Perdus avant qu'un nouveau talent soit opérationnel.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 px-6 bg-sage-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-sage-900 mb-4">Du message à l'action en 3 étapes</h2>
              <p className="text-stone-500">Plus besoin d'attendre l'entretien annuel.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 border border-sage-100">
                  <i data-lucide="mic" className="w-10 h-10 text-sage-600"></i>
                </div>
                <h3 className="text-xl font-bold text-sage-900 mb-3">Écoute IA</h3>
                <p className="text-stone-600 text-sm">Conversation avec le collaborateur. Anonyme ou identifié.</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 border border-sage-100">
                  <i data-lucide="brain-circuit" className="w-10 h-10 text-sage-600"></i>
                </div>
                <h3 className="text-xl font-bold text-sage-900 mb-3">Analyse & Synthèse</h3>
                <p className="text-stone-600 text-sm">6 thématiques clés analysées par l'IA.</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 border border-sage-100">
                  <i data-lucide="zap" className="w-10 h-10 text-sage-600"></i>
                </div>
                <h3 className="text-xl font-bold text-sage-900 mb-3">Action Manager</h3>
                <p className="text-stone-600 text-sm">Plan complet avec mails et guides d'entretien.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white" id="contact">
          <div className="max-w-4xl mx-auto bg-sage-900 rounded-[3rem] p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Prêt à clarifier votre management ?</h2>
            <a href="https://typebot.co/claovia-rex-clao-ia-05gi2vb" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-full bg-white text-sage-900 text-base font-bold hover:bg-stone-100 transition-all shadow-lg">
              Lancer mon premier REX
            </a>
          </div>
        </section>

        <footer className="bg-white pt-16 pb-8 px-6 border-t border-stone-100">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-bold text-xl text-sage-900">Claovia</span>
            <p className="text-xs text-stone-400">© 2026 Claovia. Tous droits réservés.</p>
          </div>
        </footer>

        <Script id="scroll-reveal" strategy="lazyOnload">{`
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('visible');
              }
            });
          }, { threshold: 0.1 });

          document.querySelectorAll('.reveal, .story-section, .fade-in-up, .scale-in').forEach((element) => {
            observer.observe(element);
          });

          window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (nav) {
              if (window.scrollY > 20) {
                nav.classList.add('shadow-sm', 'bg-sage-50/90');
              } else {
                nav.classList.remove('shadow-sm', 'bg-sage-50/90');
              }
            }
          });
        `}</Script>
      </div>
    </>
  );
}
