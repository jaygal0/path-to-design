import { CardDesigner } from "../components/global/CardDesigner";
import Image from "next/image";
import { Button } from "../components/global/Button";

async function getData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/designers`, {
    next: {
      revalidate: 60,
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}

export default async function Home() {
  const designers = await getData();

  const filterNames = ["Joshua", "Shannel", "Amalie", "Joacim", "Kavé"]; // Select which designers to present on the first page

  return (
    <>
      <div className="text-gradient col-span-full col-start-1 row-span-1 row-start-1 mb-8 h-[100vh] max-h-[1080px] content-end pb-36 text-4xl font-bold leading-tight md:col-span-6 md:col-start-2 xl:col-span-7 xl:col-start-2 xl:text-5xl xl:leading-tight">
        <div className="mb-2 flex items-center gap-4">
          <div className="flex -space-x-2">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-50">
              <Image
                src="/profiles/joshua-galinato.jpg"
                fill
                alt="Profile image of Joshua Galinato"
                sizes="(max-width: 768px) 100vw, 50vw" // Sizes for different breakpoints
                priority
              />
            </div>
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-50">
              <Image
                src="/profiles/shannel-wheeler.jpg"
                fill
                alt="Profile image of designer"
                sizes="(max-width: 768px) 100vw, 50vw" // Sizes for different breakpoints
                priority
              />
            </div>
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-50">
              <Image
                src="/profiles/joacim-bohlander.jpg"
                fill
                alt="Profile image of designer"
                sizes="(max-width: 768px) 100vw, 50vw" // Sizes for different breakpoints
                priority
              />
            </div>
          </div>
          <div className="w-4/5 border-b-2"></div>
        </div>
        <h1>
          Helping designers navigate the industry by following the paths of
          successful designers.
        </h1>
      </div>
      <div className="col-span-full col-start-1 row-span-1 row-start-2 my-20 text-5xl font-bold md:col-span-6 md:col-start-2 md:text-6xl xl:col-start-4 xl:col-end-11 xl:text-7xl xl:leading-tight">
        <div className="flex h-min gap-6">
          <div className="line-gradient min-h-full w-12 rounded-sm"></div>
          <h2>
            We understand that it can be hard to{" "}
            <span className="text-gradient">find work</span>,{" "}
            <span className="text-gradient">be creative</span>, or{" "}
            <span className="text-gradient">stay inspired</span> as a designer.
          </h2>
        </div>
      </div>
      <p className="col-span-full col-start-1 row-span-1 row-start-3 mb-8 mt-10 text-2xl md:col-span-5 md:col-start-3 xl:col-start-6 xl:col-end-11 xl:mb-96">
        That&apos;s why we built this site – to give you insight into what
        successful designers are doing to thrive in the industry, so you no
        longer have to worry about where to find this information.
      </p>
      <div className="col-span-full col-start-1 row-span-1 row-start-4 my-20 hidden md:col-span-6 md:col-start-2 xl:col-start-8 xl:col-end-12 xl:block xl:translate-y-[-300px] xl:leading-tight">
        <Image
          src="/home-page/apps.png"
          alt="An image of apps designers use"
          width={461}
          height={477}
        />
      </div>
      <div className="col-span-full col-start-1 row-span-1 row-start-4 my-20 md:col-span-6 md:col-start-2 xl:col-start-2 xl:col-end-8 xl:leading-tight">
        <Image
          src="/home-page/apps.png"
          alt="An image of apps designers use"
          width={461}
          height={477}
          className="mb-24 pl-2 xl:hidden"
        />
        <h3 className="mb-4 text-5xl font-bold md:text-6xl xl:text-7xl">
          <span className="text-gradient">Essential apps</span> for designers
        </h3>
        <p className="mb-20 text-2xl">
          Discover the industry’s go-to design tools—explore the apps that power
          creativity and efficiency
        </p>
        <Button label="Explore Apps" url="/apps" isSecondary />
      </div>
      <h3 className="col-span-full col-start-1 row-span-1 row-start-5 mb-8 mt-20 text-4xl font-bold leading-tight md:col-span-5 md:col-start-2 xl:col-span-6 xl:col-start-3 xl:text-5xl xl:leading-tight">
        <span className="text-gradient">Books that inspire</span> designers
      </h3>
      <div className="col-span-full col-start-1 row-span-1 row-start-6 mb-24 md:col-span-5 md:col-start-3 xl:col-span-5 xl:col-start-5">
        <p className="mb-20 text-2xl">
          Discover the books that have shaped the careers of top designers—fuel
          your creativity and grow your skills with expert-recommended reads.
        </p>
        <Button label="Explore Books" url="/books" isSecondary />
      </div>

      <h3 className="col-span-full col-start-1 row-span-1 row-start-7 mb-10 mt-20 text-4xl font-bold leading-tight md:col-span-5 md:col-start-2 xl:col-span-6 xl:col-start-2 xl:text-5xl xl:leading-tight">
        <span className="text-gradient">Take charge of your career</span> by
        understanding the paths designers took to be{" "}
        <span className="text-gradient">successful</span>.
      </h3>

      <div className="col-span-full col-start-1 row-span-1 row-start-8 mb-40 flex flex-col gap-8 md:col-span-4 md:col-start-3 xl:col-start-3 xl:col-end-10">
        <p className="mb-20 text-2xl">
          Start exploring the inspiring journeys of successful designers and
          uncover the strategies they used to thrive in the competitive design
          industry.
        </p>
        {designers
          .filter((designer: any) => filterNames.includes(designer.firstName))
          .slice(0, 5)
          .map((designer: any, index: any) => {
            const {
              companies,
              country,
              createdAt,
              firstName,
              id,
              isPublished,
              lastName,
              roles,
              slug,
              updatedAt,
              coverImage,
              profileImage,
            } = designer;

            return (
              <div key={id}>
                {isPublished && (
                  <CardDesigner
                    company={companies.company}
                    country={country}
                    profileImage={profileImage}
                    coverImage={coverImage}
                    createdAt={createdAt}
                    firstName={firstName}
                    id={id}
                    lastName={lastName}
                    role={roles?.role}
                    slug={slug}
                    updatedAt={updatedAt}
                  />
                )}
              </div>
            );
          })}
        <div className="flex w-full py-4 lg:justify-center">
          <Button label="View more" url="/designers" isSecondary />
        </div>
      </div>
    </>
  );
}
