import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Premium International Tour Packages | Yatra Holiday",
  description: "Explore curated international tour packages from Kathmandu to destinations across Asia and Europe. Guided tours with 24/7 support by Nepal's leading travel agency.",
};

export default function ToursPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "International Tour Packages",
    "description": "Premium curated international tours from Kathmandu, Nepal.",
    "itemListElement": packages.map((pkg, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristTrip",
        "name": pkg.name,
        "description": pkg.description,
        "url": `https://yatraholiday.com/packages/${pkg.slug}`
      }
    }))
  };

  const packageContent: Record<string, { label: string; h3: string; desc: string }> = {
    "china": {
      label: "CHINA",
      h3: "CHINA",
      desc: "Explore the Great Wall, Forbidden City and Shanghai skyline on this cultural masterpiece tour through China's most iconic cities."
    },
    "vietnam": {
      label: "VIETNAM",
      h3: "VIETNAM",
      desc: "Cruise Ha Long Bay, explore Hoi An lantern streets and taste the best pho in Hanoi on this unforgettable Vietnam heritage trail."
    },
    "london-england-scotland": {
      label: "LONDON, ENGLAND & SCOTLAND",
      h3: "LONDON ENGLAND AND SCOTLAND",
      desc: "From London iconic landmarks to the Scottish Highlands — discover Britain's finest history, castles and breathtaking landscapes."
    },
    "europe": {
      label: "EUROPE",
      h3: "EUROPE",
      desc: "Paris, Rome, Barcelona and more — experience the best of European culture, cuisine and architecture across 4 stunning countries."
    },
    "japan-osaka": {
      label: "JAPAN",
      h3: "JAPAN OSAKA",
      desc: "Cherry blossoms, ancient temples, bullet trains and the neon-lit streets of Osaka and Tokyo await you on this unforgettable Japan journey."
    },
    "bali": {
      label: "BALI",
      h3: "BALI",
      desc: "Rice terraces, sacred temples, luxury villas and stunning sunsets in the world's most magical island — Bali, Island of the Gods."
    },
    "southeast-asia": {
      label: "THAILAND - SINGAPORE - MALAYSIA",
      h3: "THAILAND + SINGAPORE + MALAYSIA",
      desc: "Three iconic destinations in one epic journey — Bangkok streets, Singapore skyline and Kuala Lumpur towers in one premium combo package."
    },
    "thailand": {
      label: "THAILAND",
      h3: "THAILAND",
      desc: "Golden temples in Bangkok and crystal clear waters of Pattaya — Thailand best highlights in one perfect short escape package."
    }
  };

  return (
    <main className="pt-20 bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Uniform Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=90&w=2000" 
            alt="International Tour Packages background by Yatra Holiday" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Wrapper - Dead Centered */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center pt-20">
          
          {/* Kicker Tag */}
          <span className="text-primary font-headline font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-4 drop-shadow-md">
            Global Journeys
          </span>
          
          {/* Main H1 */}
          <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 drop-shadow-2xl">
            International Tour Packages from Kathmandu
          </h1>
          
          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
            Experience the world with Nepal&apos;s most trusted travel agency. Curated journeys that turn destinations into lifelong stories.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
             {/* Primary Red Button */}
             <Link 
               href="#packages-grid"
               className="bg-primary text-white px-8 py-4 font-headline font-bold text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-none shadow-xl"
             >
               Explore All
             </Link>
             {/* Secondary Transparent Button */}
             <Link 
               href="/about"
               className="border border-white/50 bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-headline font-bold text-sm tracking-widest uppercase hover:bg-white/20 transition-colors rounded-none"
             >
               Our Story
             </Link>
          </div>

        </div>
      </section>

      {/* SECTION 2: SEO INTRO */}
      <section className="py-24 bg-surface-container-lowest px-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-12 items-end">
          <div className="flex-1">
            <span className="text-sm font-headline font-bold text-primary tracking-[0.3em] uppercase mb-4 block">
              World-Class Expertise
            </span>
            <h2 className="font-editorial text-2xl md:text-3xl lg:text-4xl leading-snug text-on-background tracking-tighter">
              As a leading travel agency in Nepal, Yatra Holiday specializes in crafting seamless international tour packages from Nepal for the discerning traveler.
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-secondary leading-loose font-body text-lg">
              We bridge the gap between Kathmandu and the world&apos;s most iconic destinations. Our editorial approach to travel means every itinerary is vetted for quality, authenticity, and luxury, ensuring your international holiday is nothing short of extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: PACKAGES GRID */}
      <section id="packages-grid" className="py-24 bg-surface px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {packages.map((pkg) => {
              const content = packageContent[pkg.slug];
              if (!content) return null;
              
              return (
                <div key={pkg.slug} className="bg-white p-4 shadow-sm hover:shadow-xl transition-all border border-surface-variant/20 rounded-none flex flex-col">
                  <div className="relative overflow-hidden mb-6 aspect-[4/3] rounded-none">
                    <Image
                      src={pkg.image}
                      alt={`${content.h3} tour package from Kathmandu`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-headline font-bold tracking-widest px-3 py-1 uppercase z-10 rounded-none shadow-lg">
                      {content.label}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-headline font-bold mb-4 uppercase tracking-tight text-on-surface">
                    {content.h3}
                  </h3>
                  <p className="text-sm text-secondary mb-6 line-clamp-3 font-body leading-relaxed flex-grow">
                    {content.desc}
                  </p>
                  
                  <Link 
                    href={`/packages/${pkg.slug}`}
                    className="block w-full bg-primary text-white font-headline font-bold py-3 text-center uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors rounded-none"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: TRUST SECTION */}
      <section className="py-24 bg-white px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-surface-container-low p-12 flex flex-col justify-between rounded-none border border-surface-variant/20 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-on-surface uppercase tracking-tighter mb-8 leading-tight">
                Why Choose Yatra Holiday <br /> for Your World Tour?
              </h2>
              <p className="text-secondary text-lg leading-relaxed font-body mb-12 max-w-2xl">
                We don&apos;t just book flights; we architect experiences. Our localized expertise in Kathmandu combined with a global partner network ensures safety and luxury everywhere you go.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 relative z-10">
              <div className="group">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white rounded-none">
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">concierge</span>
                </div>
                <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-2">24/7 Concierge</h4>
                <p className="text-[10px] text-secondary font-body uppercase tracking-[0.05em]">Dedicated world-class support for all clients.</p>
              </div>
              <div className="group">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white rounded-none">
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">description</span>
                </div>
                <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-2">Visa Experts</h4>
                <p className="text-[10px] text-secondary font-body uppercase tracking-[0.05em]">Professional facilitation for all destinations.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 bg-primary p-12 text-white flex flex-col justify-center items-center text-center rounded-none shadow-2xl relative overflow-hidden">
            <span className="material-symbols-outlined text-6xl mb-8" aria-hidden="true">star</span>
            <h3 className="text-3xl md:text-4xl font-headline font-black mb-4 uppercase tracking-tighter">15,000+ <br /> Happy Travelers</h3>
            <p className="text-white/80 text-sm font-body mb-10 leading-relaxed uppercase tracking-widest">
              Trusted by thousands of Nepalese families for their first international voyage.
            </p>
            <Link 
              href="/about"
              className="bg-white text-primary px-8 py-3 font-headline font-bold text-xs tracking-widest uppercase hover:bg-stone-100 transition-colors rounded-none shadow-lg"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
