"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "550dc829-d72f-4081-b765-6da444df2c52");
    formData.append("subject", "New Inquiry: Yaatra Holiday Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        console.error("Submission failed", data);
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Submission error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-surface min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80" 
            alt="Contact Yatra Holiday" 
            fill 
            className="object-cover" 
            priority 
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="text-primary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
              Our Specialists
            </span>
            <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
              Let’s start planning <br /> your next story
            </h1>
            <p className="font-body text-xl text-white/90 leading-relaxed mb-10">
              Our travel specialists are standing by to help you craft the perfect itinerary. Visit our office in Thamel or reach out online.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO & FORM SECTION */}
      <section id="contact-form" className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LEFT — CONTACT INFO */}
            <div className="lg:col-span-5 space-y-8">
              <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm mb-4 block">
                Office Information
              </span>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-12">
                Visit our headquarters <br /> in Thamel, Kathmandu
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {[
                  { icon: "location_on", title: "Our Base", info: "Amrit Marg, Thamel\nKathmandu, Nepal" },
                  { icon: "call", title: "Phone Support", info: "+977-01-4533135\n+977-9851012345" },
                  { icon: "mail", title: "Email Inquiry", info: "info@yaatraholiday.com\nbooking@yaatraholiday.com" },
                  { icon: "schedule", title: "Office Hours", info: "Sun - Fri: 10:00 - 18:00\nSat: Closed" }
                ].map((card) => (
                  <div key={card.title} className="bg-surface-container-lowest p-8 editorial-shadow rounded-none flex items-start gap-6 border border-surface-variant/10">
                    <span className="material-symbols-outlined text-primary text-3xl">{card.icon}</span>
                    <div>
                      <h3 className="font-headline font-bold text-base uppercase tracking-widest mb-2 text-on-surface">
                        {card.title}
                      </h3>
                      <p className="text-secondary font-body whitespace-pre-line leading-relaxed">
                        {card.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — INQUIRY FORM */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest p-10 md:p-16 editorial-shadow rounded-none border border-surface-variant/10">
                {submitted ? (
                  <div className="text-center py-20">
                    <span className="material-symbols-outlined text-primary text-7xl mb-6 block">check_circle</span>
                    <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">Thank you!</h2>
                    <p className="text-secondary text-lg font-body">Your message has been sent to our team.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-10 text-primary font-headline font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-headline font-bold text-on-surface mb-8">Send an Inquiry</h2>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label 
                            htmlFor="full-name"
                            className="block text-sm font-body font-bold text-secondary uppercase tracking-widest mb-2"
                          >
                            Full Name
                          </label>
                          <input 
                            id="full-name"
                            name="name"
                            type="text" 
                            required 
                            placeholder="John Doe"
                            aria-label="Your full name"
                            className="w-full bg-surface-container-high border-b-2 border-surface-variant/30 focus:border-primary px-4 py-4 outline-none font-body transition-all rounded-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <label 
                            htmlFor="email"
                            className="block text-sm font-body font-bold text-secondary uppercase tracking-widest mb-2"
                          >
                            Email Address
                          </label>
                          <input 
                            id="email"
                            name="email"
                            type="email" 
                            required 
                            placeholder="john@example.com"
                            aria-label="Your email address"
                            className="w-full bg-surface-container-high border-b-2 border-surface-variant/30 focus:border-primary px-4 py-4 outline-none font-body transition-all rounded-none"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label 
                            htmlFor="phone"
                            className="block text-sm font-body font-bold text-secondary uppercase tracking-widest mb-2"
                          >
                            Phone Number
                          </label>
                          <input 
                            id="phone"
                            name="phone"
                            type="tel" 
                            required 
                            placeholder="+977"
                            aria-label="Your contact number"
                            className="w-full bg-surface-container-high border-b-2 border-surface-variant/30 focus:border-primary px-4 py-4 outline-none font-body transition-all rounded-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <label 
                            htmlFor="destination"
                            className="block text-sm font-body font-bold text-secondary uppercase tracking-widest mb-2"
                          >
                            Select Destination
                          </label>
                          <select 
                            id="destination"
                            name="destination"
                            aria-label="Select your destination"
                            className="w-full bg-surface-container-high border-b-2 border-surface-variant/30 focus:border-primary px-4 py-4 outline-none font-body transition-all rounded-none appearance-none"
                          >
                            <option value="">Select Destination...</option>
                            <option value="china">China</option>
                            <option value="vietnam">Vietnam</option>
                            <option value="london">London England Scotland</option>
                            <option value="europe">Europe</option>
                            <option value="japan">Japan Osaka</option>
                            <option value="bali">Bali</option>
                            <option value="southeast-asia">Thailand + Singapore + Malaysia</option>
                            <option value="thailand">Thailand</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label 
                          htmlFor="message"
                          className="block text-sm font-body font-bold text-secondary uppercase tracking-widest mb-2"
                        >
                          Your Message
                        </label>
                        <textarea 
                          id="message"
                          name="message"
                          rows={4} 
                          required 
                          placeholder="How can we help you plan your journey?"
                          aria-label="Your message"
                          className="w-full bg-surface-container-high border-b-2 border-surface-variant/30 focus:border-primary px-4 py-4 outline-none font-body transition-all rounded-none resize-none"
                        ></textarea>
                      </div>
                      <button 
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-primary text-white font-headline font-bold uppercase tracking-widest py-6 transition-all rounded-none text-sm group flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-container'}`}
                      >
                        {loading ? 'Sending...' : 'Send Inquiry'}
                        {!loading && <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section className="h-[500px] w-full bg-surface-container-high border-t border-surface-variant/20">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1296740702656!2d85.310651811559!3d27.713894725064567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191834223f65%3A0xe54930bdab76017b!2sYatra%20Holiday!5e0!3m2!1sen!2snp!4v1711822812345!5m2!1sen!2snp" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>
    </main>
  );
}
