import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel Gallery & Inspirations | Yatra Holiday Nepal",
  description: "Explore breathtaking landscapes and pristine nature from around the world. Get inspired for your next international journey with Yatra Holiday.",
  keywords: ["Travel gallery", "Nature photography", "Nepal travel agency", "World landscapes", "Yatra Holiday gallery"],
};

export default function GalleryPage() {
  const images = [
    {
      label: "Nepal",
      location: "Himalayas",
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=90&w=1200",
      span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
      label: "Bali",
      location: "Indonesia",
      src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200",
      span: "col-span-1 row-span-1"
    },
    {
      label: "Switzerland",
      location: "The Alps",
      src: "https://images.unsplash.com/photo-1531366936337-77b508f7ce19?q=80&w=1200",
      span: "col-span-1 row-span-1"
    },
    {
      label: "Japan",
      location: "Mt Fuji",
      src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200",
      span: "col-span-1 row-span-2"
    },
    {
      label: "Vietnam",
      location: "Ha Long Bay",
      src: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200",
      span: "col-span-1 row-span-1"
    },
    {
      label: "Thailand",
      location: "Islands",
      src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200",
      span: "col-span-1 md:col-span-2 row-span-1"
    },
    {
      label: "Iceland",
      location: "Northern Lights",
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200",
      span: "col-span-1 row-span-1"
    },
    {
      label: "Scotland",
      location: "Highlands",
      src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200",
      span: "col-span-1 md:col-span-2 row-span-1"
    },
    {
      label: "Maldives",
      location: "Ocean",
      src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200",
      span: "col-span-1 row-span-1"
    },
    {
      label: "Greece",
      location: "Santorini",
      src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200",
      span: "col-span-1 row-span-1"
    },
    {
      label: "Dubai",
      location: "Desert",
      src: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1200",
      span: "col-span-1 row-span-1"
    },
    {
      label: "Singapore",
      location: "Gardens",
      src: "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?q=80&w=1200",
      span: "col-span-1 md:col-span-3 row-span-1"
    }
  ];

  return (
    <main className="pb-24 bg-surface min-h-screen">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Uniform Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=90&w=2000" 
            alt="World Landscapes and Pristine Nature - Yatra Holiday Lookbook" 
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
            The Lookbook
          </span>
          
          {/* Main H1 */}
          <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 drop-shadow-2xl">
            The World In Focus
          </h1>
          
          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
            Curated glimpses of pristine nature and awe-inspiring landscapes from our favorite global destinations.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE GRID */}
      <section className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[350px]">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group w-full h-full rounded-none shadow-md cursor-pointer ${image.span}`}
            >
              <Image
                src={image.src}
                alt={`${image.label} nature photography by Yatra Holiday`}
                fill
                className="object-cover rounded-none group-hover:scale-110 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest mb-2 block">
                    {image.location}
                  </span>
                  <h3 className="text-white font-headline font-bold text-2xl uppercase tracking-wider">
                    {image.label}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CALL TO ACTION */}
      <section className="relative w-full overflow-hidden mt-12">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=90&w=2000" 
            alt="Luxury alpine destination - Yatra Holiday travel inspiration" 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 md:py-48 text-center">
          <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-white mb-12 tracking-tight drop-shadow-2xl">
            Ready to step <br /> into the frame?
          </h2>
          <Link 
            href="/contact"
            className="inline-block bg-primary text-white border border-white/20 font-headline font-bold uppercase tracking-[0.2em] px-12 py-6 hover:bg-white hover:text-primary transition-all duration-300 rounded-none shadow-2xl text-center"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </main>
  );
}
