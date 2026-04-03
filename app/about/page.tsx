import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

      {/* SECTION 3 — MISSION & VISION */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-on-surface">
              Mission & Vision
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* MISSION CARD */}
            <div className="bg-surface-container-lowest p-10 editorial-shadow border-l-4 border-primary rounded-none">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">flag</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">Our Mission</h3>
              <p className="text-secondary text-lg leading-relaxed font-body mb-8">
                To understand our clients&apos; specific requirements and deliver the absolute best travel packages, services, and support that exceed expectations.
              </p>
              <ul className="space-y-4">
                {[
                  "Assist clients with smart travel choices",
                  "Offer peculiar holiday packages",
                  "Provide extensive hotel list",
                  "Deliver within competitive prices"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary font-body">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VISION CARD */}
            <div className="bg-surface-container-lowest p-10 editorial-shadow border-l-4 border-secondary rounded-none">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">visibility</span>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">Our Vision</h3>
              <p className="text-secondary text-lg leading-relaxed font-body mb-8">
                To be the undisputed leader in Nepal&apos;s travel industry, synonymous with trust, quality, and the creation of life-changing memories.
              </p>
              <ul className="space-y-4">
                {[
                  "Leading travel agency in Nepal",
                  "Brand name in tourism industry",
                  "Create memorable experiences",
                  "Make trips convenient and memorable"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary font-body">
                    <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY CHOOSE US */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-on-surface">
              Why Discerning Travelers Choose Yatra Holiday
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: "verified_user",
                title: "Unmatched Expertise",
                text: "With over a decade of experience, we manage complex logistics with ultimate precision and institutional care."
              },
              {
                icon: "support_agent",
                title: "24/7 Global Support",
                text: "Our dedicated concierge team is available around the clock to support you at every waypoint in your journey."
              },
              {
                icon: "sell",
                title: "Price Transparency",
                text: "We offer the most competitive market rates with zero hidden costs, ensuring complete financial peace of mind."
              }
            ].map((card) => (
              <div 
                key={card.title} 
                className="bg-surface-container-lowest p-10 hover:bg-primary group transition-all duration-300 editorial-shadow rounded-none border border-surface-variant/20"
              >
                <span className="material-symbols-outlined text-primary group-hover:text-white text-5xl mb-6 block transition-colors">
                  {card.icon}
                </span>
                <h3 className="font-headline font-bold text-xl group-hover:text-white uppercase mb-4 transition-colors">
                  {card.title}
                </h3>
                <p className="text-secondary font-body text-base leading-relaxed group-hover:text-white/80 transition-colors">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — STATS BAR */}
      <section className="bg-primary text-white py-16 px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl font-headline font-black text-white mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-widest text-white/80 font-headline font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section className="py-24 bg-surface text-center">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-on-surface mb-4">
            Start Your Journey with Yatra Holiday
          </h2>
          <p className="text-xl text-secondary mb-12 font-body max-w-2xl mx-auto leading-relaxed">
            Contact our travel experts in Thamel, Kathmandu today and let us craft your next extraordinary story.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/tours"
              className="bg-primary text-white font-headline font-bold uppercase tracking-widest px-12 py-4 hover:bg-primary-container transition-all rounded-none text-sm"
            >
              Explore Packages
            </Link>
            <Link 
              href="/contact"
              className="bg-surface-container-highest text-on-surface font-headline font-bold uppercase tracking-widest px-12 py-4 hover:bg-surface-container-high transition-all rounded-none text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
