import BrowseApp from "@/components/directory/BrowseApp";
import { notFound } from "next/navigation";

export default async function AppDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const res = await fetch(`${process.env.WEB_SITE}/api/apps/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    notFound();
  }

  const app = await res.json();

  return <BrowseApp app={app} />;
}
