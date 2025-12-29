import { fetchSafe } from "@/lib/fetchSafe";
import Pattern from "@/components/clarity/Pattern";
import Section from "@/components/clarity/Section";

export default async function Clarity() {
  const designers = await fetchSafe(
    `${process.env.WEB_SITE}/api/designers`,
    { next: { revalidate: 86400 } },
    [],
  );
  const designersCount = designers.length;
  return (
    <>
      <div className="mx-auto mb-48 w-2/3 space-y-5 px-32 text-center">
        <h1 className="text-7xl font-bold">
          Patterns from real design careers
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          This guide is based on recurring patterns from {designersCount}{" "}
          designers across different roles. Find clarity in your own path by
          seeing what consistently showed up when designers reflected honestly
          on their careers.
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
      <Section
        heading="What designers wish they knew earlier"
        summary="The advice designers give their younger selves is less about shortcuts and more about endurance. Start earlier, focus on fundamentals, and keep showing up. The careers that last were not built through perfection or acceleration, but through curiosity, repetition, and sustained effort."
      >
        <Pattern
          patternNumber={1}
          heading="Start before you feel ready"
          description="Across roles and seniority levels, designers consistently advise starting early and imperfectly. Waiting for confidence, permission, or mastery was one of the most common things they wished they had not done."
          bullets={[
            "Beginning without a degree, title, or ideal setup",
            "Learning through making, experimenting, and failing",
            "Letting confidence grow through repetition",
          ]}
          designers={[
            {
              name: "Vivek Kumar emphasised starting without permission and learning in public",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-vivek-kumar-1744446912597-98eFQMfZRZiac20OmXcp4quuyJESiK.jpeg",
              link: "vivek-kumar",
            },
            {
              name: "Elena Molinari encouraged messy prototypes and early experimentation",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-elena-molinari-1751987091452-u9xextjfqGddpnwMxFU6rvDnIQLPDg.jpg",
              link: "elena-molinari",
            },
            {
              name: "Florian Froehlich advised starting anywhere, even if it was not the final goal",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-florian-froehlich-1761276570591-U9wA0hZKQqZngoS6L69HulIokMtkdG.jpg",
              link: "florian-froehlich",
            },
          ]}
          insight="Momentum mattered more than readiness."
        />
        <Pattern
          patternNumber={2}
          heading="Focus on fundamentals, not tools or polish"
          description="Many designers warned against obsessing over tools, trends, or visual perfection early on. Instead, they stressed understanding problems, people, and decision making."
          bullets={[
            "Prioritising problem solving over aesthetics",
            "Learning how products, businesses, and users work",
            "Letting tools change without chasing them",
          ]}
          designers={[
            {
              name: "Anton Sten advised chasing understanding, not software",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-anton-sten-1766905186695-UGHsphuPaOxr6rnW1FVReGmNxjsBCq.jpeg",
              link: "anton-sten",
            },
            {
              name: "Raphael Diftopoulos stressed clarity over decoration",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-raphael-diftopoulos-1761659668182-dHT0vxGU2zD0RpUNnPx7UbIVKDZbZM.png",
              link: "raphael-diftopoulos",
            },
            {
              name: "Elisa Paduraru highlighted thinking like a designer rather than mastering tools",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-elisa-paduraru-1761214434073-EO7LnzfXUXcY8hQGlWpEgX4IelRsHD.jpg",
              link: "elisa-paduraru",
            },
          ]}
          insight="Taste and judgement compound longer than tools."
        />
        <Pattern
          patternNumber={3}
          heading="Consistency and curiosity beat talent"
          description="Designers repeatedly pointed to steady effort and curiosity as the real differentiators over time. Talent alone was rarely mentioned as decisive."
          bullets={[
            "Creating regularly, even when work felt average",
            "Seeking feedback and staying open to learning",
            "Trusting individual perspective rather than comparison",
          ]}
          designers={[
            {
              name: "Joacim Bohlander emphasised creating more to stand out",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-joacim-bohlander-bBthgRmlYBXVonKNnV36j8liCOSBlz.jpg",
              link: "joacim-bohlander",
            },
            {
              name: "Igor Dinuzzi noted that consistency beats talent when talent is inconsistent",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-igor-dinuzzi-1764515489837-vNJN63jFmj2MADiAml1g5oGnDih7PM.jpg",
              link: "igor-dinuzzi",
            },
            {
              name: "Amalie Mørch encouraged trusting one’s own ideas and voice",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-amalie-m%C3%B8rch-rnYrwSetGA3xqyZUV2frJrETBgkxUQ.jpg",
              link: "amalie-morch",
            },
          ]}
          insight="Careers are built through accumulation, not breakthroughs."
        />
      </Section>
      <Section
        heading="What designers regret, looking back"
        summary="Regret rarely centred on choosing the wrong path. Instead, it focused on hesitation, misplaced priorities, and delayed confidence. Over time, many designers came to see these moments not as failures, but as necessary steps that clarified what kind of designer they wanted to become."
      >
        <Pattern
          patternNumber={1}
          heading="Most regrets are about starting later or holding back"
          description="Many designers said they had few or no regrets, but when regrets did appear, they were often about hesitation rather than wrong decisions. Self doubt, waiting for confidence, or delaying action showed up repeatedly."
          bullets={[
            "Not starting earlier",
            "Holding back due to self doubt",
            "Waiting for permission or validation",
          ]}
          designers={[
            {
              name: "Florian Bölter wished he had attempted design earlier instead of holding himself back",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-florian-bo%CC%88lter-RJgWGuFYI9rcetg7S2KiqhcwVwGYvn.jpg",
              link: "florian-blter",
            },
            {
              name: "Xinyue Gu regretted not trusting her interest in design sooner",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-xinyue-gu-1765769752295-jVlnegTY4ZLESswqp37pXK4XUO1ZYc.jpg",
              link: "xinyue-gu",
            },
            {
              name: "Luke Wittig described self doubt as something that repeatedly slowed his progress",

              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-luke-wittig-1762368056371-xT38Rn6Rkevd3rZ0vsn4hqFeEtFMwR.jpg",
              link: "luke-wittig",
            },
          ]}
          insight="The most common regret was not acting sooner."
        />
        <Pattern
          patternNumber={2}
          heading="Trusting external validation over judgement slowed growth"
          description="Several designers reflected on over indexing on tools, titles, companies, or approval from others. In hindsight, this delayed the development of confidence, taste, and independent judgement."
          bullets={[
            "Chasing tools, trends, or credentials",
            "Staying too long in environments that limited growth",
            "Seeking approval instead of speaking up",
          ]}
          designers={[
            {
              name: "Anton Sten wished he had trusted his judgement earlier rather than loud voices or titles",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-anton-sten-1766905186695-UGHsphuPaOxr6rnW1FVReGmNxjsBCq.jpeg",
              link: "anton-sten",
            },
            {
              name: "Nizar Frank Talovic regretted focusing on tools instead of human behaviour",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-nizar-frank%20talovic-1741216595681-8v0f82EzuL821QBaobFh75JFMzJsN1.jpeg",
              link: "nizar-frank-talovic",
            },
            {
              name: "Raphael Diftopoulos regretted not speaking up and challenging assumptions sooner",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-raphael-diftopoulos-1761659668182-dHT0vxGU2zD0RpUNnPx7UbIVKDZbZM.png",
              link: "raphael-diftopoulos",
            },
          ]}
          insight="Judgement compounds faster when it is exercised early."
        />
        <Pattern
          patternNumber={3}
          heading="Many designers reframed regrets as lessons"
          description="A large portion of designers explicitly stated they had no regrets. Instead, they viewed missteps as necessary experiences that shaped their perspective, skills, and values."
          bullets={[
            "Seeing mistakes as part of growth",
            "Reframing setbacks as learning",
            "Accepting non linear career paths",
          ]}
          designers={[
            {
              name: "Christopher Butler reflected on prioritising reputation over craft, then recalibrating",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-christopher-butler-1761919351263-AmK2Qr4Q2c3rkD7EvYntBleQHL1mjU.jpg",
              link: "christopher-butler",
            },
            {
              name: "Elisa Paduraru described early focus on visuals as a lesson in seeking clarity",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-elisa-paduraru-1761214434073-EO7LnzfXUXcY8hQGlWpEgX4IelRsHD.jpg",
              link: "elisa-paduraru",
            },
            {
              name: "Igor Dinuzzi framed regrets as lessons rather than failures",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-igor-dinuzzi-1764515489837-vNJN63jFmj2MADiAml1g5oGnDih7PM.jpg",
              link: "igor-dinuzzi",
            },
          ]}
          insight="For most designers, regrets softened into perspective over time."
        />
      </Section>
      <Section
        heading="How designers stay inspired over time"
        summary="Inspiration is less about shortcuts and more about endurance. Start earlier, focus on fundamentals, and keep showing up. The careers that last were not built through perfection or acceleration, but through curiosity, repetition, and sustained effort."
      >
        <Pattern
          patternNumber={1}
          heading="Inspiration comes from outside design itself"
          description="Many designers actively look beyond design feeds and trends. Inspiration is often found in everyday life, other disciplines, and observing how the world works rather than browsing polished work."
          bullets={[
            "Nature, travel, architecture, film, and music",
            "Observing real world systems, services, and behaviours",
            "Drawing ideas from unrelated creative fields",
          ]}
          designers={[
            {
              name: "Anton Sten focused on real world friction, writing, and user conversations",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-anton-sten-1766905186695-UGHsphuPaOxr6rnW1FVReGmNxjsBCq.jpeg",
              link: "anton-sten",
            },
            {
              name: "Luke Wittig found inspiration in nature, films, and non design work",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-luke-wittig-1762368056371-xT38Rn6Rkevd3rZ0vsn4hqFeEtFMwR.jpg",
              link: "luke-wittig",
            },
            {
              name: "Igor Dinuzzi looked to music, architecture, travel, and everyday objects",

              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-igor-dinuzzi-1764515489837-vNJN63jFmj2MADiAml1g5oGnDih7PM.jpg",
              link: "igor-dinuzzi",
            },
          ]}
          insight="Inspiration deepens when designers stop looking only at design."
        />
        <Pattern
          patternNumber={2}
          heading="Curiosity and learning are ongoing fuel"
          description="Staying inspired was rarely framed as a passive state. Designers described it as an active practice built around learning, exploration, and staying curious over time."
          bullets={[
            "Reading articles, newsletters, and case studies",
            "Exploring new tools, products, and technologies",
            "Studying how problems are framed and solved",
          ]}
          designers={[
            {
              name: "Pascal Strasche stayed inspired through constant curiosity and learning",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-pascal-strasche-1760083622967-qTFPIlF9nsH9SYMxMlQblx8LkRYhfR.jpg",
              link: "pascal-strasche",
            },
            {
              name: "Sofia Mateo Ortega explored apps, onboarding flows, and microinteractions",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-sofia-mateo%20ortega-1757242055442-FZwlti39KupLhuoWQ6xomcFAo1uXTw.png",
              link: "sofia-mateo-ortega",
            },
            {
              name: "Elias Gustavsson focused on learning new ways to view problems",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-elias-gustavsson-8AppIc2mIyFqvBOT6uqmJocJoQ65d9.jpg",
              link: "elias-gustavsson",
            },
          ]}
          insight="Inspiration is maintained through deliberate curiosity, not motivation."
        />
        <Pattern
          patternNumber={3}
          heading="Community, reflection, and rest matter more than volume"
          description="Many designers described inspiration as something that emerges through conversation, reflection, and stepping away from screens rather than constant consumption."
          bullets={[
            "Talking with other designers and sharing experiences",
            "Writing, reflecting, or making personal work",
            "Disconnecting, resting, or slowing down",
          ]}
          designers={[
            {
              name: "Vivek Kumar found inspiration through rest, travel, and disconnection",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-vivek-kumar-1744446912597-98eFQMfZRZiac20OmXcp4quuyJESiK.jpeg",
              link: "vivek-kumar",
            },
            {
              name: "Christopher Butler stayed inspired by making art and talking to other designers",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-christopher-butler-1761919351263-AmK2Qr4Q2c3rkD7EvYntBleQHL1mjU.jpg",
              link: "christopher-butler",
            },
            {
              name: "Shannel Wheeler highlighted purpose, community, and meaningful impact",
              image:
                "https://gdr5kmlmoz47c9q7.public.blob.vercel-storage.com/profiles/profile-shannel-wheeler-A04wbOfhOahx2Dd7uEfCd0nS8y7yjs.jpg",
              link: "shannel-wheeler",
            },
          ]}
          insight="Sustainable inspiration comes from space, not saturation."
        />
      </Section>
    </>
  );
}
