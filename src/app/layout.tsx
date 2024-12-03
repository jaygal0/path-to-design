import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Cabin, Cormorant } from "next/font/google";
import { Navbar } from "../../components/global/Navbar";
import "./globals.css";
import Footer from "../../components/global/Footer";
import { BreakpointIndicator } from "../../components/global/BreakpointIndicator";
import ScrollToTop from "../../components/global/ScrollToTop";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
});

export const metadata: Metadata = {
  title: "Path to Design",
  description:
    "Explore the paths designers take to begin, excel, and stay inspired.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="pathtodesign.com" />
      </head>
      <body
        className={`${cormorant.variable} ${cabin.variable} bg-stone-950 font-serif`}
      >
        <ScrollToTop />
        <BreakpointIndicator />
        <Navbar />
        <main className="grid min-h-screen place-items-center">
          <div className="grid max-w-screen-2xl grid-cols-4 grid-rows-[min-content_min-content_min-content_min-content_min-content_min-content] gap-4 px-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="-z-10 col-span-1 col-start-1 row-span-full row-start-1 bg-gray-500 opacity-3" />
            <div className="-z-10 col-span-1 col-start-2 row-span-full row-start-1 bg-gray-500 opacity-3" />
            <div className="-z-10 col-span-1 col-start-3 row-span-full row-start-1 bg-gray-500 opacity-3" />
            <div className="-z-10 col-span-1 col-start-4 row-span-full row-start-1 bg-gray-500 opacity-3" />
            <div className="col-span0 -z-10 col-start-5 row-span-full row-start-1 hidden bg-gray-500 opacity-3 md:block lg:block" />
            <div className="-z-10 col-span-1 col-start-6 row-span-full row-start-1 hidden bg-gray-500 opacity-3 md:block lg:block" />
            <div className="-z-10 col-span-1 col-start-7 row-span-full row-start-1 hidden bg-gray-500 opacity-3 md:block lg:block" />
            <div className="-z-10 col-span-1 col-start-8 row-span-full row-start-1 hidden bg-gray-500 opacity-3 md:block lg:block" />
            <div className="-z-10 col-span-1 col-start-9 row-span-full row-start-1 hidden bg-gray-500 opacity-3 md:hidden lg:block" />
            <div className="-z-10 col-span-1 col-start-10 row-span-full row-start-1 hidden bg-gray-500 opacity-3 md:hidden lg:block" />
            <div className="-z-10 col-span-1 col-start-11 row-span-full row-start-1 hidden bg-gray-500 opacity-3 md:hidden lg:block" />
            <div className="-z-10 col-span-1 col-start-12 row-span-full row-start-1 hidden bg-gray-500 opacity-3 md:hidden lg:block" />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
