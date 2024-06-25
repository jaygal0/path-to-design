async function getData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/stories`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}

export default async function Stories() {
  const data = await getData();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Stories</h1>
      {data.map((designer: any) => {
        return <div key={designer.id}>{designer.firstName}</div>;
      })}
    </div>
  );
}
