import { Heading } from "../../../../components/global/Heading";
import { CardDesigner } from "../../../../components/CardDesigner";

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

export default async function Page() {
  const designers = await getData();

  return (
    <div className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-screen flex-col justify-start py-64 md:col-span-6 md:col-start-2 xl:col-span-6 xl:col-start-4 xl:pt-72">
      <Heading
        heading="Designers"
        desc="Start exploring the inspiring journeys of successful designers and uncover the strategies they used to thrive in the competitive design industry."
      />
      <div className="col-span-full col-start-1 row-span-1 row-start-6 mb-40 flex flex-col gap-8 md:col-span-4 md:col-start-3 xl:col-start-3 xl:col-end-10">
        {designers.map((designer: any, index: any) => {
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
            profileImage,
            coverImage,
          } = designer;

          return (
            <div key={id}>
              {isPublished && (
                <CardDesigner
                  company={companies?.company}
                  country={country}
                  createdAt={createdAt}
                  firstName={firstName}
                  id={id}
                  lastName={lastName}
                  role={roles?.role}
                  slug={slug}
                  updatedAt={updatedAt}
                  coverImage={coverImage}
                  profileImage={profileImage}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
