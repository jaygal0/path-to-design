// app/best-design-apps/page.tsx
import BrowseApps from "@/components/directory/BrowseApps";
import { fetchSafe } from "@/lib/fetchSafe";

async function getData() {
  const apps = await fetchSafe(
    `${process.env.WEB_SITE}/api/apps`,
    {
      next: { revalidate: 86400 },
    },
    [],
  );

  return { apps };
}

export default async function BrowseAppsWrapper() {
  const { apps } = await getData();
  return <BrowseApps apps={apps} />;
}
