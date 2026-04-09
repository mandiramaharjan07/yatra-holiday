import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Package {
  name: string;
  gallery: string[];
  inclusions: string[];
  duration: string;
  nights: string;
  country: string;
}

export default function PackageBottomSections({ pkg }: { pkg: Package }) {
  return (
    <>
      {/* SECTION 5 — VISUAL GALLERY */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto" id="gallery">
        <div className="text-center mb-20">
          <p className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4">
            Visual Narrative
          </p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface uppercase tracking-tighter">
            Authentic Moments
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pkg.gallery.map((img, i) => {
            const heights = ["h-64", "h-96", "h-80", "h-72"];
            return (
              <div 
                key={i} 
                className={`relative ${heights[i % 4]} overflow-hidden group editorial-shadow`}
              >
                <Image
                  src={img}
                  alt={`${pkg.name} travel photo - ${pkg.country} destination`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6 — COMMON QUESTIONS (FAQ) */}
      <section className="py-32 px-8 bg-white border-t border-surface-variant/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface uppercase tracking-tighter">
              Expert Insights
            </h2>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="font-headline font-semibold text-xl text-on-surface uppercase tracking-tight mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-primary text-white text-xs">Q</span>
                How do I book {pkg.name} tour from Nepal?
              </h3>
              <p className="text-secondary text-lg leading-relaxed font-body pl-11">
                Contact Yatra Holiday in Thamel, Kathmandu at +977-01-4533135 or email info@yaatraholiday.com. Our experts will guide you through the seamless booking process, from itinerary customization to final documentation.
              </p>
            </div>
            
            <div className="pt-6 border-t border-surface-variant/10">
              <h3 className="font-headline font-bold text-xl text-on-surface uppercase tracking-tight mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-primary text-white text-xs">Q</span>
                What is included in {pkg.name} tour package?
              </h3>
              <p className="text-secondary text-lg leading-relaxed font-body pl-11 capitalize">
                {pkg.inclusions.join(", ")}. We ensure all core logistics are handled so you can focus entirely on the journey.
              </p>
            </div>
            
            <div className="pt-6 border-t border-surface-variant/10">
              <h3 className="font-headline font-bold text-xl text-on-surface uppercase tracking-tight mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-primary text-white text-xs">Q</span>
                How many days is the {pkg.name} tour?
              </h3>
              <p className="text-secondary text-lg leading-relaxed font-body pl-11">
                The {pkg.name} tour spans {pkg.duration} and {pkg.nights}. This timeframe is expertly calculated to balance immersive exploration with comfortable transit and luxury rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — INQUIRY CTA BANNER */}
      <section className="bg-primary text-white py-24 px-8 text-center relative overflow-hidden">
        {/* Background Text Decor */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-headline font-black opacity-5 pointer-events-none select-none uppercase whitespace-nowrap">
          {pkg.name}
        </span>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tighter mb-6 uppercase leading-[0.9]">
            Ready to Explore <br /> {pkg.name}?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-body max-w-2xl mx-auto leading-relaxed">
            Contact our travel experts in Kathmandu, Nepal today. 
            Yatra Holiday will craft your perfect {pkg.country} journey.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-primary font-headline font-bold uppercase tracking-[0.3em] px-16 py-6 text-sm hover:bg-surface-container-low transition-all rounded-none shadow-2xl"
          >
            Inquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
