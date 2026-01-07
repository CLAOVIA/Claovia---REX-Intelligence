"use client";

import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-deep text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-white" />
                <div className="w-6 h-6 rounded-full border-2 border-accent" />
                <div className="w-6 h-6 rounded-full border-2 border-white" />
              </div>
              <span className="text-2xl font-head font-bold">Claovia</span>
            </div>
            <p className="text-white/70 max-w-md leading-relaxed mb-6">
              L'Intelligence Managériale qui transforme le feedback collaborateur
              en plans d'action concrets.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/claovia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/claovia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:contact@claovia.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Produit */}
          <div>
            <h4 className="font-head font-semibold mb-4">Produit</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Démo interactive
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-head font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  CGU
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2024 Claovia. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span>Made with</span>
            <span className="text-accent">♥</span>
            <span>in France</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
