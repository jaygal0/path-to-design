"use client";

import Link from "next/link";
import { Suspense } from "react";
import dayjs from "dayjs"; // Import dayjs at the top
import { Avatar } from "../global/Avatar";

export function Author({ createdAt, firstName, lastName, updatedAt }: any) {
  return (
    <Suspense fallback={"Loading..."}>
      <div className="relative flex">
        <div className="flex w-full flex-col gap-2 py-3">
          <div className="flex items-center gap-3">
            <Avatar firstName={firstName} lastName={lastName} size="sm" />
            <Link
              href={`/designers/${firstName.toLowerCase()}-${lastName.toLowerCase()}`}
            >
              <div className="text-lg font-semibold">
                {firstName} {lastName}
              </div>
            </Link>
          </div>
          <div className="flex justify-start font-sans font-light text-gray-500 md:w-1/3">
            {updatedAt === createdAt ? "Posted at " : "Updated at "}
            {dayjs(updatedAt).format("D MMM, YYYY")}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
