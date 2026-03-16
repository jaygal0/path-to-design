"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ChevronRight,
  Compass,
  FileText,
  GraduationCap,
  Link2,
  Linkedin,
  Lightbulb,
  Sparkles,
  Target,
  Twitter,
} from "lucide-react";

import { AppsUsed } from "@/components/designer/AppsUsed";
import { BooksUsed } from "@/components/designer/BooksUsed";
import { ProductsUsed } from "@/components/designer/ProductsUsed";
import { CardDesigner } from "@/components/global/CardDesigner";
import { CTA } from "@/components/home/CTA";
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

const adviceIcons = [
  Target,
  FileText,
  GraduationCap,
  Compass,
  Lightbulb,
  Sparkles,
];

export function ResultPage({
  role,
  recommendedDesigners,
  recommendedApps,
  recommendedBooks,
  recommendedProducts,
}: ResultPageProps) {
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [copied, setCopied] = useState(false);
  const [linkedinCopied, setLinkedinCopied] = useState(false);
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

  async function handleLinkedInShare() {
    if (!shareUrl) return;

    const shareMessage = `I got ${roles[role].name} on Path to Design. See your result here: ${shareUrl}`;

    // LinkedIn no longer supports prefilled personal post text via share URL,
    // so we copy the suggested post first and then open the share dialog.
    await navigator.clipboard.writeText(shareMessage);
    setLinkedinCopied(true);
    window.setTimeout(() => setLinkedinCopied(false), 2000);
    window.open(linkedinShareUrl, "_blank", "noopener,noreferrer");
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
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 space-y-20 p-8 shadow-2xl md:p-12">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Your Design Path
        </p>
        <h1 className="text-4xl font-semibold text-foreground md:text-7xl">
          {roles[role].name}
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          {getRoleExplanation(role)}
        </p>
      </div>

      <section className="text-center">
        <h2 className="text-lg text-muted-foreground">Share your result</h2>
        <div className="mt-4 flex justify-center gap-3">
          <Button
            asChild
            variant="outline"
            size="icon"
            aria-label="Share on Twitter"
          >
            <Link href={twitterShareUrl} target="_blank" rel="noreferrer">
              <Twitter className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Share on LinkedIn"
            title={
              linkedinCopied
                ? "Post text copied. Paste it into LinkedIn."
                : "Copy post text and open LinkedIn"
            }
            onClick={handleLinkedInShare}
          >
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopyLink}
            aria-label={copied ? "Link copied" : "Copy link"}
            title={copied ? "Copied" : "Copy link"}
          >
            <Link2 className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {advice.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold">Personalized next steps</h2>
          <p className="mt-2 text-stone-400">
            {quizState?.experience
              ? `Because you said you're ${quizState.experience.toLowerCase()}, you should focus on:`
              : "Here are a few useful next steps to keep momentum going."}
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-2">
            {advice.map((item, index) => {
              const Icon = adviceIcons[index % adviceIcons.length];

              return (
                <li
                  key={item}
                  className="flex min-h-36 flex-col items-start gap-5 rounded-2xl border border-stone-800 bg-stone-950/60 p-5"
                >
                  <Icon className="h-5 w-5" />
                  <p className="text-xl text-foreground">{item}</p>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <section>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-semibold text-stone-50">
            Learn from real designers
          </h2>
          <Button
            asChild
            variant="link"
            size="sm"
            className="w-full justify-start px-0 md:w-auto"
          >
            <Link href={`/designers?role=${role}`}>
              Explore Designers
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
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

      {recommendedApps.length > 0 && (
        <section>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold text-stone-50">
              Apps currently used by designers in this role
            </h2>
            <Button
              asChild
              variant="link"
              size="sm"
              className="w-full justify-start px-0 md:w-auto"
            >
              <Link href="/best-design-apps">
                Browse All Apps
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-6">
            <AppsUsed apps={recommendedApps} title="" />
          </div>
        </section>
      )}

      {recommendedBooks.length > 0 && (
        <section>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold text-stone-50">
              Books recommended by designers in this role
            </h2>
            <Button
              asChild
              variant="link"
              size="sm"
              className="w-full justify-start px-0 md:w-auto"
            >
              <Link href="/best-design-books">
                Browse All Books
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-6">
            <BooksUsed books={recommendedBooks} title="" />
          </div>
        </section>
      )}

      {recommendedProducts.length > 0 && (
        <section>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold text-stone-50">
              Tools currently used by designers in this role
            </h2>
            <Button
              asChild
              variant="link"
              size="sm"
              className="w-full justify-start px-0 md:w-auto"
            >
              <Link href="/best-design-tools">
                Browse All Tools
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-6">
            <ProductsUsed product={recommendedProducts} title="" />
          </div>
        </section>
      )}

      <CTA />
    </div>
  );
}
