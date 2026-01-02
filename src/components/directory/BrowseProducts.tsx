"use client";

import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QuickNav } from "./QuickNav";
import ProductItem from "../global/ProductItem";

type Props = {
  products: any[];
};

export default function BrowseProducts({ products }: Props) {
  const [sortOption, setSortOption] = useState<
    "popularity-desc" | "alpha-desc"
  >("popularity-desc");

  const filteredProducts = useMemo(() => {
    const results = [...products];

    if (sortOption === "alpha-desc") {
      results.sort((a, b) => (a.name ?? "").localeCompare(b.name ?? ""));
    } else {
      results.sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
    }

    return results;
  }, [products, sortOption]);

  return (
    <div className="mx-auto w-full space-y-6">
      <QuickNav />

      <div className="space-y-3 pb-12">
        <h1 className="text-center text-4xl font-bold">Tools</h1>
        <p className="text-center text-xl text-muted-foreground">
          Find the best design tools that experienced designers use to help them
          design.
        </p>
      </div>

      {/* Sorting and Clear Filters Row */}
      <div className="flex flex-wrap items-center justify-end gap-4">
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {filteredProducts.map((product, index) => (
          <ProductItem item={product} key={index} />
        ))}
      </div>
    </div>
  );
}
