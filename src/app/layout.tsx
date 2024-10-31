import type { Metadata } from "next";
import { Cormorant, Cabin } from "next/font/google";
import "./globals.css";
import { Navbar } from "../../components/Navbar";
import { AdditionalLinks } from "../../components/AdditionalLinks";
import { NewsletterForm } from "../../components/NewsletterForm";
import PlausibleProvider from "next-plausible";

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
        <Navbar />
        <main className="grid min-h-screen place-items-center">
          <div className="grid max-w-screen-2xl grid-cols-12 gap-4 px-4">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
