export function WhyThisMatters() {
  return (
    <section className="w-full md:py-16">
      <div className="mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* Visual */}
        <div className="flex items-center justify-center">
          <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-neutral-100/10">
            <div className="text-neutral-400">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <path d="M3 15l4-4a3 3 0 0 1 4 0l6 6" />
                <path d="M14 14l1-1a3 3 0 0 1 4 0l2 2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Why you matter
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Most aspiring designers only see polished portfolios and success
            stories. What they rarely see is how designers actually got started,
            what slowed them down, or what they wish they had known earlier.
            <br />
            <br />
            Your experience fills that gap.
          </p>

          <ul className="text-md space-y-3 text-neutral-300 md:text-xl">
            <li className="flex items-start gap-3 md:items-center">
              <span className="mt-1 text-green-500">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span>Help new designers avoid common mistakes</span>
            </li>

            <li className="flex items-start gap-3 md:items-center">
              <span className="mt-1 text-green-500">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span>Share a realistic path, not a highlight reel</span>
            </li>

            <li className="flex items-start gap-3 md:items-center">
              <span className="mt-1 text-green-500">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span>Give back without committing to mentoring or calls</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
