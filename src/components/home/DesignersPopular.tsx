"use client";

import { CardDesigner } from "../global/CardDesigner";

interface Props {
  designers: any;
}

export function RealDesigners({ designers }: Props) {
  const filterNames = [
    "Galinato",
    "Strasche",
    "Kumar",
    "Paduraru",
    "Oz",
    "Fox",
  ];

  const lessons = [
    "Getting started in design",
    "Day-to-day responsibilities",
    "Common career challenges",
    "Lessons learned the hard way",
    "Advice for new designers",
  ];

  return (
    <div className="space-y-8">
      <div className="spacy-y-3 text-center">
        <h2 className="mb-2 text-5xl font-semibold text-foreground">
          Learn from real designers
        </h2>
        <p className="text-xl font-light text-muted-foreground">
          Insights from {designers.length} designers and counting.
        </p>
      </div>
      <div className="mx-auto flex w-1/2 flex-wrap justify-center gap-3">
        {lessons.map((lesson, index) => {
          return (
            <div
              key={index}
              className="w-fit rounded-sm border px-4 py-2 text-sm font-light"
            >
              {lesson}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filterNames.map((name, index) => {
          const designer = designers.find((d: any) => d.lastName === name);
          if (!designer) return null;

          const {
            companies,
            country,
            coverImage,
            firstName,
            lastName,
            oneLiner,
            profileImage,
            roles,
            slug,
          } = designer;

          return (
            <CardDesigner
              key={index}
              company={companies.company}
              country={country}
              coverImage={coverImage}
              firstName={firstName}
              lastName={lastName}
              oneLiner={oneLiner}
              profileImage={profileImage}
              role={roles?.role}
              slug={slug}
            />
          );
        })}
      </div>
    </div>
  );
}
