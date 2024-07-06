import prisma from "@/lib/db";

export async function GET(req: Request) {
  const data = await prisma.designers.findMany({
    include: {
      companies: true,
      salaries: true,
      roles: true,
    },
    orderBy: { createdAt: "asc" },
  });
  return Response.json(data);
}
