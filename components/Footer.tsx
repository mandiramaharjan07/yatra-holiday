import Link from "next/link";
import Image from "next/image";
import { navLinks, services } from "@/lib/data";
import { FaFacebook, FaWhatsapp, FaViber } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

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
              {[
                { icon: <FaFacebook size={18} />, href: "https://facebook.com/yatraholiday", label: "Facebook" },
                { icon: <FaTiktok size={18} />, href: "https://tiktok.com/@yatraholiday", label: "TikTok" },
                { icon: <FaWhatsapp size={18} />, href: "https://wa.me/9779801234567", label: "WhatsApp" },
                { icon: <FaViber size={18} />, href: "viber://chat?number=9779801234567", label: "Viber" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Yatra Holiday on ${social.label}`}
                  className="w-10 h-10 bg-white border border-zinc-200 
                  hover:bg-primary hover:text-white hover:border-primary
                  text-on-surface flex items-center justify-center 
                  transition-all duration-300 rounded-none shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
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
