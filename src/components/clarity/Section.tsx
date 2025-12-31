import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface Props {
  heading: string;
  summary: string;
  children: React.ReactNode;
}

export default function Section({ heading, summary, children }: Props) {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="col-span-1 col-start-1 flex flex-col gap-4 text-xl leading-relaxed">
          <div className="sticky top-20 space-y-12">
            <h2 className="text-5xl font-semibold">{heading}</h2>
          </div>
        </div>
        <div className="col-span-1 col-start-2">
          <div className="space-y-20">{children}</div>
        </div>
      </div>
      <div className="px-20 py-56 text-center text-5xl font-thin leading-tight">
        {summary}
      </div>
    </>
  );
}
