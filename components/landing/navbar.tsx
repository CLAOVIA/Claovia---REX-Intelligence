"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-deep font-head font-bold text-xl">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full border-2 border-deep" />
            <div className="w-6 h-6 rounded-full border-2 border-accent" />
            <div className="w-6 h-6 rounded-full border-2 border-deep" />
          </div>
          Claovia
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-deep/80">
          <Link href="#" className="hover:text-accent transition-colors">
            Produits
          </Link>
          <Link href="#" className="hover:text-accent transition-colors">
            Solutions
          </Link>
          <Link href="#" className="hover:text-accent transition-colors">
            Tarifs
          </Link>
        </div>

        <Link
          href="/sign-up"
          className="bg-deep text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-accent transition-colors shadow-lg shadow-deep/20 flex items-center gap-2"
        >
          Essai Gratuit <ArrowRight size={16} />
        </Link>
      </div>
    </motion.nav>
  );
}
