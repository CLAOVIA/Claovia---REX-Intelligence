"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string;
  delay: number;
}

const messages: Message[] = [
  { id: 1, sender: "bot", text: "Bonjour ! Prêt pour ton REX trimestriel ?", delay: 0 },
  { id: 2, sender: "user", text: "Oui, c'est parti.", delay: 1.5 },
  { id: 3, sender: "bot", text: "Comment évalues-tu ta charge actuelle ?", delay: 3 },
  { id: 4, sender: "user", text: "Honnêtement ? C'est intense en ce moment.", delay: 4.5 },
  { id: 5, sender: "bot", text: "C'est noté. Analyse en cours...", delay: 6 },
];

export function CollabChat() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    messages.forEach((msg) => {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg]);
      }, msg.delay * 1000);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full bg-white rounded-3xl p-6 flex flex-col gap-4 shadow-sm border border-black/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full bg-light/50 p-3 flex items-center gap-3 border-b border-black/5">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-xs font-mono text-deep/60 ml-2">
          Typebot Collaborateur
        </span>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <AnimatePresence>
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`p-3 rounded-2xl text-sm max-w-[85%] ${
                msg.sender === "bot"
                  ? "bg-light text-deep self-start rounded-tl-sm"
                  : "bg-deep text-white self-end rounded-tr-sm"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
        {visibleMessages.length === messages.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="self-center text-xs text-accent flex items-center gap-1 mt-2"
          >
            <CheckCircle2 size={12} /> Données envoyées
          </motion.div>
        )}
      </div>
    </div>
  );
}
