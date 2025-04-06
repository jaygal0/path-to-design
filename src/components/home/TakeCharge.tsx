"use client";

import { useEffect, useRef, useState } from "react";

export function TakeCharge() {
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
    <h3
      ref={ref}
      className={`col-span-full col-start-1 row-span-1 row-start-7 mb-10 mt-20 text-4xl font-bold leading-tight transition-all duration-700 md:col-span-5 md:col-start-2 xl:col-span-6 xl:col-start-2 xl:text-5xl xl:leading-tight ${hasAnimated ? "translate-y-0 opacity-100 blur-0" : "-translate-x-8 opacity-0 blur-sm"}`}
    >
      <span className="text-gradient">Take charge of your career</span> by
      understanding the paths designers took to be{" "}
      <span className="text-gradient">successful</span>.
    </h3>
  );
}
