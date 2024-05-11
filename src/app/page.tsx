import { CardDesigner } from "./components/CardDesigner"

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

  return (
    <>
      <section className="w-100 h-100 grid place-items-center">
        <h1 className="text-4xl font-bold" >
          Figure out how successful designers got their start.
        </h1>
      </section>
      {
        data.map((designer: any, index: any) => {
          const { id, firstName, lastName, datePosted, contact, info } = designer
          return <CardDesigner key={index} index={index} id={id} firstName={firstName} lastName={lastName} datePosted={datePosted} contact={contact} info={info} />


        })
      }
    </>
  );
}
