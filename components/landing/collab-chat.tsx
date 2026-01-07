"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string;
  delay: number;
}

const messages: Message[] = [
  { id: 1, sender: "bot", text: "Bilan S42 : Charge de travail ?", delay: 0 },
  { id: 2, sender: "user", text: "Surcharge critique. Le projet Alpha me bloque.", delay: 1.5 },
  { id: 3, sender: "bot", text: "Bien reçu. J'analyse ton REX pour ton manager.", delay: 3 },
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
    <div className="bg-white rounded-[28px] border border-gray-200 h-[420px] shadow-card flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          Entrée : Collaborateur
        </span>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      </div>

      {/* Messages */}
      <div className="p-4 space-y-4 flex-1 overflow-y-auto">
        <AnimatePresence>
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`p-3 text-sm rounded-[16px] max-w-[90%] ${msg.sender === "bot"
                  ? "bg-light text-deep"
                  : "bg-deep text-white ml-auto"
                }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer CTA */}
      <div className="p-4 bg-white border-t border-gray-100">
        <a
          href="https://typebot.co/claovia-rex-clao-ia-05gi2vb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-light text-deep font-bold rounded-lg hover:bg-accent hover:text-white transition-colors text-sm"
        >
          <Play size={16} /> Tester ce REX (Réel)
        </a>
      </div>
    </div>
  );
}
