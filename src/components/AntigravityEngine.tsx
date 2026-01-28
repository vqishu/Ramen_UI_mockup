"use client";

import { useRef, useState, useEffect } from "react"; // Added useEffect explicitly if missing or just keeping compatibility
import { useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";

const FRAME_COUNT = 64;
const SMOOTH_SPRING_CONFIG = { stiffness: 200, damping: 20, mass: 0.5 }; // Physics for fluid motion

export default function AntigravityEngine() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, SMOOTH_SPRING_CONFIG);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const src = `/ramen-frames/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
                img.src = src;
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continue even if one fails
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    // Draw frame based on scroll
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx || !images[index]) return;

        const img = images[index];

        // Canvas sizing (contain fit)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Calculate aspect ratio specifically to COVER or CONTAIN based on design
        // For "hero experience" often COVER is better, but prompt said "responsively (contain fit)"
        // Let's go with "contain" for the product clarity, but centered.

        // Actually, "User: Canvas must resize responsively (contain fit)"

        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        // Map 0-1 to 0-(totalFrames-1)
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * FRAME_COUNT)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) renderFrame(0);
    }, [isLoaded]);

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-ramen-dark overflow-hidden">
                <canvas ref={canvasRef} className="block" />
                {/* Loading State */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-ramen-gold font-sans animate-pulse">
                        PREPARING RAMENVERSE...
                    </div>
                )}
            </div>
        </div>
    );
}
