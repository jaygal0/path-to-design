// app/browse/page.tsx
import BrowseDesigners from "@/components/directory/BrowseDesigners";
import { fetchSafe } from "@/lib/fetchSafe";

async function getData() {
  const designers = await fetchSafe(
    `${process.env.WEB_SITE}/api/designers`,
    {
      next: { revalidate: 86400 },
    },
    [],
  );

  return { designers };
}

export default async function BrowsePageWrapper({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { designers } = await getData();
  const { role } = await searchParams;

  return <BrowseDesigners designers={designers} initialRoleKey={role} />;
}
