import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Stat {
  value: string;
  label: string;
}

export default function AboutBottomSections({ stats }: { stats: Stat[] }) {
  return (
    <>
      {/* SECTION 3 — MISSION & VISION */}
      <section className="py-24 bg-surface" id="mission">
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
      <section className="py-24 bg-surface-container-low" id="why-us">
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
    </>
  );
}
