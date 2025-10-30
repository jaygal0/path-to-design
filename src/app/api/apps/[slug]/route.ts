import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug.toLowerCase();

  const app = await prisma.apps.findUnique({
    where: { slug },
    include: {
      designers: {
        include: { roles: true, companies: true },
      },
    },
  });

  if (!app) {
    return NextResponse.json({ error: "App not found" }, { status: 404 });
  }

  return NextResponse.json(app);
}
