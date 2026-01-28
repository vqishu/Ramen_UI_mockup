import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import DetailsSection from "@/components/DetailsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
    return (
        <main className="bg-ramen-dark min-h-screen">
            <Navbar />
            <HeroSection />
            <StorySection />
            <DetailsSection />
            <CTASection />
        </main>
    );
}
