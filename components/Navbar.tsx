"use client";

import * as React from "react";
import Link from "next/link";

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

    document.addEventListener("click", closeMobileMenuOnClickOutside);

    return () => {
      document.removeEventListener("click", closeMobileMenuOnClickOutside);
    };
  }, [showMobileMenu]);

  return (
    <div className="fixed left-0 top-0 z-50 flex w-screen justify-between px-8 py-8">
      <Link href="/">Designer Stories</Link>
      <div className="flex gap-7">
        <Link href="/about">About</Link>
        <Link href="blog">Blog</Link>
      </div>
    </div>
  );
}
