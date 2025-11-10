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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QuickNav } from "./QuickNav";
import AppItem from "../global/AppItem";
import { NewsletterSidebar } from "../global/NewsletterSidebar";

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

      {/* Page Header with Sorting */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl font-bold">Apps</h1>
      </div>

      {/* Category Filters */}
      <Accordion type="multiple" className="mb-6 w-full">
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-2">
            {appCategories.sort().map((category) => (
              <Badge
                key={category}
                variant={
                  selectedCategories.includes(category) ? "default" : "outline"
                }
                className="cursor-pointer"
                onClick={() =>
                  toggleChip(
                    category,
                    selectedCategories,
                    setSelectedCategories,
                  )
                }
              >
                {category}
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
              <SelectItem value="popularity-desc">Popularity</SelectItem>
              <SelectItem value="alpha-desc">Alphabetical</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="link"
          size="sm"
          className="px-0"
          onClick={() => setSelectedCategories([])}
        >
          Clear Filters
        </Button>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {filteredApps.flatMap((app, index) => {
          const items = [<AppItem tool={app} key={index} />];
          if (index === 2) {
            items.push(<NewsletterSidebar key="newsletter" />);
          }
          return items;
        })}
      </div>
    </div>
  );
}
