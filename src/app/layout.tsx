import type { Metadata } from "next";
import { Cormorant, Cabin } from "next/font/google";
import "./globals.css";
import { Navbar } from "../../components/Navbar";
import { AdditionalLinks } from "../../components/AdditionalLinks";
import { NewsletterForm } from "../../components/NewsletterForm";

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
      <body
        className={`${cormorant.variable} ${cabin.variable} bg-stone-950 font-serif`}
      >
        <Navbar />
        <main className="px-4 pb-20 md:px-2">
          <div className="mx-auto max-w-screen-md">{children}</div>
          <NewsletterForm />
          <AdditionalLinks />
        </main>
      </body>
    </html>
  );
}
