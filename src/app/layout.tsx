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
  metadataBase: new URL("https://pathtodesign.com"),
  title: "Path to Design | Real UI/UX, Product & Graphic Designer Stories",
  description:
    "Explore real design careers from UI/UX, product, and graphic designers, plus many other design roles. Learn how designers get started, what tools they use, and how their roles evolve without the guesswork.",
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
        className={`${openSans.variable} relative mx-auto w-full bg-stone-950`}
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
            <div className="mx-auto max-w-[1600px] px-4 md:px-8">
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
