interface T {
  heading: String;
  desc?: String;
}

export function Heading({ heading, desc }: T) {
  return (
    <>
      <h1 className="text-gradient mb-8 text-7xl font-bold leading-tight">
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
