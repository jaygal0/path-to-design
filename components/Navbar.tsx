"use client";

import * as React from "react";
import Link from "next/link";
import { MobileSidebar } from "./MobileSidebar";

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  React.useEffect(() => {
    const closeMobileMenuOnClickOutside = (event: MouseEvent) => {
      if (showMobileMenu) {
        setShowMobileMenu(false);
      }
    };

    //    document.addEventListener("click", closeMobileMenuOnClickOutside);

    return () => {
      document.removeEventListener("click", closeMobileMenuOnClickOutside);
    };
  }, [showMobileMenu]);

  return (
    <div className="fixed left-0 top-0 z-40 flex w-screen justify-between border-b-2 bg-stone-950 p-4 ">
      <Link className="text-xl font-bold" href="/">
        Path To Design
      </Link>
      {showMobileMenu && <MobileSidebar state={toggleMobileMenu} />}
      {!showMobileMenu && (
        <svg
          onClick={toggleMobileMenu}
          className="md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 17h18M3 12h18M3 7h18"
          />
        </svg>
      )}
      <div className="hidden items-center gap-7 pr-4 font-sans md:flex">
        <Link href="/about">About</Link>
        {/* <Link href="/blog">Blog</Link> */}
        <Link
          href="/share"
          className="btn-gradient rounded-md p-1 px-4 text-stone-950"
        >
          Share Your Story
        </Link>
      </div>
    </div>
  );
}
