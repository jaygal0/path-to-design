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
