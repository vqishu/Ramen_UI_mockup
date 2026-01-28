import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ramen: {
                    broth: "#8C4F2B", // Deep umami brown
                    gold: "#F2C94C", // Noodle gold
                    cream: "#F9F5EC", // Porcelain / Foam
                    dark: "#1A1410", // Dark soy background
                    accent: "#D9534F", // Chili oil red
                },
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "sans-serif"],
            },
            transitionTimingFunction: {
                'cinema': 'cubic-bezier(0.16, 1, 0.3, 1)',
                'slow-mo': 'cubic-bezier(0.7, 0, 0.3, 1)',
            },
        },
    },
    plugins: [],
};
export default config;
