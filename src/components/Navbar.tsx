"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-ramen-cream"
        >
            <div className="text-2xl font-bold tracking-tighter">RV</div>
            <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest uppercase">
                <a href="#story" className="hover:text-ramen-gold transition-colors">Story</a>
                <a href="#ingredients" className="hover:text-ramen-gold transition-colors">Craft</a>
                <a href="#shop" className="hover:text-ramen-gold transition-colors">Order</a>
            </div>
            <button className="border border-ramen-cream px-6 py-2 rounded-full text-xs uppercase hover:bg-ramen-cream hover:text-ramen-dark transition-all">
                Reserve
            </button>
        </motion.nav>
    );
}
