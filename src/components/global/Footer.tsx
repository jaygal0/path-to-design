import dayjs from "dayjs";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { menu } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1600px] p-4 pb-16 md:flex md:items-start md:justify-between md:p-6">
      <div className="mb-8 flex flex-col gap-3">
        <Logo size="w-40" />
        <div className="text-sm text-muted-foreground">
          © {dayjs().year()} Path to Design. All Rights Reserved.
        </div>
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
    </footer>
  );
}
