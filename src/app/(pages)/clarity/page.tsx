import Pattern from "@/components/clarity/Pattern";
import Section from "@/components/clarity/Section";

export default function Clarity() {
  return (
    <>
      <div className="mx-auto mb-48 w-2/3 space-y-5 px-32 text-center">
        <h1 className="text-7xl font-bold">
          Patterns from real design careers
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          This guide is based on recurring patterns from 50+ designers across
          different roles. Find clarity in your own path by seeing what
          consistently showed up when designers reflected honestly on their
          careers.
        </p>
      </div>
      <Section
        heading="How designers actually get started"
        summary="Designers did not wait for permission, certainty, or a perfect starting point. Most careers were shaped by movement, experimentation, and real world exposure. The common thread was not talent, tools, or education, but a willingness to start, adapt, and keep going."
      >
        <Pattern
          patternNumber={1}
          heading="There is no single starting point"
          insight="Design careers often emerge through exposure, not intention."
          designers={[
            {
              name: "Victor Sköld moved from customer support into a trainee design role",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-victor-sko%CC%88ld-1761827021996-kwUkTnQ1AurveBusBbP9YPd2Kp81WQ%20copy.jpg",
              link: "victor-skld",
            },
            {
              name: "Anna Filou learned web design out of necessity while doing admin work",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-anna-filou-1750271563189-gXFKwKoBchrEy8Clah23GPjC5bq2jS.jpg",
              link: "anna-filou",
            },
            {
              name: "Krunal Moliya shifted from accounting after recognising a creative pull",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-krunal-moliya-WqlyKit3YJ5wNx7nVW0OvlRrj9ywse.jpg",
              link: "krunal-moliya",
            },
          ]}
          description="Most designers did not begin with a clear intention to become designers. Their paths were shaped by circumstance, curiosity, or proximity to creative work rather than a defined career decision."
          bullets={[
            "Transitioning from support, admin, marketing, or engineering roles",
            "Discovering design while solving real problems at work",
            "Following creative interests without long term certainty",
          ]}
        />
        <Pattern
          patternNumber={2}
          heading="Action came before confidence"
          insight="Confidence followed experience, not preparation."
          designers={[
            {
              name: "Meghan Martin took free and equity work before paid roles",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-meghan-martin-1747292005189-WG6vRAKdhOKtpCiaisq5Jjg0IYByCF.jpeg",
              link: "meghan-martin",
            },
            {
              name: "Christopher Butler freelanced before graduating",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-christopher-butler-1761919351263-AmK2Qr4Q2c3rkD7EvYntBleQHL1mjU.jpg",
              link: "christopher-butler",
            },
            {
              name: "Pascal Strasche learned UX through agency work after repeated applications",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-pascal-strasche-1760083622967-qTFPIlF9nsH9SYMxMlQblx8LkRYhfR.jpg",
              link: "pascal-strasche",
            },
          ]}
          description="Designers rarely waited until they felt ready. They started with small steps and learned through doing, letting confidence develop over time rather than upfront."
          bullets={[
            "Freelancing or taking unpaid work early",
            "Learning tools while already working",
            "Building portfolios through real projects",
          ]}
        />
        <Pattern
          patternNumber={3}
          heading="Education varied, but experience carried more weight"
          insight="What designers practised mattered more than what they studied."
          designers={[
            {
              name: "Vivek Kumar studied engineering and learned design through projects",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-vivek-kumar-1744446912597-98eFQMfZRZiac20OmXcp4quuyJESiK.jpeg",
              link: "vivek-kumar",
            },
            {
              name: "Raphael Diftopoulos moved from economics into UX through experimentation",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-raphael-diftopoulos-1761659668182-dHT0vxGU2zD0RpUNnPx7UbIVKDZbZM.png",
              link: "raphael-diftopoulos",
            },
            {
              name: "Robert Arnestad combined vocational education with applied roles",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-robert-arnestad-hmAWWzrlfHlILOWVphgDe0FFZZ7f1q.jpg",
              link: "robert-arnestad",
            },
          ]}
          description="Formal education showed up in many forms and was often useful, but it was rarely the deciding factor. Designers progressed by applying skills in real contexts."
          bullets={[
            "Degrees in non design fields",
            "Vocational or alternative education paths",
            "Self teaching combined with hands on work",
          ]}
        />
      </Section>
      <Section
        heading="The real challenges of design work"
        summary="The hardest parts of design are rarely about tools, taste, or talent. They centre on alignment, prioritisation, and continuously explaining the value of thoughtful design in fast moving environments. The challenge is not doing the work, but creating the conditions for good work to exist."
      >
        <Pattern
          patternNumber={1}
          heading="Most difficulties are about people, not design"
          description="Across roles and seniority levels, designers consistently describe their biggest challenges as interpersonal rather than technical. The work becomes hard when alignment breaks down."
          bullets={[
            "Too many stakeholders with competing opinions",
            "Subjective or unclear feedback",
            "Having to justify or translate design decisions to non designers",
          ]}
          designers={[
            {
              name: "Nizar Frank Talovic highlighted decoding feedback and running effective crits",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-nizar-frank%20talovic-1741216595681-8v0f82EzuL821QBaobFh75JFMzJsN1.jpeg",
              link: "nizar-frank-talovic",
            },
            {
              name: "Victor Sköld struggled with company structure and stakeholder overload",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-victor-sko%CC%88ld-1761827021996-kwUkTnQ1AurveBusBbP9YPd2Kp81WQ%20copy.jpg",
              link: "victor-skold",
            },
            {
              name: "Anna Filou described having less influence than non design stakeholders",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-anna-filou-1750271563189-gXFKwKoBchrEy8Clah23GPjC5bq2jS.jpg",
              link: "anna-filou",
            },
          ]}
          insight="Design difficulty is often a communication problem in disguise."
        />
        <Pattern
          patternNumber={2}
          heading="Balancing speed, quality, and constraints is constant tension"
          description="Designers repeatedly mention the strain of working under pressure while trying to maintain quality. Trade offs are unavoidable and often uncomfortable."
          bullets={[
            "Tight timelines forcing reduced research or iteration",
            "Balancing user needs against business goals",
            "Making decisions with incomplete information",
          ]}
          designers={[
            {
              name: "Florian Bölter described the chaos of early stage environments and constant prioritisation",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-florian-bo%CC%88lter-RJgWGuFYI9rcetg7S2KiqhcwVwGYvn.jpg",
              link: "florian-blter",
            },
            {
              name: "Raphael Diftopoulos struggled with moving fast while still thinking deeply",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-raphael-diftopoulos-1761659668182-dHT0vxGU2zD0RpUNnPx7UbIVKDZbZM.png",
              link: "raphael-diftopoulos",
            },
            {
              name: "Martin Agubata highlighted tension between user value and business pressure",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-martin-agubata-1752313561808-iqK3FYd40o2IEGuIQn0mHUtDxJq5tJ.jpeg",
              link: "martin-agubata",
            },
          ]}
          insight="Good design often means choosing what not to do."
        />
        <Pattern
          patternNumber={3}
          heading="Proving the value of design never really ends"
          description="Many designers, including senior ones, describe an ongoing need to justify their role, impact, and decisions. The work is not always visible or immediately measurable."
          bullets={[
            "Difficulty quantifying impact",
            "Advocating for research, accessibility, or UX debt",
            "Being pulled toward output over outcomes",
          ]}
          designers={[
            {
              name: "Elias Gustavsson struggled to measure and prove design impact",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-elias-gustavsson-8AppIc2mIyFqvBOT6uqmJocJoQ65d9.jpg",
              link: "elias-gustavsson",
            },
            {
              name: "Elena Molinari described advocating for design priorities internally",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-elena-molinari-1751987091452-u9xextjfqGddpnwMxFU6rvDnIQLPDg.jpg",
              link: "elena-molinari",
            },
            {
              name: "Christopher Butler noted the need to educate others on what design actually is",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-christopher-butler-1761919351263-AmK2Qr4Q2c3rkD7EvYntBleQHL1mjU.jpg",
              link: "christopher-butler",
            },
          ]}
          insight="Designers are often both practitioners and advocates."
        />
      </Section>
    </>
  );
}
