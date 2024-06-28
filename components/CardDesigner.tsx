import Link from "next/link";
import { Suspense } from "react";

type CardDesignerProps = {
  index: any;
  firstName: string;
  lastName: string;
  role: string;
  company: string;
  updatedAt: Date;
};

export function CardDesigner({
  index,
  firstName,
  lastName,
  role,
  company,
  updatedAt,
}: CardDesignerProps) {
  return (
    <Suspense fallback={"Loading..."}>
      <Link href={`/${firstName}-${lastName}`}>
        <div className="flex">
          <div className="rectangle-gradient mr-4 flex flex-col items-center justify-between rounded-sm p-2 font-sans text-stone-950">
            <div>#</div>
            <div className="text-sm">{index + 1} </div>
          </div>
          <div className="flex w-full flex-col gap-3 py-2">
            <h2 className="text-2xl font-semibold lg:text-6xl">
              {firstName} {lastName}
            </h2>
            <div className="flex flex-col justify-between font-sans font-light lg:flex-row">
              <p>{role}</p>
              <p>{updatedAt.toString()}</p>
            </div>
          </div>
        </div>
      </Link>
    </Suspense>
  );
}
