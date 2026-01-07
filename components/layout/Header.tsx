"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    const navLinks = [
        { name: "Accueil", href: "/" },
        { name: "Fonctionnalités", href: "/fonctionnalites" },
        { name: "Mon Histoire", href: "/mon-histoire" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out will-change-transform ${isScrolled
                        ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
                        : "bg-transparent py-6"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                            C
                        </div>
                        <span className="text-xl font-bold text-primary-dark tracking-tight">
                            Claovia
                        </span>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${pathname === link.href
                                        ? "text-accent font-semibold"
                                        : "text-gray-600 hover:text-primary"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & MOBILE TOGGLE */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all bg-primary rounded-full hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Tester le REX
                        </a>

                        {/* Mobile Burger Icon */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-700 rounded-md"
                        >
                            <div className="space-y-1.5">
                                <span
                                    className={`block w-6 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                        }`}
                                />
                                <span
                                    className={`block w-6 h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""
                                        }`}
                                />
                                <span
                                    className={`block w-6 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col gap-6 items-center text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-2xl font-medium ${pathname === link.href ? "text-accent" : "text-gray-800"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full max-w-xs px-6 py-4 mt-4 text-lg font-bold text-white bg-primary rounded-full"
                            >
                                Tester le REX
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
