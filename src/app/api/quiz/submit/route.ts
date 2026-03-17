import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

import prisma from "@/lib/db";
import { sendQuizResultEmail } from "@/lib/email/sendQuizResultEmail";
import { isRoleKey } from "@/lib/roles";

interface QuizSubmitBody {
  email?: string;
  answers?: number[];
  role?: string;
  experience?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuizSubmitBody;
    const email = body.email?.trim().toLowerCase();
    const answers = body.answers;
    const role = body.role;
    const experience = body.experience?.trim();

    if (!email || !answers || !Array.isArray(answers) || !role || !experience) {
      return NextResponse.json(
        { error: "Missing required quiz submission fields." },
        { status: 400 },
      );
    }

    if (!isRoleKey(role)) {
      return NextResponse.json({ error: "Invalid role." }, { status: 400 });
    }

    const subscriber = await prisma.subscriber.upsert({
      where: { email },
      update: {
        role,
        experience,
        answers,
        source: "quiz",
        status: "active",
      },
      create: {
        email,
        role,
        experience,
        answers,
        source: "quiz",
        status: "active",
      },
    });

    await sendQuizResultEmail(subscriber);

    // Expand tracking here later if you want to connect delivery, open, or
    // click events from the email provider.
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quiz submission failed:", error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2021") {
        return NextResponse.json(
          {
            error:
              "The quiz subscriber tables do not exist yet. Run the latest Prisma migration first.",
          },
          { status: 500 },
        );
      }
    }

    if (error instanceof Prisma.PrismaClientInitializationError) {
      return NextResponse.json(
        {
          error:
            "The database is not reachable right now. Check DATABASE_URL and that the DB server is running.",
        },
        { status: 500 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          error:
            "RESEND_API_KEY is missing, so the quiz email cannot be sent yet.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? error.message
            : "Failed to submit quiz.",
      },
      { status: 500 },
    );
  }
}
