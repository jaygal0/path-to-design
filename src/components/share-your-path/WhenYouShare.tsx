"use client";
import Image from "next/image";
interface Props {
  designers: any;
}

import { useRef } from "react";

export function WhenYouShare({ designers }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const firstCard = container.firstElementChild as HTMLElement | null;

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 24; // matches gap-6
    const amount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const filterNames = [
    "Galinato",
    "Paduraru",
    "Kumar",
    "Filou",
    "Strasche",
    "Bölter",
    "Fox",
    "Ortega",
    "Molinari",
    "Yung",
    "Oz",
    "Gu",
  ];

  const filteredDesigners = designers.filter((designer: any) =>
    filterNames.includes(designer.lastName),
  );

  return (
    <section className="w-full px-8 py-16">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-10 flex justify-between gap-16">
          <h2 className="mb-4 text-3xl font-bold md:text-7xl">
            What you'll share
          </h2>
          <p className="w-1/2 pt-3 text-lg text-muted-foreground">
            You will be guided through four short sections that cover different
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
            <div className="relative aspect-square min-w-[40vw] overflow-hidden rounded-xl bg-neutral-100/10 p-6 text-white">
              <span className="mb-3 block text-sm text-muted-foreground">
                1/4
              </span>

              <h3 className="mb-2 text-3xl font-semibold">Who you are</h3>

              <p className="mb-6 text-lg leading-relaxed text-neutral-300">
                Share your role and where you work. This helps readers
                understand the context behind your career decisions and path.
              </p>

              <div className="space-y-3 overflow-y-auto pr-2">
                {filteredDesigners
                  .slice(0, 8)
                  .map((designer: any, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-xl border border-neutral-700 px-4 py-3"
                    >
                      <div className="relative h-10 w-10 shrink-0">
                        {designer.profileImage ? (
                          <img
                            src={designer.profileImage}
                            alt={`${designer.firstName} ${designer.lastName}`}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-neutral-600" />
                        )}

                        {designer.country && (
                          <Image
                            src={`/flags/${designer.country}.svg`}
                            width={16}
                            height={16}
                            alt={designer.country}
                            className="absolute -bottom-1 -right-1 rounded-full border bg-white"
                            quality={70}
                          />
                        )}
                      </div>

                      <div className="leading-tight">
                        <div className="text-sm font-medium text-white">
                          {designer.firstName} {designer.lastName}
                        </div>
                        <div className="text-sm text-neutral-400">
                          {designer.roles.role} at {designer.companies.company}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <SectionCard
              index="2/4"
              title="Where people can find you"
              description="Optional links to your website or social profiles. Readers often want to follow designers whose journeys resonate with them."
            />

            <SectionCard
              index="3/4"
              title="The tools and resources you rely on"
              description="Share the apps, books, and tools that support your work. This gives aspiring designers practical starting points they can explore themselves."
            />

            <SectionCard
              index="4/4"
              title="Your experience and reflections"
              description="Answer a handful of short questions about how you got started, what challenged you, and what you wish you had known earlier. These insights often matter most to readers finding their way."
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
    <div className="relative aspect-square min-w-[40vw] overflow-hidden rounded-xl bg-neutral-100/10 p-6 text-white">
      <span className="mb-3 block text-sm text-muted-foreground">{index}</span>
      <h3 className="mb-2 text-3xl font-semibold">{title}</h3>
      <div className="overflow-y-auto pr-2">
        <p className="text-lg leading-relaxed text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  );
}
