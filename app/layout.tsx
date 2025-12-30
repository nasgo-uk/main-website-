import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "NasGo | AI-Powered Home Services",
  description: "NasGo | AI-Powered Home Services. Connect with verified professionals, get AI-driven price suggestions, and manage your home services with ease. ناسغو | خدمات منزلية مدعومة بالذكاء الاصطناعي. تواصل مع محترفين موثوقين وقم بإدارة خدماتك بكل سهولة.",
  icons: {
    icon: "https://ik.imagekit.io/dkk0ianhs/nasgo%20logo.png?updatedAt=1767023074294",
  },
  openGraph: {
    title: "NasGo | AI-Powered Home Services",
    description: "Connect with verified professionals, get AI-driven price suggestions, and manage your home services with ease.",
    url: "https://nasgo.uk",
    siteName: "NasGo",
    images: [
      {
        url: "https://ik.imagekit.io/dkk0ianhs/NAS%20GO%20HUB/MAP.png",
        width: 1200,
        height: 630,
        alt: "NasGo Platform Preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NasGo | AI-Powered Home Services",
    description: "Connect with verified professionals, get AI-driven price suggestions, and manage your home services with ease.",
    images: ["https://ik.imagekit.io/dkk0ianhs/NAS%20GO%20HUB/MAP.png"],
  },
};

import { LazyMotion, domAnimation } from "framer-motion";

import { CookieConsentProvider } from "@/components/CookieConsent/CookieConsentContext";
import CookieBanner from "@/components/CookieConsent/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/dkk0ianhs/NAS%20GO%20HUB/MAP.png"
          type="image/png"
        />
        <link rel="preconnect" href="https://ik.imagekit.io" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <CookieConsentProvider>
          <LazyMotion features={domAnimation} strict>
            <Navbar />
            <main className="min-h-screen pt-24">
              {children}
            </main>
            <CookieBanner />
            <Footer />
          </LazyMotion>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
