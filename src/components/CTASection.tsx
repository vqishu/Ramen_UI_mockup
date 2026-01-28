"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section id="shop" className="bg-ramen-broth py-32 px-4 md:px-8 text-center relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] pointer-events-none"></div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-3xl mx-auto"
            >
                <h2 className="text-5xl md:text-8xl font-bold text-ramen-cream mb-8 tracking-tighter">
                    TASTE THE LEGEND
                </h2>
                <p className="text-xl text-ramen-gold/80 mb-12">
                    Limited batches available daily. Reserve your bowl.
                </p>

                <button className="bg-ramen-dark text-ramen-cream text-lg px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-ramen-gold hover:text-ramen-dark transition-all transform hover:scale-105">
                    Order Now
                </button>
            </motion.div>

            <footer className="absolute bottom-4 left-0 right-0 text-center text-white/20 text-xs uppercase tracking-widest">
                © 2026 Ramenverse Inc. Designed with Antigravity.
            </footer>
        </section>
    );
}
