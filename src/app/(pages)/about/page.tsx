import { Heading } from "../../../../components/global/Heading";

export default function Page() {
  return (
    <div className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-screen flex-col justify-start py-64 md:col-span-6 md:col-start-2 xl:col-span-6 xl:col-start-4 xl:pt-72">
      <Heading heading="About" />
      <div className="flex flex-col gap-4 font-sans text-xl font-thin leading-relaxed">
        <p>Hi 👋</p>
        <p>
          My name is Joshua Galinato, and I&apos;m a designer too. You can view
          my profile{" "}
          <a
            className="underline hover:cursor-pointer"
            href={`${process.env.WEB_SITE}/designers/joshua-galinato`}
          >
            here
          </a>{" "}
          if you&apos;re interested in my journey to becoming a designer.
        </p>
        <p>
          As a designer, I wanted to further my skills by learning to not only
          design websites but also build them from scratch. I realised this
          personal project could help me expand my network of designers, assist
          aspiring designers, and offer insights into entering the industry.
        </p>
        <p>
          I hope you find something valuable here that aids your path to
          becoming a designer. If so, feel free to reach out at{" "}
          <a
            className="underline hover:cursor-pointer"
            href="mailto:info@pathtodesign.com"
          >
            info@pathtodesign.com.
          </a>
        </p>
        <p>I&apos;d love to hear from you!</p>
      </div>
    </div>
  );
}
