import { NextResponse } from "next/server";

// Cloud name is public (it appears in every delivered image URL), so a
// fallback is fine. The API key and secret must never be hardcoded or shipped
// to the client — they are read from server-only environment variables.
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME ?? "dayayd4lv";
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

export async function GET() {
  if (!API_KEY || !API_SECRET) {
    console.error(
      "Cloudinary credentials are not configured (CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET)."
    );
    return NextResponse.json(
      { error: "Cloudinary is not configured on the server." },
      { status: 500 }
    );
  }

  try {
    const authString = Buffer.from(`${API_KEY}:${API_SECRET}`).toString(
      "base64"
    );

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image?type=upload&max_results=500`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${authString}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      // Avoid leaking upstream error details to the client.
      console.error(
        `Cloudinary API error: ${response.status} ${response.statusText}`,
        data
      );
      return NextResponse.json(
        { error: "Failed to fetch images from Cloudinary." },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Cloudinary API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch from Cloudinary." },
      { status: 500 }
    );
  }
}
