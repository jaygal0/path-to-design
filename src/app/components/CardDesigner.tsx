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
            <div >
                <Link href={`/stories/${id}`}>
                    <div>{firstName} {lastName}</div>
                    <div>{firstName} {lastName}</div>
                    <div>{info.position}</div>
                    <div>{datePosted}</div>
                    <div>{info.yearlySalary ? info.yearlySalary : "Non disclosed"}</div>
                </Link>
            </div>
        </Suspense>
    )
}