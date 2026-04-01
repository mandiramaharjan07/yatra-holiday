"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What tours does Yatra Holiday offer?",
    answer: "Yatra Holiday offers a wide range of tours including Himalayan trekking, cultural heritage tours in Kathmandu, Pokhara, and Lumbini, jungle safaris in Chitwan, and adventure activities like paragliding and white-water rafting. We also specialize in international outbound packages to destinations like Dubai, Thailand, Bali, and Europe."
  },
  {
    question: "How do I get a visa through Yatra Holiday?",
    answer: "Our dedicated visa services team handles the entire documentation process for various countries. Whether you need a tourist visa for Thailand, a business visa for China, or complex documentation for Europe (Schengen), we provide expert guidance to ensure a high success rate."
  },
  {
    question: "What is the best trek in Nepal?",
    answer: "The 'best' trek depends on your experience and interest. The Everest Base Camp (EBC) trek is iconic for its mountain views, while the Annapurna Circuit offers incredible cultural diversity. For those seeking shorter treks, the Poon Hill or Mardi Himal treks are highly recommended."
  },
  {
    question: "Is Yatra Holiday a trusted travel agency?",
    answer: "Yes, Yatra Holiday has been a premier travel management company in Nepal since 2012. We have served over 50,000 travelers and maintain a massive network of 200+ global partners. We are fully licensed and recognized by the Nepal Tourism Board."
  },
  {
    question: "What countries can I visit with Yatra Holiday packages?",
    answer: "Beyond Nepal, we offer comprehensive holiday packages to India, Bhutan, Tibet, Thailand, Singapore, Malaysia, Dubai, Egypt, Turkey, and various European countries. Our international packages include flights, accommodation, and guided tours."
  },
  {
    question: "How do I book a trip with Yatra Holiday?",
    answer: "Booking is easy! You can contact us via our website's contact form, email us at info@yatraholiday.com, or call our Thamel office at +977-01-XXXXXXX. Our travel consultants will help you customize your itinerary and guide you through the payment and booking process."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4">
            Common Questions
          </p>
          <h2 className="text-on-surface font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-8 py-6 flex justify-between items-center group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <span 
                  className={`material-symbols-outlined text-primary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  keyboard_arrow_down
                </span>
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-8 pb-8 text-secondary font-body leading-relaxed border-t border-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Structured Data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}
