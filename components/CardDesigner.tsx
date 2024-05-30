import Link from "next/link";
import { Suspense } from "react";

type CardDesignerProps = {
  index: any;
  id: string;
  firstName: string;
  lastName: string;
  datePosted: string;
  contact: {
    email?: string;
    twitter?: string;
    instagram?: string;
    dribble?: string;
  };
  info: {
    coverImage?: string;
    oneLiner?: string;
    position?: string;
    yearlySalary?: string;
    salaryCurrency?: string;
    company?: string;
    companySite?: string;
    personalSite?: string;
    getStarted?: string;
    stayInspired?: string;
    tools?: string[];
    books?: string[];
    advice?: string;
  };
};

export function CardDesigner({
  index,
  id,
  firstName,
  lastName,
  datePosted,
  contact,
  info,
}: CardDesignerProps) {
  return (
    <Suspense fallback={"Loading..."}>
      <Link href={`/${id}`}>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center justify-between bg-slate-700 p-2">
            <div>#</div>
            <div className="text-sm">{index + 1} </div>
          </div>
          <div className="flex flex-col py-2">
            <h2 className="text-3xl font-semibold">
              {firstName} {lastName}
            </h2>
            <div className="flex flex-col justify-between text-base">
              <p>{info.position}</p>
              <p>{datePosted}</p>
              <p>{info.yearlySalary ? info.yearlySalary : "Non disclosed"}</p>
            </div>
          </div>
        </div>
      </Link>
    </Suspense>
  );
}