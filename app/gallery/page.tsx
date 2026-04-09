"use client";

import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { id: 1, category: "Nepal", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80", title: "Annapurna Sanctuary" },
  { id: 2, category: "China", image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80", title: "Forbidden City, Beijing" },
  { id: 3, category: "Germany", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80", title: "Old Town Heritage" },
  { id: 4, category: "Himalaya", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", title: "Annapurna South Peak" },
  { id: 5, category: "Nepal", image: "https://images.unsplash.com/photo-1647679147029-508c62f35c33?auto=format&fit=crop&q=80&w=1200", title: "Chitwan Jungle Safari" },
  { id: 6, category: "Vietnam", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200", title: "Halong Bay Cruise" },
  { id: 7, category: "UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80", title: "Parliament, London" },
  { id: 8, category: "Nepal", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80", title: "Kathmandu Ancient City" },
  { id: 9, category: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", title: "Kyoto Golden Temple" },
  { id: 10, category: "France", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80", title: "Eiffel Tower, Paris" },
  { id: 11, category: "Nepal", image: "https://images.unsplash.com/photo-1669427966293-bd964b0e2238?auto=format&fit=crop&q=85&w=1200", title: "Lumbini Heritage" },
  { id: 12, category: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200", title: "Bali Tropical Escapes" },
  { id: 13, category: "Switzerland", image: "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=800&q=80", title: "Central Swiss Alps" },
  { id: 14, category: "Nepal", image: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?w=800&q=80", title: "Phewa Lake, Pokhara" },
  { id: 15, category: "Malaysia", image: "https://images.unsplash.com/photo-1704266429711-822bac6970f1?auto=format&fit=crop&q=85&w=1200", title: "Kuala Lumpur Skyline" },
  { id: 16, category: "UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", title: "Dubai Urban Sands" },
  { id: 17, category: "Egypt", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&q=80", title: "Pyramids of Giza" },
  { id: 18, category: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80", title: "Phi Phi Island Coast" },
  { id: 19, category: "Turkey", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80", title: "Istanbul Heritage" },
  { id: 20, category: "Bhutan", image: "https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?w=800&q=80", title: "Tiger's Nest Monastery" }
];

export default function GalleryPage() {
  return (
    <main className="bg-surface min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80" 
            alt="Yatra Holiday Gallery" 
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
              The Lookbook
            </span>
            <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
              A visual journey <br /> through the world
            </h1>
            <p className="font-body text-xl text-white/90 leading-relaxed mb-10">
              Capturing the profound beauty and untold stories of the destinations we serve. From the highest peaks to the ancient cities.
            </p>
          </div>
        </div>
      </section>

      {/* MASONRY GALLERY - CLEAN WALL */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-8 space-y-8">
            {galleryImages.map((img) => (
              <div 
                key={img.id} 
                className="break-inside-avoid relative overflow-hidden group editorial-shadow rounded-none aspect-auto bg-surface-container-lowest"
              >
                <div className="relative w-full h-full min-h-[250px]">
                  <Image
                    src={img.image}
                    alt={img.title}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">
                      {img.category}
                    </span>
                    <h3 className="text-white font-headline font-bold text-lg uppercase leading-tight">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-surface text-center">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-on-surface mb-4">
            Create Your Own Memories
          </h2>
          <p className="text-xl text-secondary mb-12 font-body max-w-2xl mx-auto leading-relaxed">
            Every photo tells a story. We are here to help you live yours. Book your next journey with Yatra Holiday today.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-primary text-white font-headline font-bold uppercase tracking-widest px-12 py-4 hover:bg-primary-container transition-all rounded-none text-sm"
          >
            Explore Packages
          </Link>
        </div>
      </section>
    </main>
  );
}
