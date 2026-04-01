"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white/80 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Yatra Holiday Home">
          <Image
            src="/images/logo.png"
            alt="Yatra Holiday Logo"
            width={140}
            height={48}
            className="h-10 w-auto object-contain"
            priority
            fetchPriority="high"
          />
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-headline uppercase tracking-widest text-sm transition-all pb-1 ${
                  isActive
                    ? "text-primary border-b-2 border-primary font-bold"
                    : "text-zinc-600 hover:text-primary transition-colors"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-4">
          <button 
            className="hidden sm:block bg-primary text-white font-headline font-bold uppercase tracking-widest text-xs px-8 py-3 hover:bg-primary-container active:scale-95 transition-all rounded-none"
            aria-label="Book a trip now"
          >
            Book Now
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-on-surface"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined text-3xl" aria-hidden="true">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)} aria-label="Yatra Holiday Home">
              <Image
                src="/images/logo.png"
                alt="Yatra Holiday Logo"
                width={140}
                height={48}
                className="h-10 w-auto object-contain"
                priority
                sizes="140px"
              />
            </Link>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">close</span>
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-headline font-bold uppercase tracking-widest text-2xl transition-colors ${
                    isActive ? "text-primary border-l-4 border-primary pl-4" : "text-on-surface hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="mt-auto">
            <button 
              className="w-full bg-primary text-white font-headline font-bold uppercase tracking-widest py-4 hover:bg-primary-container transition-all rounded-none"
              aria-label="Book a trip now"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
