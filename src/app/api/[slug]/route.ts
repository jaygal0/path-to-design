import prisma from "@/lib/db";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const designer = prisma.designers.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      company: true,
    },
  });
  return Response.json(designer);
}
