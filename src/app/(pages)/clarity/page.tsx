import Pattern from "@/components/clarity/Pattern";

export default function Clarity() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="col-span-1 col-start-1 flex flex-col gap-4 text-xl leading-relaxed">
          <h2 className="sticky top-20 mb-8 text-6xl font-semibold">
            How designers actually get started
          </h2>
        </div>

        <Pattern
          patternNumber={1}
          heading="There is no single “starting point” — paths are non-linear"
          insight="Most designers didn't choose design once — they drifted
                toward it through action."
        >
          <p>Very few designers describe:</p>
          <ul className="mb-6">
            <li className="ml-4 list-disc">a clear plan</li>
            <li className="ml-4 list-disc">a single decision moment</li>
            <li className="ml-4 list-disc">
              a straight line from education → job
            </li>
          </ul>
          <p>Very few designers describe:</p>
          <ul>
            <li className="ml-4 list-disc">
              career switches (accounting, engineering, marketing, admin, IT)
            </li>
            <li className="ml-4 list-disc">
              adjacent roles (support → trainee, video editor → designer, brand
              → web → UX)
            </li>
            <li className="ml-4 list-disc">
              side projects / freelancing before a title
            </li>
            <li className="ml-4 list-disc">
              curiosity-led exploration, not commitment
            </li>
          </ul>
        </Pattern>
        <Pattern
          patternNumber={2}
          heading="There is no single “starting point” — paths are non-linear"
          insight="Most designers didn't choose design once — they drifted
                toward it through action."
        >
          <p>Very few designers describe:</p>
          <ul className="mb-6">
            <li className="ml-4 list-disc">a clear plan</li>
            <li className="ml-4 list-disc">a single decision moment</li>
            <li className="ml-4 list-disc">
              a straight line from education → job
            </li>
          </ul>
          <p>Very few designers describe:</p>
          <ul>
            <li className="ml-4 list-disc">
              career switches (accounting, engineering, marketing, admin, IT)
            </li>
            <li className="ml-4 list-disc">
              adjacent roles (support → trainee, video editor → designer, brand
              → web → UX)
            </li>
            <li className="ml-4 list-disc">
              side projects / freelancing before a title
            </li>
            <li className="ml-4 list-disc">
              curiosity-led exploration, not commitment
            </li>
          </ul>
        </Pattern>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="col-span-1 col-start-1 flex h-dvh flex-col gap-4 text-xl leading-relaxed">
          <h2 className="sticky top-20 mb-8 text-6xl font-bold">
            The hardest parts of being a designer
          </h2>
        </div>

        <div className="col-span-1 col-start-2">
          <div>Hello world</div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="col-span-1 col-start-1 flex h-dvh flex-col gap-4 text-xl leading-relaxed">
          <h2 className="sticky top-20 mb-8 text-6xl font-bold">
            Advice designers would give themselves
          </h2>
        </div>

        <div className="col-span-1 col-start-2">
          <div>Hello world</div>
        </div>
      </div>
    </>
  );
}
