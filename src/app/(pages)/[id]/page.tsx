import { DesignerDetailBox } from "@/app/components/DesignerDetailBox"
import { DetailQuestions } from "@/app/components/DetailQuestions"
import Image from "next/image"

async function getData(id: string) {
    const res = await fetch(`http://localhost:3000/api/${id}`, { cache: "no-store" })
    const data = await res.json()
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return data
}

export default async function Story({ params }: any) {
    const story = await getData(params.id)

    const { id, firstName, lastName, datePosted, contact, info } = story

    return (
        <>
            <h1 className="text-6xl font-bold leading-tight pt-60 pb-20">"{info.oneLiner}"</h1>
            <DesignerDetailBox firstName={firstName} lastName={lastName} contact={contact} info={info} />
            <div className="relative w-full h-96 mt-10 mb-10 rounded-lg overflow-hidden">
                <Image
                    fill
                    src="https://dummyimage.com/600x400/000/fff.jpg"
                    alt={`An image of ${firstName} ${lastName}'s portfolio`}
                    objectFit="cover"
                />
            </div>
            <div>
                <DetailQuestions question="How did you get started?" answer={info.getStarted} />
                <DetailQuestions question="How did you stay inspired?" answer={info.stayInspired} />
                <DetailQuestions question="What advice would you give to your younger self?" answer={info.advice} />
                <DetailQuestions question="Do you have any regrets?" answer={info.regret} />
                <DetailQuestions question="What apps do you use?" apps={info.apps} />
                <DetailQuestions question="What apps do you use?" books={info.books} />
            </div>
        </>
    );
}
