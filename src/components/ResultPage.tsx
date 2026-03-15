"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { AppsUsed } from "@/components/designer/AppsUsed";
import { BooksUsed } from "@/components/designer/BooksUsed";
import { ProductsUsed } from "@/components/designer/ProductsUsed";
import { CardDesigner } from "@/components/global/CardDesigner";
import { Button } from "@/components/ui/button";
import {
  analyticsEvents,
  getSafeQuizState,
  type QuizState,
} from "@/lib/quizSessionCompat";
import {
  generateResultExplanation,
  getExperienceAdvice,
  getRoleExplanation,
} from "@/lib/quizResults";
import { roles, type RoleKey } from "@/lib/roles";
import { logQuizEvent } from "@/lib/quizFunnel";
import type { DesignerProps } from "@/types";

interface ResultPageProps {
  role: RoleKey;
  recommendedDesigners: DesignerProps[];
  recommendedApps: any[];
  recommendedBooks: any[];
  recommendedProducts: any[];
}

export function ResultPage({
  role,
  recommendedDesigners,
  recommendedApps,
  recommendedBooks,
  recommendedProducts,
}: ResultPageProps) {
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    const storedState = getSafeQuizState();
    const matchedState = storedState?.role === role ? storedState : null;

    setQuizState(matchedState);
    setShareUrl(window.location.href);

    // This is the point where a real analytics event would fire when the
    // visitor lands on a result page.
    logQuizEvent(analyticsEvents.RESULT_VIEWED, {
      role,
      experience: matchedState?.experience ?? null,
    });
  }, [role]);

  const explanation = useMemo(() => {
    const answerIndexes = quizState?.answers ?? [];
    return generateResultExplanation(answerIndexes);
  }, [quizState?.answers]);

  const advice = useMemo(() => {
    return getExperienceAdvice(quizState?.experience ?? null);
  }, [quizState?.experience]);

  async function handleCopyLink() {
    if (!shareUrl) return;

    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  const twitterShareUrl = shareUrl
    ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `I got ${roles[role].name} on Path to Design.`,
      )}&url=${encodeURIComponent(shareUrl)}`
    : "#";

  const linkedinShareUrl = shareUrl
    ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl,
      )}`
    : "#";

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-3xl border border-stone-800 bg-stone-900/70 p-8 shadow-2xl shadow-stone-950/30 md:p-12">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
          Your Design Path
        </p>
        <h1 className="text-4xl font-semibold text-stone-50 md:text-5xl">
          Your Design Path: {roles[role].name}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-stone-300">
          {getRoleExplanation(role)}
        </p>
        <p className="mx-auto max-w-2xl text-stone-400">{explanation}</p>
      </div>

      {advice.length > 0 && (
        <section className="rounded-3xl border border-stone-800 bg-stone-950 p-6">
          <h2 className="text-2xl font-semibold text-stone-50">
            Personalized next steps
          </h2>
          <p className="mt-2 text-stone-400">
            {quizState?.experience
              ? `Because you said you're "${quizState.experience.toLowerCase()}", here are the best next moves.`
              : "Here are a few useful next steps to keep momentum going."}
          </p>
          <ul className="mt-4 space-y-3 text-stone-200">
            {advice.map((item) => (
              <li key={item} className="rounded-2xl border border-stone-800 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="rounded-3xl border border-stone-800 bg-stone-950 p-6">
        <h2 className="text-2xl font-semibold text-stone-50">
          Learn from real designers
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recommendedDesigners.map((designer) => (
            <CardDesigner
              key={designer.slug}
              company={designer.company ?? ""}
              country={designer.country}
              firstName={designer.firstName}
              lastName={designer.lastName}
              oneLiner={designer.oneLiner}
              profileImage={designer.profileImage}
              role={designer.role}
              slug={designer.slug}
            />
          ))}
        </div>
      </section>

      {(recommendedApps.length > 0 ||
        recommendedBooks.length > 0 ||
        recommendedProducts.length > 0) && (
        <section className="rounded-3xl border border-stone-800 bg-stone-950 p-6">
          <h2 className="text-2xl font-semibold text-stone-50">
            See what these designers use
          </h2>
          <p className="mt-2 text-stone-400">
            Apps, books, and tools currently used by designers in this path.
          </p>
          <div className="mt-6 space-y-8">
            {recommendedApps.length > 0 && <AppsUsed apps={recommendedApps} />}
            {recommendedBooks.length > 0 && (
              <BooksUsed books={recommendedBooks} />
            )}
            {recommendedProducts.length > 0 && (
              <ProductsUsed product={recommendedProducts} />
            )}
          </div>
        </section>
      )}

      <section className="rounded-3xl border border-stone-800 bg-stone-950 p-6">
        <h2 className="text-2xl font-semibold text-stone-50">Share your result</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href={twitterShareUrl} target="_blank" rel="noreferrer">
              Twitter
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={linkedinShareUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" onClick={handleCopyLink}>
            {copied ? "Copied" : "Copy Link"}
          </Button>
        </div>
      </section>

      <div className="flex justify-center">
        <Button asChild className="w-full md:w-auto">
          <Link href={`/designers?role=${role}`}>
            Explore Designers in This Role
          </Link>
        </Button>
      </div>
    </div>
  );
}
