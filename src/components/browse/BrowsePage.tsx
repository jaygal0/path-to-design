"use client";

import { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { CardDesigner } from "@/components/global/CardDesigner";
import { Button } from "../ui/button";
import BookItem from "../global/BookItem";
import AppItem from "../global/AppItem";
import { useSearchParams, useRouter } from "next/navigation";

type Props = {
  designers: any[];
  apps: any[];
  books: any[];
};

export default function BrowsePage({ designers, apps, books }: Props) {
  // Designers filters
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  // Apps filters
  const [selectedAppCategories, setSelectedAppCategories] = useState<string[]>(
    [],
  );

  // Books filters
  const [selectedBookAuthors, setSelectedBookAuthors] = useState<string[]>([]);
  const [selectedBookCategories, setSelectedBookCategories] = useState<
    string[]
  >([]);

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
    ...new Set(apps.map((a) => a.category).filter(Boolean)),
  ];

  const bookCategories = [
    ...new Set(books.map((b) => b.category).filter(Boolean)),
  ];
  const bookAuthors = [...new Set(books.map((b) => b.author).filter(Boolean))];

  const filteredDesigners = useMemo(() => {
    return designers.filter((designer) => {
      const matchCountry =
        selectedCountries.length > 0
          ? selectedCountries.includes(designer.country)
          : true;
      const matchRole =
        selectedRoles.length > 0
          ? selectedRoles.includes(designer.roles?.role)
          : true;
      const matchCompany =
        selectedCompanies.length > 0
          ? selectedCompanies.includes(designer.companies?.company)
          : true;
      return matchCountry && matchRole && matchCompany;
    });
  }, [designers, selectedCountries, selectedRoles, selectedCompanies]);

  const filteredApps = useMemo(() => {
    return apps.filter((app) =>
      selectedAppCategories.length > 0
        ? selectedAppCategories.includes(app.category)
        : true,
    );
  }, [apps, selectedAppCategories]);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchAuthor =
        selectedBookAuthors.length > 0
          ? selectedBookAuthors.includes(book.author)
          : true;
      const matchCategory =
        selectedBookCategories.length > 0
          ? selectedBookCategories.includes(book.category)
          : true;
      return matchAuthor && matchCategory;
    });
  }, [books, selectedBookAuthors, selectedBookCategories]);

  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "designers";

  return (
    <div className="mx-auto w-full">
      <Tabs defaultValue={tab} className="flex flex-col items-center">
        <TabsList className="mb-10 w-min p-4">
          <TabsTrigger value="designers">Designers</TabsTrigger>
          <TabsTrigger value="apps">Apps</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
        </TabsList>

        {/* Designers */}
        <TabsContent value="designers" className="w-full">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <aside className="hidden space-y-6 lg:block">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCountries([]);
                  setSelectedRoles([]);
                  setSelectedCompanies([]);
                }}
              >
                Clear Filters
              </Button>

              <div>
                <p className="mb-2 text-sm font-medium">Based In</p>
                <div className="space-y-2">
                  {countries.sort().map((country) => (
                    <label
                      key={country}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Checkbox
                        checked={selectedCountries.includes(country)}
                        onCheckedChange={(checked) =>
                          setSelectedCountries((prev) =>
                            checked
                              ? [...prev, country]
                              : prev.filter((c) => c !== country),
                          )
                        }
                      />
                      {country}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium">Roles</p>
                <div className="space-y-2 pr-2">
                  {roles.sort().map((role) => (
                    <label
                      key={role}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Checkbox
                        checked={selectedRoles.includes(role)}
                        onCheckedChange={(checked) =>
                          setSelectedRoles((prev) =>
                            checked
                              ? [...prev, role]
                              : prev.filter((r) => r !== role),
                          )
                        }
                      />
                      {role}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium">Companies</p>
                <div className="space-y-2 pr-2">
                  {companies.sort().map((company) => (
                    <label
                      key={company}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Checkbox
                        checked={selectedCompanies.includes(company)}
                        onCheckedChange={(checked) =>
                          setSelectedCompanies((prev) =>
                            checked
                              ? [...prev, company]
                              : prev.filter((c) => c !== company),
                          )
                        }
                      />
                      {company}
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            <div className="md:col-span-3">
              <h2 className="mb-6 text-4xl lg:block">Designers</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {filteredDesigners.map((d) => (
                  <CardDesigner
                    key={d.id}
                    {...d}
                    role={d.roles.role}
                    company={d.companies.company}
                  />
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Apps */}
        <TabsContent value="apps" className="w-full">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <aside className="hidden space-y-6 lg:block">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedAppCategories([])}
              >
                Clear Filters
              </Button>

              <div>
                <p className="mb-2 text-sm font-medium">Categories</p>
                <div className="space-y-2">
                  {appCategories.sort().map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Checkbox
                        checked={selectedAppCategories.includes(category)}
                        onCheckedChange={(checked) =>
                          setSelectedAppCategories((prev) =>
                            checked
                              ? [...prev, category]
                              : prev.filter((c) => c !== category),
                          )
                        }
                      />
                      {category}
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            <div className="md:col-span-3">
              <h2 className="mb-2 text-4xl lg:block">Apps</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Links to apps may be affiliate links. Your support makes a
                difference.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {filteredApps.map((app, index) => (
                  <AppItem tool={app} key={index} />
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Books */}
        <TabsContent value="books" className="w-full">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <aside className="hidden space-y-6 lg:block">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedBookAuthors([]);
                  setSelectedBookCategories([]);
                }}
              >
                Clear Filters
              </Button>

              <div>
                <p className="mb-2 text-sm font-medium">Authors</p>
                <div className="space-y-2">
                  {bookAuthors.sort().map((author) => (
                    <label
                      key={author}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Checkbox
                        checked={selectedBookAuthors.includes(author)}
                        onCheckedChange={(checked) =>
                          setSelectedBookAuthors((prev) =>
                            checked
                              ? [...prev, author]
                              : prev.filter((a) => a !== author),
                          )
                        }
                      />
                      {author}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium">Categories</p>
                <div className="space-y-2">
                  {bookCategories.sort().map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Checkbox
                        checked={selectedBookCategories.includes(category)}
                        onCheckedChange={(checked) =>
                          setSelectedBookCategories((prev) =>
                            checked
                              ? [...prev, category]
                              : prev.filter((c) => c !== category),
                          )
                        }
                      />
                      {category}
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            <div className="md:col-span-3">
              <h2 className="mb-2 text-4xl lg:block">Books</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Links to books may be affiliate links. As an Amazon Associate I
                earn from qualifying purchases. Your support makes a difference.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {filteredBooks.map((book, index) => (
                  <BookItem item={book} key={index} />
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
