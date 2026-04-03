import { Metadata } from "next";
import Image from "next/image";
import VisaForm from "@/components/VisaForm";

export const metadata: Metadata = {
  title: "Visa Services & Processing | Yatra Holiday Nepal",
  description: "Expert international visa assistance in Kathmandu. We simplify global mobility with a 98% success rate for Europe, Japan, USA, Australia, and Asia visas.",
  keywords: ["Visa services Kathmandu", "Schengen visa Nepal", "Japan visa assistance Nepal", "travel agency visa processing", "international visa Kathmandu"],
};

export default function VisaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "International Visa Processing",
    "provider": {
      "@type": "TravelAgency",
      "name": "Yatra Holiday",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kathmandu",
        "addressCountry": "Nepal"
      }
    },
    "areaServed": "Nepal",
    "description": "Expert international visa assistance for major destinations including Europe, Japan, USA, and Australia."
  };

  return (
    <main className="bg-surface min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Uniform Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=90&w=2000" 
            alt="International passports and visa processing background" 
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
            Expert Processing
          </span>
          
          {/* Main H1 */}
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 drop-shadow-2xl">
            Seamless Visa Assistance <br /> for Global Mobility
          </h1>
          
          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
            Simplifying global travel for Nepalese citizens with precision, expertise, and institutional care from our Kathmandu headquarters.
          </p>
        </div>
      </section>

      {/* SECTION 2: MAIN CONTENT SPLIT */}
      <section className="max-w-7xl mx-auto px-6 py-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* LEFT COLUMN — INQUIRY FORM */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <VisaForm />
          </div>

          {/* RIGHT COLUMN — SEO & DESTINATIONS */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="mb-20">
              <span className="text-primary font-headline font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                Our Expertise
              </span>
              <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 text-on-surface uppercase tracking-tight">
                International Visa Assistance <br /> with a Human Touch
              </h2>
              <p className="text-secondary leading-loose font-body mb-12">
                Navigating the complexities of global travel requires more than just filling out forms. At Yatra Holiday, the premier Travel agency in Nepal, we specialize in comprehensive International visa assistance. Our localized expertise in Kathmandu combined with a global partner network ensures that your documentation is precise and your application is positioned for the highest possible success rate.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-surface-container-lowest border border-surface-variant p-8 rounded-none flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined text-3xl" aria-hidden="true">travel_explore</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface mb-2 uppercase tracking-tight">Global Network</h3>
                    <p className="text-secondary text-sm font-body">Direct coordination with embassies and consulates for verified updates.</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest border border-surface-variant p-8 rounded-none flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined text-3xl" aria-hidden="true">verified_user</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface mb-2 uppercase tracking-tight">98% Success Rate</h3>
                    <p className="text-secondary text-sm font-body">Rigorous document verification and advisory to minimize rejections.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Destinations */}
            <div>
              <h2 className="font-headline font-bold text-3xl mb-8 border-t border-surface-variant/50 pt-12 text-on-surface uppercase tracking-tight">
                Popular Destinations from Kathmandu
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Vietnam", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80" },
                  { name: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80" },
                  { name: "Europe", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80" }
                ].map((dest) => (
                  <div key={dest.name} className="relative aspect-[4/5] bg-surface-variant overflow-hidden group">
                    <Image
                      src={dest.image}
                      alt={`${dest.name} visa assistance for travelers from Nepal`}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-none"
                      sizes="(max-width: 768px) 33vw, 15vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="font-headline font-bold text-base text-white uppercase tracking-widest text-center">
                        {dest.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section className="bg-surface-container-low py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-headline font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              The Yatra Advantage
            </span>
            <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-on-surface uppercase tracking-tighter leading-none">
              Why Kathmandu Trusts Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl relative rounded-none overflow-hidden border border-surface-variant/20">
            <div className="p-12 text-center rounded-none border-b md:border-b-0 md:border-r border-surface-variant/30 flex flex-col items-center">
              <div className="text-primary mb-6">
                <span className="material-symbols-outlined text-5xl" aria-hidden="true">edit_note</span>
              </div>
              <h4 className="font-headline font-extrabold text-lg text-on-surface uppercase tracking-tight mb-4">
                Expert Consultation
              </h4>
              <p className="text-secondary font-body text-sm leading-relaxed">
                Personalized interview coaching and documentation checklists tailored to individual embassy requirements.
              </p>
            </div>

            <div className="p-12 text-center rounded-none border-b md:border-b-0 md:border-r border-surface-variant/30 flex flex-col items-center">
              <div className="text-primary mb-6">
                <span className="material-symbols-outlined text-5xl" aria-hidden="true">description</span>
              </div>
              <h4 className="font-headline font-extrabold text-lg text-on-surface uppercase tracking-tight mb-4">
                Document Attestation
              </h4>
              <p className="text-secondary font-body text-sm leading-relaxed">
                Full support for notary and government attestations required for international visa approvals.
              </p>
            </div>

            <div className="p-12 text-center rounded-none flex flex-col items-center">
              <div className="text-primary mb-6">
                <span className="material-symbols-outlined text-5xl" aria-hidden="true">support_agent</span>
              </div>
              <h4 className="font-headline font-extrabold text-lg text-on-surface uppercase tracking-tight mb-4">
                24/7 Support
              </h4>
              <p className="text-secondary font-body text-sm leading-relaxed">
                Dedicated account managers available around the clock to track your application and answer queries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
