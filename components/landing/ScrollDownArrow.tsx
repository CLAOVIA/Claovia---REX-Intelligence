"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollDownArrow() {
    const handleScroll = () => {
        // Smooth scroll to the next section (approx 100vh down or to a specific ID)
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-30"
            onClick={handleScroll}
        >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="flex flex-col items-center gap-2"
            >
                <span className="text-xs font-medium text-gray-500 uppercase tracking-widest hidden md:block">
                    Découvrir
                </span>
                <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center text-deep hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300">
                    <ChevronDown size={20} />
                </div>
            </motion.div>
        </motion.div>
    );
}
