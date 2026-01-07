"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: Date;
};

export default function RexChatPage({ params }: { params: { token: string } }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [rexData, setRexData] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load REX data and initial message
  useEffect(() => {
    const loadRexData = async () => {
      // TODO: Fetch REX data from API using token
      // For now, using mock data
      const mockRexData = {
        collaboratorName: "Sophie",
        managerName: "Jean Dupont",
        organizationName: "TechCorp",
      };
      setRexData(mockRexData);

      // Initial greeting
      setMessages([
        {
          id: "1",
          role: "assistant",
          content: `Bonjour ${mockRexData.collaboratorName} 👋\n\nJe suis Clao, votre assistant pour ce retour d'expérience.\n\nCette conversation est **100% confidentielle**. Seule une synthèse anonymisée sera partagée avec ${mockRexData.managerName}.\n\nOn va prendre 5-10 minutes ensemble pour faire le point. Prêt·e ?`,
          timestamp: new Date(),
        },
      ]);
    };

    loadRexData();
  }, [params.token]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // TODO: Call API to get AI response
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: params.token,
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Check if conversation is complete
      if (data.isComplete) {
        setIsCompleted(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Fallback mock response for development
      setTimeout(() => {
        const mockResponse: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Merci pour ta réponse. Peux-tu m'en dire un peu plus ?",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, mockResponse]);
        setIsLoading(false);
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-deep to-accent flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-2xl w-full bg-white rounded-3xl p-12 text-center"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          <h1 className="text-3xl font-head font-bold text-deep mb-4">
            Merci pour ton temps !
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Ton retour d'expérience a été transmis. Une analyse sera envoyée à
            ton manager dans les prochaines heures.
          </p>
          <div className="bg-light/50 rounded-2xl p-6 border border-accent/20">
            <p className="text-sm text-gray-700">
              <strong>Rappel :</strong> Cette conversation reste confidentielle.
              Seule une synthèse avec des recommandations d'actions sera
              partagée.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-deep" />
                <div className="w-8 h-8 rounded-full border-2 border-accent" />
                <div className="w-8 h-8 rounded-full border-2 border-deep" />
              </div>
              <div>
                <span className="text-xl font-head font-bold text-deep">
                  Clao
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  par Claovia
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Conversation sécurisée</span>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="space-y-6">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-2xl ${
                      message.role === "user"
                        ? "bg-deep text-white"
                        : "bg-white border border-gray-200"
                    } rounded-2xl p-6 shadow-sm`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-deep/20 flex items-center justify-center">
                          <span className="text-deep font-head font-bold text-sm">
                            C
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-deep">
                          Clao
                        </span>
                      </div>
                    )}
                    <div
                      className={`whitespace-pre-wrap ${
                        message.role === "user"
                          ? "text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {message.content}
                    </div>
                    <div
                      className={`text-xs mt-3 ${
                        message.role === "user"
                          ? "text-white/60"
                          : "text-gray-400"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 className="animate-spin text-accent" size={20} />
                    <span className="text-gray-500">Clao réfléchit...</span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex gap-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Écris ta réponse ici..."
              rows={1}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
              style={{ minHeight: "52px", maxHeight: "120px" }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="px-6 py-3 bg-deep text-white rounded-xl hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-semibold"
            >
              <Send size={20} />
              <span className="hidden sm:inline">Envoyer</span>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Cette conversation est confidentielle et chiffrée de bout en bout
          </p>
        </div>
      </div>
    </div>
  );
}
