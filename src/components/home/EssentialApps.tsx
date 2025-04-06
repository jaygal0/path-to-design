"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "../global/Button";

export function EssentialApps() {
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
    <>
      <div className="col-span-full col-start-1 row-span-1 row-start-4 my-20 hidden md:col-span-6 md:col-start-2 xl:col-start-8 xl:col-end-12 xl:block xl:translate-y-[-300px] xl:leading-tight">
        <Image
          src="/home-page/apps.png"
          alt="An image of apps designers use"
          width={461}
          height={477}
        />
      </div>
      <div
        ref={ref}
        className={`col-span-full col-start-1 row-span-1 row-start-4 my-20 transition-all duration-700 md:col-span-6 md:col-start-2 xl:col-start-2 xl:col-end-8 xl:leading-tight ${hasAnimated ? "translate-x-0 opacity-100 blur-0" : "-translate-x-8 opacity-0 blur-sm"}`}
      >
        <Image
          src="/home-page/apps.png"
          alt="An image of apps designers use"
          width={461}
          height={477}
          className="mb-24 pl-2 xl:hidden"
        />
        <h3 className="mb-4 text-5xl font-bold md:text-6xl xl:text-7xl">
          <span className="text-gradient">Essential apps</span> for designers
        </h3>
        <p className="mb-20 text-2xl">
          Discover the industry’s go-to design tools—explore the apps that power
          creativity and efficiency
        </p>
        <Button label="Explore Apps" url="/apps" isSecondary />
      </div>
    </>
  );
}
