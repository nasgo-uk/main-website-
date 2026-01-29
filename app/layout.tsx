import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, defaultMeta } from "@/lib/seo.config";
import { OrganizationSchema } from "@/components/seo/schemas/OrganizationSchema";
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

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: defaultMeta.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultMeta.description,
  keywords: defaultMeta.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: defaultMeta.title,
    description: defaultMeta.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [siteConfig.ogImage],
    creator: "@nasgouk",
  },
  icons: {
    icon: "https://ik.imagekit.io/dkk0ianhs/nasgo%20logo.png?updatedAt=1767023074294",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    <html lang="en" suppressHydrationWarning>
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
          <OrganizationSchema />
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
    </html >
  );
}
