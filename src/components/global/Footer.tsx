import dayjs from "dayjs";
import { Linkedin } from "lucide-react";
import { SiBluesky, SiThreads, SiX } from "@icons-pack/react-simple-icons";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { menu } from "@/config/navigation";

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/pathtodesign",
    Icon: SiX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/path-to-design",
    Icon: Linkedin,
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@path.to.design1",
    Icon: SiThreads,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/pathtodesign.bsky.social",
    Icon: SiBluesky,
  },
] as const;

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1600px] p-4 pb-16">
      <Logo size="w-full mb-8" />
      <div className="mb-8 flex flex-col gap-8">
        <div className="flex flex-wrap gap-3">
          {socialLinks.map(({ name, href, Icon }) => (
            <Button
              key={href}
              asChild
              variant="outline"
              className="h-10 w-10 rounded-full p-0"
            >
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="flex items-center justify-center"
              >
                <Icon className="h-4 w-4" />
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="order-2 mt-6 text-sm text-muted-foreground md:order-1 md:mt-0">
            © {dayjs().year()} Path to Design. All Rights Reserved.
          </div>
          <ul className="order-1 flex w-min flex-col items-start gap-4 text-left text-sm md:order-2 md:flex-row md:gap-12 lg:items-center">
            {menu
              .filter((item) => item.href !== "/about")
              .map((item) => (
                <li key={item.href}>
                  <Button
                    asChild
                    variant="ghost"
                    className="h-auto p-0 text-sm"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </Button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
