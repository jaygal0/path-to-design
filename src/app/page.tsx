import { CardDesigner } from "../../components/CardDesigner";
import Image from "next/image";

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

  return (
    <>
      <div className="text-gradient col-span-full col-start-1 row-span-1 row-start-1 mb-8 h-[100vh] max-h-[1080px] content-end pb-36 text-4xl font-bold leading-tight md:col-span-6 md:col-start-2 lg:col-span-7 lg:col-start-2 lg:text-5xl lg:leading-tight">
        <div className="mb-2 flex items-center gap-4">
          <div className="flex -space-x-2">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-50">
              <Image
                src="/profile-joshua-galinato.png"
                fill
                alt="Profile image of Joshua Galinato"
              />
            </div>
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-50">
              <Image
                src="/profile-joacim-bohlander.png"
                fill
                alt="Profile image of Joacim Bolhander"
              />
            </div>
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-50">
              <Image
                src="/profile-faj-mac.png"
                fill
                alt="Profile image of Faj Mac"
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
      <div className="col-span-full col-start-1 row-span-1 row-start-2 my-20 text-5xl font-bold md:col-span-6 md:col-start-2 md:text-6xl lg:col-start-4 lg:col-end-11 lg:text-7xl lg:leading-tight">
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
      <p className="col-span-full col-start-1 row-span-1 row-start-3 my-10 text-2xl md:col-span-5 md:col-start-3 lg:col-start-6 lg:col-end-11">
        That’s why we built this site – to give you insight into what successful
        designers are doing to thrive in the industry, so you no longer have to
        worry about where to find this information.
      </p>

      {/* FORM */}

      {/* <div className="col-span-full col-start-1 row-span-1 row-start-4 my-20 h-min rounded-2xl border p-8 md:col-span-6 md:col-start-2 lg:col-start-4 lg:col-end-10">
        <h4 className="mb-2 w-full pb-6 text-3xl font-normal">
          Stay inspired and discover the paths of more designers.
        </h4>
        <form
          className="flex w-full flex-col"
          action="https://pathtodesign.us17.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="e41d9cf2ed34317e99e5891b9" />
          <input type="hidden" name="id" value="9437e60fa0" />
          <div className="flex gap-4">
            <input
              className="w-full border-b-2 border-black p-2 text-stone-950"
              type="email"
              id="MERGE0"
              name="MERGE0"
              placeholder="name@email.com"
            />
            <button
              className="btn-gradient mt-2 w-2/3 cursor-pointer rounded-sm p-2 text-stone-950 hover:bg-slate-300"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div> */}
      <h2 className="col-span-full col-start-1 row-span-1 row-start-5 my-20 text-4xl font-bold leading-tight md:col-span-5 md:col-start-2 lg:col-span-6 lg:col-start-2 lg:text-5xl lg:leading-tight">
        <span className="text-gradient">Take charge of your career</span> by
        understanding the paths designers took to be{" "}
        <span className="text-gradient">successful</span>.
      </h2>
      <div className="col-span-full col-start-1 row-span-1 row-start-6 mb-40 flex flex-col gap-8 md:col-span-4 md:col-start-3 lg:col-start-3 lg:col-end-10">
        {designers.map((designer: any, index: any) => {
          const {
            companies,
            countries,
            createdAt,
            firstName,
            id,
            isPublished,
            lastName,
            roles,
            salaries,
            slug,
            updatedAt,
          } = designer;

          return (
            <div key={id}>
              {isPublished && (
                <CardDesigner
                  company={companies.company}
                  country={countries?.country}
                  createdAt={createdAt}
                  firstName={firstName}
                  id={id}
                  lastName={lastName}
                  role={roles?.role}
                  salary={salaries?.salary}
                  slug={slug}
                  updatedAt={updatedAt}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
