import Pattern from "@/components/clarity/Pattern";
import Section from "@/components/clarity/Section";

export default function Clarity() {
  return (
    <>
      <div className="mx-auto mb-48 space-y-5 px-32 text-center">
        <h1 className="text-7xl font-bold">Heading</h1>
        <p className="text-2xl font-light text-muted-foreground">
          This guide is based on recurring patterns from 50+ designers across
          different roles. Not polished stories. Not advice from one person.
          Just what kept showing up when designers reflected honestly on their
          careers.
        </p>
      </div>
      <Section
        heading="How designers actually get started"
        summary="Waiting to feel ready is one of the most common ways people delay a design career — and most designers wish they’d started earlier."
        designerOne="Pascal Strasche — Indie Maker, Germany"
        designerOneLink="designers"
      >
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
        <Pattern
          patternNumber={3}
          heading="Formal education exists — but it’s not dominant or decisive"
          insight="Education shows up in many forms — but it’s not the common denominator."
        >
          <p>You have:</p>
          <ul className="mb-6">
            <li className="ml-4 list-disc">vocational colleges</li>
            <li className="ml-4 list-disc">bachelor’s and master’s degrees</li>
            <li className="ml-4 list-disc">bootcamps</li>
            <li className="ml-4 list-disc">
              people who studied after their first job
            </li>
            <li className="ml-4 list-disc">
              people who never studied design formally
            </li>
          </ul>
        </Pattern>
      </Section>
      <Section
        heading="The hardest parts of being a designer"
        summary="Most design challenges aren’t about tools or talent. They’re about communication, trade-offs, and navigating uncertainty."
      >
        <Pattern
          patternNumber={1}
          heading="Design is as much about people as it is about craft"
          insight="Design difficulty often comes from people, not pixels."
        >
          <p>What repeatedly shows up</p>
          <ul className="mb-6">
            <li className="ml-4 list-disc">Too many stakeholders</li>
            <li className="ml-4 list-disc">Conflicting opinions</li>
            <li className="ml-4 list-disc">Subjective feedback</li>
            <li className="ml-4 list-disc">
              Explaining decisions to non-designers
            </li>
            <li className="ml-4 list-disc">
              Translating abstract ideas into shared understanding
            </li>
          </ul>
          <p>
            Designers consistently describe difficulty not in making things, but
            in aligning people around them.
          </p>
        </Pattern>
      </Section>
    </>
  );
}
