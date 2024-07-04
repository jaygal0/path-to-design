import prisma from "@/lib/db";

export async function GET(req: Request) {
  const result = await prisma.designers.findMany({
    include: {
      company: true,
    },
    orderBy: { createdAt: "asc" },
  });
  return Response.json(result);
}
