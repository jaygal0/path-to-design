"use client";

import { mainCTAs } from "@/config/navigation";
import Link from "next/link";
import * as React from "react";
import { Logo } from "./Logo";
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <nav className="sticky left-0 top-0 z-40 mx-auto flex max-w-[1600px] items-center justify-between p-3 font-sans ">
      <div className="bg-white/2 rounded-md px-2 py-2 backdrop-blur-md md:px-4">
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
