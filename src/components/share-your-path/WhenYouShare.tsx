"use client";
import Image from "next/image";
interface Props {
  designers: any;
}

import { useRef } from "react";

import { Twitter, Linkedin, Instagram, Dribbble, Globe } from "lucide-react";

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
    <section className="w-full md:py-16">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:gap-16">
          <h2 className="text-3xl font-bold md:mb-4 md:text-7xl">
            What you'll share
          </h2>
          <p className="text-lg text-muted-foreground md:w-1/2 md:pt-3">
            You will be guided through four short sections that cover different
            parts of your design journey. You do not need to answer every
            question. Short, honest responses are more helpful than polished
            ones.
          </p>
        </div>

        {/* Scrollable cards */}
        <div className="relative">
          {/* Desktop navigation */}
          <div className="mb-8 hidden gap-2 md:flex">
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
            className="no-scrollbar flex flex-col gap-6 md:flex-row md:overflow-x-auto md:scroll-smooth md:pb-4 md:pr-6"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-900 p-3 text-white md:w-[40vw] md:shrink-0 md:p-6">
              <span className="mb-3 block text-sm text-muted-foreground">
                1/4
              </span>

              <h3 className="mb-2 text-lg font-semibold md:text-3xl">
                Who you are
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:mb-6 md:text-lg">
                Share your role and where you work. This helps readers
                understand the context behind your career decisions and path.
              </p>

              <div className="space-y-2 overflow-y-auto pr-2 md:space-y-3">
                {filteredDesigners
                  .slice(0, 8)
                  .map((designer: any, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-xl border border-neutral-700/60 bg-neutral-900/40 px-4 py-3"
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
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-900 p-3 text-white md:w-[40vw] md:shrink-0 md:p-6">
              <span className="mb-3 block text-sm text-muted-foreground">
                2/4
              </span>

              <h3 className="mb-2 text-lg font-semibold md:text-3xl">
                Where people can find you
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:mb-6 md:text-lg">
                Optional links to your website or social profiles. Readers often
                want to follow designers whose journeys resonate with them.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { icon: Globe, label: "Website" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Dribbble, label: "Dribbble" },
                  { icon: Twitter, label: "Twitter / X" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-neutral-700/60 bg-neutral-900/40  py-4 text-neutral-300"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <SectionCard
              index="3/4"
              title="The tools and resources you rely on"
              description="Share the apps, books, and tools that support your work. This gives aspiring designers practical starting points they can explore themselves."
            >
              <div className="grid grid-cols-5 gap-6 pt-2">
                {[
                  { src: "/apps/figma.jpg", label: "Figma" },
                  { src: "/apps/notion.jpg", label: "Notion" },
                  { src: "/apps/chatgpt.jpg", label: "ChatGPT" },
                  { src: "/apps/cursor.jpg", label: "Cursor" },
                  { src: "/apps/trae.jpg", label: "trae" },
                  {
                    src: "/apps/adobe-creative-cloud.jpg",
                    label: "Adobe Creative Cloud",
                  },
                  { src: "/apps/are.na.jpg", label: "Are.na" },
                  { src: "/apps/base44.jpg", label: "Base44" },
                  { src: "/apps/behance.jpg", label: "Behance" },
                  { src: "/apps/browser-use.jpg", label: "Browser Use" },
                  { src: "/apps/capcut.jpg", label: "CapCut" },
                  { src: "/apps/canva.jpg", label: "Canva" },
                  { src: "/apps/affine.jpg", label: "Affine" },
                  { src: "/apps/banani-ai.jpg", label: "Banani AI" },
                  { src: "/apps/claude.jpg", label: "Claude" },
                  { src: "/apps/dribbble.jpg", label: "Dribbble" },
                  {
                    src: "/apps/davinci-resolve.jpg",
                    label: "DaVinci Resolve",
                  },
                  { src: "/apps/discord.jpg", label: "Discord" },
                  { src: "/apps/cinema4d.jpg", label: "Cinema 4D" },
                  { src: "/apps/bolt.new.jpg", label: "Bolt.new" },
                ].map(({ src, label }) => (
                  <Image
                    key={label}
                    src={src}
                    alt={label}
                    width={60}
                    height={60}
                    className="aspect-square w-full rounded-md"
                    quality={70}
                  />
                ))}
              </div>
            </SectionCard>

            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-900 p-3 text-white md:w-[40vw] md:shrink-0 md:p-6">
              <span className="mb-3 block text-sm text-muted-foreground">
                4/4
              </span>

              <h3 className="mb-2 text-lg font-semibold md:text-3xl">
                Your experience and reflections
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:mb-6 md:text-lg">
                Answer a handful of short questions about your journey so far.
                You do not need to answer everything. Honest answers matter more
                than perfect ones.
              </p>

              <div className="space-y-2 overflow-y-auto pr-2 md:space-y-3">
                {[
                  "How did you get started in your role as a designer?",
                  "What are the responsibilities of your role?",
                  "What difficulties do you encounter in your role?",
                  "What advice would you give to your younger self?",
                  "Do you have any regrets in your journey in becoming a designer?",
                  "How do you stay inspired as a designer?",
                ].map((question, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-neutral-700/60 bg-neutral-900/40 px-4 py-3 text-neutral-300"
                  >
                    {question}
                  </div>
                ))}
              </div>
            </div>
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
  children,
}: {
  index: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-900 p-3 text-white md:w-[40vw] md:shrink-0 md:p-6">
      <span className="md:text-md mb-3 block text-sm text-muted-foreground">
        {index}
      </span>
      <h3 className="mb-2 text-lg font-semibold md:text-3xl">{title}</h3>
      <div className="overflow-y-auto pr-2">
        <p className="mb-2 text-sm leading-relaxed text-muted-foreground md:mb-0 md:text-lg">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}
