"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Create mailto link with form data
        const subject = encodeURIComponent(`Contact Claovia - ${formData.name}`);
        const body = encodeURIComponent(
            `Nom: ${formData.name}\nEmail: ${formData.email}\nEntreprise: ${formData.company}\n\nMessage:\n${formData.message}`
        );

        // Open email client
        window.location.href = `mailto:contact.claovia@gmail.com?subject=${subject}&body=${body}`;

        setStatus("sent");
        setTimeout(() => setStatus("idle"), 3000);
    };

    return (
        <div className="min-h-screen bg-cream font-sans text-deep">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-head font-bold text-deep mb-6">
                            Contactez-nous
                        </h1>
                        <p className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
                            Une question ? Une demande de démo ? Nous sommes là pour vous accompagner.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white rounded-[28px] p-8 shadow-lg">
                                <h2 className="text-2xl font-head font-bold text-deep mb-6">
                                    Envoyez-nous un message
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Votre nom
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                            placeholder="Jean Dupont"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email professionnel
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                            placeholder="jean.dupont@entreprise.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Entreprise
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                            placeholder="Nom de votre entreprise"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Votre message
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                                            placeholder="Comment pouvons-nous vous aider ?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="w-full flex items-center justify-center gap-2 bg-deep text-white px-6 py-4 rounded-xl font-bold hover:bg-accent transition-all disabled:opacity-50"
                                    >
                                        {status === "sending" ? (
                                            <>
                                                <Loader2 className="animate-spin" size={20} />
                                                Envoi en cours...
                                            </>
                                        ) : status === "sent" ? (
                                            <>
                                                <CheckCircle size={20} />
                                                Message envoyé
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                Envoyer le message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-head font-bold text-deep mb-6">
                                    Autres moyens de nous joindre
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Nous répondons généralement sous 24 heures. Pour une démo, précisez votre taille d'équipe et vos enjeux principaux.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                        <Mail className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-deep mb-1">Email</h3>
                                        <a href="mailto:contact.claovia@gmail.com" className="text-accent hover:underline">
                                            contact.claovia@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                        <MapPin className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-deep mb-1">Localisation</h3>
                                        <p className="text-gray-600">France</p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Teaser */}
                            <div className="bg-light rounded-[20px] p-6">
                                <h3 className="font-bold text-deep mb-3">Questions fréquentes</h3>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                                        Combien de temps dure un retour d'expérience ?
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                                        L'anonymat est-il vraiment garanti ?
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                                        Comment fonctionne le kit manager ?
                                    </li>
                                </ul>
                                <p className="text-sm text-gray-500 mt-4">
                                    Posez-nous vos questions, nous y répondrons avec plaisir.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-deep border-t border-white/10 mt-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="font-head font-bold text-xl text-white">Claovia</div>
                    <div className="flex gap-6">
                        <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">Accueil</Link>
                        <Link href="/fonctionnalites" className="text-white/60 hover:text-white transition-colors text-sm">Fonctionnalités</Link>
                        <Link href="/mon-histoire" className="text-white/60 hover:text-white transition-colors text-sm">Mon Histoire</Link>
                        <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link>
                    </div>
                    <p className="text-white/40 text-sm">2025 Claovia. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
}
