"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Don't render on homepage
  if (segments.length === 0) return null;

  const breadcrumbs = [
    { name: "Home", href: "/" },
    ...segments.map((segment, idx) => {
      const href = "/" + segments.slice(0, idx + 1).join("/");
      return {
        name: decodeURIComponent(
          segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        ),
        href,
      };
    }),
  ];

  return (
    <nav
      className="mb-20 flex items-center text-sm text-muted-foreground"
      aria-label="Breadcrumb"
    >
      {breadcrumbs.map((crumb, i) => (
        <div key={crumb.href} className="flex items-center">
          {i > 0 && (
            <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground" />
          )}
          <Link
            href={crumb.href}
            className={cn(
              "transition-colors hover:underline",
              i === breadcrumbs.length - 1 && "font-medium text-primary",
            )}
          >
            {crumb.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}
