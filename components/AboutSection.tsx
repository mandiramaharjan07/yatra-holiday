import { stats } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2">
          <p className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4">
            Legacy of Excellence
          </p>
          <h2 className="text-on-surface font-headline font-extrabold text-4xl md:text-5xl lg:text-7xl tracking-tighter uppercase leading-[0.9] mb-8">
            About <br /> Yatra Holiday
          </h2>
          <div className="space-y-6 max-w-xl text-lg text-secondary leading-relaxed font-body">
            <p>
              Yatra Holiday was established in 2012 with a passion to showcase 
              the raw beauty of the Himalayas. Based in Thamel, Kathmandu, Nepal, 
              we have grown into a leading travel management company serving 
              50,000+ happy travelers.
            </p>
            <p>
              As a 4.9 star rated travel agency with 12+ years of expertise and 
              200+ global partners, we ensure your journey is seamless, safe, and soulful. 
              From intricate visa documentation to complex mountain logistics, 
              we are your trusted partners in exploration.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 mt-16 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-primary/20 pl-6 hover:border-primary transition-all duration-300">
                <p className="text-4xl font-headline font-black text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] font-headline font-bold uppercase tracking-[0.25em] text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Brand Box */}
        <div className="lg:w-1/2 relative w-full aspect-square max-w-[600px]">
          <div className="w-full h-full bg-white bg-surface-container-lowest p-12 md:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden group editorial-shadow border border-surface-variant/20">
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-primary/5 group-hover:scale-150 transition-transform duration-1000 ease-in-out pointer-events-none" />
            
            {/* Brand Logo/Emblem */}
            <div className="relative mb-12 group-hover:scale-110 transition-transform duration-700">
              <svg className="w-48 h-48 text-primary/10 absolute -inset-12 animate-spin-slow opacity-50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2zm0 4.5l7.5 13.5H4.5L12 6.5z" />
              </svg>
              <svg className="w-32 h-32 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2zm0 4.5l7.5 13.5H4.5L12 6.5z" />
              </svg>
            </div>
            
            <h3 className="font-headline font-extrabold text-4xl md:text-5xl tracking-tighter text-on-surface uppercase mb-8 z-10">
              Trusted <br /> Since 2012
            </h3>
            
            {/* Icon Row */}
            <div className="flex justify-center gap-8 z-10">
              <span className="material-symbols-outlined text-primary text-5xl hover:scale-125 transition-transform cursor-default" title="Verified Travel Agency" aria-label="Verified Travel Agency">verified</span>
              <span className="material-symbols-outlined text-primary text-5xl hover:scale-125 transition-transform cursor-default" title="Global Exploration Experts" aria-label="Global Exploration Experts">travel_explore</span>
              <span className="material-symbols-outlined text-primary text-5xl hover:scale-125 transition-transform cursor-default" title="Award Winning Service" aria-label="Award Winning Service">award_star</span>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-8 shadow-2xl flex flex-col items-center justify-center group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-1000 ease-out hidden md:flex ring-8 ring-white/10">
              <span className="font-headline font-black text-5xl mb-1 leading-none text-white">#1</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] whitespace-nowrap text-white">Rated Agency 2023</span>
            </div>
          </div>
          
          {/* Background Decorative Element */}
          <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
