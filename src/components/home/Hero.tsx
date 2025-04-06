"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          obs.unobserve(entry.target); // Stop observing after animation
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  return (
    <div
      ref={ref}
      className={`text-gradient col-span-full col-start-1 row-span-1 row-start-1 mb-8 h-[100vh] max-h-[1080px] transform content-end pb-36 text-4xl font-bold leading-tight transition-opacity duration-700 ease-out md:col-span-6 md:col-start-2
       xl:col-span-7 xl:col-start-2 xl:text-5xl xl:leading-tight ${
         hasAnimated ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
       }`}
    >
      <div className="mb-2 flex items-center gap-4">
        <div className="flex -space-x-2">
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-50">
            <Image
              src="/profiles/joshua-galinato.jpg"
              fill
              alt="Profile image of Joshua Galinato"
              sizes="(max-width: 768px) 100vw, 50vw" // Sizes for different breakpoints
              priority
            />
          </div>
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-50">
            <Image
              src="/profiles/shannel-wheeler.jpg"
              fill
              alt="Profile image of designer"
              sizes="(max-width: 768px) 100vw, 50vw" // Sizes for different breakpoints
              priority
            />
          </div>
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-50">
            <Image
              src="/profiles/joacim-bohlander.jpg"
              fill
              alt="Profile image of designer"
              sizes="(max-width: 768px) 100vw, 50vw" // Sizes for different breakpoints
              priority
            />
          </div>
        </div>
        <div className="w-4/5 border-b-2"></div>
      </div>
      <h1>
        Helping designers navigate the industry by following the paths of
        successful designers.
      </h1>
    </div>
  );
}
