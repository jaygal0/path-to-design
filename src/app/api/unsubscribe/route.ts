import { NextResponse } from "next/server";

import prisma from "@/lib/db";
import { sendUnsubscribeNotificationEmail } from "@/lib/email/sendUnsubscribeNotificationEmail";

function getEmailFromRequest(request: Request) {
  const url = new URL(request.url);
  return url.searchParams.get("email")?.trim().toLowerCase();
}

async function unsubscribeEmail(email: string) {
  await prisma.subscriber.update({
    where: { email },
    data: { status: "unsubscribed" },
  });
}

async function notifyUnsubscribe(email: string) {
  try {
    await sendUnsubscribeNotificationEmail({ email });
  } catch (error) {
    // The unsubscribe should still succeed even if the internal notification
    // fails, so we log this separately instead of failing the request.
    console.error("Unsubscribe notification failed:", error);
  }
}

export async function GET(request: Request) {
  try {
    const email = getEmailFromRequest(request);

    if (!email) {
      return NextResponse.json({ error: "Missing email." }, { status: 400 });
    }

    await unsubscribeEmail(email);
    await notifyUnsubscribe(email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unsubscribe failed:", error);
    return NextResponse.json(
      { error: "Failed to unsubscribe." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = body.email?.trim().toLowerCase();

    if (!email) {
      return NextResponse.json({ error: "Missing email." }, { status: 400 });
    }

    await unsubscribeEmail(email);
    await notifyUnsubscribe(email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unsubscribe failed:", error);
    return NextResponse.json(
      { error: "Failed to unsubscribe." },
      { status: 500 },
    );
  }
}
