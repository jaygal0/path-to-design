import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug.toLowerCase();

  const book = await prisma.books.findUnique({
    where: { slug },
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
