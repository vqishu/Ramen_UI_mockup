"use client";

import { motion } from "framer-motion";

export default function StorySection() {
    return (
        <section id="story" className="bg-ramen-dark py-32 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-ramen-gold text-lg uppercase tracking-widest mb-4">The Origin</h3>
                    <p className="text-3xl md:text-5xl font-light text-ramen-cream leading-tight">
                        Born from the chaos of the city, refined in the silence of the dawn. <br />
                        This is not just food. It is <span className="text-ramen-accent font-bold">memory</span>.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left pt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10"
                    >
                        <h4 className="text-2xl text-ramen-cream mb-4 font-bold">Broth First</h4>
                        <p className="text-gray-400">Simmered for 48 hours. A complex symphony of pork bone, kombu, and time.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10"
                    >
                        <h4 className="text-2xl text-ramen-cream mb-4 font-bold">Noodle Soul</h4>
                        <p className="text-gray-400">Hand-pulled. Wheat harvested under the autumn moon. The perfect snap.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
