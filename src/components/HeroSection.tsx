"use client";

import AntigravityEngine from "./AntigravityEngine";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Text Opacity Transforms based on scroll segments
    // 0.0 - 0.2: Initial Title
    // 0.2 - 0.4: Ingredients
    // 0.6 - 0.8: Explosion

    // Cinematic Text Transforms (Opacity + Blur + Y-movement)
    // Phase 1: Intro
    const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
    const blur1 = useTransform(scrollYProgress, [0, 0.15], ["0px", "10px"]);

    // Phase 2: Ingredients
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
    const scale2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0.9, 1, 1.1]);
    const blur2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], ["10px", "0px", "10px"]);

    // Phase 3: Explosion
    const opacity3 = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [50, 0, -50]);

    return (
        <section ref={containerRef} className="relative vignette">
            <AntigravityEngine />

            {/* Overlays - Fixed over the sticky canvas */}
            <div className="pointer-events-none fixed inset-0 flex flex-col items-center justify-center z-10 p-8">

                {/* Phase 1: Calm */}
                {/* Phase 1: Calm */}
                <motion.div
                    style={{ opacity: opacity1, y: y1, filter: blur1 }}
                    className="text-center absolute inset-0 flex flex-col items-center justify-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-7xl md:text-[10rem] font-bold text-ramen-cream tracking-tighter mb-6 text-glow leading-none"
                    >
                        RAMENVERSE
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                        className="text-base md:text-xl text-ramen-gold/80 tracking-[0.3em] uppercase font-light"
                    >
                        Experience the Unknown
                    </motion.p>
                </motion.div>

                {/* Phase 2: Ingredients */}
                {/* Phase 2: Ingredients */}
                <motion.div
                    style={{ opacity: opacity2, scale: scale2, filter: blur2 }}
                    className="text-center absolute inset-0 flex flex-col items-center justify-center"
                >
                    <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-4 drop-shadow-2xl leading-none">
                        CRAFTED PERFECTION
                    </h2>
                    <p className="text-ramen-cream/70 text-lg md:text-xl max-w-md mx-auto font-light tracking-wide">
                        Every layer tells a story.
                    </p>
                </motion.div>

                {/* Phase 3: Explosion */}
                {/* Phase 3: Explosion */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="text-center absolute inset-0 flex flex-col items-center justify-center"
                >
                    <h2 className="text-6xl md:text-9xl font-bold text-ramen-accent tracking-tighter leading-none drop-shadow-[0_0_30px_rgba(196,30,58,0.5)]">
                        EXPLOSIVE FLAVOR
                    </h2>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]) }}
                className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
            >
                <span className="text-white/40 text-xs tracking-[0.25em] uppercase font-light">
                    Scroll to Explore
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1"
                >
                    <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
                </motion.div>
            </motion.div>

        </section>
    );
}
