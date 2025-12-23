"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function QuickNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/designers", label: "Designers" },
    { href: "/best-design-apps", label: "Apps" },
    { href: "/best-design-books", label: "Books" },
    { href: "/best-design-tools", label: "Tools" },
  ];

  return (
    <div className="mb-12 flex flex-wrap justify-center gap-4 py-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link key={item.href} href={item.href} passHref>
            <Button
              asChild
              variant={isActive ? "default" : "outline"}
              size="lg"
              className={`p-6 text-xl ${isActive ? "font-bold" : "font-light"}`}
            >
              <span>{item.label}</span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
