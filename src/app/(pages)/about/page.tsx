import Image from "next/image";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-4 text-xl leading-relaxed">
        <h1 className="mb-8 text-3xl font-bold">About</h1>
        <p>Path to Design started as a personal project.</p>
        <p>
          As a designer, I wanted to go beyond designing websites and learn how
          to build them from scratch. Along the way, I began reaching out to
          designers to learn how they started their careers, what they had
          learned, and what advice they would give to others trying to enter the
          field.
        </p>
        <p>
          What began as a way to learn and expand my network quickly became
          something more.
        </p>
        <p>
          Today, Path to Design shares real stories from designers around the
          world, helping aspiring designers understand the many different paths
          into the industry. Each journey is different, but there is no single
          way to become a designer.
        </p>
        <p>
          This project has helped me grow my own skills, connect with incredible
          designers, and share their insights with others who are just starting
          out.
        </p>
        <p>
          Below is a snapshot of my own design journey and how Path to Design
          came to be.
        </p>
        <Image
          src="/share-your-path/joshua-pathtodesign.png"
          alt="Joshua from Path to Design"
          width={1200}
          height={630}
          className="mb-2 h-auto w-full rounded-lg border border-stone-800"
          priority
        />
        <p>
          If you find something here that helps you on your journey, feel free
          to reach out at{" "}
          <a
            className="underline hover:cursor-pointer"
            href="mailto:joshua@pathtodesign.com"
          >
            joshua@pathtodesign.com
          </a>
          .
        </p>
        <p>I’d love to hear from you.</p>
        <p>
          You can check out my journey{" "}
          <a
            className="underline hover:cursor-pointer"
            href="/designers/joshua-galinato"
          >
            here
          </a>{" "}
          if you&apos;re interested.
        </p>
      </div>
    </main>
  );
}
