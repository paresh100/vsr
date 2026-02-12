import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Using Geist for modern corporate look
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vision Security Recruitment Services Ltd | Premium Security London",
  description: "Established 2016. High-end corporate security, close protection, and event security services in London. Professional, reliable, and discreet.",
  openGraph: {
    title: "Vision Security Recruitment Services Ltd",
    description: "Premium security solutions for corporate and event sectors in London.",
    url: "https://vsrs.co.uk",
    siteName: "VSRS",
    images: [
      {
        url: "/images/hero image man image.png", // Fallback image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
