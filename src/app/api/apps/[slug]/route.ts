import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug.toLowerCase();

  const app = await prisma.apps.findFirst({
    where: { app: { equals: slug, mode: "insensitive" } },
    include: { designers: true },
  });

  if (!app) {
    return NextResponse.json({ error: "App not found" }, { status: 404 });
  }

  return NextResponse.json(app);
}
