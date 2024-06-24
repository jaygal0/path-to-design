async function getData() {
  const res = await fetch("http://localhost:3000/api/stories");
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}
export default async function About() {
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
