"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  heading: string;
  image: string;
  href: string;
}

export function RecommendationCard({ heading, image, href }: Props) {
  return (
    <Link href={href}>
      <div className="flex min-h-64 flex-col items-center justify-center gap-3 rounded-2xl border p-6 transition-all hover:cursor-pointer hover:border-white">
        <Image
          src={image}
          alt={heading}
          width={240}
          height={100}
          quality={70}
          unoptimized
          className="mx-auto"
        />
        <h3 className="text-center text-2xl font-semibold">{heading}</h3>
      </div>
    </Link>
  );
}
