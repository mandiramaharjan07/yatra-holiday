import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel Services | Yatra Holiday Nepal",
  description: "Yatra Holiday offers international tours, visa services, hotel reservations, trekking and heli tours from Kathmandu, Nepal.",
};

const services = [
  { icon: "public", title: "International Tours", desc: "Curated travel itineraries for premium global destinations with full logistics support." },
  { icon: "confirmation_number", title: "Ticket Booking", desc: "Instant airline bookings for major international carriers with competitive fares." },
  { icon: "article", title: "Visa Services", desc: "Professional assistance for visa processing to major destinations with high success rates." },
  { icon: "hotel", title: "Hotel Reservation", desc: "Partnerships with luxury hotels ensuring best rates and premium stays worldwide." },
  { icon: "directions_car", title: "Vehicle Rental", desc: "Reliable fleet of modern vehicles for local sightseeing and mountain journeys." },
  { icon: "hiking", title: "Trekking & Expeditions", desc: "Expert-led treks to Everest, Annapurna, and technical peak climbing for adventurers." },
  { icon: "helicopter", title: "Heli Tours", desc: "Luxury helicopter tours to remote Himalayan landmarks for a once-in-a-lifetime view." },
  { icon: "support_agent", title: "24/7 Support", desc: "Dedicated concierge service at every step of your journey, anytime, anywhere." }
];

export default function ServicesPage() {
  return (
    <main className="bg-surface min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80" 
            alt="Yatra Holiday Services - Travel Planning" 
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
              What We Offer
            </span>
            <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
              World-class travel services <br /> for every journey
            </h1>
            <p className="font-body text-xl text-white/90 leading-relaxed mb-10">
              From Himalayan treks to international visa services — Yatra Holiday covers every aspect of your travel from Kathmandu, Nepal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#services"
                className="bg-primary text-white font-headline font-bold uppercase tracking-widest px-10 py-4 hover:bg-primary-container transition-all rounded-none text-sm"
              >
                View Services
              </Link>
              <Link 
                href="/contact"
                className="bg-white/10 border border-white/30 text-white font-headline font-bold uppercase tracking-widest px-10 py-4 hover:bg-white/20 transition-all rounded-none text-sm backdrop-blur-sm"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — SERVICES GRID */}
      <section id="services" className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm mb-4 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-on-surface mb-8">
              Comprehensive Travel Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-variant mt-16 border border-surface-variant/20">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="bg-surface-container-lowest p-10 hover:bg-primary group transition-all duration-300 rounded-none flex flex-col items-start h-full"
              >
                <span className="material-symbols-outlined text-primary group-hover:text-white text-5xl mb-6 block transition-colors">
                  {service.icon}
                </span>
                <h3 className="font-headline font-bold text-xl group-hover:text-white uppercase mb-4 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary font-body text-base leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY BOOK WITH US */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-on-surface">
              Why Book With Yatra Holiday
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: "verified_user",
                title: "Unmatched Expertise",
                text: "Over a decade of industry leadership, managing the finest travel logistics from Nepal."
              },
              {
                icon: "support_agent",
                title: "24/7 Global Support",
                text: "Always available, everywhere. Our Kathmandu-based team supports you in every time zone."
              },
              {
                icon: "sell",
                title: "Price Transparency",
                text: "Literal and honest pricing for all international and domestic packages with no hidden extras."
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

      {/* SECTION 3 — CTA */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-screen-2xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white mb-6">
            Ready to Plan Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 font-body max-w-2xl mx-auto">
            Contact Yatra Holiday in Kathmandu today and let our specialists manage every detail of your trip.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-primary font-headline font-bold uppercase tracking-widest px-12 py-4 hover:bg-surface transition-all rounded-none text-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
