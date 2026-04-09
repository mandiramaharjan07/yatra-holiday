import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const AboutBottomSections = dynamic(() => import("@/components/AboutBottomSections"), { ssr: true });

export const metadata: Metadata = {
  title: "About Us | Yatra Holiday - Nepal's Premier Travel Agency",
  description: "Learn about Yatra Holiday, Nepal's leading travel agency established in 2012. Based in Thamel, Kathmandu serving 50,000+ travelers.",
};

export default function AboutPage() {
  const stats = [
    { value: "12+", label: "Years of Expertise" },
    { value: "50,000+", label: "Happy Travelers" },
    { value: "200+", label: "Global Partners" },
    { value: "4.9★", label: "Average Rating" }
  ];

  return (
    <main className="bg-surface min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80" 
            alt="About Yatra Holiday - Nepal landscape" 
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
              Since 2012
            </span>
            <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
              The most trusted travel <br /> agency in Nepal
            </h1>
            <p className="font-body text-xl text-white/90 leading-relaxed mb-10">
              Leading the movement for premium travel management, providing curated global adventures from the heart of Kathmandu, Nepal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#story"
                className="bg-primary text-white font-headline font-bold uppercase tracking-widest px-10 py-4 hover:bg-primary-container transition-all rounded-none text-sm"
              >
                Our Story
              </Link>
              <Link 
                href="/contact"
                className="bg-white/10 border border-white/30 text-white font-headline font-bold uppercase tracking-widest px-10 py-4 hover:bg-white/20 transition-all rounded-none text-sm backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — BANNER & INTRO */}
      <section id="story" className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm mb-4 block">
              Legacy of Excellence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-on-surface mb-10">
              About Yatra Holiday
            </h2>
            <div className="space-y-8 text-secondary text-lg md:text-xl leading-relaxed font-body">
              <p>
                Yatra Holiday is a leading travel agency in Nepal and a brand name in the tourism industry, 
                crafting memorable experiences since 2012. Based in the heart of Thamel, Kathmandu, we serve 
                discerning travelers with institutional care and localized expertise.
              </p>
              <p>
                We are committed to assisting our clients with smart travel choices, offering bespoke holiday 
                packages and an extensive collection of premium stays at your desired destination—all within 
                competitive market pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — OUR STORY (Two Column) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm mb-4 block">
                Our Foundation
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-on-surface mb-8">
                Founded in the Heart of Kathmandu
              </h2>
              <p className="text-secondary text-lg leading-relaxed font-body mb-12">
                Our journey began with a simple vision: to make international travel accessible, reliable, and deeply meaningful for travelers from Nepal. Over the years, we have built an ecosystem of partners and specialists dedicated to these principles.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-headline font-black text-primary">{stat.value}</p>
                    <p className="text-sm font-bold uppercase tracking-widest text-secondary mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative aspect-square overflow-hidden editorial-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80"
                  alt="Yatra Holiday Team Inspiration"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 hidden md:block shadow-2xl">
                <p className="text-3xl font-black font-headline">#1</p>
                <p className="text-xs font-bold uppercase tracking-widest">Rated Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutBottomSections stats={stats} />
    </main>
  );
}
