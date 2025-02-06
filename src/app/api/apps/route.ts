import prisma from "@/lib/db";

export async function GET(req: Request) {
  try {
    const data = await prisma.apps.findMany({
      include: {
        designers: true,
      },
    });

    // Sort the data based on the length of designers array
    const sortedData = data.sort(
      (a, b) => b.designers.length - a.designers.length,
    );

    return Response.json(sortedData);
  } catch (error) {
    console.error("Failed to fetch apps:", error);
    return Response.json({ error: "Failed to fetch apps" }, { status: 500 });
  }
}
