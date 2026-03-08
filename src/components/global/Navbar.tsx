"use client";

import { mainCTAs, menu } from "@/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const isShareYourPathPage = pathname.startsWith("/share-your-path");
  const primaryCta = isShareYourPathPage
    ? { title: "Share Your Path", href: "/share-your-path/form" }
    : mainCTAs[2];

  return (
    <nav className="sticky left-0 top-0 z-40 mx-auto flex max-w-[1600px] items-center justify-between bg-stone-950/80 px-3 py-1 font-sans backdrop-blur-lg">
      <div className="px-2 py-2 md:px-4">
        <Link
          className="text-gradient flex items-center gap-2 text-xl font-bold"
          href={mainCTAs[0].href}
        >
          <Logo size="32" />
        </Link>
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <Link href={menu[1].href}>
          <Button variant="ghost">{menu[1].title}</Button>
        </Link>

        <Link href={mainCTAs[1].href}>
          <Button variant="ghost">{mainCTAs[1].title}</Button>
        </Link>

        <Link href={primaryCta.href}>
          <Button>{primaryCta.title}</Button>
        </Link>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[280px] border-stone-800 bg-stone-950"
        >
          <SheetHeader className="text-left">
            <SheetTitle className="sr-only">Main navigation</SheetTitle>
            <SheetClose asChild>
              <Link href={mainCTAs[0].href} className="inline-flex">
                <Logo size="h-8 w-auto" />
              </Link>
            </SheetClose>
          </SheetHeader>

          <div className="mt-8 flex flex-col gap-2">
            <SheetClose asChild>
              <Link
                href={menu[1].href}
                className="rounded-md px-3 py-2 text-sm font-medium text-stone-200 transition-colors hover:bg-stone-800 hover:text-white"
              >
                {menu[1].title}
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href={mainCTAs[1].href}
                className="rounded-md px-3 py-2 text-sm font-medium text-stone-200 transition-colors hover:bg-stone-800 hover:text-white"
              >
                {mainCTAs[1].title}
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Button asChild className="mt-2 w-full">
                <Link href={primaryCta.href}>{primaryCta.title}</Link>
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
