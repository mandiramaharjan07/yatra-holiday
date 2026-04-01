import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Yatra Holiday - Leading Travel Agency in Nepal",
  description: "Yatra Holiday is a leading travel agency in Nepal offering international tour packages from Kathmandu with expert guidance and 24/7 support. Established 2012, serving 50,000+ happy travelers.",
  keywords: [
    "about Yatra Holiday",
    "travel agency Nepal",
    "tour operator Kathmandu",
    "Nepal travel company",
    "international tours from Nepal"
  ],
  openGraph: {
    title: "About Us | Yatra Holiday",
    description: "Leading travel agency in Nepal since 2012. 50,000+ happy travelers served.",
    images: ["/images/logo.png"],
  }
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Yatra Holiday",
    "description": "Leading travel agency in Nepal offering international tour packages from Kathmandu",
    "foundingDate": "2012",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thamel",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    },
    "telephone": "+977-01-4533135",
    "email": "info@yaatraholiday.com"
  };

  return (
    <div className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Uniform Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=90&w=2000" 
            alt="Himalayan landscape in Nepal - Yatra Holiday travel banner" 
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
            Since 2012
          </span>
          
          {/* Main H1 */}
          <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 drop-shadow-2xl">
            The most trusted travel <br /> agency in Nepal
          </h1>
          
          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
            Leading the movement for premium travel management, providing curated global adventures from the heart of Kathmandu.
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
        <p className="text-secondary text-lg md:text-xl leading-relaxed font-body italic">
          Yatra Holiday is more than a travel company; we are curators of experience. 
          We are committed to assist our clients with smart travel choices, offering peculiar holiday packages and extensive hotel list at your 
          desired destination within competitive prices. It is our earnest motive to make your trips convenient and memorable.
        </p>
      </section>

      {/* SECTION 3 — OUR STORY */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm mb-4 block">
              Legacy of Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-8 uppercase">
              Our Story: Redefining the <span className="text-primary">Global Adventure</span>
            </h2>
            <div className="space-y-6 text-secondary text-lg leading-relaxed font-body">
              <p>
                Founded in the vibrant heart of Kathmandu, Yatra Holiday emerged from a singular vision: to become the most trusted travel partner in Nepal. 
                We recognized that travel is not just about the destination, but about the seamless tapestry of experiences that transform a trip into a lifelong memory.
              </p>
              <p>
                Today, as a leading travel agency in Nepal, we specialize in curated international tour packages from Kathmandu, 
                bridging the gap between local heritage and global exploration. Our curators meticulously design every itinerary to ensure luxury, authenticity, and profound discovery.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] overflow-hidden editorial-shadow">
              <Image
                src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&q=80"
                alt="Kathmandu Valley Cityscape - Home of Yatra Holiday"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Trust Badge */}
            <div className="absolute -bottom-10 -left-10 hidden md:flex w-56 h-56 bg-white editorial-shadow p-8 flex-col items-center justify-center text-center rounded-none z-10 border border-surface-variant/10">
              <span className="text-5xl font-headline font-bold text-primary mb-1">12+</span>
              <span className="text-xs font-headline font-bold uppercase tracking-widest text-secondary leading-tight">
                Years of Trust <br /> in Nepal Since 2012
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MISSION & VISION */}
      <section className="bg-surface-container py-32 px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="bg-surface-container-lowest p-12 rounded-none shadow-sm border-l-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-4xl text-primary" aria-hidden="true">flag</span>
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tight text-on-surface">Our Mission</h3>
            </div>
            <p className="text-secondary text-lg font-body mb-8">
              Understand clients specific requirements and deliver the best travel package accordingly.
            </p>
            <ul className="space-y-4" role="list">
              {[
                "Assist clients with smart travel choices",
                "Offer peculiar holiday packages",
                "Provide extensive hotel list at desired destinations",
                "Deliver services within competitive prices"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-secondary font-body">
                  <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-surface-container-lowest p-12 rounded-none shadow-sm border-l-4 border-secondary">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-4xl text-secondary" aria-hidden="true">visibility</span>
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tight text-on-surface">Our Vision</h3>
            </div>
            <p className="text-secondary text-lg font-body mb-8">
              Our services extend to hotel and Tour Reservation for enabling you to plan and finalize your economical travel plans.
            </p>
            <ul className="space-y-4" role="list">
              {[
                "Leading travel agency in Nepal",
                "Brand name in the tourism industry",
                "Create memorable experiences for your travel",
                "Make trips convenient and memorable"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-secondary font-body">
                  <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY CHOOSE US */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface uppercase tracking-tighter">
            Why Discerning Travelers <br /> <span className="text-primary">Choose Yatra Holiday</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "verified_user",
              title: "Unmatched Expertise",
              text: "With over a decade of experience, our consultants are masters of logistics, navigating complex visa processes and international requirements with ease."
            },
            {
              icon: "support_agent",
              title: "24/7 Global Support",
              text: "Your journey does not end when you board. Our dedicated concierge team is available around the clock to assist you in any time zone across the globe."
            },
            {
              icon: "sell",
              title: "Price Transparency",
              text: "Luxury does not have to be opaque. We offer the best market rates for international tour packages from Kathmandu with no hidden fees."
            }
          ].map((feature) => (
            <div 
              key={feature.title}
              className="bg-surface-container-lowest p-10 editorial-shadow group hover:bg-primary transition-all duration-500 rounded-none border border-surface-variant/10 cursor-default"
            >
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-8 transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors text-2xl" aria-hidden="true">
                  {feature.icon}
                </span>
              </div>
              <h4 className="font-headline font-bold text-xl uppercase tracking-tight text-on-surface mb-4 group-hover:text-white transition-colors">
                {feature.title}
              </h4>
              <p className="text-secondary text-base leading-relaxed font-body group-hover:text-white/90 transition-colors">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — STATS BAR */}
      <section className="bg-primary text-white py-16 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "12+", label: "Years of Expertise" },
            { value: "50,000+", label: "Happy Travelers" },
            { value: "200+", label: "Global Partners" },
            { value: "4.9★", label: "Average Rating" }
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-headline font-black text-white mb-2">{stat.value}</p>
              <p className="text-sm font-headline font-bold uppercase tracking-widest text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — CTA BANNER */}
      <section className="bg-surface-container py-24 px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4 uppercase tracking-tighter">
          Start Your Journey with Yatra Holiday
        </h2>
        <p className="text-xl text-secondary mb-10 font-body max-w-2xl mx-auto leading-relaxed">
          Contact our travel experts in Thamel, Kathmandu today. We craft perfect journeys for every traveler.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/packages/china"
            className="bg-primary text-white font-headline font-bold uppercase tracking-widest px-10 py-4 hover:bg-primary-container transition-all rounded-none shadow-lg text-center"
            aria-label="Explore our international tour packages"
          >
            Explore Packages
          </Link>
          <Link 
            href="/contact"
            className="bg-surface-container-highest text-on-surface font-headline font-bold uppercase tracking-widest px-10 py-4 hover:bg-surface-container-high transition-all rounded-none shadow-sm text-center"
            aria-label="Contact our travel agency in Nepal"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
