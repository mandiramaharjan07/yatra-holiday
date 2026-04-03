import Image from "next/image";
import { destinations } from "@/lib/data";

export default function DestinationsSection() {
  return (
    <section id="tours" className="py-24 bg-on-background text-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Adventure Awaits
            </p>
            <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tighter uppercase leading-none">
              Discover Places <br className="hidden md:block" /> Around Nepal
            </h2>
          </div>
          <button 
            className="border border-white/20 px-10 py-4 font-headline font-bold uppercase tracking-widest text-xs hover:bg-white/10 active:scale-95 transition-all rounded-none ring-1 ring-white/10"
            aria-label="View all travel destinations in Nepal"
          >
            View All Destinations
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.title}
              className="group relative h-[500px] md:h-[600px] overflow-hidden bg-zinc-800"
            >
              {/* Image with Grayscale Effect */}
              <Image
                src={dest.image}
                alt={`Panoramic view of ${dest.title}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 p-10 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <span className="text-[#ff6b6b] font-headline font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">
                  {dest.category}
                </span>
                <h3 className="text-3xl font-headline font-semibold uppercase tracking-tight mb-6 leading-none">
                  {dest.title}
                </h3>
                <p className="text-white/0 group-hover:text-white/100 transition-all duration-500 delay-100 line-clamp-3 text-sm leading-relaxed font-body">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
