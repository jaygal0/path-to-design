"use client";

import { LucideExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { plausibleEvents } from "@/config/plausibleEvents";
import { CardDesigner } from "../global/CardDesigner";
import Image from "next/image";

type Props = {
  app: any;
};

export default function BrowseApp({ app }: Props) {
  const { desc, url, designers, coverImage } = app;

  return (
    <div>
      <div className="mb-8 flex flex-col items-start gap-8 md:flex-row md:items-center">
        <Image
          src={`/apps/${app.app.toLowerCase().replace(/ /g, "-")}.jpg`}
          alt={app.app}
          width={32}
          height={32}
          quality={70}
          className="h-24 w-24 rounded-xl transition-all"
          sizes="(max-width: 640px) 40px, 80px"
          unoptimized
        />
        <div>
          <h1 className="text-4xl font-bold">{app.app}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{desc}</p>
        </div>
      </div>
      {coverImage && (
        <Image
          src={coverImage || ""}
          alt={app.app}
          width={32}
          height={32}
          quality={70}
          className="mb-8 aspect-video w-full rounded-xl object-cover transition-all sm:w-96"
          unoptimized
        />
      )}
      <a
        href={url}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="plausible-event-name=view-app block"
        data-event-name={plausibleEvents.VIEW_APP}
      >
        <Button variant="secondary">
          View website
          <LucideExternalLink />
        </Button>
      </a>
      <h2 className="mb-8 mt-14 text-lg text-foreground">
        Used by {designers.length} designers
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
