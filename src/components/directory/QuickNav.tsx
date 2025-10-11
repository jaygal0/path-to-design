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
  ];

  return (
    <div className="flex flex-wrap gap-4 rounded-md py-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link key={item.href} href={item.href} passHref>
            <Button
              asChild
              variant={isActive ? "default" : "outline"}
              size="sm"
            >
              <span>{item.label}</span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
