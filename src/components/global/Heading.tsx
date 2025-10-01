interface Props {
  heading: String;
  desc?: String;
  isSecondary?: boolean;
}

export function Heading({ heading, desc, isSecondary }: Props) {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">{heading}</h1>
      {desc && (
        <p className="mb-12 whitespace-pre-line text-xl leading-relaxed">
          {desc}
        </p>
      )}
    </>
  );
}
