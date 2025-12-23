import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;

  const book = await prisma.products.findUnique({
    where: { slug: slug.toLowerCase() },
    include: {
      designers: {
        include: { roles: true, companies: true },
      },
    },
  });

  if (!book) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  return NextResponse.json(book);
}
