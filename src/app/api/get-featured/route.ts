import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      website,
      company,
      companySize,
      companyUrl,
      role,
      customRole,
      linkedin,
      instagram,
      x,
      dribbble,
      country,
      appsText,
      booksText,
      productsText,
      getStarted,
      responsibilities,
      difficulties,
      incorporateApps,
      advice,
      regrets,
      stayInspired,
      oneLiner,
      profileImage,
      coverImage,
    } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const roleToSave = role === "Other" ? customRole : role;

    const result = await prisma.$transaction(async (tx) => {
      let existingCompany = null;

      // Only create company if provided
      if (company && company.trim() !== "") {
        existingCompany = await tx.companies.findFirst({
          where: { company },
        });

        if (!existingCompany) {
          existingCompany = await tx.companies.create({
            data: { company, url: companyUrl, companySize },
          });
        }
      }

      // Check or create role
      let existingRole = await tx.roles.findFirst({
        where: { role: roleToSave },
      });

      if (!existingRole) {
        existingRole = await tx.roles.create({
          data: { role: roleToSave },
        });
      }

      // Create designer
      const designer = await tx.designers.create({
        data: {
          firstName,
          lastName,
          email,
          website,
          country,
          linkedin,
          instagram,
          x,
          dribbble,
          appsText,
          booksText,
          productsText,
          getStarted,
          responsibilities,
          difficulties,
          incorporateApps,
          advice,
          regrets,
          stayInspired,
          oneLiner,
          profileImage,
          coverImage,
          companies: existingCompany
            ? { connect: { id: existingCompany.id } }
            : undefined,
          roles: { connect: { id: existingRole.id } },
        },
      });

      return { designer, existingCompany, existingRole };
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Transaction error:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
