// Only the cloud name is needed on the client — it is public and already
// appears in every delivered image URL. The API key and secret live server-side
// only (see app/api/cloudinary/route.ts) and must never be imported here.
const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "dayayd4lv";

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  url: string;
}

export async function getAllImages() {
  try {
    const response = await fetch("/api/cloudinary");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch images");
    }

    if (!data.resources || !Array.isArray(data.resources)) {
      throw new Error("Invalid response format");
    }

    return data.resources.map((resource: CloudinaryResource) => ({
      url: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_600,q_auto,f_auto/${resource.public_id}`,
      public_id: resource.public_id,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
