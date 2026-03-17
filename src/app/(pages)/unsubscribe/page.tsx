"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function UnsubscribePage() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("Updating your email preferences...");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const email = searchParams.get("email");

    if (!email) {
      setHasError(true);
      setMessage("We couldn't find an email address to unsubscribe.");
      return;
    }

    async function unsubscribe(targetEmail: string) {
      try {
        const response = await fetch(
          `/api/unsubscribe?email=${encodeURIComponent(targetEmail)}`,
        );

        if (!response.ok) {
          throw new Error("Failed to unsubscribe");
        }

        setMessage("You've been unsubscribed from future marketing emails.");
      } catch (error) {
        console.error(error);
        setHasError(true);
        setMessage("We couldn't update your preferences right now.");
      }
    }

    unsubscribe(email);
  }, [searchParams]);

  return (
    <section className="mx-auto max-w-2xl rounded-3xl border border-stone-800 bg-stone-950 p-8 text-center">
      <h1 className="text-3xl font-semibold text-stone-50">Unsubscribe</h1>
      <p className="mt-4 text-stone-300">{message}</p>
      <Button asChild className="mt-8">
        <Link href="/">Return home</Link>
      </Button>
      {hasError ? (
        <p className="mt-4 text-sm text-stone-500">
          You can also contact info@pathtodesign.com for help.
        </p>
      ) : null}
    </section>
  );
}
