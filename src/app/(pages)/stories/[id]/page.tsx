import { DesignerDetailBox } from "@/app/components/DesignerDetailBox"

async function getData(id: string) {
    const res = await fetch(`http://localhost:3000/api/stories/${id}`, { cache: "no-store" })
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
            <h1 className="text-6xl font-bold leading-tight pt-60 pb-20">{info.oneLiner}</h1>
            <div className="flex justify-between p-5 bg-slate-400 rounded-md">
                <div className="flex gap-4">
                    <div className="h-20 w-20 bg-slate-50 rounded-full"></div>
                    <div className="flex flex-col justify-center">
                        <div className="text-xl font-semibold">{firstName} {lastName}</div>
                        <div>{info.position} at {info.company}</div>
                        <a className="underline" href={info.personalSite} target="_blank">
                            {info.personalSite}
                        </a>
                    </div>
                </div>
                <DesignerDetailBox info={info} contact={contact} />

            </div>
        </>
    );
}
