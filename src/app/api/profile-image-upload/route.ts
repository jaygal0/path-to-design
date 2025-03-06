import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Only JPG and PNG formats are allowed." },
        { status: 400 },
      );
    }

    // Validate file size (Max 2MB)
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File is too large. Maximum allowed size is 2MB." },
        { status: 400 },
      );
    }

    // Use the file's original name
    const filename = file.name;

    // Upload file to Vercel Blob
    const blob = await put(`/profiles/${filename}`, file, {
      access: "public",
    });

    return NextResponse.json({ success: true, url: blob.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Upload failed", details: error },
      { status: 500 },
    );
  }
}
