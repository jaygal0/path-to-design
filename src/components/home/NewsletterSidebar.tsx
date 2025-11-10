"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function NewsletterSidebar() {
  return (
    <div className="h-min rounded-2xl border border-neutral-400 bg-neutral-900 p-3 md:p-6">
      <div className="mb-6">
        <div className="mb-1 flex items-center justify-between gap-1">
          <h2 className="text-lg text-foreground">
            Level Up Your Design Career
          </h2>
        </div>
        <p className="text-sm text-muted-foreground md:w-3/4">
          Get insights, tools, and recommendations from designers who&apos;ve
          made it into the industry.
        </p>
      </div>
      <form
        className="flex flex-col"
        action="https://pathtodesign.us17.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="e41d9cf2ed34317e99e5891b9" />
        <input type="hidden" name="id" value="9437e60fa0" />
        <div className="flex items-stretch gap-2">
          <Input
            type="email"
            id="MERGE0"
            name="MERGE0"
            placeholder="name@email.com"
            className="flex-1"
          />
          <Button type="submit" variant="secondary" className="px-4">
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
}
