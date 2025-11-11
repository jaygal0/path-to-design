"use client";

import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardDesigner } from "@/components/global/CardDesigner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QuickNav } from "./QuickNav";
import { NewsletterSidebar } from "../global/NewsletterSidebar";
// import { ShareYourPathAd } from "@/components/global/ShareYourPathAd";

type Props = {
  designers: any[];
};

export default function BrowseDesigners({ designers }: Props) {
  // Designer filters
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<"date-desc" | "alpha-desc">(
    "date-desc",
  );

  // Unique filter sets
  const countries = [
    ...new Set(designers.map((d) => d.country).filter(Boolean)),
  ];
  const roles = [
    ...new Set(designers.map((d) => d.roles?.role).filter(Boolean)),
  ];
  const companies = [
    ...new Set(designers.map((d) => d.companies?.company).filter(Boolean)),
  ];

  const filteredDesigners = useMemo(() => {
    let results = designers.filter((designer) => {
      if (!designer.isPublished) return false;
      const matchCountry = selectedCountries.length
        ? selectedCountries.includes(designer.country)
        : true;
      const matchRole = selectedRoles.length
        ? selectedRoles.includes(designer.roles?.role)
        : true;
      const matchCompany = selectedCompanies.length
        ? selectedCompanies.includes(designer.companies?.company)
        : true;
      return matchCountry && matchRole && matchCompany;
    });

    if (sortOption === "alpha-desc") {
      results.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else {
      results.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }

    return results;
  }, [
    designers,
    selectedCountries,
    selectedRoles,
    selectedCompanies,
    sortOption,
  ]);

  const toggleChip = (
    value: string,
    state: string[],
    setter: (v: string[]) => void,
  ) => {
    setter(
      state.includes(value)
        ? state.filter((v) => v !== value)
        : [...state, value],
    );
  };

  return (
    <div className="mx-auto w-full space-y-6">
      <QuickNav />

      {/* Page Header with Sorting */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl font-bold">Designers</h1>
      </div>

      {/* Filters */}
      <Accordion type="multiple" className="mb-6 w-full">
        <AccordionItem value="countries">
          <AccordionTrigger>Countries</AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-2">
            {countries.sort().map((country) => (
              <Badge
                key={country}
                variant={
                  selectedCountries.includes(country) ? "default" : "outline"
                }
                className="cursor-pointer"
                onClick={() =>
                  toggleChip(country, selectedCountries, setSelectedCountries)
                }
              >
                {country}
              </Badge>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="roles">
          <AccordionTrigger>Roles</AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-2">
            {roles.sort().map((role) => (
              <Badge
                key={role}
                variant={selectedRoles.includes(role) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() =>
                  toggleChip(role, selectedRoles, setSelectedRoles)
                }
              >
                {role}
              </Badge>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="companies">
          <AccordionTrigger>Companies</AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-2">
            {companies.sort().map((company) => (
              <Badge
                key={company}
                variant={
                  selectedCompanies.includes(company) ? "default" : "outline"
                }
                className="cursor-pointer"
                onClick={() =>
                  toggleChip(company, selectedCompanies, setSelectedCompanies)
                }
              >
                {company}
              </Badge>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Sorting and Clear Filters Row */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Select
            value={sortOption}
            onValueChange={(val) => setSortOption(val as any)}
          >
            <SelectTrigger className="w-min">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-desc">Date posted</SelectItem>
              <SelectItem value="alpha-desc">Alphabetical</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="link"
          size="sm"
          className="px-0"
          onClick={() => {
            setSelectedCountries([]);
            setSelectedRoles([]);
            setSelectedCompanies([]);
          }}
        >
          Clear Filters
        </Button>
      </div>

      {/* Designers Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {filteredDesigners.flatMap((d, i) => {
          const items = [
            <CardDesigner
              key={d.id}
              {...d}
              role={d.roles.role || ""}
              company={d.companies.company || ""}
            />,
          ];

          if (i === 2) {
            items.push(<NewsletterSidebar key="newsletter" />);
          }

          return items;
        })}
      </div>
    </div>
  );
}
