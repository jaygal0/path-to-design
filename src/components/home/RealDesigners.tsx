"use client";

import { CardDesigner } from "../global/CardDesigner";
import { Badge } from "../ui/badge";
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
        <h2 className="mb-2 text-3xl font-semibold text-foreground md:text-5xl">
          Learn from real designers
        </h2>
        <p className="text-lg font-light text-muted-foreground md:text-xl">
          Insights from {designers.length} designers and counting...
        </p>
      </div>
      <div className="mx-auto flex flex-wrap justify-center gap-3 md:w-1/2">
        {lessons.map((lesson, index) => {
          return (
            <Badge key={index} variant="secondary">
              {lesson}
            </Badge>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
