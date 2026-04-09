import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";

const PackagesSection = dynamic(() => import("@/components/PackagesSection"), { ssr: true });
const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/FAQSection"), { ssr: true });
const DestinationsSection = dynamic(() => import("@/components/DestinationsSection"), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <DestinationsSection />
      <PackagesSection />
      <AboutSection />
      <FAQSection />
    </main>
  );
}
