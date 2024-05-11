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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>{id}</p>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{info.advice}</p>
        </main>
    );
}
