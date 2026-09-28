import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/config/siteConfig";

const serif = Lora({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const DESCRIPTION =
  "Bridgepoint Contracting is a government contracting firm delivering HVAC, facility maintenance, and real estate solutions to federal, state, and local agencies. Compliance. Integrity. Execution.";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: "Bridgepoint Contracting | Mission Critical Solutions for Government Agencies",
    template: "%s | Bridgepoint Contracting",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Bridgepoint Contracting | Mission Critical Solutions",
    description: DESCRIPTION,
    url: COMPANY.url,
    siteName: COMPANY.legalName,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.legalName,
    url: COMPANY.url,
    email: COMPANY.email,
    telephone: COMPANY.officePhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.addressLine1,
      addressLocality: "Ocala",
      addressRegion: "FL",
      postalCode: "34473-2001",
      addressCountry: "US",
    },
  };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
