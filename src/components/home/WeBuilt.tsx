"use client";

import { useEffect, useRef, useState } from "react";

export function WeBuilt() {
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
    <p
      ref={ref}
      className={`col-span-full col-start-1 row-span-1 row-start-3 mb-8 mt-10 text-2xl transition-all duration-700 md:col-span-5 md:col-start-3 xl:col-start-6 xl:col-end-11 xl:mb-96 ${hasAnimated ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-sm "}`}
    >
      That&apos;s why we built this site – to give you insight into what
      successful designers are doing to thrive in the industry, so you no longer
      have to worry about where to find this information.
    </p>
  );
}
