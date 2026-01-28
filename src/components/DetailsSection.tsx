"use client";

import { motion } from "framer-motion";

export default function DetailsSection() {
    const ingredients = [
        { name: "Chashu", desc: "Slow-braised pork belly, melt-in-mouth texture." },
        { name: "Ajitsuke Tamago", desc: "Marinated egg with a perfect jammy yolk." },
        { name: "Menma", desc: "Fermented bamboo shoots for earthiness." },
        { name: "Nori", desc: "Crisp seaweed sheets from the Seto Inland Sea." },
    ];

    return (
        <section id="ingredients" className="bg-ramen-dark py-32 px-4 md:px-8 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-12">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-ramen-gold"
                        >
                            THE ANATOMY OF <br /> FLAVOR
                        </motion.h2>

                        <div className="space-y-8">
                            {ingredients.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border-l-2 border-ramen-broth pl-6"
                                >
                                    <h4 className="text-xl text-ramen-cream font-semibold">{item.name}</h4>
                                    <p className="text-gray-500">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual - Using the explosion frame static */}
                    <div className="relative aspect-square rounded-full overflow-hidden border border-white/10 opacity-80 mix-blend-screen">
                        <img src="/ramen-frames/ezgif-frame-045.jpg" alt="Ramen Explosion Detail" className="object-cover w-full h-full scale-110" />
                    </div>

                </div>
            </div>
        </section>
    );
}
