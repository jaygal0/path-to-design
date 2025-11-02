import { Button } from "@/components/ui/button";
import { mainCTAs } from "@/config/navigation";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-20 mt-40 text-5xl font-bold">
        You've subscribed to the newsletter!
      </h1>
      <div className="flex flex-col gap-4 font-sans text-xl font-thin leading-relaxed">
        <p>Thank you for subscribing!</p>
      </div>
      <div className="mt-10 flex flex-col gap-4 md:flex-row">
        <Link href={mainCTAs[1].href}>
          <Button className="w-full">{mainCTAs[1].title}</Button>
        </Link>
        <Link href={mainCTAs[2].href}>
          <Button className="w-full" variant={"secondary"}>
            {mainCTAs[2].title}
          </Button>
        </Link>
      </div>
    </div>
  );
}
