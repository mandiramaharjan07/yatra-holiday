import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/data";

export default function PackagesSection() {
  return (
    <section id="packages" className="py-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4">
            Global Getaways
          </p>
          <h2 className="text-on-surface font-headline font-bold text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-none mb-6">
            International Packages
          </h2>
          <p className="text-secondary font-body text-lg leading-relaxed">
            Yatra Holiday offers premium international tour packages from Kathmandu, Nepal to top destinations across Asia and Europe. 
            All packages include guided tours with 24/7 support.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.slug}
              className="group bg-surface-container-lowest editorial-shadow overflow-hidden flex flex-col h-full border border-surface-variant/20"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={pkg.image || ""}
                  alt={`${pkg.name} tour package from Nepal by Yatra Holiday`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="inline-block bg-primary text-white px-3 py-1 text-[10px] font-headline font-bold uppercase tracking-widest mb-4 w-fit">
                  {pkg.country}
                </div>
                
                <h3 className="font-headline font-semibold uppercase tracking-tight text-xl text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {pkg.name}
                </h3>
                
                <p className="text-secondary text-sm font-body leading-relaxed mb-8 flex-1">
                  {pkg.description}
                </p>
                
                <Link
                  href={`/packages/${pkg.slug}`}
                  className="block w-full bg-primary text-white text-center font-headline font-bold uppercase tracking-widest py-3 mt-auto hover:bg-primary-container transition-all"
                  aria-label={`View details for ${pkg.name} tour package`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
