import { CardDesigner } from "./components/CardDesigner"
import { Hero } from "./components/Hero"

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
      <Hero />
      {
        data.map((designer: any, index: any) => {
          const { id, firstName, lastName, datePosted, contact, info } = designer
          return <CardDesigner key={index} index={index} id={id} firstName={firstName} lastName={lastName} datePosted={datePosted} contact={contact} info={info} />
        })
      }
    </>
  );
}
