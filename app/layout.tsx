import type { Metadata } from "next";
import { Playfair_Display, Work_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
  variable: '--font-headline',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  preload: true,
  variable: '--font-body',
  adjustFontFallback: true,
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  preload: true,
  variable: '--font-editorial',
});

export const metadata: Metadata = {
  title: "Yatra Holiday | Best Travel Agency in Nepal | Tours & Visa Services",
  description: "Nepal's premier travel agency offering Himalayan tours, trekking, visa services and international packages since 2012. Experience the world with Nepal's most trusted experts.",
  keywords: ["Nepal travel agency", "Himalayan tours", "visa services", "trekking", "Yatra Holiday", "Thamel tour agent"],
  metadataBase: new URL("https://yatraholiday.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Yatra Holiday | Best Travel Agency in Nepal",
    description: "Nepal's premier travel agency offering Himalayan tours, trekking, visa services and international packages since 2012.",
    url: "https://yatraholiday.com",
    siteName: "Yatra Holiday",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatra Holiday | Best Travel Agency in Nepal",
    description: "Nepal's premier travel agency offering Himalayan tours, trekking, visa services and international packages since 2012.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Yatra Holiday",
    "description": "Nepal's premier travel agency offering Himalayan tours, trekking, visa services and international packages since 2012",
    "url": "https://yatraholiday.com",
    "logo": "https://yatraholiday.com/images/logo.png",
    "image": "https://yatraholiday.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thamel",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    },
    "telephone": "+977-01-XXXXXXX",
    "foundingDate": "2012",
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "currenciesAccepted": "NPR, USD",
    "paymentAccepted": "Cash, Credit Card",
    "areaServed": ["Nepal", "Worldwide"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50000"
    },
    "sameAs": [
      "https://facebook.com/yatraholiday",
      "https://instagram.com/yatraholiday",
      "https://twitter.com/yatraholiday"
    ]
  };

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${workSans.variable} ${newsreader.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-surface font-body antialiased focus-visible:outline-none">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
