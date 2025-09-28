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

    // Determine the role to save (custom or selected)
    const roleToSave = role === "Other" ? customRole : role;

    const result = await prisma.$transaction(async (tx) => {
      let existingCompany = null;

      // Only create a company if the company name is provided
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

      // Check if role exists
      let existingRole = await tx.roles.findFirst({
        where: { role: roleToSave },
      });

      if (!existingRole) {
        existingRole = await tx.roles.create({
          data: { role: roleToSave },
        });
      }

      // Create designer with or without company association
      const designer = await tx.designers.create({
        data: {
          firstName,
          lastName,
          email,
          website,
          companiesId: existingCompany ? existingCompany.id : null, // Assign only if a company exists
          rolesId: existingRole.id, // Ensure this matches your schema
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
