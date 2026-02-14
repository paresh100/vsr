import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import CookieConsent from "@/components/ui/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || "https://vsrs.co.uk"),
  title: {
    default: "Vision Security Recruitment Services Ltd | Premium Security London",
    template: "%s | VSRS Security London",
  },
  description: "Established 2016. High-end corporate security, close protection, and event security services in London. Professional, reliable, and discreet.",
  keywords: ["Security Services London", "Corporate Security", "Event Security", "Close Protection", "VSRS", "Vision Security", "Door Supervisors", "Construction Security"],
  authors: [{ name: "VSRS Ltd" }],
  creator: "VSRS Ltd",
  publisher: "VSRS Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vision Security Recruitment Services Ltd",
    description: "Premium security solutions for corporate and event sectors in London.",
    url: "https://vsrs.co.uk",
    siteName: "VSRS",
    images: [
      {
        url: "/images/new-image-hero.jpg", // Primary OpenGraph image
        width: 1200,
        height: 630,
        alt: "VSRS Standard of Excellence",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Security Recruitment Services Ltd",
    description: "Premium security solutions for corporate and event sectors in London.",
    images: ["/images/new-image-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        <StructuredData />
        <CookieConsent />

        {/* Hidden static form for Netlify detection */}
        <form name="vsrs-contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="vsrs-contact" />
          <p hidden>
            <label>Don't fill this out: <input name="bot-field" /></label>
          </p>
          <input type="text" name="name" />
          <input type="text" name="company" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <select name="service">
            <option value="corporate-security">Corporate Security</option>
            <option value="event-security">Event Security</option>
            <option value="construction-security">Construction Security</option>
            <option value="retail-security">Retail Security</option>
            <option value="close-protection">Close Protection</option>
            <option value="other">Other / General Inquiry</option>
          </select>
          <textarea name="message"></textarea>
        </form>
      </body>
    </html>
  );
}
