import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const PackagesSection = dynamic(() => import("@/components/PackagesSection"), { ssr: true });
const ToursBottomSections = dynamic(() => import("@/components/ToursBottomSections"), { ssr: true });

export const metadata: Metadata = {
  title: "Tours & Travel Packages | Yatra Holiday",
  description: "Browse our curated international tour packages and domestic Nepal trekking adventures. Expert-led journeys from Kathmandu to the world.",
};

export default function ToursPage() {
  return (
    <main className="bg-surface min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80" 
            alt="Yatra Holiday Tours - Global Destinations" 
            fill 
            className="object-cover" 
            priority 
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="text-primary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
              Global Journeys
            </span>
            <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
              Explore the world’s <br /> finest destinations
            </h1>
            <p className="font-body text-xl text-white/90 leading-relaxed mb-10">
              From the peaks of the Himalayas to the skylines of Europe and Asia. Discover our curated collection of premium travel experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#packages"
                className="bg-primary text-white font-headline font-bold uppercase tracking-widest px-10 py-4 hover:bg-primary-container transition-all rounded-none text-sm"
              >
                View Packages
              </Link>
              <Link 
                href="/contact"
                className="bg-white/10 border border-white/30 text-white font-headline font-bold uppercase tracking-widest px-10 py-4 hover:bg-white/20 transition-all rounded-none text-sm backdrop-blur-sm"
              >
                Custom Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — INTERNATIONAL PACKAGES */}
      <div id="packages">
        <PackagesSection />
      </div>

      <ToursBottomSections />
    </main>
  );
}
