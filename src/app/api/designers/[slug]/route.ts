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
      apps: true,
      answers: {
        include: {
          questions: true, // Include the related question for each answer
        },
      },
      books: true,
      companies: true,
      countries: true,
      roles: true,
      salaries: true,
    },
  });
  return Response.json(data);
}
