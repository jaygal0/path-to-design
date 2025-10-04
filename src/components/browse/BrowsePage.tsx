"use client";

import { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardDesigner } from "@/components/global/CardDesigner";
import AppItem from "../global/AppItem";
import BookItem from "../global/BookItem";
import { useSearchParams } from "next/navigation";

type Props = {
  designers: any[];
  apps: any[];
  books: any[];
};

export default function BrowsePage({ designers, apps, books }: Props) {
  // Designer filters
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<"date-desc" | "alpha-desc">(
    "date-desc",
  );
  const [appSort, setAppSort] = useState<"popularity-desc" | "alpha-desc">(
    "popularity-desc",
  );

  // Apps filters
  const [selectedAppCategories, setSelectedAppCategories] = useState<string[]>(
    [],
  );

  // Books filters
  const [selectedBookAuthors, setSelectedBookAuthors] = useState<string[]>([]);
  const [selectedBookCategories, setSelectedBookCategories] = useState<
    string[]
  >([]);

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
  const appCategories = [
    ...new Set(
      apps.flatMap((a) => a.categories?.map((c: any) => c.name) ?? []),
    ),
  ];
  const bookCategories = [
    ...new Set(books.map((b) => b.category).filter(Boolean)),
  ];
  const bookAuthors = [...new Set(books.map((b) => b.author).filter(Boolean))];

  const filteredDesigners = useMemo(() => {
    let results = designers.filter((designer) => {
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

    // Sorting
    if (sortOption === "alpha-desc") {
      results.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else {
      // date-desc
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

  // Filtering Apps
  const filteredApps = useMemo(() => {
    return apps.filter((app) =>
      selectedAppCategories.length
        ? app.categories?.some((c: any) =>
            selectedAppCategories.includes(c.name),
          )
        : true,
    );
  }, [apps, selectedAppCategories]);

  const filteredAppsSorted = useMemo(() => {
    let results = [...filteredApps];

    if (appSort === "alpha-desc") {
      results.sort((a, b) => a.app.localeCompare(b.app));
    } else {
      // popularity-desc
      results.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    }

    return results;
  }, [filteredApps, appSort]);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchAuthor = selectedBookAuthors.length
        ? selectedBookAuthors.includes(book.author)
        : true;
      const matchCategory = selectedBookCategories.length
        ? selectedBookCategories.includes(book.category)
        : true;
      return matchAuthor && matchCategory;
    });
  }, [books, selectedBookAuthors, selectedBookCategories]);

  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "designers";

  // helper for chip toggle
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
    <div className="mx-auto w-full">
      <Tabs defaultValue={tab} className="flex flex-col">
        <TabsList className="mb-2 w-min py-6">
          <TabsTrigger className="text-lg font-semibold" value="designers">
            Designers
          </TabsTrigger>
          <TabsTrigger className="text-lg font-semibold" value="apps">
            Apps
          </TabsTrigger>
          <TabsTrigger className="text-lg font-semibold" value="books">
            Books
          </TabsTrigger>
        </TabsList>

        {/* Designers */}
        <TabsContent value="designers" className="w-full space-y-6">
          <div className="w-full">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="countries">
                <AccordionTrigger>Countries</AccordionTrigger>
                <AccordionContent className="flex flex-wrap gap-2">
                  {countries.sort().map((country) => (
                    <Badge
                      key={country}
                      variant={
                        selectedCountries.includes(country)
                          ? "default"
                          : "outline"
                      }
                      className="cursor-pointer"
                      onClick={() =>
                        toggleChip(
                          country,
                          selectedCountries,
                          setSelectedCountries,
                        )
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
                      variant={
                        selectedRoles.includes(role) ? "default" : "outline"
                      }
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
                        selectedCompanies.includes(company)
                          ? "default"
                          : "outline"
                      }
                      className="cursor-pointer"
                      onClick={() =>
                        toggleChip(
                          company,
                          selectedCompanies,
                          setSelectedCompanies,
                        )
                      }
                    >
                      {company}
                    </Badge>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="h-10">
              {(selectedCountries.length > 0 ||
                selectedRoles.length > 0 ||
                selectedCompanies.length > 0) && (
                <Button
                  variant="link"
                  size="sm"
                  className="mt-3 px-0"
                  onClick={() => {
                    setSelectedCountries([]);
                    setSelectedRoles([]);
                    setSelectedCompanies([]);
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-4xl">Designers</h2>
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
              {filteredDesigners.map(
                (d) =>
                  d.isPublished && (
                    <CardDesigner
                      key={d.id}
                      {...d}
                      role={d.roles.role}
                      company={d.companies.company}
                    />
                  ),
              )}
            </div>
          </div>
        </TabsContent>

        {/* Apps */}
        <TabsContent value="apps" className="w-full space-y-6">
          <div className="w-full">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="categories">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent className="flex flex-wrap gap-2">
                  {appCategories.sort().map((category) => (
                    <Badge
                      key={category}
                      variant={
                        selectedAppCategories.includes(category)
                          ? "default"
                          : "outline"
                      }
                      className="cursor-pointer"
                      onClick={() =>
                        toggleChip(
                          category,
                          selectedAppCategories,
                          setSelectedAppCategories,
                        )
                      }
                    >
                      {category}
                    </Badge>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="h-10">
              {selectedAppCategories.length > 0 && (
                <Button
                  variant="link"
                  size="sm"
                  className="mt-3 px-0"
                  onClick={() => setSelectedAppCategories([])}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-4xl">Apps</h2>
              <Select
                value={appSort}
                onValueChange={(val) => setAppSort(val as any)}
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {filteredAppsSorted.map((app, index) => (
                <AppItem tool={app} key={index} />
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Books */}
        <TabsContent value="books" className="w-full space-y-6">
          <div className="w-full">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="authors">
                <AccordionTrigger>Authors</AccordionTrigger>
                <AccordionContent className="flex flex-wrap gap-2">
                  {bookAuthors.sort().map((author) => (
                    <Badge
                      key={author}
                      variant={
                        selectedBookAuthors.includes(author)
                          ? "default"
                          : "outline"
                      }
                      className="cursor-pointer"
                      onClick={() =>
                        toggleChip(
                          author,
                          selectedBookAuthors,
                          setSelectedBookAuthors,
                        )
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
                  {bookCategories.sort().map((category) => (
                    <Badge
                      key={category}
                      variant={
                        selectedBookCategories.includes(category)
                          ? "default"
                          : "outline"
                      }
                      className="cursor-pointer"
                      onClick={() =>
                        toggleChip(
                          category,
                          selectedBookCategories,
                          setSelectedBookCategories,
                        )
                      }
                    >
                      {category}
                    </Badge>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="h-10">
              {(selectedBookAuthors.length > 0 ||
                selectedBookCategories.length > 0) && (
                <Button
                  variant="link"
                  size="sm"
                  className="mt-3 px-0"
                  onClick={() => {
                    setSelectedBookAuthors([]);
                    setSelectedBookCategories([]);
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-4xl">Books</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {filteredBooks.map((book, index) => (
                <BookItem item={book} key={index} />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
