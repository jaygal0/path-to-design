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

export function CardDesigner({ index, id, firstName, lastName, datePosted, contact, info }: CardDesignerProps) {
    return (
        <Suspense fallback={"Loading..."}>
            <Link href={`/stories/${id}`}>
                <div className="flex w-full mb-5">
                    <div className="flex flex-col justify-between items-center w-8 bg-slate-700 mr-5 p-1">
                        <div>#</div>
                        <div className="text-sm">{index + 1} </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="text-7xl">{firstName} {lastName}</div>
                        <div className="flex justify-between text-lg">
                            <div>{info.position}</div>
                            <div>{datePosted}</div>
                            <div>{info.yearlySalary ? info.yearlySalary : "Non disclosed"}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </Suspense>
    )
}