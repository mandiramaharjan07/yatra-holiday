import { packages } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const PackageBottomSections = dynamic(() => import("@/components/PackageBottomSections"), { ssr: true });

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return {};

  return {
    title: `${pkg.name} Tour Package from Nepal | Yatra Holiday`,
    description: `Book ${pkg.name} ${pkg.duration} tour package from Kathmandu Nepal with Yatra Holiday. ${pkg.description} Expert guided tours with 24/7 support.`,
    keywords: [
      `${pkg.country} tour package from Nepal`,
      `${pkg.country} tour from Kathmandu`,
      `${pkg.name} holiday package`,
      "international tour packages Nepal",
      "Yatra Holiday",
      "travel agency Kathmandu",
    ],
    openGraph: {
      title: `${pkg.name} Tour Package | Yatra Holiday`,
      description: pkg.description,
      images: [{ url: pkg.heroImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pkg.name} Tour | Yatra Holiday`,
      description: pkg.description,
      images: [pkg.heroImage],
    },
    alternates: {
      canonical: `https://yatraholiday.com/packages/${pkg.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export default async function PackagePage({ params }: Props) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "TouristTrip",
              "name": `${pkg.name} Tour Package from Nepal`,
              "description": pkg.description,
              "touristType": "Cultural, Adventure",
              "itinerary": {
                "@type": "ItemList",
                "itemListElement": pkg.itinerary.map((day, i) => ({
                  "@type": "ListItem",
                  "position": i + 1,
                  "name": day.title,
                })),
              },
              "provider": {
                "@type": "TravelAgency",
                "name": "Yatra Holiday",
                "url": "https://yatraholiday.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Thamel",
                  "addressLocality": "Kathmandu",
                  "addressCountry": "NP",
                },
                "telephone": "+977-01-4533135",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": `How do I book ${pkg.name} tour from Nepal?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Contact Yatra Holiday in Thamel, Kathmandu at +977-01-4533135 or email info@yaatraholiday.com",
                  },
                },
                {
                  "@type": "Question",
                  "name": `What is included in ${pkg.name} tour package?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": pkg.inclusions.join(", "),
                  },
                },
                {
                  "@type": "Question",
                  "name": `How many days is the ${pkg.name} tour?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${pkg.duration} and ${pkg.nights}`,
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* SECTION 1 — HERO */}
      <header className="relative h-[870px] flex items-center overflow-hidden">
        <Image
          src={pkg.heroImage}
          alt={`${pkg.name} tour package hero image from Nepal by Yatra Holiday`}
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full pt-20">
          <nav className="mb-12" aria-label="Breadcrumb">
            <div className="flex items-center gap-2 text-white/80 text-sm uppercase tracking-widest font-headline font-bold">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">International Packages</span>
              <span>/</span>
              <span className="text-white/60">{pkg.name}</span>
            </div>
          </nav>
          
          <div className="max-w-4xl">
            <h1 className="text-white font-headline font-extrabold text-4xl md:text-6xl tracking-tighter mb-4 leading-tight uppercase">
              {pkg.name}
            </h1>
            <p className="text-white/90 text-2xl md:text-3xl font-body italic mb-12">
              {pkg.duration} / {pkg.nights} of Curated Wonders
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-primary text-white px-12 py-5 font-headline font-bold uppercase tracking-[0.2em] text-sm hover:bg-primary-container transition-all text-center rounded-none shadow-2xl"
                aria-label="Inquire about this package"
              >
                Inquire Now
              </Link>
              <button 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 font-headline font-bold uppercase tracking-[0.2em] text-sm hover:bg-white/20 transition-all rounded-none"
                aria-label="View visual narrative gallery"
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2 — INTRODUCTION */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl">
          <span className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-sm block mb-4">
            Exclusively Curated
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface mb-10 leading-[0.95] tracking-tight uppercase">
            The Ultimate <br /> {pkg.name} Journey
          </h2>
          <div className="space-y-8 text-on-surface-variant text-xl leading-relaxed font-body">
            <p>
              Experience the finest travel packages from Kathmandu to {pkg.country} with Yatra Holiday. 
              Our meticulously designed {pkg.name} tour from Nepal offers an immersive exploration 
              of the most legendary landmarks, hidden gems, and cultural masterpieces that this 
              extraordinary destination has to offer.
            </p>
            <p>
              As a leading travel agency in Kathmandu, Yatra Holiday ensures every detail of our 
              international tour packages from Nepal is perfected for your comfort and safety. 
              From {pkg.destinations[0]} to {pkg.destinations[pkg.destinations.length - 1]}, our 
              journey spans the most iconic cities and breathtaking landscapes, providing 24/7 
              support and expert guidance at every step.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — MAIN CONTENT SIDEBAR LAYOUT */}
      <section className="pb-32 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT COLUMN: ITINERARY */}
          <div className="lg:col-span-8">
            <h3 className="text-3xl font-headline font-semibold text-on-surface uppercase tracking-tight border-b border-surface-container-highest pb-8 mb-12">
              Detailed {pkg.duration} Itinerary
            </h3>
            
            <div className="space-y-0" role="list">
              {pkg.itinerary.map((item, index) => (
                <div key={item.day} className="flex gap-8 group" role="listitem">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-none bg-surface-container-highest flex items-center justify-center text-primary font-headline font-black text-xl transition-colors group-hover:bg-primary group-hover:text-white border border-surface-variant/20">
                      {item.day < 10 ? `0${item.day}` : item.day}
                    </div>
                    {index < pkg.itinerary.length - 1 && (
                      <div className="w-px h-full bg-surface-container-highest mx-auto my-2 group-hover:bg-primary/20 transition-colors" />
                    )}
                  </div>
                  <div className="pb-12">
                    <h3 className="font-headline font-semibold text-2xl text-on-surface uppercase tracking-tight mb-3 pt-2">
                      {item.title}
                    </h3>
                    <p className="text-secondary text-lg leading-relaxed font-body max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white editorial-shadow p-0 rounded-none border border-surface-variant/10 overflow-hidden">
              <div className="p-8">
                <span className="text-[10px] font-headline font-bold text-secondary uppercase tracking-[0.25em] block mb-6">
                  Package Overview
                </span>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-secondary tracking-widest leading-none mb-1">Duration</p>
                      <p className="text-on-surface font-headline font-bold">{pkg.duration} / {pkg.nights}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-secondary tracking-widest leading-none mb-1">Destinations</p>
                      <p className="text-on-surface font-headline font-bold">{pkg.destinations.join(" · ")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">groups</span>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-secondary tracking-widest leading-none mb-1">Group Type</p>
                      <p className="text-on-surface font-headline font-bold">Private & Group Available</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-surface-container my-8" />

                <h3 className="font-headline font-semibold text-lg uppercase tracking-tight text-on-surface mb-6">
                  Package Inclusions
                </h3>
                <ul className="space-y-4" role="list" aria-label="Package inclusions">
                  {pkg.inclusions.map((inclusion) => (
                    <li key={inclusion} className="flex items-start gap-3 text-sm text-secondary font-body leading-tight" role="listitem">
                      <span className="material-symbols-outlined text-primary text-lg flex-shrink-0">check_circle</span>
                      <span>{inclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* INQUIRY BOX */}
              <div className="bg-zinc-900 p-8 text-white">
                <h3 className="font-headline font-semibold text-xl uppercase tracking-tighter mb-2">
                  Interested in this package?
                </h3>
                <p className="text-sm text-zinc-400 mb-8 font-body leading-relaxed">
                  Contact our travel experts for personalized pricing and availability details.
                </p>
                <Link 
                  href="/contact"
                  className="block w-full bg-primary text-white text-center font-headline font-bold uppercase tracking-[0.2em] text-[10px] py-5 hover:bg-primary-container transition-all rounded-none shadow-xl"
                >
                  Inquire Now
                </Link>
                <Link 
                  href={`tel:+977014533135`}
                  className="text-white/60 text-xs font-headline font-bold tracking-widest uppercase text-center block mt-6 hover:text-white transition-colors"
                >
                  Call Us: +977-01-4533135
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PACKAGE HIGHLIGHTS */}
      <section className="bg-surface-container py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Curated Experiences
            </p>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface uppercase tracking-tighter">
              Package Highlights
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pkg.highlights.map((highlight) => (
              <div 
                key={highlight.title} 
                className="bg-surface-container-lowest p-10 rounded-none transition-all hover:scale-[1.03] duration-500 editorial-shadow group border border-surface-variant/10"
              >
                <span className="material-symbols-outlined text-5xl text-primary mb-8 block transition-transform group-hover:scale-110">
                  {highlight.icon}
                </span>
                <h3 className="font-headline font-semibold text-xl text-on-surface uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-secondary text-base leading-relaxed font-body">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PackageBottomSections pkg={pkg} />
    </div>
  );
}
