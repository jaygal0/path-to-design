"use client";

import { useEffect, useRef, useState } from "react";

export function Understand() {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          obs.unobserve(entry.target);
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
      className="col-span-full col-start-1 row-span-1 row-start-2 my-20 transform text-5xl font-bold transition-opacity duration-700 ease-out md:col-span-6 md:col-start-2 md:text-6xl xl:col-start-4 xl:col-end-11 xl:text-7xl xl:leading-tight"
    >
      <div className="flex h-min gap-6">
        <div className="line-gradient min-h-full w-12 rounded-sm"></div>
        <h2
          className={`transition-all duration-700 ${hasAnimated ? "translate-x-0 opacity-100 blur-0" : "-translate-x-8 opacity-0 blur-sm"}`}
        >
          We understand that it can be hard to{" "}
          <span className="text-gradient">find work</span>,{" "}
          <span className="text-gradient">be creative</span>, or{" "}
          <span className="text-gradient">stay inspired</span> as a designer.
        </h2>
      </div>
    </div>
  );
}
