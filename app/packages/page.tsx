import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/data";

export const metadata: Metadata = {
  title: "International Tour Packages | Yatra Holiday - Premium Travel Agency",
  description: "Explore premium international tour packages from Kathmandu to top destinations across Asia and Europe. Guided tours with 24/7 support by Nepal's leading travel agency.",
  keywords: ["International tour packages from Kathmandu", "Europe tour from Nepal", "Bali packages Kathmandu", "Dubai tour Nepal", "Japan tour from Nepal"],
};

export default function PackagesPage() {
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

  // Specific content mapping as requested by the user
  const packageContent: Record<string, { tag: string; badge: string; desc: string }> = {
    "china": {
      tag: "East Asia",
      badge: "CHINA",
      desc: "Explore the Great Wall, Forbidden City and Shanghai skyline on this cultural masterpiece tour through China's most iconic cities."
    },
    "vietnam": {
      tag: "South East Asia",
      badge: "VIETNAM",
      desc: "Cruise Ha Long Bay, explore Hoi An lantern streets and taste the best pho in Hanoi on this unforgettable Vietnam heritage trail."
    },
    "london-england-scotland": {
      tag: "Europe",
      badge: "LONDON, ENGLAND & SCOTLAND",
      desc: "From London iconic landmarks to the Scottish Highlands — discover Britain's finest history, castles and breathtaking landscapes."
    },
    "europe": {
      tag: "Europe Central",
      badge: "EUROPE",
      desc: "Paris, Rome, Barcelona and more — experience the best of European culture, cuisine and architecture across 4 stunning countries."
    },
    "japan-osaka": {
      tag: "East Asia",
      badge: "JAPAN",
      desc: "Cherry blossoms, ancient temples, bullet trains and the neon-lit streets of Osaka and Tokyo await you on this unforgettable Japan journey."
    },
    "bali": {
      tag: "Indonesia",
      badge: "BALI",
      desc: "Rice terraces, sacred temples, luxury villas and stunning sunsets in the world's most magical island — Bali, Island of the Gods."
    },
    "southeast-asia": {
      tag: "Mega Combo",
      badge: "THAILAND - SINGAPORE - MALAYSIA",
      desc: "Three iconic destinations in one epic journey — Bangkok streets, Singapore skyline and Kuala Lumpur towers in one premium combo package."
    },
    "thailand": {
      tag: "South East Asia",
      badge: "THAILAND",
      desc: "Golden temples in Bangkok and crystal clear waters of Pattaya — Thailand best highlights in one perfect short escape package."
    }
  };

  return (
    <main className="pt-20 bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO BANNER */}
      <section className="relative h-[716px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600&q=80"
          alt="International Tour Packages background by Yatra Holiday"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-[#1a1c1c]/80" />
        
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full flex flex-col items-center md:items-start text-center md:text-left">
          <div className="max-w-3xl">
            <span className="bg-primary text-white px-4 py-1 text-sm font-headline font-bold tracking-widest uppercase mb-6 inline-block rounded-none">
              The Editorial Explorer
            </span>
            <h1 className="text-white font-headline font-extrabold text-5xl md:text-7xl tracking-tighter mb-6 leading-tight uppercase">
              International Tour <br /> Packages from Kathmandu
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-body italic mb-12 max-w-xl leading-relaxed">
              Experience the world with Nepal&apos;s most trusted travel agency. Curated journeys that turn destinations into lifelong stories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#packages-grid"
                className="bg-white text-primary px-8 py-4 font-headline font-bold tracking-widest uppercase hover:bg-stone-100 transition-all rounded-none shadow-xl text-center"
              >
                Explore All
              </Link>
              <Link 
                href="/about"
                className="border border-white/30 text-white backdrop-blur-sm px-8 py-4 font-headline font-bold tracking-widest uppercase hover:bg-white/10 transition-all rounded-none text-center"
              >
                Our Story
              </Link>
            </div>
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
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight uppercase tracking-tighter">
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

      {/* SECTION 3: THE PACKAGES GRID */}
      <section id="packages-grid" className="py-24 bg-surface-container-low px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface uppercase tracking-tight mb-4">Curated Collections</h2>
            <p className="text-primary font-headline font-bold tracking-widest uppercase text-xs italic">Signature international experiences for 2024-2025</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {packages.map((pkg) => {
              const content = packageContent[pkg.slug];
              if (!content) return null;
              
              return (
                <div key={pkg.slug} className="group bg-white p-4 shadow-sm hover:shadow-xl transition-all rounded-none border border-surface-variant/10">
                  <div className="relative overflow-hidden mb-6 aspect-[4/3] rounded-none">
                    <Image
                      src={pkg.image}
                      alt={`${pkg.name} tour package from Kathmandu`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-headline font-bold tracking-widest px-3 py-1 uppercase z-10 rounded-none shadow-lg">
                      {content.badge}
                    </div>
                  </div>
                  
                  <span className="text-[10px] font-headline font-bold text-primary tracking-widest uppercase mb-2 block">
                    {content.tag}
                  </span>
                  <h3 className="text-2xl font-headline font-bold mb-4 uppercase tracking-tight text-on-surface">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-secondary mb-6 line-clamp-3 font-body leading-relaxed">
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

      {/* SECTION 4: TRUST BENTO */}
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
            
            {/* Background Text Decor */}
            <span className="absolute -bottom-10 -right-10 text-[10rem] font-headline font-black opacity-10 pointer-events-none select-none uppercase whitespace-nowrap z-0 shadow-none">
              YTRA
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
