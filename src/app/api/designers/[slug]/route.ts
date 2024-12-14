import prisma from "@/lib/db";

export async function GET(_request: Request, props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
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
