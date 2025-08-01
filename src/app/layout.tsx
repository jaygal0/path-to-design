import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Open_Sans } from "next/font/google";
import { Navbar } from "../components/global/Navbar";
import "./globals.css";
import Footer from "../components/global/Footer";
import { BreakpointIndicator } from "../components/global/BreakpointIndicator";
import ScrollToTop from "../components/global/ScrollToTop";
import { Breadcrumbs } from "@/components/global/Breadcrumbs";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Path to Design | A Directory of Designers, for Designers",
  description:
    "Explore how designers found their path into the tech industry and get inspired to find yours.",
  openGraph: {
    url: "https://www.pathtodesign.com",
    siteName: "Path to Design",
    images: [
      {
        url: "/path-to-design-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Path to Design",
      },
    ],
    locale: "en",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${openSans.variable} relative mx-auto max-w-screen-2xl bg-stone-950`}
      >
        <PlausibleProvider
          domain="pathtodesign.com"
          taggedEvents={true}
          trackOutboundLinks={true}
        >
          <ScrollToTop />
          <BreakpointIndicator />
          <Navbar />
          <main className="min-h-screen py-48 md:py-32">
            <div className="px-4 md:px-8">
              <Breadcrumbs />
              {children}
            </div>
          </main>
          <Footer />
        </PlausibleProvider>
      </body>
    </html>
  );
}
