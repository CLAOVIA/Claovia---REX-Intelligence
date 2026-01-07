"use client";
import { motion } from "framer-motion";

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
            {/* Cercle vert principal (haut gauche) */}
            <motion.div
                className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-green-100/50 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Cercle secondaire (droite milieu) */}
            <motion.div
                className="absolute top-[20%] -right-[5%] w-[400px] h-[400px] bg-emerald-50/60 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            {/* Texture noise optionnelle pour effet papier (très léger) */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </div>
    );
};

export default HeroBackground;
