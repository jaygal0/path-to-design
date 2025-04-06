"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../global/Button";

export function DiscoverApps() {
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
      className={`col-span-full col-start-1 row-span-1 row-start-6 mb-24 transition-all duration-700 md:col-span-5 md:col-start-3 xl:col-span-5 xl:col-start-5 ${hasAnimated ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-sm"}`}
    >
      <p className="mb-20 text-2xl">
        Discover the books that have shaped the careers of top designers—fuel
        your creativity and grow your skills with expert-recommended reads.
      </p>
      <Button label="Explore Books" url="/books" isSecondary />
    </div>
  );
}
