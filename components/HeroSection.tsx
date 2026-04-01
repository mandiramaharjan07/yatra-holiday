import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Uniform Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=90&w=2000" 
          alt="Majestic Himalayan Mountains" 
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
          YOUR JOURNEY BEGINS HERE
        </span>
        
        {/* Main H1 */}
        <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 drop-shadow-2xl">
          Explore Amazing Places in Nepal and Around the World
        </h1>
        
        {/* Subtitle */}
        <p className="font-body text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
          Yatra Holiday — Kathmandu, Nepal&apos;s premier travel agency crafting extraordinary journeys across the Himalayas since 2012. Experience the world with Nepal&apos;s most trusted travel experts.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
           {/* Primary Red Button */}
           <Link 
             href="/packages"
             className="bg-primary text-white px-8 py-4 font-headline font-bold text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-none shadow-xl"
           >
             Explore Packages
           </Link>
           {/* Secondary Transparent Button */}
           <Link 
             href="/contact"
             className="border border-white/50 bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-headline font-bold text-sm tracking-widest uppercase hover:bg-white/20 transition-colors rounded-none"
           >
             Contact Us
           </Link>
        </div>

      </div>
    </section>
  );
}
