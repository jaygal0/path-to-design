async function getData(postId: string) {
    // TODO: Figure out why this is not working
    const res = await fetch(`http://localhost:3000/api/stories/${postId}`)
    const data = await res.json()
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return data.data
}

export default async function Story({ params }: any) {
    const info = await getData(params.id)

    console.log(info);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>{params.id}</p>
        </main>
    );
}
