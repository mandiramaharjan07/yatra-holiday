import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4">
            What We Offer
          </p>
          <h2 className="text-on-surface font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
            Comprehensive Travel Services
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-variant ring-1 ring-surface-variant">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface-container-lowest p-12 hover:bg-primary group transition-all duration-500 cursor-default"
            >
              <div className="mb-8">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-5xl transition-colors duration-300">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4 group-hover:text-white uppercase tracking-tight transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-zinc-600 group-hover:text-white/80 leading-relaxed font-body text-base transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Secondary Services Callout */}
        <div className="mt-16 text-center">
          <button 
            className="inline-flex items-center gap-2 font-headline font-bold uppercase tracking-widest text-xs text-primary hover:text-primary-container transition-colors group"
            aria-label="Create a custom travel itinerary"
          >
            Tailor Your Own Experience
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
