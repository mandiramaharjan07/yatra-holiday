import React from 'react';
import Link from 'next/link';

export default function ToursBottomSections() {
  return (
    <>
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
    </>
  );
}
