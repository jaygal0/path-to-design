import Link from "next/link";
import { Suspense } from "react";

async function getData() {
  const res = await fetch('http://localhost:3000/api/stories', { cache: 'no-store' })
  const data = await res.json()
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return data
}

export default async function Home() {
  const data = await getData()
  console.log(data);

  return (
    <>
      <section className="w-100 h-100 grid place-items-center">
        <h1 className="text-4xl font-bold" >
          Figure out how successful designers got their start.
        </h1>
      </section>
      {
        data.map((designer: any, index: any) => {
          return (
            <Suspense fallback={"Loading..."}>
              <div key={designer.id}>
                <Link href={`/stories/${designer.id}`}>
                  <div>
                    <p>{index + 1}</p>
                    <h1>{designer.firstName} {designer.lastName}</h1>
                    {designer.info.company ?
                      <p>{designer.info.position} at {designer.info.company}</p> :
                      <p>Self-employed</p>
                    }
                    <p>{designer.datePosted}</p>
                    {designer.info.yearlySalary ?
                      <p>{designer.info.yearlySalary}</p> :
                      <p>Non-disclosed</p>
                    }

                  </div>
                </Link>
              </div>
            </Suspense>
          )
        })
      }
    </>
  );
}
