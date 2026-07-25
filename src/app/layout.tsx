import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Home Organizers Atlanta | Professional Organization Services",
    template: "%s | Home Organizers Atlanta",
  },
  description: "Transform your space with Atlanta's premier home and office organization experts. Serving Atlanta and surrounding areas since 2010.",
  keywords: ["home organization", "professional organizer", "Atlanta organizer", "decluttering", "office organization", "closet organization"],
  openGraph: {
    title: "Home Organizers Atlanta | Professional Organization Services",
    description: "Transform your space with Atlanta's premier home and office organization experts.",
    url: "https://homeorganizersatlanta.com",
    siteName: "Home Organizers Atlanta",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T3RZSCVF');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Home Organizers Atlanta",
              "description": "Professional home and office organization services in Atlanta, Georgia.",
              "url": "https://homeorganizersatlanta.com",
              "telephone": "+1-404-737-9453",
              "email": "info@homeorganizersatlanta.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2137 Canaan Ct SE",
                "addressLocality": "Atlanta",
                "addressRegion": "GA",
                "postalCode": "30316",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.7270,
                "longitude": -84.3350
              },
              "areaServed": {
                "@type": "City",
                "name": "Atlanta"
              },
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-17:00",
              "sameAs": [],
              "image": "https://homeorganizersatlanta.com/images/garage-main.jpg"
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3RZSCVF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
