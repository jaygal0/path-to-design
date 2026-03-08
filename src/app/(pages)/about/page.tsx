import Image from "next/image";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-4 text-xl leading-relaxed">
        <h1 className="mb-8 text-3xl font-bold">About</h1>
        <p>Hey! Thank you for checking out my site.</p>
        <p>
          My name is Joshua Galinato, and I&apos;m a designer too! You can view
          my profile{" "}
          <a
            className="underline hover:cursor-pointer"
            href="/designers/joshua-galinato"
          >
            here
          </a>{" "}
          if you&apos;re interested.
        </p>
        <p>
          As a designer, I wanted to further my skills by learning to not only
          design websites but also build them from scratch. I realised this
          personal project could help me expand my network of designers, assist
          aspiring designers, and offer insights into entering the industry.
        </p>
        <p>
          Below is a little snapshot of my design journey and how I ended up
          creating Path to Design.
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
          I hope you find something valuable here that aids your path to
          becoming a designer. If so, feel free to reach out at{" "}
          <a
            className="underline hover:cursor-pointer"
            href="mailto:joshua@pathtodesign.com"
          >
            joshua@pathtodesign.com.
          </a>
        </p>
        <p>I&apos;d love to hear from you!</p>
      </div>
    </main>
  );
}
