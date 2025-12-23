"use client";

import { useState, useMemo } from "react";
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
import { Newsletter } from "../global/Newsletter";

type Props = {
  designers: any[];
};

export default function BrowseDesigners({ designers }: Props) {
  // Designer filters
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<"date-desc" | "alpha-desc">(
    "date-desc",
  );

  // Unique filter sets
  const roles = [
    ...new Set(designers.map((d) => d.roles?.role).filter(Boolean)),
  ];

  const filteredDesigners = useMemo(() => {
    let results = designers.filter((designer) => {
      if (!designer.isPublished) return false;
      const matchRole = selectedRoles.length
        ? selectedRoles.includes(designer.roles?.role)
        : true;
      return matchRole;
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
  }, [designers, selectedRoles, sortOption]);

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
      <h1 className="mb-6 text-center text-4xl font-bold">Designers</h1>

      {/* Role Filters */}
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        {roles.sort().map((role) => (
          <Badge
            key={role}
            variant={selectedRoles.includes(role) ? "default" : "outline"}
            className="cursor-pointer rounded-2xl px-4 text-lg font-light hover:bg-muted"
            onClick={() => toggleChip(role, selectedRoles, setSelectedRoles)}
          >
            {role}
          </Badge>
        ))}
      </div>

      {/* Sorting and Clear Filters Row */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Button
          variant="link"
          size="sm"
          className="px-0"
          onClick={() => {
            setSelectedRoles([]);
          }}
        >
          Clear Filters
        </Button>
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

      {/* Designers Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {filteredDesigners.flatMap((d, i) => {
          return (
            <CardDesigner
              key={d.id}
              {...d}
              role={d.roles?.role || ""}
              company={d.companies?.company || ""}
            />
          );
        })}
      </div>
    </div>
  );
}
