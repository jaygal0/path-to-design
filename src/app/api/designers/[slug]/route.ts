import prisma from "@/lib/db";

export async function GET(
  _request: Request,
  props: { params: Promise<{ slug: string }> },
) {
  const params = await props.params;
  const data = await prisma.designers.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      apps: true,
      books: true,
      products: true,
      companies: true,
      roles: true,
    },
  });
  return Response.json(data);
}
