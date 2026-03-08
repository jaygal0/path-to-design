import Image from "next/image";

function GreenTick() {
  return (
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
  );
}

export function WhyThisMatters() {
  return (
    <section className="w-full md:py-16">
      <div className="mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* Visual */}
        <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl">
          <Image
            src="/share-your-path/examples.png"
            alt="Preview of submitted designer paths"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Why share your path
          </h2>

          <ul className="text-md space-y-3 text-neutral-300 md:text-xl">
            <li className="flex items-start gap-3 md:items-start">
              <span className="mt-1 text-green-500">
                <GreenTick />
              </span>
              <span>It'll take only a few minutes to share your story</span>
            </li>

            <li className="flex items-start gap-3 md:items-start">
              <span className="mt-1 text-green-500">
                <GreenTick />
              </span>
              <span>
                Your story will be published as a dedicated page on Path to
                Design
              </span>
            </li>

            <li className="flex items-start gap-3 md:items-start">
              <span className="mt-1 text-green-500">
                <GreenTick />
              </span>
              <span>
                You'll get a backlink to your portfolio, website, or LinkedIn to
                help increase your online exposure and grow your network
              </span>
            </li>

            <li className="flex items-start gap-3 md:items-start">
              <span className="mt-1 text-green-500">
                <GreenTick />
              </span>
              <span>
                You'll be exposed to hundreds of our monthly readers that visit
                the site regularly
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
