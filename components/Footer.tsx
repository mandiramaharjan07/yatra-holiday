import Link from "next/link";
import Image from "next/image";
import { navLinks, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-[#f4f4f4] w-full pt-28 pb-12 overflow-hidden border-t-2 border-zinc-200">
      {/* Mountain Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <Image 
          src="/images/footer-mountains.png" 
          alt="" 
          fill 
          className="object-cover object-bottom grayscale scale-110 translate-y-12" 
          sizes="100vw"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Column 1 - Brand */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-10 group" aria-label="Yatra Holiday Home">
              <Image
                src="/images/logo.png"
                alt="Yatra Holiday Logo"
                width={160}
                height={55}
                className="h-12 w-auto object-contain"
                sizes="160px"
              />
            </Link>
            <p className="text-zinc-600 text-base leading-relaxed mb-10 max-w-sm font-body font-light">
              Nepal's premier travel management company since 2012. Specializing in curated Himalayan journeys and global tour experiences with institution-level care.
            </p>
            
            {/* Social Icons - Alignment Refined */}
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a href="https://facebook.com/yatraholiday"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-surface-container hover:bg-primary hover:text-white text-on-surface flex items-center justify-center transition-all duration-300 rounded-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a href="https://tiktok.com/@yatraholiday"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 bg-surface-container hover:bg-primary hover:text-white text-on-surface flex items-center justify-center transition-all duration-300 rounded-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.24 8.24 0 0 0 4.83 1.56V6.79a4.85 4.85 0 0 1-1.06-.1z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/9779801234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-surface-container hover:bg-primary hover:text-white text-on-surface flex items-center justify-center transition-all duration-300 rounded-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.528 5.855L.057 23.925l6.235-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.376l-.36-.214-3.7.971.988-3.607-.235-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
              </a>

              {/* Viber */}
              <a href="viber://chat?number=9779801234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Viber"
                className="w-10 h-10 bg-surface-container hover:bg-primary hover:text-white text-on-surface flex items-center justify-center transition-all duration-300 rounded-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.985 0C5.366 0 0 5.367 0 11.985c0 2.651.876 5.1 2.336 7.08L.811 23.25l4.28-1.369A11.938 11.938 0 0 0 11.985 24C18.604 24 24 18.633 24 12.015 24 5.367 18.604 0 11.985 0zm5.95 16.989c-.317.893-1.564 1.647-2.565 1.864-.683.145-1.574.261-4.573-1.012-3.838-1.607-6.315-5.5-6.507-5.753-.184-.253-1.548-2.059-1.548-3.929 0-1.87.976-2.781 1.322-3.16.317-.347.692-.433.923-.433.23 0 .462.002.664.012.213.01.499-.081.781.595.29.693.988 2.413 1.073 2.589.086.177.144.383.029.612-.116.23-.173.374-.346.577-.173.202-.363.452-.519.607-.173.173-.353.36-.152.706.202.347.897 1.481 1.926 2.398 1.323 1.178 2.439 1.542 2.786 1.714.347.173.548.145.75-.087.202-.231.866-.1.013-1.183.462-.231.923-.462 1.004-.491.318-.116.635.029.867.231.231.202 1.505 1.414 1.76 1.66.26.248.433.635.115 1.529z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="font-headline font-bold text-lg text-on-surface mb-10 border-b-2 border-primary/10 pb-3 inline-block">
              Quick links
            </h3>
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-primary text-base font-body font-normal transition-colors flex items-center gap-2 group"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="font-headline font-bold text-lg text-on-surface mb-10 border-b-2 border-primary/10 pb-3 inline-block">
              Our services
            </h3>
            <ul className="flex flex-col gap-5">
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <Link
                    href="#"
                    className="text-zinc-500 hover:text-primary text-base font-body font-normal transition-colors flex items-center gap-2 group"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-headline font-bold text-lg text-on-surface mb-10 border-b-2 border-primary/10 pb-3 inline-block">
              Contact us
            </h3>
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <p className="text-zinc-600 text-base leading-relaxed font-body font-light">Amrit Marg, Thamel, <br /> Kathmandu, Nepal</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <p className="text-zinc-600 text-base font-body font-light">+977-1-4512345 (Direct)</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <p className="text-zinc-600 text-base font-body font-light">info@yatraholiday.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-400 text-sm font-body">
            © 2024 Yatra Holiday. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {["Privacy Policy", "Terms of Service", "FAQ"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-zinc-400 hover:text-primary text-sm font-body font-normal transition-colors hover:underline underline-offset-8 decoration-primary/30"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
