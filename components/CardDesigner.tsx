"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { CardDesignerGradient } from "./CardDesignerGradient";
import { DesignerProps } from "./type";
import Image from "next/image";

export function CardDesigner({
  company,
  createdAt,
  firstName,
  id,
  lastName,
  role,
  salary,
  slug,
  updatedAt,
  country,
}: DesignerProps) {
  const [coverImage, setCoverImage] = useState<boolean>(false);
  const dayjs = require("dayjs");

  return (
    <Suspense fallback={"Loading..."}>
      <Link
        href={`/${slug}`}
        className="transition ease-in-out hover:translate-x-4"
      >
        <article
          className="relative flex"
          onMouseEnter={() => {
            setCoverImage(true);
          }}
          onMouseLeave={() => {
            setCoverImage(false);
          }}
        >
          <div
            className={`cover-image absolute -z-10 overflow-hidden rounded-lg ${!coverImage && "opacity-0"} ${coverImage && "opacity-60"} transition-opacity`}
          >
            <Image
              width={300}
              height={168.75}
              src={`/cover-image-${firstName}-${lastName}.jpg`}
              alt={`An image of ${firstName} ${lastName}'s portfolio`}
              objectFit="cover"
            />
          </div>
          <CardDesignerGradient
            firstName={firstName}
            lastName={lastName}
            country={country}
            state={coverImage}
          />
          <div className="flex w-full flex-col gap-3 py-2">
            <h2 className="text-4xl font-semibold lg:text-6xl">
              {firstName} {lastName}
            </h2>
            <div className="flex flex-col justify-between gap-2 font-sans font-light text-stone-400 lg:flex-row">
              <p className="md:w-2/3">
                {role == "Self-employed" ? role : `${role} at ${company}`}
              </p>
              <p className="flex md:w-1/3">
                {salary
                  ? `Salary: $${salary.toLocaleString("en-US")}+`
                  : "Salary: Non-disclosed"}
              </p>
              <p className="flex justify-start md:w-1/3">
                {updatedAt == createdAt ? "Posted at " : "Updated at "}
                {dayjs(updatedAt).format("D MMM, YYYY")}
              </p>
            </div>
          </div>
        </article>
      </Link>
    </Suspense>
  );
}
