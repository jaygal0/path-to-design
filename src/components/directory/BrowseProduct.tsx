"use client";

import { LucideExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { plausibleEvents } from "@/config/plausibleEvents";
import { CardDesigner } from "../global/CardDesigner";
import Image from "next/image";
import { NewsletterSidebar } from "../global/NewsletterSidebar";
import { ShareYourPath } from "../global/ShareYourPath";

type Props = {
  product: any;
};

export default function BrowseProduct({ product }: Props) {
  const { name, slug, description, url, designers } = product;

  return (
    <div>
      <div className="mb-8 flex flex-col items-start gap-8 md:flex-row md:items-center">
        <Image
          src={`/tools/${slug}.png`}
          alt={name}
          width={200}
          height={200}
          quality={70}
          className="rounded-lg object-cover"
          unoptimized
        />
        <div>
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="plausible-event-name=view-book block"
        data-event-name={plausibleEvents.VIEW_BOOK}
      >
        <Button variant="secondary">
          View tool
          <LucideExternalLink />
        </Button>
      </a>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-stretch lg:hidden">
        <NewsletterSidebar />
        <ShareYourPath />
      </div>
      <h2 className="mb-8 mt-14 text-lg text-foreground">
        Recommended by {designers.length}{" "}
        {designers.length === 1 ? "designer" : "designers"}
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {designers
          .sort(
            (a: any, b: any) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
          )
          .map(
            (d: any) =>
              d.isPublished && (
                <CardDesigner
                  key={d.id}
                  {...d}
                  role={d.roles?.role || ""}
                  company={d.companies?.company || ""}
                />
              ),
          )}
      </div>
    </div>
  );
}
