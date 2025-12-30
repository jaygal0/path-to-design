"use client";
import { useRef } from "react";

export function WhenYouShare() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full px-8 py-16">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-10 flex justify-between gap-16">
          <h2 className="mb-4 text-3xl font-semibold text-white md:text-7xl">
            What happens when you share
          </h2>
          <p className="w-1/2 pt-3 text-muted-foreground">
            You will be guided through five short sections that cover different
            parts of your design journey. You do not need to answer every
            question. Short, honest responses are more helpful than polished
            ones.
          </p>
        </div>

        {/* Scrollable cards */}
        <div className="relative">
          {/* Desktop navigation */}
          <div className="mb-8 flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition hover:border-neutral-500 hover:text-white"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition hover:border-neutral-500 hover:text-white"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-4 pr-6"
          >
            <SectionCard
              index="1/5"
              title="How you got started"
              description="Share how you found design and what your early steps looked like."
            />

            <SectionCard
              index="2/5"
              title="What you work on today"
              description="Describe your current role, focus, and responsibilities."
            />

            <SectionCard
              index="3/5"
              title="Challenges along the way"
              description="What slowed you down, challenged you, or surprised you."
            />

            <SectionCard
              index="4/5"
              title="Advice you would give"
              description="What you wish you had known earlier in your career."
            />

            <SectionCard
              index="5/5"
              title="Looking back"
              description="Any reflections, lessons, or regrets worth sharing."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionCard({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <div className="aspect-square min-w-[40vw] rounded-xl bg-neutral-100/10 p-6 text-white">
      <span className="mb-3 block text-sm text-neutral-400">{index}</span>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-300">{description}</p>
    </div>
  );
}
