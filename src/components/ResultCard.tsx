import Link from "next/link";

import { roles, type RoleKey } from "@/lib/roles";
import { Button } from "@/components/ui/button";

interface ResultCardProps {
  role: RoleKey;
}

export function ResultCard({ role }: ResultCardProps) {
  const result = roles[role];

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-stone-800 bg-stone-900/70 p-8 text-center shadow-2xl shadow-stone-950/30 md:p-12">
      <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
        Your Design Path
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-stone-50 md:text-5xl">
        {result.name}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-300">
        {result.description}
      </p>
      <Button asChild className="mt-8">
        <Link href="/designers">Explore Designers</Link>
      </Button>
    </div>
  );
}
