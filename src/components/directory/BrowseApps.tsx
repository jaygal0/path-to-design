"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QuickNav } from "./QuickNav";
import AppItem from "../global/AppItem";
import { Newsletter } from "../global/Newsletter";

type Props = {
  apps: any[];
};

export default function BrowseApps({ apps }: Props) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<
    "popularity-desc" | "alpha-desc"
  >("popularity-desc");

  // Unique category filter set
  const appCategories = [
    ...new Set(
      apps.flatMap((a) => a.categories?.map((c: any) => c.name) ?? []),
    ),
  ];

  const filteredApps = useMemo(() => {
    const results = apps.filter((app) => {
      const hasDesigners = app.designers?.length > 0;
      const matchCategory = selectedCategories.length
        ? app.categories?.some((c: any) => selectedCategories.includes(c.name))
        : true;
      return hasDesigners && matchCategory;
    });

    // Sort results
    if (sortOption === "alpha-desc") {
      results.sort((a, b) => a.app.localeCompare(b.app));
    } else {
      results.sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
    }

    return results;
  }, [apps, selectedCategories, sortOption]);

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

      <div className="space-y-3 pb-12">
        <h1 className="text-center text-4xl font-bold">Apps</h1>
        <p className="text-center text-xl text-muted-foreground">
          Find the best design apps that experienced designers use throughout
          their design process.
        </p>
      </div>

      {/* Category Filters */}
      <div className="mx-auto mb-6 flex w-3/4 flex-wrap justify-center gap-2">
        {appCategories.sort().map((category) => (
          <Badge
            key={category}
            variant={
              selectedCategories.includes(category) ? "default" : "outline"
            }
            className="cursor-pointer rounded-2xl px-4 text-lg font-light hover:bg-muted"
            onClick={() =>
              toggleChip(category, selectedCategories, setSelectedCategories)
            }
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Sorting and Clear Filters Row */}
      <div className="mb-6 flex flex-wrap items-center justify-end gap-4">
        <Select
          value={sortOption}
          onValueChange={(val) => setSortOption(val as any)}
        >
          <SelectTrigger className="w-min">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popularity-desc">Popularity</SelectItem>
            <SelectItem value="alpha-desc">Alphabetical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {filteredApps.flatMap((app, index) => {
          return <AppItem tool={app} key={index} />;
        })}
      </div>
    </div>
  );
}
