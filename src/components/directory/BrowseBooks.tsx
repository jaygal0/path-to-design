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
import BookItem from "../global/BookItem";

type Props = {
  books: any[];
};

export default function BrowseBooks({ books }: Props) {
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<
    "popularity-desc" | "alpha-desc"
  >("popularity-desc");

  // Unique filter sets
  const authors = [
    ...new Set(books.map((b) => b.author).filter(Boolean)),
  ].sort();
  const categories = [
    ...new Set(books.map((b) => b.category).filter(Boolean)),
  ].sort();

  const filteredBooks = useMemo(() => {
    // Filter by selected authors/categories
    const results = books.filter((book) => {
      const matchAuthor = selectedAuthors.length
        ? selectedAuthors.includes(book.author)
        : true;
      const matchCategory = selectedCategories.length
        ? selectedCategories.includes(book.category)
        : true;
      return matchAuthor && matchCategory;
    });

    // Sort results
    if (sortOption === "alpha-desc") {
      results.sort((a, b) => a.book.localeCompare(b.book));
    } else {
      // popularity-desc
      results.sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
    }

    return results;
  }, [books, selectedAuthors, selectedCategories, sortOption]);

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
        <h1 className="text-4xl font-bold">Books</h1>
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

      {/* Filters */}
      <Accordion type="multiple" className="mb-6 w-full">
        <AccordionItem value="authors">
          <AccordionTrigger>Authors</AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-2">
            {authors.map((author) => (
              <Badge
                key={author}
                variant={
                  selectedAuthors.includes(author) ? "default" : "outline"
                }
                className="cursor-pointer"
                onClick={() =>
                  toggleChip(author, selectedAuthors, setSelectedAuthors)
                }
              >
                {author}
              </Badge>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-2">
            {categories.map((category) => (
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

      {/* Clear Filters */}
      {(selectedAuthors.length > 0 || selectedCategories.length > 0) && (
        <Button
          variant="link"
          size="sm"
          className="mb-6 px-0"
          onClick={() => {
            setSelectedAuthors([]);
            setSelectedCategories([]);
          }}
        >
          Clear Filters
        </Button>
      )}

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {filteredBooks.map((book, index) => (
          <BookItem item={book} key={index} />
        ))}
      </div>
    </div>
  );
}
