"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className="col-start-3 col-end-10 row-span-full row-start-1 flex flex-col">
      <h1 className="mb-20 mt-40 text-5xl font-bold">
        There seems to be an error!
      </h1>
      <div className="flex flex-col gap-4 font-sans text-xl font-thin leading-relaxed">
        <p>
          We&apos;re not sure what&apos;s going on, but we&apos;ll try and get
          on it!
        </p>
      </div>
      <Link
        href="/"
        className="btn-gradient mt-12 w-max cursor-pointer rounded-sm px-10 py-2 font-sans text-stone-950 hover:bg-slate-300"
      >
        Go Home
      </Link>
    </div>
  );
}
