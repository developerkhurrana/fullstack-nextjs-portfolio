import { NextResponse } from "next/server";

const cloudinaryConfig = {
  cloudName: "dayayd4lv",
  apiKey: "376526173972156",
  apiSecret: "7uCF6SUCRSbI4A8MdEdDnCy_wXo",
};

export async function GET() {
  try {
    const authString = Buffer.from(
      `${cloudinaryConfig.apiKey}:${cloudinaryConfig.apiSecret}`
    ).toString("base64");

    const url = `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/resources/image?type=upload&max_results=500`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${authString}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return new NextResponse(
        JSON.stringify({
          error: `Cloudinary API error: ${response.status} ${response.statusText}`,
          details: data,
        }),
        {
          status: response.status,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Cloudinary API error:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Failed to fetch from Cloudinary",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
