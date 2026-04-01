import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";

const PackagesSection = dynamic(() => import("@/components/PackagesSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));

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
