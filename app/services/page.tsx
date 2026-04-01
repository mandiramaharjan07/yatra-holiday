import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Travel Services & Packages | Yatra Holiday Nepal",
  description: "Comprehensive travel management in Kathmandu. We offer domestic and international tours, flight ticketing, expert visa services, and private helicopter charters.",
  keywords: [
    "Nepal travel services",
    "international tour packages Kathmandu",
    "visa services Nepal",
    "helicopter tour Everest",
    "flight ticketing Kathmandu",
    "Yatra Holiday services"
  ],
  openGraph: {
    title: "Premium Travel Services | Yatra Holiday",
    description: "Expert travel logistics, ticketing, and luxury tours from Kathmandu, Nepal.",
    images: ["https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"],
    type: "website",
  }
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Yatra Holiday",
    "url": "https://yaatraholiday.com",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Travel Management Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "International & Domestic Tours",
            "description": "Exclusive Nepal treks and curated global adventures."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Visa Services",
            "description": "Expert visa facilitation for stress-free international travel."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Helicopter Services",
            "description": "Private helicopter charters for Everest views and remote landings."
          }
        }
      ]
    }
  };

  const cardHover = "hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out";

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
            alt="Premium travel services in Nepal - Yatra Holiday" 
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
            Premium Management
          </span>
          
          {/* Main H1 */}
          <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 drop-shadow-2xl">
            World-class travel services for the discerning explorer
          </h1>
          
          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
            Elevate your journey with our world-class travel logistics, from Himalayan charters to curated global escapes.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
             {/* Primary Red Button */}
             <Link 
               href="/packages"
               className="bg-primary text-white px-8 py-4 font-headline font-bold text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-none shadow-xl"
             >
               Explore Packages
             </Link>
             {/* Secondary Transparent Button */}
             <Link 
               href="#services-grid"
               className="border border-white/50 bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-headline font-bold text-sm tracking-widest uppercase hover:bg-white/20 transition-colors rounded-none"
             >
               View Services
             </Link>
          </div>

        </div>
      </section>

      {/* SECTION 2: SERVICES BENTO GRID */}
      <section id="services-grid" className="py-24 bg-surface px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-extrabold text-on-surface uppercase tracking-tight">
              Comprehensive Premium Travel Management
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Card 1 — Tours (Large) */}
            <div className={`md:col-span-2 md:row-span-2 relative overflow-hidden bg-surface-container-lowest p-8 border border-outline-variant/10 shadow-sm rounded-none ${cardHover} group flex flex-col justify-between`}>
              <div>
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 rounded-none">
                  <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">explore</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 uppercase tracking-tight text-on-surface">Domestic & International Tours</h3>
                <p className="text-secondary text-base font-body leading-relaxed max-w-sm relative z-10">
                  Exclusive Nepal treks and curated global adventures tailored to your luxury preferences.
                </p>
              </div>
              <div className="relative h-48 w-full mt-8 md:absolute md:bottom-0 md:right-0 md:w-64 md:mt-0 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80"
                  alt="Trekking in Nepal Himalayas - Yatra Holiday tour service"
                  fill
                  className="object-cover opacity-20 group-hover:opacity-40 transition-opacity"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>

            {/* Card 2 — Air Ticketing */}
            <div className={`bg-surface-container-lowest p-8 border border-outline-variant/10 shadow-sm rounded-none ${cardHover} flex flex-col`}>
              <div className="w-12 h-12 bg-secondary-container rounded-none flex items-center justify-center text-on-secondary-container mb-6">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">flight</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3 uppercase tracking-tight text-on-surface">Air Ticketing</h3>
              <p className="text-secondary text-sm font-body leading-relaxed">
                Global flight management with priority seating and premium lounge access.
              </p>
            </div>

            {/* Card 3 — Visa Services */}
            <div className={`bg-surface-container-lowest p-8 border border-outline-variant/10 shadow-sm rounded-none ${cardHover} flex flex-col`}>
              <div className="w-12 h-12 bg-secondary-container rounded-none flex items-center justify-center text-on-secondary-container mb-6">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">description</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3 uppercase tracking-tight text-on-surface">Visa Services</h3>
              <p className="text-secondary text-sm font-body leading-relaxed">
                Expert visa facilitation for stress-free international travel approvals.
              </p>
            </div>

            {/* Card 4 — Heli Services */}
            <div className={`bg-surface-container-lowest p-8 border border-outline-variant/10 shadow-sm rounded-none ${cardHover} flex flex-col`}>
              <div className="w-12 h-12 bg-secondary-container rounded-none flex items-center justify-center text-on-secondary-container mb-6">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">helicopter</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3 uppercase tracking-tight text-on-surface">Heli Services</h3>
              <p className="text-secondary text-sm font-body leading-relaxed">
                Private helicopter charters for Everest views and remote mountain landings.
              </p>
            </div>

            {/* Card 5 — Train Tickets */}
            <div className={`bg-surface-container-lowest p-8 border border-outline-variant/10 shadow-sm rounded-none ${cardHover} flex flex-col`}>
              <div className="w-12 h-12 bg-secondary-container rounded-none flex items-center justify-center text-on-secondary-container mb-6">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">train</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3 uppercase tracking-tight text-on-surface">Train Tickets</h3>
              <p className="text-secondary text-sm font-body leading-relaxed">
                Luxurious rail bookings across India and international rail networks.
              </p>
            </div>

            {/* Card 6 — School & College Packages (Wide) */}
            <div className={`md:col-span-2 bg-surface-container-lowest p-8 border border-outline-variant/10 shadow-sm rounded-none ${cardHover} flex items-center gap-8`}>
              <div className="w-20 h-20 bg-primary/5 flex items-center justify-center rounded-none flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-4xl" aria-hidden="true">school</span>
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold mb-2 uppercase tracking-tight text-on-surface">School & College Packages</h3>
                <p className="text-secondary text-sm font-body leading-relaxed">
                  Educational and adventure-focused youth expeditions with safety-first protocols in Kathmandu.
                </p>
              </div>
            </div>

            {/* Card 7 — Express Courier */}
            <div className={`bg-surface-container-lowest p-8 border border-outline-variant/10 shadow-sm rounded-none ${cardHover} flex flex-col`}>
              <div className="w-12 h-12 bg-secondary-container rounded-none flex items-center justify-center text-on-secondary-container mb-6">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">local_shipping</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-3 uppercase tracking-tight text-on-surface">Express Courier</h3>
              <p className="text-secondary text-sm font-body leading-relaxed">
                Reliable global logistics for your important documents and baggage.
              </p>
            </div>

            {/* Card 8 — Travel Assurance (Highlight) */}
            <div className={`bg-primary p-8 border border-primary/20 shadow-xl rounded-none ${cardHover} text-white flex flex-col justify-between`}>
              <div>
                <div className="w-12 h-12 bg-white/20 flex items-center justify-center mb-6 rounded-none">
                  <span className="material-symbols-outlined text-white text-2xl" aria-hidden="true">verified_user</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 uppercase tracking-tight text-white">Travel Assurance</h3>
                <p className="text-white/90 text-sm font-body leading-relaxed">
                  Healthy, Safe & Hassle Free Travel with 24/7 concierge support from our Kathmandu headquarters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE SECTION */}
      <section className="py-32 bg-surface-container-low px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-none overflow-visible shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1000&q=80"
              alt="Why Choose Yatra Holiday Nepal"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-primary p-8 flex flex-col items-center justify-center text-center shadow-2xl rounded-none z-10 border border-white/10">
              <span className="text-5xl font-headline font-black text-white mb-1">15+</span>
              <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-white/80 leading-tight">
                Years of Excellence <br /> In Travel Industry
              </span>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface uppercase tracking-tighter mb-10 leading-[0.95]">
              Why Choose <br /> <span className="text-primary">Yatra Holiday?</span>
            </h2>
            
            <div className="space-y-10 mb-12">
              {[
                { title: "Curated Expertise", icon: "star", desc: "Crafting bespoke journeys with a decade of Himalayan mastery." },
                { title: "Global Network", icon: "shield", desc: "Connected with top-tier international partners for seamless logistics." },
                { title: "24/7 Priority Concierge", icon: "headset_mic", desc: "Unwavering support in any time zone for total peace of mind." }
              ].map((item) => (
                <div key={item.title} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-none bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-xl text-on-surface uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-secondary font-body text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="bg-on-background text-surface px-12 py-5 font-headline font-bold uppercase tracking-[0.2em] text-sm hover:bg-secondary transition-all rounded-none shadow-xl"
              aria-label="Start planning your adventure with Yatra Holiday"
            >
              Start Planning Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: SEO CONTENT BLOCK */}
      <section className="py-20 bg-surface px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-headline font-extrabold text-on-surface uppercase tracking-tight mb-10 leading-tight">
            Your Gateway to the World from the Heart of the Himalayas
          </h3>
          <div className="space-y-6 text-secondary text-lg leading-relaxed font-body">
            <p>
              Offering the most comprehensive <strong>International tour packages from Kathmandu</strong>, Yatra Holiday ensures that distance is never a barrier to adventure. From the bustling streets of Tokyo to the romantic cafes of Paris, our curated global escapes are designed for the discerning traveler.
            </p>
            <p>
              We pride ourselves on delivering premium <strong>Domestic travel services</strong> across Nepal, combined with our reputation as a trusted <strong>Travel agency in Nepal</strong>. Our focus remains on <strong>Premium travel management</strong>, ensuring every client receives tailored logistics and world-class concierge support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
