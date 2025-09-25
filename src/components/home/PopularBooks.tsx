"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import BookItem from "@/components/global/BookItem";

export function PopularBooks({ books }: any) {
  return (
    <div className="col-span-1 h-fit rounded-2xl bg-neutral-900 p-3 md:p-6 xl:col-span-3">
      <div className="mb-6">
        <div className="mb-1 flex items-center justify-between gap-1">
          <div className="text-lg text-foreground">Popular books</div>
          <Link href="/books">
            <Button variant="ghost" className="flex items-center gap-1">
              Explore all <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground md:w-3/4">
          Links to books may be affiliate links. As an Amazon Associate I earn
          from qualifying purchases. Your support makes a difference.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {books.slice(0, 9).map((item: any, index: any) => {
          return <BookItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
