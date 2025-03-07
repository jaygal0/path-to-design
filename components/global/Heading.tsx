interface Props {
  heading: String;
  desc?: String;
  isSecondary?: boolean;
}

export function Heading({ heading, desc, isSecondary }: Props) {
  return (
    <>
      <h1
        className={`text-gradient mb-8 ${isSecondary ? "text-2xl" : "text-4xl"} font-bold leading-tight md:${isSecondary ? "text-5xl" : "text-6xl"} md:leading-normal lg:${isSecondary ? "text-6xl" : "text-7xl"} lg:leading-[1.4]`}
      >
        {heading}
      </h1>
      {desc && (
        <p className="mb-12 font-sans text-xl font-thin leading-relaxed">
          {desc}
        </p>
      )}
    </>
  );
}
