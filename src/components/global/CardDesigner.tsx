"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { CardDesignerGradient } from "./CardDesignerGradient";
import { DesignerProps } from "@/types";
import Image from "next/legacy/image";
import dayjs from "dayjs";

export function CardDesigner({
  company,
  createdAt,
  firstName,
  id,
  lastName,
  role,
  slug,
  updatedAt,
  country,
  coverImage,
  profileImage,
}: DesignerProps) {
  const [coverImageHover, setCoverImageHover] = useState<boolean>(false);

  return (
    <Suspense fallback={"Loading..."}>
      <Link
        href={`/designers/${slug}`}
        className="transition ease-in-out hover:translate-x-4"
      >
        <article
          className="relative flex"
          onMouseEnter={() => {
            setCoverImageHover(true);
          }}
          onMouseLeave={() => {
            setCoverImageHover(false);
          }}
        >
          <div
            className={`cover-image absolute -z-10 hidden overflow-hidden rounded-lg md:block ${
              !coverImageHover && "opacity-0"
            } ${coverImageHover && "opacity-20"} transition-opacity`}
          >
            <div className="aspect-video w-80 object-cover">
              <Image
                src={coverImage! || "/path-to-design-og-image.jpg"}
                alt={`An image of ${firstName} ${lastName}'s portfolio`}
                layout="fill"
              />
            </div>
          </div>
          <CardDesignerGradient
            firstName={firstName}
            lastName={lastName}
            country={country}
            state={coverImageHover}
            profileImage={profileImage}
          />
          <div className="flex w-full flex-col gap-3 py-2">
            <h2 className="text-4xl font-semibold lg:text-6xl">
              {firstName} {lastName}
            </h2>
            <div className="flex flex-col justify-between gap-2 font-sans font-light text-stone-400 sm:flex-row md:flex-col xl:flex-row">
              <p className="md:w-2/3">
                {company === "Self-Employed"
                  ? `${role} ${company}`
                  : `${role} at ${company}`}
              </p>
              <p>
                {updatedAt === createdAt ? "Posted at " : "Updated at "}
                {dayjs(updatedAt).format("D MMM, YYYY")}
              </p>
            </div>
          </div>
        </article>
      </Link>
    </Suspense>
  );
}
