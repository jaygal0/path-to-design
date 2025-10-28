"use client";

import AppItem from "../global/AppItem";

type Props = {
  app: any;
};

export default function BrowseApp({ app }: Props) {
  return (
    <div className="mx-auto w-full space-y-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl font-bold">{app.name}</h1>
      </div>

      {/* Single App Display */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <AppItem tool={app} />
      </div>
    </div>
  );
}
