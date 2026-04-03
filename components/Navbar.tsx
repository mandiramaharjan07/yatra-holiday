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
                    : "text-zinc-600 hover:text-primary transition-colors hover:border-b-2 hover:border-primary/30"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact"
            className="hidden sm:block bg-primary text-white font-headline font-bold uppercase tracking-widest text-xs px-8 py-3 hover:bg-primary-container active:scale-95 transition-all rounded-none"
            aria-label="Book a trip now"
          >
            Book Now
          </Link>
          
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

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div className={`
        fixed top-0 left-0 w-full h-screen 
        bg-white z-50 transform transition-transform 
        duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header with logo and close button */}
        <div className="flex justify-between items-center 
          px-8 py-4 border-b border-surface-container">
          <Image src="/images/logo.png" 
            alt="Yatra Holiday" 
            width={140} height={48}
            className="h-10 w-auto" />
          <button 
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-on-surface">
            <span className="material-symbols-outlined 
              text-3xl">close</span>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-8 py-8 gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-headline font-bold uppercase 
                tracking-widest text-lg py-4 border-b 
                border-surface-container transition-colors ${
                  isActive ? 'text-primary border-l-4 border-primary pl-4' : 'text-on-surface hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Book Now button */}
        <div className="px-8 mt-4">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-primary text-white 
            text-center font-headline font-bold uppercase 
            tracking-widest py-4 hover:bg-primary-container 
            transition-all rounded-none"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
