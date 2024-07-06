import prisma from "@/lib/db";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const data = await prisma.designers.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      companies: true,
      roles: true,
      salaries: true,
    },
  });
  return Response.json(data);
}
