import { Button } from "@/components/ui/button";
import { mainCTA, menu } from "@/config/navigation";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-20 mt-40 text-5xl font-bold">Uh oh!</h1>
      <div className="flex flex-col gap-4 font-sans text-xl font-thin leading-relaxed">
        <p>We can&apos;t seem to find the page you&apos;re looking for.</p>
      </div>
      <div className="mt-10 flex flex-col gap-4 md:flex-row">
        <Link href={mainCTA.href}>
          <Button className="w-full">{mainCTA.title}</Button>
        </Link>
        <Link href={menu[0].href}>
          <Button className="w-full" variant={"secondary"}>
            {menu[0].title}
          </Button>
        </Link>
      </div>
    </div>
  );
}
