import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PackagesSection from "@/components/PackagesSection";

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

      {/* SECTION 2 — WHY TRAVEL WITH US */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          
          <div className="text-center mb-16">
            <span className="text-primary font-headline 
              font-bold tracking-widest uppercase text-sm 
              block mb-4">
              OUR PROMISE
            </span>
            <h2 className="text-3xl md:text-5xl font-headline 
              font-bold text-on-surface tracking-tight">
              Why Travel With Yatra Holiday
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-10 
              editorial-shadow group hover:bg-primary 
              transition-all duration-300 rounded-none">
              <span className="material-symbols-outlined 
                text-primary group-hover:text-white 
                text-5xl mb-6 block">
                verified_user
              </span>
              <h3 className="font-headline font-bold text-xl 
                mb-4 group-hover:text-white uppercase 
                tracking-tight">
                Trusted Since 2012
              </h3>
              <p className="text-secondary 
                group-hover:text-white/80 leading-relaxed 
                font-body">
                Over 12 years of experience crafting 
                seamless international journeys for 
                50,000+ happy travelers from Nepal.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-10 
              editorial-shadow group hover:bg-primary 
              transition-all duration-300 rounded-none">
              <span className="material-symbols-outlined 
                text-primary group-hover:text-white 
                text-5xl mb-6 block">
                support_agent
              </span>
              <h3 className="font-headline font-bold text-xl 
                mb-4 group-hover:text-white uppercase 
                tracking-tight">
                24/7 Expert Support
              </h3>
              <p className="text-secondary 
                group-hover:text-white/80 leading-relaxed 
                font-body">
                Our dedicated travel experts are available 
                around the clock to assist you at every 
                step of your international journey.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-10 
              editorial-shadow group hover:bg-primary 
              transition-all duration-300 rounded-none">
              <span className="material-symbols-outlined 
                text-primary group-hover:text-white 
                text-5xl mb-6 block">
                price_check
              </span>
              <h3 className="font-headline font-bold text-xl 
                mb-4 group-hover:text-white uppercase 
                tracking-tight">
                Best Value Packages
              </h3>
              <p className="text-secondary 
                group-hover:text-white/80 leading-relaxed 
                font-body">
                Competitive pricing with no hidden fees. 
                We offer the best international tour 
                packages from Kathmandu, Nepal.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      <section className="py-24 bg-surface text-center">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-on-surface mb-4">
            Haven&apos;t Found Your Perfect Trip?
          </h2>
          <p className="text-xl text-secondary mb-12 font-body max-w-2xl mx-auto leading-relaxed">
            Our travel specialists can design a custom itinerary strictly tailored to your preferences, budget, and schedule.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-primary text-white font-headline font-bold uppercase tracking-widest px-12 py-4 hover:bg-primary-container transition-all rounded-none text-sm"
          >
            Request Custom Itinerary
          </Link>
        </div>
      </section>
    </main>
  );
}
