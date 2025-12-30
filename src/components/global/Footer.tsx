import dayjs from "dayjs";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { menu } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1600px] p-4 pb-16">
      <Logo size="w-full mb-8" />
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="order-2 mt-6 text-sm text-muted-foreground md:order-1 md:mt-0">
          © {dayjs().year()} Path to Design. All Rights Reserved.
        </div>
        <ul className="order-1 flex w-min flex-col items-start gap-4 text-left text-sm md:order-2 md:flex-row md:gap-12 lg:items-center">
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
