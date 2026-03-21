import { getBlogSitemapXml, xmlResponse } from "@/lib/sitemap";

export const revalidate = 3600;

export async function GET() {
  return xmlResponse(await getBlogSitemapXml());
}
