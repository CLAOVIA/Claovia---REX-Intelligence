"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Play, ArrowUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/mon-histoire", label: "Mon Histoire" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
    setShowStickyCta(latest > window.innerHeight * 0.5);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 py-4 will-change-transform">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`max-w-6xl mx-auto rounded-full px-6 py-3 transition-all duration-300 ${scrolled
            ? "glass-scrolled shadow-xl"
            : "glass-enhanced shadow-md"
            }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="font-head font-bold text-xl tracking-tight text-deep hover:text-accent transition-colors relative z-50"
            >
              <span className="flex items-center gap-2">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-deep to-accent flex items-center justify-center text-white text-sm font-bold"
                >
                  C
                </motion.span>
                Claovia
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${pathname === link.href
                      ? "text-accent"
                      : "text-gray-600 hover:text-accent hover:bg-accent/5"
                      }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-deep text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent transition-all hover:shadow-lg hover:shadow-accent/20 touch-target will-change-transform"
              >
                Tester le REX
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors touch-target z-50"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-deep" />
              ) : (
                <Menu className="w-5 h-5 text-deep" />
              )}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 md:hidden px-4"
          >
            <div className="glass-scrolled rounded-[20px] p-6 shadow-xl">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium py-3 px-4 rounded-xl transition-all touch-target ${pathname === link.href
                      ? "text-accent bg-accent/10"
                      : "text-gray-600 hover:text-accent hover:bg-gray-50"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <a
                    href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-deep text-white px-5 py-4 rounded-full text-sm font-bold hover:bg-accent transition-colors touch-target"
                  >
                    <Play size={16} />
                    Tester le REX
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky CTA */}
      <div className={`sticky-cta ${showStickyCta ? "visible" : ""}`}>
        <div className="flex gap-2">
          <a
            href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Play size={16} />
            <span className="hidden sm:inline">Lancer un REX</span>
            <span className="sm:hidden">REX</span>
          </a>
          <button
            onClick={scrollToTop}
            className="!p-3 !bg-white !text-deep hover:!bg-gray-100 !shadow-md"
            aria-label="Retour en haut"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
