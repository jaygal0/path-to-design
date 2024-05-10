import Link from "next/link";

async function getData() {
  const res = await fetch('http://localhost:3000/api/stories')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const stories = await getData()
  const { data } = stories

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>Figure out how successful designers got their start.</section>
      {data.map((designer: any, index: any) => {
        return (
          <Link href={`/stories/${designer.lastName.toLowerCase()}-${designer.firstName.toLowerCase()}`}>
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
        )
      })}

    </main>
  );
}
