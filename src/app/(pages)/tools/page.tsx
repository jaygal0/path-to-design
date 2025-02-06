import { Heading } from "../../../../components/global/Heading";
import AppItem from "@/../components/tools/AppItem";

async function getData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/apps`, {
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
  const apps = await getData();

  return (
    <div className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-screen flex-col justify-start py-64 md:col-span-6 md:col-start-2 xl:col-span-6 xl:col-start-4 xl:pt-72">
      <Heading
        heading="Tools"
        desc="Discover the must-have tools and software that professional designers rely on to stay creative, efficient, and ahead in the design world."
      />
      <div className="flex flex-col gap-14">
        {apps.map((tool: any, index: number) => (
          <AppItem key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
}
