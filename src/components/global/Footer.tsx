import dayjs from "dayjs";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { menu } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="w-full p-4 font-sans shadow md:flex md:items-center md:justify-between md:p-6">
      <div className="flex flex-col gap-3">
        <Logo size="w-40" />
        <div className="text-sm text-muted-foreground">
          © {dayjs().year()} Path to Design. All Rights Reserved.
        </div>
      </div>

      <ul className="mt-3 flex flex-wrap items-center gap-12 text-sm font-medium sm:mt-0">
        {menu.map((item) => (
          <li key={item.href}>
            <Button asChild variant="link" className="h-auto p-0 text-sm">
              <Link href={item.href}>{item.title}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </footer>
  );
}
