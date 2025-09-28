"use client";
import { Button } from "@/components/ui/button";
import { mainCTA, menu } from "@/config/navigation";
import Link from "next/link";

export default function Error() {
  return (
    <div className="col-start-3 col-end-10 row-span-full row-start-1 flex flex-col">
      <h1 className="mb-20 mt-40 text-5xl font-bold">
        There seems to be an error!
      </h1>
      <div className="flex flex-col gap-4 font-sans text-xl font-thin leading-relaxed">
        <p>
          We&apos;re not sure what&apos;s going on, but we&apos;ll try and get
          on it!
        </p>
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
