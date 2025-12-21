import dayjs from "dayjs";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { menu } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1600px] p-4 pb-16">
      <Logo size="w-full mb-8" />
      <div className="mb-8 flex justify-between gap-3">
        <div className="text-sm text-muted-foreground">
          © {dayjs().year()} Path to Design. All Rights Reserved.
        </div>
        <ul className="flex w-min flex-col items-start gap-4 text-left text-sm md:flex-row md:gap-12 lg:items-center">
          {menu.map((item) => (
            <li key={item.href}>
              <Button asChild variant="ghost" className="h-auto p-0 text-sm">
                <Link href={item.href}>{item.title}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
