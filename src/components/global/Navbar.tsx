"use client";

import { mainCTAs } from "@/config/navigation";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <nav className="sticky left-0 top-0 z-40 mx-auto flex max-w-[1600px] items-center justify-between bg-stone-950/80 px-3 py-1 font-sans backdrop-blur-lg ">
      <div className="px-2 py-2 md:px-4">
        <Link
          className="text-gradient flex items-center gap-2 text-xl font-bold"
          href={mainCTAs[0].href}
        >
          <Logo size="32" />
        </Link>
      </div>

      <Link href={mainCTAs[1].href}>
        <Button>{mainCTAs[1].title}</Button>
      </Link>
    </nav>
  );
}
