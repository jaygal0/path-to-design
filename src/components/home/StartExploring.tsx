"use client";

import { useEffect, useRef, useState } from "react";
import { CardDesigner } from "../global/CardDesigner";
import { Button } from "../global/Button";

export function StartExploring({ designers }: any) {
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

  const filterNames = ["Joshua", "Shannel", "Amalie", "Florian", "Kavé"]; // Select which designers to present on the first page

  return (
    <div
      ref={ref}
      className={`col-span-full col-start-1 row-span-1 row-start-8 mb-40 flex flex-col gap-8 transition-all duration-700 md:col-span-4 md:col-start-3 xl:col-start-3 xl:col-end-10 ${hasAnimated ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-sm"}`}
    >
      <p className="mb-20 text-2xl">
        Start exploring the inspiring journeys of successful designers and
        uncover the strategies they used to thrive in the competitive design
        industry.
      </p>
      {designers
        .filter((designer: any) => filterNames.includes(designer.firstName))
        .slice(0, 5)
        .map((designer: any, index: any) => {
          const {
            companies,
            country,
            createdAt,
            firstName,
            id,
            isPublished,
            lastName,
            roles,
            slug,
            updatedAt,
            coverImage,
            profileImage,
          } = designer;

          return (
            <div key={id}>
              {isPublished && (
                <CardDesigner
                  company={companies.company}
                  country={country}
                  profileImage={profileImage}
                  coverImage={coverImage}
                  createdAt={createdAt}
                  firstName={firstName}
                  id={id}
                  lastName={lastName}
                  role={roles?.role}
                  slug={slug}
                  updatedAt={updatedAt}
                />
              )}
            </div>
          );
        })}
      <div className="flex w-full py-4 lg:justify-center">
        <Button label="View more" url="/designers" isSecondary />
      </div>
    </div>
  );
}
