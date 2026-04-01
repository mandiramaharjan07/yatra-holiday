import Link from "next/link";
import Image from "next/image";
import { navLinks, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-100 w-full pt-16 pb-8 overflow-hidden border-t border-zinc-200">
      {/* Map Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <Image 
          src="/images/map-bg.png" 
          alt="" 
          fill 
          className="object-cover grayscale brightness-110" 
          sizes="100vw"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Column 1 - Brand */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-8 group" aria-label="Yatra Holiday Home">
              <Image
                src="/images/logo.png"
                alt="Yatra Holiday Logo"
                width={140}
                height={48}
                className="h-12 w-auto object-contain"
                sizes="140px"
              />
            </Link>
            <p className="text-zinc-600 text-sm leading-relaxed mb-8 max-w-xs font-body">
              Nepal's Premier Travel Management Company. Crafting extraordinary journeys across the Himalayas and beyond since 2012.
            </p>
            <div className="flex items-center gap-4">
              {["facebook", "instagram", "twitter", "youtube"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white flex items-center justify-center border border-zinc-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  aria-label={`Follow Yatra Holiday on ${social}`}
                >
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">share</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="font-headline font-bold uppercase tracking-widest text-on-surface text-xs mb-8 border-b border-primary/20 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-primary text-sm font-headline font-bold uppercase tracking-tight transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#" className="text-zinc-500 hover:text-primary text-sm font-headline font-bold uppercase tracking-tight transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="font-headline font-bold uppercase tracking-widest text-on-surface text-xs mb-8 border-b border-primary/20 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="flex flex-col gap-4">
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <Link
                    href="#"
                    className="text-zinc-500 hover:text-primary text-sm font-body hover:underline underline-offset-4 decoration-primary/30 transition-all font-medium"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-headline font-bold uppercase tracking-widest text-on-surface text-xs mb-8 border-b border-primary/20 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <div className="flex flex-col">
                  <p className="text-zinc-600 text-sm leading-relaxed font-body">Yatra Holiday, Thamel, Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <p className="text-zinc-600 text-sm leading-relaxed font-body">+977-1-4512345 (Direct Line)</p>
              </div>
              <div className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <p className="text-zinc-600 text-sm leading-relaxed font-body">info@yatraholiday.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-xs font-body tracking-wider">
            © 2024 Yatra Holiday. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {["Privacy Policy", "Terms of Service", "FAQ", "Support"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-zinc-500 hover:text-primary text-[10px] uppercase font-bold tracking-[0.2em] transition-colors hover:underline underline-offset-4 decoration-primary"
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
