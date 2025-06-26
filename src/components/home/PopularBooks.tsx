"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import BookItem from "@/components/global/BookItem";

export function PopularBooks({ books }: any) {
  return (
    <div className="col-span-3 mb-40 h-fit rounded-2xl bg-neutral-900 p-6">
      <div className="mb-6 flex justify-between">
        <div className="text-lg text-muted-foreground">
          Popular books read by designers
        </div>
        <Link href="/browse">
          <Button variant="ghost" className="flex items-center gap-1">
            See all <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.slice(0, 9).map((item: any, index: any) => {
          return <BookItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
