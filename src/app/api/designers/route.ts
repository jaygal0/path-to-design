import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.designers.findMany({
      include: {
        companies: true,
        roles: true,
      },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch designers", details: error },
      { status: 500 },
    );
  }
}

export async function POST(req: { json: () => any }) {
  try {
    const data = await req.json();
    const designer = await prisma.designers.create({
      data,
    });
    return NextResponse.json({ success: true, designer });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 },
    );
  }
}
