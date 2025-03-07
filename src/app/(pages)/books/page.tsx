import { Heading } from "../../../../components/global/Heading";
import AppItem from "../../../../components/apps/AppItem";
import BookItem from "../../../../components/books/BookItem";

async function getData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/books`, {
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
  const books = await getData();
  return (
    <div className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-screen flex-col justify-start py-64 md:col-span-6 md:col-start-2 xl:col-span-6 xl:col-start-4 xl:pt-72">
      <Heading
        heading="Books"
        desc="Discover the books that have inspired and helped designers in their careers."
      />
      <div className="flex flex-col gap-14">
        {books.map((item: any, index: number) => (
          <BookItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
