"use client";

import { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

export default function OnboardingPage() {
  useEffect(() => {
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

      <div className="bg-sage-50 text-stone-600 antialiased font-sans selection:bg-sage-200 selection:text-sage-900 min-h-screen flex flex-col">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

          * { font-family: 'Inter', sans-serif; }

          /* Sage colors */
          .bg-sage-50 { background-color: #F4F7F5; }
          .bg-sage-100 { background-color: #E3EBE6; }
          .bg-sage-200 { background-color: #C5D6CC; }
          .bg-sage-500 { background-color: #6B9078; }
          .bg-sage-600 { background-color: #4F705D; }
          .bg-sage-800 { background-color: #2D4438; }
          .bg-sage-900 { background-color: #1F3027; }

          .text-sage-600 { color: #4F705D; }
          .text-sage-800 { color: #2D4438; }
          .text-sage-900 { color: #1F3027; }

          .border-sage-100 { border-color: #E3EBE6; }
          .border-sage-200 { border-color: #C5D6CC; }

          .shadow-sage-200 { box-shadow: 0 20px 25px -5px rgba(197, 214, 204, 0.5); }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes pulseSoft {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }

          @keyframes flowLine {
            0% { background-position: 100% 0; }
            100% { background-position: 0 0; }
          }

          .animate-slide-up {
            animation: slideUp 0.6s ease-out forwards;
          }

          .animate-pulse-soft {
            animation: pulseSoft 3s infinite;
          }

          .connection-line {
            background: linear-gradient(90deg, #E3EBE6 50%, #6B9078 50%);
            background-size: 200% 100%;
            animation: flowLine 3s linear infinite;
          }
        `}</style>

        <header className="py-6 px-6 flex justify-center">
          <Link href="/" className="group transition-opacity hover:opacity-80">
            <span className="font-bold text-2xl text-sage-900 tracking-tight">Claovia</span>
          </Link>
        </header>

        <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-8 md:py-12 flex flex-col items-center">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sage-200 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-sage-800 tracking-wide uppercase">Espace Collaborateur</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-sage-900 mb-6 leading-tight">
              Transformez votre ressenti<br/>en actions managériales
            </h1>
            <p className="text-lg text-stone-500 max-w-xl mx-auto">
              L'expérience commence ici. Vous parlez librement, l'IA centralise et structure l'information pour votre manager.
            </p>
          </div>

          <div className="w-full bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-sage-200/50 border border-sage-100 mb-16 relative overflow-hidden animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center text-center">
              <div className="flex flex-col items-center group relative z-10">
                <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-blue-100">
                  <i data-lucide="message-circle" className="w-10 h-10"></i>
                </div>
                <h3 className="font-bold text-sage-900 mb-2">1. Discussion avec Clao</h3>
                <div className="bg-white p-3 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-none border border-blue-100 text-xs text-stone-500 italic shadow-sm max-w-[220px] mx-auto text-left relative">
                  <div className="absolute -bottom-2 -right-0 w-4 h-4 bg-white border-b border-r border-blue-100 transform rotate-45"></div>
                  "Honnêtement, c'est le chaos sur le projet X, je me sens seul..."
                </div>
              </div>

              <div className="flex flex-col items-center relative z-20">
                <div className="hidden md:block absolute top-10 left-[-50%] right-[-50%] h-1 rounded-full connection-line -z-10 opacity-30"></div>

                <div className="bg-sage-900 w-20 h-20 rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-sage-200 border-4 border-white animate-pulse-soft">
                  <i data-lucide="layers" className="w-8 h-8"></i>
                </div>
                <h3 className="font-bold text-sage-900 mb-1">Centralisation Intelligente</h3>
                <div className="flex gap-2 text-xs text-sage-600 font-medium bg-sage-50 px-3 py-1 rounded-full border border-sage-100 mb-2">
                  <i data-lucide="network" className="w-3 h-3 mt-0.5"></i> Analyse & Structuration
                </div>
                <p className="text-xs text-stone-500 max-w-[180px] leading-relaxed">
                  L'IA agrège vos retours pour en extraire l'essentiel sans perdre le sens.
                </p>
              </div>

              <div className="flex flex-col items-center group relative z-10">
                <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center text-green-600 mb-6 shadow-sm border border-green-100">
                  <i data-lucide="file-check" className="w-10 h-10"></i>
                </div>
                <h3 className="font-bold text-sage-900 mb-2">3. Le Manager reçoit</h3>
                <div className="bg-white p-3 rounded-xl border border-green-100 text-xs text-stone-600 font-medium shadow-sm max-w-[220px] mx-auto text-left flex gap-2 items-start">
                  <div className="w-1 h-full bg-green-500 rounded-full shrink-0"></div>
                  "Le collaborateur exprime un besoin de structuration et de soutien sur le projet X."
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-stone-400 mt-10 flex items-center justify-center gap-2">
              <i data-lucide="check-circle" className="w-4 h-4"></i>
              Reformulation professionnelle & Centralisation de l'info
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="p-6 bg-white rounded-2xl border border-stone-100 text-center hover:shadow-md transition-all">
              <div className="bg-sage-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                <i data-lucide="heart-handshake" className="w-6 h-6"></i>
              </div>
              <h4 className="font-bold text-sage-900 mb-2">Authenticité</h4>
              <p className="text-sm text-stone-500">Parlez avec vos mots, sans filtre. Clao comprend le contexte émotionnel.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-stone-100 text-center hover:shadow-md transition-all">
              <div className="bg-sage-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                <i data-lucide="layout-grid" className="w-6 h-6"></i>
              </div>
              <h4 className="font-bold text-sage-900 mb-2">Clarté</h4>
              <p className="text-sm text-stone-500">L'information est centralisée et organisée pour être directement exploitable.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-stone-100 text-center hover:shadow-md transition-all">
              <div className="bg-sage-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                <i data-lucide="zap" className="w-6 h-6"></i>
              </div>
              <h4 className="font-bold text-sage-900 mb-2">Impact Rapide</h4>
              <p className="text-sm text-stone-500">Votre manager reçoit des outils pour agir, pas juste un constat.</p>
            </div>
          </div>

          <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-stone-100 animate-slide-up text-center" style={{animationDelay: '0.6s'}}>
            <h3 className="text-xl font-bold text-sage-900 mb-6">Lancer votre REX</h3>

            <a href="https://typebot.co/claovia-rex-clao-ia-05gi2vb" target="_blank" rel="noopener noreferrer" className="w-full bg-sage-800 hover:bg-sage-900 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg group">
              Commencer
              <i data-lucide="arrow-right" className="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
            </a>

            <div className="mt-6 pt-6 border-t border-stone-100 flex justify-center gap-6 text-[10px] text-stone-400 font-medium">
              <span className="flex items-center gap-1"><i data-lucide="shield-check" className="w-3 h-3 text-green-500"></i> Traitement confidentiel</span>
              <span className="flex items-center gap-1"><i data-lucide="lock" className="w-3 h-3 text-sage-500"></i> Données chiffrées</span>
            </div>
          </div>
        </main>

        <footer className="text-center py-8 text-[10px] text-stone-400 border-t border-stone-100 bg-white">
          © 2026 Claovia. Tous droits réservés.
        </footer>
      </div>
    </>
  );
}
