import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    // Send email to the user
    await resend.emails.send({
      from: "Path to Design <no-reply@transactional.pathtodesign.com>", // Use a verified domain email
      to: email,
      subject: "Thank You for Your Submission!",
      html: `<p>Hi ${firstName},</p>
             <p>Thank you for sharing your path to design!</p>
             <p>We will review your submission and get back to you as soon as possible.</p>
             <p>Speak soon,</p>
             <p>Joshua from Path to Design</p>`,
    });

    // Send email notification to yourself
    await resend.emails.send({
      from: "Path to Design <no-reply@transactional.pathtodesign.com>",
      to: process.env.ADMIN_EMAIL!,
      subject: "New Form Submission",
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(
      JSON.stringify({ message: "Emails sent successfully!" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Email sending failed:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
    });
  }
}
