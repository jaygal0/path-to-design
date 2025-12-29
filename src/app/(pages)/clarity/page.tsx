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
        designerOne="Victor Sköld moved from customer support into a trainee design role"
        designerOneImage="https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-victor-sko%CC%88ld-1761827021996-kwUkTnQ1AurveBusBbP9YPd2Kp81WQ%20copy.jpg"
        designerOneLink="victor-skld"
        designerTwo="Anna Filou learned web design out of necessity while doing admin work"
        designerTwoLink="anna-filou"
        designerTwoImage="https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-anna-filou-1750271563189-gXFKwKoBchrEy8Clah23GPjC5bq2jS.jpg"
        designerThree="Krunal Moliya shifted from accounting after recognising a creative pull"
        designerThreeLink="krunal-moliya"
        designerThreeImage="https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-krunal-moliya-WqlyKit3YJ5wNx7nVW0OvlRrj9ywse.jpg"
      >
        <Pattern
          patternNumber={1}
          heading="There is no single starting point"
          insight="Design careers often emerge through exposure, not intention."
        >
          <p>
            Most designers did not begin with a clear intention to become
            designers. Their paths were shaped by circumstance, curiosity, or
            proximity to creative work rather than a defined career decision.
          </p>
          <p className="my-5 text-muted-foreground">What this looked like:</p>
          <ul className="mb-6">
            <li className="ml-4 list-disc">
              Transitioning from support, admin, marketing, or engineering roles
            </li>
            <li className="ml-4 list-disc">
              Discovering design while solving real problems at work
            </li>
            <li className="ml-4 list-disc">
              Following creative interests without long term certainty
            </li>
          </ul>
        </Pattern>
        <Pattern
          patternNumber={2}
          heading="Action came before confidence"
          insight="Design careers often emerge through exposure, not intention."
        >
          <p>
            Designers rarely waited until they felt ready. They started with
            small steps and learned through doing, letting confidence develop
            over time rather than upfront.
          </p>
          <p className="my-5 text-muted-foreground">What this looked like:</p>
          <ul className="mb-6">
            <li className="ml-4 list-disc">
              Freelancing or taking unpaid work early
            </li>
            <li className="ml-4 list-disc">
              Learning tools while already working
            </li>
            <li className="ml-4 list-disc">
              Building portfolios through real projects
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
