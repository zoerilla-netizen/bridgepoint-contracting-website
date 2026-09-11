import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "../config/site";

// Display face for headlines — bold, tight tracking, does the "personality" work.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

// Body face for everything else — quiet and highly readable.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Federal Business Development & Contracting`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Bridgepoint Contracting helps businesses enter, compete in, and grow within the federal marketplace — federal contracting strategy, proposal development, compliance, and AI integration for government contractors.",
  keywords: [
    "federal contracting consultant",
    "GovCon business development",
    "proposal development",
    "federal opportunity identification",
    "government contracting compliance",
    "AI for government contractors",
  ],
  openGraph: {
    title: `${SITE.name} | Unlocking Opportunities, Securing Success.`,
    description: SITE.coreMessage,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
