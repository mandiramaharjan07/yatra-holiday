import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Yatra Holiday - Travel Experts in Kathmandu",
  description: "Get in touch with Yatra Holiday's travel experts in Kathmandu, Nepal. Call us at +977-01-4533135 or visit our office on Durbar Marg for premium travel planning.",
  keywords: ["Contact Yatra Holiday", "Travel agency Kathmandu contact", "Nepal tour operator phone number", "Durbar Marg travel agency"],
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Yaatra Holiday Pvt Ltd",
    "telephone": "+977-01-4533135",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "01 Durbar Marg",
      "addressLocality": "Kathmandu",
      "postalCode": "44600",
      "addressCountry": "Nepal"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.7135427,
      "longitude": 85.3212543
    },
    "url": "https://yatraholiday.com",
    "logo": "https://yatraholiday.com/images/logo.png",
    "image": "https://yatraholiday.com/images/logo.png"
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
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=90&w=2000" 
            alt="Contact Yatra Holiday Travel Experts Kathmandu" 
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
            Our Specialists
          </span>
          
          {/* Main H1 */}
          <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 drop-shadow-2xl">
            Contact our travel experts in Kathmandu
          </h1>
          
          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
            Crafting your next great story begins with a single conversation in our Durbar Marg studio.
          </p>
        </div>
      </section>

      {/* SECTION 2: MAIN CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* LEFT COLUMN — CONTACT INFORMATION */}
          <div className="lg:col-span-5">
            <h2 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight mb-12 uppercase">
              Contact Information
            </h2>
            
            <div className="space-y-10 mb-16">
              <div className="flex gap-6 items-start">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined text-3xl" aria-hidden="true">call</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xs uppercase tracking-widest text-secondary mb-2">Phone Lines</h3>
                  <p className="text-on-surface font-headline font-extrabold text-xl">+977-01-4533135</p>
                  <p className="text-on-surface font-headline font-extrabold text-xl">01-4533423 / 24</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined text-3xl" aria-hidden="true">chat</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xs uppercase tracking-widest text-secondary mb-2">WhatsApp Support</h3>
                  <p className="text-on-surface font-headline font-extrabold text-xl">+977-9841979507</p>
                  <p className="text-on-surface font-headline font-extrabold text-xl">+977-9801558722</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined text-3xl" aria-hidden="true">alternate_email</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xs uppercase tracking-widest text-secondary mb-2">Electronic Mail</h3>
                  <p className="text-on-surface font-headline font-extrabold text-xl lowercase">info@yaatraholiday.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined text-3xl" aria-hidden="true">location_on</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xs uppercase tracking-widest text-secondary mb-2">The Studio</h3>
                  <p className="text-on-surface font-headline font-extrabold text-xl uppercase tracking-tight">Durbarmarg, Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-8 border-l-4 border-primary rounded-none shadow-sm">
              <p className="italic font-body text-secondary text-lg leading-relaxed mb-4">
                &ldquo;A journey of a thousand miles begins with a consultation.&rdquo;
              </p>
              <p className="font-headline font-bold text-xs uppercase tracking-widest text-primary">
                &mdash; The Editorial Explorer Team
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — INQUIRY FORM */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE MAP */}
      <section className="w-full h-[500px] bg-surface-container-highest relative overflow-hidden group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.22741981882!2d85.31867937618451!3d27.7102604253634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19346665aa01%3A0xeb69e97410e27055!2sYaatra%20Holiday%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1712061234567!5m2!1sen!2snp" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.5)' }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Yaatra Holiday Pvt Ltd Head Office Kathmandu"
          className="grayscale group-hover:grayscale-0 transition-all duration-700"
        ></iframe>

        {/* Information Card Overlay */}
        <div className="absolute bottom-8 left-8 bg-white p-8 max-w-sm shadow-2xl hidden md:block rounded-none border-l-4 border-primary z-10 border border-surface-variant/20">
          <h4 className="font-headline font-extrabold text-xl text-on-surface mb-3 uppercase tracking-tight">Our Headquarters</h4>
          <p className="text-secondary font-body text-sm leading-relaxed mb-6">
            Visit us in the heart of Kathmandu for a personalized travel planning experience.
          </p>
          <Link 
            href="https://maps.google.com/?q=Yaatra+Holiday+Pvt+Ltd,+Kathmandu" 
            target="_blank"
            className="text-primary font-headline font-bold text-xs uppercase tracking-widest hover:underline flex items-center gap-2"
          >
            Get Directions
            <span className="material-symbols-outlined text-base" aria-hidden="true">open_in_new</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
